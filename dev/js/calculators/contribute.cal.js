/**
 * Created by reuelteodoro on 18/08/2016.
 */

define(['angular', 'calculators/_module'], function (angular, calculator) {

    function daydiff(first, second) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }


    calculator.service('contribute.cal', ['$rootScope', function ($rootScope) {

        var obj = {};

        /**
         * Don't know why I used the apple and wedge analogy
         */
        obj.weekly = function (apple, wedge, date, callback) {

            /**
             * get current date
             */
            var nowDate = new Date();
            var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

            /**
             * get the date to recieve
             */
            var goal = new Date(date);

            /**
             * how many weeks to goal
             */
            var weeklyDifference = Math.ceil(daydiff(today, goal) / 7);

            /**
             * does the calculation
             */
            var result = (apple - (wedge || 0)) > 0 ? (apple - (wedge || 0)) / weeklyDifference : 0;


            /**
             * return callback
             */
            if (typeof callback === 'function')
                return callback(result);

            /**
             * return result
             */
            return result;
        };

        obj.total = function (data) {
            var output = {};

            var totalWeeklyContribution = 0;
            var totalAlreadySaved = 0;
            var totalCost = 0;

            for (var i = 0, k = data; i < k.length; i++) {
                totalAlreadySaved += k[i].alreadySaved;
                totalCost += k[i].totalCost;
                totalWeeklyContribution += obj.weekly(k[i].totalCost, k[i].alreadySaved, k[i].date);
            }

            output.totalWeeklyContribution = totalWeeklyContribution;
            output.totalAlreadySaved = totalAlreadySaved || 0;
            output.totalCost = totalCost;


            return angular.copy(output);

        };


        return obj;

    }]);

});