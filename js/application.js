var yesCounter = 0;

var yesButton = function () {
    $(".btn-yes").on("click", function() {
        $(this).text("Celebrate");

        $(".image-1, .btn-no").addClass("hide");
        $(".image-2").removeClass("hide");
        $(".header").text("I will love you for the rest of my life ❤️");

        $("#audio")[0].play();
        $(".btn-pause").removeClass("hide");

        if (yesCounter < 1) {
            $(".modal").removeClass("hide");
            $(".btn-close").on("click", function () {
                $(".modal").addClass("hide");
            });
        }

        yesCounter++;
        
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
}



var pauseButton = function () {
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
}

var randomPosition = function () {
    // Get container dimensions
    var containerWidth = $('.container').width();
    var containerHeight = $('.container').height();

    // Generate random positions within container boundaries
    var randomX = Math.random() * (containerWidth - $(".btn-no").outerWidth());
    var randomY = Math.random() * (containerHeight - $(".btn-no").outerHeight());

    // Move button to random position
    $(".btn-no").css({
        left: randomX + 'px',
        top: randomY + 'px'
    });
}

var noButton = function () {
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
        randomPosition();
    });
}

$(document).ready(function() {
    yesButton();
    pauseButton();
    noButton();
});