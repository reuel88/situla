/**
 * Created by reuelteodoro on 18/08/2016.
 */

define(['angular', 'factories/_module'], function (angular, factory) {

    factory.factory('default.fctry', ['$rootScope', function ($rootScope) {

        var factories = {};

        var fctry = function (model){

            var obj = {};

            return obj;
        };

        return function (key, model) {

            /**
             * Lowercase and dashes key
             *
             * @type {string}
             */
            key = key.replace(/\s+/g, '-').toLowerCase();

            /**
             * Finds the Factory and returns it
             */
            if(factories[key]) return factories[key];

            /**
             * Creates the factory
             */
            factories[key] = new fctry(model);

            /**
             * Don't forget to return the object
             */
            return factories[key];

        };

    }]);


});