import events from "./drawer.js";

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function() {
        document.querySelector("#navbarNav").classList.contains("slide") ?
            events() :
            "";
    });
});