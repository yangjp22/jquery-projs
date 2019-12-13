$(function () {
  var goods = {
  '0':'1 Stamp',
  '1':'30 Smile Points',
  '2':'1000 Coupon',
  '3':'1 Stamp',
  '4':'50 Smile Points',
  '5':'3 Stamps',
  '6':'500 Coupon',
  '7':'Free Delivery',
  '8':'10 Smile Points'};

  for (var i = 0; i < 9; i++){
    $("div span").eq(i).text(goods[i]);
  }

  $("p").click(function(){
    var index = 0;
    var total = parseInt((Math.random() * 10) + 9);
    var timer = setInterval(function(){
      index = index % 10;
      $("div span").eq(index).addClass('cur').siblings().removeClass('cur');
      index += 1;
      total--;
      if (total == 0){
        clearInterval(timer);
        $("div span").eq(index-1).fadeOut(500).fadeIn(500);
        $(".left").text("You win: " + goods[index-1]);
      }
    }, 100);
  });
});
