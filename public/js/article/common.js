
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
//问答内容隐藏以及显示
$(function(){
    var text = $('#content_qa div.answer_content_body'); 
    var numheight = text.height(); 
    var num = text.html();

    if (numheight>0){
        var numlenght = num.length;

      if (numlenght>=170){
        var munhtml = num.substr(0,170);
        text.height('72').css('overflow','hidden');
        text.html(munhtml);
        $('.article_img , .article_bottom .up').hide();
        
      }else{
        
        $('.article_img ').show();
        $('#content_ellipsis , .article_bottom .up').hide();
        $('#content_qa').css('height','auto');
      }
     

  }
  $('#content_ellipsis').click(function(){          
    text.height(numheight);
        text.html(num);
        $('.article_img , .article_bottom .up').show();
        $('#content_ellipsis').hide();
        $('#content_qa').css('height','auto');
    })
    $('.article_bottom .up').click(function(){
      text.height('72').css('overflow','hidden');
      text.html(munhtml);
      $('.article_img , .article_bottom .up').hide();
      $('#content_ellipsis').show();
    })
    
});
//问答图片点击切换
$(function(){
    var $li_tab = $('.small li');
    var $ul_tab = $('.large li');     
    $li_tab.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li_tab.removeClass();
        $this.addClass('active');
        $ul_tab.css('display','none');
        $ul_tab.eq($t).css('display','block');
    })
});

//问答点击写评论 后光标停留在文本框
$(function(){
    $('.article_bottom .edit').click(function(){ 
        $('.article_comment_form').show();
        $("#textid").focus();
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


//判断问答列表中是否有讨论人员参加
$(function(){
    var participateh = $('.participate');
    participateh.each(function(i,e){
      if ($(e).html().length == 0) {
        $(this).next('.time').removeClass('time')
      }
    })
});

//点击【我要提问】弹出提问发布窗
$(function(){
  $('.but_f').click(function(){
    $('.release').show();
  });
  $('.but_b').click(function(){
    $('.release').hide();
  });
});

//问答发布标签选择功能
var arr={'form_label':true,'form_labelcon':false};
function changeStatus(obj,cl){  
    var a =$(obj).attr('data');
    var b =$(".form_tab input[value='"+a+"']");
    var c =$(obj).html();
    b.prop("checked",arr[cl]);
    $("."+cl+" ."+cl+"ck").append("<a href='javascript:void(0)' data='"+a+"'>"+c+"</a>");
    $(obj).remove();
}

//判断吐槽列表是否存在回复 若存在则显示当前回复框
// $(function(){
//     var rebj = $('ul.tcrfbox_ul');
//     rebj.each(function(i,e){
//         var find_li = $(e).find('li.tcrfbox_li');
//         if(num = find_li.length){
//             $(this).parent().show();
//         }
//     });
// });





