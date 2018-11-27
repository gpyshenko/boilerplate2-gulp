const { gulp } = require('./gulp/plugins/tools');
const { tasks, paths, source } = require('./gulp/config');
const { getTask, lazyRequireTask, watchFiles } = require('./gulp/methods');

// - Livereload
lazyRequireTask('connect', { file: 'livereload'})

// - Templates
lazyRequireTask('template', { file: 'template' })

// - Styles
lazyRequireTask('styles', { file: 'styles' });

// - Scripts
lazyRequireTask('scripts', { file: 'scripts'});

lazyRequireTask('vendors', { file: 'vendors' });

// // - Assets
lazyRequireTask('assets', { file: 'assets'});
lazyRequireTask('imagemin', { file: 'imagemin'});

// - Fonts
lazyRequireTask('fonts:woff', { file: 'fonts', method: 'woff' });
lazyRequireTask('fonts:woff2', { file: 'fonts', method: 'woff2' });

// - Utils
gulp.task('clean', getTask('clean', paths.dist));
gulp.task('clean:iconfonts', getTask('clean', [paths.iconFonts, paths.src + paths.styles + source.css.icons]));
gulp.task('zip', getTask('zip'));
gulp.task('validate', getTask('validate'));

// - Fonts generate
gulp.task('iconfonts', gulp.series('clean:iconfonts', getTask('iconfonts')));
gulp.task('fonts', gulp.series('fonts:woff', 'fonts:woff2'));

// - Mode
gulp.task('build', gulp.parallel(...tasks));
gulp.task('dev', gulp.series('build', gulp.parallel(watchFiles, 'connect')));
gulp.task('prod', gulp.series('clean', 'build'));