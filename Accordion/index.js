$(function(){
  var $lis = $('div li');
  $lis.mouseover(function(){
    $(this).stop(true).animate({width:500},1000).siblings().stop(true).animate({width:140},1000);
  }).mouseout(function(){ //鼠标离开时，将所有图片所在li变为默认宽
    $lis.stop(true).animate({width:200},1000);
  });
})