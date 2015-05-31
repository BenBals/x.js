var gulp = require('gulp'),
  coffee = require('gulp-coffee'),
  coffeelint = require('gulp-coffeelint'),
  concat = require('gulp-concat'),
  livereload = require('gulp-livereload'),
  minifyHTML = require('gulp-minify-html'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  runSequence = require('run-sequence'),
  uglify = require('gulp-uglify');

gulp.task('build', function() {
  gulp.src('src/test.html')
    .pipe(gulp.dest('build/'))


  return gulp.src('src/*.coffee')
    .pipe(coffeelint({
      max_line_length: {
        value: 100000
      },
      no_backticks: {
        level: 'ignore',
        vaule: false
      }
    }))
    .pipe(coffeelint.reporter())
    .pipe(coffee({bare: true}))
    .pipe(concat('x.js'))
    .pipe(gulp.dest('build/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(notify('Runnig the build task'))
    .pipe(gulp.dest('build/'))
})

gulp.task('watch', function() {
  runSequence('build')
  livereload.listen()
  gulp.watch('src/**/*', ['build'])
})

gulp.task('default', function() {
  runSequence('watch')
})