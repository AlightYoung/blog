$(function(){
$(".mobileitems").hide();
        var a = 0;
        //手机菜单的开关
        $(".mobilebar").on("click",function(){
            a++;
            if(a%2!=0){
                $(".mobileitems").slideDown();
                $(".bar").removeClass("fa-bars");
                $(".bar").addClass("fa-chevron-up");
            }else{
                $(".mobileitems").slideUp();
                $(".bar").removeClass("fa-chevron-up");
                $(".bar").addClass("fa-bars");
            }
        });
        //手机菜单点击之后关闭菜单
        $(".mobileitem").on("click",function(){
            a++;
            $(".mobileitems").slideUp();
            $(".bar").removeClass("fa-chevron-up");
            $(".bar").addClass("fa-bars");
        });
        //分类点击滑动样式及分类切换 
        $('a').click(function(){
            $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top )},500);
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            //----------------多余删掉--------------------
            // var to = $(this).attr("href");
            // if(to=="#home"){    
            //     $("#top").css("background-color","#fab1a0");
            // }else if(to=="#blog"){
            //     $("#top").css("background-color","#6a89cc");
            // }else if(to=="#about"){
            //     $("#top").css("background-color","#38ada9");
            // }else if(to=="#contact"){
            //     $("#top").css("background-color","#a4b0be");
            // }
        });
        //禁止导航栏滚动
        //to do...
        //css样式 touch-action:none;
        
        //页面初始化scrollTop判断
         if($(window).scrollTop()>=($(window).height())*3){
                $(".contact").addClass("active");
                $(".contact").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=($(window).height())*2){
                $(".about").addClass("active");
                $(".about").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=$(window).height()){
                $(".blog").addClass("active");
                $(".blog").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else{
                $(".home").addClass("active");
                $(".home").siblings().removeClass("active");
                $(".totop").css("opacity","0"); 
            }
        //页面滚动监听改变navbar颜色及当前分类切换
        $(window).on("scroll",function(){
            if($(window).scrollTop()>=($(window).height())*3){
                $(".contact").addClass("active");
                $(".contact").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=($(window).height())*2){
                $(".about").addClass("active");
                $(".about").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=$(window).height()){
                $(".blog").addClass("active");
                $(".blog").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else{
                $(".home").addClass("active");
                $(".home").siblings().removeClass("active");
                $(".totop").css("opacity","0"); 
            }
            
        });
        //点击返回顶部
        $(".totop").click(function totop(){
             $('body,html').animate({scrollTop:0},500);
        });
    })