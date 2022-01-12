const Contact = {
    async render() {
        return `
        <section id="contactUs" class="mb-5 pt-3">
                <div class="container shadow">
                    <div class="row pt-5 px-5">
                        <div class="col-12 text-center">
                            <h2>Contact Us</h2>
                            <p>for more information and details about our services.</p>
                            <hr>
                        </div>
                    </div>
                    <div class="row px-5 pb-5 text-center">
                        <h3>PT IDE SOLID INDONESIA</h3>
                        <P>My Republic Plaza, Wing A, Zona 6<br>Green Office Park.<br>Jl. BSD Grand Boulevard, BSD City<br>Desa Sampora, Kec Cisauk<br>Tangerang, Banten, 15345</P>
                        <a style="text-decoration: underline;" href="tel:+622129490578">Tel: +62-21-2949-0578</a>
                        <a style="text-decoration: underline;" href="mailto:contact@ideatax.id">Email: contact@ideatax.id</a>
                    </div>
                </div>
            </section>
        `;
    },
};

export default Contact;