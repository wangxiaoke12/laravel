
if(logid!="undefined"){
	window.onbeforeunload = onbeforeunload_handler;  
    // window.onunload = onunload_handler;  
     function onbeforeunload_handler(){  
        $.post("http://m.pmleader.cn/index.php/index/ce.html",{'logid':logid},function(){

        })
     } 
}