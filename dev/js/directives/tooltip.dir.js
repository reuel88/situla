/**
 * Created by reuelteodoro on 14/08/2016.
 */


define(['angular', 'jquery', 'directives/_module'], function (angular, $, directive) {

    directive.directive('tooltip', [function () {

        return {
            link: function (scope, elem, attrs) {
                $(elem).tooltip();
            }
        }

    }]);


});