/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'controllers/_module'], function (angular, controller) {

    controller.controller('modal.ctrl', ['$scope', 'storage.serv', 'bucketlist.fctry', 'modal.serv', function ($scope, storage, bucketlist, modal) {


        /**
         * Get Bucketlist
         */
        var bucketlistModel = storage.getValue('bucketlist');

        bucketlistModel = (bucketlistModel) ? bucketlistModel : [];

        $scope.bucketlist = bucketlist('bucketlist', bucketlistModel);


        /**
         * Get Complete Bucketlist
         */
        var completeBucketlistModel = storage.getValue('completeBucketlist');

        completeBucketlistModel = (completeBucketlistModel) ? completeBucketlistModel : [];

        $scope.completeBucketlist = bucketlist('completeBucketlist', completeBucketlistModel);



        /**
         * Get Modal
         */
        $scope.modal = modal;

    }]);

});