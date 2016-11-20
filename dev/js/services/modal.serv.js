/**
 * Created by reuelteodoro on 16/08/2016.
 */

define(['angular', 'services/_module', 'utils/isEmpty', 'utils/climbTree'], function (angular, service, isEmpty, climbTree) {

    service.directive('modal', ['$parse', 'modal.serv', function ($parse, modal) {
        return {
            link: function (scope, elem, attrs) {
                $(elem).on('click', function (e) {
                    if (e.target !== this)
                        return;

                    $parse('modal')(scope).close();

                    scope.safeApply(function () {
                    }); // Apply the close
                });
            }
        }
    }]);

    // service.service('modal.serv', ['$rootScope', '$location', '$parse', 'storage.serv', 'validation.serv', function ($rootScope, $location, $parse, storage, validation) {
    service.service('modal.serv', ['$rootScope', '$location', '$parse', 'selectItemServ', 'storage.serv', 'validation.serv', function ($rootScope, $location, $parse, selectItemServ, storage, validation) {

        var obj = {};

        var fields = {
            img: ['required'],
            title: ['required'],
            totalCost: ['required'],
            date: ['required']
        };

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
         * Errors
         */
        obj.errors = {};

        /**
         * Setup the variables
         *
         * @param key
         * @param data
         * @param model
         */
        obj.init = function (key, data, model) {

            document.getElementsByTagName('body')[0].className += ' modal-open';

            obj.attrs.open = true;

            obj._key = key;

            obj._data = data; // saves the original model

            obj._original = model; // sets the model

            obj.model = climbTree(angular.copy(model));

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

            obj.model = climbTree(angular.copy(model)); // sets the model
        };

        /**
         * Uniforms the refresh
         *
         * @param data
         * @param model
         */
        obj.refreshAction = function (data, model) {


            obj.refresh(data, model);
            $parse('todo')($rootScope.$$childHead).refresh(data, model);
            $parse('comment')($rootScope.$$childHead).refresh(data, model);
            $parse('goal')($rootScope.$$childHead).refresh(obj._key);
        };

        /**
         * create a new item
         */
        obj.new = function () {

            obj.errors = validation.execute(fields, obj.model);

            if (isEmpty(obj.errors)) {
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
                document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace("modal-open", "");

                selectItemServ.close();

            }
        };

        /**
         * update the item
         */
        obj.update = function () {

            obj.errors = validation.execute(fields, obj.model);

            if (isEmpty(obj.errors)) {


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
                obj.refreshAction(obj._data, obj.model);

                /**
                 * Close editing
                 *
                 * @type {boolean}
                 */
                obj.attrs.editing = false;
            }
        };

        /**
         * Update only the already saved
         */
        obj.contribute = function () {
            var newAlreadySaved = parseInt(obj.model.alreadySaved || 0) + parseInt(obj.model._contribute || 0);

            obj.model.alreadySaved = newAlreadySaved <= obj.model.totalCost ? newAlreadySaved : obj.model.totalCost;

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
            obj.refreshAction(obj._data, obj.model);

            /**
             * Cancel contribution
             *
             * @type {boolean}
             */
            obj.attrs.contributing = false;

        };

        /**
         * set to complete item
         */
        obj.complete = function () {
            if (confirm('Congratulations')) {

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
                obj.refreshAction(obj._data, obj.model);


                /**
                 * Close the modal
                 */
                obj.attrs.open = false;
                document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace("modal-open", "");


                /**
                 * empty errors
                 */
                obj.errors = {};
            }

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
                 * Close the modal
                 *
                 * @type {boolean}
                 */
                obj.attrs.open = false;
                document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace("modal-open", "");
            }
        };

        /**
         * Submit the form
         */
        obj.submit = function () {
            if (obj.model.new) {
                // console.log('new bucketlist item');

                obj.new();
            } else if (obj.model.edit) {
                // console.log('update bucketlist item');

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

            document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace("modal-open", "");

            /**
             * empty errors
             */
            obj.errors = {};

        };

        /**
         * Cancel
         */
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
            obj.refreshAction(obj._data, model);

            /**
             * Close editing
             */
            obj.attrs.editing = false;

            /**
             * empty errors
             */
            obj.errors = {};
        };

        return obj;

    }]);

});