$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu, .header__socials').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.footer__label').click(function(event){
        if($('.footer__spoiler').hasClass('one')){
            $('.footer__label').not($(this)).removeClass('active');
            $('.spoiler__block').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
});