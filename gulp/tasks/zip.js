const { paths } = require('../config');
const { gulp } = require('../plugins/tools');
const zip = require('gulp-zip');

function toZip(cb) {
    gulp.src(paths.dist + '/**/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest(paths.dist))
    cb();
}

module.exports = () => toZip;