
    $(document).ready(function(){
        $(".testimonial__slider").owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayTimeout:3000,
            responsive:{
                0:{ items:1 },
                768:{ items:2 },
                992:{ items:2 }
            }
        });
    });


