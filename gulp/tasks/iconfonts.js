const { gulp } = require('../plugins/tools');
const { paths } = require('../config');
const { iconfonts } = require('../../options.json');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

module.exports = function() {
    return function(cb) {
        gulp.src([paths.src + paths.assets + 'iconfonts/*.svg'])
            .pipe(iconfontCss({
                fontName: iconfonts.fontName,
                path: './gulp/tasks/iconfonts-template.css',
                targetPath: '../../../styles/' + iconfonts.file,
                fontPath: '../assets/fonts/iconfonts'
            }))
            .pipe(iconfont({
                fontName: iconfonts.fontName,
                normalize: true,
                formats: iconfonts.exts,
                fontHeight: 1000,
                centerHorizontally: true
            }))
            .pipe(gulp.dest(paths.iconFonts));
        cb();
    }
}