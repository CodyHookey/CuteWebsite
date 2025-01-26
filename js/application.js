$(document).ready(function() {
    var noCounter = 0;

    $('.btn-no').on('click', function() {
        noCounter ++;

        switch (noCounter) {
            case 1:
                $(".btn-no").text("Really 🥺");
                break;
            case 2:
                $(".btn-no").text("Don't press 😡");
                break;
            case 3:
                $(".btn-no").addClass("hide");
                break;
        }

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