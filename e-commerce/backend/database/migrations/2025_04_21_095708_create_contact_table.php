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
        Schema::create('contact', function (Blueprint $table) {
            $table->id('id_contact');
            $table->string('nom_contact', 100);
            $table->string('email', 100);
            $table->string('sujet', 255);
            $table->text('message');
            $table->timestamp('date')->useCurrent();
            $table->enum('statut', ['non lu', 'lu', 'répondu'])->default('non lu');
            $table->foreignId('id_admin')->nullable()->constrained('admin', 'id_admin');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contact');
    }
};