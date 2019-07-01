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

	var FU = {
		get_Ytid: function(url){
			var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
		    if(url) var arr = url.match(rx);
		    if(arr) return arr[1];
		},
		get_currency: function(str){
			if(str) return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		},
		animate: function(elems){
	        var animEndEv = 'webkitAnimationEnd animationend';
	        elems.each(function () {
	            var $this = $(this),
	            $animationType = $this.data('animation');
	            $this.addClass($animationType).one(animEndEv, function() {
	                $this.removeClass($animationType);
	            });
	        });
		},
	};

	var UI = {
		mMenu: function(){

		},
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
		backTop: function(){
			var back_top = $('.back-to-top'), offset = 800;

			back_top.click(function(){
	            $("html, body").animate({ scrollTop: 0 }, 800 );
	            return false;
	        });

	        if(win.scrollTop() > offset){
	        	back_top.fadeIn(200);
	        }

	        win.scroll(function() {
	            if(win.scrollTop() > offset ) back_top.fadeIn(200);
	            else back_top.fadeOut(200);
	        });
		},
		slider: function(){
			/*$('.slider-cas').slick({
				nextArrow: '<img src="images/next.png" class="next" alt="Next">',
				prevArrow: '<img src="images/prev.png" class="prev" alt="Prev">',
			})
			FU.animate($(".slider-cas .slick-current [data-animation ^= 'animated']"));
			$('.slider-cas').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				if(currentSlide!=nextSlide){
					var aniElm = $(this).find('.slick-slide').find("[data-animation ^= 'animated']");
					FU.animate(aniElm);
				}
			});*/

			/*$('.pro-cas').slick({
	            slidesToShow: 4,
	            slidesToScroll: 1,
	            nextArrow: '<i class="cas-arrow smooth next"></i>',
	            prevArrow: '<i class="cas-arrow smooth prev"></i>',
	            dots: true,
	            autoplay: true,
	            swipeToSlide: true,
	            autoplaySpeed: 4000,
	            responsive: [
	            {
	                breakpoint: 1199,
	                settings: {
	                    slidesToShow: 3,
	                }
	            },
	            {
	                breakpoint: 991,
	                settings: {
	                    slidesToShow: 3,
	                }
	            },
	            {
	                breakpoint: 700,
	                settings: {
	                    slidesToShow: 2,
	                }
	            },
	            {
	                breakpoint: 480,
	                settings: {
	                    slidesToShow: 1,
	                }
	            }
	            ],
	        })*/
		},
		toggle: function(){
			var ani = 100;
	        $('[data-show]').each(function(index, el) {
	            var ct = $($(el).attr('data-show'));
	            $(el).click(function(e) {
	                e.preventDefault();
	                ct.fadeToggle(ani);
	            });
	        });
	        win.click(function(e){
                $('[data-show]').each(function(index, el){
                    var ct = $($(el).attr('data-show'));
                    if(ct.has(e.target).length == 0 && !ct.is(e.target) && $(el).has(e.target).length == 0 && !$(el).is(e.target)){
                        ct.fadeOut(ani);
                    }
                });
	        });
		},

		init: function(){
			UI.mMenu();
			UI.header();
			UI.slider();
			UI.backTop();
		},
	}


	UI.init();


	/*custom here*/

	$('.search').on('click', function(){
		$(this).toggleClass('active');
	});


	$('.yn input').on('click', function() {
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
	})


	var x, i, j, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function(e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
			if (s.options[i].innerHTML == this.innerHTML) {
				s.selectedIndex = i;
				h.innerHTML = this.innerHTML;
				y = this.parentNode.getElementsByClassName("same-as-selected");
				for (k = 0; k < y.length; k++) {
				y[k].removeAttribute("class");
				}
				this.setAttribute("class", "same-as-selected");
				break;
			}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {
		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
		arrNo.push(i)
		} else {
		y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
		x[i].classList.add("select-hide");
		}
	}
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);



})
