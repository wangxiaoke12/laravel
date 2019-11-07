//TAB切换
function mbtab(tabli,tabcontent,box){
    var $li_tab = $(tabli);
    $li_tab.click(function(){
    	var $this = $(this);
    	var $ul_tab =$this.parents().children(tabcontent).children(box);
        var $t = $this.index();
        $this.siblings().removeClass();
        $this.addClass('active');
        $ul_tab.hide();
        $ul_tab.eq($t).show();
    })
};



//右侧精彩评论滚动


//评论点击编辑框
$(function(){
    $('.text').click(function(){
        $('.comment_li_reply_form').hide();
        $(this).parent().show();
        $('.comment_li_reply_form').css('height','40px');
        $('.text').css({'height':'20px','min-height':'20px','max-height':'20px'});
        $(this).parent().css('height','auto')
        $(this).css({'height':'98px','min-height':'98px','max-height':'98px'})
    }); 
});
//编辑框显示
$(function(){
    $('.button_reply').click(function(){
    var replyf = $(this).parents().children('.comment_li_reply_form');
    if(replyf.css('display')=='none'){
        $('.comment_li_reply_form').hide();
        replyf.show();
    }else{
        if (replyf.css('display')='block') {
        } else {
            replyf.hide();
        }
    }
    });
});


//个人信息框
$(function(){
    $('.k_active').mouseover(function(){
        $(this).parent().find('.k_box').show();
    });
    $('.sign').mouseleave(function(){
        $(this).parent().find('.k_box').hide();
    });
})

