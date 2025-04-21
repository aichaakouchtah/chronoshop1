<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;

    protected $table = 'produit';
    protected $primaryKey = 'id_produit';
    
    protected $fillable = [
        'nom',
        'prix_ancien',
        'prix_actuel',
        'description',
        'stock',
        'id_admin'
    ];

    // Relations avec d'autres modèles
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'id_admin');
    }
    
    public function images()
    {
        return $this->hasMany(Image::class, 'id_produit');
    }
    
    public function categories()
    {
        return $this->belongsToMany(Categorie::class, 'produit_categories', 'id_produit', 'id_categorie');
    }
    
    public function commandes()
    {
        return $this->hasMany(Commande::class, 'id_produit');
    }
    
    public function favoris()
    {
        return $this->hasMany(Favori::class, 'id_produit');
    }
    
    // Fonction pour obtenir l'image principale
    public function getImagePrincipale()
    {
        return $this->images()->where('is_principale', true)->first();
    }
}