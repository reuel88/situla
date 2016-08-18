/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'jquery', 'directives/_module'], function (angular, $, directive) {

    directive.directive('datePicker', ['$filter', function ($filter) {

        return {
            require: '?ngModel', // ctrl
            link: function (scope, elem, attrs, ctrl) {

                var nowDate = new Date();
                var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);


                var opt = {
                    autoclose: true,
                    startDate: today,
                    format: 'M dd, yyyy',
                    todayHighlight: true,
                    startView: 1
                };

                if(attrs.datePicker){
                    opt = $.extend({}, opt , JSON.parse(attrs.datePicker));
                }


                $(elem).datepicker(opt);

            }
        }

    }]);


});