var resize_scroll = function(e) {
  var block = $('.compare__top');
  var blockOffsetTop = block.offset().top;
  if($(window).scrollTop() > blockOffsetTop) {
    $('.compare__top .compare__container').addClass('scrolled');
  } else {
    $('.compare__top .compare__container').removeClass('scrolled');
  }

  var compareHeight = $('.compare').height();
  if($(window).scrollTop() > blockOffsetTop + compareHeight - block.height()){
    $('.compare__top .compare__container').removeClass('scrolled');
  }
};

$(document).ready(function () {
  resize_scroll();

  $('.compare__top').height($('.compare__top .compare__container').height());

  if($('.compare__top .compare__container-inner').width() <= $('.compare__top .compare__container').width()) {
    $('.button-next').css('display', 'none');
  }
});

$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

var translate = 0;

function next() {
  return translate -= 290;
}

function prev() {
  return translate += 290;
}

$(document).on('click', '.button-next', function () {
  if($('.compare__container-inner').width() > $('.compare__container').width()) {
    var tr = next();
    $('.compare__container-inner').css('transform', 'translateX('+ tr +'px)');
    $('.button-prev').css('display', 'flex');

    var comp = 0;

    if($('body').width() > 1890) {
      comp = -290;
    }

    var sum = $('.compare__container-inner').width() + tr + comp;

    if(sum <= $('.compare__container').width()) {
      $('.button-next').css('display', 'none');
    }

    return false;
  }
});

$(document).on('click', '.button-prev', function () {
  var tr = prev();
  $('.compare__container-inner').css('transform', 'translateX('+ tr +'px)');
  if(tr == 0) {
    $('.button-prev').css('display', 'none');
  }
  $('.button-next').css('display', 'flex');
  return false;
});
