$(document).ready(function() {
  $(".button-up").click(function() {
    $("html,body").animate({ scrollTop: -100 }, 600);
  });
});

$(document).ready(function() {
  $(".slider").slick({
    //   dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
  let menuOpen = 0;
  $(".hamburger").click(function() {
    if (menuOpen == 0) {
      menuOpen = 1;
      $(".menu").show();
    } else if (menuOpen == 1) {
      menuOpen = 0;
      $(".menu").hide();
    }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    $(".jobs-block").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 850) {
        $(this).removeClass("hidden");
        $(this).addClass("visible");
      }
    });
  });
});
