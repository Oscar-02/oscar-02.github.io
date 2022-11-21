jQuery ('document').ready(function($){

var menuBtn = $('.menu-icono'),
menu = $('.navegation ul'),
main = $('.main')
;

menuBtn.click(function() {
    if( menu.hasClass('show') ){
        main.removeClass('menu-showing')
       menu.removeClass('show');

    }else{
        main.addClass('menu-showing')
        menu.addClass('show');

    }
})

$('.submenu').click(function(){
    $(this).children('.children').slideToggle();
})

 $('.submenu2').click(function(){
    $(this).children('.children2').slideToggle();
})

$('.submenu3').click(function(){
    $(this).children('.children3').slideToggle();
})

$('.submenu4').click(function(){
    $(this).children('.children4').slideToggle();
}) 




});

