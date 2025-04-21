<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Produit;
use App\Models\Categorie;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    /**
     * Afficher une liste de produits
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $query = Produit::with(['images', 'categories']);
        
        // Filtrer par catégorie
        if ($request->has('categorie')) {
            $query->whereHas('categories', function($q) use ($request) {
                $q->where('id_categorie', $request->categorie);
            });
        }
        
        // Recherche par nom
        if ($request->has('search')) {
            $query->where('nom', 'like', '%' . $request->search . '%');
        }
        
        // Produits les plus vendus
        if ($request->has('top_ventes') && $request->top_ventes) {
            $query->whereHas('categories', function($q) {
                $q->where('nom_categorie', 'Produits les plus vendus');
            });
        }
        
        // Paginer les résultats (12 par page)
        $produits = $query->paginate(12);
        
        // Transformer la réponse pour inclure l'URL complète des images
        $produits->getCollection()->transform(function ($produit) {
            $produit->images->transform(function ($image) {
                $image->url_image = $image->url_complete;
                return $image;
            });
            return $produit;
        });
        
        return response()->json($produits);
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
     * Afficher les produits d'une catégorie
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function byCategory($id)
    {
        $categorie = Categorie::findOrFail($id);
        $produits = $categorie->produits()->with('images')->paginate(12);
        
        // Transformer la réponse pour inclure l'URL complète des images
        $produits->getCollection()->transform(function ($produit) {
            $produit->images->transform(function ($image) {
                $image->url_image = $image->url_complete;
                return $image;
            });
            return $produit;
        });
        
        return response()->json([
            'categorie' => $categorie,
            'produits' => $produits
        ]);
    }
}