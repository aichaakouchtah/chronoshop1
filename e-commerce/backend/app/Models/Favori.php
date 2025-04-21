<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favori extends Model
{
    use HasFactory;

    protected $table = 'favoris';
    protected $primaryKey = 'id_favori';
    
    // Pas de timestamps dans la table favoris
    public $timestamps = false;
    
    protected $fillable = [
        'id_produit',
        'session_id',
        'date_ajout'
    ];
    
    protected $dates = [
        'date_ajout'
    ];
    
    // Relation avec le produit
    public function produit()
    {
        return $this->belongsTo(Produit::class, 'id_produit');
    }
    
    // Vérifier si un produit est dans les favoris d'une session
    public static function estFavori($id_produit, $session_id)
    {
        return static::where('id_produit', $id_produit)
            ->where('session_id', $session_id)
            ->exists();
    }
}