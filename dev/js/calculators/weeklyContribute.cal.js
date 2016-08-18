/**
 * Created by reuelteodoro on 18/08/2016.
 */

define(['angular', 'calculators/_module'], function (angular, calculator) {

    function daydiff(first, second) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }


    calculator.service('weeklyContribute.cal', ['$rootScope', function ($rootScope) {

        /**
         * Don't know why I used the apple and wedge analogy
         */
        return function weeklyContribute(apple, wedge, date, callback) {

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

            console.log(result);

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

    }]);

});