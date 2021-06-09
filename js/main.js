$(function(){


    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive:[
            {
                breakpoint: 1850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                }
            }
        ]
    })


    $('.menu__btn').on('click', function(){
        $('.nav__list').toggleClass('nav__list--active')
    });


});