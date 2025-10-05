import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const SchoolCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const benefits = [
    "Clean and hygienic learning environment",
    "Student and staff well-being priority",
    "Flexible cleaning schedules",
    "Trained and trustworthy staff",
    "Environmentally friendly practices"
  ];

  const services = [
    "Classroom cleaning and sanitization",
    "Hallway and corridor maintenance",
    "Laboratory deep cleaning",
    "Common area sanitization",
    "Cafeteria and kitchen cleaning",
    "Library maintenance",
    "Bathroom deep cleaning",
    "Sports hall cleaning",
    "Administrative office cleaning",
    "Playground maintenance"
  ];

  const faqs = [
    {
      question: "Do you have experience cleaning schools in Brisbane?",
      answer: "Absolutely! AKS Cleaning has years of experience in delivering top-notch cleaning solutions specifically tailored for schools in Brisbane."
    },
    {
      question: "What cleaning products do you use in schools?",
      answer: "AKS Cleaning utilises high-quality cleaning products that are safe, effective, and environmentally friendly, ensuring a healthy and hygienic environment for students and staff."
    },
    {
      question: "Can you accommodate specific cleaning schedules?",
      answer: "Yes, we understand the importance of minimizing disruptions. AKS Cleaning offers flexible cleaning schedules tailored to your school's needs, ensuring that cleaning activities are conducted at the most convenient times."
    },
    {
      question: "Are your cleaners trustworthy?",
      answer: "AKS Cleaning employs trained and trustworthy cleaners who respect your school's security and privacy. We implement strict protocols, including background checks, to ensure the safety and well-being of your school community."
    }
  ];

  return (
    <div>
      <p className="text-lg text-secondary mb-8 leading-relaxed">
        As an educational institution, maintaining a clean and sanitary environment is essential for the well-being and productivity of both students and faculty. We provide high-quality school cleaning services using top-of-the-line cleaning products.
      </p>
      
      <h3 className="text-2xl font-bold text-primary mb-6">Professional School Cleaning Services</h3>
      
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

export default SchoolCleaningDetail;
