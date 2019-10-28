$(document).ready(function() {
  $(".menu-icon").click(function() {
    $(".menu-icon__item:nth-child(1)").toggleClass("menu-icon__rotate-right");
    $(".menu-icon__item:nth-child(2)").toggleClass(
      "menu-icon__item_theme_hidden"
    );
    $(".menu-icon__item:nth-child(3)").toggleClass("menu-icon__rotate-left");
    $(".menu").slideToggle();
  });
});
