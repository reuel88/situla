/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'jquery', 'directives/_module' , 'utils/isMobile'], function (angular, $, directive, isMobile) {

    directive.directive('datePicker', ['$parse', function ($parse) {
        return {
            require: '?ngModel', // ctrl
            link: function (scope, elem, attrs, ctrl) {

                var nowDate = new Date();
                var tomorrow = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1, 0, 0, 0, 0);

                var opt = {
                    autoclose: true,
                    // startDate: tomorrow,
                    format: 'yyyy-mm-dd',
                    todayHighlight: true,
                    startView: 1
                };

                if (attrs.datePicker) {
                    opt = $.extend({}, opt, JSON.parse(attrs.datePicker));
                }


                /**
                 * Only adds datepicker on mobile
                 */
                if(!isMobile) {
                    $(elem).datepicker(opt);
                }


            }
        }

    }]);


});