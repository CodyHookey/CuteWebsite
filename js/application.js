$(document).ready(function() {
    $('.btn-no').on('click', function() {
        // Get container dimensions
        var containerWidth = $('.container').width();
        var containerHeight = $('.container').height();

        // Generate random positions within container boundaries
        var randomX = Math.random() * (containerWidth - $(this).outerWidth());
        var randomY = Math.random() * (containerHeight - $(this).outerHeight());

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
        
        $("#audio")[0].play();
    });
});