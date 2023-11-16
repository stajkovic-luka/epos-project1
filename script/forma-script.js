function validacijaImena(ime) {
    var regex = /^[a-zA-Z ]{3,40}$/;
    return regex.test(ime);
}

function validacijaAdrese(adresa) {
    // Dozvoljava slova, brojeve i razmake
    var regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(adresa);
}

function validacijaTelefona(broj) {
    // Dozvoljava samo brojeve, 9 do 10 cifara
    var regex = /^\d{9,10}$/;
    return regex.test(broj);
}

function validacijaForme() {
    var ime = document.getElementById('ime').value;
    var adresa = document.getElementById('adresa').value;
    var broj = document.getElementById('telefon').value;
    var grad = document.querySelector('select').value;
    var problem = document.getElementById('problem').value;

    if (!validacijaImena(ime)) {
        alert("Unesite ispravno ime (3-20 slova).");
        return false;
    }

    if (!validacijaAdrese(adresa)) {
        alert("Unesite ispravnu adresu (slova, brojevi i razmaci).");
        return false;
    }

    if (!validacijaTelefona(broj)) {
        alert("Unesite ispravan broj telefona (9-10 brojeva).");
        return false;
    }

    if (grad === "") {
        alert("Izaberite opštinu.");
        return false;
    }

    if (problem.trim() === "") {
        alert("Unesite opis problema.");
        return false;
    }

    return true;
}

function prikazi_confirm(event) {
    event.preventDefault();

    if (validacijaForme()) {
        var ime = document.getElementById('ime').value;
        var adresa = document.getElementById('adresa').value;
        var broj = document.getElementById('telefon').value;
        var grad = document.getElementById('grad').value;
        var problem = document.getElementById('problem').value;
        var poruka = confirm("Vaše ime: " + ime + "\n\nBG opština u kojoj živite: " + grad + "\n\nAdresa: " + adresa + "\n\nBroj telefona: " + broj + "\n\nVaš problem je: " + problem + "\n\nPre potvrde proverite da li su vaše informacije tačno unete.")
        
        if (poruka == true) {
            alert("Uspešno ste poslali prijavu!");
            document.getElementById('forma').reset();
        } else {
            alert("Ispravite grešku!");
        }
    }
}

document.getElementById('dugme').addEventListener('click', prikazi_confirm);
