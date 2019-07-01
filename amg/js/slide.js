$(document).ready(function() {
    $('.left-slider').slick({
        dots: true,
        prevArrow: '<ion-icon name="ios-arrow-back"></ion-icon>',
        nextArrow: '<ion-icon name="ios-arrow-forward"></ion-icon>',
        asNavFor: '.right-slider'
    });
    $('.right-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        focusOnSelect: true,
        asNavFor: '.left-slider'
    });
    $('.news-slider').slick({
        dots: true,
        prevArrow: '<ion-icon name="ios-arrow-back"></ion-icon>',
        nextArrow: '<ion-icon name="ios-arrow-forward"></ion-icon>',
        fade: true,
        cssEase: 'linear'
    });
    $('.intro-slider').slick({
        dots: true,
        prevArrow: '<ion-icon name="ios-arrow-back"></ion-icon>',
        nextArrow: '<ion-icon name="ios-arrow-forward"></ion-icon>',
    });
    $('.coca-slider').slick({
        dots: true,
        prevArrow: '<ion-icon name="ios-arrow-back"></ion-icon>',
        nextArrow: '<ion-icon name="ios-arrow-forward"></ion-icon>',
        fade: true,
        cssEase: 'linear'
    });
    $('.td').slick({
        dots: true,
        prevArrow: '<ion-icon name="ios-arrow-back"></ion-icon>',
        nextArrow: '<ion-icon name="ios-arrow-forward"></ion-icon>',
        fade: true,
        cssEase: 'linear'
    });
});

