
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
  $('#headerWrap .sitemapBtn').click(function () {
    $('.sitemapBox').fadeIn();
  })
  $('#headerWrap .sitemapBox .closeBtn').click(function () {
    $('.sitemapBox').fadeOut();
  })

  //모바일메뉴
  $('#headerWrap .mobileDepht01 > li:has(ul)').children('h2').addClass('arrow');
  $('#headerWrap .mobileDepht01 li h2 a').click(function () {
    if ($(this).parent().hasClass('active')) {
      $('#headerWrap .mobileDepht01 li h2 a').parent().removeClass('active');
      $('#headerWrap .mobileDepht01 li h2 a').parent().next().slideUp();
    } else {
      $('#headerWrap .mobileDepht01 li h2 a').parent().removeClass('active');
      $('#headerWrap .mobileDepht01 li h2 a').parent().next().slideUp();
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

});
