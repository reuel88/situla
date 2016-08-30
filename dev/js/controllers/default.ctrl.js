/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'controllers/_module'], function (angular, controller) {

    controller.controller('default.ctrl', ['$scope', '$location', '$routeParams', 'bucketlist.fctry',  'user.fctry', 'goal.serv','storage.serv','loop.serv', function ($scope, $location, $routeParams, bucketlist,  user, goal, storage, loop) {

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
         *
         */
        $scope.pathTo = function (path) {
            if (path) $location.path(path);
        };

        /**
         * FIXME: Quick dirty way to check if bucketlist is available
         */
        $scope.bucketlistAvailable = function () {
            return storage.getValue('bucketlist') ? true : false;
        };

        loop.create('add', {
            model: {
                val: 0
            },
            loop: function (model) {
                model.val += 1;

                return model;
            },
            stop: function (model) {
                return (model.val >= 10);
            }
        });

        loop.create('subtract', {
            model: {
                val: 10
            },
            loop: function (model) {
                model.val -= 1;

                return model;
            },
            stop: function (model) {
                return (model.val <= 5);
            }
        });



        console.log(loop.get('add'));
        console.log(loop.get('subtract'));

        loop.update('subtract', {
            model: {
                val: 1
            },
            preLoop: function(model){
                return model;
            },
            loop: function (model) {
                model.val += 1;

                return model;
            },
            postLoop: function(model){
                return model;
            },
            stop: function (model) {
                return (model.val % 24 == 0);
            }
        });

        console.log(loop.get('add'));
        console.log(loop.get('subtract'));

    }]);

});