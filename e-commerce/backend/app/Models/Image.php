<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $table = 'images';
    protected $primaryKey = 'id_image';
    
    protected $fillable = [
        'nom_image',
        'url_image',
        'is_principale',
        'id_produit'
    ];
    
    protected $casts = [
        'is_principale' => 'boolean',
    ];

    // Relation avec le produit
    public function produit()
    {
        return $this->belongsTo(Produit::class, 'id_produit');
    }
    
    // Obtenir l'URL complète de l'image
    public function getUrlCompleteAttribute()
    {
        // Si l'URL commence par http, c'est déjà une URL complète
        if (filter_var($this->url_image, FILTER_VALIDATE_URL)) {
            return $this->url_image;
        }
        
        // Sinon, on considère que c'est un chemin relatif au stockage
        return asset('storage/' . $this->url_image);
    }
}