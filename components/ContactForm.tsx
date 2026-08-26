"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const FormFields = ({
  form,
  setForm,
  status,
  handleSubmit,
}: {
  form: { name: string; email: string; phone: string; message: string };
  setForm: (f: { name: string; email: string; phone: string; message: string }) => void;
  status: "idle" | "loading" | "success" | "error";
  handleSubmit: (e: React.FormEvent) => void;
}) => (
  <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 space-y-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
          Your Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="John Smith"
          className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="085 000 0000"
          className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 transition-colors"
        />
      </div>
    </div>
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
        Email Address <span className="text-red-400">*</span>
      </label>
      <input
        type="email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="you@example.com"
        className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 transition-colors"
      />
    </div>
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
        What do you need? <span className="text-red-400">*</span>
      </label>
      <textarea
        required
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Tell us about your project — what needs doing, where, and any other details..."
        className="w-full border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"
      />
    </div>
    {status === "error" && (
      <p className="text-red-500 text-xs">Something went wrong. Please try again or call us directly.</p>
    )}
    <button
      type="submit"
      disabled={status === "loading"}
      className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      style={{ backgroundColor: "var(--green)" }}
    >
      {status === "loading" ? "Sending..." : <><Send size={15} /> Send My Request</>}
    </button>
    <p className="text-center text-xs text-gray-400">We'll reply within 24 hours. No spam, ever.</p>
  </form>
);

const Success = ({ onReset }: { onReset: () => void }) => (
  <div className="flex flex-col items-center justify-center text-center p-10 bg-white border border-gray-200">
    <CheckCircle size={48} style={{ color: "var(--green)" }} className="mb-4" />
    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
    <p className="text-gray-500 text-sm">We'll be in touch with your free quote shortly.</p>
    <button onClick={onReset} className="mt-6 text-sm font-semibold underline" style={{ color: "var(--navy)" }}>
      Send another message
    </button>
  </div>
);

// Full section version (used on homepage)
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", phone: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact-us" style={{ backgroundColor: "var(--light)" }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green)" }}>Get In Touch</p>
          <h2 className="text-5xl sm:text-6xl leading-none" style={{ fontFamily: "var(--font-bebas)", color: "var(--navy)", letterSpacing: "0.02em" }}>
            Request a Free Quote
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">No obligation. We'll get back to you as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <a href="tel:+353851818163" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--navy)", color: "#fff" }}>
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Phone</p>
                  <p className="text-sm font-bold text-gray-800 group-hover:underline">085 181 8163</p>
                </div>
              </a>
              <a href="mailto:patrick@leeviewpropertymaintenance.ie" className="flex items-center gap-3 group">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--navy)", color: "#fff" }}>
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Email</p>
                  <p className="text-sm font-bold text-gray-800 group-hover:underline">patrick@leeviewpropertymaintenance.ie</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--navy)", color: "#fff" }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Location</p>
                  <p className="text-sm font-bold text-gray-800">Ballincollig, Co. Cork</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-l-4" style={{ borderColor: "var(--green)", backgroundColor: "#f0faf0" }}>
              <p className="text-sm font-bold text-gray-800 mb-1">Quality Work You Can Rely On</p>
              <p className="text-xs text-gray-500 leading-relaxed">Exceptional attention to detail — every time.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === "success" ? <Success onReset={() => setStatus("idle")} /> : (
              <FormFields form={form} setForm={setForm} status={status} handleSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Form-only version (used on /contact page — no info panel)
export function ContactFormOnly() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", phone: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return status === "success"
    ? <Success onReset={() => setStatus("idle")} />
    : <FormFields form={form} setForm={setForm} status={status} handleSubmit={handleSubmit} />;
}
