
$(function () {

  /* 서브 메뉴 */
  $('.breadcrumbBox .depthBox > a').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(this).addClass('active');
      $(this).next().slideDown();
    }

    return false;

  });

  //aos 초기화
  $(window).load(function () {
    $('#subWrap .subTopBox').addClass('active')
    AOS.init({
      duration: 2000
    });
  });

});
