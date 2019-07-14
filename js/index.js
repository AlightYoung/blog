$(function(){  
        $('a').click(function(){
            //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
            $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top )},500);
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
            var to = $(this).attr("href");
            if(to=="#home"){
                $(".navbar-fixed-top").css("background-color","#e9dacc");
            }else if(to=="#blog"){
                $(".navbar-fixed-top").css("background-color","#1ea176");
            }else if(to=="#about"){
                $(".navbar-fixed-top").css("background-color","#648ff6");
            }else if(to=="#contact"){
                $(".navbar-fixed-top").css("background-color","#9a3e50");
            }
        });
        $(window).on("scroll",function(){
            if($(window).scrollTop()>=($(window).height())*3){
                $(".navbar-fixed-top").css("background-color","#9a3e50");
                $("li:eq(2)").addClass("active");
                $("li:eq(2)").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=($(window).height())*2){
                $(".navbar-fixed-top").css("background-color","#648ff6");
                $("li:eq(3)").addClass("active");
                $("li:eq(3)").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=$(window).height()){
                $(".navbar-fixed-top").css("background-color","#1ea176");
                $("li:eq(4)").addClass("active");
                $("li:eq(4)").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else{
                $(".navbar-fixed-top").css("background-color","#e9dacc");
                $("li:eq(5)").addClass("active");
                $("li:eq(5)").siblings().removeClass("active");
                $(".totop").css("opacity","0"); 
            }
            
        });
        $(".totop").click(function totop(){
             $('body,html').animate({scrollTop:0},500);
        });
    })