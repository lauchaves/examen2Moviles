<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //        
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('userEmail');
            $table->string('type');
            $table->string('rode');
            $table->string('status');
            $table->string('date');
            $table->string('disable');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('transactions');
    }
}
