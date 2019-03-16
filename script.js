$(document).ready(() => {

    $('a').smoothScroll({
        offset: 0,
        speed: 800
    });

    // toggling menu open

    // $('.menuOpen').on('click', () => {
    //     console.log('i was clicked!');
    //     $('.menu').toggleClass('showMenu');
    // })
    
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