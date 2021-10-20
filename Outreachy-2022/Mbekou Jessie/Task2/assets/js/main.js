$(function () {
    $('.preloader').hide();

    // Home Slider
    $(".home-slider").owlCarousel({
        loop: true,
        nav: true,
        center: true,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000
    });
     

});

$(document).on("scroll", function(){

    if ($(document).scrollTop() > 80){
      $("header").addClass("shrink");
    } else {
      $("header").removeClass("shrink");
    }
    
  });
  

  