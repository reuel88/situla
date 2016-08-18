/**
 * Created by reuelteodoro on 18/08/2016.
 */


define(['angular', 'factories/_module', 'utils/isEmpty'], function (angular, factory, isEmpty) {

    factory.factory('user.fctry', ['$rootScope', '$location','cashFlow.cal', 'validation.serv', 'storage.serv', function ($rootScope, $location, cashFlow, validation, storage) {

        var factories = {};

        var defaults = {
            'income': 0,
            'incomeFreq': 52,
            'expense': 0,
            'expenseFreq': 52,
            '_cashFlow': 0, // Underscore for result variables
            '_cashFlowFreq': 52
        };

        var userFactory = function (key, model) {

            var obj = {};

            obj._key = key;

            obj.model = model;

            obj.errors = {};

            obj.refresh = function () {
                obj.model = storage.getValue(obj._key);
                obj.calCashFlow();
            };

            /**
             * save the user spending and earning
             */
            obj.saveSpending = function () {

                /**
                 * TODO: Update - I updated the validation process for greater flexibility
                 *
                 * loops through model to make sure there are any errors
                 */
                for (var key in obj.model) {
                    if (obj.model.hasOwnProperty(key)) {
                        var error = validation.required(obj.model[key]);

                        if(error){ // error exists
                            obj.errors[key] = error;
                        }else{ // error doesn't exist
                            delete obj.errors[key];
                        }
                    }
                }

                /**
                 * check if any of the values equal zero
                 */
                if (isEmpty(obj.errors)) {
                    storage.setValue('user', obj.model); // Save to localStorage or server
                    $location.path("/"); // redirect to home
                }
            };

            /**
             * Calculate the cashFlow
             */
            obj.calCashFlow = function () {

                var result = cashFlow(
                    obj.model.income * obj.model.incomeFreq,
                    obj.model.expense * obj.model.expenseFreq,
                    obj.model._cashFlowFreq
                );

                obj.model._cashFlow = angular.copy(result);
            };

            return obj;
        };


        return function (key, model) {

            /**
             * Lowercase and dashes key
             *
             * @type {string}
             */
            var newKey = key.replace(/\s+/g, '-').toLowerCase();

            /**
             * Finds the Factory and returns it
             */

            if (factories[newKey]) return factories[newKey];

            /**
             * Check if data is not an object
             */
            if(typeof model !== 'object' || isEmpty(model))
                model = defaults;

            /**
             * Creates the factory
             */
            factories[newKey] = new userFactory(key, model);

            /**
             * Don't forget to return the object
             */
            return factories[newKey];
        };

    }]);


});