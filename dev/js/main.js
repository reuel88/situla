/**
 * Created by reuelteodoro on 13/08/2016.
 */

require.config(
    {
        paths: {
            'angular': '../components/angular/angular.min',
            'angular-cookies': '../components/angular-cookies/angular-cookies.min',
            'angular-route': '../components/angular-route/angular-route.min',
            'bootstrap-daterangepicker': '../components/bootstrap-daterangepicker/daterangepicker',
            'jquery': '../components/jquery/dist/jquery',
            'moment': '../components/moment/min/moment.min',
            'twitter-bootstrap': '../components/bootstrap-sass/assets/javascripts/bootstrap'
        },
        shim: {
            'angular': {
                exports: 'angular',
                deps: ['jquery']
            },
            'angular-cookies': {
                deps: ['angular']
            },
            'angular-route': {
                deps: ['angular']
            },
            'bootstrap-daterangepicker': {
                deps: ['jquery', 'moment']
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
        deps: ['angular', 'angular-cookies', 'angular-route', 'bootstrap', 'bootstrap-daterangepicker', 'jquery', 'moment', 'twitter-bootstrap']
    }
);
