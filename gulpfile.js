var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');

gulp.task('uglify', function(){
    return gulp.src('app/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('app'));
});

gulp.task('useref', function(){
    return gulp.src('html/index.html')
    .pipe(useref())
    .pipe(gulp.dest('app'));
});


gulp.task('sass', function(){
    return gulp.src('**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles'));
});
