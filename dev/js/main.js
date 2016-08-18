/**
 * Created by reuelteodoro on 13/08/2016.
 */

require.config(
    {
        paths: {
            'angular': '../components/angular/angular.min',
            'angular-animate': '../components/angular-animate/angular-animate.min',
            'angular-cookies': '../components/angular-cookies/angular-cookies.min',
            'angular-route': '../components/angular-route/angular-route.min',
            'bootstrap-datepicker': '../components/bootstrap-datepicker/dist/js/bootstrap-datepicker',
            'jquery': '../components/jquery/dist/jquery',
            'moment': '../components/moment/min/moment.min',
            'twitter-bootstrap': '../components/bootstrap-sass/assets/javascripts/bootstrap'
        },
        shim: {
            'angular': {
                exports: 'angular',
                deps: ['jquery']
            },
            'angular-animate': {
                deps: ['angular']
            },
            'angular-cookies': {
                deps: ['angular']
            },
            'angular-route': {
                deps: ['angular']
            },
            'bootstrap-datepicker': {
                deps: ['jquery', 'twitter-bootstrap']
            },
            'jquery': {
                exports: '$'
            },
            'moment': {
                deps: ['jquery']
            },
            'twitter-bootstrap': {
                deps: ['jquery']
            }
        },
        // Initialize the app
        deps: ['angular', 'angular-animate', 'angular-cookies', 'angular-route', 'bootstrap', 'bootstrap-datepicker',  'jquery', 'moment', 'twitter-bootstrap']
    }
);
