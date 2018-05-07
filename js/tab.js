(function($){
  $('.WorkTab li').each(function(i){
    var _i = i;
    $(this).click(function(){
      $(this).parent().children().removeClass('focus').eq(_i).addClass('focus');
      $('.WorkContent').children('ul').hide().eq(_i).fadeIn('slow');
    });
  });
})(jQuery);