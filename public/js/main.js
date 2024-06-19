
'use strict';

var window_w = $(window).innerWidth();


$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


});


(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.nav-menu').slideToggle(400);
		event.preventDefault();
	});


})(jQuery);

