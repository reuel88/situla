/**
 * Created by reuelteodoro on 19/08/2016.
 */


define(['angular', 'jquery', 'directives/_module'], function (angular, $, directive) {

    directive.directive('minHeight', [function () {

        return {
            link: function (scope, elem, attrs) {

                $(document).on('resize', function () {

                    var e = $(elem);

                    e.removeAttr('style');

                    var theActualHeight = elem[0].offsetHeight;

                    if (theActualHeight <= attrs.minHeight)
                        e.css({'height': attrs.minHeight});

                }).trigger('resize');


            }
        }

    }]);


});