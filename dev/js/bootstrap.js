/**
 * Created by reuelteodoro on 13/08/2016.
 */

define(['angular', 'app'], function(angular){

    /**
     * Makes the document a angular app - lol
     */
    angular.element(document).ready(function () {
       angular.bootstrap(document, ['app']);
    });

});