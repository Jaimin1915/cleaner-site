import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const PressureCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const benefits = [
    "Restoration of surface appearance",
    "Removal of stubborn stains and grime",
    "Prevention of mold and mildew growth",
    "Enhanced property curb appeal",
    "Environmentally friendly cleaning methods"
  ];

  const services = [
    "Building exterior washing",
    "Driveway and pathway cleaning",
    "Car park pressure cleaning",
    "Deck and patio restoration",
    "Fence and wall cleaning",
    "Roof and gutter cleaning",
    "Graffiti removal",
    "Pool area cleaning",
    "Industrial equipment cleaning",
    "Concrete surface restoration"
  ];

  const faqs = [
    {
      question: "What surfaces can be pressure cleaned?",
      answer: "We can pressure clean concrete, brick, stone, timber decks, driveways, pathways, building exteriors, and most outdoor surfaces. We assess each surface to determine the appropriate pressure and technique."
    },
    {
      question: "Is pressure cleaning safe for all surfaces?",
      answer: "We use different pressure levels and techniques depending on the surface material. Our experienced team ensures the right approach is used to avoid damage while achieving optimal results."
    },
    {
      question: "How often should pressure cleaning be done?",
      answer: "This depends on the location and exposure to elements. Generally, annual pressure cleaning helps maintain surfaces, though high-traffic or exposed areas may need more frequent attention."
    },
    {
      question: "Do you use chemicals in pressure cleaning?",
      answer: "We use eco-friendly cleaning solutions when necessary to achieve the best results. All chemicals used are safe and environmentally responsible."
    }
  ];

  return (
    <div>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Our pressure cleaning services use professional-grade equipment to remove built-up dirt, grime, mold, and stains from exterior surfaces, restoring them to their original condition.
      </p>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Pressure Cleaning Services</h3>
      
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
  <h4 className="text-2xl font-bold text-[#4D757B] mb-6 border-b-2 border-[#A2B5C3] inline-block">
    Frequently Asked Questions
  </h4>
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="rounded-xl overflow-hidden shadow-md border border-[#A2B5C3]/30 transition-transform hover:scale-[1.01]"
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full p-5 text-left bg-gradient-to-r from-[#A2B5C3]/10 to-white hover:from-[#A2B5C3]/20 transition-colors flex items-center justify-between"
        >
          <span className="font-semibold text-lg text-gray-900 flex items-center">
            <span className="w-1.5 h-6 bg-[#4D757B] rounded-full mr-3"></span>
            {faq.question}
          </span>
          <span className="text-[#4D757B] text-3xl font-bold">
            {showFAQ[index] ? "−" : "+"}
          </span>
        </button>
        {showFAQ[index] && (
          <div className="p-5 bg-gray-50 border-t border-[#A2B5C3]/30">
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default PressureCleaningDetail;