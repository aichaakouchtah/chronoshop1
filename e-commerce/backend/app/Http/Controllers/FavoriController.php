<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FavoriController extends Controller
{
    /**
     * Obtenir la liste des favoris d'une session
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'session_id' => 'required|string'
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        $favoris = Favori::with(['produit' => function($query) {
            $query->with('images');
        }])->where('session_id', $request->session_id)->get();
        
        // Transformer la réponse pour inclure l'URL complète des images
        foreach ($favoris as $favori) {
            if ($favori->produit) {
                $favori->produit->images->transform(function ($image) {
                    $image->url_image = $image->url_complete;
                    return $image;
                });
            }
        }
        
        return response()->json($favoris);
    }
    
    /**
     * Ajouter un produit aux favoris
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_produit' => 'required|exists:produit,id_produit',
            'session_id' => 'required|string'
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        // Vérifier si le produit est déjà en favori
        $exists = Favori::where('id_produit', $request->id_produit)
            ->where('session_id', $request->session_id)
            ->exists();
            
        if ($exists) {
            return response()->json([
                'message' => 'Ce produit est déjà dans vos favoris'
            ], 422);
        }
        
        // Créer le favori
        $favori = Favori::create([
            'id_produit' => $request->id_produit,
            'session_id' => $request->session_id,
            'date_ajout' => now()
        ]);
        
        return response()->json([
            'message' => 'Produit ajouté aux favoris',
            'favori' => $favori
        ], 201);
    }
    
    /**
     * Supprimer un produit des favoris
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'session_id' => 'required|string'
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        $favori = Favori::where('id_produit', $id)
            ->where('session_id', $request->session_id)
            ->first();
            
        if (!$favori) {
            return response()->json([
                'message' => 'Favori non trouvé'
            ], 404);
        }
        
        $favori->delete();
        
        return response()->json([
            'message' => 'Produit retiré des favoris'
        ]);
    }
}