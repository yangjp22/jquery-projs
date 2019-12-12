$(function() {
  $(".nav li").click(function () {
    if($(this).hasClass("current")){
      let $sub = $(this).children(".sub");
      $sub.slideUp(500);
      $(this).removeClass('current');
    } else {
      let $sub = $(this).children(".sub");
      $(this).addClass('current');
      $(this).siblings().removeClass('current');
      $sub.slideDown(500);
      $(this).siblings().children('.sub').slideUp(500);
    }
  });
});