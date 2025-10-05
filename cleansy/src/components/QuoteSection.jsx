// src/components/QuoteSection.jsx
import React, { useState } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import emailjs from "emailjs-com";

const initial = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  honeypot: "", // hidden anti-bot
};

export default function QuoteSection() {
  const [formData, setFormData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) =>
    setFormData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // bot trap
    if (formData.honeypot) {
      setStatus({ type: "success", msg: "Thanks! We'll be in touch." });
      setFormData(initial);
      return;
    }

    // basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setStatus({ type: "error", msg: "Please fill all required fields." });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone || "N/A",
        service: formData.service || "N/A",
        message: formData.message,
      };

      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (res.status !== 200) throw new Error("Failed to send. Please try again.");
      setStatus({ type: "success", msg: "Thank you! Your request has been sent." });
      setFormData(initial);
    } catch (err) {
      setStatus({
        type: "error",
        msg: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="relative bg-[var(--bg-soft)]">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-transparent to-[#F0F9FF]" />

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            Request a Free Quote
          </h2>
          <p className="mt-3 text-secondary">
            Tell us a few details about your space and we’ll tailor a quote for you.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-blue-200">
          <form onSubmit={handleSubmit} className="grid gap-5">
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid">
                <label className="text-sm font-medium text-primary">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="mt-1 w-full rounded-lg border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  required
                />
              </div>
              <div className="grid">
                <label className="text-sm font-medium text-primary">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid">
                <label className="text-sm font-medium text-primary">Your Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="mt-1 w-full rounded-lg border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
              <div className="grid">
                <label className="text-sm font-medium text-primary">Select Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  required
                >
                  <option value="">Choose one</option>
                  <option value="Commercial Cleaning">Commercial Cleaning</option>
                  <option value="Shopping Center Cleaning">Shopping Center Cleaning</option>
                  <option value="Medical Cleaningg">Medical Cleaning</option>
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="School Cleaning">School Cleaning</option>
                  <option value="Childcare Cleaning">Childcare Cleaning</option>
                  <option value="Fitness Cleaning">Fitness Cleaning</option>
                  <option value="Builders Clean">Builders Clean</option>
                </select>
              </div>
            </div>

            <div className="grid">
              <label className="text-sm font-medium text-primary">
                Tell us about your cleaning needs… *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Size, frequency, areas to focus on, access times, etc."
                className="mt-1 w-full rounded-lg border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-xl btn-accent px-6 py-3 font-semibold text-white shadow-lg hover:opacity-95 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                "Send Request"
              )}
            </button>

            <div className="mt-1 flex items-center text-xs text-secondary">
              <ShieldCheck size={14} className="mr-1 text-[#2563EB]" />
              We respect your privacy and don’t share your details.
            </div>

            {status.msg && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-[#2563EB]" : "text-red-600"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
