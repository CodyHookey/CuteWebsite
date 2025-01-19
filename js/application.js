var container = document.querySelector(".container");

var imageOne = document.querySelector(".image-1");
var imageTwo = document.querySelector(".image-2");

var btnYes = document.querySelector(".btn-yes");
var btnNo = document.querySelector(".btn-no");

$(document).ready(function() {
    $('.btn-no').on('click', function() {
        // Get container dimensions
        const containerWidth = $('.container').width();
        const containerHeight = $('.container').height();

        // Generate random positions within container boundaries
        const randomX = Math.random() * (containerWidth - $(this).outerWidth());
        const randomY = Math.random() * (containerHeight - $(this).outerHeight());

        // Move button to random position
        $(".btn-no").css({
            left: randomX + 'px',
            top: randomY + 'px'
        });
    });

    $(".btn-yes").on("click", function() {
        $(".image-1").toggleClass("hide");
        $(".image-2").toggleClass("hide");
        $(".header-2").toggleClass("hide");
    });
});