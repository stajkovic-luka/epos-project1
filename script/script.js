// davanje funkcionalnosti burger meniju
const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-linkovi');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');
    })
}

navSlider();

