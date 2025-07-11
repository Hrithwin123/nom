import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Phone, Instagram, Search, Eye } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - Nom Nom Tails</title>
        <meta name="description" content="Learn about Nom Nom Tails - From Our Heart to Their Bowl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-gray-700 via-gray-600 to-blue-900 px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Nom Nom Tails Logo"
                width={100}
                height={60}
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-orange-400 transition-colors">Home</a>
              <a href="/about" className="text-white hover:text-orange-400 transition-colors">About Us</a>
              <a href="/contact" className="text-white hover:text-orange-400 transition-colors">Contact us</a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <Search className="text-white w-5 h-5" />
              <div className="flex items-center text-orange-400">
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm">+91 93168 69595</span>
              </div>
              <Instagram className="text-white w-5 h-5" />
              <span className="text-orange-400">Sign In</span>
              <button className="bg-orange-400 text-black px-4 py-2 rounded-full font-medium hover:bg-orange-500 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-700 via-gray-600 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-6xl font-bold mb-4">About us</h1>
            <div className="w-20 h-1 bg-orange-400"></div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-5xl font-bold text-gray-800 mb-8">
                  From Our Heart to Their Bowl
                </h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    <span className="font-bold text-gray-800">Nom Nom Tails</span> isn't just about dog food — it's about heart.
                  </p>
                  
                  <p>
                    We're a kindness kitchen based in <span className="font-bold text-gray-800">Sahakar Nagar, Bangalore</span>, lovingly cooking fresh, affordable meals for pet dogs and community streeties every single day.
                  </p>
                  
                  <p>
                    What started with Dipak Shodhan feeding a few hungry dogs outside his home soon turned into a full-fledged mission. With the power of compassion (and a lot of chicken!), Dipak created a community-led initiative that now nourishes hundreds of tails across the city.
                  </p>
                  
                  <p>
                    Whether you feed one loyal pup or a full street pack, you're part of our mission — and we're right beside you with bowls full of goodness.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <Image
                  src="/dogeating.webp"
                  alt="Dog eating from bowl"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-orange-400 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {/* Mission */}
              <div className="text-center text-white">
                <div className="mb-8">
                  <div className="flex items-center justify-center mx-auto mb-6">
                    <Image 
                      src="/food.png" 
                      alt="Mission icon" 
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-8">Our Mission</h3>
                <p className="text-xl mb-8">
                  To make sure no dog in Bangalore goes hungry — streetie or spoiled.
                </p>
                <p className="text-xl">
                  We cook <span className="font-bold">affordable and accessible community dog food</span> so feeders, rescuers, and pet parents can nourish every wagging tail with ease.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center text-white">
                <div className="mb-8">
                  <div className="flex items-center justify-center mx-auto mb-6">
                    <Image 
                      src="/eye.png" 
                      alt="Vision icon" 
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-8">Our Vision</h3>
                <p className="text-xl mb-8">
                  A city where kindness fills every bowl and no stray is left behind.
                </p>
                <p className="text-xl">
                  To create a kinder Bangalore where no dog is left behind — with fresh, affordable meals reaching every street and every tail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Dipak Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="relative">
                <Image
                  src="/deepak.webp"
                  alt="Dipak Shodhan with dog"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div>
                <h2 className="text-5xl font-bold text-gray-800 mb-8">
                  About Dipak Shodhan
                </h2>
                
                <p className="text-gray-600 mb-6">
                  <span className="font-bold text-gray-800">Founder of Nom Nom Tails & Sahakar Nagar Animal Patrol (SNAP)</span>
                </p>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    Dipak is a passionate animal welfare advocate, animal rescuer, and community mobilizer. Beyond his work with Nom Nom Tails and SNAP, he brings with him <span className="font-bold text-gray-800">over a decade of experience in global financial markets</span>, having worked across international business operations and investment sectors.
                  </p>
                  
                  <p>
                    Armed with an MBA from Manipal University, Dubai, and a professional certification from CISI (UK) in Wealth & Investment Management, Dipak blends sharp business insight with deep empathy. His unique background fuels his mission — running Nom Nom Tails with the same dedication and discipline he brought to boardrooms around the world.
                  </p>
                  
                  <p>
                    From spreadsheets to street dogs, Dipak leads with <span className="font-bold text-gray-800">heart, ensuring every bowl served is filled with love and purpose</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-400 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              Help Dogs Thrive, Not Just Survive
            </h2>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Left Side */}
              <div className="mb-8 md:mb-0">
                <Image
                  src="/logo.webp"
                  alt="Nom Nom Tails Logo"
                  width={100}
                  height={60}
                  className="mb-4"
                />
                <p className="text-gray-400">Copyright © Nom Nom Tails</p>
              </div>

              {/* Center Navigation */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 md:mb-0">
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">About us</a>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact us</a>
              </div>

              {/* Right Side */}
              <div className="flex items-center space-x-4">
                <Instagram className="w-5 h-5" />
                <a href="/contact" className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Get in touch
                </a>
              </div>
            </div>
            
            {/* Powered by section */}
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <span className="text-gray-400">Powered by Bloomi5</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;