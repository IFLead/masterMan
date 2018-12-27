$(function () {
  var $items = $('.reviews__list .reviews__element');

  $('.reviews__list').owlCarousel({
      nav: true,
      loop: true,
      responsiveClass: true,
      autoWidth: true,
      dots: false,
      responsive: {
          0: {
            items: 1
          },
          1200: {
            items: 2
          }
      },
      onInitialized: function () {
          equalsHeight($items);
      },
      onResized: function () {
          equalsHeight($items);
    },
  });

  function equalsHeight($items) {
      var max = 0;

      $items.each(function () {
          var h = $(this).find('> div').outerHeight();

          if (h > max) {
              max = h;
          }
      });

      $items.css('min-height', max + 'px');

      setTimeout(function () {
          $('.reviews').trigger('refresh.owl.carousel');
      }, 1);
  }

});
