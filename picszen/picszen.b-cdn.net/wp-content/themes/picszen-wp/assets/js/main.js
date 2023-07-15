(function($) {
    "use strict";

    // preloader
    function counter_num() {
        var count = setInterval(function() {
            var c = parseInt($(".counter").text());
            $(".counter").text((++c).toString());
            if (c === 100) {
                clearInterval(count);
                $(".counter").addClass("hide");
                $(".preloader").addClass("active");
            }
        });
    }
    counter_num();



    // Configure nice select
    $("select").niceSelect();

    //Page margin top and bottom add and remove 
    $(".elementor").parents(".sec-mar").removeClass("sec-mar");

    /* ---------------------------------------------
       Sliders
       --------------------------------------------- */
    var swiper = new Swiper(".testi-image-slider", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        effect: "fade",
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".testi-content-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".testi1-next",
            prevEl: ".testi1-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    // Blog slider
    var swiper = new Swiper(".blog-slider", {
        slidesPerView: 1,
        speed: 800,
        spaceBetween: 10,
        slidesPerView: 8,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: "true",
        },
        navigation: {
            nextEl: ".blog-next1",
            prevEl: ".blog-prev1",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 2,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });
    // Blog Archive Post Format Gallery slider
    var swiper = new Swiper(".blog-archive-slider", {
        slidesPerView: 1,
        speed: 800,
        spaceBetween: 10,
        slidesPerView: 8,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: "true",
        },
        navigation: {
            nextEl: ".blog1-next",
            prevEl: ".blog1-prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 1,
                navigation: false,
            },
            768: {
                slidesPerView: 1,
                navigation: false,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 1,
            },
        },
    });

    // award-slider
    var swiper = new Swiper(".award-slider", {
        slidesPerView: 1,
        speed: 800,
        spaceBetween: 10,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: "true",
        },
        fadeEffect: {
            crossFade: true,
        },
    });

    // banner-three-slider
    var swiper = new Swiper(".banner-three-slider", {
        slidesPerView: 1,
        speed: 800,
        spaceBetween: 10,
        parallax: true,
        loop: true,
        autoplay: true,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: "true",
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: ".swiper-pagination-num",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            },
        },
    });

    // banner5-slider
    var mySwiper = new Swiper(".banner5-slider", {
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        slidesPerView: 2,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination-num2",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
            },
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 2,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 1.3,
            },
        },
    });

    // banner-center-slider
    var mySwiper = new Swiper(".banner-center-slider", {
        loop: true,
        speed: 1000,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 5,
        mousewheel: true,
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 3,
                navigation: false,
            },
            768: {
                slidesPerView: 3,
                navigation: false,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    });

    // portfolio-center-slider
    var mySwiper = new Swiper(".portfolio-center-slider", {
        loop: true,
        speed: 1000,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 3,
        mousewheel: true,
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 1,
                navigation: false,
            },
            768: {
                slidesPerView: 3,
                navigation: false,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    // portfolio-slider

    var swiper = new Swiper(".portfolio-slider-one", {
        slidesPerView: 2,
        speed: 800,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: "true",
        },
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".portfolio-next1",
            prevEl: ".portfolio-prev1",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            386: {
                slidesPerView: 1,
                navigation: false,
            },
            576: {
                slidesPerView: 2,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });

    // gallery-slider

    new Swiper(".gallery-slider", {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        spaceBetween: 10,
        roundLengths: true,
        parallax: true,
        mousewheel: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -100],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        autoplay: {
            delay: 4000,
        },
    });

    // Odometer Counter

    $(".counter-single").each(function() {
        $(this).isInViewport(function(status) {
            if (status === "entered") {
                for (
                    var i = 0; i < document.querySelectorAll(".odometer").length; i++
                ) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });

    // Instantiate `CircleType` with an HTML element.

    var CircleTypeText1 = document.getElementById("CircleTypeText1");
    if (CircleTypeText1 != null) {
        new CircleType(document.getElementById("CircleTypeText1"));
    }
    var CircleTypeText2 = document.getElementById("CircleTypeText2");
    if (CircleTypeText2 != null) {
        new CircleType(document.getElementById("CircleTypeText2"));
    }
    var CircleTypeText3 = document.getElementById("CircleTypeText3");
    if (CircleTypeText3 != null) {
        new CircleType(document.getElementById("CircleTypeText3"));
    }

    var CircleTypeText4 = document.getElementById("CircleTypeText4");
    if (CircleTypeText4 != null) {
        new CircleType(document.getElementById("CircleTypeText4"));
    }

    $(".marquee_text1").marquee({
        direction: "left",
        duration: 50000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true,
    });

    /* ---------------------------------------------
     Isotope 
--------------------------------------------- */
    // filter items on button click

    setTimeout(function() {
        $(".filter-button-group").on("click", "li", function() {
            var filterValue = $(this).attr("data-filter");
            $(".grid").isotope({
                filter: filterValue
            });
            $(".filter-button-group li").removeClass("active");
            $(this).addClass("active");
        });
        $(".grid").masonry({
            // options
            itemSelector: ".grid-item",
        });
    });

    //  Image Loader
    var $grid = $(".grid").imagesLoaded(function() {
        // init Masonry after all images have loaded
        $grid.masonry({
            // options...
        });
    });

    // calendar
    jQuery(document).ready(function() {
        // An array of dates
        var eventDates = {};

        eventDates[new Date("12/06/2015")] = new Date("12/06/2015");
        eventDates[new Date("06/20/2015")] = new Date("06/20/2015");
        eventDates[new Date("06/25/2015")] = new Date("06/25/2015");



    });

    // fancybox
    var lang = {
        html: "100%",
        css: "90%",
        javascript: "70%",
    };

    var multiply = 4;

    $.each(lang, function(language, pourcent) {
        var delay = 700;

        setTimeout(function() {
            $("#" + language + "-pourcent").html(pourcent);
        }, delay * multiply);
        multiply++;
    });

    // init
    setTimeout(function() {
        var $grid = $(".grid-two").masonry({
            // options...
        });
    });



    //Text Effect gsap

    $(".text2").each(function() {
        $(this).html(
            $(this)
            .text()
            .replace(/([^\x00-\x80]|\w)/g, "<span class='2_text'>$&</span>")
        );
    });
    var $text2 = $(".text2 span"),
        tl_2 = new TimelineMax({
            repeat: -1
        });

    tl_2
        .staggerFrom(
            $text2,
            0.5, {
                top: "+=25px",
                rotation: "-=-3deg",
                alpha: 0,
                scale: 0.8,
                ease: Power1.easeOut,
            },
            0.15
        )
        .to($text2, 0.5, {
            alpha: 0,
            ease: Power1.easeOut
        }, "+=1.2");

    // Skillbar
    jQuery(document).ready(function() {
        jQuery(".skillbar").each(function() {
            jQuery(this)
                .find(".progressbar")
                .animate({
                        width: jQuery(this).attr("data-percent"),
                    },
                    6000
                );
        });
    });

    jQuery(".Count").each(function() {
        var $this = $(this);
        jQuery({
            Counter: 0,
        }).animate({
            Counter: $this.text(),
        }, {
            duration: 6000,
            easing: "swing",
            step: function() {
                $this.text(Math.ceil(this.Counter));
            },
        });
    });

    // Sidebar Nenu Hover

    $(".sidebar-menu-area > ul > .menu-item")
        .find(">a")
        .each(function() {
            var menuItem = $(this).text();
            $(this).attr("data-hover", menuItem);
        });


})(jQuery);