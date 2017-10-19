(function($){

//$('#info div:not(:first)').hide();
	
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
	
	if ($('#info').length > 0) {
	var veryTop = $('#info').offset().top+os;
	}
	
	if ($('#top-point').length > 0) {
	var topPoint = $('#top-point').offset().top+os;
	}
	
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
	
	if($('.jump-to-anchors').length > 0) {
	$('.jump-to-anchors li').hover(function(){
		$(this).parents('ul').find('.first-position').removeClass('sprite-marker_bg');
		$(this).addClass('sprite-marker_bg');
	},
		function(){
		$(this).removeClass('sprite-marker_bg');
		$(this).parents('ul').find('.first-position').addClass('sprite-marker_bg');
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
	
})(jQuery);
