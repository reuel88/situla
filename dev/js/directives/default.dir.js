/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'directives/_module'], function (angular, directive) {

    directive.directive('defaultDir', [function () {

        return {
            link: function (scope, elem, attrs) {
                console.log(scope);
                console.log(elem);
                console.log(attrs);
            }
        }

    }]);


});