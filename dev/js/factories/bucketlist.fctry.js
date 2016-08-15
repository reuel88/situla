/**
 * Created by reuelteodoro on 15/08/2016.
 */



define(['angular', 'factories/_module'], function (angular, factory) {

    factory.factory('bucketlist.fctry', ['$rootScope', '$location', 'modal.serv', 'storage.serv', 'todo.serv', function ($rootScope, $location, modal, storage, todo) {

        var factories = {};

        var bucketlistFactory = function (key, data) {

            var obj = {};

            /**
             * Key to the storage and obj
             */
            obj.key = key;

            /**
             * The model Array - saved to the object so it easy to manipulate
             */
            obj.data = data;


            obj.model = {};


            obj.refresh = function (model) {

                obj.model = model;

            };

            /**
             * Creates a new bucketlist item
             *
             * @param model
             */
            obj.new = function (model) {
                model.new = true; // FIXME: This is a dirty way to manipulate the layout
                model.todo = [];
                model.comments = [];

                obj.model = model;

                /**
                 * Expects a promise
                 *
                 * @type object
                 */
                var promise = modal.open(obj.key, obj.model);

                /**
                 * handles the promises, you've made
                 */
                promise.then(function success(response) {
                    response.new = false; // FIXME: This is a dirty way to manipulate the layout

                    /**
                     * save response to model
                     */
                    obj.data.push(response);

                    /**
                     * Save the model to localStorage
                     */
                    storage.setValue(obj.key, obj.data);
                    $location.path("/"); // redirect to home

                    /**
                     * Close Modal
                     */
                    modal.close();

                });
            };

            /**
             * Updates the bucketlist item
             *
             * @param model
             */
            obj.update = function (model) {
                model.edit = true;

                obj.model = model;

                /**
                 * Expects a promise
                 *
                 * @type object
                 */
                var bucketlistPromise = modal.open(obj.key, obj.model);

                /**
                 * handles the promises, you've made
                 */
                bucketlistPromise.then(function success(response) {
                    response.new = false; // FIXME: This is a dirty way to manipulate the layout

                    /**
                     * Replace the old object with new
                     */
                    var index = obj.data.indexOf(obj.model);
                    if (index !== -1) obj.data[index] = response;

                    /**
                     * Save the model to localStorage
                     */
                    storage.setValue(obj.key, obj.data);

                    todo.refresh(obj.key, obj.data, response);
                });

                todo.init(obj.key, obj.data, obj.model);

            };

            /**
             * Delete The Goal
             *
             * @param model
             */
            obj.delete = function (model) {
                // TODO: Fix Confirmation
                if (confirm('Are you sure?')) {
                    obj.model = model;

                    /**
                     * Delete from array
                     */
                    var index = obj.data.indexOf(obj.model);
                    if (index !== -1) obj.data.splice(index, 1);

                    /**
                     * Save the data to localStorage
                     */
                    storage.setValue(obj.key, obj.data);

                    /**
                     * Retrieves the factory
                     */
                    modal.close();
                }

            };

            /**
             * Set the Goal as Complete
             *
             * @param model
             */
            obj.complete = function (model) {

                // TODO: Fix Confirmation
                if (confirm('Congratulations!!!')) {
                    model.complete = true;

                    obj.model = model;

                    /**
                     * Retrieve the completeBucketlist
                     */
                    var completeBucketlist = factories['completebucketlist']; // Remember it got lowercase

                    /**
                     * save response to model
                     */
                    completeBucketlist.model.push(obj.model);

                    /**
                     * Delete from array
                     */
                    var index = obj.data.indexOf(obj.model);
                    if (index !== -1) obj.data.splice(index, 1);

                    /**
                     * Save the model to localStorage
                     */
                    storage.setValue('bucketlist', obj.data);
                    storage.setValue('completeBucketlist', completeBucketlist.model);

                    /**
                     * Retrieves the modal and closes it, lol
                     */
                    modal.close();
                }

            };


            /**
             * @param original - The original model
             * @param model - The new model
             */
            obj.contribute = function (original, model) {

                obj.model = model;


                obj.model.alreadySaved = parseInt(obj.model.alreadySaved || 0) + parseInt(obj.model._contribute || 0);

                delete obj.model['_contribute'];

                var index = obj.data.indexOf(original);
                if (index !== -1) obj.data[index] = obj.model;

                /**
                 * Save the model to localStorage
                 */
                storage.setValue(obj.key, obj.data);

                /**
                 * Retrieves the factory
                 */
                modal.attrs.contributing = false;
            };

            return obj;
        };

        return function (key, data) {

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
            factories[newKey] = new bucketlistFactory(key, data);

            /**
             * Don't forget to return the object
             */
            return factories[newKey];
        };

    }]);


});