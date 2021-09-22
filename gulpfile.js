
//переменные с путями к файлам проекта

//куда выводить результать работы галпа
  let project_folder = require("path").basename(__dirname)+'_del';
  //папка с исходниками
  let source_folder  = '#src';

//пути
  let path = {
    //пути куда выгружать обработанные файлы
    build:{
      html: project_folder + "/",
      css: project_folder + "/css/",
      js: project_folder + "/js/",
      img: project_folder + "/img/",
      fonts: project_folder + "/fonts/",
    },
    //пути файлов источника
    src: {
      html: [source_folder + "/*.html","!"+source_folder + "/_*.html"],//второй фаил исключает файлы кторые начинаются с символа подчёркивания
      css: source_folder + "/scss/style.scss",
      js: source_folder + "/js/JavaScript.js",
      img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
      fonts: source_folder + "/fonts/**/*.{ttf,eot,woff,woff2}",
    },
    //пути файлов у которых постоянно будут отслеживаться изменения
    watch: {
      html: source_folder + "/**/*.html",
      css: source_folder + "/scss/style.scss",
      js: source_folder + "/js/**/*.js",
      img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    //путь к обекту котороые будить отвечать за удаление папки обработынных файлов каждый раз при запуске галпа
    clean:"./"+project_folder + "/"
  };
  //переменные для записей сценария (тут бубут все плагины)
let{src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(), //плаген обновления браузера
    fileinclude = require('gulp-file-include');
    del = require("del"),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    media_grup = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webp_html = require('gulp-webp-html'),
    webp_css = require('gulp-webpcss'),
    svgSprite = require('gulp-svg-sprite'),

    //обработка шривтов
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 =require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter'),
    ttf2eot = require('gulp-ttf2eot');



//функция обновления браузера
    function browSersync(params) {
    browsersync.init({//настройки плагена
    server: {
      baseDir:path.clean
    },
    port:3000,
    notify:false
    })
    }

  //функция удаления нужной папкии перед началом работы галп
    function clean(param) {
        return del(path.clean);
    }

//обработка js
    function js(){
        return src(path.src.js)
         .pipe(dest(path.build.js))
         .pipe(uglify())
         .pipe(rename({
                extname:'.min.js'
            }))
         .pipe(dest(path.build.js))
         .pipe(browsersync.stream())
    }

//работа  файлами css
    function css() {
        return src(path.src.css)
            .pipe(
                sass({
                 outputStyle:"expanded"
            }))
            .pipe(media_grup())
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 5 versions'],
                cascade:false
                }))
            .pipe(webp_css())
            .pipe(dest(path.build.css))
            .pipe(clean_css())
            .pipe(rename({
                extname : '.min.css'
            }))
            .pipe(dest(path.build.css))
            .pipe(browsersync.stream());
    }

//функция для работ с html файлами
    function html(){
     return src(path.src.html)
         .pipe(fileinclude())
         .pipe(webp_html())
         .pipe(dest(path.build.html)) //фунция в которой будим писать команды ля галпа
         .pipe(browsersync.stream());
  }

//функция для работ с картиноки
    function images(){
     return src(path.src.img)
         .pipe(webp({
                quality:70//качество изображения
             }
             ))
         .pipe(dest(path.build.img))
         .pipe(src(path.src.img))
         .pipe(imagemin({
             progressive:true,
             svgoPlugins:[{removeViewBox:false}],
             interlaced:true,
             optimizationLevel:3
         }))
         .pipe(dest(path.build.img)) //фунция в которой будим писать команды ля галпа
         .pipe(browsersync.stream());
  }

//работа со шрифтами
    function fonts(){
     return src(path.src.fonts)
         .pipe(dest(path.build.fonts));
  }


//конвертер шрифтов otf в ttf
    gulp.task('fonter', function(){
        return src([source_folder + '/fonts/**/*.otf'])
            .pipe(fonter({
                format:['ttf']
            }))
            .pipe(dest(source_folder + "/fonts/"));
    })

//конвертировать ttf в oet
    gulp.task('ttf2eot', function(){
      return gulp.src(path.src.fonts)
        .pipe(ttf2eot())
        .pipe(dest(source_folder + '/fonts/'));
    });


//задача(вызывается отдельно) запуск gulp <имя>
   gulp.task('svgSprite', function() {
        return gulp.src([source_folder+'/iconspite/*.svg'])
            .pipe(svgSprite({
                stack:{
                    sprite:"../icon/incons.svg"//гуда будит выводиться готовый собраный фаил
                        //example:true//создать html фаил с примерами эконок
                }
            }))
            .pipe(dest(path.build.img))
    });

//функия динамического обновления файла и браузера
    function watchFiles(params){
        gulp.watch([path.watch.html],html);
        gulp.watch([path.watch.css],css);
        gulp.watch([path.watch.js],js);
        gulp.watch([path.watch.img],images);

  }

    let build = gulp.series(clean,gulp.parallel(js,css,html,images,fonts));
    let watch = gulp.parallel(browSersync,watchFiles,build);

  //нужно экспортировать переменные для связи с галп
    exports.fonts = fonts;
    exports.images = images;
    exports.js = js;
    exports.css = css;
    exports.watch = watch;
    exports.default = watch;
    exports.build = build;
    exports.html = html;