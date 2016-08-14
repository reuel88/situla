/**
 * Created by reuelteodoro on 13/08/2016.
 */

require.config(
    {
        paths: {
            'angular': '../components/angular/angular.min',
            'angular-cookies': '../components/angular-cookies/angular-cookies.min',
            'angular-route': '../components/angular-route/angular-route.min',
            'jquery': '../components/jquery/dist/jquery',
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
            'jquery': {
                exports: '$'
            },
            'twitter-bootstrap': {
                deps: ['jquery']
            }
        },
        // Initialize the app
        deps: ['angular','angular-cookies', 'angular-route', 'bootstrap', 'jquery', 'twitter-bootstrap']
    }
);
