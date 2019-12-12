$(function(){
  var $big;
  $("ul li").mouseenter(function(event){
    $big = $("<img class='big-img' src=" + '"' + $(this).find('img').attr('data-big') + '"' + " >");
    $big.css({
      left: event.pageX + 10,
      top: event.pageY + 10,
    });

    $('body').append($big);
  });

  $("ul li").mouseleave(function () {
    $(".big-img").remove();
  });

  $("ul li").mousemove(function (event) {
    $(".big-img").css({
      left: event.pageX + 10,
      top: event.pageY + 10,
    })
  });
});
