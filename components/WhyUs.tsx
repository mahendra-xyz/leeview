import { MapPin, ShieldCheck, MessageCircle, Clock } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local & Cork-Based",
    body: "We're based in Ballincollig and work across Cork and the surrounding areas. When you call, we're never far away.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    body: "All work is fully covered by public liability insurance. You can trust us to look after your property properly.",
  },
  {
    icon: MessageCircle,
    title: "Free, No-Obligation Quotes",
    body: "Tell us what you need and we'll give you a straight answer on price — no hidden costs, no pressure.",
  },
  {
    icon: Clock,
    title: "Reliable & On Time",
    body: "We show up when we say we will and we finish the job right. Exceptional attention to detail, every time.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--green)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
              Why Choose Us
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="text-5xl sm:text-6xl leading-none"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--navy)", letterSpacing: "0.02em" }}
            >
              The Leeview Difference
            </h2>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              A local business built on doing things properly, every single time.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white p-8 flex flex-col gap-5"
              style={{ borderTop: "3px solid var(--green)" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <Icon size={18} color="#7ec87e" />
              </div>
              <div>
                <h3
                  className="font-bold text-gray-900 text-base mb-2 leading-snug"
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
