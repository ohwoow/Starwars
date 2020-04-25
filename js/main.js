$(document).ready(function () {

    $('.slider-episodes__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.slider-arrows__left'),
        nextArrow: $('.slider-arrows__right'),
        autoplay: true,
        autoplaySpeed: 2400,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      });



      $('.nav-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
      });
          
});
      