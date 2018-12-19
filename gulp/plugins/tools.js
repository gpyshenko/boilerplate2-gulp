const gulp = require('gulp');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

module.exports = {
    gulp,
    gulpif,
    argv,
    plumber,
    rename,
    sourcemaps
}