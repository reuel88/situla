/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'controllers/_module'], function (angular, controller) {

    controller.controller('modal.ctrl', [
        '$scope', '$parse', 'bucketlist.fctry', 'comment.serv', 'modal.serv', 'storage.serv', 'todo.serv',
        function ($scope, $parse, bucketlist, comment, modal, storage, todo) {


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
             *
             * Allow the modal to be accessed by the view
             */
            $scope.modal = modal;

            /**
             * Get To Do
             *
             * Allow the modal to be accessed by the view
             */
            $scope.todo = todo;

            /**
             * Get Comment
             *
             * Allow the modal to be accessed by the view
             */
            $scope.comment = comment;


            /**
             * Call function with strings
             *
             * @param key
             * @param fname
             * @param params
             */
            $scope.handler = function (key, fname, params) {

                var fn = $parse(key)($scope)[fname];

                if (typeof fn === 'function') fn(params);

            };

        }]);

});