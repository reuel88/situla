/**
 * Created by reuelteodoro on 18/08/2016.
 */

define(['angular', 'services/_module', 'utils/isEmpty'], function (angular, service, isEmpty) {

    /**
     * Remember service is a singleton, lol
     */
    service.service('goal.serv', ['$rootScope', '$parse', 'contribute.cal', 'storage.serv', function ($rootScope, $parse, contribute, storage) {

        var obj = {};

        obj._key = '';

        obj._userModel = {};

        obj._listData = [];

        /**
         * My front facing side
         *
         * @type {object}
         */
        obj.model = {};

        obj.contributeModel = {};

        /**
         * There is no init just refresh
         */
        obj.refresh = function (key) {

            /**
             * whats being updated the bucketlist or the completeBucketlist
             */
            obj._key = key;

            obj._userModel = $parse('user')($rootScope.$$childHead);

            obj._listData = $parse('bucketlist')($rootScope.$$childHead);


            if (isEmpty(obj._userModel.model) || isEmpty(obj._listData._data)) {

                obj.model.totalWeeklyContribution = 0;
                obj.model.totalAlreadySaved = 0;
                obj.model.totalCost = 0;

                obj.model.weeklyCashFlow = 0;

                return;
            }

            /**
             * Calculate Totals
             */
            obj.model = contribute.total(obj._listData._data);


            obj.model.weeklyCashFlow = parseInt(obj._userModel.model._cashFlow || 0) * parseInt(obj._userModel.model._cashFlowFreq || 0) / 52;


            // console.log(obj._userModel);
            // console.log(obj._listData._data);
        };

        obj.refreshAction = function () {

            obj._userModel.refresh();
            obj._listData.refresh();

            obj.refresh('this');
        };


        obj.contribute = function () {

            var tribute = angular.copy(obj.contributeModel.contribute);

            for (var i = 0, k = obj._listData._data; i < k.length; i++) {
                var tributeAmount = parseFloat((contribute.weekly(k[i].totalCost, k[i].alreadySaved, k[i].date) / obj.model.totalWeeklyContribution * tribute) || 0);

                var newAlreadySaved = angular.copy(parseFloat(obj._listData._data[i].alreadySaved || 0) + tributeAmount);

                obj._listData._data[i].alreadySaved = newAlreadySaved <= k[i].totalCost ? newAlreadySaved : k[i].totalCost;
            }

            /**
             * reset the form
             */
            obj.contributeModel.contribute = '';

            /**
             * Save to storage
             */
            storage.setValue('bucketlist', obj._listData._data);

            /**
             * Refresh the data
             */
            obj.refreshAction();
        };


        obj.optimize = function () {
            if (confirm('Are you sure? We will push back the dates of your goals.')) {

                for (var i = 0, k = obj._listData._data; i < k.length; i++) {
                    // don't calculate if infinity
                    if (obj.model.totalWeeklyContribution == 'Infinity') break;

                    /**
                     * get current date
                     */
                    var nowDate = new Date();
                    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);


                    // The current outstanding about I currently own
                    var remainingAmount = parseFloat(k[i].totalCost || 0) - parseFloat(k[i].alreadySaved || 0);

                    // how much i have to earn to achieve THIS goal at THIS date
                    var weeklyContribution = contribute.weekly(k[i].totalCost, k[i].alreadySaved, k[i].date);

                    // the percent this contribution is to the ratio of
                    var tributePercent = weeklyContribution / obj.model.totalWeeklyContribution;

                    // The amount I actually earn each week
                    // obj.model.weeklyCashFlow

                    // based on how much I currently earn
                    // keeping with the ratio of contribution
                    // this is currently how of my money will go to the goal each week
                    // tributePercent * obj.model.weeklyCashFlow

                    // the amount of week I need to add to current date to achieve this goal
                    var weeksToAdd = Math.ceil(remainingAmount / (tributePercent * obj.model.weeklyCashFlow));


                    var goalDate = new Date().setDate(today.getDate() + (weeksToAdd * 7));


                    obj._listData._data[i].date = angular.copy(new Date(goalDate));

                }

                /**
                 * Save to storage
                 */
                storage.setValue('bucketlist', obj._listData._data);

                /**
                 * Refresh the data
                 */
                obj.refreshAction();
            }
        };

        return obj;


    }]);


});