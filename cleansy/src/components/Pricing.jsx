import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Award, Shield, Sparkles, Home, Building, Trash2, Droplets, Menu, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Clean",
      price: "$89",
      period: "per visit",
      popular: false,
      features: [
        "General cleaning of all rooms",
        "Kitchen and bathroom cleaning",
        "Vacuum and mop floors",
        "Dust furniture and surfaces",
        "Take out trash"
      ]
    },
    {
      name: "Deep Clean",
      price: "$149",
      period: "per visit",
      popular: true,
      features: [
        "Everything in Basic Clean",
        "Inside oven and refrigerator",
        "Baseboards and windowsills",
        "Light fixtures and ceiling fans",
        "Cabinet fronts and drawers",
        "Detailed bathroom cleaning"
      ]
    },
    {
      name: "Premium Clean",
      price: "$199",
      period: "per visit",
      popular: false,
      features: [
        "Everything in Deep Clean",
        "Interior window cleaning",
        "Garage and basement cleaning",
        "Patio/balcony cleaning",
        "Laundry wash and fold",
        "Organization services"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the cleaning package that fits your needs and budget</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 relative transition-all duration-300 ${
              plan.popular 
                ? 'bg-gradient-to-br from-[#4D757B] to-[#3d5e64] text-white shadow-2xl transform scale-105 hover:scale-110' 
                : 'bg-white text-gray-800 shadow-xl hover:shadow-2xl border border-[#A2B5C3]/20'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-80"> {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle 
                      className={`mr-4 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-[#4D757B]'}`} 
                      size={20} 
                    />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                plan.popular 
                  ? 'bg-white text-[#4D757B] hover:bg-gray-100 shadow-lg' 
                  : 'bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] text-white hover:shadow-xl'
              }`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;