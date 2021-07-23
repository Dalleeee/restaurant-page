import { mainPage } from "./main-page";
import { menu } from "./menu";
import { contactPage } from "./contact";
import './style.css';

const content = document.getElementById('content');
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.classList.add('button'));

const homeButton = document.getElementById('home');
homeButton.classList.add('button1');
homeButton.addEventListener("click", function() {
    content.innerHTML = "";
    mainPage();
})

const menuButton = document.getElementById('menu');
menuButton.classList.add('button2');
menuButton.addEventListener("click", function() {
    content.innerHTML = "";
    menu();
})

const contactButton = document.getElementById('contact');
contactButton.classList.add('button3');
contactButton.addEventListener("click", function() {
    content.innerHTML = "";
    contactPage();
})

mainPage();