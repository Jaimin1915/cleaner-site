import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const FitnessCentreDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const benefits = [
    "Prevention of germ spread and infections",
    "Healthy exercise environment",
    "Professional appearance for members",
    "Equipment longevity and maintenance",
    "Flexible scheduling options"
  ];

  const services = [
    "Deep cleaning of workout equipment",
    "Sanitization of high-touch areas",
    "Thorough floor cleaning and maintenance",
    "Locker room deep cleaning",
    "Restroom sanitization",
    "Reception area maintenance",
    "Mirror and glass cleaning",
    "Equipment disinfection",
    "Change room cleaning",
    "Staff area maintenance"
  ];

  const faqs = [
    {
      question: "What does gym cleaning include?",
      answer: "Our comprehensive gym cleaning includes deep cleaning of workout equipment, sanitization of high-touch areas, thorough cleaning of floors, locker rooms, and restrooms. We also focus on areas like reception and staff areas to ensure a holistic clean."
    },
    {
      question: "Why is regular gym cleaning important?",
      answer: "Regular professional cleaning is essential for maintaining hygiene, preventing the spread of germs, and providing a welcoming environment. It also helps in extending the life of gym equipment and flooring by removing sweat, dust, and grime buildup."
    },
    {
      question: "How often should gyms be professionally cleaned?",
      answer: "The frequency of professional cleaning depends on your gym's footfall and usage. High-traffic gyms may require daily cleaning, while smaller or less busy gyms might need less frequent services. We offer custom schedules to meet your specific needs."
    },
    {
      question: "Do you use safe cleaning products?",
      answer: "Yes, we prioritize the health of your members and staff by using eco-friendly, non-toxic cleaning products that effectively sanitize without harmful chemicals."
    }
  ];

  return (
    <div>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        If there's one place where germs spread easily, it's a gym. We offer premium gym cleaning to ensure your gym is up to the highest quality health standards and is presented beautifully.
      </p>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Gym & Fitness Centre Cleaning</h3>
      
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

export default FitnessCentreDetail;