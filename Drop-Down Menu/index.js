$(function () {
  $("#fengyunbang li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
})