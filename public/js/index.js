$(document).ready(function(){
     
    //next books carousel

    $("#next .owl-carousel").owlCarousel({
        loop:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    //genre books carousel
    $("#genre .owl-carousel").owlCarousel({
        autoplay: true,
        loop:true,
        nav: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    //top books carousel
    $("#top .owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    //most downloads books carousel
    $("#most .owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    //latest book books carousel
    $("#latest .owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector:".grid-item",
        layoutMode:"fitRows"
    });
    // filter item on button click
    $(".button-group").on("click","button",function(){
        var filterValue = $(this).attr("data-filter")
        $grid.isotope({
            filter: filterValue
        });
    });

});