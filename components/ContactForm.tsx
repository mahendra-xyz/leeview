"use client";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

type FormData = { name: string; email: string; phone: string; message: string };
type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<keyof FormData, string>>;

function validate(form: FormData): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  else if (form.name.length > 100) errors.name = "Name is too long.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.message.trim()) errors.message = "Please describe what you need.";
  else if (form.message.length > 2000) errors.message = `${form.message.length}/2000 — too long.`;
  return errors;
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputClass = (error?: string) =>
  `w-full border px-3 py-2.5 text-sm focus:outline-none transition-colors ${
    error ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-gray-400"
  }`;

function FormBody({
  form,
  setForm,
  status,
  errorMsg,
  handleSubmit,
}: {
  form: FormData;
  setForm: (f: FormData) => void;
  status: Status;
  errorMsg: string;
  handleSubmit: (e: React.FormEvent) => void;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const touch = (field: keyof FormData) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const onSubmit = (e: React.FormEvent) => {
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(errs).length > 0) { e.preventDefault(); return; }
    handleSubmit(e);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {/* Honeypot — visually hidden, off-screen */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your Name" required error={touched.name ? errors.name : undefined}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onBlur={() => touch("name")}
            placeholder="John Smith"
            className={inputClass(touched.name ? errors.name : undefined)}
          />
        </Field>
        <Field label="Phone Number" error={touched.phone ? errors.phone : undefined}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            onBlur={() => touch("phone")}
            placeholder="085 000 0000"
            className={inputClass()}
          />
        </Field>
      </div>

      <Field label="Email Address" required error={touched.email ? errors.email : undefined}>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onBlur={() => touch("email")}
          placeholder="you@example.com"
          className={inputClass(touched.email ? errors.email : undefined)}
        />
      </Field>

      <Field label="What do you need?" required error={touched.message ? errors.message : undefined}>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onBlur={() => touch("message")}
          placeholder="Tell us about your project — what needs doing, where, any other details..."
          className={`${inputClass(touched.message ? errors.message : undefined)} resize-none`}
        />
        <p className="mt-1 text-right text-[10px] text-gray-400">{form.message.length}/2000</p>
      </Field>

      {errorMsg && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: "var(--green)" }}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </span>
        ) : (
          <><Send size={14} /> Send My Request</>
        )}
      </button>
      <p className="text-center text-[10px] text-gray-400">We reply within 24 hours. No spam, ever.</p>
    </form>
  );
}

function Success({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-white border border-gray-200">
      <CheckCircle size={48} style={{ color: "var(--green)" }} className="mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
      <p className="text-gray-500 text-sm mb-1">We'll be in touch with your free quote shortly.</p>
      <p className="text-gray-400 text-xs mb-6">Check your inbox — we've sent you a confirmation.</p>
      <button onClick={onReset} className="text-xs underline" style={{ color: "var(--navy)" }}>
        Send another message
      </button>
    </div>
  );
}

function useForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const loadedAt = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _honey: "",           // form-level honeypot value (always empty for real users)
          _ts: loadedAt.current, // page load timestamp for time check
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Connection error. Please try again or call us on 085 181 8163.");
    }
  };

  return { form, setForm, status, setStatus, errorMsg, handleSubmit };
}

// Full section version — used on homepage
export default function ContactForm() {
  const { form, setForm, status, setStatus, errorMsg, handleSubmit } = useForm();

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

          <div className="lg:col-span-3 bg-white border border-gray-200 p-8">
            {status === "success"
              ? <Success onReset={() => setStatus("idle")} />
              : <FormBody form={form} setForm={setForm} status={status} errorMsg={errorMsg} handleSubmit={handleSubmit} />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

// Form-only version — used on /contact page
export function ContactFormOnly() {
  const { form, setForm, status, setStatus, errorMsg, handleSubmit } = useForm();

  return status === "success"
    ? <Success onReset={() => setStatus("idle")} />
    : <div className="bg-white border border-gray-200 p-8">
        <FormBody form={form} setForm={setForm} status={status} errorMsg={errorMsg} handleSubmit={handleSubmit} />
      </div>;
}
