const { paths } = require('../config');
const { gulp, gulpif, plumber, argv } = require('../plugins/tools');
const nunjucksRender = require('gulp-nunjucks-render');
const prettyHtml = require('gulp-pretty-html');

const htmlPrettyConfig = {
    indent_size: 4,
    indent_with_tabs: true,
    preserve_newlines: false
}

const nunjucksConfig = {
    path: paths.src + paths.templates,
    ext: '.html'
}

module.exports = function () {
    return function(cb) {
        gulp.src(`${paths.src}/**/*.njk`)
            .pipe(plumber())
            .pipe(nunjucksRender(nunjucksConfig))
            .pipe(gulpif(argv.prod, prettyHtml(htmlPrettyConfig)))
            .pipe(gulp.dest(paths.dist));
        cb()
    }
};