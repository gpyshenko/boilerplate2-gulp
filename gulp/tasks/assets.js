const { paths } = require('../config');
const { gulp } = require('../plugins/tools');

function assets(cb) {
    gulp.src(paths.src + paths.assets + '**/*', { since: gulp.lastRun('assets') })
        .pipe(gulp.dest(paths.dist + paths.assets));
    cb();
}

module.exports = () => assets;