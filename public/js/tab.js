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
		},
		observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
	});
	$(".tab li").on('click', function(e) {
		e.preventDefault()
		$(".tab .active").removeClass('active');
		$(this).addClass('active');
		tabsSwiper.slideTo($(this).index());
		$(".teee").hide();
		if($(this).index()==0){
			$(".one").show();
		}else if($(this).index()==1){
			$(".twe").show();
		}else{
			$(".three").show();
		}
		$('.tab').find('.line').width(0);
        $(this).find($line).animate({'width':'100%'}, 'fast');
	});

	
	$(".tab li").click(function(e) {
		e.preventDefault();
	});

	
// });