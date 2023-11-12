// davanje funkcionalnosti burger meniju
const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-linkovi');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');
    })
}

navSlider();
// pop up window
document.getElementById("forma").addEventListener("submit", function(event) {
    event.preventDefault();
    var potvrda = confirm("Forma je uspešno popunjena. Da li želite da potvrdite slanje?");
    if (potvrda) {
        alert("Hvala Vam!");
        document.getElementById("forma").reset();
    } else {
        alert("Forma nije poslata!");
    }
});

const toTop = document.querySelector(".to-top");


window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }

})

// klik na uslugu -> majstori te usluge

function preusmeriNaVodoinstalatere() {
    window.location.href = "vodoinstalateri.html";
}

function preusmeriNaElektricare() {
    window.location.href = "elektricari.html";
}

function preusmeriNaMolere() {
    window.location.href = "moleri.html";
}

//poveca/smanji sliku usluga kad se hoveruje/ne hoveruje misem

function uvecajSliku1(element) {
    element.style.width = "850px";
    element.style.height = "350px";
}

function smanjiSliku1(element) {
    element.style.width = "800px";
    element.style.height = "300px";
}

function uvecajSliku2(element) {
    element.style.width = "850px";
    element.style.height = "350px";
}

function smanjiSliku2(element) {
    element.style.width = "800px";
    element.style.height = "300px";
}

function uvecajSliku3(element) {
    element.style.width = "850px";
    element.style.height = "350px";
}

function smanjiSliku3(element) {
    element.style.width = "800px";
    element.style.height = "300px";
}

//hover preko majstora prikaze prosecnu ocenu

function prikaziInformacije(element, informacije) {
    var tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerHTML = informacije;
    element.parentNode.appendChild(tooltip);
}

function smanjiElement(element) {
    var tooltip = element.parentNode.querySelector(".tooltip");
    if (tooltip) {
        tooltip.remove();
    }
}


