import { useEffect, useState } from "react";

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");

        if (!consent) {
            setVisible(true);

            const timeout = setTimeout(() => {
                handleReject(); // default to reject if no action
            }, 15000);

            return () => clearTimeout(timeout);
        } else if (consent === "accepted") {
            loadGoogleAnalytics();
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        fadeAndHide();
        loadGoogleAnalytics();
    };

    const handleReject = () => {
        localStorage.setItem("cookie_consent", "rejected");
        fadeAndHide();
    };

    const fadeAndHide = () => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 500); // match transition duration
    };

    const loadGoogleAnalytics = () => {
        if (!window.gtag) {
            const script = document.createElement("script");
            script.async = true;
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-TFG7RLW117"; // replace with your GA ID
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            window.gtag = gtag;
            gtag("js", new Date());
            gtag("config", "G-TFG7RLW117");
        }
    };

    if (!visible) return null;

    return (
        <div
            className={`fixed bottom-4 left-4 right-4 md:left-8 md:right-8 p-4 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"
                } bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-4`}
        >
            <div className="flex-1 text-sm">
                We use cookies to improve your experience. By using our site, you agree to our cookie policy.
            </div>
            <div className="flex gap-2">
                <button
                    onClick={handleAccept}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm"
                >
                    Accept
                </button>
                <button
                    onClick={handleReject}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm"
                >
                    Reject
                </button>
            </div>
            <button
                onClick={fadeAndHide}
                aria-label="Dismiss cookie banner"
                className="absolute top-2 right-2 text-white hover:text-gray-300 text-lg"
            >
                &times;
            </button>
        </div>
    );
};

export default CookieBanner;
