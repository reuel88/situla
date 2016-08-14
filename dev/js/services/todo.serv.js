/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'services/_module'], function (angular, service) {

    service.service('todo.serv', ['$rootScope', function ($rootScope) {

        return function (model) {

            var obj = {}; // What i'm going to return

            // obj.attrs = {
            //     new: false
            // };
            //
            // /**
            //  * model Array;
            //  *
            //  * @type {Array}
            //  */
            // obj.model = model.todo ? model.todo : [];
            //
            // /**
            //  * temporary model for new
            //  */
            // obj._model = {};
            //
            // obj.new = function () {
            //
            //     obj.model.push(angular.copy(obj._model));
            //
            //     model.todo = angular.copy(obj.model);
            //
            //     obj._model = {};
            //
            //     obj.attrs.new = false;
            //
            // };
            //
            // obj.update = function () {
            //
            // };
            //
            // obj.delete = function () {
            //
            // };

            return obj;
        };

    }]);

});

