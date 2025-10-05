import React, { useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

const MedicalCleaningDetail = () => {
  const [showFAQ, setShowFAQ] = useState({});

  const toggleFAQ = (i) => setShowFAQ((prev) => ({ ...prev, [i]: !prev[i] }));

  const benefits = [
    "Reduces Healthcare-Associated Infections (HAIs)",
    "Regulatory compliance with healthcare hygiene standards",
    "Safe handling of biohazards and medical waste",
    "Specialized disinfection for high-touch & critical zones",
    "Improves patient, staff, and visitor confidence",
  ];

  const services = [
    "Deep disinfection of patient rooms, ICU & wards",
    "Operation theatre terminal cleaning & sterilisation prep",
    "Waiting area, lobby, corridors & outpatient cleaning",
    "Sanitising consultation rooms & diagnostic suites",
    "Laboratory & equipment-safe surface disinfection",
    "Restroom hygiene with medical-grade cleaners",
    "Floor care: vacuuming, mopping, buffer, floor finish",
    "High-touch surface cleaning: rails, switches, door handles",
    "Air vent, duct & HVAC grille cleaning (“clean-air support”)",
    "Medical waste handling & sharps protocol cleaning",
    "Clean room / isolation room protocols where needed",
    "Cleaning schedule audits & documentation reports",
  ];

  const faqs = [
    {
      question: "Do you use hospital-grade disinfectants and protocols?",
      answer:
        "Yes, we use EPA-registered hospital disinfectants (or equivalent in your region) and follow strict contact times, dilution rules, and rotation protocols. We also adopt color-coding and cross-contamination controls. (Source: ISSA on healthcare cleaning):contentReference[oaicite:0]{index=0}",
    },
    {
      question: "How do you manage biohazard and medical waste?",
      answer:
        "We segregate waste as per regulatory norms (sharps, infectious, non-infectious), use labeled bins, and coordinate with licensed disposal partners. Our teams are trained in safe handling of contaminated waste and sharps.:contentReference[oaicite:1]{index=1}",
    },
    {
      question: "Can you service operating theatres and isolation rooms?",
      answer:
        "Absolutely. We are equipped to perform terminal cleaning, UV / fog disinfection, and strict isolation protocols, with staff in full PPE. We coordinate with facility schedule to avoid disruption.",
    },
    {
      question: "What training do your cleaning staff have?",
      answer:
        "Our team is trained in infection control, PPE protocols, bloodborne pathogen safety, handling hazardous materials, and the latest healthcare cleaning best practices. We also pursue certification standards (e.g. CHEST, CIMS).:contentReference[oaicite:2]{index=2}",
    },
    {
      question: "How do you ensure compliance and quality control?",
      answer:
        "We maintain comprehensive documentation (checklists, logs, chemical usage, spot tests), periodic audits, and validation metrics (e.g. ATP swabs). We also report any anomalies immediately.",
    },
    {
      question: "Will your operations interfere with patient care timing?",
      answer:
        "No — we plan around facility schedules (after hours, low traffic windows), coordinate with staff, and use quiet, nonintrusive methods whenever possible.",
    },
  ];

  return (
    <div>
      <p className="text-lg text-secondary mb-8 leading-relaxed">
        Our Medical Center Cleaning service is tailored for clinics, hospitals, diagnostic centers, and healthcare facilities. We deliver stringent hygiene and disinfection protocols, safe waste management, and compliance-focused cleaning — all while respecting your patient flow and operational hours.
      </p>

      <h3 className="text-2xl font-bold text-primary mb-6">
        Professional Hygiene & Safety for Medical Environments
      </h3>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-xl font-bold text-primary mb-4">Key Benefits</h4>
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center text-secondary">
                <CheckCircle className="text-[#2563EB] mr-3 flex-shrink-0" size={16} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-primary mb-4">Our Core Services</h4>
          <ul className="space-y-3">
            {services.slice(0, 5).map((s, i) => (
              <li key={i} className="flex items-center text-secondary">
                <Sparkles className="text-[#3B82F6] mr-3 flex-shrink-0" size={16} />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl font-bold text-primary mb-4">Complete Service Portfolio</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#2563EB]/10 rounded-lg p-3 text-sm text-primary border border-blue-100"
            >
              {s}
            </div>
          ))}
        </div>
      </div>

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

export default MedicalCleaningDetail;
