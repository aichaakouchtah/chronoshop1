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
        Schema::create('parametres_site', function (Blueprint $table) {
            $table->id();
            $table->string('nom_site', 100);
            $table->string('logo', 255)->nullable();
            $table->text('description')->nullable();
            $table->string('email_contact', 100)->nullable();
            $table->string('telephone', 20)->nullable();
            $table->text('adresse')->nullable();
            $table->string('facebook', 255)->nullable();
            $table->string('instagram', 255)->nullable();
            $table->string('whatsapp', 255)->nullable();
            $table->text('conditions_utilisation')->nullable();
            $table->text('politique_confidentialite')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parametres_site');
    }
};