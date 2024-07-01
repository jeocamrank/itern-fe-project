$(document).ready(function(){
    $('.slidershow').slick({
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right'></i></button>",
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
    $('.slider-selling-box').slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right'></i></button>"
    });
});
