// src/components/StepsStrip.jsx
import React, { useId, useMemo } from "react";
import { Star, PhoneCall, FileText } from "lucide-react";

import step1Avif from "../assets/images/booking-desk.avif";
import step1Webp from "../assets/images/booking-desk.webp";
import step1Jpg  from "../assets/images/booking-desk.jpg";

import step2Jpg  from "../assets/images/team-cleaning.jpg";

import step3Avif from "../assets/images/guarantee.avif";
import step3Webp from "../assets/images/guarantee.webp";
import step3Jpg  from "../assets/images/guarantee.jpg";

let _supports = { avif: false, webp: false };
(function detectFormats() {
  try {
    const c = document.createElement("canvas");
    // WebP check
    _supports.webp = c.toDataURL && c.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    // AVIF check (not supported in all canvases, so guard)
    try {
      _supports.avif = c.toDataURL && c.toDataURL("image/avif").indexOf("data:image/avif") === 0;
    } catch {
      _supports.avif = false;
    }
  } catch {
    _supports = { avif: false, webp: false };
  }
})();

function bestSource(srcs) {
  if (_supports.avif && srcs.avif) return srcs.avif;
  if (_supports.webp && srcs.webp) return srcs.webp;
  return srcs.jpg; // fallback
}

export default function StepsStrip() {
  // Smooth scroll to Quote section and focus first input
  const handleScrollToQuote = () => {
    const section = document.getElementById("quote");
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      const firstInput = section.querySelector('input[name="name"]');
      if (firstInput) firstInput.focus({ preventScroll: true });
    }, 400);
  };

  const items = useMemo(() => ([
    {
      title: "REQUEST QUOTE",
      text:
        "Tell us about your site — office, school, clinic, or workspace. Get a same-day quote and flexible start options tailored to your needs.",
      images: { avif: step1Avif, webp: step1Webp, jpg: step1Jpg },
    },
    {
      title: "WE CLEAN",
      text:
        "Trained, background-checked commercial cleaners use detailed checklists, audits, and eco-friendly supplies.",
      images: { jpg: step2Jpg },
    },
    {
      title: "24-HOUR CANCELLATION & SATISFACTION GUARANTEE",
      text:
        "Cancel up to 24 hours before your scheduled clean at no charge. Not 100% satisfied? We’ll return and make it right.",
      images: { avif: step3Avif, webp: step3Webp, jpg: step3Jpg },
    },
  ]), []);

  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white py-16">
      {/* soft blue glows */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl bg-sky-100" />
        <div className="absolute right-0 top-16 h-64 w-64 rounded-full blur-3xl bg-blue-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-slate-800">
          How it works
        </h2>

        {/* Step Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((it, idx) => (
            <StepCard key={idx} {...it} index={idx + 1} />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {/* Call Now */}
          <a
            href="tel:" // replace with your real number
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3 text-white text-lg font-semibold shadow-md 
                       transition-all duration-300 hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <PhoneCall className="h-5 w-5" />
            Call Now
          </a>

          {/* Get a Quote */}
          <button
            onClick={handleScrollToQuote}
            className="inline-flex items-center gap-2 rounded-full border-2 border-sky-600 px-8 py-3 text-lg font-semibold text-sky-700 
                       transition-all duration-300 hover:bg-sky-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText className="h-5 w-5" />
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------- Step Card ------------------- */
function StepCard({ index, title, text, images }) {
  const uid = useId();
  const gradId = `gradBlue-${uid}`;
  const clipId = `blobClip-${uid}`;
  const imgHref = bestSource(images);

  return (
    <div
      className="group relative block rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-sky-200
                 hover:bg-sky-50/50"
    >
      {/* Blob + Image */}
      <div className="relative mx-auto mb-6 aspect-[4/3] w-full max-w-[520px]" aria-hidden="true">
        <svg viewBox="0 0 600 450" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#DBEAFE" />
            </linearGradient>

            <clipPath id={clipId}>
              <path d="M113,33 C210,-20 409,9 496,99 C561,167 559,276 499,343 C431,420 308,462 215,430 C143,406 66,360 44,289 C19,208 35,90 113,33 Z" />
            </clipPath>
          </defs>

          {/* Gradient blob */}
          <g transform="translate(50,25)">
            <path
              d="M113,33 C210,-20 409,9 496,99 C561,167 559,276 499,343 C431,420 308,462 215,430 C143,406 66,360 44,289 C19,208 35,90 113,33 Z"
              fill={`url(#${gradId})`}
            />
          </g>

          {/* Clipped image (best format picked at runtime) */}
          <image
            href={imgHref}
            x="50"
            y="25"
            width="500"
            height="400"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${clipId})`}
          />

          {/* Sparkles */}
          <g className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkle x={480} y={30} />
            <Sparkle x={520} y={90} />
            <Rays x={520} y={360} />
            <Rays x={90} y={360} />
          </g>
        </svg>
      </div>

      {/* Number + Title Centered */}
      <div className="mb-3 flex flex-col items-center justify-center">
        <div className="mb-2 flex items-center justify-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700 shadow-sm transition-transform duration-300 group-hover:scale-110">
            {index}
          </span>
        </div>
        <h3 className="text-center text-lg font-extrabold text-slate-900 leading-snug">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mx-auto mb-2 max-w-[28rem] text-center text-slate-600">{text}</p>
    </div>
  );
}

/* ------------------- Sparkle & Rays ------------------- */
function Sparkle({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <Star className="h-4 w-4 text-sky-400" />
    </g>
  );
}

function Rays({ x = 0, y = 0 }) {
  return (
    <g transform={`translate(${x},${y})`} stroke="#60A5FA" strokeWidth="8">
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i * 36 * Math.PI) / 180;
        const r1 = 10, r2 = 34;
        return (
          <line
            key={i}
            x1={Math.cos(a) * r1}
            y1={Math.sin(a) * r1}
            x2={Math.cos(a) * r2}
            y2={Math.sin(a) * r2}
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}
