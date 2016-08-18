/**
 * Created by reuelteodoro on 18/08/2016.
 */

define(['angular', 'services/_module'], function (angular, service) {

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


            /**
             * Calculate Totals
             */
            obj.model = contribute.total(obj._listData._data);

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

        return obj;


    }]);


});