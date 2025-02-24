import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mehandi-light/10 to-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-mehandi">Mehandi Art</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-mehandi hover:text-mehandi-dark">Home</a>
              <a href="#designs" className="text-mehandi hover:text-mehandi-dark">Designs</a>
              <a href="#services" className="text-mehandi hover:text-mehandi-dark">Services</a>
              <a href="#contact" className="text-mehandi hover:text-mehandi-dark">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-mehandi mb-6">
            Traditional Indian Mehandi Art
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover the beauty of traditional henna designs for your special occasions
          </p>
          <a 
            href="#contact"
            className="bg-spice hover:bg-spice-dark text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Book Now
          </a>
        </motion.div>
      </section>

      {/* Designs Gallery */}
      <section id="designs" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-mehandi mb-12">Our Designs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src={`https://source.unsplash.com/600x400/?henna,mehandi${item}`}
                  alt="Mehandi Design"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-mehandi-light/10">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-mehandi mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-mehandi mb-4">Bridal Mehandi</h4>
              <p className="text-gray-600">Intricate and detailed designs for your special day</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-mehandi mb-4">Party Mehandi</h4>
              <p className="text-gray-600">Beautiful designs for festivals and celebrations</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-mehandi mb-4">Arabic Mehandi</h4>
              <p className="text-gray-600">Modern and elegant Arabic style designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-mehandi mb-12">Contact Us</h3>
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-spice hover:text-spice-dark text-3xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-spice hover:text-spice-dark text-3xl">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-spice hover:text-spice-dark text-3xl">
                <FaPhone />
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mehandi"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mehandi"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mehandi"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-mehandi hover:bg-mehandi-dark text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mehandi-dark text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Traditional Mehandi Art. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;