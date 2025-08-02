import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-16 px-4 bg-gray-50 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Contact Me
            </h2>

            <address className="not-italic text-center space-y-4 text-gray-700">
                <p>
                    📞 Phone:{" "}
                    <a href="tel:+919109001109" className="text-blue-600 hover:underline">
                        +91-9109001109
                    </a>
                </p>
                <p>
                    📧 Email:{" "}
                    <a
                        href="mailto:deepakkushwah475110@gmail.com"
                        className="text-blue-600 hover:underline"
                    >
                        deepakkushwah475110@gmail.com
                    </a>
                </p>
                <p>
                    🔗{" "}
                    <a
                        href="https://linkedin.com/in/deepakkhiraofficail"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    🐱{" "}
                    <a
                        href="https://github.com/deepakkhiraofficail"
                        target="_blank"
                        rel="noopener noreferrer"
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
