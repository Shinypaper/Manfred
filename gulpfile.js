var gulp = require('gulp')
    ,sass = require('gulp-sass')
    ,livereload = require('gulp-livereload')
    ,path = require('path')
    ,rename = require('gulp-rename')
    ,gutil = require('gulp-util');

var sass_src = './public_html/assets/stylesheets/bootstrap.scss' // bootstrap.sass with import to custom.sass file
    ,css_dest = './public_html/assets/css' // css destination dir
    ,sass_watched = './public_html/assets/stylesheets/**/*.scss' // sass files to watch for changes
    ,js_watched = './public_html/assets/js/**/*.js' // js files to watch for changes
    ,templates_watched = './public_html/**/*.php'; // other files to watch for changes (php / html)

gulp.task('sass', function() {
  gulp.src(sass_src)
  .pipe(rename('style.scss'))
  .pipe(sass({
    paths: [ path.join(__dirname, 'sass', 'includes') ]
  }))
  .pipe(gulp.dest(css_dest))
  .pipe(livereload())
  .on('error', gutil.log);
});

gulp.task('watch', function() {
  var server = livereload();

  gulp.watch(sass_watched, ['sass']);

  gulp.watch([templates_watched, js_watched]).on('change', function(file) {
      server.changed(file.path);
  });

});


gulp.task('default', ['sass', 'watch']);