import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaServer, FaDatabase, FaMobileAlt, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <picture>
              <source srcSet="/deepak.webp" type="image/webp/jpg" />
              <img
                src="/deepak.jpg"
                width="371"
                height="445"
                alt="Deepak Kushwah"
                className="rounded-full shadow-lg border-2 border-gray-200"
                loading="lazy"
                fetchPriority="high"
              />
            </picture>



          </div>

          <p className="text-blue-600 font-medium mb-3">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Deepak Kushwah
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Full Stack Developer <span className="text-blue-600">|</span> MERN Specialist
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            I build <span className="font-medium text-gray-800">high-performance web applications</span> that solve real business problems.
            With expertise in both frontend and backend development, I create seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work <FaArrowRight />
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-lg shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-blue-600 mb-3 flex justify-center">
              <FaCode className="text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
            <p className="text-gray-600 text-sm">React, JavaScript, Tailwind CSS</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-green-600 mb-3 flex justify-center">
              <FaServer className="text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
            <p className="text-gray-600 text-sm">Node.js, Express, Java</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-purple-600 mb-3 flex justify-center">
              <FaDatabase className="text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Database</h3>
            <p className="text-gray-600 text-sm">MongoDB, SQL</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-orange-600 mb-3 flex justify-center">
              <FaMobileAlt className="text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Responsive</h3>
            <p className="text-gray-600 text-sm">Mobile-First Design</p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Work With Me?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg">
              <div className="text-blue-600 text-4xl font-bold mb-3">100%</div>
              <h3 className="font-semibold text-lg mb-2">Problem Solver</h3>
              <p className="text-gray-600">
                I specialize in finding technical solutions to complex business challenges.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <div className="text-blue-600 text-4xl font-bold mb-3">10+</div>
              <h3 className="font-semibold text-lg mb-2">Projects Built</h3>
              <p className="text-gray-600">
                Hands-on experience across various domains and technologies.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <div className="text-blue-600 text-4xl font-bold mb-3">24/7</div>
              <h3 className="font-semibold text-lg mb-2">Learning Mindset</h3>
              <p className="text-gray-600">
                Continuously updating skills with latest technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how I can contribute to your team or project.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
