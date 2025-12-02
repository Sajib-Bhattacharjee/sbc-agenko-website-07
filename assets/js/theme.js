/*-----------------------------------------------------------------------------------
    
    Template Name: Agenko - Creative Digital Agency HTML Template
    URI: pixelfit.agency
    Description: Agenko is a fully responsive, high-performance HTML template crafted for digital agencies, startups, creative firms, and more. Designed with modern web standards in mind, Agenko provides an elegant foundation for building visually striking websites.
    Author: Pixelfit
    Author URI: https://themeforest.net/user/pixelfit
    Version: 1.0 

    Note: This is Main Js file

-----------------------------------------------------------------------------------
    ===================
    Js INDEX
    ===================
    ## Main Menu
    ## Document Ready
    ## Nav Overlay
    ## Preloader
    ## Sticky
    ## Back to top
    ## Magnific-popup js
    ## Nice select
    ## Gsap
    ## AOS Js
    
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu

    function mainMenu() {
        
        var var_window = $(window),
        navContainer = $('.header-navigation'),
        navbarToggler = $('.navbar-toggler'),
        navMenu = $('.pf-nav-menu'),
        navMenuLi = $('.pf-nav-menu ul li ul li'),
        closeIcon = $('.navbar-close');
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        navMenu.find("li a").each(function() {
            if ($(this).children('.dd-trigger').length < 1) {
                if ($(this).next().length > 0) {
                    $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>')
                }
            }
        });
        navMenu.on('click', '.dd-trigger', function(e) {
            e.preventDefault();
            $(this).parent().parent().siblings().children('ul.sub-menu').slideUp();
            $(this).parent().next('ul.sub-menu').stop(true, true).slideToggle(350);
            $(this).toggleClass('sub-menu-open');
        });

    };

    //===== Offcanvas Overlay

    function offCanvas() {
        const $overlay = $(".offcanvas__overlay");
        const $toggler = $(".navbar-toggler");
        const $menu = $(".pf-nav-menu");
        $toggler.add($overlay).add(".navbar-close, .panel-close-btn").on("click", function () {
            $overlay.toggleClass("overlay-open");
            if ($(this).is($overlay)) {
                $toggler.removeClass("active");
                $menu.removeClass("menu-on");
            }
        });
        $(window).on("resize", function () {
            if ($(window).width() > 991) $overlay.removeClass("overlay-open");
        });
    }

    //===== Windows load

    $(window).on('load', function(event) {
        //===== Preloader
        $('.preloader').delay(500).fadeOut(500);
    })


    //===== Magnific-popup js
    
    if ($('.video-popup').length){
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    if ($('.img-popup').length){
        $(".img-popup").magnificPopup({
            type: "image",
             gallery: { 
              enabled: true 
            }
        });
    }

    //===== Slick slider js

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.testimonial-slider-two').length) {
        $('.testimonial-slider-two').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.team-slider-one').length) {
        $('.team-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.testimonial-slider-three').length) {
        $('.testimonial-slider-three').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.company-slider').length) {
        $('.company-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 6000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    if ($('.company-slider-two').length) {
        $('.company-slider-two').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 6000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    //===== Gasp 
    
    gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

    // Gsap ScrollSmoother

    ScrollSmoother.create({
    smooth: 1,
    effects: true,
        smoothTouch: 0.1,
    });

    // Gsap SplitText

    if ($('.split').length > 0) {

        // Split text into characters
        let mySplitText = new SplitText(".split", { type: "chars" });
        let chars = mySplitText.chars;

        // GSAP animation
        gsap.from(chars, {
            yPercent: 100,
            stagger: 0.065,
            ease: "back.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".split",
                start: "top 50%",
            }
        });
    }
    
    if ($('.text-anm').length) {				
		let	 staggerAmount 		= 0.01,
        translateXValue	= 40,
        delayValue 		= .5,
        easeType 			= "power2.out",
        animatedTextElements = document.querySelectorAll('.text-anm');
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
            gsap.from(animationSplitText.chars, {
                duration: 1,
                delay: delayValue,
                x: translateXValue,
                autoAlpha: 0,
                stagger: staggerAmount,
                ease: easeType,
                scrollTrigger: { trigger: element, start: "top 85%"},
            });
		});		
	}

    if ($('.text-anm-two').length) {
        // Select the text container
        const $container = $(".text-anm-two");
        const text = $container.text();
        const characters = text.split("");
        $container.empty();
        characters.forEach(char => {
            $container.append(`<span class='char'>${char}</span>`);
        });
        const $chars = $container.find(".char");
        gsap.timeline({ repeat: -1 })
        .from($chars, {
            y: 50,
            opacity: 0,
            ease: "elastic.out(.5, 0.5)",
            stagger: 0.08,
            duration: 0.5,
        })
    }

    // Fade in Animation with gsap

    const boxes = gsap.utils.toArray('.pf_fadeup');
        boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, {autoAlpha: 0, y: 70}, {duration: 1, autoAlpha: 1, y: 0});
        ScrollTrigger.create({
            trigger: box,
            animation: anim,
            toggleActions: 'play none none none',
            once: true,
        });
    });
    const card = gsap.utils.toArray('.pf_zoomIn');
    card.forEach((box) => {
        gsap.fromTo(box, 
            { scale: 0.8, autoAlpha: 0 }, // Start smaller and hidden
            { 
                scale: 1, 
                autoAlpha: 1, 
                duration: 1, 
                ease: "power2.out", 
                scrollTrigger: {
                    trigger: box,
                    toggleActions: "play none none none",
                    once: true,
                }
            }
        );
    });


    // ===== Counter
    
    if ($('.count').length) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              $(entry.target).counterUp({
                delay: 100,
                time: 4000
              });
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 1.0
        });
        $('.count').each(function() {
          observer.observe(this);
        });
    }

    // Document Ready
    $(function() {
        mainMenu();
        offCanvas();
    });

})(window.jQuery);