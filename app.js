const nav = document.querySelector(".nav");
const openmenubtn = document.querySelector(".open-menu");
const closemenubtn = document.querySelector(".close-menu");

const javascript = document.querySelector(".javascript");
const typescript = document.querySelector(".typescript");
const java = document.querySelector(".java");
const dart = document.querySelector(".dart");
const csharp = document.querySelector(".csharp");
const php = document.querySelector(".php");
const html = document.querySelector(".html");
const css = document.querySelector(".css");

function toggleMenu() {
    nav.classList.toggle("ulOpened");
}

function displayJavascript() {
    document.getElementById("display").innerHTML = "Javascript";
}
function displayTypescript() {
    document.getElementById("display").innerHTML = "Typescript";
}
function displayJava() {
    document.getElementById("display").innerHTML = "java";
}
function displayDart() {
    document.getElementById("display").innerHTML = "dart";
}
function displayCsharp() {
    document.getElementById("display").innerHTML = "c#";
}
function displayPhp() {
    document.getElementById("display").innerHTML = "php";
}
function displayHtml() {
    document.getElementById("display").innerHTML = "html";
}
function displayCss() {
    document.getElementById("display").innerHTML = "css";
}

openmenubtn.addEventListener("click", toggleMenu);
closemenubtn.addEventListener("click", toggleMenu);

javascript.addEventListener("mouseover", displayJavascript);
typescript.addEventListener("mouseover", displayTypescript);
java.addEventListener("mouseover", displayJava);
dart.addEventListener("mouseover", displayDart);
csharp.addEventListener("mouseover", displayCsharp);
php.addEventListener("mouseover", displayPhp);
html.addEventListener("mouseover", displayHtml);
css.addEventListener("mouseover", displayCss);