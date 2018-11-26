const { paths } = require('../config');
const { gulp } = require('../plugins/tools');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

const fontsPaths = [paths.src + paths.assets + paths.fonts + '!iconfonts/*', paths.src + paths.assets + paths.fonts + '**/*.ttf']

module.exports = {
    woff() {
        return function (cb) {
            gulp.src(fontsPaths)
                .pipe(ttf2woff())
                .pipe(gulp.dest(paths.src + paths.assets + paths.fonts));
            cb();
        }
    },
    woff2() {
        return function (cb) {
            gulp.src(fontsPaths)
                .pipe(ttf2woff2())
                .pipe(gulp.dest(paths.src + paths.assets + paths.fonts));
            cb();
        }
    }
}