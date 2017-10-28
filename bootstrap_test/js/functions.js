$(document).ready(function($) {
	$("#to-champs").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#nba-champs").offset().top

	    }, 1000);
	});	
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
});