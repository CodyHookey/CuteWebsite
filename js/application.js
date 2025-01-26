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
        $(".image-1").addClass("hide");
        $(".image-2").removeClass("hide");
        $(".header-2").removeClass("hide");
        $(".btn-no").addClass("hide");

        $("#audio")[0].play();
        $(".btn-pause").removeClass("hide");

        $(".btn-pause").on("click", function () {
            var audio = $("#audio")[0];

            if (!audio.paused) {
                audio.pause();
                $(this).text("Play");
            } else {
                audio.play();
                $(this).text("Pause");
            }
        });

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});