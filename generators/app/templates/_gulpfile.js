var gulp = require('gulp');
var browserify = require('gulp-browserify');
 var webserver = require('gulp-webserver');

// Basic usage 
gulp.task('default', function() {
    // Single entry point to browserify 
    gulp.src('scripts/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/'))

    gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});