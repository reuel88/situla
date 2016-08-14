/**
 * Created by reuelteodoro on 15/08/2016.
 */


define(['angular', 'controllers/_module'], function (angular, controller) {

    controller.controller('modal.ctrl', ['$scope', 'modal.fctry', function ($scope, modal) {


            $scope.modal = modal('bucketlistModal');

    }]);

});