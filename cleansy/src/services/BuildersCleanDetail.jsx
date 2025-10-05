import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const BuildersCleanDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const benefits = [
    "Complete debris and dust removal",
    "Site ready for handover",
    "Professional finishing touches",
    "Safe disposal of construction waste",
    "Detailed cleaning of all surfaces"
  ];

  const services = [
    "Construction debris removal",
    "Dust and dirt elimination",
    "Window and glass cleaning",
    "Floor deep cleaning and polishing",
    "Paint splatter removal",
    "Fixture and fitting cleaning",
    "Bathroom deep cleaning",
    "Kitchen area sanitization",
    "HVAC system cleaning",
    "Final inspection preparation"
  ];

  const faqs = [
    {
      question: "What is included in a builders clean?",
      answer: "Our builders clean includes removal of construction debris, thorough dusting, window cleaning, floor cleaning, paint removal, and sanitization of all areas to prepare the space for occupancy."
    },
    {
      question: "When should builders clean be scheduled?",
      answer: "Builders clean should be scheduled after construction is complete but before final handover. We can work with your construction timeline to ensure optimal timing."
    },
    {
      question: "Do you handle hazardous materials?",
      answer: "We can handle most construction waste and debris. For hazardous materials, we follow proper protocols and can coordinate with specialized waste management services."
    },
    {
      question: "How long does a builders clean take?",
      answer: "The duration depends on the size and condition of the space. We provide time estimates based on your specific project requirements."
    }
  ];

  return (
    <div>
      <p className="text-lg text-secondary mb-8 leading-relaxed">
        Our builders clean services are designed to handle the unique challenges of post-construction cleanup. We remove all debris, dust, and construction materials, leaving your space clean and ready for occupancy.
      </p>
      
      <h3 className="text-2xl font-bold text-primary mb-6">Professional Post-Construction Cleaning</h3>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-xl font-bold text-primary mb-4">Key Benefits</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-secondary">
                <CheckCircle className="text-[#2563EB] mr-3 flex-shrink-0" size={16} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-primary mb-4">Our Services Include</h4>
          <ul className="space-y-3">
            {services.slice(0, 5).map((service, index) => (
              <li key={index} className="flex items-center text-secondary">
                <Sparkles className="text-[#3B82F6] mr-3 flex-shrink-0" size={16} />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-bold text-primary mb-4">Complete Service List</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2563EB]/10 rounded-lg p-3 text-sm text-primary border border-blue-100"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-bold text-primary mb-6 border-b-2 border-[#2563EB] inline-block">
          Frequently Asked Questions
        </h4>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md border border-blue-200 transition-transform hover:scale-[1.01]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 text-left bg-gradient-to-r from-[#1E3A8A]/10 to-white hover:from-[#2563EB]/15 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-lg text-primary flex items-center">
                  <span className="w-1.5 h-6 bg-[#2563EB] rounded-full mr-3"></span>
                  {faq.question}
                </span>
                <span className="text-[#2563EB] text-3xl font-bold">
                  {showFAQ[index] ? "−" : "+"}
                </span>
              </button>
              {showFAQ[index] && (
                <div className="p-5 bg-[#F0F9FF] border-t border-blue-100">
                  <p className="text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildersCleanDetail;
