 $(function(){
        var count=0;
        $(document).on("click",".menu",function(){
            count++;
            if(count%2!=0){
                $(".mobilebar").slideDown();
            }else{
                $(".mobilebar").slideUp();
            }
        });
})