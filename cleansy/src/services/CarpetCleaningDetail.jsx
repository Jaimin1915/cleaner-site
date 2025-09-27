import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const CarpetCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const benefits = [
    "Deep cleaning and stain removal",
    "Improved air quality and hygiene",
    "Extended carpet life and appearance",
    "Odor elimination and freshening",
    "Professional-grade equipment and techniques"
  ];

  const services = [
    "Hot water extraction cleaning",
    "Stain and spot removal",
    "Odor treatment and elimination",
    "Carpet protection application",
    "Pre-treatment of high-traffic areas",
    "Pet stain and odor removal",
    "Commercial carpet maintenance",
    "Upholstery cleaning",
    "Rug cleaning services",
    "Emergency water damage restoration"
  ];

  const faqs = [
    {
      question: "What carpet cleaning method do you use?",
      answer: "We primarily use hot water extraction (steam cleaning) which is the most effective method for deep cleaning carpets. We also offer dry cleaning methods for specific carpet types."
    },
    {
      question: "How long does carpet cleaning take?",
      answer: "Cleaning time depends on the size of the area and carpet condition. Generally, it takes 2-6 hours for drying, and we can provide specific timeframes based on your needs."
    },
    {
      question: "Can you remove all types of stains?",
      answer: "We can remove most common stains including food, beverages, pet accidents, and dirt. Some permanent stains may not be completely removable, but we'll do our best to minimize their appearance."
    },
    {
      question: "How often should carpets be professionally cleaned?",
      answer: "We recommend professional carpet cleaning every 12-18 months for residential carpets and every 3-6 months for commercial carpets, depending on foot traffic and usage."
    }
  ];

  return (
    <div>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Our carpet cleaning services use advanced cleaning techniques and professional-grade equipment to deep clean, sanitize, and restore your carpets to their original condition.
      </p>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Carpet Cleaning Services</h3>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-4">Key Benefits</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <CheckCircle className="text-[#4D757B] mr-3 flex-shrink-0" size={16} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-4">Our Services Include</h4>
          <ul className="space-y-3">
            {services.slice(0, 5).map((service, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Sparkles className="text-[#A2B5C3] mr-3 flex-shrink-0" size={16} />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Complete Service List</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div key={index} className="bg-[#A2B5C3]/10 rounded-lg p-3 text-sm text-gray-700">
              {service}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h4>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#A2B5C3]/20 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 text-left bg-[#A2B5C3]/5 hover:bg-[#A2B5C3]/10 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-[#4D757B] text-2xl">
                  {showFAQ[index] ? '−' : '+'}
                </span>
              </button>
              {showFAQ[index] && (
                <div className="p-4 bg-white border-t border-[#A2B5C3]/20">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarpetCleaningDetail;