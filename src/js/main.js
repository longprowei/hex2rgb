(function(){
    $(document).ready(function() {
        $('.hex-color').on('input', function() {
            if (matchHex($(this).val())) {
                var rgbStr = hexToRgb(processHex(this.value));
                this.val(rgbStr);
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
                return null;
            }

            return;

            if (str.length === 7 && str.at(0) === '#') {
            } else if (str.length === 6) {
            } else if (str.length === 3) {
            } else {
                return null;
            }
        }

        function matchRgb(str) {
            console.log(str);
            str = str.trim();
        }

        function processHex(str) {
        }

        function processRgb(str) {
        }

        function hexToRgb(str) {
        }

        function rgbToHex(str) {
        }
        
    });
})();
