import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpeg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow bg-gradient-to-r from-[#2f6e71] to-[#1f4749]">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="/#home" className="flex items-center gap-3">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <img
              src={logo}  // ✅ make sure Logo.png is inside /public
              alt="True Shine Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="leading-tight">
            <div className="text-white font-extrabold text-xl tracking-tight">
              TRUE SHINE
            </div>
            <div className="text-slate-200 text-[13px]">
              Professional Cleaning Services
            </div>
          </div>
        </a>

        {/* Desktop nav */}
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
              className="text-slate-100 hover:text-white font-medium transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/#quote"
            className="rounded-lg bg-white text-[#2f6e71] px-5 py-2.5 font-semibold shadow hover:bg-slate-100 transition"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-[#2f6e71] border-t border-slate-600">
          <div className="grid gap-3">
            <a href="/#home" onClick={() => setOpen(false)} className="text-white">
              Home
            </a>
            <a href="/#services" onClick={() => setOpen(false)} className="text-white">
              Services
            </a>
            <a href="/#about" onClick={() => setOpen(false)} className="text-white">
              About
            </a>
            <a href="/#testimonials" onClick={() => setOpen(false)} className="text-white">
              Testimonials
            </a>
            <a href="/#contact" onClick={() => setOpen(false)} className="text-white">
              Contact
            </a>
            <a
              href="/#quote"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-white text-[#2f6e71] px-4 py-2 font-semibold shadow"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
