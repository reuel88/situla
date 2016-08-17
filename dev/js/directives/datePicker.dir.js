/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'jquery', 'directives/_module'], function (angular, $, directive) {

    directive.directive('datePicker', ['$filter', function ($filter) {

        return {
            require: '?ngModel', // ctrl
            link: function (scope, elem, attrs, ctrl) {
                $(elem).daterangepicker(JSON.parse(attrs.datePicker));

            }
        }

    }]);


});