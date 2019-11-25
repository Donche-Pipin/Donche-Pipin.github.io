// $(document).ready(function() {
//   $(".card").hover(function() {
//     $(this).css("background-color", "#f0f0f0");
//     $(".horizontal-line").css("background-color", "#cccccc");
//   });
// });

$(document).ready(function() {
  //   $(".burger-menu").click(function() {
  //     $(".navbar__top").animate({ right: "0px" }, 200);
  //     $("body").animate({ right: "200px" }, 200);
  //   });
  //   $(".burger-menu").click(function() {
  //     $(".navbar__top").animate({ right: "-200px" }, 200);
  //     $("body").animate({ right: "0px" }, 200);
  //   });
  $(".burger-menu").click(function() {
    $(".navbar__top").toggleClass("show__menu");
    $("body").toggleClass("show__content");
    // $("body").removeClass("show__menu");
  });
});
// $(document).ready(function() {
//   $(".burger-menu").click(function() {
//     $(".navbar").slideToggle(300, function() {
//       if ($(this).css("display") === "none") {
//         $(this).removeAttr("style");
//       }
//     });
//   });
// });
// $(document).ready(function() {
//   $(".burger-menu").click(function() {
//     $(".nav").slideToggle();
//   });
// });
