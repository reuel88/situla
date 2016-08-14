/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'factories/_module', 'utils/isEmpty'], function (angular, factory, isEmpty) {

    factory.factory('modal.fctry', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {


        var factories = {};

        var fctry = function (model) {

            var obj = {};

            /**
             * Some attributes I use to know what state the modal is
             */
            obj.attrs = {
                open: false,
                editing: false,
                contributing: false
            };


            /**
             * A copy of the model that we edit
             */
            obj.model = {};


            /**
             * The to do service handler
             */
            obj.todo = {};

            /**
             * Opens the modal
             *
             * @param model
             * @returns {Promise}
             */
            obj.open = function (model) {
                var deferred = $q.defer(); // Creates a promise

                obj.attrs.open = true; // opens modal

                obj.originalModel = model; // saves the original model

                obj.model = angular.copy(model); // sets the model


                /**
                 * listens for modal close
                 */
                $rootScope.$on('modal-close', function () {
                    console.log('modal-close');
                    obj.model = angular.copy(model);
                    deferred.reject(); // goes back on the promise and laughs in your face, lol
                });

                /**
                 * listens for modal submit
                 */
                $rootScope.$on('modal-submit', function () {
                    console.log('modal-submit');
                    deferred.resolve(obj.model); // keep it promise, now your best friend, lol
                });

                return deferred.promise; // returns promise
            };

            /**
             * Close the modal
             */
            obj.close = function () {

                obj.attrs.open = false;
                obj.attrs.editing = false;

                $rootScope.$broadcast('modal-close');

            };

            /**
             * Cancel Editing
             */
            obj.cancel = function () {

                obj.attrs.editing = false;
                $rootScope.$broadcast('modal-close');

            };


            /**
             * You know where i'm going here. Submits the modal form
             */
            obj.submit = function () {

                obj.attrs.editing = false;
                $rootScope.$broadcast('modal-submit');
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
            if (factories[key]) return factories[key];

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