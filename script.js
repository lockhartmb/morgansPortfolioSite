$(document).ready(() => {

    $('.menuOpen').on('click', () => {

        if ($('.menu').hasClass('showMenu')) {
            $('.menu').fadeOut();
            $('.menu').removeClass('showMenu');
        } else {
            $('.menu').fadeIn();
            $('.menu').addClass('showMenu');
        }
    })

    $('.closeMenu').on('click', () => {
        $('.menu').fadeOut();
        $('.menu').removeClass('showMenu');
    })
    
})