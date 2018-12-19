const { paths } = require('./config');
const { gulp } = require('./plugins/tools');

let getTask = (task, options) => require(paths.tasks + task)(options);

let lazyRequireTask = function (taskName, props, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(cb) {
        var task;
        if (props.hasOwnProperty('method')) task = require(paths.tasks + props.file)[props.method].call(this, options);
        else task = require(paths.tasks + props.file).call(this, options);
        return task(cb);
    })
}

let watchFiles = function(cb) {
    gulp.watch(`${paths.src}/**/*.njk`, gulp.series('template'));
    gulp.watch(`${paths.src}/**/*.css`, gulp.series('styles'));
    gulp.watch(paths.src + '/**/*.js', gulp.series('scripts'));
    gulp.watch(paths.src + paths.assets + '**/*', gulp.series('assets'));
    cb();
};

module.exports = {
    getTask,
    lazyRequireTask,
    watchFiles
}