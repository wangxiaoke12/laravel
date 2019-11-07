/*iframe*/
var num=0;
var oUl=$("#min_title_list");
$(document).on("click","#min_title_list li",function(){
	var bStopIndex=$(this).index();
	var iframe_box=$("#iframe_box");
	$("#min_title_list li").removeClass("active").eq(bStopIndex).addClass("active");
	iframe_box.find(".show_iframe").hide().removeClass('show_i').eq(bStopIndex).show().addClass('show_i');
});
//叉号关闭标签
$(document).on("click","#min_title_list li em",function(){
	var aCloseIndex=$(this).parents("li").index();
	$(this).parent().remove();
	$('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();	
	num==0?num=0:num--;
	tabNavallwidth();
});

$('#js-tabNav-next').click(function(){
	num==oUl.find('li').length-1?num=oUl.find('li').length-1:num++;
	toNavPos();
});
$('#js-tabNav-prev').click(function(){
	num==0?num=0:num--;
	toNavPos();
});

function toNavPos(){
	oUl.stop().animate({'left':-num*100},100);
}

function tabNavallwidth(){
	var topWindow=$(window.parent.document);
	var taballwidth=0,
	$tabNav = topWindow.find(".breadcrumb"),
	$tabNavWp = topWindow.find(".breadcrumbs"),
	$tabNavitem = topWindow.find(".breadcrumb li"),
	$tabNavmore =$(".Hui-tabNav-more");
	if (!$tabNav[0]){return}
	$tabNavitem.each(function(index, element) {
	taballwidth+=Number(parseFloat($(this).width()+60))});
	$tabNav.width(taballwidth+25);
	var w = $tabNavWp.width();
	if(taballwidth+25>w){
	  	$tabNavmore.show()}
	else{
	  	$tabNavmore.hide();
	  	$tabNav.css({left:0})
	}
}

$(function(){
	$("#menu_list").on("click","li a, .shop_index a",function(){
		if($(this).attr('name')){
			var bStop=false;
			var bStopIndex=0;
			var _href=$(this).attr('name');
			var _titleName=$(this).text();
			var topWindow=$(window.parent.document);
			var show_navLi=topWindow.find("#min_title_list li");
			show_navLi.each(function() {
				if($(this).find('span').attr("data-href")==_href){
					bStop=true;
					bStopIndex=show_navLi.index($(this));
					return false;
				}
			});
			if(!bStop){
				creatIframe(_href,_titleName);
				min_titleList();
			}
			else{
				show_navLi.removeClass("active").eq(bStopIndex).addClass("active");
				var iframe_box=topWindow.find("#iframe_box");
				iframe_box.find(".show_iframe").hide().eq(bStopIndex).show().find("iframe").attr("src",_href);
			}
		}
	});
	function min_titleList(){
		var topWindow=$(window.parent.document);
		var show_nav=topWindow.find("#min_title_list");
		var aLi=show_nav.find("li");
	};
	function creatIframe(href,titleName){
		var topWindow=$(window.parent.document);
		var show_nav=topWindow.find('#min_title_list');
		show_nav.find('li').removeClass("active");
		var iframe_box=topWindow.find('#iframe_box');
		show_nav.append('<li class="active"><span data-href="'+href+'">'+titleName+'</span><em class="close_icon"></em></li>');
		tabNavallwidth();
		var iframeBox=iframe_box.find('.show_iframe');
		iframeBox.hide().removeClass('show_i');
		iframe_box.append('<iframe frameborder="0" src='+href+' class="show_iframe show_i"></iframe>');
		var showBox=iframe_box.find('.show_iframe:visible');
		/*showBox.find('iframe').attr("src",href).load(function(){
			showBox.find('.loading').hide();
		});*/
	}

});

//全屏显示
(function ($) {
    $.learuntab = {
   requestFullScreen: function () {
        var de = document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
    },
	 exitFullscreen: function () {
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }, 
		
	init:function () {				 
	     $('.fullscreen').on('click', function () {
            if (!$(this).attr('fullscreen')) {
                $(this).attr('fullscreen', 'true');
                $.learuntab.requestFullScreen();
            } else {
                $(this).removeAttr('fullscreen')
                $.learuntab.exitFullscreen();
            }
        });
	 },
	}  
     $(function () {
        $.learuntab.init();
    });
})(jQuery);
//刷新当前页面
$(document).on("click","#dropdown_menu .tabReload", function () {       		
	var aFreshUrl = $('.breadcrumb').find('.active span').attr('data-href');
	$("#iframe_box").find('iframe[src="' + aFreshUrl + '"]').attr('src',aFreshUrl);			  	   
});
//关闭当前页面
$(document).on("click","#dropdown_menu .tabCloseCurrent", function () {       		
	var aCloseIndex=$("#breadcrumbs .breadcrumb>li.active").index();//获取当前栏目为第几个
	$("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li.active').remove();//关闭当前栏目
	$("#iframe_box").find('.show_iframe').eq(aCloseIndex).remove();//关闭当前页iframe
	$("#breadcrumbs").find(' .breadcrumb_style .breadcrumb li:last').addClass("active")  //删除当前栏目并赋值给最后一个样式class
	$("#iframe_box").find('.show_iframe:last').show();		 
	num==0?num=0:num--;
	tabNavallwidth();										  	   
});
//关闭打开的栏目以外的栏目
$(document).on("click","#dropdown_menu .tabCloseOther", function () {
	var aCloseIndex=$("#breadcrumbs .breadcrumb>li.active").index();
	$("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').not(".active ,.home").remove();//关闭打开栏目以外的栏目（除首页）  
	$("#iframe_box").find('.show_iframe').not(':eq(0),:eq('+aCloseIndex+')').remove();
	$("#iframe_box").find('.show_iframe:last').show();		
	num==0?num=0:num--;
	tabNavallwidth();  
});

//关闭全部栏目
$(document).on("click","#dropdown_menu .tabCloseAll", function () {  
	var $tabCloseAll=$("#breadcrumbs .breadcrumb li");
	var childlength = 0;
	if($tabCloseAll.not(":first").length){			
		for(var i=0; i<$tabCloseAll.not(":first").length; i++){ 
			var aCloseIndex=$tabCloseAll.index();							
			$("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').not(":first").remove();//关闭除首页以外的全部栏目
			$("#iframe_box").find('.show_iframe').not(":first").remove();//关闭闭除首页以外的全部iframe页		
			$("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').addClass("active")  
			$("#iframe_box").find('.show_iframe').css("display","block")			
			break;			
		}			 
	 	num==0?num=0:num--;
		tabNavallwidth();	
	}   													  	   
});

