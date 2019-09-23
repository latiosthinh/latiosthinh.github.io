$(document).ready(function() {
    $('.slidehome').owlCarousel({
        loop: true,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 0,
        dots: true,
        autoHeight: true,
        autoplayHoverPause: true,
        video: true,
        slideSpeed: 300,
        nav: true,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        singleItem: true,
    });
    //slideProductHome
    $('.slide-product-home').owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: false,
            },
            991: {
                items: 4,
                nav: false,
            },
            1025: {
                items: 4,
                nav: true,
                loop: false,
                margin: 26,
            }
        }
    });
});

