'use strict';
$(document).ready(function() {
//$('.test').addClass('list-group');
/*if($('.sf-input-select').length > 0){
    $('.sf-input-select').addClass('list-group');
}*/
//$('.sf-field-submit input').addClass('fa');
$.fn.removeClassDelay = function(className, delay) {
    var $removeClassDelayElement = $(this), $removeClassName = className;
    $removeClassDelayElement.addClass($removeClassName);
    setTimeout(function(){
        $removeClassDelayElement.removeClass($removeClassName);
    }, delay);
};

if($('.offcanvas').length > 0){
    /*$('.navbar-nav > .dropdown').on('show.bs.dropdown hide.bs.dropdown', function(){
        $(this).find('.fa').toggleClass('fa-angle-right fa-angle-down');
    });*/
    /*$('.dropdown-submenu > a').on('click', function(e){
        $(this).toggleClass('submenu-toggle');
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });*/
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().siblings().removeClass('open');
    $(this).parent().toggleClass('open');
  });
}

if($('.menu-item-has-children').length > 0){
        //$('.top-nav > .menu-item-has-children > a').append('<i class="fa fa-angle-down"></i>');
        //$('.top-nav > .menu-item-has-children > ul > .menu-item-has-children > a').append('<i class="fa fa-angle-right"></i>');

        $('.top-nav .menu-item-has-children > a').each( function() {
            var nav = $(this);
            if( nav.length > 0 ) {
                if( nav.attr('href') === '#' ) {
                    console.log(nav);
                    $(this).click(
                        function(e) {
                            e.preventDefault();
                        }
                    );
                }
            }
        });

        $('.top-nav .menu-item-has-children > a').click(function() {
            var location = $(this).attr('href');
            if( location !== '#' ) {
                console.log(location);
                window.location.href = location;
                return false;
            }
        });

        $('.top-nav .menu-item-has-children').hover(function() {
          $(this).find('.sub-menu').stop(true, true).delay(200).fadeIn(100);
          $(this).addClass('selected-menu-item');
        }, function() {
          $(this).find('.sub-menu').stop(true, true).delay(300).fadeOut(100);
          $(this).removeClassDelay('selected-menu-item', 300);
          //$(this).removeClass('selected-menu-item');
        });
        $('.top-nav .menu-item-has-children .sub-menu').hover(function() {
          //$(this).find('.sub-menu').stop(true, true).delay(200).fadeIn(100);
          $(this).parent('.menu-item-has-children').addClass('selected-parent-item');
        }, function() {
          //$(this).find('.sub-menu').stop(true, true).delay(300).fadeOut(100);
          //$(this).removeClassDelay('selected-menu-item',300);
          $(this).parent('.menu-item-has-children').removeClass('selected-parent-item');
        });

    }

if($('[data-toggle="tooltip"]').length > 0){
$('[data-toggle="tooltip"]').tooltip({ container: 'body' });
}
if($('.attention').length > 0){

	$('.animated').hover(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('pulse');
        }
    });

    var $items = $('.animated'),
    timer = function(){
    var $current = $items.filter('.active'),
    $next = $current.next().length ? $current.next() : $items.first();
    $current.removeClass('active pulse');
    $next.addClass('active pulse');
    };

    var interval = setInterval(timer, 1000);
    $('.attention').hover(function () {
        clearInterval(interval);
    }, function () {
        interval = setInterval(timer, 1000);
    });

}

if($('.banner-content .typed-string').length > 0){
    $('.typed-string').typed({
        strings: ['Customers', 'Partners', 'Employees', 'Devices'],
        stringsElement: null,
            // typing speed
            typeSpeed: 24,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 3000,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: '|',
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
      });
}/*this is going to be removed on front17-page*/

if($('.main-wrapper iframe[src*=youtube]').length > 0){
    $('.main-wrapper iframe[src*=youtube]').wrap('<div class="video-responsive"></div>');
}

