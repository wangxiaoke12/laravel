<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>后台登录</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/comm.css">
    <link rel="stylesheet" type="text/css" href="/css/AdminLTE.min.css">
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/css/skins/_all-skins.min.css">
    <link rel="stylesheet" type="text/css" href="/css/sellerber.css">
    <script type="text/javascript" src="/js/adminlte.js" ></script>
    <script type="text/javascript" src="/js/demo.js" ></script>
    <script type="text/javascript" src="/js/admin.js" ></script>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div class="wrapper">
    <!-- 头部 -->
    @component('layouts.header')
                    
    @endcomponent
    <!-- /头部 -->
    @component('layouts.left')
                    
    @endcomponent

    <!-- 内容 -->
    
    @yield('content')
    
    <!-- /内容 -->      
    @component('layouts.sidebar')
                    
    @endcomponent
</div>
</body>
</html>

