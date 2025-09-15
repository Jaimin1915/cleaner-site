import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Award, Shield, Sparkles, Home, Building, Trash2, Droplets, Menu, X } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Professional <span className="text-blue-600">Cleaning</span> Services You Can Trust
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your space with our premium cleaning services. We deliver exceptional results for homes and businesses with eco-friendly products and professional care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Get Free Quote
              </button>
            </div>
            <div className="flex items-center space-x-8 mt-8">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" size={20} />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="text-blue-600 mr-2" size={20} />
                <span className="font-semibold">1000+ Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                <div className="text-center">
                  <Sparkles className="mx-auto mb-4 text-blue-600" size={64} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">Professional cleaning services with guaranteed satisfaction</p>
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