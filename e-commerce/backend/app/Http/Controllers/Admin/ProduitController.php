<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Produit;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProduitController extends Controller
{
    /**
     * Afficher la liste des produits pour l'admin
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $produits = Produit::with(['images', 'categories'])->get();
        
        // Transformer la réponse pour inclure l'URL complète des images
        $produits->transform(function ($produit) {
            $produit->images->transform(function ($image) {
                $image->url_image = $image->url_complete;
                return $image;
            });
            return $produit;
        });
        
        return response()->json($produits);
    }
    
    /**
     * Créer un nouveau produit
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:100',
            'prix_actuel' => 'required|numeric',
            'prix_ancien' => 'nullable|numeric',
            'description' => 'nullable|string',
            'stock' => 'required|integer',
            'categories' => 'required|array',
            'categories.*' => 'exists:categories,id_categorie',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg|max:2048'
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        // Créer le produit
        $produit = Produit::create([
            'nom' => $request->nom,
            'prix_actuel' => $request->prix_actuel,
            'prix_ancien' => $request->prix_ancien,
            'description' => $request->description,
            'stock' => $request->stock,
            'id_admin' => $request->user()->id_admin
        ]);
        
        // Associer les catégories
        $produit->categories()->attach($request->categories);
        
        // Traiter les images
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $key => $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('products', $fileName, 'public');
                
                $produit->images()->create([
                    'nom_image' => $fileName,
                    'url_image' => $filePath,
                    'is_principale' => $key === 0 // Premier fichier est l'image principale
                ]);
            }
        }
        
        // Charger les relations pour la réponse
        $produit->load(['images', 'categories']);
        
        // Transformer la réponse pour inclure l'URL complète des images
        $produit->images->transform(function ($image) {
            $image->url_image = $image->url_complete;
            return $image;
        });
        
        return response()->json([
            'message' => 'Produit créé avec succès',
            'produit' => $produit
        ], 201);
    }
    
    /**
     * Afficher un produit spécifique
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $produit = Produit::with(['images', 'categories'])->findOrFail($id);
        
        // Transformer la réponse pour inclure l'URL complète des images
        $produit->images->transform(function ($image) {
            $image->url_image = $image->url_complete;
            return $image;
        });
        
        return response()->json($produit);
    }
    
    /**
     * Mettre à jour un produit
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:100',
            'prix_actuel' => 'required|numeric',
            'prix_ancien' => 'nullable|numeric',
            'description' => 'nullable|string',
            'stock' => 'required|integer',
            'categories' => 'required|array',
            'categories.*' => 'exists:categories,id_categorie',
            'new_images' => 'nullable|array',
            'new_images.*' => 'image|mimes:jpeg,png,jpg|max:2048',
            'deleted_images' => 'nullable|array',
            'deleted_images.*' => 'exists:images,id_image'
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        $produit = Produit::findOrFail($id);
        
        // Mettre à jour les données du produit
        $produit->update([
            'nom' => $request->nom,
            'prix_actuel' => $request->prix_actuel,
            'prix_ancien' => $request->prix_ancien,
            'description' => $request->description,
            'stock' => $request->stock
        ]);
        
        // Mettre à jour les catégories
        $produit->categories()->sync($request->categories);
        
        // Supprimer les images sélectionnées
        if ($request->has('deleted_images')) {
            foreach ($request->deleted_images as $imageId) {
                $image = Image::find($imageId);
                if ($image) {
                    Storage::disk('public')->delete($image->url_image);
                    $image->delete();
                }
            }
        }
        
        // Ajouter de nouvelles images
        if ($request->hasFile('new_images')) {
            $hasMainImage = $produit->images()->where('is_principale', true)->exists();
            
            foreach ($request->file('new_images') as $key => $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('products', $fileName, 'public');
                
                $produit->images()->create([
                    'nom_image' => $fileName,
                    'url_image' => $filePath,
                    'is_principale' => !$hasMainImage && $key === 0 // Premier fichier est l'image principale seulement s'il n'y a pas d'image principale
                ]);
            }
        }
        
        // Charger les relations pour la réponse
        $produit->load(['images', 'categories']);
        
        // Transformer la réponse pour inclure l'URL complète des images
        $produit->images->transform(function ($image) {
            $image->url_image = $image->url_complete;
            return $image;
        });
        
        return response()->json([
            'message' => 'Produit mis à jour avec succès',
            'produit' => $produit
        ]);
    }
    
    /**
     * Supprimer un produit
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $produit = Produit::findOrFail($id);
        
        // Supprimer les images du stockage
        foreach ($produit->images as $image) {
            Storage::disk('public')->delete($image->url_image);
        }
        
        $produit->delete();
        
        return response()->json([
            'message' => 'Produit supprimé avec succès'
        ]);
    }
    
    /**
     * Définir l'image principale d'un produit
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $productId
     * @param  int  $imageId
     * @return \Illuminate\Http\JsonResponse
     */
    public function setMainImage(Request $request, $productId, $imageId)
    {
        $produit = Produit::findOrFail($productId);
        
        // Réinitialiser toutes les images comme non principales
        $produit->images()->update(['is_principale' => false]);
        
        // Définir la nouvelle image principale
        $image = $produit->images()->findOrFail($imageId);
        $image->update(['is_principale' => true]);
        
        return response()->json([
            'message' => 'Image principale définie avec succès'
        ]);
    }
}