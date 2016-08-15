/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'services/_module'], function (angular, service) {

    service.service('todo.serv', ['$rootScope', '$parse',  'modal.serv', 'storage.serv', function ($rootScope, $parse, modal, storage) {

        var obj = {};

        obj.key = '';

        obj.attrs = {
            new: false
        };

        obj.data = [];

        obj.original = {};

        obj.model = {};

        obj._model = {};

        obj.init = function (key, data, model) {
            obj.key = key;

            obj.data = data; // saves the original model

            obj.original = model; // sets the model

            obj.model = angular.copy(obj.original); // sets the model
        };

        obj.refresh = function (key, data, model) {
            obj.key = key;

            obj.data = data; // saves the original model

            obj.original = model; // sets the model

            obj.model = angular.copy(obj.original); // sets the model
        };

        obj.new = function () {

            obj.model.todo.push(angular.copy(obj._model));

            obj._model = {};

            obj.attrs.new = false;

            var index = obj.data.indexOf(obj.original);
            if (index !== -1) obj.data[index] = obj.model;

            storage.setValue(obj.key, obj.data);


            $parse(obj.key)($rootScope.$$childHead).refresh(obj.model);

        };

        return obj;

    }]);

    // service.service('todo.serv', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {
    //
    //     var obj = {};
    //
    //     obj.key = '';
    //
    //     obj.attrs = {
    //         new: false
    //     };
    //
    //     obj.original = {};
    //
    //     obj.model = {};
    //
    //     obj._model = {};
    //
    //     obj.init = function (key, model) {
    //         var deferred = $q.defer(); // Creates a promise
    //
    //         obj.key = key;
    //
    //         obj.original = model; // saves the original model
    //
    //         obj.model = angular.copy(model); // sets the model
    //
    //         $rootScope.$on('todo-submit', function () {
    //             deferred.resolve(obj.model); // keep it promise, now your best friend, lol
    //         });
    //
    //
    //         return deferred.promise; // returns promise
    //     };
    //
    //     obj.new = function () {
    //
    //
    //         obj.model.todo.push(angular.copy(obj._model));
    //
    //         obj._model = {};
    //
    //         obj.attrs.new = false;
    //
    //         $rootScope.$broadcast('todo-submit');
    //     };
    //
    //     return obj;
    //
    // }]);


});


