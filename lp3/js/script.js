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
			var elm = $('header'), h = elm.innerHeight(), offset = 200, mOffset = 0;
			var fixed = function(){
				elm.addClass('fixed');
				body.css('margin-top', h);
			}
			var unfixed = function(){
				elm.removeClass('fixed');
				body.css('margin-top', '');
			}
			var Mfixed = function(){
				elm.addClass('m-fixed');
				body.css('margin-top', h);
			}
			var unMfixed = function(){
				elm.removeClass('m-fixed');
				body.css('margin-top', '');
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
		psy: function(){
			var btn = '.psy-btn', sec = $('.psy-section'), pane = '.psy-pane';
			doc.on('click', btn, function(e) {
				e.preventDefault();
				$(this).closest(pane).find(btn).removeClass('active');
				$(this).addClass('active');
				$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 200 }, 600 );
			});

			var section_act = function(){
				sec.each(function(index, el) {
	                if(win.scrollTop() + (win.height()/2) >= $(el).offset().top){
	                    var id = $(el).attr('id');
	                    $(pane).find(btn).removeClass('active');
	                    $(pane).find(btn+'[href="#'+id+'"]').addClass('active');
	                }
	            });
	        }
	        section_act();
	        win.scroll(function(){
	            section_act();
	        });
		},

		init: function(){
			UI.header();
			UI.psy();
		},
	}


	UI.init();

	$('.dob').datepicker();
})