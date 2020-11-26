$(document).ready(function() { // We are waiting for the page to load
	$(".image").click(function(){	// Small image click event
	  	let img = $(this);	// Get the clicked image
		let src = img.attr('src'); // We get the path to the picture from this image
		$("body").append("<div class='popup'>" + //Adding popup markup to the document body
						 "<div class='popup_bg'></div>"+ // The block that will serve as a darkened background
						 "<img src='" + src + "' class='popup_img' />" + // Self-enlarged photo
						 "</div>"); 
		$(".popup").fadeIn(800); // Displaying the image slowly
		$(".popup_bg").click(function() {	// Blackout background click event	   
			$(".popup").fadeOut(800);	// Slowly removing the popup
			setTimeout(function() {	// Setting the timer
			    $(".popup").remove(); // Removing the pop-up markup
			}, 800);
		});
	});
});