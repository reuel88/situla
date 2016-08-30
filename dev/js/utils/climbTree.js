/**
 * Created by reuelteodoro on 25/08/2016.
 */


define([], function () {

    /**
     * This Fixes an angular error where ngModel datefmt is not equal date
     *
     * @param tree
     * @param rtnAsAngular
     *
     * @returns {*}
     */
    var climbTree = function (tree, rtnAsAngular) {
        var output;

        rtnAsAngular = typeof rtnAsAngular !== 'undefined' ? rtnAsAngular : true;

        if (tree && tree.constructor === Array) { // Check if array
            output = [];
            /**
             * loops through array
             */
            for (var i = 0, v = tree; i < v.length; i++) {
                if ((tree[i] && tree[i].constructor !== Array ) && (typeof tree[i] !== 'object')) { // if not array or object return
                    output[i] = tree[i];
                } else {
                    output[i] = climbTree(tree[i]);
                }
            }
        } else if (typeof tree === 'object') { // Check if object
            output = {};

            /**
             * loops trough object
             */
            for (var key in tree) {
                if (tree.hasOwnProperty(key)) {
                    if ((tree[key] && tree[key].constructor !== Array ) && (typeof tree[key] !== 'object')) {

                        /**
                         * Check if is date
                         */
                        if ((Date.parse(tree[key]) >= 0)) {
                            tree[key] = new Date(tree[key]);
                        }
                        output[key] = tree[key];
                    } else {
                        output[key] = climbTree(tree[key]);
                    }
                }
            }
        }

        /**
         * Uses angular to set date rather object
         *
         * It's a bit fucked up but angular got some issues
         */
        if (rtnAsAngular)
            return tree;
        else
            return output;
    };


    return climbTree;
});