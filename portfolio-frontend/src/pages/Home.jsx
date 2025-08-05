import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaArrowRight,
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// Memoized static component for performance
const SkillsPreview = memo(() => {
  const skillItems = [
    {
      icon: <FaCode className="text-3xl" aria-hidden="true" />,
      title: 'Frontend',
      description: 'React, JavaScript, Tailwind CSS',
      color: 'text-blue-600',
    },
    {
      icon: <FaServer className="text-3xl" aria-hidden="true" />,
      title: 'Backend',
      description: 'Node.js, Express, Java',
      color: 'text-green-600',
    },
    {
      icon: <FaDatabase className="text-3xl" aria-hidden="true" />,
      title: 'Database',
      description: 'MongoDB, SQL',
      color: 'text-purple-600',
    },
    {
      icon: <FaMobileAlt className="text-3xl" aria-hidden="true" />,
      title: 'Responsive',
      description: 'Mobile-First Design',
      color: 'text-orange-600',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10 px-4"
      role="list"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Preview of technical skills"
    >
      {skillItems.map(({ icon, title, description, color }) => (
        <motion.div
          key={title}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          variants={itemVariants}
          role="listitem"
          tabIndex={0}
          aria-label={`${title} skills`}
        >
          <div className={`mb-3 flex justify-center ${color}`}>{icon}</div>
          <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
});

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Deepak Kushwah | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Official portfolio of Deepak Kushwah – Full Stack Developer specializing in MERN stack, Node.js, React, MongoDB."
        />
      </Helmet>

      <main className="bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 md:py-32"
          aria-labelledby="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <picture>
                <source srcSet="/deepak.webp" type="image/webp" />
                <img
                  src="/deepak.jpg"
                  alt="Deepak Kushwah Full Stack Developer"
                  width={371}
                  height={445}
                  className="rounded-full shadow-lg border-2 border-gray-200"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>

            <p className="text-blue-600 font-medium mb-3">Hello, I'm</p>
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
              tabIndex={-1}
            >
              Deepak Kushwah
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Full Stack Developer <span className="text-blue-600">|</span> MERN Specialist
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              I build{' '}
              <span className="font-medium text-gray-800">high-performance web applications</span>{' '}
              that solve real business problems. With expertise in both frontend and backend
              development, I create seamless digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                to="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="View my work projects"
                tabIndex={0}
              >
                View My Work <FaArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-lg shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Hire me contact form"
                tabIndex={0}
              >
                Hire Me
              </Link>
            </div>
          </div>

          {/* Skills Preview */}
          <SkillsPreview />
        </motion.section>

        {/* Value Proposition Section */}
        <motion.section
          className="py-16 px-4 bg-white"
          aria-labelledby="why-work-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              id="why-work-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Why Work With Me?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  value: '100%',
                  title: 'Problem Solver',
                  description:
                    'I specialize in finding technical solutions to complex business challenges.',
                },
                {
                  value: '10+',
                  title: 'Projects Built',
                  description:
                    'Hands-on experience across various domains and technologies.',
                },
                {
                  value: '24/7',
                  title: 'Learning Mindset',
                  description: 'Continuously updating skills with latest technologies.',
                },
              ].map(({ value, title, description }) => (
                <div
                  key={title}
                  className="p-6 rounded-lg"
                  tabIndex={0}
                  aria-label={`${title} - ${description}`}
                >
                  <div className="text-blue-600 text-4xl font-bold mb-3">{value}</div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          className="py-16 px-4 bg-gray-900 text-white"
          aria-labelledby="final-cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="final-cta-heading"
              className="text-3xl md:text-4xl font-bold mb-6"
              tabIndex={0}
            >
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how I can contribute to your team or project.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Get in touch contact form"
              tabIndex={0}
            >
              Get In Touch
            </Link>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default Home;
