$(function(){  
        $('a').click(function(){
            //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
            $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top )},500);
            $(this).addClass("active");
            $(this).parent().siblings().children().removeClass("active");
            var to = $(this).attr("href");
            if(to=="#home"){
                $("#top").css("background-color","#fab1a0");
            }else if(to=="#blog"){
                $("#top").css("background-color","#6a89cc");
            }else if(to=="#about"){
                $("#top").css("background-color","#38ada9");
            }else if(to=="#contact"){
                $("#top").css("background-color","#f8a5c2");
            }
        });
        $(window).on("scroll",function(){
            if($(window).scrollTop()>=($(window).height())*3){
                $("#top").css("background-color","#f8a5c2");
                $("li:eq(2)").children().addClass("active");
                $("li:eq(2)").siblings().children().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=($(window).height())*2){
                $("#top").css("background-color","#38ada9");
                $("li:eq(3)").children().addClass("active");
                $("li:eq(3)").siblings().children().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=$(window).height()){
                $("#top").css("background-color","#6a89cc");
                $("li:eq(4)").children().addClass("active");
                $("li:eq(4)").siblings().children().removeClass("active");
                $(".totop").css("opacity",".5");
            }else{
                $("#top").css("background-color","#fab1a0");
                $("li:eq(5)").children().addClass("active");
                $("li:eq(5)").siblings().children().removeClass("active");
                $(".totop").css("opacity","0"); 
            }
            
        });
        $(".totop").click(function totop(){
             $('body,html').animate({scrollTop:0},500);
        });
    })