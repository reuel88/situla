/**
 * Created by reuelteodoro on 16/08/2016.
 */

define(['angular', 'services/_module'], function (angular, service) {

    service.service('modal.serv', ['$rootScope', '$location', '$parse', 'storage.serv', function ($rootScope, $location, $parse, storage) {

        var obj = {};

        /**
         * Used for localStorage key and $scope.name
         *
         * @type {string}
         * @private
         */
        obj._key = '';

        /**
         * The array of the localStorage
         *
         * @type {Array}
         * @private
         */
        obj._data = [];

        /**
         * The Original Model
         *
         * @type {{}}
         * @private
         */
        obj._original = {};

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
         * Setup the variables
         *
         * @param key
         * @param data
         * @param model
         */
        obj.init = function (key, data, model) {
            obj.attrs.open = true;

            obj._key = key;

            obj._data = data; // saves the original model

            obj._original = model; // sets the model

            obj.model = angular.copy(model); // sets the model
        };

        /**
         * refresh the the data when updates are made
         *
         * @param data
         * @param model
         */
        obj.refresh = function (data, model) {
            obj._data = data; // saves the original model

            obj._original = model; // sets the model

            obj.model = angular.copy(model); // sets the model
        };

        /**
         * create a new item
         */
        obj.new = function () {
            /**
             * Remove new to clean up code
             */
            delete obj.model.new;

            /**
             * save response to model
             */
            obj._data.push(obj.model);

            /**
             * Save the model to localStorage
             */
            storage.setValue(obj._key, obj._data);

            /**
             * Redirect to home
             */
            $location.path("/");

            /**
             * Close the modal
             *
             * @type {boolean}
             */
            obj.attrs.open = false;
        };

        /**
         * update the item
         */
        obj.update = function () {
            /**
             * save to array
             */
            var index = obj._data.indexOf(obj._original);
            if (index !== -1) obj._data[index] = obj.model;

            /**
             * Save the data to localStorage
             */
            storage.setValue(obj._key, obj._data);

            /**
             * refresh variables to match the saved data
             */
            obj.refresh(obj._data, obj.model);
            $parse('todo')($rootScope.$$childHead).refresh(obj._data, obj.model);

            /**
             * Close editing
             *
             * @type {boolean}
             */
            obj.attrs.editing = false;
        };

        obj.contribute = function () {
            if (confirm('Congratulations')) {
                obj.model.alreadySaved = parseInt(obj.model.alreadySaved || 0) + parseInt(obj.model._contribute || 0);

                /**
                 * Clean up
                 */
                delete obj.model['_contribute'];

                /**
                 * save to array
                 */
                var index = obj._data.indexOf(obj._original);
                if (index !== -1) obj._data[index] = obj.model;


                /**
                 * Save the data to localStorage
                 */
                storage.setValue(obj._key, obj._data);


                /**
                 * refresh variables to match the saved data
                 */
                obj.refresh(obj._data, obj.model);
                $parse('todo')($rootScope.$$childHead).refresh(obj._data, obj.model);

                /**
                 * Cancel contribution
                 *
                 * @type {boolean}
                 */
                obj.attrs.contributing = false;
            }
        };

        /**
         * set to complete item
         */
        obj.complete = function () {
            /**
             * Remove new to clean up code
             */
            delete obj.model.edit;
            delete obj._original.edit;

            /**
             * Get completeBucketlist & add it to data
             */
            var completeBucketlist = $parse('completeBucketlist')($rootScope.$$childHead);
            completeBucketlist.add(obj.model);


            /**
             * Delete from array
             */
            var index = obj._data.indexOf(obj._original);
            if (index !== -1) obj._data.splice(index, 1);


            /**
             * Save the data to localStorage
             */
            storage.setValue(obj._key, obj._data);

            /**
             * refresh variables to match the saved data
             */
            obj.refresh(obj._data, obj.model);
            $parse('todo')($rootScope.$$childHead).refresh(obj._data, obj.model);

            /**
             * Close the modal
             *
             * @type {boolean}
             */
            obj.attrs.open = false;

        };


        /**
         * Delete the item
         */
        obj.delete = function () {
            // TODO : Fix Confirm
            if (confirm('Are you sure?')) {
                /**
                 * Remove new to clean up code
                 */
                delete obj.model.edit;
                delete obj._original.edit;

                /**
                 * Delete from array
                 */
                var index = obj._data.indexOf(obj._original);
                if (index !== -1) obj._data.splice(index, 1);

                /**
                 * Save the data to localStorage
                 */
                storage.setValue(obj._key, obj._data);

                /**
                 * refresh variables to match the saved data
                 */
                obj.refresh(obj._data, obj.model);

                /**
                 * Close the modal
                 *
                 * @type {boolean}
                 */
                obj.attrs.open = false;
            }
        };


        /**
         * Submit the form
         */
        obj.submit = function () {
            if (obj.model.new) {
                // console.log('new');

                obj.new();
            } else if (obj.model.edit) {
                // console.log('update');

                obj.update();
            }

        };

        /**
         * close the modal
         */
        obj.close = function () {
            /**
             * Remove new to clean up code
             */
            delete obj.model.new;
            delete obj._original.new;

            delete obj.model.edit;
            delete obj._original.edit;

            obj.attrs.open = false;
            obj.attrs.editing = false;
            obj.attrs.contributing = false;
        };

        obj.cancel = function () {

            var model = angular.copy(obj._original);

            /**
             * save to array
             */
            var index = obj._data.indexOf(obj._original);
            if (index !== -1) obj._data[index] = model;

            /**
             * refresh variables to match the saved data
             */
            obj.refresh(obj._data, model);
            $parse('todo')($rootScope.$$childHead).refresh(obj._data, model);

            /**
             * Close editing
             *
             * @type {boolean}
             */
            obj.attrs.editing = false;
        };

        return obj;

    }]);

});