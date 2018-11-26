const { paths, port } = require('../config');
const { connect, opn } = require('../plugins/tools');
const livereload = require('gulp-livereload');

module.exports = function () {
    return function (cb) {
        connect.server({
            port: port,
            root: paths.dist,
            livereload: true
        });
        opn(`http://localhost:${port}`);
        cb()
    }
};