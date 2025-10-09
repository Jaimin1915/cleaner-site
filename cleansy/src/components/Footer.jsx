import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../assets/images/Logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const handleServiceClick = () => setTimeout(scrollToTop, 100)

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0a1a3f, #0d47a1)",
        color: "#ffffff",
        padding: "40px 20px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* === TOP GRID === */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] p-0 rounded-lg shadow-lg mr-3">
                <img
              src={logo}
              alt="TRUE SHINE Logo"
              className="h-15 w-15 rounded"
            />
              </div>
              <h3 className="text-3xl font-bold">TRUE SHINE</h3>
            </div>

            <p className="text-white/80 mb-6 leading-relaxed">
              Professional cleaning services you can trust. We make your spaces shine with
              eco-friendly products and expert care.
            </p>

            {/* Social Media */}
            {/* <div className="flex space-x-6 mt-6">
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg hover:scale-110 transition-all"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="h-8 w-8"
                />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg hover:scale-110 transition-all"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                  alt="LinkedIn"
                  className="h-8 w-8"
                />
              </a>

              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg hover:scale-110 transition-all"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"
                  alt="YouTube"
                  className="h-8 w-8"
                />
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#93C5FD]">Services</h4>
            <ul className="space-y-3 text-white/70">
              {[
                ["office-cleaning", "Office Cleaning"],
                ["school-cleaning", "School Cleaning"],
                ["childcare-cleaning", "Childcare Cleaning"],
                ["fitness-centres", "Fitness Centres"],
                ["builders-clean", "Builders Clean"],
                ["shopping-center-cleaning", "Shopping Center Cleaning"],
                ["commercial-cleaning", "Commercial Cleaning"],
                ["medical-cleaning", "Medical Cleaning"],
              ].map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    onClick={handleServiceClick}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#93C5FD]">Company</h4>
            <ul className="space-y-3 text-white/70">
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
            <h4 className="text-xl font-semibold mb-6 text-[#93C5FD]">Contact Info</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center">
                <Phone className="mr-3 text-[#93C5FD]" size={18} />
                <span>+61 432 300 733</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-[#93C5FD]" size={18} />
                <span>tscleaningfacility@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 text-[#93C5FD]" size={18} />
                <span>Herses Rd, Eagleby QLD 4207, Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* === MAP SECTION === */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#93C5FD]">Visit Our Location</h4>
              <div className="flex items-center text-white/80">
                <MapPin className="mr-3 text-[#93C5FD]" size={18} />
                <span>Herses Rd, Eagleby QLD 4207, Australia</span>
              </div>
            </div>

            {/* Updated Google Map */}
            <div className="relative">
              <div className="bg-[#1E3A8A] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="True Shine Cleaning — Eagleby QLD"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.718365371347!2d153.21098437508022!3d-27.69509817618958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b916a0d84482601%3A0x17eab2a2f8a37e1a!2sHerses%20Rd%2C%20Eagleby%20QLD%204207%2C%20Australia!5e0!3m2!1sen!2sca!4v1759563376831!5m2!1sen!2sca"
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

        {/* === BOTTOM COPYRIGHT === */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>
            &copy; 2025 TRUE SHINE. All rights reserved. |{" "}
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
