import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 px-4 bg-gray-50 max-w-3xl mx-auto"
            aria-labelledby="contact-heading"
        >
            <h2
                id="contact-heading"
                className="text-3xl font-bold text-center mb-8 text-gray-800"
            >
                Contact Me
            </h2>

            <address
                role="contentinfo"
                className="not-italic text-center space-y-4 text-gray-700"
            >
                <p>
                    <span aria-hidden="true">📞</span> Phone:{" "}
                    <a
                        href="tel:+919109001109"
                        aria-label="Call Deepak Kushwah phone number"
                        className="text-blue-600 hover:underline"
                    >
                        +91-9109001109
                    </a>
                </p>
                <p>
                    <span aria-hidden="true">📧</span> Email:{" "}
                    <a
                        href="mailto:deepakkushwah475110@gmail.com"
                        aria-label="Send email to Deepak Kushwah"
                        className="text-blue-600 hover:underline"
                    >
                        deepakkushwah475110@gmail.com
                    </a>
                </p>
                <p>
                    <span aria-hidden="true">🔗</span>{" "}
                    <a
                        href="https://linkedin.com/in/deepakkhiraofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Deepak Kushwah LinkedIn profile"
                        className="text-blue-600 hover:underline"
                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    <span aria-hidden="true">🐱</span>{" "}
                    <a
                        href="https://github.com/deepakkhiraofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Deepak Kushwah GitHub profile"
                        className="text-blue-600 hover:underline"
                    >
                        GitHub
                    </a>
                </p>
            </address>
        </section>
    );
};

export default Contact;
