const { paths, source } = require('../config');
const { gulp } = require('../plugins/tools');
const { createVendorsArray } = require('../methods');

module.exports = function () {
    return function (cb) {
        gulp.src(
            [...createVendorsArray(source.vendors.scripts), ...createVendorsArray(source.vendors.styles)], 
            { since: gulp.lastRun('vendors') }
            )
            .pipe(gulp.dest(paths.dist + '/vendors/'));
        cb();
    }
}