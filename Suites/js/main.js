$(".home-slider").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3500,
  smartSpeed: 900,
  nav: false,
  dots: false,
  navText: [
    "<span class='carousel-nav prev'>&#10094;</span>",
    "<span class='carousel-nav next'>&#10095;</span>"
  ]
});

$(".event-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  navText: [
    '<span class="arrow-prev">&#10094;</span>',
    '<span class="arrow-next">&#10095;</span>'
  ],
  responsive: {
    0: { items: 1 },
    992:{ items:3}
  }
});

$('.nonloop-block-14').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  navText: [
    '<span class="arrow-prev">&#10094;</span>',
    '<span class="arrow-next">&#10095;</span>'
  ],
  responsive: {
    0: { items: 1 },
    992: { items: 2 }
  }
});
