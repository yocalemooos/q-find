//website script
! function (t) {
    "use strict";
    t(window).on("load", function () {
        var e;
        e = t(".spinner-wrapper"), setTimeout(function () {
            e.fadeOut(500)
        }, 500)
    }), t(window).on("scroll load", function () {
        60 < t(".navbar").offset().top ? t(".fixed-top").addClass("top-nav-collapse") : t(".fixed-top").removeClass("top-nav-collapse")
    }), t(function () {
        t(document).on("click", "a.page-scroll", function (e) {
            var o = t(this);
            t("html, body").stop().animate({
                scrollTop: t(o.attr("href")).offset().top
            }, 600, "easeInOutExpo"), e.preventDefault()
        })
    }), t(".navbar-nav li a").on("click", function (e) {
        t(this).parent().hasClass("dropdown") || t(".navbar-collapse").collapse("hide")
    });
    new Swiper(".image-slider", {
        autoplay: {
            delay: 2e3,
            disableOnInteraction: !1
        },
        loop: !0,
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            580: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    }), new Swiper(".card-slider", {
        autoplay: {
            delay: 4e3,
            disableOnInteraction: !1
        },
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    t(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        iframe: {
            patterns: {
                youtube: {
                    index: "youtube.com/",
                    id: function (e) {
                        var o = e.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        return o && o[1] ? o[1] : null
                    },
                    src: "https://www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: function (e) {
                        var o = e.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        return o && o[5] ? o[5] : null
                    },
                    src: "https://player.vimeo.com/video/%id%?autoplay=1"
                }
            }
        }
    }), t(".popup-with-move-anim").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-slide-bottom"
    }), t("input, textarea").keyup(function () {
        "" != t(this).val() ? t(this).addClass("notEmpty") : t(this).removeClass("notEmpty")
    }), t("body").prepend('<a href="#header" class="back-to-top page-scroll">Back to Top</a>');
    t(window).scroll(function () {
        700 < t(window).scrollTop() ? t("a.back-to-top").fadeIn("500") : t("a.back-to-top").fadeOut("500")
    }), t(".button, a, button").mouseup(function () {
        t(this).blur()
    })
}(jQuery);