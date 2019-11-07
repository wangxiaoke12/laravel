$(function() {
	$('.left').on('click', function() {
		var wh = $('.slide-wrapper').height();
		$('.slide-mask').css('height', '100%').toggle(500);
		$('.slide-wrapper').toggle(500);

	});
	$('div.slide-mask').on('click', function() {
		$('.slide-mask').hide(500);
		$('.slide-wrapper').hide(500);
	});
	$('.type_list').on('click', function() {
		$('.left_second').toggle('fast');
		
	});
});
