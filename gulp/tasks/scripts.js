const { paths } = require('../config');
const { gulp, gulpif, argv, connect, plumber, sourcemaps } = require('../plugins/tools');

module.exports = {
    vendors() {
        return function (cb) {
            gulp.src([paths.src + '/**/*.js'])
                .pipe(plumber())
                //.pipe(concat(source.js.vendors))
                //.pipe(gulpif(argv.prod, uglify()))
                //.pipe(gulpif(argv.prod, rename(source.renameProps)))
                .pipe(gulp.dest(paths.dist));
            cb();
        }
    },
    common() {
        return function (cb) {
            gulp.src([paths.src + '/**/*.js'])
                .pipe(plumber())
                //.pipe(gulpif(argv.dev, sourcemaps.init()))
                //.pipe(concat(source.js.main))
                //.pipe(gulpif(argv.prod, uglify()))
                //.pipe(gulpif(argv.prod, rename(source.renameProps)))
                //.pipe(gulpif(argv.dev, sourcemaps.write(paths.maps)))
                .pipe(gulp.dest(paths.dist))
                .pipe(connect.reload());
            cb();
        }
    }
}