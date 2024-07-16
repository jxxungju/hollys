$(function(){
    //메뉴
    $(".main > li , .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
        
    },function(){
        $(".sub, .sub_bg").stop().slideUp();

    })//hover
    
    //slick
    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:1000,
        adaptiveHeight:true
    })
    $(".close").click(function(){
        $(".popup").hide()
    })
    

})