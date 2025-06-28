const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Compile SCSS to CSS
function css() {
    return gulp.src('./css/sass/*.scss')
        .pipe(sass({
            includePaths: ['./node_modules/susy/sass']
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./css'));
}

// Watch for changes
function watchCss() {
    gulp.watch('./css/sass/*.scss', css);
}

// Export tasks
exports.css = css;
exports['css:watch'] = watchCss;