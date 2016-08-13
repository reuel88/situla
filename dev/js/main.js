/**
 * Created by reuelteodoro on 13/08/2016.
 */

require.config(
    {
        paths: {
            'angular': '../components/angular/angular.min',
            'jquery': '../components/jquery/dist/jquery',
            'twitter-bootstrap': '../components/bootstrap-sass/assets/javascripts/bootstrap'
        },
        shim: {
            'angular': {
                exports: 'angular',
                deps: ['jquery']
            },
            'jquery': {
                exports: '$'
            },
            'twitter-bootstrap': {
                deps: ['jquery']
            }
        },
        // Initialize the app
        deps: ['angular','bootstrap', 'jquery', 'twitter-bootstrap']
    }
);
