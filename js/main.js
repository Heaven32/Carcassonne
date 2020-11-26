$(document).on('click', '.dropdown-menu', e => e.stopPropagation());

//Menu make it as accordion for smaller screens
if ($(window).width() < 992) {
  $('.dropdown-menu a').click(function(e) {
    e.preventDefault();
      if($(this).next('.submenu').length) $(this).next('.submenu').toggle();
  });
};

// Time to scroll the carousel
$('#recipeCarousel').carousel({interval: 100000});

// Advances one slide at a time
$('.carousel .carousel-item').each(function() {
    const minPerSlide = 4;
    let next = $(this).next();
    if (!next.length) next = $(this).siblings(':first');
    
    next.children(':first-child').clone().appendTo($(this));
    
    for (let i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) next = $(this).siblings(':first');
        
        next.children(':first-child').clone().appendTo($(this));
    };
});


  