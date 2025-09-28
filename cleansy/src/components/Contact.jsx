// src/components/Contact.jsx
import React from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Ready to experience spotless spaces? We usually reply within an hour.
          </p>

          {/* service areas */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {["Brisbane", "Gold Coast"].map((a) => (
              <span
                key={a}
                className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow ring-1 ring-slate-200"
              >
                <MapPin size={14} className="mr-1.5 text-emerald-600" />
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact Info Column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>

            <div className="space-y-7">
              <div className="flex items-start">
                <div className="mr-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 to-emerald-600 text-white shadow-lg">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a href="tel:+15551234567" className="text-slate-600 hover:text-slate-800">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 to-emerald-600 text-white shadow-lg">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href="mailto:info@trueshine.com" className="text-slate-600 hover:text-slate-800">
                    info@trueshine.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 to-emerald-600 text-white shadow-lg">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="text-slate-600">123 Clean Street, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-700 to-emerald-600 text-white shadow-lg">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Business Hours</p>
                  <p className="text-slate-600">
                    Mon–Fri: 8:00 AM – 6:00 PM <br /> Sat: 9:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              <a
                href="/#quote"
                className="group inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-white font-semibold shadow hover:bg-slate-800"
              >
                Request a Free Quote
                <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 shadow ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Call Now
              </a>
              <a
                href="mailto:info@trueshine.com"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 shadow ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Instead of second big form, show a clean CTA card that points to the main quote form */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-slate-200">
              <h3 className="text-2xl font-bold text-slate-900">Prefer a detailed estimate?</h3>
              <p className="mt-2 text-slate-600">
                Use our streamlined request form and we’ll get back to you with a tailored quote.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" /> Commercial / Residential / Deep Clean
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" /> Eco-friendly products available
                </li>
                <li className="flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" /> Brisbane & Gold Coast coverage
                </li>
              </ul>

              <a
                href="/#quote"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 font-semibold text-white shadow-lg hover:opacity-95"
              >
                Go to Quote Form
                <ChevronRight size={18} className="ml-1" />
              </a>

              <p className="mt-3 text-xs text-slate-500">
                We respect your privacy. Your details are only used to respond to your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
