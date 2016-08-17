/**
 * Created by reuelteodoro on 14/08/2016.
 */


define(['angular', 'jquery', 'directives/_module'], function (angular, $, directive) {

    directive.directive('currency', ['formatNumber.serv', function (formatNumber) {

        return {
            require: '?ngModel', // ctrl
            link: function (scope, elem, attrs, ctrl) {
                if (!ctrl) return;

                // This is and init of the current value
                ctrl.$formatters.unshift(function (a) {
                    if (typeof ctrl.$modelValue == 'undefined' || !ctrl.$modelValue ) return ctrl.$modelValue;

                    var plainNumber = ctrl.$modelValue.toString().replace(/[^\d|\.+]/g, '');

                    return formatNumber(plainNumber);
                });

                //This is when typing it automatically changes the numbers
                ctrl.$parsers.unshift(function (viewValue) {

                    var plainNumber = viewValue.toString().replace(/[^\d|\.+]/g, ''),
                        parts = plainNumber.split('.');

                    parts[0] = formatNumber(parts[0]);

                    // redundant stuff because java script fucks up sometimes on different browsers
                    if (typeof parts[1] !== 'undefined' && parts[1].length >= 3) parts[1] = Math.round(parts[1].substring(0, 3) / 10);

                    elem.val(parts.join("."));

                    return parseFloat(plainNumber);
                });
            }
        }

    }]);


});