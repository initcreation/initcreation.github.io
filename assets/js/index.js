AOS.init({
    once: true,
    });
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

        // var $sections = $('section');
        // $sections.each(function(i,el){
        //     var top  = $(el).offset().top-100;
        //     var bottom = top +$(el).height();
        //     var id = $(el).attr('id');
        //     if( scroll > top && scroll < bottom){
        //         $('a.nav-link').removeClass('active-section-link');
        //         $('a[href="#'+id+'"]').addClass('active-section-link');
        //     }
        // })
    });
    $('.arrow-up').on('click', function(){
        $('html, body').animate({scrollTop: '0px'}, 500);
    });

    $('.navbar-brand').click(function() {
        location.reload();
    });

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
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ],
    });

});

