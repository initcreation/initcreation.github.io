$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".navbar").position();
        if (scroll > topDist.top) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
        if (scroll > 400) {
            $('.arrow-up').addClass('show');
        } else {
            $('.arrow-up').removeClass('show');
        }
    });
    $('.arrow-up').on('click', function(){
        $('html, body').animate({scrollTop: '0px'}, 300);
    })

    // $('.inner-carousel').slick({
    //     infinite: true,
    //     speed: 800,
    //     autoplay: false,
    //     arrows: false,
    //     dots: true,
    // });

    $('.card-wrapper').slick({
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    });
    AOS.init();
});

