import React from 'react'
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.jpeg"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleServiceClick = (e) => {
    // Small delay to allow navigation to complete before scrolling
    setTimeout(() => {
      scrollToTop()
    }, 100)
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-gradient-to-r from-[#4D757B] to-[#5A8A91] p-2 rounded-lg shadow-lg mr-3">
                <img src={logo} alt="TRUE SHINE Logo" className="w-10 h-10 object-contain rounded" />

              </div>
              <h3 className="text-3xl font-bold">TRUE SHINE</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional cleaning services you can trust. We make your spaces shine with eco-friendly products and
              expert care.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#A2B5C3]">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/services/office-cleaning"
                  onClick={handleServiceClick}
                  className="hover:text-white transition-colors duration-300"
                >
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/school-cleaning"
                  onClick={handleServiceClick}
                  className="hover:text-white transition-colors duration-300"
                >
                  School Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/childcare-cleaning"
                  onClick={handleServiceClick}
                  className="hover:text-white transition-colors duration-300"
                >
                  Childcare Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fitness-centres"
                  onClick={handleServiceClick}
                  className="hover:text-white transition-colors duration-300"
                >
                  Fitness Centres
                </Link>
              </li>
              <li>
                <Link
                  to="/services/builders-clean"
                  onClick={handleServiceClick}
                  className="hover:text-white transition-colors duration-300"
                >
                  Builders Clean
                </Link>
              </li>
              <li>
                <Link
                  to="/services/carpet-cleaning"
                  onClick={handleServiceClick}
                  className="hover:text-white transition-colors duration-300"
                >
                  Carpet Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#A2B5C3]">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/#about" className="hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#team" className="hover:text-white transition-colors duration-300">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/#careers" className="hover:text-white transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/#blog" className="hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#A2B5C3]">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Phone className="mr-3 text-[#A2B5C3]" size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-[#A2B5C3]" size={18} />
                <span>info@trueshine.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-[#A2B5C3]" size={18} />
                <span>123 Clean Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#A2B5C3]">Visit Our Location</h4>
              <p className="text-gray-400 mb-4">
                Come visit us at our main office or contact us to schedule a consultation at your location.
              </p>
              <div className="flex items-center text-gray-400">
                <MapPin className="mr-3 text-[#A2B5C3]" size={18} />
                <span>123 Clean Street, New York, NY 10001</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647887432123!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TRUE SHINE. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
