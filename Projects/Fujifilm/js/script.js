$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    merge: true,
    // autoWidth: true,
    videoHeight: 400,
    loop: true,
    nav: true,
    margin: 10,
    dots: false,
    video: true,
    lazyLoad: true,
    center: true,
    responsive: {
      320: {
        videoWidth: 290
      },
      400: {
        videoWidth: 370
      },
      500: {
        videoWidth: 470
      },
      576: {
        videoWidth: 540
      },
      768: {
        videoWidth: 700
      },
      992: {
        videoWidth: 960
      },
      1200: {
        videoWidth: 1170
      }
    }
  });
});
