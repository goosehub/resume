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
    $('#preloader').fadeOut(1000,function(){$(this).remove();});
});

$(document).ready(function()
{
// Here is the initial intro Animations

setTimeout(function(){
  $('#headline').textillate({ in: { effect: 'rollIn' } });
}, 1000);

setTimeout(function(){
  $('#sub-headline').textillate({ in: { effect: 'fadeInRightBig' } });
}, 1750);

setTimeout(function(){
  $('#location').textillate({ in: { effect: 'fadeInLeftBig' } });
}, 2500);

setTimeout(function(){
  $('#down-hint').fadeIn(800);
}, 6000);

// Here is the post Intro animations
/*
setTimeout(function(){
  $('#headline').addClass('animated rubberBand');
  $('#sub-headline').addClass('animated rubberBand');
  $('#location').addClass('animated rubberBand');
}, 2000);
*/
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
      $see.css({ 'visibility': 'visible' });
      $see.addClass('animated '+action+'');
    }
}

// Capture scroll events and run animate.css animations
$(window).scroll(function(){

    animateCheckAndAction('.emphasis-top', 'pulse');
    animateCheckAndAction('.emphasis-mid', 'pulse');
    animateCheckAndAction('.emphasis-btm', 'pulse');

    animateCheckAndAction('.skills-heading', 'zoomIn');

    animateCheckAndAction('.skillsLeft', 'fadeInLeft');
    animateCheckAndAction('.skillsRight', 'fadeInRight');

    animateCheckAndAction('.portfolio-heading', 'zoomIn');

    animateCheckAndAction('.landgrab-left', 'fadeInLeft');
    animateCheckAndAction('.fivehundred-left', 'fadeInLeft');
    animateCheckAndAction('.radio-left', 'fadeInLeft');
    animateCheckAndAction('.gumbo-left', 'fadeInLeft');

    animateCheckAndAction('.landgrab-right', 'fadeInRight');
    animateCheckAndAction('.fivehundred-right', 'fadeInRight');
    animateCheckAndAction('.radio-right', 'fadeInRight');
    animateCheckAndAction('.gumbo-right', 'fadeInRight');

    animateCheckAndAction('.employed', 'fadeIn');

    animateCheckAndAction('.contact', 'fadeInUp');

});

/*
                                  ,_-=(!7(7/zs_.             
                               .='  ' .`/,/!(=)Zm.           
                 .._,,._..  ,-`- `,\ ` -` -`\\7//WW.         
            ,v=~/.-,-\- -!|V-s.)iT-|s|\-.'   `///mK%.        
          v!`i!-.e]-g`bT/i(/[=.Z/m)K(YNYi..   /-]i44M.       
        v`/,`|v]-DvLcfZ/eV/iDLN\D/ZK@%8W[Z..   `/d!Z8m       
       //,c\(2(X/NYNY8]ZZ/bZd\()/\7WY%WKKW)   -'|(][%4.      
     ,\\i\c(e)WX@WKKZKDKWMZ8(b5/ZK8]Z7%ffVM,   -.Y!bNMi      
     /-iit5N)KWG%%8%%%%W8%ZWM(8YZvD)XN(@.  [   \]!/GXW[      
    / ))G8\NMN%W%%%%%%%%%%8KK@WZKYK*ZG5KMi,-   vi[NZGM[      
   i\!(44Y8K%8%%%**~YZYZ@%%%%%4KWZ/PKN)ZDZ7   c=//WZK%!      
  ,\v\YtMZW8W%%f`,`.t/bNZZK%%W%%ZXb*K(K5DZ   -c\\/KM48       
  -|c5PbM4DDW%f  v./c\[tMY8W%PMW%D@KW)Gbf   -/(=ZZKM8[       
  2(N8YXWK85@K   -'c|K4/KKK%@  V%@@WD8e~  .//ct)8ZK%8`       
  =)b%]Nd)@KM[  !'\cG!iWYK%%|   !M@KZf    -c\))ZDKW%`        
  YYKWZGNM4/Pb  '-VscP4]b@W%     'Mf`   -L\///KM(%W!         
  !KKW4ZK/W7)Z. '/cttbY)DKW%     -`  .',\v)K(5KW%%f          
  'W)KWKZZg)Z2/,!/L(-DYYb54%  ,,`, -\-/v(((KK5WW%f           
   \M4NDDKZZ(e!/\7vNTtZd)8\Mi!\-,-/i-v((tKNGN%W%%            
   'M8M88(Zd))///((|D\tDY\\KK-`/-i(=)KtNNN@W%%%@%[           
    !8%@KW5KKN4///s(\Pd!ROBY8/=2(/4ZdzKD%K%%%M8@%%           
     '%%%W%dGNtPK(c\/2\[Z(ttNYZ2NZW8W8K%%%%YKM%M%%.          
       *%%W%GW5@/%!e]_tZdY()v)ZXMZW%W%%%*5Y]K%ZK%8[          
        '*%%%%8%8WK\)[/ZmZ/Zi]!/M%%%%@f\ \Y/NNMK%%!          
          'VM%%%%W%WN5Z/Gt5/b)((cV@f`  - |cZbMKW%%|          
             'V*M%%%WZ/ZG\t5((+)L\'-,,/  -)X(NWW%%           
                  `~`MZ/DZGNZG5(((\,    ,t\\Z)KW%@           
                     'M8K%8GN8\5(5///]i!v\K)85W%%f           
                       YWWKKKKWZ8G54X/GGMeK@WM8%@            
                        !M8%8%48WG@KWYbW%WWW%%%@             
                          VM%WKWK%8K%%8WWWW%%%@`             
                            ~*%%%%%%W%%%%%%%@~               
                               ~*MM%%%%%%@f`                 
                                   '''''                     
*/

// That's all folks

}); //End Document