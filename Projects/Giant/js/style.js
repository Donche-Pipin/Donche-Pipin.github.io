// $(document).ready(function(){
//   $(".trial-link").hover(function(){
//     $(".price").css("background","linear-gradient(to right, #fd712c, #f21780)"),
//     $(".price-number").css("color", "#fff"),
//     $(".package-card").css("background-color", "#fff") 
//   },
//   function(){
//     $(".price").css("background","#fff"),
//     $(".price-number").css("color", "#000"),
//     $(".package-card").css("background-color", "#f7fafc")
//   })
//   $(".video").click(function(){
//     $(".video-img").toggle()
//   })
// })

$(document).ready(function(){
  $("package-card").hover(function(){
    $("price").addClass("white")},
    function(){
      $("price").removeClass("white")
    });
});

$(document).ready(function(){
    $(".carousel").slick({
        centerMode: true,
  centerPadding: '160px',
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 2
        }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});
$('.comments-carousel').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
}); 
});