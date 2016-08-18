/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'controllers/_module'], function (angular, controller) {

    controller.controller('modal.ctrl', [
        '$scope', '$parse', 'bucketlist.fctry',  'user.fctry', 'comment.serv', 'goal.serv', 'modal.serv', 'storage.serv', 'todo.serv',
        function ($scope, $parse, bucketlist, user, comment, goal, modal, storage, todo) {

            /**
             * Get User
             */
            $scope.user = user('user', storage.getValue('user'));

            /**
             * Get Bucketlist
             */
            $scope.bucketlist = bucketlist('bucketlist', storage.getValue('bucketlist'));

            /**
             * Get Complete Bucketlist
             */
            $scope.completeBucketlist = bucketlist('completeBucketlist', storage.getValue('completeBucketlist'));

            /**
             * Get Goal
             *
             * Allow the modal to be accessed by the view
             */
            $scope.goal = goal;

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