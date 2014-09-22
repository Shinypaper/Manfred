var gulp = require('gulp')
    ,sass = require('gulp-sass')
    ,concat = require('gulp-concat')
    ,mincss = require('gulp-minify-css')
    ,uglify = require('gulp-uglify')
    ,livereload = require('gulp-livereload')
    ,path = require('path')
    ,rename = require('gulp-rename')
    ,gutil = require('gulp-util')
    ,imagemin = require('gulp-imagemin')
    ,pngcrush = require('imagemin-pngcrush')
    ,uncss = require('gulp-uncss');


var sass_src = './public_html/assets/stylesheets/bootstrap.scss' // bootstrap.sass with import to custom.sass file
    ,css_dest = './public_html/assets/css' // css destination dir
    ,sass_watched = './public_html/assets/stylesheets/**/*.scss' // sass files to watch for changes
    ,js_watched = './public_html/assets/js/main.js' // js files to watch for changes
    ,js_dest = './public_html/assets/js' // js destination dir
    ,imgs_watched = './public_html/assets/img/**/*' // js files to watch for changes
    ,templates_watched = './public_html/**/*.php'; // other files to watch for changes (php / html)

function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
  gutil.beep();
}

gulp.task('sass', function() {
  gulp.src(sass_src)
  .pipe(rename('style.scss'))
  .pipe(sass({
    paths: [ path.join(__dirname, 'sass', 'includes') ]
  }))
  .on('error', errorHandler)
  .pipe(gulp.dest(css_dest));
});

gulp.task('js', function() {
  gulp.src(['!./public_html/assets/js/vendor/scripts.js', '!./public_html/assets/js/vendor/scripts.min.js', '!./public_html/assets/js/vendor/jquery-1.10.1.min.js', '!./public_html/assets/js/vendor/scrollTo.js', '!./public_html/assets/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js', './public_html/assets/js/vendor/*', './public_html/assets/js/main.js'])
  .pipe(concat('scripts.js'))
  .on('error', errorHandler)
  .pipe(gulp.dest(js_dest))
  .pipe(uglify())
  .on('error', errorHandler)
  .pipe(rename('scripts.min.js'))
  .pipe(gulp.dest(js_dest))
  .pipe(livereload());
});

gulp.task('css', function() {
  gulp.src(['!./public_html/assets/css/*.min.css','!./public_html/assets/css/styles.css','./public_html/assets/css/*', './public_html/assets/css/style.css'])
  .pipe(concat('styles.css'))
  .on('error', errorHandler)
  .pipe(gulp.dest(css_dest))
  .on('error', errorHandler)
  .pipe(uncss({
            html: ['./public_html/index.php', './public_html/header.php','./public_html/footer.php','./public_html/phil.php','./public_html/portfolio.php','./public_html/fallingbrook.php','./public_html/404.php','./public_html/mobile-first.php','./public_html/nav.php','./public_html/niteflite.php' ]
            ,ignore: ['wow','animated','hover','focus','click','FlipInX','overlay', 'stay']
        }))
  .pipe(rename('styles.min.css'))
  .pipe(mincss({keepSpecialComments:0}))
  .pipe(gulp.dest(css_dest))
  .pipe(livereload());
});

gulp.task('images', function () {
    return gulp.src(imgs_watched)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .on('error', errorHandler)
        .pipe(gulp.dest('./public_html/assets/img/'));
});


gulp.task('watch', function() {
  var server = livereload();

  gulp.watch(sass_watched, ['sass', 'css']);
  gulp.watch(js_watched, ['js']);

  gulp.watch([templates_watched, js_watched]).on('change', function(file) {
      server.changed(file.path);
  });

});


gulp.task('default', ['sass', 'css', 'js', 'watch']);



