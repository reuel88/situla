/**
 * Created by reuelteodoro on 25/08/2016.
 */


define([], function () {

    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    function replaceAll(find, replace, str) {
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }

    /**
     * self excuting function
     * @type {{browser, version}}
     */

    navigator.sayswho = (function () {
        var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];

        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];

        var joint = M.join(' ');

        return {
            browser : M[0],
            version: replaceAll('.', '', joint.toLowerCase().replace(' ', ''))
        };

    })();


    return navigator.sayswho;


});