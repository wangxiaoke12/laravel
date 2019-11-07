(function ($) {
	$.extend({
		tipsBox: function (options) {
			options = $.extend({
				obj: null,  //jq对象，要在那个html标签上显示
				str: "+1",  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
				startSize: "12px",  //动画开始的文字大小
				endSize: "30px",    //动画结束的文字大小
				interval: 600,  //动画时间间隔
				color: "red",    //文字颜色
				callback: function () { }    //回调函数
			}, options);
			$("body").append("<span class='num'>" + options.str + "</span>");
			var box = $(".num");
			var left = options.obj.offset().left;
			var top = options.obj.offset().top - options.obj.height();
			box.css({
				"position": "absolute",
				"left": left + "px",
				"top": top + "px",
				"z-index": 9999,
				"font-size": options.startSize,
				"line-height": options.endSize,
				"color": options.color
			});
			box.animate({
				"font-size": options.endSize,
				"opacity": "0",
				"top": top - parseInt(options.endSize) + "px"
			}, options.interval, function () {
				box.remove();
				options.callback();
			});
		}
	});
})(jQuery);
  
function niceIn(prop){
	prop.find('i').addClass('niceIn');
	setTimeout(function(){
		prop.find('i').removeClass('niceIn');	
	},1000);		
}
$(function () {
	var kai=1;
	$("body").on("click",'.zan',function(){
		if(kai!=1){
			return false;
		}
		kai=2;
		setTimeout(function(){
			kai=1;
		},100)
		if ($(this).hasClass('pk_dead')) { // 话题pk评论点赞隔离
			return false;
		}else if($(this).hasClass('zan_after')){
			tishi('你已经赞过啦')
			return false;
		}else{
			
			
			$.tipsBox({
			obj: $(this),
			str: "+1",
			callback: function () {
				
				}
			});
			niceIn($(this));
			$(this).addClass('zan_after');
		}
	})
});