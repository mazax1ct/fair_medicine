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

  $('.js-simple-slider').slick({
    dots: false,
    prevArrow: '<button class="button-prev" title="Назад"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_prev" /></svg></button>',
    nextArrow: '<button class="button-next" title="Вперед"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_next" /></svg></button>'
  });
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
