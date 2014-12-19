// Preloader
	$(window).load(function(){ 
    $('#preloader').fadeOut(2000,function(){$(this).remove();});
});

	$('#headline').addClass('animated fadeInLeft');
	$('#sub-headline').addClass('animated fadeInRight');
	$('#intro-p').addClass('animated bounceIn');

$(document).ready(function()
{

// Parallax

$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var divam = 2.0;
	$(".layer-1").css({
	  "background-position":"0px -"+scrollTop/divam+"px"     
	});
	  $(".layer-1").css({
	     "margin-top":"-"+scrollTop+"px"
	});
});
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var divam = 1.8;
	$(".layer-2").css({
	  "background-position":"0px -"+scrollTop/divam+"px"     
	});
	  $(".layer-2").css({
	     "margin-top":"-"+scrollTop+"px"
	});
});
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var divam = 1.6;
	$(".layer-3").css({
	  "background-position":"0px -"+scrollTop/divam+"px"     
	});
	  $(".layer-3").css({
	     "margin-top":"-"+scrollTop+"px"
	});
});
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var divam = 1.4;
	$(".layer-4").css({
	  "background-position":"0px -"+scrollTop/divam+"px"     
	});
	  $(".layer-4").css({
	     "margin-top":"-"+scrollTop+"px"
	});
});

// Animations

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function fadeInCheckAnimation(see) {
    var $see = $(see);

    // If the animation has already been started
    // if ($elem.hasClass('start')) return;

    if (isElementInViewport($see)) {
        // Start the animation
        // $elem.addClass('start');
	$see.addClass('animated fadeIn');

    }
}

function fadeInLeftCheckAnimation(see) {
    var $see = $(see);

    // If the animation has already been started
    // if ($elem.hasClass('start')) return;

    if (isElementInViewport($see)) {
        // Start the animation
        // $elem.addClass('start');
	$see.addClass('animated fadeInLeft');

    }
}

function fadeInRightCheckAnimation(see) {
    var $see = $(see);

    // If the animation has already been started
    // if ($elem.hasClass('start')) return;

    if (isElementInViewport($see)) {
        // Start the animation
        // $elem.addClass('start');
	$see.addClass('animated fadeInRight');

    }
}

function fadeInUpCheckAnimation(see) {
    var $see = $(see);

    // If the animation has already been started
    // if ($elem.hasClass('start')) return;

    if (isElementInViewport($see)) {
        // Start the animation
        // $elem.addClass('start');
	$see.addClass('animated fadeInUp');

    }
}

// Capture scroll events
$(window).scroll(function(){
    fadeInCheckAnimation('#portfolio-heading');
    fadeInLeftCheckAnimation('.skillsLeft');
    fadeInRightCheckAnimation('.skillsRight');
    fadeInUpCheckAnimation('.contact');

    fadeInLeftCheckAnimation('.radio-left');
    fadeInLeftCheckAnimation('.gumbo-left');
    fadeInLeftCheckAnimation('.alex-left');
    // fadeInLeftCheckAnimation('.zen-left');
    fadeInLeftCheckAnimation('.tribune-left');
    // fadeInLeftCheckAnimation('.magazine-left');

    fadeInRightCheckAnimation('.radio-right');
    fadeInRightCheckAnimation('.gumbo-right');
    fadeInRightCheckAnimation('.alex-right');
    // fadeInRightCheckAnimation('.zen-right');
    fadeInRightCheckAnimation('.tribune-right');
    // fadeInRightCheckAnimation('.magazine-right');

    // fadeInCheckAnimation('#idenity-heading');
    // fadeInCheckAnimation('#response-heading');
    // fadeInCheckAnimation('#html-heading');
    // fadeInCheckAnimation('#jquery-heading');
    // fadeInCheckAnimation('#ajax-heading');
    // fadeInCheckAnimation('#php-heading');
    // fadeInCheckAnimation('#seo-heading');
    // fadeInCheckAnimation('#documented-heading');
    // fadeInCheckAnimation('#more-heading');
});

}); //End Document