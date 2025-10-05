// src/components/Hero.jsx
import React from "react";
import { Star, Users } from "lucide-react";
import heroBg from "../assets/images/hero-cleaning.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-clip">
      {/* Background image */}
      <div
        className="
          absolute inset-0
          bg-no-repeat bg-cover
          bg-center md:bg-[position:60%_center] lg:bg-[position:55%_center]
        "
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Blue-tinted overlays for readability */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,.72)_0%,rgba(15,23,42,.38)_42%,rgba(15,23,42,.22)_68%,rgba(15,23,42,.10)_100%)]" />
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* Soft brand glows */}
      <div className="pointer-events-none absolute -left-48 -bottom-32 h-[26rem] w-[26rem] rounded-full bg-[#1E3A8A]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-56 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#2563EB]/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — headline + CTAs */}
          <div className="space-y-8 text-white">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-white">
                Cleaning
              </span>{" "}
              Services You Can Trust
            </h1>

            <p className="max-w-xl text-lg text-white/90 leading-relaxed">
              Transform your space with premium cleaning for homes and businesses.
              Eco-friendly products, trained professionals, guaranteed results.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-xl btn-accent px-8 py-3 font-semibold shadow-lg hover:-translate-y-[1px] transition"
              >
                Book Now
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur px-8 py-3 font-semibold text-white hover:bg-white/15 transition"
              >
                Get Free Quote
              </a>
            </div>

            <div className="flex items-center gap-10 pt-2">
              <span className="inline-flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-300 fill-yellow-300" />
                ))}
                <span className="font-medium text-white/95">4.9/5 Rating</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="text-[#3B82F6]" size={22} />
                <span className="font-medium text-white/95">100+ Happy Clients</span>
              </span>
            </div>
          </div>

          {/* Right — (kept commented block as-is) */}
        </div>
      </div>
    </section>
  );
}
