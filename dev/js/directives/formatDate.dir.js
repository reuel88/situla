/**
 * Created by reuelteodoro on 18/08/2016.
 */


define(['angular', 'jquery', 'directives/_module'], function (angular, $, directive) {

    directive.directive('formatDate', ['$filter', function ($filter) {

        return {
            require: '?ngModel', // ctrl
            link: function (scope, elem, attrs, ctrl) {

                ctrl.$formatters.push(function(modelValue){
                    return new Date(modelValue);
                });


            }

        }

    }]);


});