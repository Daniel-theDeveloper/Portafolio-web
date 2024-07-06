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

const flutter = document.querySelector(".flutter");
const ionic = document.querySelector(".ionic");
const reactN = document.querySelector(".reactn");
const android = document.querySelector(".android");

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

function displayFlutter() {
    document.getElementById("display2").innerHTML = "flutter";
}
function displayIonic() {
    document.getElementById("display2").innerHTML = "ionic - angular";
}
function displayReactN() {
    document.getElementById("display2").innerHTML = "react native";
}
function displayAndroid() {
    document.getElementById("display2").innerHTML = "android studio";
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

flutter.addEventListener("mouseover", displayFlutter);
ionic.addEventListener("mouseover", displayIonic);
reactN.addEventListener("mouseover", displayReactN);
android.addEventListener("mouseover", displayAndroid);