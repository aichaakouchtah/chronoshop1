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
        Schema::create('commande', function (Blueprint $table) {
            $table->id('id_commande');
            $table->string('nom_client', 100);
            $table->string('phone', 20);
            $table->text('adress');
            $table->timestamp('date_commande')->useCurrent();
            $table->enum('statue', ['en attente', 'confirmée', 'expédiée', 'livrée', 'annulée'])->default('en attente');
            $table->foreignId('id_produit')->constrained('produit', 'id_produit');
            $table->integer('quantite')->default(1);
            $table->foreignId('id_admin')->nullable()->constrained('admin', 'id_admin');
            $table->text('note')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('commande');
    }
};