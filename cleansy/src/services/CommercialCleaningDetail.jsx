// CommercialCleaningDetail.jsx
import React, { useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

const CommercialCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) =>
    setShowFAQ((prev) => ({ ...prev, [index]: !prev[index] }));

  const benefits = [
    "Improved workplace hygiene & safety",
    "Professional, consistent cleaning standards",
    "Creates a positive impression on clients & visitors",
    "Healthier environment reduces sick-leave",
    "Custom schedules to suit business flow",
  ];

  const services = [
    "Office cleaning & regular maintenance",
    "Retail shop / showroom cleaning",
    "Warehouse & industrial space cleaning",
    "Restroom & washroom sanitation",
    "Floor cleaning, polishing & buffing",
    "Window & glass cleaning",
    "Dusting, high-touch surface disinfecting",
    "Carpet & upholstery cleaning",
    "HVAC & duct cleaning (optional)",
    "Common area & lobby cleaning",
  ];

  const faqs = [
    {
      question: "What types of commercial spaces do you serve?",
      answer:
        "We clean offices, retail stores, showrooms, warehouses, industrial spaces, and common areas. Our teams adapt to your space’s unique needs.",
    },
    {
      question: "How often should commercial cleaning be done?",
      answer:
        "Frequency depends on your business activity and footfall. Many clients choose daily, biweekly, or weekly cleaning schedules.",
    },
    {
      question: "Are your cleaning staff trained and insured?",
      answer:
        "Yes. All personnel undergo rigorous training, background checks, and we maintain full liability insurance for peace of mind.",
    },
    {
      question: "Do you provide green / eco-friendly cleaning?",
      answer:
        "Absolutely. We offer green cleaning options using non-toxic, biodegradable products to maintain safety and sustainability.",
    },
    {
      question: "Can you clean after business hours?",
      answer:
        "Yes. We offer flexible scheduling, including evenings or weekends, to minimize disruption to your regular operations.",
    },
  ];

  return (
    <div>
      {/* <div className="rounded-2xl overflow-hidden shadow-md border border-blue-100 mb-8">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
          Image Coming Soon
        </div>
      </div> */}

      {/* Intro */}
      <p className="text-lg text-secondary mb-8 leading-relaxed">
        Our Commercial Cleaning service is designed for businesses that require
        high standards of cleanliness across large spaces. From offices to
        showrooms to industrial facilities, we deliver professional cleaning
        solutions tailored to your operational needs.
      </p>

      <h3 className="text-2xl font-bold text-primary mb-6">
        Dedicated Cleaning for Businesses & Commercial Spaces
      </h3>

      {/* Benefits + Highlighted services */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-xl font-bold text-primary mb-4">Key Benefits</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center text-secondary">
                <CheckCircle
                  className="text-[#2563EB] mr-3 flex-shrink-0"
                  size={16}
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-primary mb-4">
            Sample Services We Offer
          </h4>
          <ul className="space-y-3">
            {services.slice(0, 5).map((service, i) => (
              <li key={i} className="flex items-center text-secondary">
                <Sparkles
                  className="text-[#3B82F6] mr-3 flex-shrink-0"
                  size={16}
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full services list */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-primary mb-4">
          Complete Service Portfolio
        </h4>
        <div className="grid md:grid-cols-2 gap-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#2563EB]/10 rounded-lg p-3 text-sm text-primary border border-blue-100"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h4 className="text-2xl font-bold text-primary mb-6 border-b-2 border-[#2563EB] inline-block">
          Frequently Asked Questions
        </h4>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md border border-blue-200 transition-transform hover:scale-[1.01]"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full p-5 text-left bg-gradient-to-r from-[#1E3A8A]/10 to-white hover:from-[#2563EB]/15 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-lg text-primary flex items-center">
                  <span className="w-1.5 h-6 bg-[#2563EB] rounded-full mr-3"></span>
                  {faq.question}
                </span>
                <span className="text-[#2563EB] text-3xl font-bold">
                  {showFAQ[i] ? "−" : "+"}
                </span>
              </button>
              {showFAQ[i] && (
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

export default CommercialCleaningDetail;
