const { paths } = require('./config');
const { gulp, argv } = require('./plugins/tools');

let getTask = function (task, options) {
    return require(paths.tasks + task)(options);
}

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

let createVendorsArray = function (...args) {
    let originalArray;
    if (args[0].length <= 0) {
        originalArray = [...args[1]];
    } else if (args[1].length <= 0) {
        originalArray = [...args[0]];
    } else {
        originalArray = [...args[0], ...args[1]];
    }
    let modifyArray = [];
    originalArray.forEach(function (el) {
        modifyArray.push(paths.vendors + el)
    });
    return modifyArray;
}

let watchFiles = function(cb) {
    if (argv.dev) {
        gulp.watch(`${paths.src}/**/*.njk`, gulp.series('template'));
        gulp.watch(`${paths.src}/**/*.css`, gulp.series('styles'));
        gulp.watch(paths.src + '/**/*.js', gulp.series('scripts'));
        gulp.watch(paths.src + paths.assets + '**/*', gulp.series('assets'));
    }
    cb();
};

module.exports = {
    getTask,
    lazyRequireTask,
    createVendorsArray,
    watchFiles
}