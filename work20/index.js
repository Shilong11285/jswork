//默认情况下，显示第一个分类下的菜单
$('#fold>ul>li:first').find('.wrap').css({
    dispiay: 'block'
});
//根据用户单击，叠加或展开对应的菜单
$('#fold>ul>li').click(function(){
    $(this).siblings('li').find('.wrap').css({
        display: 'none'
    });
    $(this).find('.wrap').css({
        display: 'block'
    });
});