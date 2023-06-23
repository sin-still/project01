$('#nav>ul>li').on('mouseover',function(){
    $('#nav>ul>li').parents('#nav').css({background: '#08347F'})
})
$('#nav>ul>li').on('mouseout',function(){
    $('#nav>ul>li').parents('#nav').css({background: 'none'})
})