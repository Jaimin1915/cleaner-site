// src/pages/ServicePage.jsx
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

// Detail components
import OfficeCleaningDetail from "../services/OfficeCleaningDetail.jsx";
import SchoolCleaningDetail from "../services/SchoolCleaningDetail.jsx";
import ChildcareCleaningDetail from "../services/ChildcareCleaningDetail.jsx";
import FitnessCentreDetail from "../services/FitnessCentreDetail.jsx";
import BuildersCleanDetail from "../services/BuildersCleanDetail.jsx";
import ShoppingCenterCleaningDetail from "../services/ShoppingCenterCleaningDetail.jsx";
import CommrercialCleaningDetail from '../services/CommercialCleaningDetail.jsx';
import MedicalCleaningDetail from '../services/MedicalCleaningDetail.jsx';

// ---- Local images: import AVIF, WebP, JPG (same folder, same basename) ----
import shoppingAvif from "../assets/images/shoppingImg.avif";
import shoppingWebp from "../assets/images/shoppingImg.webp";
import shoppingJpg  from "../assets/images/shoppingImg.jpg";

import medicalAvif  from "../assets/images/medicalImg.avif";
import medicalWebp  from "../assets/images/medicalImg.webp";
import medicalJpg   from "../assets/images/medicalImg.jpg";

import childcareAvif from "../assets/images/childcareImg.avif";
import childcareWebp from "../assets/images/childcareImg.webp";
import childcareJpg  from "../assets/images/childcareImg.jpg";

import commercialAvif from "../assets/images/commercial.avif";
import commercialWebp from "../assets/images/commercial.webp";
import commercialJpg  from "../assets/images/commercial.jpg";

import schoolAvif from "../assets/images/schoolImg.avif";
import schoolWebp from "../assets/images/schoolImg.webp";
import schoolJpg  from "../assets/images/schoolImg.jpg";

import fitnessAvif from "../assets/images/fitness.avif";
import fitnessWebp from "../assets/images/fitness.webp";
import fitnessJpg  from "../assets/images/fitness.jpg";

import builderAvif from "../assets/images/builderImg.avif";
import builderWebp from "../assets/images/builderImg.webp";
import builderJpg  from "../assets/images/builderImg.jpg";

// --------------------------------------------------------------------------

const ServicePage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Unsplash (remote) office image; ask Unsplash for webp when possible
  const officeRemoteJpg =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
  const officeRemoteWebp = `${officeRemoteJpg}&fm=webp`;

  const services = [
    {
      id: 1,
      slug: "office-cleaning",
      title: "Office Cleaning",
      shortDescription: "Professional Office Cleaning Services...",
      images: { avif: null, webp: officeRemoteWebp, jpg: officeRemoteJpg },
    },
    {
      id: 2,
      slug: "school-cleaning",
      title: "School Cleaning",
      shortDescription: "Comprehensive School Cleaning Services...",
      images: { avif: schoolAvif, webp: schoolWebp, jpg: schoolJpg },
    },
    {
      id: 3,
      slug: "childcare-cleaning",
      title: "Childcare Cleaning",
      shortDescription: "Specialized Childcare cleaning Services...",
      images: { avif: childcareAvif, webp: childcareWebp, jpg: childcareJpg },
    },
    {
      id: 4,
      slug: "fitness-centres",
      title: "Fitness Centres",
      shortDescription: "Premium GYM Cleaning Services...",
      images: { avif: fitnessAvif, webp: fitnessWebp, jpg: fitnessJpg },
    },
    {
      id: 5,
      slug: "builders-clean",
      title: "Builders Clean",
      shortDescription: "Expert post-Construction Cleaning Services...",
      images: { avif: builderAvif, webp: builderWebp, jpg: builderJpg },
    },
    {
      id: 8,
      slug: "shopping-center-cleaning",
      title: "Shopping Center Cleaning",
      shortDescription: "Professional Shopping Center Cleaning Services...",
      images: { avif: shoppingAvif, webp: shoppingWebp, jpg: shoppingJpg },
    },
    {
      id: 6,
      slug: "commercial-cleaning",
      title: "Commercial Cleaning",
      shortDescription: "Best Commercial Cleaning Services...",
      images: { avif: commercialAvif, webp: commercialWebp, jpg: commercialJpg },
    },
    {
      id: 7,
      slug: "medical-cleaning",
      title: "Medical Cleaning",
      shortDescription: "Best Choice for Medical Cleaning Services...",
      images: { avif: medicalAvif, webp: medicalWebp, jpg: medicalJpg },
    },
  ];

  const service = services.find((s) => s.slug === slug);

  const renderServiceDetail = () => {
    if (!service) return null;
    switch (service.id) {
      case 1: return <OfficeCleaningDetail />;
      case 2: return <SchoolCleaningDetail />;
      case 3: return <ChildcareCleaningDetail />;
      case 4: return <FitnessCentreDetail />;
      case 5: return <BuildersCleanDetail />;
      case 8: return <ShoppingCenterCleaningDetail />;
      case 6: return <CommrercialCleaningDetail />;
      case 7: return <MedicalCleaningDetail />;
      default: return null;
    }
  };

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--bg-soft)]">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <picture>
          {/* Prefer AVIF, then WebP, then JPG */}
          {service.images.avif && <source srcSet={service.images.avif} type="image/avif" />}
          {service.images.webp && <source srcSet={service.images.webp} type="image/webp" />}
          <img
            src={service.images.jpg || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"   // NOTE: camelCase prop in React
            decoding="async"
            sizes="100vw"
          />
        </picture>

        {/* overlay shifted to brand navy */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 max-w-4xl">
          <div className="flex items-center space-x-6 mb-4">
            <h1 className="text-5xl font-bold text-white">{service.title}</h1>
          </div>
          <p className="text-xl text-white/90 leading-relaxed">{service.shortDescription}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {renderServiceDetail()}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#1E3A8A]/10 to-[#2563EB]/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-primary mb-6">Ready to Get Started?</h3>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let us take care of your {service.title.toLowerCase()} needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote"
              className="btn-accent px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+61 432 300 733"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 font-semibold text-primary shadow ring-1 ring-blue-200 hover:bg-blue-50"
            >
              Chat Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
