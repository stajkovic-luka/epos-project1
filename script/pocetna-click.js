$(document).ready(function () {
    // prati stanje pozadine
    let isBlackBackground = false;

    $(".logo a").click(function (event) {
        event.preventDefault();

        // zamena pozadine sa sarom i obicne crne
        if (isBlackBackground) {
            $("body").css({
                "background-color": "black",
                "background-image": "none", // Reset background image
            });
        } else {
            // vracanje na stara podesavanja
            $("body").css({
                "background-color": "transparent", // Reset background color
                "background-image": "url('../img/pattern/ooo.png')",
                // "background-size": "contain",
                "background-repeat": "repeat",
                "background-position": "center center",
                "background-attachment": "fixed",
            });
        }

        // azuriranje klikom dugmeta
        isBlackBackground = !isBlackBackground;
    });
});
