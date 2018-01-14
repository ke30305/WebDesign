(function($){
  var trigger = false;

  // 使內容高度等於第一頁籤內容高度 + 上下 padding
  $('.photo-contents').css('height', $('.photo-boxes div').eq(0).height() + 0);

  // 用 each 遍歷頁籤
  var tabs = $('.view-items a').each(function(i){
    var _i = i;

    // 為每個頁籤新增 tabid 屬性
    // 綁定 click 事件到頁籤上，若要改為滑鼠移入切換頁籤的話，將 click 改為 mouseenter
    $(this).attr('tabid', i).click(function(){
      // 當 trigger 為 false 時才作用，避免重複點按造成瀏覽器 crash
      if (trigger == false){
        // 取得目前的 tabid，以計算動畫的間距值（內容寬度 * 頁籤間距）
        var now = parseInt($(this).parent().children('.focus').attr('tabid')),
          gap = 620 * (_i - now);
          trigger = true;

        // 移除其他頁籤的 class，並將 class 新增至目前頁籤
        $(this).parent().children().removeClass('focus').eq(_i).addClass('focus');
        // 使內容移動一定間距
        $('.photo-boxes').animate({left: '-='+gap}, 620);
        // 使內容高度符合所選頁籤內容的高度（所選頁籤內容高度 + 上下 padding），動畫全部結束後，使 trigger 值返回 false
        $('.photo-contents').animate({height: $('.photo-boxes').children().eq(_i).height() + 0}, 620, function(){
          trigger = false;
        });
      }
    });
  });
})(jQuery);