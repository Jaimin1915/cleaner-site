import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const OfficeCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const benefits = [
    "Increased productivity and happy employees",
    "Professional appearance for clients",
    "Prevention of diseases and germs",
    "Healthy and hygienic work environment",
    "Flexible scheduling options"
  ];

  const services = [
    "Detailed dusting of all surfaces",
    "Vacuuming all flooring areas",
    "Thorough cleaning of kitchens and bathrooms",
    "Trash and recycling removal",
    "Sanitization of high-contact areas",
    "Window cleaning services",
    "Carpet cleaning and maintenance",
    "Office equipment cleaning",
    "Reception area maintenance",
    "Meeting room preparation"
  ];

  const faqs = [
    {
      question: "What does your Office Cleaning service include?",
      answer: "Our service includes detailed dusting, vacuuming all flooring, thorough cleaning of kitchens and bathrooms, trash and recycling removal, and sanitization of high-contact areas such as doorknobs, light switches, and office equipment. We also offer window cleaning and carpet cleaning as additional services."
    },
    {
      question: "How often should we schedule office cleaning?",
      answer: "The frequency is based on your office's size, the number of employees, and overall usage. We work with you to determine a cleaning schedule that keeps your office consistently clean, whether that's daily, weekly, or on a custom schedule."
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer: "Our eco-friendly products are carefully selected for their low environmental impact and non-toxic properties, ensuring they are safe for both your employees and the planet. They are effective in cleaning and sanitizing without leaving harmful residues."
    },
    {
      question: "Can you work outside business hours?",
      answer: "Yes, we offer flexible cleaning times to fit your schedule, including early mornings, evenings, and weekends, to ensure minimal disruption to your business operations."
    }
  ];

  return (
    <div>
      <p className="text-lg text-secondary mb-8 leading-relaxed">
        Offices aren't just a place for your employees to work – they also represent your business, and an unclean, messy office is not a very good indication of your professionalism. We offer premium office cleaning service that ensures your workspace is clean, professional, and productive.
      </p>
      
      <h3 className="text-2xl font-bold text-primary mb-6">Professional Office Cleaning Services</h3>
      
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

export default OfficeCleaningDetail;
