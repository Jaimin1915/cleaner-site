import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const ChildcareCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const benefits = [
    "Child-safe cleaning products",
    "Experienced and trained staff",
    "Flexible scheduling options",
    "Professional and inviting appearance",
    "Focus on hygiene and safety"
  ];

  const services = [
    "Play area sanitization",
    "Toy cleaning and disinfection",
    "Bathroom deep cleaning",
    "Kitchen and food preparation areas",
    "Sleeping area maintenance",
    "Reception area cleaning",
    "Outdoor play equipment cleaning",
    "Floor sanitization",
    "Window and surface cleaning",
    "Nappy change area disinfection"
  ];

  const faqs = [
    {
      question: "How often should childcare centers be cleaned?",
      answer: "The frequency of our services depends on the specific needs of your childcare facility. We can work with you to create a customised cleaning schedule to ensure optimal cleanliness."
    },
    {
      question: "Are your cleaning products safe for children?",
      answer: "Yes, we use high-quality cleaning products that are specifically formulated to be safe for children. They effectively remove dirt, germs, and stains without compromising the health and well-being of children."
    },
    {
      question: "Can you clean during operational hours?",
      answer: "Yes, we understand the need to minimise disruptions in childcare centers. Our cleaning staff is trained to work efficiently and discreetly, ensuring minimal disturbance during operational hours."
    },
    {
      question: "Do your cleaners have police clearances?",
      answer: "Yes, at AKS Cleaning, we take the safety and security of our clients, especially in childcare environments, very seriously. All our staff undergo thorough police clearance checks before they are employed."
    }
  ];

  return (
    <div>
      <p className="text-lg text-secondary mb-8 leading-relaxed">
        We specialise in offering top-tier Childcare Cleaning Services, aimed at ensuring the health, safety, and well-being of children in childcare centers. Our services are meticulously crafted to meet the unique needs of these facilities.
      </p>
      
      <h3 className="text-2xl font-bold text-primary mb-6">Professional Childcare Cleaning Services</h3>
      
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
            <div key={index} className="bg-[#2563EB]/10 rounded-lg p-3 text-sm text-primary border border-blue-100">
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

export default ChildcareCleaningDetail;
