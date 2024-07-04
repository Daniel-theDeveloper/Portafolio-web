const nav = document.querySelector(".nav");
const openmenubtn = document.querySelector(".open-menu");
const closemenubtn = document.querySelector(".close-menu");

function toggleMenu() {
    nav.classList.toggle("ulOpened");
}

openmenubtn.addEventListener("click", toggleMenu);
closemenubtn.addEventListener("click", toggleMenu);