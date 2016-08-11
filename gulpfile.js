var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-html', function() {
    return gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});


gulp.task('copy', function() {
    return gulp.src(['js/*','views/**/*'] , {
            base: './'
        }).pipe(gulp.dest('dist'));

})

gulp.task('compress', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('default', function() {
    //task code here
});

gulp.task('build', ['minify-html','minify-css','compress', 'copy']);
