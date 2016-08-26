/**
 * Created by reuelteodoro on 14/08/2016.
 */


define(['angular', 'jquery', 'directives/_module'], function (angular, $, directive) {

    directive.directive('convertToInteger', [function () {

        return {
            require: 'ngModel', // ctrl
            link: function (scope, elem, attrs, ctrl) {
                ctrl.$parsers.push(function(val) {
                    return val ? parseInt(val, 10) : null;
                });
                ctrl.$formatters.push(function(val) {
                    return val ? '' + val : null;
                });
            }
        }

    }]);
});