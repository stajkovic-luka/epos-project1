// pop up window
$(document).ready(function () {

    var unetoIme = $("#ime");
    var unetaAdresa = $("#adresa");
    var unetiBrTeleona = $("#telefon");
    var unetiProblem = $("#problem");

    function getOption() {
        izabraniElement = $("#grad-izbor-id");
        output = izabraniElement.find(":selected").text();
        return output;
    }

    $("#forma").submit(function (event) {
        event.preventDefault();
        var potvrda = confirm("Forma je uspešno popunjena. Da li želite da potvrdite slanje?");
        if (potvrda) {
            confirm("Uneti podaci su: " + unetoIme.val() + "\n" + unetaAdresa.val() + "\n" + unetiBrTeleona.val() + "\n" + getOption() + "\n" + unetiProblem.val());
            $("#forma").reset();
        } else {
            alert("Forma nije poslata!");
        }
    });
});
