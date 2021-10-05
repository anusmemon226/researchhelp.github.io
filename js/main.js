(function($) {
    "use strict";

    // loader
    var loader = function() {
        setTimeout(function() {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
                $('#img').addClass('hero-img');
            }
        }, 1000);
    };
    loader();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });



    var x = window.matchMedia("(max-width: 991px)")
    var logo = document.getElementById('logo');
    window.addEventListener('scroll', function() {
        var scroll = this.scrollY;
        if (scroll > 0) {
            logo.src = 'redLogo.png'
        } else {
            if (x.matches) { // If media query matches
                logo.src = 'redLogo.png'
            } else {
                logo.src = 'whiteLogo.png'
            }
        }
    })

    function myFunction(x) {
        if (x.matches) { // If media query matches
            logo.src = 'redLogo.png'
        } else {
            logo.src = 'whiteLogo.png'
        }
    }

    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
            $('.nav-link').removeClass('a')
            $('.act').removeClass('active1')
            $('.act').addClass('active2')
            $('.link').addClass('link1')
        } else {
            $('.link').removeClass('link1')
            $('.navbar').removeClass('nav-sticky');
            $('.act').addClass('active1')
            $('.act').removeClass('active2')
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Skills
    $('.skills').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });



    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function() {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);

// Click Form 

var discount = document.getElementById('discount');
var clickForm = document.getElementById('click')

discount.addEventListener('click', function() {
    if (clickForm.classList.contains('active11')) {
        clickForm.classList.remove('active11')
        clickForm.classList.add('active21')
    } else {
        clickForm.classList.remove('active21')
        clickForm.classList.add('active11')
    }
})



// Modal
function load() {
    setTimeout(function() {
        $('#myModal').modal('show');
    }, 4000);
}