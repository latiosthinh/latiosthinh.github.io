$(document).ready(function() {
    /**************** WOW js *****************/
    // Repeat demo content
    var $body = $('body');
    var $box = $('.box');
    for (var i = 0; i < 20; i++) {
        $box.clone().appendTo($body);
    }

    // Helper function for add element box list in WOW
    WOW.prototype.addBox = function(element) {
        this.boxes.push(element);
    };

    // Init WOW.js and get instance
    var wow = new WOW(
    {
        mobile: false
    });
    wow.init();

    // Attach scrollSpy to .wow elements for detect view exit events,
    // then reset elements and add again for animation
    $('.wow').on('scrollSpy:exit', function() {
        $(this).css({
            'visibility': 'hidden',
            'animation-name': 'none'
        }).removeClass('animated');
        wow.addBox(this);
    }).scrollSpy();
    
    //mmenu
    if ($('.icon-reponsive').length > 0) {
        $('.icon-reponsive').click(function(event) {
            event.preventDefault();
            $("#menu-mobile").mmenu({
                /*extensions: ['pagedim-black'],*/
            });
        });
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 45) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll')
        }
    });
    //fancybox
    if ($(window).width() > 991 && $("[data-fancybox]").length > 0) {
        $("[data-fancybox]").fancybox({
            thumbs: {
                autoStart: true
            }
        });
    };
    $(window).trigger('resize');
});

