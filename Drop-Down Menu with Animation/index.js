$(function() {
  $('.nav>li').mouseenter(function () {
    $(this).children('.sub').stop().slideDown(1000);
  });

  $('.nav>li').mouseleave(function () {
    $(this).children('.sub').stop().slideUp(1000);
  });
})