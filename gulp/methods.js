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

let createSrcLinks = function (arr) {
    if (argv.prod) {
        var array = [];
        arr.forEach(function (el) {
            array.push(el + '.min')
        });
        return array;
    } else {
        return arr;
    }
}

let createScriptsArray = function(arr, dir) {
    var array = [];
    arr.forEach(function (el) {
        array.push(paths.src + dir + el)
    });
    return array;
}

let watchFiles = function(cb) {
    if (argv.dev) {
        gulp.watch(`${paths.src}/**/*.njk`, gulp.series('template'));
        gulp.watch(`${paths.src}/**/*.css`, gulp.series('styles'));
        gulp.watch(paths.src + paths.scripts + '**/*.js', gulp.series('scripts:common'));
        gulp.watch(paths.src + paths.assets + '**/*', gulp.series('assets'));
    }
    cb()
};

module.exports = {
    getTask,
    lazyRequireTask,
    createSrcLinks,
    createScriptsArray,
    watchFiles
}