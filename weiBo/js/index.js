$(function () {
  // 监听内容的实时输入
  $("body").delegate(".comment", "propertychange input", function(){
    // 判断是否输入了内容
    if ($(this).val().length>0){
      $(".send").prop("disabled", false);
    } else{
      // 让按钮不可用
      $(".send").prop("disabled", true);
    }
  });

  $(".send").click(function () {
    // 拿到用户输入的内容
    var $text = $(".comment").val();
    // 创建节点
    var $content = createElement($text);
    $(".messageList").prepend($content);
  })

  // 委托顶任务
  $("body").delegate(".infoTop", 'click',  function(){
    var exist = parseInt($(this).text());
    console.log(exist);
    $(this).text(exist + 1);
  })
  // 委托踩任务
  $("body").delegate(".infoDown", 'click', function(){
    var exist = parseInt($(this).text());
    $(this).text(exist + 1);
  })

  // 委托删除评论
  $("body").delegate(".del", 'click', function(){
    $(this).parents(".info").remove();
  })
  // 节点创建方法
  function createElement(content) {
    var $weibo = $("<div class=\"info\">\n" +
        "\t\t\t\t<p class=\"infoText\"><span>" + content + "</span></p>\n" +
        "\t\t\t\t<p class=\"infoOperation\">\n" +
        "\t\t\t\t\t<span class=\"infoTime\">" + formatDate() + "</span>\n" +
        "\t\t\t\t\t<span class=\"infoHandle\">\n" +
        "\t\t\t\t\t\t<a href=\"javascript:;\" class='infoTop'>0</a>\n" +
        "\t\t\t\t\t\t<a href=\"javascript:;\" class='infoDown'>0</a>\n" +
        "\t\t\t\t\t\t<a href=\"javascript:;\" class='del'>Delete</a>\n" +
        "\t\t\t\t\t</span>\n" +
        "\t\t\t\t</p>\n" +
        "\t\t\t</div>")
    return $weibo;
  }

  function addZero(val){
    return val < 10? '0'+ val: val;
  }

  function formatDate() {
    var date = new Date();
    var arr = [date.getFullYear()+'-'+addZero(date.getMonth()+1)+'-'+addZero(date.getDate()),
                addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds())];
    return arr.join(' ');
  }
})