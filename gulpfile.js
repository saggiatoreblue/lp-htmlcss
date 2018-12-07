var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');
var dest = "./build";
var src = './app';
var clean = require('gulp-clean');


gulp.task('build', ['copy:images'], function () {
        gulp.src([src + '/styles/custom/custom.less'])
        .pipe(less({ compress: true }).on('error', gutil.log))
        .pipe(gulp.dest(dest))
});
gulp.task('watch', function() {
    gulp.watch('app/**/*', ['build', 'copy:images']);
});

gulp.task('clean', function () {
    return gulp.src([dest + '/**/*'])
        .pipe(clean());
});
gulp.task('copy:images', function() {
    return gulp.src(src + '/images/**/*')
        .pipe(gulp.dest(dest + '/images'));
});

gulp.task('default', ['build', 'copy:images', 'watch']);