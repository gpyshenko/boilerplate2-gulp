const { paths } = require('../config');
const { gulp } = require('../plugins/tools');
const htmlhint = require("gulp-htmlhint");

function validate(cb) {
    gulp.src(`${paths.dist}/*.html`)
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
    cb();
}

module.exports = () => validate;