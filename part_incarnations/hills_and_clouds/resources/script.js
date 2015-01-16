// 
// 
// Hello
// 
// Thank you for taking time to look at my script
//
// I worked hard on it, and I hope you enjoy it.
//
// 
// 

// Let's start with the Preloader

// Note:
// If user has javascript disabled, html displays this element, otherwise, it is faded in with script

    $(window).load(function(){ 
    $('#preloader').fadeOut(2000,function(){$(this).remove();});
});

$(document).ready(function()
{

// Here is the Parallax you saw

// Note:
// If user is mobile, I disable the Parallax attempt to ensure mobile functionality

// First I get the window position
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();

// then I set the Paralax speed
  var foreground = 0.5;

// Finally, I do the Parallax logic
	$(".layer-2").css({
	  "background-position":"0px -"+scrollTop/foreground+"px"     
	});
      $(".layer-2").css({
         "margin-top":"-"+scrollTop+"px"
    });
});

// Here is the Animations you saw

// Here is a function to determine if element is in viewport
function isElementInViewport(elem) {
    var $elem = $(elem);

// First I get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

// Then I get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Here I set functions for checking elements and applying the desired effect

function fadeInCheckAnimation(see) {
    var $see = $(see);
    if (isElementInViewport($see)) {
    	$see.addClass('animated fadeIn');
    }
}

function fadeInLeftCheckAnimation(see) {
    var $see = $(see);
    if (isElementInViewport($see)) {
	$see.addClass('animated fadeInLeft');
    }
}

function fadeInRightCheckAnimation(see) {
    var $see = $(see);
    if (isElementInViewport($see)) {
	$see.addClass('animated fadeInRight');
    }
}

function fadeInUpCheckAnimation(see) {
    var $see = $(see);
    if (isElementInViewport($see)) {
	$see.addClass('animated fadeInUp');
    }
}

// Here I prevent mobile devices from running the animations to ensure mobile functionality

// Check if mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

// If mobile, I do not run scripts.

}else
{

// If not mobile, I run the functions on the elements

  // Capture scroll events
  $(window).scroll(function(){

      fadeInLeftCheckAnimation('.skillsLeft');
      fadeInRightCheckAnimation('.skillsRight');

      fadeInCheckAnimation('#portfolio-heading');

      fadeInLeftCheckAnimation('.radio-left');
      fadeInLeftCheckAnimation('.gumbo-left');

      fadeInRightCheckAnimation('.radio-right');
      fadeInRightCheckAnimation('.gumbo-right');

      fadeInUpCheckAnimation('.contact');

  });

}

// That's all folks

}); //End Document