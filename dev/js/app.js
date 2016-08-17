/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(
    [
        'utils/isEmpty',

        'angular',

        'controllers/_index', // handles the controllers
        'directives/_index', // handles the directives
        'factories/_index', // handles the factories
        'services/_index' // handles the services
    ],
    function (isEmpty, angular) {

        var app = angular.module('app', ['ngCookies', 'ngRoute', 'app.controllers', 'app.directives', 'app.factories',  'app.services']);

        app
            .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/", {
                        templateUrl: "html/partials/bucketlist.php",
                        controller: 'default.ctrl'
                    })
                    .when("/start", {
                        templateUrl: "html/partials/start.php",
                        controller: 'default.ctrl'
                    })
                    .when("/select", {
                        templateUrl: "html/partials/goalSelect.php",
                        controller: 'default.ctrl'
                    })
                    .otherwise('/')
                ;
            }])

            .run(['$rootScope', '$location', 'storage.serv', function ($rootScope, $location, storage) {
                $rootScope.$on("$routeChangeStart", function (event, next, current) {

                    if (!storage.getValue('user')) {
                        $location.path("/start");
                    } else if (!storage.getValue('bucketlist') || isEmpty(storage.getValue('bucketlist'))) { // Check if exist or is empty
                        $location.path("/select");
                    }


                });
            }])
        ;

        /**
         * Had to seperate because there where issues when minifying
         */
        return app;
    }
);