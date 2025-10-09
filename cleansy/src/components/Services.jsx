// src/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Clock, Award, Droplets } from "lucide-react";

// ── Local images: import AVIF, WebP, JPG/JPEG (same basename & folder) ──
import commercialAvif from "../assets/images/commercialcleaning.avif";
import commercialWebp from "../assets/images/commercialcleaning.webp";
import commercialJpg  from "../assets/images/commercialcleaning.jpg";

import medicalAvif from "../assets/images/medical.avif";
import medicalWebp from "../assets/images/medical.webp";
import medicalJpg  from "../assets/images/medical.jpg";

import shoppingAvif from "../assets/images/shopping.avif";
import shoppingWebp from "../assets/images/shopping.webp";
import shoppingJpg  from "../assets/images/shopping.jpg";

// childcare was .jpeg in your file; keep same basename, add .avif/.webp
import childcareAvif from "../assets/images/childcarecleaning.avif";
import childcareWebp from "../assets/images/childcarecleaning.webp";
import childcareJpeg from "../assets/images/childcarecleaning.jpeg";

import officeAvif from "../assets/images/office.avif";
import officeWebp from "../assets/images/office.webp";
import officeJpg  from "../assets/images/office.jpg";

import builderAvif from "../assets/images/builder.avif";
import builderWebp from "../assets/images/builder.webp";
import builderJpg  from "../assets/images/builder.jpg";

