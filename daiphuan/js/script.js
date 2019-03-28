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
				body.css('margin-top',h);
			}
			var unfixed = function(){
				elm.removeClass('fixed');
				body.css('margin-top',h);
			}
			var Mfixed = function(){
				elm.addClass('m-fixed');
				body.css('margin-top',h);
			}
			var unMfixed = function(){
				elm.removeClass('m-fixed');
				body.css('margin-top',h);
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
			$('.banner-slider').slick({
				nextArrow: "<span class='banner-next'>></span>",
				prevArrow: "<span class='banner-prev'><</span>",
				dots: true,
				fade: true
			});
			
			$('.img-slider').slick({
				nextArrow: "<span class='img-next'>></span>",
				prevArrow: "<span class='img-prev'><</span>",
				dots: true,
				fade: true
			});

			$('.news-slider').slick({
				nextArrow: "<span class='img-next'>></span>",
				prevArrow: "<span class='img-prev'><</span>",
				dots: true,
				fade: true
			});

			$('.from-blog').slick({
				nextArrow: false,
				prevArrow: false,
				dots: true,
				fade: true
			});
		},
		incnum: function(){
			let temp = 0;
			$('.dec').click(function(){
				if(temp > 0) { temp -= 1;} 
				else { temp = 0; }
				$(this).siblings('.numval').val(temp);
			});
			$('.inc').click(function(){
				if(temp < 10) { temp += 1;} 
				else { temp = 10; }
				$(this).siblings('.numval').val(temp);
			});
		},

		init: function(){
			UI.header();
			UI.slider();
			UI.incnum();
		},
	}


	UI.init();

	
	

	$(document).on('mouseenter', '[data-toggle="tab"]', function () {
		$(this).tab('show');
	});

})
