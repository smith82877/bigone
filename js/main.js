/*
 * Theme Name: Teecbuz
 * File name: main.js
 * Description: Teecbuz Onepage Business Template
 * Version: 1.0
 */
(function($) {
    "use strict";

    //Run function when document ready
    $(document).ready(function() {

        init_pagescroll();
        init_menumobile();
		init_loader();
        init_prettyphoto();
        init_counterup();
        init_testimonialcarousel();
        init_teamcarousel();
        init_fullheigh();
        init_clients();
        init_gototop();
    });

    // Navigation	
	
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 0) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });



   // page scroll
	
    function init_pagescroll() {
        $('a.page-scroll').on('click', function(e) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }



    // menumobile
    function init_menumobile() {
        $('.navbar-collapse ul li a').on('click', function(e) {
            $('.navbar-toggle:visible').click();
        });
    }



    // loader
    function init_loader() {
        $("#loader").fadeOut("slow", function() {
            $("#preloader").delay(300).fadeOut("slow")
        })

    }


    // prettyphoto Lightbox
	
    function init_prettyphoto() {
        $("a[class^='prettyphoto']").prettyPhoto();
        $("a[class^='work']").prettyPhoto();
    }



    // CounterUp
	
    function init_counterup() {
        if ($("span.count").length > 0) {
            $('span.count').counterUp({
                delay: 10, // the delay time in ms
                time: 1000 // the speed time in ms
            });
        }
    }


    // Testimonial
    function init_testimonialcarousel() {
        $("#Testimonial").owlCarousel({
            navigation: true,
            navigationText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            singleItem: true,
            autoPlay: true,
            pagination: false
        });
    }

    // Team
    function init_teamcarousel() {
        $('.team-carousel').owlCarousel({
            navigation: true,
            navigationText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            items: 3,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1],
            pagination: false,
            autoPlay: false

        });
    }


    // Full-Heigh banner
    function init_fullheigh() {

        $(".full-height").height($(window).height()),
            $(window).on("resize", function() {

                $(".full-height").height($(window).height())
            })
    }


    // Clients
    function init_clients() {
        $("#clients").owlCarousel({
            autoPlay: 3000,
            items: 5,
            itemsDesktop: [1200, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1],
            slideSpeed: 900,
            navigation: false,
            pagination: false,
        });
    }


    // Go to top
    function init_gototop() {
        if ($('#back-to-top').length) {
            var scrollTrigger = 100,
                backToTop = function() {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function() {
                backToTop();
            });
            $('#back-to-top').on('click', function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 900);
            });
        }
    }


})(jQuery); // JavaScript Document