if($('.same-category-post-item').length > 0){
    $('.same-category-post-item').wrapInner('<div class="inner-wrap"></div>');
}
	$('#info-nav div').click(function(e) {
		$('#info div').hide();
		$('#info-nav .current-feature').removeClass('current-feature');
		$(this).addClass('current-feature');

		var clicked = $(this).find('a:first').attr('href');
		$('#info ' + clicked).fadeIn('fast');
		e.preventDefault();
	}).eq(0).addClass('current-feature');

	$('.search-wrapper a').click(function(){
    var sPanel = $(this).parents('.nav-panel').siblings('div').find('.search-row');
    if($(sPanel).is(':hidden')){
        $(this).find('span').removeClass('glyphicon-search').addClass('glyphicon-remove');
        $(sPanel).slideDown('slow');
    }
    else
    {
        $(this).find('span').removeClass('glyphicon-remove').addClass('glyphicon-search');
        $(sPanel).slideUp('slow');
    }

});

	$('.main article').each(function(){
		$(this).find('img').addClass('img-rounded');
		$(this).find('img').addClass('img-responsive');
	});

	$('.verical-multi-images').each(function(){
		$(this).find('img').addClass('img-responsive');
	});

	$('.img-holder a').each(function(){
    var a = $(this).attr('href');
    var imgH = $(this).parent('.img-holder');
	imgH.append('<div class="enlarge hidden-xs"><a href="' + a + '"><span class="sprite-enlarge_icon"></span>Enlarge</a></div>');
	});

	$('.footer-container aside.widget').each(function(){
		$(this).addClass('col');
		$(this).addClass('col-sm-5 col-sm-offset-1');
	});
	$('.pricing-support td:contains("Yes")').each(function(){
		$(this).empty();
		$(this).append('<span class="sprite-yes_icon"></span>');
	});
	$('.pricing td>span:contains("Yes")').each(function(){
		$(this).empty();
		$(this).addClass('sprite-yes_icon');
	});
	$('.pricing td>div:contains("Yes")').each(function(){
		$(this).empty();
		$(this).addClass('sprite-yes_icon');
	});
	$('.benefits td>span:contains("Yes")').each(function(){
		$(this).empty();
		$(this).addClass('sprite-yes_round_icon');
	});

	if ($('.price-table-container').length > 0) {

		$('.column .table-header:contains("Logo")').empty().append('<span class="sprite-logo_icon"></span>');
		$('#feature-list li:not(".deployment-options")').find('a').addClass('sprite-i_icon').tooltip({placement: 'bottom'});
		$('#feature-list .deployment-options').wrapInner('<div></div>');
		$('.column ul + div').addClass('get-quote-wrapper').find('a').addClass('get-quote-btn');
		$('.single-get-quote').find('a').addClass('get-quote-btn');

		$('.column li:contains("Yes")').each(function(){
		$(this).empty();
		$(this).append('<span class="sprite-pricing_yes"></span>');
		});

		$('.column li:contains("No")').each(function(){
		$(this).empty();
		$(this).append('<span class="sprite-pricing_no"></span>');
		});

	}

	if ($('.edu-list li').length > 0) {
		$('.edu-list li').each(function(){
			$(this).append('<span class="sprite-yes_round_icon"></span>');
		});
	}

	if ($('.shibboleth-list li').length > 0) {

		$('.shibboleth-list li').each(function(){
			$(this).append('<span class="sprite-yes_round_icon"></span>');
		});

		$('.shibboleth-list li').each(function() {
            $(this).contents().wrap('<p></p>');
		});
	}

	if($('.how-it-works-13 li').length > 0){
		$('.how-it-works-13 li').each(function(){
			$(this).append('<span class="sprite-list_round_bg"></span>');
		});
	}

	$('.pricing-support td:contains("No")').each(function(){
		$(this).empty();
		$(this).append('<span class="sprite-no_icon"></span>');
	});
	$('.pricing td>div:contains("No")').each(function(){
		$(this).empty();
		$(this).addClass('sprite-no_icon');
	});

	if ($('.content-column').length > 0){
		$('.content-column').append('<span class="vertical-breaker"></span>');
	}

	var os = -100;

	if ($('#articles').length > 0) {
	var articlesPosition = $('#articles').offset().top + os;
	var sheetsPosition = $('#data-sheets').offset().top + os;
	var standardsPosition = $('#standards').offset().top + os;
	}
	if ($('#year-2016').length > 0) {
	var ysixPosition = $('#year-2016').offset().top + os;
	}
	if ($('#year-2015').length > 0) {
	var yfivePosition = $('#year-2015').offset().top + os;
	}
	if ($('#year-2014').length > 0) {
	var yfourPosition = $('#year-2014').offset().top + os;
	}
	if ($('#year-2013').length > 0) {
	var ythreePosition = $('#year-2013').offset().top + os;
	}
	if ($('#year-2012').length > 0) {
	var ytwoPosition = $('#year-2012').offset().top + os;
	}
	if ($('#year-2011').length > 0) {
	var yonePosition = $('#year-2011').offset().top + os;
	}
	if ($('#read-faq').length > 0) {
	var faqPosition = $('#read-faq').offset().top + os;
	}

	if ($('#info').length > 0) {
	var veryTop = $('#info').offset().top + os;
	}

	if ($('#top-point').length > 0) {
	var topPoint = $('#top-point').offset().top + os;
	}

	$('.read-our-faq').click(function(){
		$('html, body').animate({scrollTop: faqPosition}, 'slow');
		return false;
	});

	$('.articles-section').click(function(){
		$('html, body').animate({scrollTop: articlesPosition}, 'slow');
		return false;
	});

	$('.data-sheets-section').click(function(){
		$('html, body').animate({scrollTop: sheetsPosition}, 'slow');
		return false;
	});

	$('.standards-section').click(function(){
		$('html, body').animate({scrollTop: standardsPosition}, 'slow');
		return false;
	});

	$('.year2016').click(function(){
		$('html, body').animate({scrollTop: ysixPosition}, 'slow');
		return false;
	});
	$('.year2015').click(function(){
		$('html, body').animate({scrollTop: yfivePosition}, 'slow');
		return false;
	});
	$('.year2014').click(function(){
		$('html, body').animate({scrollTop: yfourPosition}, 'slow');
		return false;
	});
	$('.year2013').click(function(){
		$('html, body').animate({scrollTop: ythreePosition}, 'slow');
		return false;
	});
	$('.year2012').click(function(){
		$('html, body').animate({scrollTop: ytwoPosition}, 'slow');
		return false;
	});
	$('.year2011').click(function(){
		$('html, body').animate({scrollTop: yonePosition}, 'slow');
		return false;
	});

	$('.to-top').click(function(){
		$('html, body').animate({scrollTop: veryTop}, 'slow');
		return false;
	});

	$('.back-top').click(function(){
		$('html, body').animate({scrollTop: topPoint}, 'slow');
		return false;
	});

    if($('.jump-to-anchors').length > 0) {
	$('.jump-to-anchors li').hover(function(){
		$(this).parents('ul').find('.first-position').removeClass('active');
		$(this).addClass('active');
	},
		function(){
		$(this).removeClass('active');
		$(this).parents('ul').find('.first-position').addClass('active');
	}
	);
	}

    if ($('.widget_reallysimpletwitterwidget').length > 0) {
		$('.widget_reallysimpletwitterwidget').append('<a class="twitter-follow-link" href="https://twitter.com/GluuFederation">Follow Us</a>');
	}

	if ($('.recent-posts-extended').length > 0) {
		$('.recent-posts-extended').append('<a class="view-all-link" href="http://www.gluu.org/resources/press-releases/">View All</a>');
	}

	if(!$('.pre-footer-container .row').length > 0) {
	$('.pre-footer-container').removeClass('pre-footer-container');
	}

	if ($('.schedule-button.blue.ox-button').length > 0) {
		$('.schedule-button.blue.ox-button').append('<span class="sprite-blue_click_icon"></span>');
	}
	if ($('.schedule-button.orange.ox-button').length > 0) {
		$('.schedule-button.orange.ox-button').append('<span class="sprite-orange_click_icon"></span>');
	}

	if ($('.schedule-button.green').length > 0) {
		$('.schedule-button.green').append('<span class="sprite-green_click_icon"></span>');
	}

    $('.featured-checkbox input[type="checkbox"]').click(function(){
            if($(this).prop('checked')){
                $(this).parents('.featured-checkbox').siblings('.tag-content2').removeClass('logo-tags').addClass('mapp');
            } else {
                if(!$('.tag-content2').hasClass('.logo-tags')){
                    $(this).parents('.featured-checkbox').siblings('.tag-content2').addClass('logo-tags').removeClass('mapp');
                }
            }
        });

    $('.checkbox input[type="checkbox"]').click(function(){
            if($(this).prop('checked')){
                $(this).parents('.checkbox').siblings('.tags-map-area').find('.tag-content').removeClass('logo-tags').addClass('mapp');
            } else {
                if(!$('.tag-content').hasClass('.logo-tags')){
                    $(this).parents('.checkbox').siblings('.tags-map-area').find('.tag-content').addClass('logo-tags').removeClass('mapp');
                }
            }
    });



