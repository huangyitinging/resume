$(document).ready(function(){
    //menu 響應式選單
    $('.showmenu').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    //選單滾動效果
    $('.scrollTop').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({scrollTop: targetPos}, 1000);
       // $('body').animate({scrollTop:targetPos},1000);
    });
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.scrollTop').each(function(){
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if(targetPos -1 <= scrollPos && (targetPos + targetHeight) > scrollPos){
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            }
        })
        //滑動顯示animated css
        $('.animated').each(function(){
        var thisPos = $(this).offset().top;
        if((windowHeight + scrollPos) >= thisPos){
            $(this).addClass('fadeIn')
            }
        });
        
    });
    
})