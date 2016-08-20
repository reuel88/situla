/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'services/_module'], function (angular, service) {

    service.service('comment.serv', ['$rootScope', '$parse', 'storage.serv', function ($rootScope, $parse, storage) {

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
            isEditing: false // prevents  from edit more than one
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
         * Temporary data
         * @type {object}
         */
        obj.tempItem = {};

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

        obj.refreshAction = function () {
            obj.refresh(obj._data, obj.model);
            $parse('modal')($rootScope.$$childHead).refresh(obj._data, obj.model);
            $parse('todo')($rootScope.$$childHead).refresh(obj._data, obj.model);

            $rootScope.safeApply(function () {});
        };

        /**
         * New Comment
         */
        obj.new = function () {
            obj.temp.date = new Date();


            /**
             * unshift to model
             */
            obj.model.comment.unshift(angular.copy(obj.temp));

            /**
             * empty out temp
             */
            obj.temp = {};

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
            obj.refreshAction();

        };

        /**
         * Generic variables that i used to manipulate the comment list
         */
        var _itemData = [];
        var _itemOriginal = {};
        var _itemModel = {}; // we will obj.tempItem for this one

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

            obj.tempItem = angular.copy(model);
        };

        /**
         * update
         */
        obj.update = function () {
            delete obj.tempItem.editing; // also changes the style


            /**
             * save the cahnges on comment list
             */
            var itemIndex = _itemData.indexOf(_itemOriginal);
            if (itemIndex !== -1) _itemData[itemIndex] = obj.tempItem;

            /**
             * replaces the comment list with new list , lol
             */
            var index = obj._data.indexOf(obj._original);
            if (index !== -1) obj._data[index].comment = angular.copy(_itemData);

            /**
             * Save to storage
             */
            storage.setValue(obj._key, obj._data);

            /**
             * refresh variables to match the saved data
             */
            obj.refreshAction();

            obj.attrs.isEditing = false;
        };


        /**
         * Cancel
         */
        obj.cancel = function () {

            delete obj.tempItem.editing; // also changes the style
            delete _itemOriginal.editing; // also changes the style

            obj.temp = {};


            obj.attrs.isEditing = false;
        };

        /**
         * Delete
         */
        obj.delete = function () {
            if (confirm('Are you sure?')) {
                delete obj.tempItem.editing; // also changes the style

                /**
                 * save the cahnges on comment list
                 */
                var itemIndex = _itemData.indexOf(_itemOriginal);
                if (itemIndex !== -1) _itemData.splice(itemIndex, 1);

                /**
                 * replaces the comment list with new list , lol
                 */
                var index = obj._data.indexOf(obj._original);
                if (index !== -1) obj._data[index].comment = angular.copy(_itemData);

                /**
                 * Save to storage
                 */
                storage.setValue(obj._key, obj._data);

                /**
                 * refresh variables to match the saved data
                 */
                obj.refreshAction();


                obj.attrs.isEditing = false;
            }
        };


        return obj;

    }]);

});