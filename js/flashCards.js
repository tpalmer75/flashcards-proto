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

	// Function for swiping
	function swipe(swipe, direction, distance, duration, fingerCount) {
		$(this).find('.card.current').toggleClass('flipped');
	};

	// Create Card meter
	

	var rightWrong = $('.correct-button, .incorrect-button');

	rightWrong.click(function() {
		var status = $(this).data('status');


		var currentCard = $('.card.current');
		var cardNumber = currentCard.index();
		var checkNextCard = currentCard.next('.card').index();

		currentCard.hide().removeClass('current');
		currentCard.next('.card').show().addClass('current');
		if (status == 'correct') {
			$('.meter > div:nth-of-type(' + cardNumber + ')').addClass('correct');
		} else {
			$('.meter > div:nth-of-type(' + cardNumber + ')').addClass('incorrect');
		}

		
		// If there are no more cards
		if (checkNextCard == -1) {
			// Set the number of right and wrong answers
			var numberRight = $('.meter .correct').length;
			var numberWrong = $('.meter .incorrect').length;

			$('.stats').fadeIn(300);
			$('.button-container').fadeOut(300)

			$('.number-correct > span').text(numberRight);
			$('.number-incorrect > span').text(numberWrong);

			var percentage = Math.round(numberRight/(numberRight + numberWrong) * 100);

			$('.stats .options .percentage').text(percentage + '%');

		}
	});


});