if($('.gluu-pop_up').length > 0) {
    $('.gluu-pop_up').bPopup({
            fadeSpeed: 'slow', //can be a string ('slow'/'fast') or int
            followSpeed: 1500, //can be a string ('slow'/'fast') or int
            //modalColor: 'greenYellow',
            modalClose: true,
            opacity: 0.6
        });
        }

	if($('.partners-tags').length > 0){
		$('.partners-tags').tabs();

		var $technologyElements = $('#allp-tag .tags-content>.technology');
		$($technologyElements).clone().appendTo('#technology-tag .tags-content');
		var $channelElements = $('#allp-tag .tags-content>.channel');
		$($channelElements).clone().appendTo('#channel-tag .tags-content');
		var $integratorsElements = $('#allp-tag .tags-content>.integrators');
		$($integratorsElements).clone().appendTo('#integrators-tag .tags-content');

        if(top.location !== location) {
            $('a, form').each(function() {
            if(!this.target) {
            this.target = '_top';
            }
            });
            }
	}

	if($('.apps-tags').length > 0){
		$('.apps-tags').tabs();

		var $mobileElements = $('#alltf-tag>.mobile');
		$($mobileElements).clone().appendTo('#mobile-tag');
		var $hardTokenElements = $('#alltf-tag>.hard_token');
		$($hardTokenElements).clone().appendTo('#hardToken-tag');
		var $softTokenElements = $('#alltf-tag>.soft_token');
		$($softTokenElements).clone().appendTo('#softToken-tag');
	}

	var select = $('a[href$=".bmp"],a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".BMP"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"]');
	select.addClass('fancybox');
	if($('.fancybox').length > 0){
		if ($('.fancybox').parents('.video-list')){
			$('.fancybox').addClass('fancybox-media');
			$('.fancybox').attr('rel', 'media-gallery');
		}

			$('.fancybox').fancybox({
			padding: 0,
			helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0, 0, 0, 0.6)'
                }
            }
			}
		});
			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect: 'none',
					closeEffect: 'none',
					prevEffect: 'none',
					nextEffect: 'none',

					arrows: false,
					padding: 0,
					helpers: {
						media: true,
						buttons: {}
					},
					width: 800,
					height: 450,
					aspectRatio: true,
					scrolling: 'no'
				});

	}

