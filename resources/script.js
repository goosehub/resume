// Preloader
	$(window).load(function(){ 
    $('#preloader').fadeOut(2000,function(){$(this).remove();});
});

	$('#headline').addClass('animated fadeInLeft');
	$('#sub-headline').addClass('animated fadeInRight');
	$('#intro-p').addClass('animated bounceIn');






// Parallax

$(document).ready(function()
{

var ParallaxManager, ParallaxPart;
 
ParallaxPart = (function() {
  function ParallaxPart(el) {
    this.el = el;
    this.speed = parseFloat(this.el.getAttribute('data-parallax-speed'));
    this.maxScroll = parseInt(this.el.getAttribute('data-max-scroll'));
  }
 
  ParallaxPart.prototype.update = function(scrollY) {
    if (scrollY > this.maxScroll) { return; }
    var offset = -(scrollY * this.speed);
    this.setYTransform(offset);
  };
 
  ParallaxPart.prototype.setYTransform = function(val) {
    this.el.style.webkitTransform = "translate3d(0, " + val + "px, 0)";
    this.el.style.MozTransform    = "translate3d(0, " + val + "px, 0)";
    this.el.style.OTransform      = "translate3d(0, " + val + "px, 0)";
    this.el.style.transform       = "translate3d(0, " + val + "px, 0)";
    this.el.style.msTransform     = "translateY(" + val + "px)";
  };
 
  return ParallaxPart;
 
})();
 
ParallaxManager = (function() {
  ParallaxManager.prototype.parts = [];
 
  function ParallaxManager(elements) {
    if (typeof elements === 'array' && elements.length) {
      this.elements = elements;
    }
    if (typeof elements === 'object' && elements.item) {
      this.elements = Array.prototype.slice.call(elements);
    } else if (typeof elements === 'string') {
      this.elements = document.querySelectorAll(elements);
      if (this.elements.length === 0) {
        throw new Error("Parallax: No elements found");
      }
      this.elements = Array.prototype.slice.call(this.elements);
    } else {
      throw new Error("Parallax: Element variable is not a querySelector string, Array, or NodeList");
    }
    for (var i in this.elements) {
      this.parts.push(new ParallaxPart(this.elements[i]));
    }
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
 
  ParallaxManager.prototype.onScroll = function() {
    window.requestAnimationFrame(this.scrollHandler.bind(this));
  };
 
  ParallaxManager.prototype.scrollHandler = function() {
    var scrollY = Math.max(window.pageYOffset, 0);
    for (var i in this.parts) { this.parts[i].update(scrollY); }
  };
 
  return ParallaxManager;
 
})();
 
new ParallaxManager('.parallax-layer');









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

// $(window).scroll(function() {
// 	var scrollTop = $(window).scrollTop();
// 	var divam = 1;
// 	$(".intro").css({
// 	  "background-position":"0px -"+scrollTop/divam+"px"     
// 	});
// 	  $(".intro").css({
// 	     "margin-top":"-"+scrollTop+"px"
// 	});
// });

}); //End Document