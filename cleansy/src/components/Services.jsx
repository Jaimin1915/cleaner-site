// src/components/Services.jsx
import { Building, Users, Home, Sparkles, Trash2, Droplets, Shield, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import React from 'react';

const Services = () => {
  const services = [
    // The URLs are now corrected for the new dynamic routing setup
    {
      id: 1,
      icon: <Building className="text-[#4D757B]" size={48} />,
      title: "Office Cleaning",
      shortDescription: "Professional office cleaning services that take the hassle off you and into the hands of our experienced cleaning staff.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/office-cleaning",
    },
    {
      id: 2,
      icon: <Users className="text-[#4D757B]" size={48} />,
      title: "School Cleaning",
      shortDescription: "Comprehensive school cleaning services ensuring educational institutions maintain a clean and hygienic environment for learning.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/school-cleaning",
    },
    {
      id: 3,
      icon: <Home className="text-[#4D757B]" size={48} />,
      title: "Childcare Cleaning",
      shortDescription: "Specialized childcare cleaning services ensuring health, safety, and well-being of children in childcare centers.",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/childcare-cleaning",
    },
    {
      id: 4,
      icon: <Sparkles className="text-[#4D757B]" size={48} />,
      title: "Fitness Centres",
      shortDescription: "Premium gym cleaning services ensuring your fitness center is up to the highest quality health standards.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/fitness-centres",
    },
    {
      id: 5,
      icon: <Trash2 className="text-[#4D757B]" size={48} />,
      title: "Builders Clean",
      shortDescription: "Expert post-construction cleaning services to remove debris, dust, and grime, making your site spotless and ready.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/builders-clean",
    },
    {
      id: 6,
      icon: <Building className="text-[#4D757B]" size={48} />,
      title: "Body Corp Cleaning",
      shortDescription: "Comprehensive body corporate cleaning services for apartment complexes, maintaining common areas and building standards.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/body-corp-cleaning",
    },
    {
      id: 7,
      icon: <Droplets className="text-[#4D757B]" size={48} />,
      title: "Pressure Cleaning",
      shortDescription: "High-pressure cleaning services for exterior surfaces, removing dirt, grime, and stains from various surfaces.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/pressure-cleaning",
    },
    {
      id: 8,
      icon: <Home className="text-[#4D757B]" size={48} />,
      title: "Carpet Cleaning",
      shortDescription: "Professional carpet cleaning services using advanced techniques to deep clean and restore your carpets.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/carpet-cleaning",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Professional Cleaning Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            We offer comprehensive cleaning solutions tailored to your specific needs, using eco-friendly products and professional techniques.
          </p>
        </div>

        {/* --- RESTORED VISUAL CONTENT --- */}
        <div className="space-y-8">
          {/* First Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#A2B5C3]/20 group cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDescription}</p>
                  <Link to={service.url} className="block w-full bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(3, 6).map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#A2B5C3]/20 group cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDescription}</p>
                  <Link to={service.url} className="block w-full bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.slice(6, 8).map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#A2B5C3]/20 group cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDescription}</p>
                  <Link to={service.url} className="block w-full bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mt-20 mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Our Cleaning Services?</h3>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We customize our services to fit each business's unique needs. We promise to bring affordable, top-quality cleaning that makes your workspace safe and productive.
          </p>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#4D757B] to-[#A2B5C3] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Fully Licensed & Insured</h4>
              <p className="text-sm text-gray-600">Licensed, insured & bonded for complete protection</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#4D757B] to-[#A2B5C3] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Flexible Scheduling</h4>
              <p className="text-sm text-gray-600">Available 24/7 to fit your business schedule</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#4D757B] to-[#A2B5C3] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">100% Satisfaction Guarantee</h4>
              <p className="text-sm text-gray-600">We promise to meet and exceed your expectations</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#4D757B] to-[#A2B5C3] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Droplets className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Eco-Friendly Products</h4>
              <p className="text-sm text-gray-600">Green cleaning products for safe environments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;