const Services = () => {
  // Remote images (Unsplash) for School & Fitness — ask for webp via &fm=webp
  const schoolJpg =
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const schoolWebp = `${schoolJpg}&fm=webp`;

  const fitnessJpg =
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const fitnessWebp = `${fitnessJpg}&fm=webp`;

  const services = [
    {
      id: 6,
      title: "Commercial Cleaning",
      shortDescription:
        "Comprehensive cleaning solutions for offices, shops, and commercial spaces, ensuring a spotless and professional environment every day",
      images: { avif: commercialAvif, webp: commercialWebp, jpg: commercialJpg },
      url: "/services/commercial-cleaning",
    },
    {
      id: 8,
      title: "Shopping Center Cleaning",
      shortDescription:
        "Comprehensive mall and retail cleaning that keeps high-traffic spaces spotless, safe, welcoming, and creates a positive shopping experience for all visitors",
      images: { avif: shoppingAvif, webp: shoppingWebp, jpg: shoppingJpg },
      url: "/services/shopping-center-cleaning",
    },
    {
      id: 7,
      title: "Medical Cleaning",
      shortDescription:
        "Specialized cleaning for clinics and healthcare facilities, ensuring hygiene, safety, compliance, and a healthier environment for patients and staff",
      images: { avif: medicalAvif, webp: medicalWebp, jpg: medicalJpg },
      url: "/services/medical-cleaning",
    },
    {
      id: 1,
      title: "Office Cleaning",
      shortDescription:
        "Professional office cleaning services that take the hassle off you and into the hands of our experienced cleaning staff",
      images: { avif: officeAvif, webp: officeWebp, jpg: officeJpg },
      url: "/services/office-cleaning",
    },
    {
      id: 2,
      title: "School Cleaning",
      shortDescription:
        "Comprehensive school cleaning services ensuring educational institutions maintain a clean and hygienic environment for learning",
      images: { avif: null, webp: schoolWebp, jpg: schoolJpg }, // remote
      url: "/services/school-cleaning",
    },
    {
      id: 3,
      title: "Childcare Cleaning",
      shortDescription:
        "Specialized childcare cleaning services ensuring health, safety, and well-being of children in childcare centers",
      images: { avif: childcareAvif, webp: childcareWebp, jpg: childcareJpeg },
      url: "/services/childcare-cleaning",
    },
    {
      id: 4,
      title: "Fitness Centres",
      shortDescription:
        "Premium gym cleaning services ensuring your fitness center is up to the highest quality health standards",
      images: { avif: null, webp: fitnessWebp, jpg: fitnessJpg }, // remote
      url: "/services/fitness-centres",
    },
    {
      id: 5,
      title: "Builders Clean",
      shortDescription:
        "Expert post-construction cleaning services to remove debris, dust, and grime, making your site spotless and ready",
      images: { avif: builderAvif, webp: builderWebp, jpg: builderJpg },
      url: "/services/builders-clean",
    },
  ];

  const ServiceCard = ({ svc }) => (
    <Link
      to={svc.url}
      aria-label={`View ${svc.title} service`}
      className="
        group relative block h-full rounded-2xl p-[1px]
        bg-slate-200 transition-all duration-500
        hover:bg-gradient-to-br hover:from-[#2563EB]/70 hover:to-[#06B6D4]/70
        focus:outline-none focus:ring-2 focus:ring-[#2563EB]
      "
    >
      {/* Inner card */}
      <div
        className="
          rounded-[inherit] bg-white h-full overflow-hidden
          shadow-sm transition-all duration-500
          group-hover:shadow-2xl group-hover:-translate-y-1
        "
      >
        {/* Media */}
        <div className="relative h-48 w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <picture>
            {svc.images?.avif && <source srcSet={svc.images.avif} type="image/avif" />}
            {svc.images?.webp && <source srcSet={svc.images.webp} type="image/webp" />}
            <img
              src={svc.images?.jpg || "/placeholder.svg"}
              alt={svc.title}
              loading="lazy"           // defer offscreen images
              decoding="async"
              fetchPriority="low"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </picture>

          {/* Darken image slightly on hover */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

          {/* One-time sheen sweep */}
          <div
            className="
              pointer-events-none absolute inset-y-0 -left-1/3 w-1/3
              bg-gradient-to-r from-white/0 via-white/50 to-white/0
              skew-x-[-20deg]
              translate-x-[-120%] group-hover:translate-x-[280%]
              transition-transform duration-700
            "
          />
        </div>

        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-lg font-extrabold text-[#0f172a]">
            <span className="relative inline-block">
              {svc.title}
              {/* Animated underline */}
              <span
                className="
                  absolute -bottom-1 left-0 h-0.5 w-0 bg-[#2563EB]
                  transition-all duration-500 group-hover:w-12
                "
              />
            </span>
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-[#475569]">
            {svc.shortDescription}
          </p>

          {/* CTA text */}
          <div
            className="
              mt-4 inline-flex items-center gap-2 font-semibold text-[#1d4ed8]
              transition-all duration-500
              group-hover:translate-x-1
            "
          >
            Learn More
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Floating arrow button (slides in) */}
          <div
            className="
              absolute right-4 bottom-6 h-9 w-9 rounded-full
              border border-slate-200 bg-white shadow-sm
              flex items-center justify-center
              opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-500
            "
          >
            <svg
              className="h-5 w-5 text-[#2563EB] transition-transform duration-500 group-hover:translate-x-0.5"
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Our Professional Cleaning Services
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-4xl mx-auto">
            We offer comprehensive cleaning solutions tailored to your specific needs, using
            eco-friendly products and professional techniques.
          </p>
        </div>

        {/* Services Grid (2 rows × 4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Why Choose Our Cleaning Services?
          </h3>
          <p className="text-lg text-secondary mb-12 max-w-3xl mx-auto">
            We customize our services to fit each business's unique needs. We promise to bring
            affordable, top-quality cleaning that makes your workspace safe and productive.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2">Fully Licensed & Insured</h4>
              <p className="text-sm text-secondary">
                Licensed, insured & bonded for complete protection
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2">Flexible Scheduling</h4>
              <p className="text-sm text-secondary">
                Available 24/7 to fit your business schedule
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2">100% Satisfaction Guarantee</h4>
              <p className="text-sm text-secondary">
                We promise to meet and exceed your expectations
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-brand-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Droplets className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-primary mb-2">Eco-Friendly Products</h4>
              <p className="text-sm text-secondary">
                Green cleaning products for safe environments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
