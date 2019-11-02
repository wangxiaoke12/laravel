<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    //
    public function index(Request $request)
    {
    	//var_dump($value);
    	//$request->session()->put('key','wang');
    	$value = $request->session()->pull('key', 'default');
    	//$value = $request->session()->get('key', 'default');
    	var_dump($value);die;
    	return view('welcome');

    }
}
