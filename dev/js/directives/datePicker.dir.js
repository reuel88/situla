/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular','jquery', 'directives/_module'], function (angular, $, directive) {

    directive.directive('datePicker', [function () {

        return {
            link: function (scope, elem, attrs) {
                $(elem).daterangepicker(JSON.parse(attrs.datePicker));
            }
        }

    }]);


});