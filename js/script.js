$(function () {
  let $items = $('.reviews__list .reviews__element');
  let $humburger = $('.humburger');
  let $menu = $('.main-header__list');
  let $close = $('.main-header__close');
  let $body = $('body');
  let $shadow = $('.shadow');
  
  $humburger.on("click", function() {
    $menu.addClass('active');
    $close.addClass('active');
    $body.addClass('no-scroll');
    $shadow.addClass('active');
  });

  $close.on("click", function() {
    $menu.removeClass('active');
    $close.removeClass('active');
    $body.removeClass('no-scroll');
    $shadow.removeClass('active');
  });

  $shadow.on("click", function() {
    $menu.removeClass('active');
    $close.removeClass('active');
    $body.removeClass('no-scroll');
    $shadow.removeClass('active');
  });

  let $services = $('.services__element a');
    $services.on("click", function(e) {
      e.preventDefault();
      $body.addClass('no-scroll');
      $wrapper = $(this.parentNode).find('.services__element-wrapper');
      $shadowElement = $(this.parentNode).find('.services__element-shadow');

      $wrapper.addClass('active');   
      $shadowElement.addClass('active');

      $shadowElement.on('click', function() {
        $body.removeClass('no-scroll');
        $(this).removeClass('active');
        $wrapper.removeClass('active');
      })
  });

  $('.scroll-link').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    
    let target = this.hash,
    $target = $(target);
      
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
      }, 500, 'swing', function () {
        window.location.hash = target;
      });
    });


    // Начать здесь
    $('.form__select').on('change', function (e) {
      var valueSelected = this.value;
    });

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
      let max = 0;

      $items.each(function () {
          let h = $(this).find('> div').outerHeight();

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
