//tab切换
// $(document).ready(function(){
	
	$li_tab = $('.tab li a');
    $line = $('<div class="line"></div>').appendTo($li_tab);
	$('.tab').children('.active').find($line).width('100%');
	var tabsSwiper = new Swiper('.tab_swiper', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween : 20,
		speed : 500,
		autoHeight: true, // 高度随内容变化
		
		on: {
		    slideChangeTransitionStart: function(){
			    $(".tab .active").removeClass('active');
				$(".tab li").eq(tabsSwiper.activeIndex).addClass('active');
				$('.tab li').find('.line').width(0);
				$('.active').find('.line').animate({'width':'100%'}, 'fast');
				
		    },
		    slideChangeTransitionEnd:function(){
		    	// console.log(11);
		    	// console.log($(".swiper-wrapper").height());
		    	// $(".pe_list").css('height',$(".swiper-wrapper").height());
		    },
		},
		observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
	});
	$(".tab li").on('click', function(e) {
		console.log('aaa');
		e.preventDefault()
		$(".tab .active").removeClass('active');
		$(this).addClass('active');
		tabsSwiper.slideTo($(this).index());

		
		// if($(this).index()==0){
		// 	var height = $(".swiper-slide").eq(0).css('height');
		// 	console.log(height);
		// 	$(".pe_list").css('height',$(".swiper-slide").eq(0).css('height'));
		// }else if($(this).index()==1){
		// 	var height = $(".swiper-slide").eq(1).css('height');
		// 	console.log(height);
		// 	$(".pe_list").css('height',$(".swiper-slide").eq(1).css('height'));
		// 	$(".my_content").css('height',);
		// }else{
		// 	var height = $(".swiper-slide").eq(0).css('height');
		// 	console.log(height);
		// 	$(".pe_list").css('height',$(".swiper-slide").eq(0).css('height'));
		// }

		$('.tab').find('.line').width(0);
        $(this).find($line).animate({'width':'100%'}, 'fast');
        console.log($(".swiper-wrapper").height());
	});

	
	$(".tab li").click(function(e) {
		e.preventDefault();
	});
// 给内容复制固定高度，
function init_content_height(){
	var t_height = document.body.clientHeight;
	var h_height = $(".search_head").first().height();
	var b_height = t_height-h_height;

	$(".my_content").css('height',b_height);
}
	
// });