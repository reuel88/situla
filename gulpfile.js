/**
 * Created by reuelteodoro on 13/08/2016.
 */

'use strict';

var gulp = require('gulp'),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass');


gulp.task('default', function () {
    rjs({
        baseUrl: 'dev/js',
        out: 'main.min.js',
        mainConfigFile: 'dev/js/main.js',
        name: 'main',
        optimize: 'none',
        preserveLicenseComments: false,
        paths: {
            'angular': '../components/angular/angular.min',
            'angular-animate': '../components/angular-animate/angular-animate.min',
            'angular-cookies': '../components/angular-cookies/angular-cookies.min',
            'angular-route': '../components/angular-route/angular-route.min',
            'bootstrap-daterangepicker': '../components/bootstrap-daterangepicker/daterangepicker',
            'jquery': '../components/jquery/dist/jquery',
            'moment': '../components/moment/min/moment.min',
            'twitter-bootstrap': '../components/bootstrap-sass/assets/javascripts/bootstrap'
        },
        shim: {
            // standard require.js shim options
        }
        // ... more require.js options
    })
        // .pipe(uglify())
        .pipe(gulp.dest('./public/js')); // pipe it to the output DIR

    gulp.src('dev/components/requirejs/require.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));

    // gulp.src('dev/*.html')
    //     .pipe(htmlmin({collapseWhitespace: true}))
    //     .pipe(gulp.dest('./public'));

    gulp.src('dev/**/*.php')
        .pipe(gulp.dest('./public'));

    gulp.src('dev/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));

});

gulp.task('watch', function () {
    gulp.watch('dev/**/*.js', ['default'])
});