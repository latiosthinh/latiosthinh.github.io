function CalcSize(num){
    var number = num; // Example-Number
    var width = $('#container').width();
    var height = $('#container').height();
    var area = height * width;
    var elementArea = parseInt(area / number);

    var sideLength = parseInt(Math.sqrt(elementArea));

    var numX = Math.ceil(width/sideLength);
    sideLength = width/numX;

    for( var _i = 0; _i < num + numX; _i++) { 
        $('#container').append('<div class="sq"></div>');
        $('.sq').css('width', sideLength-1).css('height', sideLength-1);
    }
}


var shape = ['fa fa-phone', 'fa fa-heart', 'fa fa-behance', 'fa fa-envelope', 'fa fa-bicycle', 'fa fa-facebook', 'fa fa-male', 'fa fa-github', 'fa fa-align-right', 'fa fa-id-card', 'fa fa-bath'];
var link = ['', '', 'https://www.behance.net/latiosthin9651', '', '', 'https://facebook.com/thomas.4542', '', 'https://latiosthinh.github.io', '', '',''];
var divch = [$('.phone'), $('.heart'), $('.behance'), $('.mail'), $('.bike'), $('.facebook'), $('.man'), $('.github'), $('.menubar'), $('.profile'), $('.bath')];

function animate(num) {
    for( var _i = 0; _i < num; _i++) { 
        var rd = chance.integer({ min: 0, max: 500 });
        var dl = chance.integer({ min: 0, max: num });
        //console.log(chance.integer({ min: 0, max: num }));
        // if (_i < 3) {
        //     rd = Math.ceil(Math.random() * 299);
        // }
        // else if ( 3 <= _i <= 5) {
        //     rd = Math.ceil(Math.random() * 135);
        // }
        // else if ( 5 < _i <= 8) {
        //     rd = Math.ceil(Math.random() * 517);
        // }
        // else {
        //     rd = Math.ceil(Math.random() * 713);
        // }
        //console.log(rd);
        //$('span.sq:nth-child('+ rd +')').addClass('banimate');
        $ele = $('.sq:nth-child('+ rd +')');
        $ele.addClass(shape[_i]).append('<div class="sqc"><span class="sqc1"></span><span class="sqc2"></span><span class="sqc3"></span><span class="sqc4"></span></div><a href="'+ link[_i] +'" target=_blank></a>');
        
        tl = new TimelineMax({repeat:-1, repeatDelay: dl,})
                                    .from($('.sq:nth-child('+ rd +') .sqc .sqc1'), 0.8, {y:100})
                                    .from($('.sq:nth-child('+ rd +') .sqc .sqc2'), 0.8, {x:-100})
                                    .from($('.sq:nth-child('+ rd +') .sqc .sqc3'), 0.8, {y:-100})
                                    .from($('.sq:nth-child('+ rd +') .sqc .sqc4'), 0.8, {x:100})
                                    .to('.sq:nth-child('+ rd +')', 1, {css: {opacity: '0.2'}})
                                    .to('.sq:nth-child('+ rd +') .sqc', 1, {css: {opacity: '0'}});
        $ele.append(divch[_i]);
        // if($('.sq:nth-child('+ rd +')').length) {
        var _top = $ele.offset().top;
        //console.log(_top);
        var _left = $ele.offset().left ;
        var _right = $(window).width() -  $ele.offset().left - $ele.width();
        if (_top < 200 || _top == 0 ) {
            divch[_i].addClass('goBottom');
            //console.log(_top);
        }
        if (_left < 100) {
            divch[_i].removeClass('goBottom').removeClass('goLeft').addClass('goRight');
        }
        if (_right < 100) {
            divch[_i].removeClass('goBottom').removeClass('goRight').addClass('goLeft');
        }
        $('.sq:nth-child('+ rd +')').hover(function(){
            TweenMax.from(this, 1, {css: {opacity: '1'}});
        });
    }  
}

function splashScreen() {
    tl = new TimelineMax()
                                .fromTo('.spl1', 0.5, {y:0}, {y:-52}, 0)
                                .fromTo('.spl3', 0.5, {y:0}, {y:-52}, 0)
                                .fromTo('.spl4', 0.5, {y:0}, {y:-52}, 0)
                                .fromTo('.spl2', 0.5, {y:0}, {y:52}, '+=0.5')
                                .fromTo('.spl3', 0.5, {x:0}, {x:-52}, '+=0.5')
                                .fromTo('.spl4', 0.5, {x:0}, {x:52}, '+=0.5')
                                .fromTo('.outer1', 0.8, {css: {opacity: '0'}}, {css: {opacity: '1'}}, '+=0.5')
                                .fromTo('.outer1', 0.8, {css: {transform: 'rotate(0deg)'}}, {css: {transform: 'rotate(45deg)'}})
                                //.addPause(5)

}
