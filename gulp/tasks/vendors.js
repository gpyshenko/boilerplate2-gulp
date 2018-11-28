const { paths } = require('../config');
const { vendors } = require('../../options.json');
const { gulp } = require('../plugins/tools');
const { createVendorsArray } = require('../methods');

module.exports = function () {
    return function (cb) {
        gulp.src(
            [...createVendorsArray(vendors.scripts, vendors.styles)], 
            { since: gulp.lastRun('vendors') }
            )
            .pipe(gulp.dest(paths.dist + '/vendors/'));
        cb();
    }
}