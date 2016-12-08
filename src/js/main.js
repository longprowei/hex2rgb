(function(){
    $(document).ready(function() {
        $(".hex-color").keypress(function() {
            if (matchHex($(this).val())) {
                var rgbStr = hexToRgb(processHex(this.value));
                this.val(rgbStr);
            }
        });

        $('.rgb-color').keypress(function(e) {
            if (matchRgb($(this).val())) {
                var hexStr = rgbToHex(processRgb(this.value));
                this.val(hexStr);
            }
        });

        function matchHex(str) {
            console.log(str);
            str = str.trim();
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
