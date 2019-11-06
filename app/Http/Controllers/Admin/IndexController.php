<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
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
