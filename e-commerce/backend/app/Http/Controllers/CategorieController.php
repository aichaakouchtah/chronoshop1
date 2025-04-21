<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Afficher la liste des catégories
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = Categorie::withCount('produits')->get();
        return response()->json($categories);
    }
    
    /**
     * Afficher une catégorie spécifique avec ses produits
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $categorie = Categorie::with(['produits' => function($query) {
            $query->with('images');
        }])->findOrFail($id);
        
        // Transformer la réponse pour inclure l'URL complète des images
        foreach ($categorie->produits as $produit) {
            $produit->images->transform(function ($image) {
                $image->url_image = $image->url_complete;
                return $image;
            });
        }
        
        return response()->json($categorie);
    }
}