/**
 * Created by parrikaa on 24/07/16.
 */
'use strict';

var browserSync = require('browser-sync').create(),
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    reload = browserSync.reload;

gulp.task('serve', ['browser-sync'], function () {
    gulp.watch('client/**/*.js').on('change', reload);
    gulp.watch('**/*.css').on('change', reload);
    gulp.watch('**/*.tpl.html').on('change', reload);
});

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync.init(null, {
        proxy: 'http://localhost:2000',
        browser: 'google-chrome',
        port: 2002
    });
});

gulp.task('nodemon', ['eslint'], function (done) {
    var running = false;

    return nodemon({
        script: 'server/app.js',
        watch: ['server/**/*.js']
    })
    .on('start', function () {
        if(!running){
            done();
        }
        running = true;
    })
    .on('restart', function () {
        setTimeout(function () {
            reload();
        }, 500);
    });
});