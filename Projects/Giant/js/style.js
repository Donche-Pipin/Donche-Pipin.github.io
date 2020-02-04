// import Vue from 'vue';
// import Carousel3d from 'vue-carousel-3d';
// Vue.use(Carousel3d);


// import { Carousel3d, Slide} from 'vue-carousel-3d';
// export default {
//   components: {
//     Carousel3d,
//     Slide
//   }
// };

new Vue({
  el: '.slider',
  data: {
    slides: 1,
    space: 1000444,
    autoplay: true 
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
});

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


// $(document).ready(function(){
//   $("package-card").hover(function(){
//     $("price").addClass("white")},
//     function(){
//       $("price").removeClass("white")
//     });
// });

$(document).ready(function(){
  $(".burger-menu").click(function(){
    $(".menu-wrapper").toggle()
  }),
    $(".video").click(function(){
    $(".video-img").toggle()
  })
});


$(document).ready(function(){
$('.carousel').slick({
  centerMode: true,
  // infinite: true,
  // initialSlide: 0,
  centerPadding: '10px',
  prevArrow: '<i class="fas fa-arrow-left"></i>',
  nextArrow: '<i class="fas fa-arrow-right"></i>',
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
  ]
});
$('.comments-carousel').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  prevArrow: '<i class="fas fa-arrow-left"></i>',
  nextArrow: '<i class="fas fa-arrow-right"></i>',
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
// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     dots: false,
//     margin:10,
//     center: true,
//     responsiveClass:true,
//     responsive:{
//         320:{
//             items:1,
//             nav:false,
//             dots: true,
//         },
//         576:{
//             items:2,
//             nav:false,
//         },
//         768:{
//             items:3,
//             nav:false,
//             loop:true,
//         },
//         992:{
//           items:4,
//           // nav:true,
//           loop:true,
//           dots: false,
//       }
//     }
// })
//   var owl = $('.slider-wrapper');
//   owl.owlCarousel();

//   $('.next-btn').click(function() {
//       owl.trigger('next.owl.carousel');
//   })

//   $('.prev-btn').click(function() {
      
//       owl.trigger('prev.owl.carousel');
//   })
// });
