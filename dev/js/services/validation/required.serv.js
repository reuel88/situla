/**
 * Created by reuelteodoro on 15/08/2016.
 */

define(['angular', 'services/_module'], function (angular, service) {

    service.service('required.serv', ['$rootScope', function ($rootScope) {

        return function (value, message) {
            if(!value) return (message)? message : 'This is required';
        };

    }]);

});