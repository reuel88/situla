/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'services/_module'], function (angular, service) {


    service.service('loopServ', ['$rootScope', function ($rootScope) {

        var dictionary = {};

        var objects = [];

        var obj = {};

        /**
         * Varaibles used to prevent to many multiple calls
         */
        var runTimer; // Timer to help prevent calling run too many times
        var runDelay = 1000; // waits 1 second (1000ms) before call run command

        function run() {
            var model = {};

            /**
             * Does pre loop setup
             */
            for (var a = 0, b = objects; a < b.length; a++) {
                if (typeof objects[a].preLoop === 'function'){
                    model = objects[a].preLoop(objects[a].model);

                    objects[a].model = dictionary[objects[a]._key].model = (typeof model !== 'undefined') ? model : objects[a].model;
                }
            }

            /**
             * the actual loop
             */
            do {
                // count how many object have stopped looping
                var count = 0;

                for (var c = 0, d = objects; c < d.length; c++) {

                    var stop = objects[c].stop(objects[c].model);

                    if (!(typeof stop !== 'undefined' ? stop : true)) { // Test if the loop for this object should stop
                        model = objects[c].loop(objects[c].model);

                        objects[c].model = dictionary[objects[c]._key].model = (typeof model !== 'undefined') ? model : objects[c].model;
                    } else { // if stopped add to count

                        count++;
                    }
                }

                /**
                 * If the count is equal to the length of the objects
                 *
                 * that means that all the loops has been stopped/completed
                 */
            } while (count < objects.length);

            /**
             * Does post loop setup
             */
            for (var e = 0, f = objects; e < f.length; e++) {



                if (typeof objects[e].postLoop === 'function'){
                    model = objects[e].postLoop(objects[e].model);

                    objects[e].model = dictionary[objects[e]._key].model =  (typeof model !== 'undefined') ? model : objects[e].model;
                }
            }

            return obj;
        }

        obj = {
            _run: true,
            set: function (key, obj) {
                this._run = true;

                if (dictionary[key]) { // update
                    obj._key = key;

                    dictionary[key] = obj;

                    var index = objects.map(function (x) {
                        return x._key;
                    }).indexOf(key);

                    objects[index] = obj;
                } else { // create
                    obj._key = key;

                    dictionary[key] = obj;

                    objects.push(obj);
                }

                return this;
            },
            get: function (key) {
                var _this = this;
                if (this._run) {
                    clearTimeout(runTimer);
                    runTimer = setTimeout(function () {
                        run();
                        _this._run = false;
                    }, runDelay);
                }

                if (dictionary[key])
                    return dictionary[key];

                return this;
            }
        };

        return obj;

    }]);

});