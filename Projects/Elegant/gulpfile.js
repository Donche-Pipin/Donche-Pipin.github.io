var gulp = require("gulp"), // Подключаем Gulp
  sass = require("gulp-sass"), //Подключаем Sass пакет,
  browserSync = require("browser-sync"), // Подключаем Browser Sync
  concat = require("gulp-concat"), // Подключаем gulp-concat (для конкатенации файлов)
  uglify = require("gulp-uglifyjs"), // Подключаем gulp-uglifyjs (для сжатия JS)
  cssnano = require("gulp-cssnano"), // Подключаем пакет для минификации CSS
  rename = require("gulp-rename"), // Подключаем библиотеку для переименования файлов
  del = require("del"), // Подключаем библиотеку для удаления файлов и папок
  imagemin = require("gulp-imagemin"), // Подключаем библиотеку для работы с изображениями
  pngquant = require("imagemin-pngquant"), // Подключаем библиотеку для работы с png
  cache = require("gulp-cache"), // Подключаем библиотеку кеширования
  autoprefixer = require("gulp-autoprefixer"); // Подключаем библиотеку для автоматического добавления префиксов

gulp.task("sass", function() {
  // Создаем таск Sass
  return gulp
    .src(["app/sass/**/*.sass", "app/scss/**/*.scss"]) // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(
      autoprefixer(["last 15 versions", ">1%", "ie 8", "ie 7"], {
        cascade: true
      })
    ) // Создаем префиксы
    .pipe(gulp.dest("app/css")) // Выгружаем результата в папку app/css
    .pipe(browserSync.reload({ stream: true })); // Обновляем CSS на странице при изменении
});

gulp.task("browser-sync", function() {
  // Создаем таск browser-sync
  browserSync({
    // Выполняем browserSync
    server: {
      // Определяем параметры сервера
      baseDir: "app" // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});

// gulp.task("scripts", function() {
//   return gulp
//     .src(["app/js/common.js", "app/libs/**/*.js"])
//     .pipe(browserSync.reload({ stream: true }));
// });

gulp.task("html", function() {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("scripts", function() {
  return gulp
    .src([
      // Берем все необходимые библиотеки
      "app/libs/jquery/dist/jquery.min.js", // Берем jQuery
      "app/libs/magnific-popup/dist/jquery.magnific-popup.min.js" // Берем Magnific Popup
    ])
    .pipe(concat("libs.min.js")) // Собираем их в кучу в новом файле libs.min.js
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest("app/js")); // Выгружаем в папку app/js
});

gulp.task("css-libs", function() {
  return gulp
    .src("app/css/libs.css") // Выбираем файл для минификации
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(cssnano()) // Сжимаем
    .pipe(rename({ suffix: ".min" })) // Добавляем суффикс .min
    .pipe(gulp.dest("app/css")); // Выгружаем в папку app/css
});

gulp.task("clean", async function() {
  return del.sync("dist"); // Удаляем папку dist перед сборкой
});

gulp.task("img", function() {
  return gulp
    .src("app/img/**/*") // Берем все изображения из app
    .pipe(
      cache(
        imagemin({
          // С кешированием
          // .pipe(imagemin({ // Сжимаем изображения без кеширования
          interlaced: true,
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          use: [pngquant()]
        })
      ) /**/
    )
    .pipe(gulp.dest("dist/img")); // Выгружаем на продакшен
});

gulp.task("prebuild", async function() {
  var buildCss = gulp.src("app/css/*.css").pipe(gulp.dest("dist/css")); // Переносим библиотеки в продакшен

  var buildFonts = gulp.src("app/fonts/**/*").pipe(gulp.dest("dist/fonts")); // Переносим шрифты в продакшен

  var buildJs = gulp.src("app/js/**/*").pipe(gulp.dest("dist/js")); // Переносим скрипты в продакшен

  var buildHtml = gulp.src("app/*.html").pipe(gulp.dest("dist")); // Переносим HTML в продакшен
});

gulp.task("clear", function() {
  return cache.clearAll();
});

gulp.task("watch", function() {
  gulp.watch("app/sass/**/*.sass", gulp.parallel("sass")); // Наблюдение за sass файлами
  gulp.watch("app/scss/**/*.scss", gulp.parallel("sass")); // Наблюдение за scss файлами
  gulp.watch("app/*.html", gulp.parallel("html")); // Наблюдение за HTML файлами в корне проекта
  gulp.watch(
    ["app/js/common.js", "app/libs/**/*.js"],
    gulp.parallel("scripts")
  ); // Наблюдение за главным JS файлом и за библиотеками
});

gulp.task(
  "default",
  gulp.parallel("css-libs", "sass", "scripts", "browser-sync", "watch")
);

gulp.task(
  "build",
  gulp.parallel("prebuild", "clean", "img", "sass", "scripts")
);
