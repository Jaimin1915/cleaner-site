import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Award, Shield, Sparkles, Home, Building, Trash2, Droplets, Menu, X } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-[#A2B5C3] via-white to-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#A2B5C3]/10 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D757B] to-[#A2B5C3]">Cleaning</span> Services You Can Trust
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed font-light">
              Transform your space with our premium cleaning services. We deliver exceptional results for homes and businesses with eco-friendly products and professional care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-[#4D757B] to-[#3d5e64] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Book Now
              </button>
              <button className="border-2 border-[#4D757B] text-[#4D757B] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#4D757B] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                Get Free Quote
              </button>
            </div>
            <div className="flex items-center space-x-12 mt-12">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="text-yellow-400 fill-current" size={20} />)}
                </div>
                <span className="font-semibold text-gray-800">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-[#4D757B]" size={24} />
                <span className="font-semibold text-gray-800">1000+ Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#4D757B] to-[#A2B5C3] rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3 shadow-xl">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-[#A2B5C3] to-[#4D757B] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Sparkles className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Premium Quality</h3>
                  <p className="text-gray-600 leading-relaxed">Professional cleaning services with guaranteed satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;