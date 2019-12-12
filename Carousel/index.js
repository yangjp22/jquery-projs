$(function() {
  var offset = 0;
  function autoPlay(){
    timer = setInterval(function(){
      offset -= 10;
      if (offset <= -1200){
        offset = 0;
      }
      $("ul").css("marginLeft", offset);
    }, 100);
  }
  autoPlay();

  $("li").hover(function(){
    clearInterval(timer);
    $(this).siblings().fadeTo(100, 0.5);
    $(this).fadeTo(100, 1);
  }, function(){
    autoPlay();
    $("li").fadeTo(100, 1);
  })
})