$(document).ready(function() {
    $(".hex-color").change(function() {
        matchHex(this.value);
    });

    $('.rgb-color').keypress(function(e) {
        matchRgb(this.value);
    });

    function matchHex(str) {
        str = trim(str);
    }

    function matchRgb(str) {
    }
});
