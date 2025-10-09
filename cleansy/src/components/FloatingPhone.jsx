import React, { useEffect, useRef, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { Phone, X, Copy, Check, MessageSquare, MessageCircleMore, Mail } from "lucide-react";

const cleanTel = (t) => t.replace(/[^+\d]/g, "");

export default function FloatingPhone({
  tel = "+61 432 300 733",
  label = "Talk to True Shine",
  color = "var(--accent-blue)",          // #3B82F6
  accent = "rgba(37, 99, 235, .35)",
  chat = {
    whatsapp: { text: "Hi! I’d like to know more about your services." },
    sms: { body: "Hello! I’m interested in booking a clean." },
    link: "/contact",
    email: "tscleaningfacility@gmail.com",
    label: "Chat with us",
  },
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState("call"); // 'call' | 'chat'
  const telHref = `tel:${cleanTel(tel)}`;
  const portalNode = useRef(typeof document !== "undefined" ? document.createElement("div") : null);

  const chatCfg = useMemo(() => {
    const cfg = typeof chat === "object" ? chat : {};
    return {
      whatsapp: cfg.whatsapp ?? false,
      sms: cfg.sms ?? false,
      link: cfg.link ?? null,
      email: cfg.email ?? null,
      label: cfg.label ?? "Chat with us",
    };
  }, [chat]);

  const waHref = useMemo(() => {
    if (!chatCfg.whatsapp) return null;
    const preset =
      typeof chatCfg.whatsapp === "object" && chatCfg.whatsapp?.text
        ? chatCfg.whatsapp.text
        : "Hi! I’d like to chat about your services.";
    const msg = encodeURIComponent(preset);
    const num = cleanTel(tel).replace(/^\+/, ""); // wa.me requires no plus sign
    return `https://wa.me/${num}?text=${msg}`;
  }, [chatCfg.whatsapp, tel]);

  const smsHref = useMemo(() => {
    if (!chatCfg.sms) return null;
    const body =
      typeof chatCfg.sms === "object" && chatCfg.sms?.body
        ? encodeURIComponent(chatCfg.sms.body)
        : encodeURIComponent("Hello! I’m interested in your services.");
    // iOS uses &body, Android uses ?body; most modern UAs accept ?body
    return `sms:${cleanTel(tel)}?body=${body}`;
  }, [chatCfg.sms, tel]);

  // Mount portal node once, fixed bottom-right
  useEffect(() => {
    if (!portalNode.current) return;
    const node = portalNode.current;
    node.style.position = "fixed";
    node.style.right = "20px";
    node.style.bottom = "20px";
    node.style.zIndex = "9999";
    node.style.pointerEvents = "none";
    document.body.appendChild(node);
    return () => document.body.removeChild(node);
  }, []);

  // Close on clicking anywhere outside
  useEffect(() => {
    const onDown = (e) => {
      if (!portalNode.current) return;
      if (!portalNode.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const toggle = () => setOpen((v) => !v);

  const Panel = (
    <div className="relative" style={{ pointerEvents: "auto" }}>
      {/* Slide-up panel */}
      <div
        className={[
          "absolute right-0 bottom-16 w-[300px]",
          "transition-all duration-300 ease-out",
          open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-blue-200/60 p-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="text-primary font-semibold">{label}</div>
            <button
              className="p-1 rounded-md hover:bg-gray-100"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          {/* Tabs */}
          <div className="mt-3 grid grid-cols-2 gap-1 p-1 rounded-xl bg-gray-100">
            <button
              className={[
                "text-sm font-medium py-2 rounded-lg transition",
                tab === "call" ? "bg-white shadow ring-1 ring-gray-200" : "hover:bg-gray-200/60",
              ].join(" ")}
              onClick={() => setTab("call")}
            >
              Call
            </button>
            <button
              className={[
                "text-sm font-medium py-2 rounded-lg transition",
                tab === "chat" ? "bg-white shadow ring-1 ring-gray-200" : "hover:bg-gray-200/60",
              ].join(" ")}
              onClick={() => setTab("chat")}
            >
              Chat
            </button>
          </div>

          {/* Content */}
          <div className="mt-3">
            {tab === "call" ? (
              <div>
                <div className="text-sm text-secondary">Direct line</div>
                <div className="text-lg font-semibold tracking-wide">{tel}</div>

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
                    className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-3 py-2 hover:bg-blue-50"
                    title="Copy number"
                  >
                    {copied ? <Check size={18} style={{ color }} /> : <Copy size={18} className="text-secondary" />}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-sm text-secondary">{chatCfg.label}</div>

                {/* WhatsApp */}
                {waHref && (
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg border px-3 py-2 hover:bg-green-50"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircleMore size={18} />
                      <span className="font-medium">WhatsApp</span>
                    </div>
                    <span className="text-xs opacity-70">Opens chat</span>
                  </a>
                )}

                {/* Email fallback */}
                {chatCfg.email && (
                  <a
                    href={`mailto:${chatCfg.email}`}
                    className="flex items-center justify-between rounded-lg border px-3 py-2 hover:bg-amber-50"
                  >
                    <div className="flex items-center gap-2">
                      <Mail size={18} />
                      <span className="font-medium">Email</span>
                    </div>
                    <span className="text-xs opacity-70">{chatCfg.email}</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toggle FAB */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close contact panel" : "Open contact panel"}
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl focus:outline-none"
        style={{ backgroundColor: color, boxShadow: `0 10px 20px ${accent}` }}
      >
        {open ? <X size={26} /> : tab === "call" ? <Phone size={26} /> : <MessageSquare size={24} />}
        {!open && (
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ boxShadow: `0 0 0 3px ${accent}`, borderRadius: 9999 }}
          />
        )}
      </button>
    </div>
  );

  return portalNode.current ? createPortal(Panel, portalNode.current) : null;
}
