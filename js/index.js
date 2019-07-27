$(".mobileitems").hide();
$(function(){
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
            $(".mobileitems").hide();
        });
        //分类点击滑动样式及分类切换
        $('a').click(function(){
            //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
            $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top )},500);
            $(this).addClass("active");
            $(this).parent().siblings().children().removeClass("active");
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
        //页面滚动监听改变navbar颜色及当前分类切换
        $(window).on("scroll",function(){
            if($(window).scrollTop()>=($(window).height())*3){
                $("#top").css("background-color","#a4b0be");
                $(".mobileitems").css("background-color","#a4b0be");
                $(".contact").addClass("active");
                $(".contact").parent().siblings().children().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=($(window).height())*2){
                $("#top").css("background-color","#38ada9");
                $(".mobileitems").css("background-color","#38ada9");
                $(".about").addClass("active");
                $(".about").parent().siblings().children().removeClass("active");
                $(".totop").css("opacity",".5");
            }else if($(window).scrollTop()>=$(window).height()){
                $("#top").css("background-color","#6a89cc");
                $(".mobileitems").css("background-color","#6a89cc");
                $(".blog").addClass("active");
                $(".blog").parent().siblings().children().removeClass("active");
                $(".totop").css("opacity",".5");
            }else{
                $("#top").css("background-color","#fab1a0");
                $(".mobileitems").css("background-color","#fab1a0");
                $(".home").addClass("active");
                $(".home").parent().siblings().children().removeClass("active");
                $(".totop").css("opacity","0"); 
            }
            
        });
        $(".totop").click(function totop(){
             $('body,html').animate({scrollTop:0},500);
        });
    })