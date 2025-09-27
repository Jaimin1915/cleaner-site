import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"
import React from 'react'

const GoogleMapSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Location</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Come visit us at our main office or contact us to schedule a consultation at your location. We're here to
            serve you with professional cleaning services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="mr-3 text-[#4D757B]" size={28} />
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#4D757B]/10 p-3 rounded-lg">
                    <MapPin className="text-[#4D757B]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Clean Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#4D757B]/10 p-3 rounded-lg">
                    <Phone className="text-[#4D757B]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#4D757B]/10 p-3 rounded-lg">
                    <Mail className="text-[#4D757B]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@trueshine.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#4D757B]/10 p-3 rounded-lg">
                    <Clock className="text-[#4D757B]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-[#4D757B] to-[#5A8A91] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  <Navigation className="mr-2" size={20} />
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647887432123!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Map Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#4D757B] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">TRUE SHINE</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Professional Cleaning Services</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#4D757B]/20 to-[#A2B5C3]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#A2B5C3]/20 to-[#4D757B]/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">We Serve These Areas</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Manhattan",
              "Brooklyn",
              "Queens",
              "Bronx",
              "Staten Island",
              "Long Island",
              "Westchester",
              "New Jersey",
            ].map((area) => (
              <div
                key={area}
                className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleMapSection
