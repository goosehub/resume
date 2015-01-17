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

// Here is the initial intro Animations

setTimeout(function(){
  $('#headline').textillate({ in: { effect: 'rollIn' } });
}, 1000);

setTimeout(function(){
  $('#sub-headline').textillate({ in: { effect: 'fadeInRightBig' } });
}, 2500);

setTimeout(function(){
  $('#location').textillate({ in: { effect: 'fadeInLeftBig' } });
}, 4000);

// Here is the post Intro animations

setTimeout(function(){
  $('#headline').addClass('animated swing');
  $('#sub-headline').addClass('animated rubberBand');
  $('#location').addClass('animated shake');
}, 8000);

// Here is the post intro Animations you saw

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

// Here I set functions for applying the desired effect when in viewport

function animateCheckAndAction(see, action) {
    var $see = $(see);
    var $action = $(action);
    if (isElementInViewport($see)) {
      $see.addClass('animated '+action+'');
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

      animateCheckAndAction('.emphasis-top', 'pulse');
      animateCheckAndAction('.emphasis-mid', 'pulse');
      animateCheckAndAction('.emphasis-btm', 'pulse');

      animateCheckAndAction('.skills-heading', 'zoomIn');

      animateCheckAndAction('.skillsLeft', 'fadeInLeft');
      animateCheckAndAction('.skillsRight', 'fadeInRight');

      animateCheckAndAction('.portfolio-heading', 'zoomIn');

      animateCheckAndAction('.radio-left', 'fadeInLeft');
      animateCheckAndAction('.gumbo-left', 'fadeInLeft');

      animateCheckAndAction('.radio-right', 'fadeInRight');
      animateCheckAndAction('.gumbo-right', 'fadeInRight');

      animateCheckAndAction('.employed', 'fadeInUp');

      animateCheckAndAction('.contact', 'fadeInUp');

      animateCheckAndAction('.pdf', 'tada');

  });

}

// That's all folks

}); //End Document