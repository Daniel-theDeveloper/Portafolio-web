const nav = document.querySelector(".nav");
const openmenubtn = document.querySelector(".open-menu");
const closemenubtn = document.querySelector(".close-menu");

const phone = document.querySelector(".phone");
const moreInfo = document.querySelector(".more");

function toggleMenu() {
    nav.classList.toggle("ulOpened");
}

function togglePhone() {
    phone.classList.toggle("phone-straightening");
}

openmenubtn.addEventListener("click", toggleMenu);
closemenubtn.addEventListener("click", toggleMenu);

moreInfo.addEventListener("click", togglePhone);