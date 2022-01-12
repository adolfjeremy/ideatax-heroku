import About from "../view/pages/about.js";
import Home from "../view/pages/home.js";
import OurServices from "../view/pages/our-services.js";
import Contact from "../view/pages/contact.js";

const routes = {
    "/": Home,
    "/home": Home,
    "/about": About,
    "/our-services": OurServices,
    "/contact": Contact,
};

export default routes;