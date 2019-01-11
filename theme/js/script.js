(function() {
	var $;
	$ = this.jQuery || window.jQuery;
	win = $(window), body = $('body'), doc = $(document);
}).call(this);


jQuery(function($) {
	var win = $(window), body = $('body'), doc = $(document);

	var UI = {
		header: function(){
			var elm = $('header'), h = elm.innerHeight(), offset = 200, mOffset = 0;
			var fixed = function(){
				elm.addClass('fixed');
			}
			var unfixed = function(){
				elm.removeClass('fixed');
			}
			var Mfixed = function(){
				elm.addClass('m-fixed');
			}
			var unMfixed = function(){
				elm.removeClass('m-fixed');
			}
			if(win.width()>991){
				win.scrollTop()> offset ? fixed() : unfixed();
			}
			else{
				win.scrollTop()> mOffset ? Mfixed() : unMfixed();
			}
			win.scroll(function(e) {
				if(win.width()>991){
					win.scrollTop()> offset ? fixed() : unfixed();
				}
				else{
					win.scrollTop()> mOffset ? Mfixed() : unMfixed();
				}
			});
		},
		slider: function(){
			$('.house-list').slick({
				nextArrow: false,
				prevArrow: false,
				dots: true,
				fade: true
			});
			
			$('.agent-list').slick({
				nextArrow: false,
				prevArrow: false,
				dots: true,
				fade: true
			});
		},

		init: function(){
			UI.header();
			UI.slider();
		},
	}


	UI.init();

	;(function($) {
		$.fn.unveil = function(threshold, callback) {
		var $w = $(window),
			th = threshold || 0,
			retina = window.devicePixelRatio > 1,
			attrib = retina? "data-src-retina" : "data-src",
			images = this,
			loaded;

		this.one("unveil", function() {
		var source = this.getAttribute(attrib);
		source = source || this.getAttribute("data-src");
		if (source) {
			this.setAttribute("src", source);
			if (typeof callback === "function") callback.call(this);
		}
		});
	
		function unveil() {
		var inview = images.filter(function() {
			var $e = $(this);
			if ($e.is(":hidden")) return;
	
			var wt = $w.scrollTop(),
				wb = wt + $w.height(),
				et = $e.offset().top,
				eb = et + $e.height();
	
			return eb >= wt - th && et <= wb + th;
		});
	
		loaded = inview.trigger("unveil");
		images = images.not(loaded);
		}
	
		$w.on("scroll.unveil resize.unveil lookup.unveil", unveil);
	
		unveil();
	
		return this;
	
	};
	
	})(window.jQuery || window.Zepto);
	var tl1 = new TimelineMax(),
		tl2 = new TimelineMax(),
		tl3 = new TimelineMax(),
		tl4 = new TimelineMax(),
		tl5 = new TimelineMax(),
		tl6 = new TimelineMax(),
		tl7 = new TimelineMax(),
		tl8 = new TimelineMax()
		;
	var controller = new ScrollMagic.Controller();
	$(document).ready(function() {
		$("img").unveil(200);
		tl1
			.from('.cholder', 0.5, {scale:0.5, opacity:0})
			.from('.mpc', 0.2, {y:30, opacity:0})
			.from('.mpc span', 0.5, {width: 0, opacity:0, x:-30})
			.from('.tg', 0.2, {y:-30, opacity:0})
			.from('.ltw', 0.3, {scale:0.5, opacity:0})
			.staggerFrom('.c', 0.2, {scale:0.5, opacity:0, delay:0.5}, 0.7)
			.from('.b', 0.2, {scale:0.5, opacity:0})
			.from('.b3', 0.2, {scale:0.5, opacity:0})
			.staggerFrom('.bot p span', 0.1, {scale:0.5, opacity:0}, 0.2)
			
			
		
		tl2.from('.divide', 0.2, {height:0, y:-30, opacity:0})
			.from('.bg', 0.2, {scale:0.5, opacity:0, delay:0.5})
			.from('.mini', 0.2, {y:-30, opacity:0})
			.from('.mini-p', 0.2, {y:30, opacity:0})
			.from('.l', 0.1, {y:-30, opacity:0})
			.from('.i', 0.1, {y:-30, opacity:0})
			.from('.l1', 0.1, {width:0, x:-30, opacity:0})
			.from('.l2', 0.1, {width:0, x:30, opacity:0})
			.from('.m', 0.1, {y:-30, opacity:0})
			.from('.pc', 0.1, {y:30, opacity:0})
			.staggerFrom('.dot span', 1, {scale:0.5, opacity:0}, 0.1)

		new ScrollMagic.Scene({
				triggerElement: '#id2',
				offset: '-200'
		})
		.setTween(tl2.play())
		.addTo(controller);

		tl3.from('#id3 .text h1', 0.3, {y:30, opacity:0})
			.from('#id3 .text p', 0.3, {y:30, opacity:0})
			.from('#id3 h3', 0.3, {y:-30, opacity:0})
			.from('.v-slider', 0.3, {y:30, opacity:0})
		new ScrollMagic.Scene({
			triggerElement: '#id3',
			offset: '-100',
		})
		.setTween(tl3.play())
		.addTo(controller);

		tl4.from('#id4 h1', 0.5, {y:30, opacity:0, delay:0.3})
			.from('.v-three', 1, {'bottom':'-30px', opacity:0, delay:0.3})

		new ScrollMagic.Scene({
			triggerElement: '#id4',
			offset: -100,
			duration: '30%'
		})
		.setTween(tl4)
		.addTo(controller);

		var sc,
			px,
			nx
		;
		if(win.width() > 1440){
			sc = 1.6;
			px = '400px';
			nx = '-400px';
		}
		else if(win.width() > 1200) {
			sc = 1.3;
			px = '370px';
			nx = '-370px';
		} else if(win.width() > 991) {
			sc = 1.3;
			px = '250px';
			nx = '-250px';
		} else if(win.width() > 500) {
			sc = 1.3;
			px = '150px';
			nx = '-150px';
		} else {
			sc = 1.3;
			px = '50px';
			nx = '-50px';
		}
		tl5
			.to('.vn2', 1, {'margin-left': px, scale:1}, 0)
			.to('.vn3', 1, {'margin-left': nx, scale:1}, 0)
			.to('.vn2', 1, {opacity:0}, 3)
			.to('.vn3', 1, {opacity:0}, 3)
			.to('.vn1',1, {scale:sc})
			.to('.vn1', 1, {opacity:0})
			.to('.vn4', 1, {opacity:1})
			.to('.t1', 1, {opacity:1})
			.to('.t3', 1, {opacity:1})
			.to('.t2', 1, {opacity:1})
			.to('.t4', 1, {opacity:1})
			.to('.t5', 2, {opacity:1})
			.to('.t1, .t2, .t3, .t4', 1, {opacity:0})
			.to('.t5', 1, {opacity:0})
			.to('.v-three', 1, {rotationY:90})
			.to('.pin1', 1, {'visibility':'visible'})
			.to('.pin1 p', 1, {opacity:1})

		new ScrollMagic.Scene({
			triggerElement: '.v-animate',
			duration: '300%',
		})
		.setTween(tl5)
		.addTo(controller);
	});
	$(document).on('mouseenter', '[data-toggle="tab"]', function () {
		$(this).tab('show');
	});






})
