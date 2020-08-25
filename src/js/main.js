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

$(document).on('click', '.js-menu-closer', function () {
  $('body').removeClass('menu-open');
  $('.header__dropdown').removeClass('is-open');
  $('.js-menu-opener.is-active').find('use').attr('xlink:href', '#burger');
  $('.js-menu-opener.is-active').removeClass('is-active');
  return false;
});
