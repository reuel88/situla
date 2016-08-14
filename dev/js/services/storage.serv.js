/**
 * Created by reuelteodoro on 14/08/2016.
 */


define(['angular', 'services/_module'], function (angular, service) {

    service.service('storage.serv', ['$rootScope', '$cookies', function ($rootScope, $cookies) {

        /**
         * If localStorage doesn't exist use cookies
         */
        if (typeof(Storage) == "undefined") {

            // TODO: not tested
            return {
                getValue: function (key) {
                    return JSON.parse($cookies.get(key));
                },
                setValue: function (key, value) {
                    $cookies.put(key, JSON.stringify(value));

                    return value;
                }
            };

        }


        return {
            getValue: function (key) {
                return JSON.parse(localStorage.getItem(key));
            },
            setValue: function (key, value) {
                localStorage.setItem(key, JSON.stringify(value));

                return value;
            }
        };


    }]);


});