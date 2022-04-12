<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id('admin_id');
            $table->timestamps();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            // $table->bigInteger('user_id')->unsigned();
            // $table->bigInteger('post_id')->unsigned();
            // $table->foreign('user_id')->references('id')->on('users');
            // $table->foreign('post_id')->references('id')->on('posts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
