<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*

Creates the routes

*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('users','usersController');

Route::post('/login','usersController@login');

Route::post('createTransaction', 'transactionCtrl@createTransaction');

Route::put('editTransaction/{id}', 'transactionCtrl@editTransaction');

Route::put('editStatus/{id}', 'transactionCtrl@editStatusTransaction');

Route::get('getTransaction/{user}', 'transactionCtrl@obtenerTransaction');

