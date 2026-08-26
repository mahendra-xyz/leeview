const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Jobs Completed" },
  { value: "100%", label: "Fully Insured" },
  { value: "Cork", label: "Local & Proud" },
];

export default function TrustBar() {
  return (
    <section style={{ backgroundColor: "var(--navy)" }} className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ backgroundColor: "var(--navy)" }}
            >
              <span
                className="text-4xl leading-none mb-1"
                style={{ fontFamily: "var(--font-bebas)", color: "#7ec87e", letterSpacing: "0.02em" }}
              >
                {value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