if($('.panel').length > 0){

$('.panel').on('show.bs.collapse', function(){
    $(this).find('.panel-heading').addClass('active-panel');

    if($(this).find('.fa').hasClass('general-down_arrow_icon')){
        $(this).find('.fa').removeClass('general-down_arrow_icon');
        $(this).find('.fa').addClass('general-up_arrow_icon');
        $(this).find('.toggle-text').empty().append('Show Less');
    }
});

$('.panel').on('hide.bs.collapse', function(){
    $(this).find('.panel-heading').removeClass('active-panel');

    if($(this).find('.fa').hasClass('general-up_arrow_icon')){
        $(this).find('.fa').removeClass('general-up_arrow_icon');
        $(this).find('.fa').addClass('general-down_arrow_icon');
        $(this).find('.toggle-text').empty().append('Show More');
    }

});

}

if($('.deployments li').length > 0){
    $('.deployments li').each(function(){
			$(this).append('<i class="general-bullet_icon"></i>');
		});
}

if($('.how-it-works li').length > 0){
		$('.how-it-works li').each(function(){
			$(this).append('<span class="general-round_bullit"></span>');
		});
	}

if ($('.widget_latest_tweets_widget').length > 0) {
		$('.widget_latest_tweets_widget').append('<a class="twitter-follow-link" href="https://twitter.com/GluuFederation">Follow Us</a>');
	}

