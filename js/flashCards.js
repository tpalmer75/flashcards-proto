$(document).ready(function() {

	// Detect touch screens and add class to HTML
    var is_touch_device = 'ontouchstart' in document.documentElement;

    if (is_touch_device) {
    	$('html').addClass('touch');
    } else {
    	$('html').addClass('no-touch');
    }
	// Flip flashcards on click
	var flipTrigger = $('.flip-button');

	flipTrigger.click(function() {
		var card = $(this).parent('.button-container').siblings('.card').toggleClass('flipped');
	});

	var container = $('.card-container');

	// Swipe recognition with touchSwipe.js
	container.swipe( { swipeLeft:swipe, swipeRight:swipe, allowPageScroll:"vertical" });

	// Function for swiping left
	function swipe(swipe, direction, distance, duration, fingerCount) {
		$(this).find('.card').toggleClass('flipped');
	};


});