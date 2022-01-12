import "./events/drawer.js";
import App from "./view/app.js";
import "./events/onMobileNav.js";

const app = new App({
    content: document.querySelector("#mainContent"),
    currentActiveNavLink: document.querySelector(".active"),
    homePage: document.querySelectorAll(".nav-link")[0],
    aboutPage: document.querySelectorAll(".nav-link")[1],
    servicesPage: document.querySelectorAll(".nav-link")[2],
    contactPage: document.querySelectorAll(".nav-link")[4],
});

window.addEventListener("hashchange", async() => {
    document.querySelector("#mainContent").scrollIntoView({ behavior: "smooth" });
    await app.renderPage();
});

window.addEventListener("DOMContentLoaded", () => {
    app.renderPage();
});