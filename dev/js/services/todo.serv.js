/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'services/_module'], function (angular, service) {

    service.service('todo.serv', ['$rootScope', '$parse', 'storage.serv', function ($rootScope, $parse, storage) {

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
         * @type {object}
         * @private
         */
        obj._original = {};

        /**
         * Some attributes I use to know what state the modal is
         */
        obj.attrs = {
            new: false,
            isEditing: false
        };

        /**
         * A copy of the model that we edit
         */
        obj.model = {};

        /**
         * Temporary data
         * @type {object}
         */
        obj.temp = {};

        /**
         * Setup the variables
         *
         * @param key
         * @param data
         * @param model
         */
        obj.init = function (key, data, model) {
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
         * Add new to do item
         */
        obj.new = function () {

            /**
             * push to model
             */
            obj.model.todo.push(angular.copy(obj.temp));

            /**
             * empty out temp
             */
            obj.temp = { };

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
            $parse('modal')($rootScope.$$childHead).refresh(obj._data, obj.model);
            $parse('comment')($rootScope.$$childHead).refresh(obj._data, obj.model);

            /**
             * Close
             */
            obj.attrs.new = false;

        };

        /**
         * Generic variables that i used to manipulate the to do list
         */
        var _itemData = [];
        var _itemOriginal = {};
        var _itemModel = {}; // we will obj.temp for this one

        /**
         * Edit the item - it a lot like the obj.init()
         *
         * @param data
         * @param index
         */
        obj.edit = function (data, index) {
            if (obj.attrs.isEditing) return false;

            obj.attrs.isEditing = true;

            _itemData = data;

            var model = _itemData[index];

            model.editing = true;
            _itemOriginal = model;

            obj.temp = angular.copy(model);
        };

        /**
         * Tick the checkbox
         *
         * @param data
         * @param index
         */
        obj.check = function (data, index) {
            _itemData = data;

            var model = _itemData[index];

            _itemOriginal = model;

            obj.temp = angular.copy(model);

            obj.update();
        };

        /**
         * Update the item
         */
        obj.update = function () {

            delete obj.temp.editing; // also changes the style

            /**
             * save the cahnges on to do list
             */
            var itemIndex = _itemData.indexOf(_itemOriginal);
            if (itemIndex !== -1) _itemData[itemIndex] = obj.temp;


            /**
             * replaces the to do list with new list , lol
             */
            var index = obj._data.indexOf(obj._original);
            if (index !== -1) obj._data[index].todo = angular.copy(_itemData);


            /**
             * Save to storage
             */
            storage.setValue(obj._key, obj._data);


            /**
             * Refresh for that minty goodness
             */
            obj.refresh(obj._data, obj._data[index]);
            $parse('modal')($rootScope.$$childHead).refresh(obj._data, obj._data[index]);
            $parse('comment')($rootScope.$$childHead).refresh(obj._data, obj._data[index]);


            obj.attrs.isEditing = false;
        };


        /**
         * Delete
         */
        obj.cancel = function () {
            delete obj.temp.editing; // also changes the style
            delete _itemOriginal.editing; // also changes the style

            obj.attrs.isEditing = false;
        };

        /**
         * Delete
         */
        obj.delete = function () {
            if (confirm('Are you sure?')) {

                delete obj.temp.editing; // also changes the style

                /**
                 * save the cahnges on to do list
                 */
                var itemIndex = _itemData.indexOf(_itemOriginal);
                if (itemIndex !== -1) _itemData.splice(itemIndex, 1);

                /**
                 * replaces the to do list with new list , lol
                 */
                var index = obj._data.indexOf(obj._original);
                if (index !== -1) obj._data[index].todo = angular.copy(_itemData);

                /**
                 * Save to storage
                 */
                storage.setValue(obj._key, obj._data);

                /**
                 * Refresh for that minty goodness
                 */
                obj.refresh(obj._data, obj._data[index]);
                $parse('modal')($rootScope.$$childHead).refresh(obj._data, obj._data[index]);
                $parse('comment')($rootScope.$$childHead).refresh(obj._data, obj._data[index]);


                obj.attrs.isEditing = false;

            }
        };


        return obj;

    }]);

});


