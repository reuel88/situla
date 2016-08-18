/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'factories/_module'], function (angular, factory) {

    factory.factory('default.fctry', ['$rootScope', function ($rootScope) {

        var factories = {};

        var fctry = function (key, model){

            var obj = {};

            obj._key = key;

            return obj;
        };

        return function (key, model) {

            /**
             * Lowercase and dashes key
             *
             * @type {string}
             */
            var newKey = key.replace(/\s+/g, '-').toLowerCase();

            /**
             * Finds the Factory and returns it
             */
            if(factories[newKey]) return factories[newKey];

            /**
             * Creates the factory
             */
            factories[newKey] = new fctry(key,model);

            /**
             * Don't forget to return the object
             */
            return factories[newKey];

        };

    }]);


});