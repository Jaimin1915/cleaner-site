import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Phone, X, Copy, Check } from "lucide-react";

const cleanTel = (t) => t.replace(/[^+\d]/g, "");

export default function FloatingPhone({
  tel = "+1 (555) 987-6543",
  label = "Talk to True Shine",
  color = "#16a34a",                  // main green (button + call)
  accent = "rgba(22,163,74,.35)",     // glow ring
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const telHref = `tel:${cleanTel(tel)}`;
  const portalNode = useRef(document.createElement("div"));

  // Mount portal node once, fixed bottom-right
  useEffect(() => {
    const node = portalNode.current;
    node.style.position = "fixed";
    node.style.right = "20px";
    node.style.bottom = "20px";
    node.style.zIndex = "9999";
    node.style.pointerEvents = "none"; // only inner content gets events
    document.body.appendChild(node);
    return () => document.body.removeChild(node);
  }, []);

  // Close on clicking anywhere outside
  useEffect(() => {
    const onDown = (e) => {
      if (!portalNode.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const ui = (
    <div className="relative" style={{ pointerEvents: "auto" }}>
      {/* Slide-up card (anchored above the button) */}
      <div
        className={[
          "absolute right-0 bottom-16",      // sit above the button
          "transition-transform duration-300 ease-out",
          open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="w-[285px] rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 p-3">
          <div className="text-slate-900 font-semibold">{label}</div>
          <div className="mt-0.5 text-sm text-slate-600">{tel}</div>

          <div className="mt-3 flex items-center gap-2">
            <a
              href={telHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-white font-semibold transition-colors"
              style={{ backgroundColor: color }}
            >
              <Phone size={18} />
              Call now
            </a>

            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(tel);
                setCopied(true);
                setTimeout(() => setCopied(false), 1200);
              }}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
              title="Copy number"
            >
              {copied ? <Check size={18} style={{ color }} /> : <Copy size={18} className="text-slate-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Toggle button (stays fixed in the same place) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close phone panel" : "Open phone panel"}
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl focus:outline-none"
        style={{ backgroundColor: color, boxShadow: `0 10px 20px ${accent}` }}
      >
        {open ? <X size={26} /> : <Phone size={26} />}
        {!open && (
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ boxShadow: `0 0 0 3px ${accent}`, borderRadius: 9999 }}
          />
        )}
      </button>
    </div>
  );

  return createPortal(ui, portalNode.current);
}
