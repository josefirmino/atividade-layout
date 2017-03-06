// Variáveis:
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');


// Variáveis Diretórios :
var SRCcss = './source/scss/style.scss';
var SRChtml = './source/*.html';
var SRCimg = './source/img/*';

// Compilar e Minificar SCSS
gulp.task('sass', function () {
 return gulp.src(SRCcss)
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/css'));
 });


// Minify Html:
gulp.task('gulp-htmlmin', function() {
  return gulp.src(SRChtml)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

// Imagem minify
gulp.task('minify-img', () =>
    gulp.src(SRCimg)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
);

// Watch
gulp.task('default',['sass','gulp-htmlmin','minify-img'],function(){
	 gulp.watch(SRCcss, ['sass'])
	 gulp.watch(SRChtml, ['gulp-htmlmin','minify-img'])
});
