"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var copy = require('gulp-copy');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');


gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('minify-css', ['sass'], function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src(['./src/js/parts/base1.js', './src/js/parts/base2.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./src/js'));
});

gulp.task('compress', ['scripts'], function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('min-img', function() {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./src/scss/components/*.scss', ['minify-css']);
  gulp.watch('./src/js/parts/*.js', ['compress']);
  gulp.watch('./src/*.html', ['copy']);
});

gulp.task('default', ['minify-css', 'scripts', 'copy', 'min-img', 'watch'], function() {
  
});
