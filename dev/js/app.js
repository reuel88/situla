/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(
    [
        'angular',

        'controllers/_index', // handles the controllers
        'directives/_index', // handles the directives
        'factories/_index', // handles the factories
        'services/_index' // handles the services
    ],
    function (angular) {

        var app = angular.module('app',['app.controllers', 'app.directives', 'app.factories', 'app.services']);

        /**
         * Had to seperate because there where issues when minifying
         */
        return app;
    }
);