if ($('.widget_reallysimpletwitterwidget').length > 0) {
		$('.widget_reallysimpletwitterwidget').append('<a class="twitter-follow-link" href="https://twitter.com/GluuFederation">Follow Us</a>');
	}

if ($('.recent-posts-extended').length > 0) {
		$('.recent-posts-extended').append('<a class="view-all-link" href="http://www.gluu.org/resources/press-releases/">View All</a>');
	}

if($('.solution-dropdown-wrapper').length > 0){
    $('.solution-dropdown-wrapper .form-control').change(function(){
    var extraField = $(this).parents('.form-group').siblings('.describe-solution');
        if($(this).val() !== ''){
           $(extraField).slideDown('slow');
        } else {
           $(extraField).slideUp('slow');
        }

    });
}

	$('.top-nav li:contains("search")').replaceWith('<li class="search-wrapper"><a><span class="glyphicon glyphicon-search"></span></a></li>');

	$('.main-nav-wrapper li:contains("Deploy")').addClass('schedule-btn');

	$('.front-nav-wrapper li:contains("Deploy")').addClass('schedule-btn');

	$('.search-wrapper a').click(function(){
        var sPanel = $(this).parents('.nav-panel').siblings('div').find('.search-row');

        if($(sPanel).is(':hidden')){
            $(this).find('span').removeClass('glyphicon-search').addClass('glyphicon-remove');
            $(sPanel).slideDown('slow');
        } else {
            $(this).find('span').removeClass('glyphicon-remove').addClass('glyphicon-search');
            $(sPanel).slideUp('slow');
        }

    });

    /*$('.main-footer aside.widget').each(function(){
		$(this).addClass('col');
		$(this).addClass('col-sm-5 col-sm-offset-1');
	});*//*this is going to be removed on front17-page*/

if ($('.even-grid').length > 0) {
    $('.s-item').matchHeight();
}

function disableScroll() {
  var top = $(window).scrollTop();
  $('body').css({
    overflow: 'hidden'
  });
  $(window).scrollTop(top);
  $(window).on('scroll', function() {
    $(window).scrollTop(top);
  });
}

function enableScroll() {
  var top = $(window).scrollTop();
  $('body').css({
    overflow: ''
  });
  $(window).scrollTop(top);
  $(window).off('scroll');
}

if($('.coding-block .expand-btn').length > 0){
var bw = $(window).width();
	var bh = $(window).height();
	var cbh = bh - 101;
	var pl = $('.coding-block');

	var c = 1;
	$('.fa-expand').click(function() {
		c++;

        $(this).toggleClass('fa-compress');

		if(c % 2 === 0){

			disableScroll();
			pl.animate({width: bw}, 300, function(){
				$(this).animate({height: bh}, 300	);
				$(this).find('.code-block').animate({height: cbh}, 300);
				pl.addClass('active');
			});
		}

		if (c % 2 !== 0){

			enableScroll();
			pl.animate({height: '341'}, 300, function(){
				$(this).animate({width: '460'}, 300);
				$(this).css('max-width', '460');
				$(this).find('.code-block').animate({height: 240}, 300);
				pl.removeClass('active');
			});
		}
	});
}

