<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/{id?}', 'IndexController@index')->where(['id'=>'[0-9]']);

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
