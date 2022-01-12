const Home = {
    async render() {
        return `
        <section class="hero">
                <div class="overlay"></div>
                <div class="cta text-start">
                    <div class="container d-flex align-items-center">
                        <div class="row">
                            <h1 class="display-6 fw-bold mb-3">Dedicated<br>to presenting<br>your tax solution</h1>
                            <p>We provide you with a comprehensive perspective, prudent and creative services to solve your tax challenge.</p>
                            <div class="d-grid gap-3 d-md-flex justify-content-md-center justify-content-lg-start buttons">
                                <a href="#/contact" class="btn btn-warning btn-lg px-4 me-md-2">Contact Us</a>
                                <a href="#/our-services" class="btn btn-outline-light btn-lg px-4">Our Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="aboutUs" class="py-5 my-4">
                <div class="container">
                    <div class="row py-2">
                        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <img src="images/team-photo.jpg" class="w-100 custom-border-radius shadow-lg" alt="Ideatax team">
                        </div>
                        <div class="col-12 col-md-6 p-4 text-start d-flex flex-column justify-content-center">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="mb-3">About Idea<strong>tax</strong></h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p>We focus on helping your business grow and achieve its goals. Our day-to-day activities are focused on how we maintain strong relationships and maintain your trust, as well as provide thoughtful solutions to help manage
                                        your tax risks and meet beyond your expectations.</p>
                                    <hr>
                                    <div class="d-grid d-md-flex justify-content-lg-start buttons">
                                        <a href="#/about" class="btn btn-warning btn-md px-4 me-md-2">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ourServicesHome" class="p-5 my-4">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2>Services We Offer</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div href="#" class="service-item rounded-2 col-12 col-md-6 col-lg-3 p-3 mt-4 mt-md-4 d-flex flex-column align-items-center shadow-sm">
                            <img src="images/compliance.png" class="illustration mb-2" alt="Tax and Custom Compliances Illustration">
                            <h3>Tax and Custom Compliances</h3>
                        </div>
                        <div href="#" class="service-item rounded-2 col-12 col-md-6 col-lg-3 p-3 mt-4 mt-md-4 d-flex flex-column align-items-center shadow-sm">
                            <img src="images/accounting.png" class="illustration mb-2" alt="Accounting Services Illustration">
                            <h3>Accounting Services</h3>
                        </div>
                        <div href="#" class="service-item rounded-2 col-12 col-md-6 col-lg-3 p-3 mt-4 mt-md-4 d-flex flex-column align-items-center shadow-sm">
                            <img src="images/assistant.png" class="illustration mb-2" alt="Tax Supervision Assistances Illustration">
                            <h3>Tax Supervision Assistances</h3>
                        </div>
                        <a href="#/our-services" class="service-item rounded-2 col-12 col-md-6 col-lg-3 p-3 mt-4 mt-md-4 d-flex flex-column align-items-center shadow-sm">
                            <img src="images/more.png" alt="more services illustration">
                            <h3><strong>Other Services &#62;</strong></h3>
                        </a>
                    </div>
            </section>
        `;
    },
};

export default Home;