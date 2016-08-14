/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'controllers/_module'], function (angular, controller) {

    controller.controller('default.ctrl', ['$scope', 'storage.serv', 'start.fctry', 'bucketlist.fctry', function ($scope, storage, start, bucketlist) {


        /**
         * Get User
         */
        var user = storage.getValue('user');

        /**
         * Set user defaults
         *
         * @type {{income: number, incomeFreq: number, expense: number, expenseFreq: number, _cashFlow: number, _cashFlowFreq: number}}
         */
        user = (user) ? user : {
            'income': 0,
            'incomeFreq': 52,
            'expense': 0,
            'expenseFreq': 52,
            '_cashFlow': 0, // Underscore for result variables
            '_cashFlowFreq': 52
        };

        $scope.start = start('start', user);


        /**
         * Get Bucketlist
         */
        var bucketlistModel = storage.getValue('bucketlist');

        bucketlistModel = (bucketlistModel) ? bucketlistModel : [];

        $scope.bucketlist = bucketlist('bucketlist', bucketlistModel);



    }]);

});