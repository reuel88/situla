/**
 * Created by reuelteodoro on 13/08/2016.
 */

var gulp = require('gulp'),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');


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
            'jquery': '../components/jquery/dist/jquery',
            'twitter-bootstrap': '../components/bootstrap-sass/assets/javascripts/bootstrap'
        },
        shim: {
            // standard require.js shim options
        }
        // ... more require.js options
    })
        .pipe(uglify())
        .pipe(gulp.dest('./public/js')); // pipe it to the output DIR

    gulp.src('dev/components/requirejs/require.js')
        .pipe(gulp.dest('./public/js'));


    gulp.src('dev/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./public'))

});