<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $primaryKey = 'id_categorie';
    
    protected $fillable = [
        'nom_categorie',
        'description',
        'icon'
    ];

    // Relation avec les produits
    public function produits()
    {
        return $this->belongsToMany(Produit::class, 'produit_categories', 'id_categorie', 'id_produit');
    }
    
    // Obtenir le nombre de produits dans cette catégorie
    public function getNombreProduitsAttribute()
    {
        return $this->produits()->count();
    }
}