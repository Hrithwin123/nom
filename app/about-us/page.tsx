"use client"

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Search } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    question: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.webp" 
                alt="Nom Nom Tails" 
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-white font-semibold">Contact us</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-300" />
              <div className="text-orange-400 text-sm">+91 99168 69595</div>
              <Instagram className="w-5 h-5 text-gray-300" />
              <div className="text-gray-300 text-sm">Sign In</div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Contact us</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {/* Dogs Image */}
            <div className="mb-8">
              <img 
                src="/dogies.webp"
                alt="Street dogs"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Get in Touch Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-6">
                We're here for you — and your streetie squad!
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Whether you're placing an order, have questions about our food, or just want to chat about feeding the goodest boys and girls — we'd love to hear from you.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <a href="mailto:nomnomtails@gmail.com" className="text-orange-500 hover:text-orange-600 transition-colors">
                    nomnomtails@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">+91 99168 69595</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <span className="text-gray-600">
                    2456, 11th Cross, 13th Main, E Block, Sahakar Nagar, Bangalore 560092
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="space-y-6">
              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </div>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Your Email *
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Subject *
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Your Question *
                </div>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-8 lg:mb-0">
              <img 
                src="/logo.webp" 
                alt="Nom Nom Tails" 
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center lg:justify-end space-x-8 mb-8 lg:mb-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white transition-colors cursor-pointer" />
              <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get in touch
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              Copyright © Nom Nom Tails
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Powered by</span>
              <div className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                odoo
              </div>
              <span>- Create a free website</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;