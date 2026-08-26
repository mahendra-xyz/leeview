"use client";
import { useState, useRef } from "react";
import { Send, CheckCircle, Phone } from "lucide-react";

export default function ServiceContactForm({ service }: { service: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const loadedAt = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message: `[${service}]\n\n${form.message}`,
          _honey: "",
          _ts: loadedAt.current,
        }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden">
      {/* Header */}
      <div className="p-5" style={{ backgroundColor: "var(--navy)" }}>
        <p
          className="text-2xl leading-none text-white mb-1"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em" }}
        >
          Free Quote
        </p>
        <p className="text-xs text-blue-200">No obligation. We'll get back to you fast.</p>
      </div>

      {status === "success" ? (
        <div className="p-8 text-center bg-white">
          <CheckCircle size={36} className="mx-auto mb-3" style={{ color: "var(--green)" }} />
          <p className="font-bold text-gray-900 text-sm mb-1">Message Sent!</p>
          <p className="text-xs text-gray-500">We'll be in touch shortly.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-xs underline"
            style={{ color: "var(--navy)" }}
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-5 bg-white space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Smith"
              className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="085 000 0000"
              className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
              Tell us more
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={`Tell us about your ${service.toLowerCase()} needs...`}
              className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-sm transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: "var(--green)" }}
          >
            {status === "loading" ? "Sending..." : <><Send size={13} /> Request Quote</>}
          </button>

          {/* Or call */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">or</span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <a
            href="tel:+353851818163"
            className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold border border-gray-200 rounded-sm hover:border-gray-400 transition-colors"
            style={{ color: "var(--navy)" }}
          >
            <Phone size={13} />
            Call 085 181 8163
          </a>
        </form>
      )}
    </div>
  );
}
