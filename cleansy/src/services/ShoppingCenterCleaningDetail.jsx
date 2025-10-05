import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const ShoppingCenterCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (index) => {
    setShowFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Business-focused benefits for malls/shopping centres
  const benefits = [
    "Cleaner common areas that lift shopper experience & dwell time",
    "Health-first protocols for high-touch zones and restrooms",
    "Slip-and-fall risk reduction with proactive floor care",
    "Food-court hygiene aligned with retail best practices",
    "Green cleaning options and standards-based compliance",
  ];

  // Scope tailored to shopping centres (interiors + surrounding areas)
  const services = [
    "Daily porter service for entries, corridors & seating zones",
    "High-touch disinfection: railings, lifts, buttons, carts & trays",
    "Restrooms: frequent cycles, stock checks, deep sanitisation",
    "Food-court detail: tables, chairs, tray returns, spill response",
    "Floor care scheduling: sweep, auto-scrub, burnish, spot mop",
    "Glass & storefronts: fingerprints, smudges, thresholds",
    "Escalator & elevator detailing (incl. handrails)",
    "Back-of-house: service corridors, docks & waste rooms",
    "Waste, recycling & compactors with tidy enclosures",
    "Entrance matting maintenance & weather spill readiness",
    "Car park/forecourt: litter pick, sweep & pressure wash (as scoped)",
    "Planned periodic works: strip & seal, high dusting, deep cleans",
  ];

  const faqs = [
    {
      question: "Do you offer day porter and after-hours teams?",
      answer:
        "Yes. We provide visible day porters for touch-up, spills, restrooms and food-court resets, and after-hours crews for machine floor care and deeper tasks. Schedules are built from SOPs with daily/weekly/monthly frequencies."
    },
    {
      question: "How do you keep food-court areas compliant and safe?",
      answer:
        "We run fast wipe-reset cycles on tables and chairs, frequent floor spot mops, and end-of-day machine scrubs. Grease-prone zones are washed first, then disinfected with correct dwell times. Trash streams are cleared before overflow."
    },
    {
      question: "What standards or frameworks do you follow?",
      answer:
        "Work is aligned to ISSA Clean Standards for commercial/retail facilities, with optional Green Seal GS-42–aligned ‘green cleaning’ programs and BOMA/BEST-style documentation (checklists, inspections, inventories)."
    },
    {
      question: "How do you reduce slip-and-fall risks in high traffic?",
      answer:
        "We maintain entrance matting, increase cycles near entries, and schedule auto-scrubbing/burnishing during low traffic. Wet-floor signage and rapid spill response are mandatory steps in our SOPs."
    },
    {
      question: "Can you handle waste rooms, compactors and recycling?",
      answer:
        "Yes. We tidy enclosures, manage liners, keep chutes and pads clean, and report contamination issues. We can support tenant education for proper sorting."
    }
  ];

  return (
    <div>
      {/* Intro */}
      <p className="text-lg text-secondary mb-8 leading-relaxed">
        Our Shopping Center Cleaning service keeps high-traffic spaces spotless, safe and brand-ready—covering
        common areas, food courts, restrooms, storefront glass, back-of-house corridors, and exterior touchpoints.
        Programs combine visible day porters with efficient after-hours teams, rigorous SOPs, and clear reporting.
      </p>

      <h3 className="text-2xl font-bold text-primary mb-6">
        Reliable, Standards-Aligned Cleaning for High-Traffic Retail
      </h3>

      {/* Benefits + Highlighted services */}
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

      {/* Complete service list */}
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

      {/* FAQs */}
      <div>
        <h4 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h4>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-blue-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 text-left bg-gradient-to-r from-[#1E3A8A]/10 to-white hover:from-[#2563EB]/15 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-primary">{faq.question}</span>
                <span className="text-[#2563EB] text-2xl">
                  {showFAQ[index] ? '−' : '+'}
                </span>
              </button>
              {showFAQ[index] && (
                <div className="p-4 bg-[#F0F9FF] border-t border-blue-100">
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

export default ShoppingCenterCleaningDetail;
