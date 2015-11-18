(function($) {
  "use strict";

  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  $('#mainNav').affix({
    offset: {
      top:100
    }
  })

  new WOW().init();
})(jQuery)
