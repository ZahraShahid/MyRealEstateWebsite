; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /* -------------------------------------------------------------
            dkt-sitebar-menu
        ------------------------------------------------------------- */
        if ( $(window).width() > 991 ) {
            if ($('.dropdown-menu-btn').length){
                $(".dropdown-menu-btn").on('click', function(){
                    $(".dkt-sitebar-menu").toggleClass("navbar-nav-show");
                    $('.dropdown-menu-btn').toggleClass('open');
                });

                $(".dkt-sitebar-close").on('click', function(){
                    $(".dkt-sitebar-menu").removeClass("navbar-nav-show");
                    $('.dropdown-menu-btn').removeClass('open');
                });

                $('body').on('click', function(event) {
                    if (!$(event.target).closest('.dropdown-menu-btn').length && !$(event.target).closest('.dkt-sitebar-menu').length) {
                        $(".dkt-sitebar-menu").removeClass("navbar-nav-show");
                    }
                    if (!$(event.target).closest('.dropdown-menu-btn').length && !$(event.target).closest('.dkt-sitebar-menu').length) {
                        $('.dropdown-menu-btn').removeClass('open');
                    }
                });
            }
        }

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('select').length){
            $('select').niceSelect();
        } 

        /* -------------------------------------------------------------
           All-item isotope
        ------------------------------------------------------------- */
        var $galleryFilterArea = $('.item-isotope'),
            $galleryFilterMenu = $('.item-isotope-btn');
        /*Filter*/
        $galleryFilterMenu.on( 'click', 'button, a', function() {
            var $this = $(this),
            $filterValue = $this.attr('data-filter');
            $galleryFilterMenu.find('button, a').removeClass('active');
            $this.addClass('active');
            $galleryFilterArea.isotope({ filter: $filterValue });
        });
        /*Grid*/
        $galleryFilterArea.each(function(){
            var $this = $(this),
            $galleryFilterItem = '.all-isotope-item';
            $this.imagesLoaded( function() {
                $this.isotope({
                    itemSelector: $galleryFilterItem,
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.item-sizer',
                    }
                });
            });
        });

        /* -------------------------------------------------------------
            fact counter
        ------------------------------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000,
        });

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="la la-arrow-left"></i>';
        var rightArrow = '<i class="la la-arrow-right"></i>';

        
        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.banner-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            items: 1,
            dots: true,
            smartSpeed:1500,
        });

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.testimonial-slider-1').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            dots: false,
            smartSpeed:1500,
            navText: [ leftArrow, rightArrow],
        });

        /*------------------------------------------------
            product-slider
        ------------------------------------------------*/
        $('.testimonial-slider-2').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            center:true,
            smartSpeed:1500,
            navText: [ leftArrow, rightArrow],
            responsive: {
                0: {
                    items: 1,
                    center:false
                },
                376: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });

        /*------------------------------------------------
            client-slider
        ------------------------------------------------*/
        $('.client-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            items: 5,
            dots: false,
            smartSpeed:1500,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1201: {
                    items: 5
                },
            }
        });

        /**---------------------------------------
         *  QTY Inputs
        * -------------------------------------*/
        if($('.slider-product-sorting').length){
            $( function() {
                $( ".slider-product-sorting" ).slider({
                range: true,
                min: 0,
                max: 90,
                values: [ 2, 50 ],
                slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
                });
                $( "#amount" ).val( "$" + $( ".slider-product-sorting" ).slider( "values", 0 ) +
                " - $" + $( ".slider-product-sorting" ).slider( "values", 1 ) );
            } );
        }

        

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
        bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','.search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });

        /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
        new WOW().init();

        /*-------------------------------------------------
            image upload
        --------------------------------------------------*/
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function() {
            readURL(this);
        });

        /**---------------------------------------
         *  QTY Inputs
        * -------------------------------------*/
        if($('.slider-product-sorting').length){
            $( function() {
                $( ".slider-product-sorting" ).slider({
                range: true,
                min: 0,
                max: 50,
                values: [ 0, 50 ],
                slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
                });
                $( "#amount" ).val( "$" + $( ".slider-product-sorting" ).slider( "values", 0 ) +
                " - $" + $( ".slider-product-sorting" ).slider( "values", 1 ) );
            } );
        }

        /*------------------------------------
            Product Details Slider
        ------------------------------------*/
        var productDetailSlider = $('.single-thumbnail-slider');
        var pThumbanilSlider = $('.product-thumbnail-carousel');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.product-thumbnail-carousel'
              });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                centerMode: true,
                arrows:false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-down"></i></div>',
                responsive: [
                    {
                      breakpoint: 769,
                      settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 525,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 426,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    }
                  ]
            });
        }

        /*------------------
          go top when nav menu click
        ------------------*/

         $('.go-top').on('click', function () {
               $(window).scrollTop(0);
         });

        /*------------------
           back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/
        
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });



})(jQuery);