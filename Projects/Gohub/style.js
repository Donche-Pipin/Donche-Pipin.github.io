$(document).ready(function() {
  $(".menu-icon").click(function() {
    $(".menu-icon__item:nth-child(1)").toggleClass("menu-icon__rotate-right");
    $(".menu-icon__item:nth-child(2)").toggleClass(
      "menu-icon__item_theme_hidden"
    );
    $(".menu-icon__item:nth-child(3)").toggleClass("menu-icon__rotate-left");
    $(".menu").slideToggle();
  });
  $(".footer-list-container__item").click(function() {
    $(this)
      .children(".footer-list")
      .slideToggle();
  });
  // $("body").click(function() {
  //   $(".footer-list").slideUp();
  // });
  // $(".footer-list__title").click(function() {
  //   $(this).css("border-bottom", "3px solid #d3d3d9");
  // });
});
