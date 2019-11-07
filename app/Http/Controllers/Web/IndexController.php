<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function __construct()
    {
        $this->middleware('webauth');
    }
    //
    public function index(Request $request)
    {
    	//var_dump($value);
    	//$request->session()->put('key','wang');
    	//$value = $request->session()->pull('key', 'default');
    	//$value = $request->session()->get('key', 'default');
    	//var_dump($value);die;
    	return view('web.index');

    }
}
