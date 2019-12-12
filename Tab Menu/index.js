$(function(){
  $(".tab ul li").mouseenter(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var $index = $(this).index();
    $(".tab-content div").eq($index).css("display", 'block');
    $(".tab-content div").eq($index).siblings().css("display", 'none');
  });

  $("#agree").click(function(){
    $("#nextStep").prop("disabled", !$(this).prop("checked"));
  })

});