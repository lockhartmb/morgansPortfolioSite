$(document).ready(() => {

    $('.menuOpen').on('click', () => {
        // console.log('i was clicked');
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