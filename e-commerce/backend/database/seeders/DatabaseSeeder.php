<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Product::factory()->create([
            'nom' => 'Téléphone Portable',
            'description' => 'Smartphone haut de gamme',
            'prix' => 799.99,
            'image' => 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'actif' => true
        ]);

        \App\Models\Product::factory()->create([
            'nom' => 'Ordinateur Portable',
            'description' => 'PC portable performant',
            'prix' => 1299.99,
            'image' => 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'actif' => true
        ]);

        \App\Models\Product::factory()->create([
            'nom' => 'Casque Audio',
            'description' => 'Casque sans fil',
            'prix' => 199.99,
            'image' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'actif' => true
        ]);

        \App\Models\Product::factory()->create([
            'nom' => 'Montre Connectée',
            'description' => 'Montre intelligente',
            'prix' => 249.99,
            'image' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'actif' => true
        ]);

        \App\Models\Product::factory()->create([
            'nom' => 'Enceinte Bluetooth',
            'description' => 'Enceinte portable',
            'prix' => 129.99,
            'image' => 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'actif' => true
        ]);

        \App\Models\Product::factory()->create([
            'nom' => 'Tablette',
            'description' => 'Tablette tactile',
            'prix' => 349.99,
            'image' => 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'actif' => true
        ]);

        \App\Models\Product::factory()->create([
            'nom' => 'Chargeur Sans Fil',
            'description' => 'Chargeur rapide',
            'prix' => 49.99,
            'image' => 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'actif' => true
        ]);
    }
}
