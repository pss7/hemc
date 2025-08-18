
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

  /* 헤더 */
  $('#headerWrap .depth01 > li > a').mouseover(function () {
    $('#headerWrap .headerBottomWrap .depth02').fadeIn();
    $('#headerWrap .bg').fadeIn();
  });
  $('#headerWrap').mouseleave(function () {
    $('#headerWrap .headerBottomWrap .depth02').fadeOut();
    $('#headerWrap .bg').fadeOut();
  });

  //사이트맵
  $('#headerWrap .sitemapBtn').click(function () {
    $('.sitemapBox').fadeIn();
  })
  $('#headerWrap .sitemapBox .closeBtn').click(function () {
    $('.sitemapBox').fadeOut();
  })

  //모바일메뉴
  $('#headerWrap .mobileDepth01 > li:has(ul)').children('h2').addClass('arrow');
  $('#headerWrap .mobileDepth01 li h2 a').click(function () {
    if ($(this).parent().hasClass('active')) {
      $('#headerWrap .mobileDepth01 li h2 a').parent().removeClass('active');
      $('#headerWrap .mobileDepth01 li h2 a').parent().next().slideUp();
    } else {
      $('#headerWrap .mobileDepth01 li h2 a').parent().removeClass('active');
      $('#headerWrap .mobileDepth01 li h2 a').parent().next().slideUp();
      $(this).parent().addClass('active');
      $(this).parent().next().slideDown();
    }
  });

  $('#headerWrap .mobileMenuBtn').click(function () {
    $('#headerWrap .mobileMenuWrap').fadeIn(200);
    $('#headerWrap .mobileMenuBox').animate({ right: 0 }, 250);
  });

  $('#headerWrap .closeBtn').click(function () {
    $('#headerWrap .mobileMenuBox').animate({ right: '-100%' }, 250, function () {
      $('#headerWrap .mobileMenuWrap').fadeOut(200);
    });
  });

  $('#headerWrap .mobileMenuWrap').click(function () {
    $('#headerWrap .mobileMenuBox').animate({ right: '-100%' }, 250, function () {
      $('#headerWrap .mobileMenuWrap').fadeOut(200);
    });
  });

  $('#headerWrap .mobileMenuBox').click(function (e) {
    e.stopPropagation();
  });

});
