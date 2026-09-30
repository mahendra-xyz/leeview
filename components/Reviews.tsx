import { Star, ExternalLink } from "lucide-react";
import { SOCIALS } from "@/lib/constants";

const reviews = [
  {
    name: "Ayo Alade",
    date: "Sep 2026",
    text: "Reliable on time never disappoint easy to work with.",
  },
  {
    name: "Marguerite O Mahony",
    date: "Sep 2026",
    text: "Had such an amazing experience. Job was completed exactly as I envisioned. Fast clean and extremely professional. Highly recommend.",
  },
  {
    name: "Atish Mukhopadhayay",
    date: "Sep 2026",
    text: "Padraig was exceptionally responsive, professional, and completed all tasks well ahead of schedule. I highly recommend.",
  },
];

// Overall rating display
const RATING = "5.0";
const REVIEW_COUNT = "5★";

function StarRow({ filled = 5 }: { filled?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          fill={i < filled ? "#7ec87e" : "none"}
          stroke={i < filled ? "#7ec87e" : "#d1d5db"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

// Inline Google "G" SVG — no external dependency
function GoogleG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--green)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
              Google Reviews
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="text-5xl sm:text-6xl leading-none"
              style={{ fontFamily: "var(--font-bebas)", color: "var(--navy)", letterSpacing: "0.02em" }}
            >
              What Our Clients Say
            </h2>

            {/* Overall rating badge */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <GoogleG />
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Google</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <div className="flex flex-col items-end">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-3xl leading-none"
                    style={{ fontFamily: "var(--font-bebas)", color: "var(--navy)", letterSpacing: "0.02em" }}
                  >
                    {RATING}
                  </span>
                  <StarRow />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  {REVIEW_COUNT} reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {reviews.map(({ name, date, text }) => (
            <div
              key={name}
              className="bg-white p-8 flex flex-col gap-4"
              style={{ borderTop: "3px solid var(--green)" }}
            >
              <StarRow />
              <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div>
                  <span className="text-sm font-bold text-gray-900">{name}</span>
                  <span className="text-xs text-gray-400 ml-2">{date}</span>
                </div>
                <GoogleG />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-gray-500">
            Enjoyed our work? A quick review means the world to a small local business.
          </p>
          <a
            href={SOCIALS.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--navy)", color: "#fff" }}
          >
            Leave a Review
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
