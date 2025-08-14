
$(function () {

  $('.breadcrumbBox .depthBox > a').click(function(){


    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).next().slideUp();
    }else{
      $(this).addClass('active');
      $(this).next().slideDown();
    }

    return false;

  });

});
