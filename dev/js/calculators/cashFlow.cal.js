/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'calculators/_module'], function (angular, calculator) {

    calculator.service('cashFlow.cal', ['$rootScope', function ($rootScope) {

        return function cashFlow(income, expenses, freq, callback) {
            /**
             * quick check they are set
             */
            if(!income * expenses * freq) return 0 ;

            /**
             * does the calculation
             */
            var result = (income - expenses) / freq;

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