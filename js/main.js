
$(function () {

  //aos 초기화
  $(window).load(function () {
    $('#visualWrap .slick .slide').addClass('active')
    AOS.init({
      duration: 2000
    });
  });

  $('#visualWrap .slick').on('afterChange', function (slick, currentSlide, nextSlide) {
    $('#visualWrap .slick .slide').addClass('active');
  });
  $('#visualWrap .slick').on('beforeChange', function (slick, currentSlide, nextSlide) {
    $('#visualWrap .slick .slide').removeClass('active');
  });

  $(window).scroll(function () {
    let scrollPos = $(window).scrollTop();

    $('.scrollElement').each(function () {
      let elementOffset = $(this).offset().top;

      if (scrollPos + $(window).height() > elementOffset) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });

  //메인
  $("#visualWrap .slick").slick({
    autoplay: false,
    arrows: true,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    fade: true,
    prevArrow: $('#visualWrap .control .prev'),
    nextArrow: $('#visualWrap .control .next'),
  });

  //사업 영역 
  $("#businessWrap .slick").slick({
    variableWidth: true,
    autoplay: false,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: $('#businessWrap .controlBox .prev'),
    nextArrow: $('#businessWrap .controlBox .next'),
  });


});
