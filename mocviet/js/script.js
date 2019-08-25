(function() {
	var $;
	$ = this.jQuery || window.jQuery;
	win = $(window), body = $('body'), doc = $(document);

	$.fn.hc_accordion = function() {
	    var acd = $(this);
	    acd.find('ul>li').each(function(index, el) {
			if($(el).find('ul li').length > 0) $(el).prepend('<button type="button" class="acd-drop"></button>');
		});
		acd.on('click','.acd-drop', function(e){
			e.preventDefault();
	        var ul=$(this).nextAll("ul");
	        if(ul.is(":hidden") === true){
	            ul.parent('li').parent('ul').children('li').children('ul').slideUp(180);
	            ul.parent('li').parent('ul').children('li').children('.acd-drop').removeClass("active");
	            $(this).addClass("active");
	            ul.slideDown(180);
	        }
	        else{
	            $(this).removeClass("active");
	            ul.slideUp(180);
	        }
	    });
	}

	$.fn.hc_menu = function(options) {
		var settings = $.extend({
	        open: '.open-mnav',
	    }, options ), this_ = $(this);
	    var m_nav = $('<div class="m-nav"><button class="m-nav-close">&times;</button><div class="nav-ct"></div></div>');
	    body.append(m_nav);

		m_nav.find('.m-nav-close').click(function(e) {
			e.preventDefault();
			mnav_close();
		});

		m_nav.find('.nav-ct').append(this_.children().clone());

		var mnav_open = function(){
			m_nav.addClass('active');
			body.append('<div class="m-nav-over"></div>').css('overflow', 'hidden');
		}
		var mnav_close = function(){
			m_nav.removeClass('active');
			body.children('.m-nav-over').remove();
			body.css('overflow', '');
		}

		doc.on('click', settings.open, function(e) {
	    	e.preventDefault();
	    	if(win.width() <=991) mnav_open();
	    }).on('click', '.m-nav-over', function(e) {
			e.preventDefault();
			mnav_close();
		});

	    m_nav.hc_accordion();
	}

}).call(this);


jQuery(function($) {
	var win = $(window), body = $('body'), doc = $(document);

	var UI = {
		header: function(){
			var elm = $('header'), h = elm.innerHeight(), offset = 100, mOffset = 0;
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
			body.css( 'padding-top', h + 'px' );
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
			$('.san-pham-moi-slide_1').slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: true,
				nextArrow: $( '.spm.next' ),
				prevArrow: $( '.spm.prev' ),
				dots: false,
			});
			
			$('.san-pham-moi-slide_2').slick({
				nextArrow: $( '.spm2.next' ),
				prevArrow: $( '.spm2.prev' ),
				// arrows: true,
				dots: false,
				// fade: true
			});

			$('.banner-slider').slick({
				nextArrow: false,
				prevArrow: false,
				dots:true,
				// appendDots: $('.neighbor-dot'),
				// fade: true,
				// customPaging : function(slider, i) {
				// 	var title = $(slider.$slides[i]).data('title');
				// 	return '<a class="pager__item"> '+title+' </a>';
				// }
			});

			$('.from-blog').slick({
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


	var token = '1362124742.7b33a8d.6613a3567f0a425f9852055b8ef743b7',
    num_photos = 8,
    container = document.getElementById( 'instafeed' ),
    scrElement = document.createElement( 'script' );
	
	window.mishaProcessResult = function( data ) {
		for( x in data.data ){
			container.innerHTML += '<a href="' + data.data[x].link + '" class="col-md-3" target="_blank"><img src="' + data.data[x].images.standard_resolution.url + '"></a>';
		}
	}
	
	scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
	document.body.appendChild( scrElement );
})
