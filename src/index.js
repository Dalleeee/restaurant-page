import { mainPage } from "./main-page";
import { menu } from "./menu";
import { contactPage } from "./contact";
import './style.css';

const content = document.getElementById('content');
const homeButton = document.getElementById('home');
homeButton.addEventListener("click", function() {
    document.body.setAttribute("style", "background-image: none");
    content.innerHTML = "";
    mainPage();
})

const menuButton = document.getElementById('menu');
menuButton.addEventListener("click", function() {
    content.innerHTML = "";
    menu();
})

const contactButton = document.getElementById('contact');
contactButton.addEventListener("click", function() {
    content.innerHTML = "";
    contactPage();
})

mainPage();