/**
 * Created by reuelteodoro on 15/08/2016.
 */



define(['angular', 'jquery', 'factories/_module'], function (angular, $, factory) {

    factory.factory('bucketlist.fctry', ['$rootScope', '$location', 'comment.serv', 'modal.serv', 'storage.serv', 'todo.serv', function ($rootScope, $location, comment, modal, storage, todo) {

        var factories = {};

        var bucketlistFactory = function (key, data) {

            var obj = {};

            /**
             * Key to the storage and obj
             *
             * @type {string}
             * @private
             */
            obj._key = key;

            /**
             * The array of the localStorage
             *
             * @type {Array}
             * @private
             */
            obj._data = data;

            /**
             * The Original Model
             *
             * @type {Object}
             */
            obj.model = {};

            /**
             * retrieve variables
             *
             * @param key
             * @returns {*}
             */
            obj.get = function (key) {
                return obj[key];
            };

            /**
             * Creates a new bucketlist item
             *
             * @param model
             */
            obj.new = function (model) {

                var defaults = {
                    img: 'Because, I\'ll be over written, lol',
                    new: true,
                    todo: [],
                    comment: []
                };

                obj.model = $.extend({}, defaults, model);

                modal.init(obj._key, obj._data, obj.model);
            };

            /**
             * Opens the bucketlist item
             *
             * @param index
             */
            obj.open = function (index) {

                var model = obj._data[index];

                /**
                 * could not you jQuery extends because it transform the object
                 */
                model.edit = true;
                obj.model = model;

                modal.init(obj._key, obj._data, obj.model);

                todo.init(obj._key, obj._data, obj.model);

                comment.init(obj._key, obj._data, obj.model);

            };

            /**
             * function that adds to the data programmatically
             * @param model
             */
            obj.add = function (model) {
                obj.model = model;

                obj.model.complete = true;

                obj._data.push(obj.model);

                storage.setValue(obj._key, obj._data);
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
             * Check if data is not an array
             */
            if(!data || (data && data.constructor !== Array))
                data = [];

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