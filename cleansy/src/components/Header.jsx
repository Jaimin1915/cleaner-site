// src/components/Header.jsx
import React from 'react'
import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Clock, Menu, X, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link } from "react-router-dom" // ✅ Added
import logo from "../assets/images/logo.jpeg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#4D757B] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone size={14} className="mr-2" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center">
              <Mail size={14} className="mr-2" /> info@trueshine.com
            </span>
          </div>
          <div className="flex items-center space-x-6 mt-1 sm:mt-0">
            <span className="flex items-center">
              <Clock size={14} className="mr-2" /> Mon-Fri: 8AM-6PM
            </span>
            <span className="flex items-center">
              <MapPin size={14} className="mr-2" /> New York, NY
            </span>
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A2B5C3] transition-colors duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A2B5C3] transition-colors duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A2B5C3] transition-colors duration-300"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center bg-gradient-to-r from-[#4D757B] to-[#5A8A91] p-3 rounded-xl shadow-lg mr-4">
              <img src={logo} alt="TRUE SHINE Logo" className="w-10 h-10 object-contain rounded" />

            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 tracking-tight">TRUE SHINE</h1>
              <p className="text-sm text-gray-600 font-medium">Professional Cleaning Services</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/#home"
              className="text-gray-700 hover:text-[#4D757B] transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4D757B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#services"
              className="text-gray-700 hover:text-[#4D757B] transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4D757B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#about"
              className="text-gray-700 hover:text-[#4D757B] transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4D757B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#testimonials"
              className="text-gray-700 hover:text-[#4D757B] transition-all duration-300 font-medium relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4D757B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/#contact"
              className="text-gray-700 hover:text-[#4D757B] transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4D757B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#4D757B] text-white px-8 py-3 rounded-xl hover:bg-[#3d5e64] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white border-t">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/#home" className="text-gray-700 hover:text-[#4D757B]">
                Home
              </Link>
              <Link to="/#services" className="text-gray-700 hover:text-[#4D757B]">
                Services
              </Link>
              <Link to="/#about" className="text-gray-700 hover:text-[#4D757B]">
                About
              </Link>
              <Link to="/#pricing" className="text-gray-700 hover:text-[#4D757B]">
                Pricing
              </Link>
              <Link to="/#testimonials" className="text-gray-700 hover:text-[#4D757B]">
                Testimonials
              </Link>
              <Link to="/#contact" className="text-gray-700 hover:text-[#4D757B]">
                Contact
              </Link>
              <button className="bg-[#4D757B] text-white px-6 py-2 rounded-xl hover:bg-[#3d5e64] transition-colors w-full">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
