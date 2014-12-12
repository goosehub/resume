$(document).ready(function()
{
// Preloader
	$(window).load(function(){ 
    $('#preloader').fadeOut(2000,function(){$(this).remove();});
});
	$('#headline').addClass('animated bounceInLeft');
	$('#sub-headline').addClass('animated bounceInRight');
	$('#intro-p').addClass('animated bounceIn');

}); //End Document