// src/components/Hero.jsx
import React from "react";
import { Sparkles, Star, Users } from "lucide-react";

// Import the image so Vite fingerprints it (no caching issues)
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

      {/* Tinted overlays for readability (lighter than before) */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(31,71,73,.72)_0%,rgba(31,71,73,.38)_42%,rgba(31,71,73,.22)_68%,rgba(31,71,73,.10)_100%)]" />
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* Soft brand glows */}
      <div className="pointer-events-none absolute -left-48 -bottom-32 h-[26rem] w-[26rem] rounded-full bg-[#4D757B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-56 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#A2B5C3]/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — headline + CTAs */}
          <div className="space-y-8 text-white">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A2B5C3] to-white">
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
                className="inline-flex items-center justify-center rounded-xl bg-white text-[#1f4749] px-8 py-3 font-semibold shadow-[0_10px_30px_rgba(255,255,255,.25)] hover:-translate-y-[1px] hover:shadow-[0_18px_40px_rgba(255,255,255,.30)] transition"
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
                <Users className="text-[#A2B5C3]" size={22} />
                <span className="font-medium text-white/95">1000+ Happy Clients</span>
              </span>
            </div>
          </div>

          {/* Right — angled highlight card */}
          {/* <div className="relative">
            <div className="rotate-[-4deg] rounded-[28px] bg-slate-900/25 p-2 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-[2px]">
              <div className="rotate-[4deg] rounded-2xl bg-white/95 p-8 ring-1 ring-black/5 sm:p-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#4D757B]/12 text-[#4D757B]">
                  <Sparkles size={44} />
                </div>
                <h3 className="mt-5 text-center text-2xl font-bold text-slate-900">
                  Premium Quality
                </h3>
                <p className="mt-2 text-center text-slate-600">
                  Professional cleaning services with guaranteed satisfaction.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-slate-700">
                  <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Fast
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" />
                    Free Quote
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-50 px-2 py-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    Insured
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-x-12 -bottom-12 h-20 rounded-full bg-[#A2B5C3]/30 blur-2xl" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
