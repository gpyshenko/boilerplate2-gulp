const { port } = require('../config');
const { gulp } = require('../plugins/tools');
const browserSync = require("browser-sync").create();

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        port
    });
    gulp.watch(`./dist/**`).on('change', browserSync.reload)
}

module.exports = () => browsersync;