// pop up window
function prikazi_confirm(){
    var ime=document.getElementById('ime').value;
    var adresa=document.getElementById('adresa').value;
    var broj=document.getElementById('telefon').value;
    var poruka=confirm("Vaše ime i prezime: "+ime+"\n\nAdresa: "+adresa+"\n\nBroj telefona: "+broj+"\n\nPre potvrde proverite da li su vaše informacije tačno unete.")
    if(poruka==true){
        alert("Uspešno ste poslali prijavu!");
        document.getElementById('forma').reset();
    } else {
        alert("Ispravite grešku!");
    }
}
document.getElementById('dugme').addEventListener('click', prikazi_confirm);