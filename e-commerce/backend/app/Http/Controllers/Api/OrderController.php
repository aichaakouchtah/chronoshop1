<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Validator;
// Removed unused imports: Auth, Product, OrderItem, DB

class OrderController extends Controller
{
    // Removed index() method as it's no longer needed for public API

    /**
     * Store a newly created order in storage (publicly accessible).
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Removed authentication check

        $validator = Validator::make($request->all(), [
            // Updated validation rules as per Cahier-charge
            'nom_client' => 'required|string|max:255',
            'telephone' => 'required|string|max:20', // Adjust max length as needed
            // Add confirmation rule if needed: 'telephone_confirmation' => 'required|same:telephone',
            'adresse' => 'required|string|max:500',
            // Removed validation for items, total_amount, addresses
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // --- Simplified Order Creation Logic --- 
        try {
            // Removed transaction and item processing logic

            // Create the Order record using validated data
            $order = Order::create([
                'nom_client' => $request->nom_client,
                'telephone' => $request->telephone,
                'adresse' => $request->adresse,
                'statut' => 'en attente', // Default status as per Cahier-charge
                // 'date_commande' is handled by the database default or timestamps
            ]);

            // Removed item creation logic

            // Removed payment processing placeholder

            // Removed transaction commit

            // --- WhatsApp Bot Integration Placeholder --- 
            // TODO: Implement WhatsApp bot notification logic here
            // Example: SendWhatsAppMessage::dispatch($order);

            return response()->json([
                'message' => 'Commande créée avec succès.',
                'order' => $order
            ], 201);

        } catch (\Exception $e) {
            // Removed transaction rollback
            // Log the error for debugging
            // Log::error('Order creation failed: ' . $e->getMessage());
            return response()->json(['message' => 'La création de la commande a échoué.'], 500);
        }
    }

    // Removed show() method as it's no longer needed for public API

    // Removed update() method as it's no longer needed for public API

    // Removed destroy() method as it's no longer needed for public API
}
