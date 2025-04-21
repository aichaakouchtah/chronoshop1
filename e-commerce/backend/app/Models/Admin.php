<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'admin';
    protected $primaryKey = 'id_admin';
    
    // Préciser si created_at et updated_at ne sont pas utilisés
    public $timestamps = false; 
    
    // Attributs qu'on peut assigner en masse
    protected $fillable = [
        'nom_admin',
        'email',
        'password',
    ];

    // Attributs à cacher (pour la sécurité)
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Relations avec d'autres modèles
    public function produits()
    {
        return $this->hasMany(Produit::class, 'id_admin');
    }
    
    public function commandes()
    {
        return $this->hasMany(Commande::class, 'id_admin');
    }
    
    public function contacts()
    {
        return $this->hasMany(Contact::class, 'id_admin');
    }
}