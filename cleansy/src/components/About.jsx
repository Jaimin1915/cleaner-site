import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Award, Shield, Sparkles, Home, Building, Trash2, Droplets, Menu, X } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "1000+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Cleaners" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-[#A2B5C3]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D757B] to-[#A2B5C3]">TRUE SHINE</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the cleaning industry, we've built our reputation on reliability, quality, and customer satisfaction. Our team of trained professionals uses eco-friendly products and advanced techniques to deliver exceptional results.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-white" size={24} />
                </div>
                <span className="text-lg font-semibold text-gray-800">Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={24} />
                </div>
                <span className="text-lg font-semibold text-gray-800">Award-Winning Service</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <span className="text-lg font-semibold text-gray-800">100% Satisfaction Guarantee</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-[#A2B5C3]/20">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] mb-3">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About