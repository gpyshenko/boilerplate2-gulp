const { paths, source } = require('../config');
const { gulp, connect, gulpif, argv, plumber, sourcemaps } = require('../plugins/tools');

const postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    mqpacker = require('css-mqpacker'),
    sortCSSmq = require('sort-css-media-queries'),
    lineHeightConverter = require('postcss-line-height-px-to-unitless'),
    cleanCSS = require('gulp-clean-css'),
    gulpStylelint = require('gulp-stylelint');
    
const processors = [
    precss,
    autoprefixer({ browsers: source.browsersList }),
    lineHeightConverter(),
    mqpacker({ sort: sortCSSmq.desktopFirst })
];

module.exports = function () {
    return function (cb) {
        gulp.src(`${paths.src}/**/*.css`)
            .pipe(plumber())
            .pipe(gulpif(argv.dev, sourcemaps.init()))
            .pipe(postcss(processors))
            .pipe(gulpStylelint({
                reporters: [
                    { formatter: 'string', console: true }
                ]
            }))
            .pipe(gulpif(argv.dev, sourcemaps.write(paths.maps)))
            .pipe(gulpif(argv.prod, cleanCSS()))
            .pipe(gulp.dest(paths.dist))
            .pipe(connect.reload());
        cb();
    }
}