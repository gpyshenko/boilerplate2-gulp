const gulp = require('gulp');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const opn = require('opn'); 
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

module.exports = {
    gulp,
    gulpif,
    argv,
    opn,
    plumber,
    connect,
    rename,
    sourcemaps
}