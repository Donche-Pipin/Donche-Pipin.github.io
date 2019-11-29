$(document).ready(function() {
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
