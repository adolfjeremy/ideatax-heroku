const About = {
    async render() {
        return `
        <section id="aboutUsHeader" class="p-60">
            <div class="container">
                <div class="row d-flex flex-column-reverse flex-md-row text-center text-md-start">
                    <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                        <img src="images/about-us-header.jpg" class="w-100 skeleton custom-border-radius shadow" alt="">
                    </div>
                    <div class="col-12 col-md-5 d-flex flex-column justify-content-center mb-4 mb-lg-0">
                        <h2>We Are The Best Tax Consultant</h2>
                        <p>With the rapid development of business, we understand your need to overcome the difficulties and complexity of the challenges and problems that you face in business, especially related to taxation.</p>
                        <p>Idea Tax comes with the vision of becoming a leading tax consulting company, by providing high-quality services and upholding the trust you have given us.</p>
                        <div>
                            <a href="#/contact" class="btn btn-warning btn-lg px-4 me-md-2 shadow">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="whyWorkWithUs" class="p-60">
            <div class="container">
                <div class="row d-flex flex-column-reverse flex-md-row text-center text-md-start">
                    <div class="col-12 col-md-5 d-flex flex-column justify-content-center">
                        <h2>Why work with us?</h2>
                        <p>At Idea, we build a community that is always focused on solving comprehensive problems. We are supported by professionals who are experts in their fields, to help you provide the completion of your daily activities and provide
                            you with a reliable, solution and comprehensive service.</p>
                    </div>
                    <div class="col-12 col-md-7 d-flex flex-column justify-content-center mb-4 mb-lg-0">
                        <img src="images/why-work-with-us-image.jpg" class="w-100 skeleton custom-border-radius-2 shadow" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section id="coreValue" class="p-60">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2>Our Core Value</h2>
                        <p>We always aspire to provide the best service that is always focused on the best interests of the client. We also always prioritize the development of our talents so that they can continue to be relevant in existing changes to improve
                            services to clients.</p>
                        <p>Our core values ​​that underlie the services we provide are :</p>
                    </div>
                </div>
                <div class="row p-5">
                    <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center p-3 shadow-sm">
                        <img src="images/trustworthy.png" class="illustration" alt="Trustworthy Illustration">
                        <h3>Trustworthy</h3>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center p-3 shadow-sm">
                        <img src="images/professional.png" class="illustration" alt="Professionalism Illustration">
                        <h3>Professionalism</h3>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center p-3 shadow-sm">
                        <img src="images/creative.png" class="illustration" alt="Creativity Illustration">
                        <h3>Creativity</h3>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center p-3 shadow-sm">
                        <img src="images/prudent.png" class="illustration" alt="Prudent Illustration">
                        <h3>Prudent</h3>
                    </div>
                </div>
            </div>
        </section>
        `;
    },
};

export default About;
