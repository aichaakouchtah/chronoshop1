<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Enregistrer un nouveau message de contact
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom_contact' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'sujet' => 'required|string|max:255',
            'message' => 'required|string'
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        $contact = Contact::create([
            'nom_contact' => $request->nom_contact,
            'email' => $request->email,
            'sujet' => $request->sujet,
            'message' => $request->message,
            'date' => now(),
            'statut' => Contact::STATUT_NON_LU
        ]);
        
        return response()->json([
            'message' => 'Message envoyé avec succès',
            'contact' => $contact
        ], 201);
    }
}