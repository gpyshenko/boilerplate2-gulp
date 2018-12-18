const { paths } = require('../config');
const { gulp } = require('../plugins/tools');

module.exports = function () {
    return function (cb) {
        gulp.src(`${paths.src}/vendors/**/*`,
            { since: gulp.lastRun('vendors') }
        )
            .pipe(gulp.dest(paths.dist + '/vendors/'));
        cb();
    }
};