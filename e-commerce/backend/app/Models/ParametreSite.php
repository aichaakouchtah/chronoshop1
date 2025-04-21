<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParametreSite extends Model
{
    use HasFactory;

    protected $table = 'parametres_site';
    
    protected $fillable = [
        'nom_site',
        'logo',
        'description',
        'email_contact',
        'telephone',
        'adresse',
        'facebook',
        'instagram',
        'whatsapp',
        'conditions_utilisation',
        'politique_confidentialite'
    ];
    
    // Obtenir l'URL complète du logo
    public function getLogoUrlAttribute()
    {
        if (!$this->logo) {
            return null;
        }
        
        // Si l'URL commence par http, c'est déjà une URL complète
        if (filter_var($this->logo, FILTER_VALIDATE_URL)) {
            return $this->logo;
        }
        
        // Sinon, on considère que c'est un chemin relatif au stockage
        return asset('storage/' . $this->logo);
    }
    
    // Singleton pour accéder facilement aux paramètres
    public static function getInstance()
    {
        $instance = static::first();
        
        if (!$instance) {
            // Créer une instance par défaut si aucune n'existe
            $instance = static::create([
                'nom_site' => 'Chronoshop',
                'description' => 'Site e-commerce de produits naturels'
            ]);
        }
        
        return $instance;
    }
}