import routes from "../routes/route.js";
import UrlParser from "../routes/url-parser.js";

class App {
    constructor({ content,currentActiveNavLink,homePage,aboutPage,servicesPage,contactPage}) {
        this._content = content;
        this._currentActiveNavLink = currentActiveNavLink;
        this._homePage = homePage;
        this._aboutPage = aboutPage;
        this._servicesPage = servicesPage;
        this._contactPage = contactPage;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlAndCombine();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        url == "/home" || url == "/" ? this._homePage.classList.add("active") : this._homePage.classList.remove("active")
        url == "/about" ? this._aboutPage.classList.add("active") : this._aboutPage.classList.remove("active")
        url == "/our-services" ? this._servicesPage.classList.add("active") : this._servicesPage.classList.remove("active")
        url == "/contact" ? this._contactPage.classList.add("active") : this._contactPage.classList.remove("active")
    }
}

export default App;