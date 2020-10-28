//переопределение настроек fancybox
$.fancybox.defaults.hash = false;

$(document).ready(function () {
  //плавающее меню
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 60
        });
      }, 100);
    }

    //если блок для контента пустой, открепляем плавающее левое меню
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }

  //слайдер партнеров
  if ($(".js-partners").length) {
    $('.js-partners').slick({
      mobileFirst: true,
      slidesToShow: 1,
      dots: false,
      prevArrow: '<button class="button-prev" title="Назад"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_prev" /></svg></button>',
      nextArrow: '<button class="button-next" title="Вперед"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_next" /></svg></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }

  //простой слайдер картинок
  if ($(".js-simple-slider").length) {
    $('.js-simple-slider').slick({
      dots: false,
      prevArrow: '<button class="button-prev" title="Назад"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_prev" /></svg></button>',
      nextArrow: '<button class="button-next" title="Вперед"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_next" /></svg></button>'
    });
  }

  //картинки в деталке каталога (мобила)
  if ($(".catalog-detail__mobile-images .js-catalog-detail-slider").length) {
    $('.catalog-detail__mobile-images .js-catalog-detail-slider').slick({
      dots: false,
      arrows: false
    });

    //если картинок больше больше или 5, включаем маленький слайдер
    if($('.catalog-detail__mobile-images .catalog-detail__thumb').length >= 5) {
      $('.catalog-detail__mobile-images .js-catalog-detail-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.catalog-detail__mobile-images .js-catalog-detail-thumbs').slick('slickGoTo', nextSlide);
      });

      $('.catalog-detail__mobile-images .js-catalog-detail-thumbs').slick({
        mobileFirst: true,
        asNavFor: '.catalog-detail__mobile-images .js-catalog-detail-slider',
        dots: false,
        arrows: false,
        slidesToShow: 4,
        focusOnSelect: true
      });
    } else {
      //при переключении большого слайда переключаем маленькие
      $('.catalog-detail__mobile-images .js-catalog-detail-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.catalog-detail__mobile-images .catalog-detail__thumb').removeClass('slick-current');
        $('.catalog-detail__mobile-images .catalog-detail__thumb').eq(nextSlide).addClass('slick-current');
      });

      //при нажатии на маленькие картинки меняем большой слайд
      $('.catalog-detail__mobile-images .catalog-detail__thumb').on('click', function () {
        $('.catalog-detail__mobile-images .catalog-detail__thumb').removeClass('slick-current');
        $(this).addClass('slick-current');
        $('.catalog-detail__mobile-images .js-catalog-detail-slider').slick('slickGoTo', $(this).index());
      });
    }
  }

  //картинки в деталке каталога (десктоп)
  if ($(".catalog-detail__left .js-catalog-detail-slider").length) {
    $('.catalog-detail__left .js-catalog-detail-slider').slick({
      dots: false,
      arrows: false
    });

    //если картинок больше больше или 5, включаем маленький слайдер
    if($('.catalog-detail__left .catalog-detail__thumb').length >= 5) {
      $('.catalog-detail__left .js-catalog-detail-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.catalog-detail__left .js-catalog-detail-thumbs').slick('slickGoTo', nextSlide);
      });

      $('.catalog-detail__left .js-catalog-detail-thumbs').slick({
        mobileFirst: true,
        asNavFor: '.catalog-detail__mobile-images .js-catalog-detail-slider',
        dots: false,
        arrows: false,
        slidesToShow: 4,
        focusOnSelect: true
      });
    } else {
      //при переключении большого слайда переключаем маленькие
      $('.catalog-detail__left .js-catalog-detail-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.catalog-detail__left .catalog-detail__thumb').removeClass('slick-current');
        $('.catalog-detail__left .catalog-detail__thumb').eq(nextSlide).addClass('slick-current');
      });

      //при нажатии на маленькие картинки меняем большой слайд
      $('.catalog-detail__left .catalog-detail__thumb').on('click', function () {
        $('.catalog-detail__left .catalog-detail__thumb').removeClass('slick-current');
        $(this).addClass('slick-current');
        $('.catalog-detail__left .js-catalog-detail-slider').slick('slickGoTo', $(this).index());
      });
    }
  }
});

