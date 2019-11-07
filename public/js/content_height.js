$(function(){
    var winh = $(window).height();
	var hesdh = $('.header').height();
	var footh = $('.footer').height();
	var winw = $(window).width();
	$('.content').css('height',winh-hesdh-footh);
});