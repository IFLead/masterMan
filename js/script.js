$(function () {
  var $items = $('.reviews__list .reviews__element');
  var $humburger = $('.humburger');
  var $menu = $('.main-header__list');
  var $close = $('.main-header__close');
  var $body = $('body');
  var $shadow = $('.main-header__shadow');
  
  $humburger.on("click", function() {
    $menu.addClass('active');
    $close.addClass('active');
    $body.addClass('no-scroll');
    $shadow.addClass('active');
  })

  $close.on("click", function() {
    $menu.removeClass('active');
    $close.removeClass('active');
    $body.removeClass('no-scroll');
    $shadow.removeClass('active');
  })

  $shadow.on("click", function() {
    $menu.removeClass('active');
    $close.removeClass('active');
    $body.removeClass('no-scroll');
    $shadow.removeClass('active');
  })

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
