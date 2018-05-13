'use strict';

(function(){
    $(document).ready(function() {
        $('.hex-color').on('input', function() {
            if (matchHex($(this).val())) {
                var rgbStr = hexToRgb($(this).val());
                $('.rgb-color').val(rgbStr);
            }
        });

        $('.rgb-color').on('input', function() {
            if (matchRgb($(this).val())) {
                var hexStr = rgbToHex(processRgb(this.value));
                this.val(hexStr);
            }
        });

        function matchHex(str) {
            str = str.trim();
            str = str.toLowerCase();
            var re = /^#?[0-9a-f]{3}$|^#?[0-9a-f]{6}$/;
            if (str.match(re) === null) {
                return false;
            }

            return true;
        }

        function matchRgb(str) {
            console.log(str);
            str = str.trim();
        }

        /* obj is a object that includes
         * r, g, b properties */
        function processRgb(obj) {
        }

        function hexToRgb(str) {
            if (str.charAt[0] === '#') {
                str = str.substr(1);
            }

            if (str.length === 6) {
                var r = Number.parseInt(str.substr(0, 2), 16),
                    g = Number.parseInt(str.substr(2, 2), 16),
                    b = Number.parseInt(str.substr(4, 2), 16);

                if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
                    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
                } else {
                    return "";
                }
            } else if (str.length === 3) {
                var r = Number.parseInt(str.substr(0, 1), 16),
                    g = Number.parseInt(str.substr(1, 1), 16),
                    b = Number.parseInt(str.substr(2, 1), 16);

                if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
                    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
                } else {
                    return "";
                }
            }
        }

        function rgbToHex(str) {
        }
        
    });
})();
