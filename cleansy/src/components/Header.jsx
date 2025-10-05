import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const logo = new URL("../assets/images/Logo.png", import.meta.url).href;

  return (
    <header className="sticky top-0 z-50 shadow bg-brand-gradient">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* === Brand Section === */}
        <a href="/#home" className="flex items-center gap-3 min-w-0">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-white/20 shrink-0">
            <img
              src={logo}
              alt="TRUE SHINE Logo"
              className="h-12 w-12 rounded object-contain"
            />
          </div>

          {/* Company Name Hierarchy */}
          <div className="leading-tight">
            <div
              className="
                text-white font-extrabold
                text-lg sm:text-xl md:text-2xl
                tracking-wide uppercase
                [font-family:'Cinzel',serif]
              "
            >
              TRUE SHINE
            </div>
            <div
              className="
                text-white/80 text-[11px] sm:text-[12px] md:text-[13px]
                tracking-wide
              "
            >
              Cleaning and Gardening Facility Pty Ltd
            </div>
          </div>
        </a>

        {/* === Desktop Navigation === */}
        <div className="hidden md:flex items-center gap-8 text-[15px]">
          {[
            ["Home", "/#home"],
            ["Services", "/#services"],
            ["About", "/#about"],
            ["Testimonials", "/#testimonials"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-white/90 hover:text-white font-medium transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* === Call to Action Button === */}
        <div className="hidden md:block">
          <a
            href="/#quote"
            className="rounded-lg btn-accent px-5 py-2.5 font-semibold shadow hover:brightness-95 transition"
          >
            Get Quote
          </a>
        </div>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* === Mobile Navigation Menu === */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-[#1E3A8A] border-t border-white/10">
          <div className="grid gap-3">
            {[
              ["Home", "/#home"],
              ["Services", "/#services"],
              ["About", "/#about"],
              ["Testimonials", "/#testimonials"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="/#quote"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg btn-accent px-4 py-2 font-semibold shadow"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
