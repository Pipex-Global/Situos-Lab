// Fix for dropdowns on mobile devices
!function ($) { 
        $(function(){
          $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { 
              e.stopPropagation(); 
          });
          $(document).on('click','.dropdown-menu a',function(){
              document.location = $(this).attr('href');
          });
        })
      }(window.jQuery)

function portfolio_effects() {

    //To switch directions up/down and left/right just place a "-" in front of the top/left attribute
    //Vertical Sliding
    $('.boxgrid.slidedown').hover(function () {
        $(".cover", this).stop().animate({
            top: '-260px'
        }, {
            queue: false,
            duration: 300
        });
    }, function () {
        $(".cover", this).stop().animate({
            top: '0px'
        }, {
            queue: false,
            duration: 300
        });
    });
    //Horizontal Sliding
    $('.boxgrid.slideright').hover(function () {
        $(".cover", this).stop().animate({
            left: '325px'
        }, {
            queue: false,
            duration: 300
        });
    }, function () {
        $(".cover", this).stop().animate({
            left: '0px'
        }, {
            queue: false,
            duration: 300
        });
    });
    //Diagnal Sliding
    $('.boxgrid.thecombo').hover(function () {
        $(".cover", this).stop().animate({
            top: '260px',
            left: '325px'
        }, {
            queue: false,
            duration: 300
        });
    }, function () {
        $(".cover", this).stop().animate({
            top: '0px',
            left: '0px'
        }, {
            queue: false,
            duration: 300
        });
    });
    //Full Caption Sliding (Hidden to Visible)
    $('.boxgrid.captionfull').hover(function () {
        $(".cover", this).stop().animate({
            top: '160px'
        }, {
            queue: false,
            duration: 160
        });
    }, function () {
        $(".cover", this).stop().animate({
            top: '260px'
        }, {
            queue: false,
            duration: 160
        });
    });
    //Caption Sliding (Partially Hidden to Visible)
    $('.boxgrid.caption').hover(function () {
        $(".cover", this).stop().animate({
            top: '160px'
        }, {
            queue: false,
            duration: 160
        });
    }, function () {
        $(".cover", this).stop().animate({
            top: '220px'
        }, {
            queue: false,
            duration: 160
        });
    });

}

function large_slider_top() {
    $(".large-slider-bg").backstretch([
        "img/big/big-1.jpg", "img/big/big-2.jpg", "img/big/big-3.jpg", "img/big/big-4.jpg"
    ], {
        duration: 10000,
        fade: 750
    });
}

function medium_slider_top() {
    $(".medium-slider-bg").backstretch([
        "img/big/big-1.jpg", "img/big/big-2.jpg", "img/big/big-2.jpg", "img/big/big-4.jpg"
    ], {
        duration: 10000,
        fade: 750
    });
}

function slider_top() {
    $(".slider-bg").backstretch([
        "img/big/big-1.jpg", "img/big/big-2.jpg", "img/big/big-2.jpg", "img/big/big-4.jpg"
    ], {
        duration: 10000,
        fade: 750
    });
}


function parallax_slider() {

    $('#da-slider').cslider({
        autoplay: true,
        interval: 10600
    });
}

function parallax() {
    $(window).scroll(function () {
        s = $(window).scrollTop();
        $(".top-parallax").css("-webkit-transform", "translateY(" + (s / 3) + "px)");
        $(".top-parallax").css("-o-transform", "translateY(" + (s / 3) + "px)");
        $(".top-parallax").css("-moz-transform", "translateY(" + (s / 3) + "px)");
        $(".top-parallax").css("-ms-transform", "translateY(" + (s / 3) + "px)");
        $(".top-parallax").css("transform", "translateY(" + (s / 3) + "px)");
    });
}

function clients() {

    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 144,
        itemMargin: 5,
        minItems: 1,
        maxItems: 8,
        controlNav: false,
        directionNav: false
    });
}

function large_navbar_change() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 650) {
            $('.navbar-default').css('background', '#ffffff');
        } else if ($(window).scrollTop() < 650) {
            $('.navbar-default').css('background', 'none');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 630) {
            $('.navbar .nav > li > a').css('color', '#000000');
            $('.navbar-brand').css('color', '#000000');
        } else if ($(window).scrollTop() < 630) {
            $('.navbar .nav > li > a').css('color', '#ffffff');
            $('.navbar-brand').css('color', '#ffffff');
        }
    });
}

function navbar_change() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 350) {
            $('.navbar-default').css('background', '#ffffff');
        } else if ($(window).scrollTop() < 350) {
            $('.navbar-default').css('background', 'none');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 330) {
            $('.navbar .nav > li > a').css('color', '#000000');
            $('.navbar-brand').css('color', '#000000');
        } else if ($(window).scrollTop() < 330) {
            $('.navbar .nav > li > a').css('color', '#ffffff');
            $('.navbar-brand').css('color', '#ffffff');
        }
    });
}

function medium_navbar_change() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.navbar-default').css('background', '#ffffff');
        } else if ($(window).scrollTop() < 500) {
            $('.navbar-default').css('background', 'none');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 480) {
            $('.navbar .nav > li > a').css('color', '#000000');
            $('.navbar-brand').css('color', '#000000');
        } else if ($(window).scrollTop() < 480) {
            $('.navbar .nav > li > a').css('color', '#ffffff');
            $('.navbar-brand').css('color', '#ffffff');
        }
    });
}

function map() {
    new GMaps({
        div: '#map',
        lat: 40.71435,
        lng: -74.00597,
        scrollwheel: false
    });
}

function image_top() {
    $(".slider-bg").backstretch("img/big/big-5.jpg");
}

function slider() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false
    });
}

function video() {
    $("#video").fitVids();
}

function photo_grid() {
    $('.photoset-grid-lightbox').photosetGrid({
        highresLinks: true,
        rel: 'withhearts-gallery',
        gutter: '2px',

        onComplete: function () {
            $('.photoset-grid-lightbox').attr('style', '');
            $('.photoset-grid-lightbox a').colorbox({
                photo: true,
                scalePhotos: true,
                maxHeight: '90%',
                maxWidth: '90%'
            });
        }
    });
}

function countdown() {
    "use strict";

    $('time').countDown({
        with_separators: false
    });

    $('.cd').countDown({
        css_class: 'countdown'
    });
}