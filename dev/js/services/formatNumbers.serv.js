/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'services/_module'], function (angular, service) {

    service.service('formatNumbers.serv', ['$rootScope', function ($rootScope) {

        return function formatNumbers(x) {
            x = parseFloat(x) || x;

            var parts = x.toString().split(".");

            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (typeof parts[1] !== 'undefined' && parts[1].length >= 3) {
                parts[1] = Math.round(parts[1].substring(0, 3) / 10);
            }
            return parts.join(".");
        };

    }]);

});