var winHeight = $(window).innerHeight();
$(document).ready(function () {
    $(".panel").height(winHeight);
    $("body").height(winHeight*$(".panel").length);
});

window.addEventListener('resize', function (event) {
    $(".panel").height($(window).innerHeight());
});

$(window).on('scroll',function(){
    $(".panelCon").css('bottom',$(window).scrollTop()*-1);
});