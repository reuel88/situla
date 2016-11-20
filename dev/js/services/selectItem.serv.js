/**
 * Created by reuelteodoro on 16/09/2016.
 */


define(['angular', 'services/_module'], function (angular, service) {

    service.service('selectItemServ', ['$rootScope', '$location', function ($rootScope, $location) {

        var status = false;

        var body = $('html,body');

        var addBtn = document.getElementById("bucketlist-list-item-add");

        var obj = {};

        obj.init = function(){
            body = $('html,body');
            addBtn = document.getElementById("bucketlist-list-item-add");

            return obj;
        };

        obj.getStatus = function () {
            return status;
        };

        obj.open = function () {
            status = true;
            body.animate({
                scrollTop: window.pageYOffset + addBtn.getBoundingClientRect().top + (addBtn.offsetHeight /2)
            }, 1000);
        };

        obj.close = function () {
            status = false;
        };

        obj.path = function (path) {
            if ($location.$$path == path) {
                obj.open();
            }
        };



        return obj;
    }]);

});