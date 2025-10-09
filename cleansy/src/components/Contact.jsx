// src/components/Contact.jsx
import React from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--bg-soft)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-secondary">
            Ready to experience spotless spaces? We usually reply within an hour.
          </p>

          {/* service areas */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {["Brisbane", "Gold Coast"].map((a) => (
              <span
                key={a}
                className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-primary shadow ring-1 ring-blue-200"
              >
                <MapPin size={14} className="mr-1.5 text-[#2563EB]" />
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact Info Column */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>

            <div className="space-y-7">
              <div className="flex items-start">
                <div className="mr-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB] text-white shadow-lg">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <a href="tel:+15551234567" className="text-secondary hover:text-primary">
                    +61 432 300 733
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB] text-white shadow-lg">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <a href="mailto:tscleaningfacility@gmail.com" className="text-secondary hover:text-primary">
                    tscleaningfacility@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB] text-white shadow-lg">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Address</p>
                  <p className="text-secondary">Herses Rd, Eagleby QLD 4207, Australia</p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              <a
                href="/#quote"
                className="group inline-flex items-center justify-center rounded-xl btn-accent px-4 py-3 font-semibold shadow"
              >
                Request a Free Quote
                <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+61 432 300 733"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold text-primary shadow ring-1 ring-blue-200 hover:bg-blue-50"
              >
                Chat Now
              </a>
              <a
                href="mailto:info@trueshine.com"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold text-primary shadow ring-1 ring-blue-200 hover:bg-blue-50"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* CTA card */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-blue-200">
              <h3 className="text-2xl font-bold text-primary">Prefer a detailed estimate?</h3>
              <p className="mt-2 text-secondary">
                Use our streamlined request form and we’ll get back to you with a tailored quote.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-primary">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-[#2563EB]" /> Commercial / Residential / Deep Clean
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-[#2563EB]" /> Eco-friendly products available
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-[#2563EB]" /> Brisbane & Gold Coast coverage
                </li>
              </ul>

              <a
                href="/#quote"
                className="mt-8 inline-flex items-center justify-center rounded-xl btn-accent px-5 py-3 font-semibold shadow-lg hover:opacity-95"
              >
                Go to Quote Form
                <ChevronRight size={18} className="ml-1" />
              </a>

              <p className="mt-3 text-xs text-secondary">
                We respect your privacy. Your details are only used to respond to your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
