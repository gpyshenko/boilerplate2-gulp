const { argv } = require('../plugins/tools');
const { vendors } = require('../../options.json');

let tasks,
    tasksDev = ['template', 'styles', 'scripts', 'vendors', 'assets'],
    tasksProd = ['imagemin'];

if (vendors.styles.length === 0 && vendors.scripts.length === 0) {
    tasksDev.splice(tasksDev.indexOf('vendors'), 1);
}

if (argv.dev) {
    tasks = tasksDev;
} else {
    tasks = [...tasksDev, ...tasksProd];
}

module.exports = tasks;