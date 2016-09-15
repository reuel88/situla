/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'controllers/_module'], function (angular, controller) {

    controller.controller('default.ctrl', ['$scope', '$location', '$routeParams', 'bucketlist.fctry', 'user.fctry', 'goal.serv', 'storage.serv', 'loopServ', function ($scope, $location, $routeParams, bucketlist, user, goal, storage, loopServ) {

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
        $scope.goal.refresh('ctrl');

        /**
         * Quick path redirect
         */
        $scope.pathTo = function (path) {
            if (path) $location.path(path);
        };

        /**
         * Scroll to Select bucketlist items
         */
        $scope.selectItem = false;
        if ($location.$$path == '/select') {
            $scope.selectItem = true;
            var position = $('#bucketlist-list-item-add').offset().top;
            $('html,body').animate({
                scrollTop: position
            }, 1000);
        }

        /**
         * FIXME: Quick dirty way to check if bucketlist is available
         */
        $scope.bucketlistAvailable = function () {
            return storage.getValue('bucketlist') ? true : false;
        };

    }]);

});