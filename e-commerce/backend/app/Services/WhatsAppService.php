<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class WhatsAppService
{
    protected $client;
    protected $apiKey;
    protected $phoneNumber;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.whatsapp.com/v1/',
            'headers' => [
                'Authorization' => 'Bearer ' . config('services.whatsapp.api_key'),
                'Accept' => 'application/json',
            ]
        ]);

        $this->apiKey = config('services.whatsapp.api_key');
        $this->phoneNumber = config('services.whatsapp.phone_number');
    }

    public function sendOrderReport($userPhone, $message)
    {
        try {
            $response = $this->client->post('messages', [
                'json' => [
                    'to' => $this->formatPhoneNumber($userPhone),
                    'from' => $this->phoneNumber,
                    'body' => $message
                ]
            ]);

            Log::info('Message WhatsApp envoyé à ' . $userPhone);
            return json_decode($response->getBody(), true);

        } catch (\Exception $e) {
            Log::error('Erreur envoi WhatsApp: ' . $e->getMessage());
            return false;
        }
    }

    private function formatPhoneNumber($phone)
    {
        if (!preg_match('/^\+221\d{9}$/', $phone)) {
            throw new \InvalidArgumentException('Format téléphone invalide');
        }
        return $phone;
    }
}