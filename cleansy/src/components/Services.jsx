import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Award, Shield, Sparkles, Home, Building, Trash2, Droplets, Menu, X } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="text-[#4D757B]" size={48} />,
      title: "Residential Cleaning",
      description: "Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.",
      features: ["Regular house cleaning", "Deep cleaning", "Move-in/out cleaning", "Post-construction cleanup"]
    },
    {
      icon: <Building className="text-[#4D757B]" size={48} />,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning to maintain a healthy work environment.",
      features: ["Office cleaning", "Retail space cleaning", "Restaurant cleaning", "Medical facility cleaning"]
    },
    {
      icon: <Droplets className="text-[#4D757B]" size={48} />,
      title: "Deep Cleaning",
      description: "Intensive cleaning service that reaches every corner and eliminates stubborn dirt and grime.",
      features: ["Kitchen deep clean", "Bathroom sanitization", "Carpet & upholstery", "Window cleaning"]
    },
    {
      icon: <Trash2 className="text-[#4D757B]" size={48} />,
      title: "Post-Construction",
      description: "Specialized cleaning for newly constructed or renovated spaces, removing all debris.",
      features: ["Dust removal", "Paint splatter cleanup", "Debris removal", "Final inspection cleaning"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Cleaning Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive cleaning solutions tailored to your specific needs, using eco-friendly products and professional techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#A2B5C3]/20 group">
              <div className="mb-6 p-3 bg-gradient-to-br from-[#A2B5C3]/20 to-[#4D757B]/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-[#4D757B] mr-3 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;