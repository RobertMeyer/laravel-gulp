var gulp = require('gulp');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

var sass = require('gulp-sass');
var csso = require('gulp-csso');
var prefix = require('gulp-autoprefixer');

var async = require('async');
var mkdirp = require('mkdirp');

// File paths
var paths = {
  scssSrc: 'app/assets/scss',
  scssModules: 'app/assets/scss/modules',   // Mixins
  scssPartials: 'app/assets/scss/partials', // Main scss files to be included in main.scss
  scssVendor: 'app/assets/scss/vendor',     // Third party scss files
  cssDest: 'public/css',
  jsSrc: 'app/assets/js',
  jsDest: 'public/js',
  imgSrc: 'app/assets/images',
  imgDest: 'public/images'
};

// Task to extend the base Laravel directory structure.
// Uses mkdir -p (mkdirp npm module) to generate all necessary
// parent paths for the given path strings. 
//
// This task should be run after a new Laravel project has been created
// to setup directory structures assumed by the gulp tasks contained within.
gulp.task('create_paths', function () {
  async.forEach(Object.keys(paths), function (path) {
    mkdirp(__dirname + '/' + paths[path], function (err) {
      if (err) return console.error(err);

      gutil.log('Created directory: ' + gutil.colors.green(paths[path]));
    });
  });
});

// Compile scss files to css. Performs autoprefixing and minification.
gulp.task('css', function () {
  gulp.src(paths.scssSrc + '/main.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(prefix('last 10 versions'))
    .pipe(csso())
    .pipe(gulp.dest(paths.cssDest));
});

gulp.task('watch', function () {
  gulp.watch(paths.scssSrc + '/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);