if($('.coding-block select').length > 0){
    $('.coding-block select').selectpicker({style: '', size: 4});

    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
		if (!$('.analyze-btn').hasClass('active')) {
				$('.points').on('touchstart', function () {
					$(this).addClass('highlight');

					$(this).animate({backgroundColor: 'yellow'}, 1500, function () {
						$(this).webuiPopover({trigger: 'manual'});
						$(this).webuiPopover('show');
					});

					var notCur = $(this).siblings('.points');
					notCur.each(function () {
						if (notCur.hasClass('highlight')) {
							notCur.removeClass('highlight');
							notCur.animate({backgroundColor: 'transparent'}, 1500);
						}
					});

				});
			}
        } else {

				$('.points').click(function () {

					if (!$('.analyze-btn').hasClass('active')) {

						$(this).addClass('highlight');

						$(this).animate({backgroundColor: 'yellow'}, 1500, function () {
							$(this).webuiPopover({trigger: 'manual'});
							$(this).webuiPopover('show');
						});

						var notCur = $(this).siblings('.points');
						console.log(notCur);

						notCur.each(function () {
							if (notCur.hasClass('highlight')) {
								notCur.removeClass('highlight');
								notCur.animate({backgroundColor: 'transparent'}, 1500);
							}
						});
					}
				});
        }

    $('.coding-block select').change(function(){
        var value = $(this).val();
        $('.code-block').hide();
        $('.points').webuiPopover('hide');
        $('.points').css('background', 'none');

        if(value === 'sample_1'){
            $('.code-block_1').fadeIn(200);
        } else if(value === 'sample_2'){
             $('.code-block_2').fadeIn(200);
        } else if(value === 'sample_3'){
            $('.code-block_3').fadeIn(200);
        } else if(value === 'sample_4'){
            $('.code-block_4').fadeIn(200);
        } else if(value === 'sample_5'){
            $('.code-block_5').fadeIn(200);
        } else if(value === 'sample_6'){
            $('.code-block_6').fadeIn(200);
        } else if(value === 'sample_7'){
            $('.code-block_7').fadeIn(200);
        } else if(value === 'sample_8'){
            $('.code-block_8').fadeIn(200);
        } else if(value === 'sample_9'){
            $('.code-block_9').fadeIn(200);
        }
		$('.analyze-btn').removeClass('active');
		$('.coding-block select').attr('disabled', false);

        if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {

				$('.points').on('touchstart', function () {
					$(this).addClass('highlight');

					$(this).animate({backgroundColor: 'yellow'}, 1500, function () {
						$(this).webuiPopover({trigger: 'manual'});
						$(this).webuiPopover('show');
					});

					var notCur = $(this).siblings('.points');

					notCur.each(function () {
						if (notCur.hasClass('highlight')) {
							notCur.removeClass('highlight');
							notCur.animate({backgroundColor: 'transparent'}, 1500);
						}
					});

				});
    } else {
        $('.points').click(function(){
					$(this).addClass('highlight');

					$(this).animate({backgroundColor: 'yellow'}, 1500);

					var notCur = $(this).siblings('.points');

					notCur.each(function () {
						if (notCur.hasClass('highlight')) {
							notCur.removeClass('highlight');
							notCur.animate({backgroundColor: 'transparent'}, 1500);
						}
					});
            });

    }

    });/*end change()*/

        $('.analyze-btn').click(function(e){
			if (!$('.analyze-btn').hasClass('active')) {
				$('.points').animate({backgroundColor: 'transparent'}, 0);
				$('.analyze-btn').addClass('active');
				$('.coding-block select').attr('disabled', 'disabled');

				$( '.code-block' ).each(function( j ) {
					if(($('.code-block_' + j).css('display') === 'block') && ($('.coding-block select').val() === 'sample_' + j)) {
						$('.code-block_' + j + ' .points').each(function (i) {
							var delay = 3000;
							if(i === 0){
                                delay = 0;
							}
							$('.code-block_' + j).delay(delay).scrollTo('#b' + j + '-point' + parseInt(i + 1), 600, function () {
								$('#b' + j + '-point' + i).animate({backgroundColor: 'transparent'}, 1500);
								$('#b' + j + '-point' + i).removeClass('highlight');
								$('#b' + j + '-point' + parseInt(i + 1)).addClass('highlight');
								$('#b' + j + '-point' + parseInt(i + 1)).animate({backgroundColor: 'yellow'}, 1500);
								$('#b' + j + '-point' + parseInt(i + 1)).webuiPopover({trigger: 'manual'});
								$('#b' + j + '-point' + parseInt(i + 1)).webuiPopover('show');
								if (i === $('.code-block_' + j + ' .points').length - 1) {
									$('.analyze-btn').removeClass('active');
									$('.coding-block select').attr('disabled', false);
								}
							});
						});
					}
				});
				e.preventDefault();
			}

		});

    $(document).on('mouseup touchend', function(e)
    {
        var subject = $('#coding-block');

        if(e.target.id !== subject.attr('id') && !subject.has(e.target).length)
        {
            $('.points').webuiPopover('hide');

        }
    });

}/*end .coding-block select*/

