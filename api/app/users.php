<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

header("Access-Control-Allow-Origin: *");

// Create users models
class users extends Model
{
    public $timestamps = false;
    protected $table = 'users';
}
