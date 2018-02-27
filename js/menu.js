var menu =
{
    init : function()
    {
        $('#mobile_menu_link').bind('click', this, this.toggle);
        $('#mobile_menu_item a').bind('click', this, this.hide);
        $(window).bind('resize', this, this.show_full_screen);
    },

    // 判斷是否為 mobile 模式
    is_mobile_enable : function()
    {
        return (screen.availWidth <= 750 || window.outerWidth <= 750) ? true : false;
    },

    // 選單顯示
    show : function()
    {
        if (!menu.is_mobile_enable()) return true;

        $('#mobile_menu_item').slideDown();
        $('#mobile_lang_select').slideDown();
        $('#mobile_menu_link').attr('show', 1);
    },

    // 選單隱藏
    hide : function()
    {
        if (!menu.is_mobile_enable()) return true;

        $('#mobile_menu_item').slideUp();
        $('#mobile_lang_select').slideUp();
        $('#mobile_menu_link').attr('show', 0);
    },

    // 顯示切換
    toggle : function(event)
    {
        if (!menu.is_mobile_enable()) return true;

        var show = $('#mobile_menu_link').attr('show');
        if (show != 1)
        {
            menu.show();
        }
        else
        {
            menu.hide();
        }

        // 取消氣泡事件
        var evt = event ? event : window.event;
        if (evt.stopPropagation)    evt.stopPropagation();
        if (evt.cancelBubble!=null) evt.cancelBubble = true;
    },

    // 全屏顯示選單
    show_full_screen : function()
    {
        if (!menu.is_mobile_enable())
        {
            $('#mobile_menu_item').show();
            $('#mobile_lang_select').show();
            $('#mobile_menu_link').attr('show', 1);
        }
    },

    // 捲動效果
    scroll : function (id)
    {
        var top = $(id).offset().top;
        $("html,body").animate({scrollTop: top + -40 + 'px'}, 1500);
    }
};