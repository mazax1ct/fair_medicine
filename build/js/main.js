//мобильное меню
$(document).on('click', '.js-mobile-menu-opener', function () {
  $('body').addClass('mobile-menu-open');
  $('.mobile-menu').addClass('is-open');
  return false;
});

//закрытие мобильное меню
$(document).on('click', '.js-mobile-menu-closer', function () {
  $('body').removeClass('mobile-menu-open');
  $('.mobile-menu').removeClass('is-open');
  return false;
});

//каталог и материалы
$(document).on('click', '.js-menu-opener', function () {
  if($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $(this).find('use').attr('xlink:href', '#burger');
    $('body').removeClass('menu-open');
    $('.header__dropdown').removeClass('is-open');
  } else {
    $('.js-menu-opener.is-active').find('use').attr('xlink:href', '#burger');
    $('.js-menu-opener.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $(this).find('use').attr('xlink:href', '#close');
    $('body').addClass('menu-open');
    $('.header__dropdown').removeClass('is-open');
    $('.header__dropdown[data-target="'+$(this).attr('data-target')+'"]').addClass('is-open');
  }
  return false;
});

//закрытие каталог и материалы
$(document).on('click', '.js-menu-closer', function () {
  $('body').removeClass('menu-open');
  $('.header__dropdown').removeClass('is-open');
  $('.js-menu-opener.is-active').find('use').attr('xlink:href', '#burger');
  $('.js-menu-opener.is-active').removeClass('is-active');
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});
