<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Services\WhatsAppService;

class OrderController extends Controller
{
    public function update(Request $request, Order $order)
    {
        $validated = $request->validate([
            'status' => 'required|string'
        ]);

        $previousStatus = $order->status;
        $order->update($validated);

        if ($order->wasChanged('status')) {
            try {
                $whatsappService = new WhatsAppService();
                $message = "Votre commande #{$order->id} a été mise à jour :\n";
                $message .= "Nouveau statut : {$order->status}\n";
                $message .= "Merci pour votre confiance !";

                $whatsappService->sendOrderReport($order->phone_number, $message);
            } catch (\Exception $e) {
                \Log::error('Échec envoi WhatsApp : ' . $e->getMessage());
            }
        }

        return redirect()->route('orders.index');
    }
}