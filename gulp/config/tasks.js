const { argv } = require('../plugins/tools');

let tasks,
    tasksDev = ['template', 'styles', 'scripts', 'vendors', 'assets'],
    tasksProd = ['imagemin'];

if (argv.dev) {
    tasks = tasksDev;
} else {
    tasks = [...tasksDev, ...tasksProd];
}

module.exports = tasks;