/**
 * Created by reuelteodoro on 15/08/2016.
 */



define(['angular', 'factories/_module'], function (angular, factory) {

    factory.factory('bucketlist.fctry', ['$rootScope', '$location', 'modal.fctry', 'storage.serv', function ($rootScope, $location, modal, storage) {

        var factories = {};

        var bucketlistFactory = function (model) {

            var obj = {};

            obj.model = model;

            /**
             * Creates a new bucketlist item
             *
             * @param model
             */
            obj.new = function (model) {
                model.new = true; // FIXME: This is a dirty way to manipulate the layout

                /**
                 * Retrives the factory
                 */
                var bucketlistModal = modal('bucketlistModal');

                /**
                 * Expects a promise
                 *
                 * @type object
                 */
                var promise = bucketlistModal.open(angular.copy(model));

                /**
                 * handles the promises, you've made
                 */
                promise.then(function success(response) {

                    /**
                     * save response to model
                     */
                    obj.model.push(response);

                    /**
                     * Save the model to localStorage
                     */
                    storage.setValue('bucketlist', obj.model);
                    $location.path("/"); // redirect to home

                    /**
                     * Close Modal
                     */
                    bucketlistModal.close();

                }, function fail(response) {
                    /**
                     * Does nothing at the moment, but it's here because I like have a fail response
                     */
                });
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
            if (factories[key]) return factories[key];

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