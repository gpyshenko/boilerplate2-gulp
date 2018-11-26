const { paths } = require('../config');
const { gulp } = require('../plugins/tools');
const imagemin = require('gulp-imagemin');

module.exports = function () {
    return function(cb) {
        gulp.src(paths.src + paths.assets + 'img/**/*')
            .pipe(imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.jpegtran({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false },
                        { removeTitle: false }
                    ]
                })
            ]))
            .pipe(gulp.dest(paths.dist + paths.assets + 'img'));
        cb();
    }
};