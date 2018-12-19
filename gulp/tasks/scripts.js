const { paths } = require('../config');
const { gulp, gulpif, argv, plumber, sourcemaps } = require('../plugins/tools');

function scripts(cb) {
    gulp.src(`${paths.src}/**/*.js`)
        .pipe(plumber())
        .pipe(gulpif(argv.dev, sourcemaps.init()))
        .pipe(gulpif(argv.dev, sourcemaps.write(paths.maps)))
        .pipe(gulp.dest(paths.dist));
    cb();
}

module.exports = () => scripts;