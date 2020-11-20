// =================================================================================
//                 banner-part js start
// =================================================================================

$('.banner-slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
  });

// =================================================================================
//                 banner-part js end
// =================================================================================


// =================================================================================
//                 portfolio-part js start
// =================================================================================

$('.venobox').venobox(); 

// =================================================================================
//                 portfolio-part js end
// =================================================================================

// =================================================================================
//                 service-part js start
// =================================================================================

$('.service-slider').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
  centerMode: true,
  centerPadding: 0,
  responsive: [

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// =================================================================================
//                 service-part js end
// =================================================================================

// =================================================================================
//                 testimonial-part js start
// =================================================================================

$('.left-slider').slick({
  dots: false,
  arrows: true,
  // autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
  asNavFor: '.right-slider',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        vertical: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.right-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.left-slider',
});


// =================================================================================
//                 testimonial-part js end
// =================================================================================

// =================================================================================
//                 counter-part js start
// =================================================================================

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// =================================================================================
//                 counter-part js end
// =================================================================================

// =================================================================================
//                 company-part js start
// =================================================================================

$('.company-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// =================================================================================
//                 company-part js end
// =================================================================================