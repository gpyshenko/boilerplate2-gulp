const { paths } = require('../config');
const { gulp } = require('../plugins/tools');
const htmlhint = require("gulp-htmlhint");

module.exports = function() {
    return function (cb) {
        gulp.src(`${paths.dist}/*.html`)
            .pipe(htmlhint('.htmlhintrc'))
            .pipe(htmlhint.reporter())
        cb();
    }
}