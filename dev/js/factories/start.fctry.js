/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'factories/_module', 'utils/isEmpty'], function (angular, factory, isEmpty) {

    factory.factory('start.fctry', ['$rootScope', '$location', 'validation.required.serv', 'storage.serv', function ($rootScope, $location, validationRequired, storage) {

        var factories = {};

        var startFactory = function (model) {

            var obj = {};

            obj.model = model;

            obj.errors = {};

            obj.cal = function () {
                var yearlyIncome = obj.model.income * obj.model.incomeFreq;
                var yearlyExpense = obj.model.expense * obj.model.expenseFreq;
                var yearlyCashFlow = yearlyIncome - yearlyExpense;

                obj.model._cashFlow = yearlyCashFlow / obj.model._cashFlowFreq;
            };

            obj.save = function () {

                /**
                 * loops through model to make sure ther are any errors
                 */
                for (var key in obj.model) {
                    if (obj.model.hasOwnProperty(key)) {
                        var error = validationRequired(obj.model[key]);

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


            return obj;
        };

        return function (key, model) {

            /**
             * Lowercase and dashes key
             *
             * @type {string}
             */
            key = key.replace(/\s+/g, '-').toLowerCase();

            /**
             * Finds the Factory and returns it
             */

            if (factories[key]) return factories[key];

            /**
             * Creates the factory
             */
            factories[key] = new startFactory(model);

            /**
             * Don't forget to return the object
             */
            return factories[key];
        };

    }]);


});