$(document).ready(function () {
    $(".six").owlCarousel({
        items: 5,
        nav: true,
    });
});

$(window).scroll(function(){
    if($(window).scrollTop()>200)
    {
        $('.arrow_top').show()
    }
    else{
        $('.arrow_top').hide()
    }
})