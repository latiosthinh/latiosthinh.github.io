$window = $(window);
$document = $(document);
$slides = $(".slide");

$window.on("mousewheel DOMMouseScroll", function(e) {
    var delta = e.originalEvent.wheelDelta / 30 || -e.originalEvent.detail;
    if(delta < -1) { 
        $('html,body').animate({
            scrollTop: $window.innerHeight()
        }, 800);
    }
    else { 
        $('html,body').animate({
            scrollTop: -$window.innerHeight()
        }, 800);
    }
    e.preventDefault();
});