/**
 * Created by reuelteodoro on 18/08/2016.
 */

define(['angular', 'calculators/_module'], function (angular, calculator) {

    calculator.service('remainTotal.cal', ['$rootScope', function ($rootScope) {

        /**
         * Don't know why I used the apple and wedge analogy
         */
        return function remainTotal(apple, wedge, callback) {
            /**
             * quick way to test if wedge is set
             */
            if(!(apple * wedge)) return apple;

            /**
             * does the calculation
             */
            var result = (apple - wedge) > 0 ? (apple - wedge) : 0 ;

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