const { gulp } = require('../plugins/tools');
const { paths, source } = require('../config');
const { iconfonts } = require('../../lib/get-options');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const fontName = 'icons';

module.exports = function() {
    return function(cb) {
        gulp.src([paths.src + paths.assets + 'iconfonts/*.svg'])
            .pipe(iconfontCss({
                fontName: fontName,
                path: './gulp/tasks/iconfonts-template.css',
                targetPath: '../../../styles/' + source.css.icons,
                fontPath: '../assets/fonts/iconfonts'
            }))
            .pipe(iconfont({
                fontName: fontName,
                normalize: true,
                formats: iconfonts,
                fontHeight: 1000,
                centerHorizontally: true
            }))
            .pipe(gulp.dest(paths.iconFonts));
        cb();
    }
}