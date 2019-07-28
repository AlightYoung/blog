$(function(){
$(".mobileitems").hide();
        var a = 0;
        //手机菜单的开关
        $(".mobilebar").on("click",function(){
            a++;
            if(a%2!=0){
                $(".mobileitems").slideDown();
            }else{
                $(".mobileitems").slideUp();
            }
        });
        //手机菜单点击之后关闭菜单
        $(".mobileitem").on("click",function(){
            a++;
            $(".mobileitems").hide();
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
        
        //页面初始化scrollTop判断
         if($(window).scrollTop()>=($(window).height())*3){
                $("#top").css("background-color","#a4b0be");
                $(".mobileitems").css("background-color","#a4b0be");
                $(".contact").addClass("active");
                $(".contact").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=($(window).height())*2){
                $("#top").css("background-color","#38ada9");
                $(".mobileitems").css("background-color","#38ada9");
                $(".about").addClass("active");
                $(".about").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=$(window).height()){
                $("#top").css("background-color","#6a89cc");
                $(".mobileitems").css("background-color","#6a89cc");
                $(".blog").addClass("active");
                $(".blog").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else{
                $("#top").css("background-color","#fab1a0");
                $(".mobileitems").css("background-color","#fab1a0");
                $(".home").addClass("active");
                $(".home").siblings().removeClass("active");
                $(".totop").css("opacity","0"); 
            }
        //页面滚动监听改变navbar颜色及当前分类切换
        $(window).on("scroll",function(){
            if($(window).scrollTop()>=($(window).height())*3){
                $("#top").css("background-color","#a4b0be");
                $(".mobileitems").css("background-color","#a4b0be");
                $(".contact").addClass("active");
                $(".contact").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=($(window).height())*2){
                $("#top").css("background-color","#38ada9");
                $(".mobileitems").css("background-color","#38ada9");
                $(".about").addClass("active");
                $(".about").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=$(window).height()){
                $("#top").css("background-color","#6a89cc");
                $(".mobileitems").css("background-color","#6a89cc");
                $(".blog").addClass("active");
                $(".blog").siblings().removeClass("active");
                $(".totop").css("opacity",".5");
            }else{
                $("#top").css("background-color","#fab1a0");
                $(".mobileitems").css("background-color","#fab1a0");
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