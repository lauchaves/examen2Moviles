<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Transaction ;

class TransactionController extends Controller
{
    //
        $Transaction = Transaction::all();
    	return response()->json($Transaction);
}
