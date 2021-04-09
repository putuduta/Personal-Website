$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#header');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".custom-navbar").css('background-color', '#19456b');
            } else {
                $('.custom-navbar').css('background-color', 'transparent');


            }
        });
    }
});