$(window).resize(function() {
  //плавающее меню
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 60
        });
      }, 100);
    }

    //если блок для контента пустой, открепляем плавающее левое меню
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }
});

$(window).on("orientationchange", function(event) {
  //плавающее меню
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 60
        });
      }, 100);
    }

    //если блок для контента пустой, открепляем плавающее левое меню
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }

  //перезапуск слайдеров
  if ($(".js-catalog-detail-slider").length) {
    setTimeout(function() {
      $('.js-catalog-detail-slider').slick('setPosition');

      $('.js-catalog-detail-thumbs').slick('setPosition');
    }, 100);
  }
});

//мобильное меню
$(document).on('click', '.js-mobile-menu-opener', function () {
  $('body').addClass('mobile-menu-open');
  $('.mobile-menu').addClass('is-open');
  document.addEventListener('click', closeMenu);
  return false;
});

//закрытие мобильное меню
$(document).on('click', '.js-mobile-menu-closer', function () {
  $('body').removeClass('mobile-menu-open');
  $('.mobile-menu').removeClass('is-open');
  document.removeEventListener('click', closeMenu);
  return false;
});

function closeMenu(evt) {
  if (!$('.mobile-menu__inner').is(evt.target) && $('.mobile-menu__inner').has(evt.target).length === 0) {
    $('body').removeClass('mobile-menu-open');
    $('.mobile-menu').removeClass('is-open');
    document.removeEventListener('click', closeMenu);
	}
}

//каталог и материалы
$(document).on('click', '.js-menu-opener', function () {
  if($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $(this).find('use').attr('xlink:href', '#burger');
    $('body').removeClass('menu-open');
    $('.header__dropdown').removeClass('is-open');
    document.removeEventListener('click', closeCatalog);
  } else {
    $('.js-menu-opener.is-active').find('use').attr('xlink:href', '#burger');
    $('.js-menu-opener.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $(this).find('use').attr('xlink:href', '#close');
    $('body').addClass('menu-open');
    $('.header__dropdown').removeClass('is-open');
    $('.header__dropdown[data-target="'+$(this).attr('data-target')+'"]').addClass('is-open');
    document.addEventListener('click', closeCatalog);
  }
  return false;
});

//закрытие каталог и материалы
$(document).on('click', '.js-menu-closer', function () {
  $('body').removeClass('menu-open');
  $('.header__dropdown').removeClass('is-open');
  $('.js-menu-opener.is-active').find('use').attr('xlink:href', '#burger');
  $('.js-menu-opener.is-active').removeClass('is-active');
  document.removeEventListener('click', closeCatalog);
  return false;
});

function closeCatalog(evt) {
  if (!$('.header__dropdown-inner, .js-menu-opener').is(evt.target) && $('.header__dropdown-inner, .js-menu-opener').has(evt.target).length === 0) {
    $('body').removeClass('menu-open');
    $('.header__dropdown').removeClass('is-open');
    $('.js-menu-opener.is-active').find('use').attr('xlink:href', '#burger');
    $('.js-menu-opener.is-active').removeClass('is-active');
    document.removeEventListener('click', closeCatalog);
	}
}

//попапы
$(document).on('click', '[data-fancybox]', function () {
  $.fancybox.destroy();
  var src= $(this).attr('data-src');
  setTimeout(function() {
    $.fancybox.open({
      src: src,
      opts: {
        toolbar: false,
        smallBtn: false
      }
    });

  },400);
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});

//показать/скрыть детальные характеристики на деталке
$(document).on('click', '.js-description-toggler', function () {
  if(!$(this).hasClass('is-open')) {
    $(this).text('Скрыть детальные характеристики');
    $(this).next('.catalog-detail__detail').slideDown();
    $(this).addClass('is-open');
  } else {
    $(this).text('Показать детальные характеристики');
    $(this).next('.catalog-detail__detail').slideUp();
    $(this).removeClass('is-open');
  }
  return false;
});

//аккордеон
$(document).on('click', '.js-accordion-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.accordion').find('.accordion__body').slideToggle();
  return false;
});

//разделы сравнения
$(document).on('click', '.js-compare-section-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.compare__section').find('.compare__section-list').toggleClass('is-open');
  return false;
});
