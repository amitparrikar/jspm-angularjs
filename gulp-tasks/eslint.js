/**
 * Created by parrikaa on 24/07/16.
 */
'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('eslint', function () {
    return gulp.src([
        '**/*.js',
        '!client/config.js',
        '!client/jspm_packages{,/**}',
        '!node_modules{,/**}',
        '!client/modules/html_templates{,/**}'
    ])
    .pipe(eslint())
    .pipe(eslint.format());
});