(function($){
  // 用 each 遍歷頁籤
  $('.WorkTab li').each(function(i){
    var _i = i;

    // 綁定 click 事件到頁籤上，若要改為滑鼠移入切換頁籤的話，將 click 改為 mouseenter
    $(this).click(function(){
      // 移除其他頁籤的 class，並將 class 新增至所選頁籤
      $(this).parent().children().removeClass('focus').eq(_i).addClass('focus');
      // 隱藏其他頁籤的內容，並顯示所選頁籤的內容
      $('.WorkContent').children('ul').hide().eq(_i).show();
    });
  });
})(jQuery);