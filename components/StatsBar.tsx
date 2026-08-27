const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Jobs Completed" },
  { value: "100%", label: "Fully Insured" },
  { value: "Cork", label: "Local & Proud" },
];

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-10 px-4 text-center"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <span
                className="text-4xl leading-none mb-1.5"
                style={{ fontFamily: "var(--font-bebas)", color: "#7ec87e", letterSpacing: "0.02em" }}
              >
                {value}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
