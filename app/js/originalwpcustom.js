$(document).ready(function() {

//$('#info div:not(:first)').hide();

if($('.banner-content .typed-string').length > 0){
    $(".typed-string").typed({
        strings: ["Customers", "Partners", "Employees", "Devices"],
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
            cursorChar: "|",
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
}

if($('.main-wrapper iframe[src*=youtube]').length > 0){
    $('.main-wrapper iframe[src*=youtube]').wrap('<div class="video-responsive"></div>');
}

/*if($('.l-header').length > 0){
    var lheader = $('.l-header');
    var banner = $('.banner-col');
        lheader.css({'min-height':($(window).height())+'px'});
        banner.css({'min-height':(($(window).height()) - 104)+'px'});
        
        $(window).resize(function(){
            lheader.css({'min-height':($(window).height())+'px'});
            banner.css({'min-height':(($(window).height()) - 104)+'px'});
        });
}*/
//104 is padding top for home-banner-wrapper

	$('#info-nav div').click(function(e) {
		$('#info div').hide();
		$('#info-nav .current-feature').removeClass("current-feature");
		$(this).addClass('current-feature');
		
		
		var clicked = $(this).find('a:first').attr('href');
		$('#info ' + clicked).fadeIn('fast');
		e.preventDefault();
	}).eq(0).addClass('current-feature');

	/*$('.main-nav>li').append('<div class="arrow-pointer2-container"><div class="arrow-pointer2"></div></div>');*/
	//$('.main-nav li:last-child').addClass('schedule-btn-wrapper');
	//$(".main-nav li:contains('Schedule')").addClass('schedule-btn-wrapper');
	//$(".main-nav li:contains('search')").replaceWith('<li class="search-wrapper"><a><span class="glyphicon glyphicon-search"></span></a></li>');
	
	$('.search-wrapper a').click(function(){
	    var sPanel = $(this).parents('.nav-panel').siblings('div').find('.search-row');
	    
	    if($(sPanel).is(":hidden")){
    	    $(this).find('span').removeClass('glyphicon-search').addClass('glyphicon-remove');
    	    $(sPanel).slideDown('slow');
	    }
	    else
	    {
            $(this).find('span').removeClass('glyphicon-remove').addClass('glyphicon-search');
            $(sPanel).slideUp('slow');
	    }
	    
	    });
	
	//$('.main-nav .schedule-btn-wrapper a').addClass('schedule-button orange');
	//$('.main-nav .schedule-btn-wrapper a').append('<span class="sprite-orange_click_icon"></span>');
	
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
	imgH.append('<div class="enlarge hidden-xs"><a href="'+ a + '"><span class="sprite-enlarge_icon"></span>Enlarge</a></div>');
	});
	
	$('.footer-container aside.widget').each(function(){
		$(this).addClass('col');
		$(this).addClass('col-sm-5 col-sm-offset-1');
		//$('.footer-container aside.widget:first-child+aside').addClass('col-sm-offset-2');
	});
	$(".pricing-support td:contains('Yes')").each(function(){
		$(this).empty();
		$(this).append('<span class="sprite-yes_icon"></span>');
	});
	$(".pricing td>span:contains('Yes')").each(function(){
		$(this).empty();
		$(this).addClass('sprite-yes_icon');
	});
	$(".pricing td>div:contains('Yes')").each(function(){
		$(this).empty();
		$(this).addClass('sprite-yes_icon');
	});
	$(".benefits td>span:contains('Yes')").each(function(){
		$(this).empty();
		$(this).addClass('sprite-yes_round_icon');
	});
	
	if ($(".price-table-container").length > 0) {
		
		$(".column .table-header:contains('Logo')").empty().append('<span class="sprite-logo_icon"></span>');
		$("#feature-list li:not('.deployment-options')").find('a').addClass('sprite-i_icon').tooltip({placement:"bottom"});
		$("#feature-list .deployment-options").wrapInner('<div></div>');
		$(".column ul + div").addClass("get-quote-wrapper").find('a').addClass("get-quote-btn");
		$('.single-get-quote').find('a').addClass("get-quote-btn");
		//$(".get-quote-btn").
		
		$(".column li:contains('Yes')").each(function(){
		$(this).empty();
		$(this).append('<span class="sprite-pricing_yes"></span>');
		});
		
		$(".column li:contains('No')").each(function(){
		$(this).empty();
		$(this).append('<span class="sprite-pricing_no"></span>');
		});
	
	}
	
	if ($(".edu-list li").length > 0) {
		$(".edu-list li").each(function(){
			$(this).append('<span class="sprite-yes_round_icon"></span>');
		});
	}
	
	if ($(".shibboleth-list li").length > 0) {
		
		
		$(".shibboleth-list li").each(function(){
			$(this).append('<span class="sprite-yes_round_icon"></span>');
		});
		
		$('.shibboleth-list li').each(function() {
			$(this).contents().wrap('<p></p>');
		});
	}
	
	if($(".how-it-works-13 li").length > 0){
		$(".how-it-works-13 li").each(function(){
			$(this).append('<span class="sprite-list_round_bg"></span>');
		});
	}
	
	$(".pricing-support td:contains('No')").each(function(){
		$(this).empty();
		$(this).append('<span class="sprite-no_icon"></span>');
	});
	$(".pricing td>div:contains('No')").each(function(){
		$(this).empty();
		$(this).addClass('sprite-no_icon');
	});
	
	if ($(".content-column").length > 0){
		$(".content-column").append('<span class="vertical-breaker"></span>');
	}
	
	var os=-100;
	
	if ($('#articles').length > 0) {
	var articlesPosition = $('#articles').offset().top+os;
	var sheetsPosition = $('#data-sheets').offset().top+os;
	var standardsPosition = $('#standards').offset().top+os;
	}
	if ($('#year-2014').length > 0) {
	var yfourPosition = $('#year-2014').offset().top+os;
	}
	if ($('#year-2013').length > 0) {
	var ythreePosition = $('#year-2013').offset().top+os;
	}
	if ($('#year-2012').length > 0) {
	var ytwoPosition = $('#year-2012').offset().top+os;
	}
	if ($('#year-2011').length > 0) {
	var yonePosition = $('#year-2011').offset().top+os;
	}
	if ($('#read-faq').length > 0) {
	var faqPosition = $('#read-faq').offset().top+os;
	}
	
	if ($('#info').length > 0) {
	var veryTop = $('#info').offset().top+os;
	}
	
	if ($('#top-point').length > 0) {
	var topPoint = $('#top-point').offset().top+os;
	}
	
	$('.read-our-faq').click(function(){
		$('html, body').animate({scrollTop:faqPosition}, 'slow');
		return false;
	});
	
	$('.articles-section').click(function(){
		$('html, body').animate({scrollTop:articlesPosition}, 'slow');
		return false;
	});
	
	$('.data-sheets-section').click(function(){
		$('html, body').animate({scrollTop:sheetsPosition}, 'slow');
		return false;
	});
	
	$('.standards-section').click(function(){
		$('html, body').animate({scrollTop:standardsPosition}, 'slow');
		return false;
	});
	
	$('.year2014').click(function(){
		$('html, body').animate({scrollTop:yfourPosition}, 'slow');
		return false;
	});
	$('.year2013').click(function(){
		$('html, body').animate({scrollTop:ythreePosition}, 'slow');
		return false;
	});
	$('.year2012').click(function(){
		$('html, body').animate({scrollTop:ytwoPosition}, 'slow');
		return false;
	});
	$('.year2011').click(function(){
		$('html, body').animate({scrollTop:yonePosition}, 'slow');
		return false;
	});
	
	$('.to-top').click(function(){
		$('html, body').animate({scrollTop:veryTop}, 'slow');
		return false;
	});
	
	$('.back-top').click(function(){
		$('html, body').animate({scrollTop:topPoint}, 'slow');
		return false;
	});
	
	/*if($('.jump-to-anchors').length > 0) {
	$('.jump-to-anchors li').hover(function(){
		$(this).parents('ul').find('.first-position').removeClass('sprite-marker_bg');
		$(this).addClass('sprite-marker_bg');
	},
		function(){
		$(this).removeClass('sprite-marker_bg');
		$(this).parents('ul').find('.first-position').addClass('sprite-marker_bg');
	}
	);
	}*/
    
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
		
	if($('.partners-tags-nav').length > 0) {
	/*$('.partners-tags-nav li').hover(function(){
		$(this).parents('ul').find('.ui-state-active').removeClass('sprite-marker_bg');
		$(this).addClass('sprite-marker_bg');
	},
		function(){
		$(this).removeClass('sprite-marker_bg');
		$(this).parents('ul').find('.ui-state-active').addClass('sprite-marker_bg');
	}
	);*/
	}

		if ($('.widget_reallysimpletwitterwidget').length > 0) {
		$('.widget_reallysimpletwitterwidget').append('<a class="twitter-follow-link" href="https://twitter.com/GluuFederation">Follow Us</a>');
	}
	
	if ($('.recent-posts-extended').length > 0) {
		$('.recent-posts-extended').append('<a class="view-all-link" href="http://www.gluu.org/resources/press-releases/">View All</a>');
	}
	
	if($('.pre-footer-container .row').length > 0) {
	} else {
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
	
	/*if($('.wpcf7-form').length > 0) {
		$('wpcf7-form').find('input').addClass('form-control');
	}*/
	
	/*$('.pChk').click(function() {
    if( $('.pChk:checked').length > 0 ) {
        $("#MapTags").show();
        $("#LogoTags").hide();
    } else {
        $("#MapTags").hide();
        $("#LogoTags").show();
    }
    });*/
    
    $('.featured-checkbox input[type="checkbox"]').click(function(){
            if($(this).prop("checked")){
                //$(".map").css('visibility','visible');
                //$(".logo-tags").hide();
                $(this).parents('.featured-checkbox').siblings('.tag-content2').removeClass('logo-tags').addClass('mapp');
                
                
            } else {
                
                //$(".map").css('visibility','hidden');
                //$(".logo-tags").show();
                if($('.tag-content2').hasClass('.logo-tags')){
        
                } else {
                    $(this).parents('.featured-checkbox').siblings('.tag-content2').addClass('logo-tags').removeClass('mapp');
                }
                
            }
            
        });
    
    $('.checkbox input[type="checkbox"]').click(function(){
            if($(this).prop("checked")){
                //$(".map").css('visibility','visible');
                //$(".logo-tags").hide();
                $(this).parents('.checkbox').siblings('.tags-map-area').find('.tag-content').removeClass('logo-tags').addClass('mapp');
                
                
            } else {
                
                //$(".map").css('visibility','hidden');
                //$(".logo-tags").show();
                if($('.tag-content').hasClass('.logo-tags')){
        
                } else {
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
		$(".partners-tags").tabs();
        
        
        
		var $technologyElements = $("#allp-tag .tags-content>.technology");
		$($technologyElements).clone().appendTo("#technology-tag .tags-content");
		var $channelElements = $("#allp-tag .tags-content>.channel");
		$($channelElements).clone().appendTo("#channel-tag .tags-content");
		var $integratorsElements = $("#allp-tag .tags-content>.integrators");
		$($integratorsElements).clone().appendTo("#integrators-tag .tags-content");
		
		 if(top.location != location) {
            $('a, form').each(function() {
            if(!this.target) {
            this.target = '_top';
            }
            });
            } 
		/*$.ajaxSetup({cache:false});
		var technologyElementsMap = $("#allp-tag .map-content");
		$(technologyElementsMap).load("http://www.test1.rsn.org.ua/map-all/ article");*/
		/*$.ajaxSetup({cache:false});
        $(".partners-tabtn").click(function(){
            var post_link = $(this).find('a').attr("data-src");
 
            $("#allp-tag .map-content").html("content loading");
            $("#allp-tag .map-content").load(post_link + '#bgmp_map-canvas');
        return false;
        });*/
		
	}
	
	if($('.apps-tags').length > 0){
		$(".apps-tags").tabs();
		
		var $mobileElements = $("#alltf-tag>.mobile");
		$($mobileElements).clone().appendTo("#mobile-tag");
		var $hardTokenElements = $("#alltf-tag>.hard_token");
		$($hardTokenElements).clone().appendTo("#hardToken-tag");
		var $softTokenElements = $("#alltf-tag>.soft_token");
		$($softTokenElements).clone().appendTo("#softToken-tag");
	}
	
	var select = $('a[href$=".bmp"],a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".BMP"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"]');
	select.addClass('fancybox');
	if($('.fancybox').length > 0){
		if ($('.fancybox').parents('.video-list')){
			$('.fancybox').addClass('fancybox-media');
			$('.fancybox').attr('rel','media-gallery');
		}
		
			$('.fancybox').fancybox({
			padding : 0,
			helpers : { 
		        overlay : {
		            css : {
		                'background' : 'rgba(0, 0, 0, 0.6)'
		            }
		        }
			}
		});
			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					padding : 0,
					helpers : {
						media : true,
						buttons : {}
					},
					width : 800,
					height : 450,
					aspectRatio : true,
					scrolling : 'no'
				});

	}

if($(".panel").length > 0){

$('.panel').on('show.bs.collapse',function(){
    $(this).find('.panel-heading').addClass("active-panel");
    
    
    if($(this).find('.fa').hasClass('general-down_arrow_icon')){
        $(this).find('.fa').removeClass('general-down_arrow_icon');
        $(this).find('.fa').addClass('general-up_arrow_icon');
        $(this).find('.toggle-text').empty().append('Show Less');
    } else {
        
    }
});

$('.panel').on('hide.bs.collapse',function(){
    $(this).find('.panel-heading').removeClass("active-panel");
    
    
    if($(this).find('.fa').hasClass('general-up_arrow_icon')){
        $(this).find('.fa').removeClass('general-up_arrow_icon');
        $(this).find('.fa').addClass('general-down_arrow_icon');
        $(this).find('.toggle-text').empty().append('Show More');
    } else {
        
    }
    
});

    
}


if($(".deployments li").length > 0){
    $(".deployments li").each(function(){
			$(this).append('<i class="general-bullet_icon"></i>');
		});
}

if($(".how-it-works li").length > 0){
		$(".how-it-works li").each(function(){
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
    
        if($(this).val() !== ""){
            var extraField = $(this).parents('.form-group').siblings('.describe-solution');
           $(extraField).slideDown('slow');
        } else {
            var extraField = $(this).parents('.form-group').siblings('.describe-solution');
           $(extraField).slideUp('slow');
        }
        
    });
}

/*if($('input[name=mc4wp-SOLUTION]').length > 0){
    
    $('.radios-wrapper').find('span').addClass('radio-inline');
    
    $('input[name=mc4wp-SOLUTION]').click(function(){
    if ($(this).val() == 'Yes')
    {
       var extraField = $(this).parents('.form-group').siblings('.describe-solution');
       $(extraField).find('input[name=REQ]').attr('required','required');
       $(extraField).slideDown('slow');
    }
    else
    {
       var extraField = $(this).parents('.form-group').siblings('.describe-solution');
       $(extraField).find('input[name=REQ]').removeAttr('required');
       $(extraField).slideUp('slow');
    }
    });
    
}*/
	
	$(".top-nav li:contains('search')").replaceWith('<li class="search-wrapper"><a><span class="glyphicon glyphicon-search"></span></a></li>');
	
	$(".main-nav-wrapper li:contains('Deploy')").addClass('schedule-btn');
	
	$(".front-nav-wrapper li:contains('Deploy')").addClass('schedule-btn');
	
	$('.search-wrapper a').click(function(){
	    var sPanel = $(this).parents('.nav-panel').siblings('div').find('.search-row');
	    
	    if($(sPanel).is(":hidden")){
    	    $(this).find('span').removeClass('glyphicon-search').addClass('glyphicon-remove');
    	    $(sPanel).slideDown('slow');
	    }
	    else
	    {
            $(this).find('span').removeClass('glyphicon-remove').addClass('glyphicon-search');
            $(sPanel).slideUp('slow');
	    }
	    
	    });
	    
	    
	    var shrinkHeader = 40;
  /*$(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.top-bar-top').slideUp('fast');
           $('.logo').addClass('shrink');
           $('.main-nav-wrapper').addClass('shrink');
           $('.flare-vertical').removeClass('moveBarDown');
           $('.flare-vertical').addClass('moveBarUp');
        }
        else {
            $('.top-bar-top').slideDown('fast');
            $('.logo').removeClass('shrink');
            $('.main-nav-wrapper').removeClass('shrink');
            $('.flare-vertical').removeClass('moveBarUp');
            $('.flare-vertical').addClass('moveBarDown');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset;
    }*/
   
	 $('.main-footer aside.widget').each(function(){
		$(this).addClass('col');
		$(this).addClass('col-sm-5 col-sm-offset-1');
	});
	
if ($('.even-grid').length > 0) {
    $('.s-item').matchHeight();
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
		 
		if(c%2==0){
			
			pl.animate({width:bw}, 300, function(){
				$(this).animate({height:bh}, 300	);
				$(this).find('.code-block').animate({height:cbh}, 300);
				pl.addClass('active');				
			});		
		}
		 
		if (c%2!=0){
			
			pl.animate({height:'341'}, 300, function(){
				$(this).animate({max-width:'460'}, 300);
				$(this).find('.code-block').animate({height:240}, 300);
				pl.removeClass('active');								
			});
		}
	});
}

if($('.coding-block select').length > 0){
    
    
    $('.coding-block select').selectpicker({style: '', size: 4});
    
    $('.coding-block select').change(function(){
        var value = $(this).val();
        $('.code-block').hide();
        $('.points').webuiPopover('hide');
        $('.points').css('background', 'none');
        if(value == 'sample_1'){
            $('.code-block_1').fadeIn(200);
        } else if(value == 'sample_2'){
             $('.code-block_2').fadeIn(200);
        } else if(value == 'sample_3'){
            $('.code-block_3').fadeIn(200);
        } else if(value == 'sample_4'){
            $('.code-block_4').fadeIn(200);
        }
        
        
    });/*end change()*/

        
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {    
    $('.points').on('touchstart', function(){
            $(this).addClass('highlight');
            
            if($(this).siblings().hasClass('highlight')){
                $(this).siblings().removeClass('highlight');
                $(this).siblings().animate({backgroundColor: 'transparent'}, 1500, function(){
                    $(this).webuiPopover('hide');
                });
            }
            
            if($(this).hasClass('highlight')){
                $(this).animate({backgroundColor: 'yellow'}, 1500, function(){
                    $(this).webuiPopover({trigger:'manual'});
                    $(this).webuiPopover('show');
                });
            }
            
        });
} else {
    $('.points').click(function(){
            $(this).addClass('highlight');
            
            if($(this).siblings().hasClass('highlight')){
                $(this).siblings().removeClass('highlight');
                $(this).siblings().animate({backgroundColor: 'transparent'}, 1500, function(){
                    $(this).webuiPopover('hide');
                });
            }
            
            if($(this).hasClass('highlight')){
                $(this).animate({backgroundColor: 'yellow'}, 1500, function(){
                    $(this).webuiPopover({trigger:'manual'});
                    $(this).webuiPopover('show');
                });
            }
            
        });
    
}
        /*$('.points').toggle(function(){
            $(this).animate({backgroundColor: 'yellow'}, 1500, function(){
                $(this).webuiPopover('show');
            });
            
        }, function(){
            $(this).animate({backgroundColor: 'transparent'}, 1500, function(){
                $(this).webuiPopover('hide');
            });
        });*/
/*if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {        
     $('.points').on('touchstart', function(){
            $(this).toggleClass('highlight');
            if($(this).hasClass('highlight')){
                $(this).animate({backgroundColor: 'yellow'}, 1500, function(){
                    $(this).webuiPopover({trigger:'manual'});
                    $(this).webuiPopover('show');
                });
            } else {
                $(this).animate({backgroundColor: 'transparent'}, 1500, function(){
                    $(this).webuiPopover('hide');
                });
            }
        });   
} else {
    $('.points').click(function(){
            $(this).toggleClass('highlight');
            if($(this).hasClass('highlight')){
                $(this).animate({backgroundColor: 'yellow'}, 1500, function(){
                    $(this).webuiPopover({trigger:'manual'});
                    $(this).webuiPopover('show');
                });
            } else {
                $(this).animate({backgroundColor: 'transparent'}, 1500, function(){
                    $(this).webuiPopover('hide');
                });
            }
        });
    
}*/    
        /*$('.points').on('touchstart', function(){
            $(this).animate({backgroundColor: 'yellow'}, 1500);
            $(this).webuiPopover('show');
        });*/
        
        /*$('.points').on('touchend', function(){
            $(this).animate({backgroundColor: 'transparent'}, 1500);
        });*/
            
        $('.analyze-btn').click(function(e){
            
            if(($('.code-block_1').css('display') == 'block') && ($('.coding-block select').val() == 'sample_1')){
            
            $('.code-block').scrollTo('#b1-point1', 600, function(){
                $('#b1-point1').animate({backgroundColor: 'yellow'}, 1500, function(){
                    $('#b1-point1').webuiPopover({trigger:'manual'});
                    $('#b1-point1').webuiPopover('show');
                   $('.code-block').delay(3000).scrollTo('#b1-point2', 600, function(){
                       $('#b1-point1').animate({backgroundColor: 'transparent'}, 1500);
                       $('#b1-point2').animate({backgroundColor: 'yellow'}, 1500);
                       $('#b1-point2').webuiPopover({trigger:'manual'});
                       $('#b1-point2').webuiPopover('show');
                       }); 
                });
            });
                
            }
            
            if(($('.code-block_2').css('display') == 'block') && ($('.coding-block select').val() == 'sample_2')){
                
            $('.code-block').scrollTo('#b2-point1', 600, function(){
                $('#b2-point1').animate({backgroundColor: 'yellow'}, 1500, function(){
                    $('#b2-point1').webuiPopover({trigger:'manual'});
                    $('#b2-point1').webuiPopover('show');
                   $('.code-block').delay(3000).scrollTo('#b2-point2', 600, function(){
                       $('#b2-point2').animate({backgroundColor: 'yellow'}, 1500);
                       $('#b2-point2').webuiPopover({trigger:'manual'});
                       $('#b2-point2').webuiPopover('show');
                       }); 
                });
            });
            
            }
            
            if(($('.code-block_3').css('display') == 'block') && ($('.coding-block select').val() == 'sample_3')){
                $('.code-block').scrollTo('#b2-point1', 600, function(){
                $('#b3-point1').animate({backgroundColor: 'yellow'}, 1500, function(){
                    $('#b3-point1').webuiPopover({trigger:'manual'});
                    $('#b3-point1').webuiPopover('show');
                   $('.code-block').delay(3000).scrollTo('#b3-point2', 600, function(){
                       $('#b3-point2').animate({backgroundColor: 'yellow'}, 1500);
                       $('#b3-point2').webuiPopover({trigger:'manual'});
                       $('#b3-point2').webuiPopover('show');
                       }); 
                });
            });
                
            }
            
            e.preventDefault();
            
        });
/*$(document).mouseup(function(e)
    {
        var subject = $("#coding-block"); 

        if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
        {
            $('.points').webuiPopover('hide');
            
        }
    });*/
$(document).on("mouseup touchend", function(e)
    {
        var subject = $("#coding-block"); 

        if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
        {
            /*$('.points').animate({backgroundColor: 'transparent'}, 1500, function(){
                    $(this).webuiPopover('hide');
                });*/
            $('.points').webuiPopover('hide');
            
        }
    });
    
}/*end .coding-block select*/
	   	
});
