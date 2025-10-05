
import React from "react";

/**
 * Reusable top banner for service detail pages.
 * Props:
 *  - image: imported local image path or URL
 *  - title: string
 *  - subtitle: string (optional)
 */
export default function ServiceBanner({ image, title, subtitle }) {
  return (
    <div className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-soft border border-blue-100 mb-8">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/10" />
      <div className="relative z-10 p-6 md:p-10">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-white/90 text-base md:text-lg mt-2 max-w-2xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
