import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Award, Shield, Sparkles, Home, Building, Trash2, Droplets, Menu, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-[#A2B5C3]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to experience the cleanest spaces? Contact us today!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-10">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Email</h4>
                  <p className="text-gray-600">info@cleasy.com</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Address</h4>
                  <p className="text-gray-600">123 Clean Street, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#A2B5C3]/20">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Get a Free Quote</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-[#A2B5C3]/30 focus:border-[#4D757B] focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-[#A2B5C3]/30 focus:border-[#4D757B] focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-[#A2B5C3]/30 focus:border-[#4D757B] focus:outline-none transition-colors"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-[#A2B5C3]/30 focus:border-[#4D757B] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="construction">Post-Construction</option>
                </select>
              </div>
              
              <textarea
                name="message"
                placeholder="Tell us about your cleaning needs..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-4 rounded-xl border-2 border-[#A2B5C3]/30 focus:border-[#4D757B] focus:outline-none transition-colors resize-none"
              ></textarea>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] text-white py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <Sparkles className="text-[#A2B5C3] mr-3" size={36} />
              <h3 className="text-3xl font-bold">Cleasy</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional cleaning services you can trust. We make your spaces shine with eco-friendly products and expert care.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons would go here */}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#A2B5C3]">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Residential Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Commercial Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Post-Construction</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#A2B5C3]">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#A2B5C3]">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="mr-3 text-[#A2B5C3]" size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-[#A2B5C3]" size={18} />
                <span>info@cleasy.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-[#A2B5C3]" size={18} />
                <span>123 Clean Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Cleasy. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact