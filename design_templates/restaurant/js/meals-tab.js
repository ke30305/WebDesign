(function($){
  // 用 each 遍歷頁籤
  $('.menu-tab li').each(function(i){
    var _i = i;

    // 綁定 click 事件到頁籤上，若要改為滑鼠移入切換頁籤的話，將 click 改為 mouseenter
    $(this).click(function(){
      // 移除其他頁籤的 class，並將 class 新增至所選頁籤
      $(this).parent().children().removeClass('infocus').eq(_i).addClass('infocus');
      // 隱藏其他頁籤的內容，並顯示所選頁籤的內容
      $('.menu-content').children('ul').hide().eq(_i).show();
    });
  });
})(jQuery);