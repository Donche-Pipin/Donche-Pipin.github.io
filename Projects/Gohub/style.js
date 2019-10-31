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
  $(".footer-list__title").click(function() {
    $(this).css("border-bottom", "3px solid #d3d3d9");
  });
  $(document).mouseup(function(e) {
    // отслеживаем событие клика по веб-документу
    let block = $(".footer-list"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
    if (
      !block.is(this) && // проверка условия если клик был не по нашему блоку
      block.has(this).length === 0
    ) {
      // проверка условия если клик не по его дочерним элементам
      block.hide(); // если условия выполняются - скрываем наш элемент
      $(".footer-list__title").css("border-bottom", "");
    }
  });
  // $(".open-form-button").click(function() {
  //   $(".form").fadeIn();
  // });
});
