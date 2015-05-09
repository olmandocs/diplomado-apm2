var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


gulp.task('concat-css-olman', function(){
    return gulp.src(['source/css/normalize.css', 'source/css/skeleton.css', 'source/css/styles.css'])
        .pipe(concatCss('bundleLab33.css'))
        .pipe(gulp.dest('source/css/'));
});

gulp.task('minify-css-olman', ['concat-css-olman'], function(){
  return gulp.src('source/css/bundleLab33.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('concat-js-olman', ['minify-css-olman'], function(){
    return gulp.src('source/js/*.js')
        .pipe(concat('lab33.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});