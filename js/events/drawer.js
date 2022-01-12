const events = () => {
    document.querySelector("#navbarNav").classList.toggle("slide");
    document.querySelector("body").classList.toggle("disable-scroll");
    document.querySelector(".inner-line").classList.toggle("open");
};

document.querySelector("#hamburgerButton").addEventListener("click", events);
document.querySelector("main").addEventListener("click", () => {
    document.querySelector("#navbarNav").classList.contains("slide") ?
        events() :
        "";
});

export default events;