if($('.panel').length > 0){
$('.panel').on('show.bs.collapse', function(){
    $(this).find('.panel-heading').addClass('active-panel');
    $(this).addClass('expanded');
    if($(this).find('.fa').hasClass('fa-caret-right')){
        $(this).find('.fa').removeClass('fa-caret-right');
        $(this).find('.fa').addClass('fa-caret-down');
    }
});

$('.panel').on('hide.bs.collapse', function(){
    $(this).find('.panel-heading').removeClass('active-panel');
    $(this).removeClass('expanded');
    if($(this).find('.fa').hasClass('fa-caret-down')){
        $(this).find('.fa').removeClass('fa-caret-down');
        $(this).find('.fa').addClass('fa-caret-right');
    }
});

}


/*if ($('.scrollbox').length > 0) {
$('.scrollbox').enscroll({
	showOnHover: true,
    verticalTrackClass: 'track3',
    verticalHandleClass: 'handle3'
});
}*/
if($('.content-scroll').length > 0){
    $('.content-scroll').mCustomScrollbar({
        theme: 'dark'
        //autoHideScrollbar: true
    });
}

if($('.sf-input-select').length > 0){
    /*$('.sf-input-select').selectpicker({
      style: 'btn-info',
      size: 'auto'
    });*/
    /*$('.dropdown-toggle').hover(function(){
        var dropdownMenu = $(this).children('.dropdown-menu');
        if(dropdownMenu.is(':visible')){
            dropdownMenu.parent().toggleClass('open');
        }
    });*/
}
if(($('.cevsde-nav').length > 0) || ($('.go-next-wrap').length > 0)){
    $.scrollIt();
}
if($('.cevsde-nav').length > 0){

/*$('.cevsde-nav a').click(function(e) {
    e.preventDefault();
    $(window).stop(true).scrollTo(this.hash, {duration: 1000, interrupt: true});
  });

  $('.cevsde-nav li').click(function(){
    $('.cevsde-nav li').removeClass('active');
    $(this).addClass('active');
  });*/

if(!((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)))) {
$('.cevsde-fixed-wrapper').affix({
    offset: {
    top: 99
    }
});
}

}

/*if($('.flexslider').length > 0){
    $('#flexslider').flexslider({
        animation: 'slide',
        animationLoop: true,
        itemWidth: 210,
        itemMargin: 5,
        move: 1,
        minItems: 2,
        maxItems: 4,
        controlNav: false,
        slideshow: false
    });

    $('#flexslider2').flexslider({
        animation: 'slide',
        animationLoop: true,
        itemWidth: 210,
        itemMargin: 5,
        move: 1,
        minItems: 1,
        maxItems: 4,
        controlNav: false,
        slideshow: false
    });
}*/

if($('.slider2').length > 0){
     $('.slider2').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 0,
    //infiniteLoop: false,
    pager: false
  });
}
if($('.slider5').length > 0){
     $('.slider5').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 0,
    //infiniteLoop: false,
    pager: false
  });

}

if($('.same-category-posts ul').length > 0){
    /* $('.same-category-posts ul').bxSlider({
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 10,
    pager: false
  });*/
var slider = $('.same-category-posts ul').bxSlider();

var widthMatch = matchMedia('all and (max-width: 767px)');
var widthHandler = function(matchList) {
    if (matchList.matches) {
        slider.reloadSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideWidth: 500,
            slideMargin: 10,
            pager: false
        });
    } else {
        slider.reloadSlider({
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideWidth: 500,
            slideMargin: 24,
            pager: false
        });
    }
};

widthMatch.addListener(widthHandler);
widthHandler(widthMatch);
}

});
$(document).on('sf:ajaxfinish', '.searchandfilter', function(){
	/*if($('.sf-input-select').length > 0){
        $('.sf-input-select').selectpicker({
          style: 'btn-info',
          size: 'auto'
        });*/
        /*$('.dropdown-toggle').hover(function(){
            var dropdownMenu = $(this).children('.dropdown-menu');
            if(dropdownMenu.is(':visible')){
                dropdownMenu.parent().toggleClass('open');
            }
        });
    }*/
});
