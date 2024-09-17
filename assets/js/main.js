/* -----------------------------------------------
                    Js Main
--------------------------------------------------
    Template Name: Mariam - Personal Portfolio Template
--------------------------------------------------

Table of Content

    . Preloader
    . Menu
    . magnificPopup
    . Share Media
    . Testimonials
    . All Functions

 <script>
    function calculateAge(birthYear) {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }

    // Assuming birth year is 1993 (adjust as needed)
    const birthYear = 1993;
    const age = calculateAge(birthYear);

    // Update the HTML element with the calculated age
    document.getElementById('age').textContent = age;
</script>

----------------------------------- */
$(window).resize(function () {
    if ($(window).width() < 769) {

        $('nav-logo').hide();
    }
    else {

        $('nav-logo').show();
    }
});


(function ($) {
    "use strict";

    /* -----------------------------------
             Preloader
    ----------------------------------- */
    function loading() {
        "use strict";
        $('.loading').delay(500).fadeOut(500);
    }

    /* -----------------------------------
                Menu
    ----------------------------------- */
    function menu() {
        "use strict";
        $("#menuToggle").on("click", function () {
            $(".header-left").toggleClass("open");
            $(".main").toggleClass("open");
        });
        $(".cross").on("click", function () {
            $(".header-left").removeClass("open");
        });
        $(".nav-link").on("click", function () {
            $(".header-left").removeClass("open");
        });
    }


    /* -----------------------------------
           magnificPopup
    -----------------------------------*/
    function magnificPopup() {
        "use strict";
        $(".works-items .view-work").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }



    /* -----------------------------------
          Share Media
   -----------------------------------*/
    function shareMedia() {
        $('.btn-share').on("click", function () {
            $('.social-footer').toggleClass('active');
        });
    }

    /* -----------------------------------
         Testimonials
    -----------------------------------*/
    function testimonials() {
        $(".testimonials .owl-carousel").owlCarousel({
            loop: true,
            stagePadding: 5,
            margin: 10,
            nav: false,
            autoplay: false,
            center: false,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1200: {
                    margin: 40,
                    items: 2,
                },
            }
        });
    }

    /* -----------------------------------
          All functions
    -----------------------------------*/
    // Window on Load
    $(window).on("load", function () {
        "use strict";
        loading();

    });

    // Document on Ready
    $(document).on("ready", function () {
        "use strict";
        shareMedia();
        menu();
        testimonials();
        magnificPopup();
    });

})(jQuery);
