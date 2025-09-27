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
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        As an educational institution, maintaining a clean and sanitary environment is essential for the well-being and productivity of both students and faculty. We provide high-quality school cleaning services using top-of-the-line cleaning products.
      </p>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional School Cleaning Services</h3>
      
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

export default SchoolCleaningDetail;