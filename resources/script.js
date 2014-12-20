// Preloader
    $(window).load(function(){ 
    $('#preloader').fadeOut(2000,function(){$(this).remove();});
});

$(document).ready(function()
{

// Parallax

$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var fronthill = 0.7;
	var backhill = 0.8;
	var mountains = 5;
	var suns = 5;
    var cloudshigh = 5;
    var cloudslow = 5;
	$(".layer-1").css({
	  "background-position":"0px -"+scrollTop/fronthill+"px"     
	});
      $(".layer-1").css({
         "margin-top":"-"+scrollTop+"px"
    });
	$(".layer-2").css({
	  "background-position":"0px -"+scrollTop/backhill+"px"     
	});
      $(".layer-2").css({
         "margin-top":"-"+scrollTop+"px"
    });
	$(".layer-3").css({
	  "background-position":"0px -"+scrollTop/mountains+"px"     
	});
      $(".layer-3").css({
         "margin-top":"-"+scrollTop+"px"
    });
	$(".layer-4").css({
	  "background-position":"0px -"+scrollTop/suns+"px"     
	});
      $(".layer-4").css({
         "margin-top":"-"+scrollTop+"px"
    });
    $(".layer-5").css({
      "background-position":"0px -"+scrollTop/cloudshigh+"px"     
    });
      $(".layer-5").css({
         "margin-top":"-"+scrollTop+"px"
    });
    $(".layer-6").css({
      "background-position":"0px -"+scrollTop/cloudslow+"px"     
    });
      $(".layer-6").css({
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

    if (isElementInViewport($see)) {
        // Start the animation
        // $elem.addClass('start');
	$see.addClass('animated fadeIn');

    }
}

function fadeInLeftCheckAnimation(see) {
    var $see = $(see);

    if (isElementInViewport($see)) {
        // Start the animation
        // $elem.addClass('start');
	$see.addClass('animated fadeInLeft');

    }
}

function fadeInRightCheckAnimation(see) {
    var $see = $(see);

    if (isElementInViewport($see)) {
        // Start the animation
        // $elem.addClass('start');
	$see.addClass('animated fadeInRight');

    }
}

function fadeInUpCheckAnimation(see) {
    var $see = $(see);

    if (isElementInViewport($see)) {
        // Start the animation
        // $elem.addClass('start');
	$see.addClass('animated fadeInUp');

    }
}
// Check if mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
// If mobile, do not run scripts.
}else
{
//Now include js files

  // Capture scroll events
  $(window).scroll(function(){
      fadeInCheckAnimation('#portfolio-heading');
      fadeInLeftCheckAnimation('.skillsLeft');
      fadeInRightCheckAnimation('.skillsRight');
      fadeInUpCheckAnimation('.contact');

      fadeInLeftCheckAnimation('.radio-left');
      fadeInLeftCheckAnimation('.gumbo-left');
      fadeInLeftCheckAnimation('.alex-left');
      fadeInLeftCheckAnimation('.tribune-left');

      fadeInRightCheckAnimation('.radio-right');
      fadeInRightCheckAnimation('.gumbo-right');
      fadeInRightCheckAnimation('.alex-right');
      fadeInRightCheckAnimation('.tribune-right');

  });

}

}); //End Document