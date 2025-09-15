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
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-blue-600">Cleasy</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the cleaning industry, we've built our reputation on reliability, quality, and customer satisfaction. Our team of trained professionals uses eco-friendly products and advanced techniques to deliver exceptional results.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Shield className="text-blue-600 mr-3" size={24} />
                <span className="text-lg font-semibold">Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center">
                <Award className="text-blue-600 mr-3" size={24} />
                <span className="text-lg font-semibold">Award-Winning Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-blue-600 mr-3" size={24} />
                <span className="text-lg font-semibold">100% Satisfaction Guarantee</span>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
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