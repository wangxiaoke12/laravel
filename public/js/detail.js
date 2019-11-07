//计算content高度
$(function(){
    var winh = $(window).height();
	var hesdh = $('.header').height();
	var footh = $('.footer').height();
	var winw = $(window).width();
	var head_chose = $('.header_select').height();
	if(footh == undefined){
		$('.content').css('height',winh-hesdh);
	}else{
		$('.content').css('height',winh-hesdh-footh);
	};
	$('.radio').css('height',winh-head_chose);
});

//引导关注微信公众号关闭
$('.yd_close').click(function(){
	$('.yd_box').hide();
})

// js的in_array
function in_array(search,array){
    for(var i in array){
        if(array[i]==search){
            return true;
        }
    }
    return false;
}
$('body').append('<div class="black_prompt">'+
			'<div class="prompt_jump">'+
				'<span class="prompt_text">'+
					'mess'+
				'</span>'+
			'</div>'+
		'</div>');
function tishi(mess){
	$('.prompt_text').text(mess);
	///$('.prompt_text').text(mess);
	$('.black_prompt').fadeIn(400).css('display','table').delay(1000).fadeOut(600);
}

$(".detail_banner").click(function(){
	window.location.href='/article/details.html?id=615734';
})
//详情页js
$(function(){
	$('.rafter_close,.rafter_get').click(function(){
		$('.reg_after').hide()
	})
//	排序按钮
	$('.sort_tit').click(function(){
		$('.reply_select').css('display','block')
	});
//	点击空白处排序隐藏
	$(document).mouseup(function(e){
		if($(e.target).parent('.sort_tit').length == 0){
			if($('.reply_select').is(':visible')){
				$('.reply_select').hide();
			}
		}
	});
//	详情页点赞
	/*$('.click_num').click(function(){
		$(this).toggleClass('click_after');
	});*/
//	分享
	$('.fs_btn').click(function(){
		$('.foot_share').css('display','block');
		$('html').addClass('noscroll');
	});
//	分享取消
	$('.fshare_q').click(function(){
		$('.foot_share').css('display','none');
		$('html').removeClass('noscroll');
	});
//	取消蒙版滚动
	$('.foot_share').on('touchmove', function(event) {
	    event.preventDefault();
	});

//  评论框显示
	$(".fa_btn").click(function() {
		$('.jump_reply').css('display','block');
		$(".first_rytea").trigger("click").focus();
		$('html').addClass('noscroll');
	});

    //回复评论位置调整
    $('body').on('click','.button_reply',function(){
    	$(".first_rytea").trigger("click").focus();   
    });
    $("body").on('click','.rybtn',function(){
     	$(".first_rytea").trigger("click").focus();    
    });
    //  点击匿名输入框获取焦点
    $('.detail_review .checkbox').click(function(){
     	$(".first_rytea").trigger("click").focus();   
    });
	var interval;
//    消息框获取焦点
    $('.first_rytea').focus(function(){
        
        $('.fs_btn').hide();
        //收藏按钮只显示一个
        $('.fsc_btn').hide(); //未收藏
        $('.fhd_btn').hide(); //已收藏
        $('.fsc_btn2').hide(); //未收藏
        $('.jump_btn').show();
        $('.first_review_chick').show();
        $(this).parent().addClass('btn_box_add');
    });   
//    消息框失去焦点
    $('.first_rytea').blur(function(){
        clearInterval(interval);
    });

    // 解决键盘弹出后挡表单的问题
    var u = navigator.userAgent, app = navigator.appVersion;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
        $('first_rytea').focus(function () {
          window.setTimeout('scrollBottom()', 500);
        });
    }
    function scrollBottom() {
        window.scrollTo(0, $('body').height());
    };

	$('.click_down').on('click',function(){
		$('.fs_btn').show();
        //收藏按钮只显示一个
        // $('.fsc_btn').show();  //未收藏
        // $('.fsc2_btn').hide();  //已收藏
        $('.fhd_btn').show();
        $('.jump_btn').hide();
        $('.first_review_chick').hide();
        $('.first_rytea').parent().removeClass('btn_box_add');
	});
	//	点击分享微信,朋友圈
	$('.fs_wx').click(function(){
		$('.share_way').show();
		$('.foot_share').hide();
	});
	$('.fs_pyq').click(function(){
		$('.share_way').show();
		$('.foot_share').hide();
	});
//	分享蒙版取消
	$('.share_mask').click(function(){
		$('.foot_share').hide();
		$(".detail_review").show();
	});
	$('.share_way').click(function(){
		$(this).hide();
		$(".detail_review").show();
	});
});
