/**
 * Created by reuelteodoro on 18/08/2016.
 */

define(
    [
        'services/_module',
        'utils/isEmpty',

        'services/validation/required.serv'
    ],
    function (service, isEmpty) {

        service.service('validation.serv', ['$rootScope', 'required.serv',  function ($rootScope, required) {

            var obj = {};

            obj.required = required;

            obj.execute = function (fields, model) {

                var output = {};

                for (var key in fields) {
                    if (fields.hasOwnProperty(key)) {

                        var errors = [];

                        for (var i = 0, k = fields[key]; i < k.length; i++) {

                            if (typeof obj[fields[key][i]] === 'function') {
                                var error = obj[fields[key][i]](model[key]);

                                if (error) {
                                    errors.push(error);
                                }
                            }
                        }

                        if (!isEmpty(errors)) {
                            output[key] = errors;
                        }else {
                            delete output[key];
                        }
                    }
                }

                return output

            };


            return obj;

        }]);

    }
);