$(function () {
    // tab 切換的
    // var video, intro;

    var video = $('.ul').children('.videos');
    var intro = $('.ul').children('.intro');
    //第一個影片要出現
    var _fs = $('.container').find('.tabContainer:first').css("display", "block");


    // video 的按鈕 底下內容要出現
    video.on("click", function (e) {
        e.preventDefault();
        var current_fs = $(this).parent().parent().parent();
        var next_fs = $(this).parent().parent().parent();
        current_fs.find('.tabContainer:first').css("display", "block");
        next_fs.find('.tabContainer:last').css("display", "none");

    });
    // Introduction 的按鈕 底下內容要出現
    intro.on("click", function (e) {
        e.preventDefault();
        var current_fs = $(this).parent().parent().parent();
        var next_fs = $(this).parent().parent().parent();
        current_fs.find('.tabContainer:first').css("display", "none");
        next_fs.find('.tabContainer:last').css("display", "block");
    });

});