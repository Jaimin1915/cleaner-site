import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const BodyCorpCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const benefits = [
    "Enhanced property value and appeal",
    "Resident satisfaction and retention",
    "Compliance with building standards",
    "Professional common area maintenance",
    "Regular scheduled cleaning programs"
  ];

  const services = [
    "Lobby and entrance cleaning",
    "Elevator maintenance and cleaning",
    "Stairwell and corridor cleaning",
    "Car park cleaning and maintenance",
    "Garden and outdoor area maintenance",
    "Mailroom and storage area cleaning",
    "Gym and recreational facility cleaning",
    "Pool area maintenance",
    "Garbage area cleaning",
    "Emergency stairwell cleaning"
  ];

  const faqs = [
    {
      question: "What areas are covered in body corp cleaning?",
      answer: "We clean all common areas including lobbies, elevators, stairwells, car parks, recreational facilities, and outdoor areas as specified in your body corporate requirements."
    },
    {
      question: "How often is body corp cleaning performed?",
      answer: "Cleaning frequency is typically determined by your body corporate committee and can range from daily to weekly depending on the size and usage of the building."
    },
    {
      question: "Can you work with our body corporate schedule?",
      answer: "Yes, we work closely with body corporate managers to ensure our cleaning schedule aligns with building operations and resident needs."
    },
    {
      question: "Do you provide reports to the body corporate?",
      answer: "Yes, we can provide regular cleaning reports and communicate directly with your body corporate manager regarding any maintenance issues or concerns."
    }
  ];

  return (
    <div>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        We provide comprehensive body corporate cleaning services for residential complexes, ensuring all common areas are maintained to the highest standards for residents and visitors.
      </p>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Body Corporate Cleaning Services</h3>
      
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

export default BodyCorpCleaningDetail;