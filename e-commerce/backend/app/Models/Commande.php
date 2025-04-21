<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;

    protected $table = 'commande';
    protected $primaryKey = 'id_commande';
    
    // Pas de timestamps dans la table commande
    public $timestamps = false;
    
    protected $fillable = [
        'nom_client',
        'phone',
        'adress',
        'date_commande',
        'statue',
        'id_produit',
        'quantite',
        'id_admin',
        'note'
    ];
    
    protected $dates = [
        'date_commande'
    ];
    
    // Valeurs permises pour le statut
    public const STATUT_EN_ATTENTE = 'en attente';
    public const STATUT_CONFIRMEE = 'confirmée';
    public const STATUT_EXPEDIEE = 'expédiée';
    public const STATUT_LIVREE = 'livrée';
    public const STATUT_ANNULEE = 'annulée';
    
    // Relation avec le produit
    public function produit()
    {
        return $this->belongsTo(Produit::class, 'id_produit');
    }
    
    // Relation avec l'admin
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'id_admin');
    }
    
    // Obtenir le montant total de la commande
    public function getMontantTotalAttribute()
    {
        if ($this->produit) {
            return $this->produit->prix_actuel * $this->quantite;
        }
        return 0;
    }
}