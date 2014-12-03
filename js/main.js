$(document).ready(function() {
	
	var edit = $('.edit-mode');
	var page = $('body');

	// Toggle Editing view
	edit.click(function() {
		page.toggleClass('editing');

		// Resize textareas according to content
		$(function () {
		    $("textarea").each(function () {
		        this.style.height = (this.scrollHeight+10)+'px';
		    });
		});
	});


	
	var cardOnTop = $('#top-card');
	var cardOnBottom = $('#bottom-card');
	var flashCards = $('.editor .flashcard-container');

	var allowClose = function() {
		// Delete flashcards on click
		$('.close').click(function(e) {
			$(this).parent('.flashcard').slideUp(300);
			e.preventDefault();
		});
	};

	allowClose();


	// Prepend new flashcard to top
	cardOnTop.click(function(e) {
		flashCards.prepend('<div class="flashcard cf"><a href="" class="close"><i class="fa fa-close"></i></a><div class="col col-left"><textarea></textarea></div><div class="col col-right"><textarea></textarea></div></div>');
		e.preventDefault();

		// Recognize the new close button
		allowClose();
	});

	// Append new flashcard to bottom
	cardOnBottom.click(function(e) {
		flashCards.append('<div class="flashcard cf"><a href="" class="close"><i class="fa fa-close"></i></a><div class="col col-left"><textarea></textarea></div><div class="col col-right"><textarea></textarea></div></div>');
		e.preventDefault();	

		// Recognize the new close button
		allowClose();	
	});

});