/**
 * Created by reuelteodoro on 15/08/2016.
 */



define(['angular', 'factories/_module'], function (angular, factory) {

    factory.factory('bucketlist.fctry', ['$rootScope', function ($rootScope) {

        var factories = {};

        var bucketlistFactory = function (model){

            var obj = {};

            obj.model = model;

            obj.new = function () {

            };

            obj.show = function () {
                console.log('show');

            };

            obj.update = function () {
                console.log('update');

            };

            obj.delete = function () {
                console.log('delete');

            };

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
            factories[key] = new bucketlistFactory(model);


            /**
             * Don't forget to return the object
             */
            return factories[key];
        };

    }]);


});