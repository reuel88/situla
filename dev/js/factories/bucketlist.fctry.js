/**
 * Created by reuelteodoro on 15/08/2016.
 */



define(['angular', 'factories/_module'], function (angular, factory) {

    factory.factory('bucketlist.fctry', ['$rootScope', '$location', 'modal.fctry', 'storage.serv', function ($rootScope, $location, modal, storage) {

        var factories = {};

        var bucketlistFactory = function (key, model) {

            var obj = {};

            /**
             * Key to the storage and obj
             */
            obj.key = key;

            /**
             * The model Array
             */
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
                var promise = bucketlistModal.open(model);

                /**
                 * handles the promises, you've made
                 */
                promise.then(function success(response) {
                    response.new = false; // FIXME: This is a dirty way to manipulate the layout

                    /**
                     * save response to model
                     */
                    obj.model.push(response);

                    /**
                     * Save the model to localStorage
                     */
                    storage.setValue(obj.key, obj.model);
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

            /**
             * Updates the bucketlist item
             *
             * @param model
             */
            obj.update = function (model) {
                model.edit = true;

                /**
                 * Retrieves the factory
                 */
                var bucketlistModal = modal('bucketlistModal');

                /**
                 * Expects a promise
                 *
                 * @type object
                 */
                var promise = bucketlistModal.open(model);

                /**
                 * handles the promises, you've made
                 */
                promise.then(function success(response) {


                    response.new = false; // FIXME: This is a dirty way to manipulate the layout

                    /**
                     * Replace the old object with new
                     */
                    var index = obj.model.indexOf(model);
                    if (index !== -1) obj.model[index] = response;


                    /**
                     * Save the model to localStorage
                     */
                    storage.setValue(obj.key, obj.model);
                    $location.path("/"); // redirect to home

                }, function fail(response) {
                    /**
                     * Does nothing at the moment, but it's here because I like have a fail response
                     */
                });

            };

            /**
             * Delete The Goal
             *
             * @param model
             */
            obj.delete = function (model) {

                // TODO: Fix Confirmation
                if (confirm('Are you sure?')) {
                    /**
                     * Delete from array
                     */
                    var index = obj.model.indexOf(model);
                    if (index !== -1) obj.model.splice(index, 1);

                    /**
                     * Save the model to localStorage
                     */
                    storage.setValue(obj.key, obj.model);

                    /**
                     * Retrieves the factory
                     */
                    var bucketlistModal = modal('bucketlistModal');
                    bucketlistModal.close();
                }

            };

            obj.complete = function (model) {
                // TODO: Fix Confirmation
                if (confirm('Congratulations!!!')) {
                    model.complete = true;

                    /**
                     * Retrieve the completeBucketlist
                     */
                    var completeBucketlist = factories['completebucketlist']; // Remember it got lowercase

                    /**
                     * save response to model
                     */
                    completeBucketlist.model.push(model);


                    /**
                     * Delete from array
                     */
                    var index = obj.model.indexOf(model);
                    if (index !== -1) obj.model.splice(index, 1);

                    /**
                     * Save the model to localStorage
                     */
                    storage.setValue('bucketlist', obj.model);
                    storage.setValue('completeBucketlist', completeBucketlist.model);


                    /**
                     * Retrieves the modal and closes it, lol
                     */
                    var bucketlistModal = modal('bucketlistModal');
                    bucketlistModal.close();
                }

            };

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
            if (factories[newKey]) return factories[newKey];

            /**
             * Creates the factory
             */
            factories[newKey] = new bucketlistFactory(key, model);


            /**
             * Don't forget to return the object
             */
            return factories[newKey];
        };

    }]);


});