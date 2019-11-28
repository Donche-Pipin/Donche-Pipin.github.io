// $(document).ready(function() {
//   $(".card").hover(function() {
//     $(this).css("background-color", "#f0f0f0");
//     $(".horizontal-line").css("background-color", "#cccccc");
//   });
// });

$(document).ready(function() {
  // $(".burger-menu").click(function(e) {
  //   if ($(this).hasClass("open")) {
  //     $(this).removeClass("open");
  //     $(".navbar__top").animate({ right: "-200px" }, 200);
  //     $("body").animate({ right: "0px" }, 200);
  //   } else {
  //     $(this).addClass("open");
  //     $(".navbar__top").animate({ right: "0px" }, 200);
  //     $("body").animate({ right: "200px" }, 200);
  //   }
  // });

  $(".burger-menu").click(function() {
    $(".navbar__top").animate({ right: "0px" }, 200);
    $("body").animate({ right: "200px" }, 200);
    $(".burger-menu").css("display", "none");
  });

  $(".nav:first-child").click(function() {
    $(".navbar__top").animate({ right: "-200px" }, 200);
    $("body").animate({ right: "0px" }, 200);
    $(".burger-menu").css("display", "block");
  });

  $(".burger-menu").click(function() {
    $(".burger-bimbo").toggleClass("pushed");
  });
});

// $(".burger-menu.open").click(function() {
//   $(this).removeClass("open");
//   $(".navbar__top").animate({ right: "-200px" }, 200);
//   $("body").animate({ right: "0px" }, 200);
// });
// });
// $(document).ready(function() {
//   $(".burger-menu").click(function() {
//     $(".navbar__top").switchClass(
//       "navbar-bimbo",
//       "show__menu",
//       800,
//       "easeInOutQuad"
//     );
//     $("body").switchClass("body-bimbo", "show__content", 800, "easeInOutQuad");
//   });
//   $(document).mouseup(function(e) {
//     var container = $(".navbar__top");
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//       // container.removeClass("show__menu");
//       container.switchClass("show__menu", "navbar-bimbo", 800, "easeInOutQuad");
//       $("body").switchClass(
//         "show__content",
//         "body-bimboshow__content",
//         800,
//         "easeInOutQuad"
//       );
//     }
//   });
// });

// $(document).ready(function() {
//   $(".burger-menu").click(function() {
//     $(".show__menu").animate({ width: "toggle" });
//     $("body").switchClass("body-bimbo", "show__content", 1000, "easeInOutQuad");
//     $("body").removeClass("show__menu");
//   });
// });
// $(document).mouseup(function(e) {
//   var container = $(".navbar_top");
//   if (container.has(e.target).length === 0) {
//     container.removeClass("show__menu");
//     $("body").switchClass("show__content", "body-bimbo", 1000, "easeInOutQuad");
//   }
// });
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
