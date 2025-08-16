
$(function () {

  //상단으로 이동
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });

  $("#top").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //사이트맵
  $('#headerWrap .sitemapBtn').click(function(){
    $('.sitemapBox').fadeIn();
  })
    $('#headerWrap .sitemapBox .closeBtn').click(function(){
    $('.sitemapBox').fadeOut();
  })

});
