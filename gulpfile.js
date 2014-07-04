var gulp = require('gulp')
    ,less = require('gulp-less')
    ,livereload = require('gulp-livereload')
    ,path = require('path')
    ,rename = require('gulp-rename')
    ,gutil = require('gulp-util');

var less_src = './public_html/assets/less/style.less'
    ,css_dest = './public_html/assets/css'
    ,less_watched = './public_html/assets/less/*.less'
    ,js_watched = './public_html/assets/js/*.js'
    ,templates_watched = './public_html/**/*.php';

gulp.task('less', function() {
  gulp.src(less_src)
  .pipe(rename('style.less'))
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest(css_dest))
  .pipe(livereload())
  .on('error', gutil.log);
});

gulp.task('watch', function() {
  var server = livereload();

  gulp.watch(less_watched, ['less']);

  gulp.watch([templates_watched, js_watched]).on('change', function(file) {
      server.changed(file.path);
  });

});


gulp.task('default', ['less', 'watch']);