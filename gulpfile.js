const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');



gulp.task('default', function() {
    gulp.src('src/scss/k-flex.scss')
        .pipe(
            sourcemaps.init()
        )
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['ie > 7', 'Android >= 4.0', 'ios > 7'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(
            sourcemaps.write('.')
        )
        .pipe(gulp.dest('dist/css'));
});