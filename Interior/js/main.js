
$(document).ready(function () {
    $(".active-testimonial-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            992: { items: 2 }
        }
    });
});

$(document).ready(function () {
    $(".active-blog-carusel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });
});

$(document).ready(function () {
    $(".brand-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        dots: false,
        nav: false,
        responsive: {
            0: { items: 2 },
            768: { items: 3 },
            992: { items: 5 }
        }
    });
});
