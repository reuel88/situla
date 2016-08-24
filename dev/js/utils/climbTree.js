/**
 * Created by reuelteodoro on 25/08/2016.
 */


define([], function () {

    /**
     * This Fixes an angular error where ngModel datefmt is not equal date
     *
     * @param tree
     * @returns {*}
     */
     var climbTree = function (tree) {
        var output;


        if (tree && tree.constructor === Array) {

            output = [];
            for (var i = 0, v = tree; i < v.length; i++) {

                if ( (tree[i] && tree[i].constructor !== Array ) && (typeof tree[i] !== 'object')) {
                    output[i] = tree[i];
                } else {
                    output[i] = climbTree(tree[i]);
                }
            }
        } else if (typeof tree === 'object') {
            output = {};
            for (var key in tree) {
                if (tree.hasOwnProperty(key)) {
                    if ( (tree[key] && tree[key].constructor !== Array ) && (typeof tree[key] !== 'object')) {
                        if(key == 'date'){
                            tree[key] = new Date (tree[key]);
                        }
                        output[key] = tree[key];
                    } else {
                        output[key] = climbTree(tree[key]);
                    }
                }
            }
        }

        return tree;
    };


    return climbTree;
});