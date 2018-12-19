const { paths } = require('../config');
const { gulp } = require('../plugins/tools');

function vendors(cb) {
    gulp.src(`${paths.src}/vendors/**/*`,
        { since: gulp.lastRun('vendors') }
    )
        .pipe(gulp.dest(paths.dist + '/vendors/'));
    cb();
}

module.exports = () => vendors;