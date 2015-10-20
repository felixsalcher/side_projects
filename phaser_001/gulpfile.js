// /////////////////////////////////
// Required
// /////////////////////////////////

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// /////////////////////////////////
// HTML Task
// /////////////////////////////////

gulp.task('html', function() {
    gulp.src('**/*.html')
    .pipe(plumber())
    .pipe(reload({stream: true}));
})

// /////////////////////////////////
// Style Task
// /////////////////////////////////

gulp.task('styles', function() {
    console.log("S T Y L E S");
    gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(reload({stream: true}));
})

// /////////////////////////////////
// Scripts Task
// /////////////////////////////////

gulp.task('scripts', function() {
    gulp.src('js/**/*.js')
    .pipe(plumber())
    .pipe(reload({stream: true}));
});

// /////////////////////////////////
// Browser Sync
// /////////////////////////////////
gulp.task('browser-sync', function() {
   browserSync({
       server: {
           baseDir: "./"
       }
   }) 
});

// /////////////////////////////////
// Watch Task
// /////////////////////////////////

gulp.task('watch', function() {
    gulp.watch('**/*.html', ['html']);
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['scripts']);
});

// /////////////////////////////////
// Default Task
// /////////////////////////////////

gulp.task('default', ['html', 'styles', 'scripts', 'browser-sync', 'watch']);