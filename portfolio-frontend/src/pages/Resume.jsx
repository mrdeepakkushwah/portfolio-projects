import resumePDF from '../assets/Deepak_Kushwah_ Resume.pdf';

export default function Resume() {
    return (
        <main className="resume-page container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Resume</h1>

            <div className="resume-container bg-white shadow-lg rounded-lg overflow-hidden">
                {/* PDF Viewer with fallback options */}
                <div className="pdf-viewer h-[800px]">
                    <object
                        data={resumePDF + "#toolbar=0&navpanes=0"}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        aria-label="Resume PDF Viewer"
                        className="border-b border-gray-200"
                    >
                        <div className="p-4 text-center">
                            <p className="mb-4">Your browser doesn't support PDF embedding.</p>
                            <a
                                href={resumePDF}
                                download="Deepak_Kushwah_Resume.pdf"
                                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-block transition-colors"
                            >
                                Download Resume Instead
                            </a>
                        </div>
                    </object>
                </div>

                {/* Download Button */}
                <div className="p-4 text-center bg-gray-50">
                    <a
                        href={resumePDF}
                        download="Deepak_Kushwah_Resume.pdf"
                        className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md inline-block transition-colors"
                    >
                        Download PDF Version
                    </a>
                </div>
            </div>
        </main>
    );
}