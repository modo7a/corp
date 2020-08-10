// start global $ alert  console
$(function() {


    "use strict";
    // adjust header height
    var myHeader = $(".header");
    var mySlider = $('.bxslider');


    myHeader.height($(window).height());
    $(window).resize(function() {
        myHeader.height($(window).height());
        mySlider.each(function() {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        });

    });
    // add active class to links

    $(".links li a").click(function() {
        $(this).parent().addClass("active").siblings().removeClass("active");

    });
    // Adjust BXslider list item center

    mySlider.each(function() {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

    });





    // trigger th BX Slider
    $(document).ready(function() {
        mySlider.bxSlider({
            pager: false
        });
    });

    // smooth scroll to div
    $('.links li a').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);
        console.log($(this).data('value'));

    });
    // our autoslider.


    // use shuffle plugine
    // var mixer = mixitup('#container');



    $(document).ready(function() {
        $('html').niceScroll({
            cursorcolor: '#1abc9c',
            cursorborder: '1px solid #1abc9c'
        });



    });

    // $('#container').mixItUp();
    // triger nice scroll

    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorborder: '1 px solid #1abc9c'
    });






});

(function autoSlider() {
    $('.slider .active').each(function() {

        if (!$(this).is(':last-child')) {
            $(this).delay(3000).fadeOut(1000, function() {
                $(this).removeClass('active').next().addClass('active').fadeIn();
                autoSlider();

            });


        } else {
            $(this).delay(3000).fadeOut(1000, function() {
                $(this).removeClass('active');
                $('.slider div').eq(0).addClass('active').fadeIn();
                autoSlider();



            });
        }

    });


    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorborder: '1px solid #1abc9c'
    });


}());








// end global