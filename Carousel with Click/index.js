$(function(){
  var index = 0;
  var timer = null;

  $('.arrow_right').click(function(){
    index++;
    if(index > 5){
      index = 0;
    }
    change();
  });
  $('.arrow_left').click(function(){
    index--;
    if(index < 0){
      index = 5;
    }
    change();
  });

  $("ol li").mouseover(function(){
    index = $(this).index();
    change();
  });


  $('.scroll-wrap').mouseenter(function(){
    clearInterval(timer);
  }).mouseleave(function(){
    timer = setInterval(function(){
      $('.arrow_right').click();
    },2000);
  });

  timer = setInterval(function(){
    $('.arrow_right').click();
  },2000);

  function change(){
    $('.scoller ul').stop(true).animate({left:-index*400},500);

    $('ol li:eq('+index+')').addClass('on').siblings().removeClass('on');
  }
})