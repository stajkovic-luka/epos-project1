//burger meni
const hamburger = document.querySelector(".burger");
const navMeni = document.querySelector(".nav-linkovi");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMeni.classList.toggle("active");

})

document.querySelectorAll(".nav-linkovi").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMeni.classList.remove("active");
}))


//scroll-to-top dugme u uglu stranice
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
   if(proveriVelicinuEkrana()){
    element.style.width = "850px";
    element.style.height = "350px";
   }
}

function smanjiSliku1(element) {
    if(proveriVelicinuEkrana()){
        element.style.width = "800px";
        element.style.height = "300px";
       }
}

function uvecajSliku2(element) {
    if(proveriVelicinuEkrana()){
        element.style.width = "850px";
        element.style.height = "350px";
       }
}

function smanjiSliku2(element) {
    if(proveriVelicinuEkrana()){
        element.style.width = "800px";
        element.style.height = "300px";
       }
}

function uvecajSliku3(element) {
    if(proveriVelicinuEkrana()){
        element.style.width = "850px";
        element.style.height = "350px";
       }
}

function smanjiSliku3(element) {
    if(proveriVelicinuEkrana()){
        element.style.width = "800px";
        element.style.height = "300px";
       }
}

function proveriVelicinuEkrana() {
    return window.innerWidth > 768;
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


