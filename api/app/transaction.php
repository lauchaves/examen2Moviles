<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

// Creates transaction model

class transaction extends Model
{
    //
    
    public $timestamps = false;
    protected $table = 'transaction';
}
