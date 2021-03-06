/**
 * Created by reuelteodoro on 15/08/2016.
 * 
 * Based on this stackOverflow Answer
 * http://stackoverflow.com/questions/12570834/how-to-preview-image-get-file-size-image-height-and-width-before-upload#answer-12570870
 */


define(['angular', 'directives/_module'], function (angular, directive) {

    directive.directive('fileUpload', ['$parse', function ($parse) {

        return {
            link: function (scope, elem, attrs) {


                window.URL = window.URL || window.webkitURL;

                var useBlob = false && window.URL; // `true` to use Blob instead of Data-URL

                function readImage(file) {
                    var reader = new FileReader();


                    reader.addEventListener("load", function () {
                        var image = new Image();

                        image.addEventListener("load", function () {
                            var model = $parse(attrs.fileUpload);

                            model.assign(scope, this.src);

                            scope.safeApply(function () {});
                        });

                        image.src = useBlob ? window.URL.createObjectURL(file) : reader.result; // Activates the load event
                        if (useBlob) window.URL.revokeObjectURL(file); // Free memory

                    });

                    reader.readAsDataURL(file); // activates the load event
                }


                elem.on("change", function () {
                    var files = this.files;
                    var errors = "";
                    if (!files) {
                        errors += "File upload not supported by your browser.";
                    }

                    if (files && files[0]) {
                        for (var i = 0; i < files.length; i++) {
                            var file = files[i];
                            if ((/\.(png|jpeg|jpg)$/i).test(file.name)) {
                                readImage(file);
                            } else {
                                errors += file.name + " Unsupported Image extension\n";
                            }
                        }
                    }

                    if (errors) {
                        alert(errors);
                    }
                });
            }
        }

    }]);


});
