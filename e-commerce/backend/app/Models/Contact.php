<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'contact';
    protected $primaryKey = 'id_contact';
    
    // Pas de timestamps dans la table contact
    public $timestamps = false;
    
    protected $fillable = [
        'nom_contact',
        'email',
        'sujet',
        'message',
        'date',
        'statut',
        'id_admin'
    ];
    
    protected $dates = [
        'date'
    ];
    
    // Valeurs permises pour le statut
    public const STATUT_NON_LU = 'non lu';
    public const STATUT_LU = 'lu';
    public const STATUT_REPONDU = 'répondu';
    
    // Relation avec l'admin
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'id_admin');
    }
}