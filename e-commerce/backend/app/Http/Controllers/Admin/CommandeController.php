<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Commande;
use App\Services\WhatsAppService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommandeController extends Controller
{
    protected $whatsAppService;
    
    /**
     * Constructeur avec injection du service WhatsApp
     *
     * @param  \App\Services\WhatsAppService  $whatsAppService
     * @return void
     */
    public function __construct(WhatsAppService $whatsAppService)
    {
        $this->whatsAppService = $whatsAppService;
    }
    
    /**
     * Afficher la liste des commandes pour l'admin
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $commandes = Commande::with('produit')->orderBy('date_commande', 'desc')->get();
        return response()->json($commandes);
    }
    
    /**
     * Afficher une commande spécifique
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $commande = Commande::with('produit')->findOrFail($id);
        return response()->json($commande);
    }
    
    /**
     * Mettre à jour le statut d'une commande
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'statue' => 'required|in:en attente,confirmée,expédiée,livrée,annulée',
            'note' => 'nullable|string'
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        $commande = Commande::findOrFail($id);
        $statutPrecedent = $commande->statue;
        
        $commande->update([
            'statue' => $request->statue,
            'note' => $request->note,
            'id_admin' => $request->user()->id_admin
        ]);
        
        // Envoyer une notification WhatsApp si le statut a changé
        if ($statutPrecedent !== $request->statue) {
            try {
                $this->whatsAppService->sendOrderStatusUpdate($commande);
            } catch (\Exception $e) {
                // Log l'erreur mais ne pas échouer la mise à jour
                \Log::error('Erreur lors de l\'envoi de la notification WhatsApp: ' . $e->getMessage());
            }
        }
        
        // Charger la relation produit pour la réponse
        $commande->load('produit');
        
        return response()->json([
            'message' => 'Statut de commande mis à jour',
            'commande' => $commande
        ]);
    }
    
    /**
     * Supprimer une commande
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $commande = Commande::findOrFail($id);
        $commande->delete();
        
        return response()->json([