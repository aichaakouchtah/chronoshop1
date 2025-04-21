<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produit', function (Blueprint $table) {
            $table->id('id_produit');
            $table->string('nom', 100);
            $table->decimal('prix_ancien', 10, 2)->nullable();
            $table->decimal('prix_actuel', 10, 2);
            $table->text('description')->nullable();
            $table->integer('stock')->default(0);
            $table->foreignId('id_admin')->nullable()->constrained('admin', 'id_admin');
            $table->timestamps(); // created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produit');
    }
};