/*!
 * Author: Chenglong Wei
 */

'use strict';

(function(){
    $(document).ready(function() {
        $('.hex-color').on('input', function() {
            var value = $(this).val();
            value = value.trim();
            value = value.toLowerCase();
            if (matchHex(value)) {
                var rgbStr = hexToRgb(value);
                $('.rgb-color').val(rgbStr);
            }
        });

        $('.rgb-color').on('input', function() {
            var value = $(this).val();
            value = value.trim();
            value = value.toLowerCase();
            if (matchRgb($(this).val())) {
                console.log('success');
                return;
                var hexStr = rgbToHex(value);
                this.val(hexStr);
            }
        });

        function matchHex(str) {
            var re = /^#?[0-9a-f]{3}$|^#?[0-9a-f]{6}$/;
            if (str.match(re)) {
                return true;
            }

            return false;
        }

        function matchRgb(str) {
            var re = /^rgb\(\s*(\d),\s*(\d), \s*(\d)\)$/;
            if (str.match(re) && 
                Number.parseInt(re.$1) < 256 && Number.parseInt(re.$1) >= 0 &&
                Number.parseInt(re.$2) < 256 && Number.parseInt(re.$2) >= 0 &&
                Number.parseInt(re.$3) < 256 && Number.parseInt(re.$3) >= 0) {
                return true;
            }

            return false;
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
            var re = /^rgb\(\s*([0-2][0-5]\d),\s*([0-2][0-5]\d), \s*([0-2][0-5]\d)\)$/;
            str.match(re);
            return '#' + Number.parseInt(Number.parseInt(re.$1 / 16), 16) + Number.parseInt(re.$1 % 16, 16)
                + Number.parseInt(Number.parseInt(re.$2 / 16), 16) + Number.parseInt(re.$2 % 16, 16)
                + Number.parseInt(Number.parseInt(re.$2 / 16), 16) + Number.parseInt(re.$2 % 16, 16)
        }
    });
})();
