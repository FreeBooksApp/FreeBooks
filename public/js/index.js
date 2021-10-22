$(document).ready(function(){
    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        dots:false,
        items: 1,
        hight: 600
    });

    // top sale carousel

    // $("#top-sale .owl-carousel").owlCarousel({
    //     loop:true,
    //     nav:true,
    //     dots:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // });

    // // isotope filter
    // var $grid = $(".grid").isotope({
    //     itemSelector:".grid-item",
    //     layoutMode:"fitRows"
    // });
    // // filter item on button click
    // $(".button-group").on("click","button",function(){
    //     var filterValue = $(this).attr("data-filter")
    //     $grid.isotope({
    //         filter: filterValue
    //     });
    // });

    // // new phones owl carousel
    // $("#new-phones .owl-carousel").owlCarousel({
    //     loop:true,
    //     nav:false,
    //     dots:true,
    //     responsiv:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // });

    // // blog owl carousel
    // $("#blogs .owl-carousel").owlCarousel({
    //     loop:true,
    //     nav:false,
    //     dots:true,
    //     responsiv:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         } 
    //     }
    // });

});