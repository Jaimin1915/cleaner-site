import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Award, Shield, Sparkles, Home, Building, Trash2, Droplets, Menu, X } from 'lucide-react';

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

export default Footer