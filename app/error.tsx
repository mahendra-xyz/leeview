"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0c1f3d" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--green)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--green)" }} />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-6" style={{ backgroundColor: "var(--green)" }} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--green)" }}>
            Something went wrong
          </span>
        </div>

        <h1
          className="text-4xl sm:text-6xl leading-none text-white mb-4"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
        >
          Unexpected Error
        </h1>
        <p className="text-blue-200 text-base max-w-md leading-relaxed mb-10">
          Sorry about that. Try refreshing the page or head back home. If it keeps happening, give us a call.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={reset}
            className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80 cursor-pointer"
            style={{ backgroundColor: "var(--green)" }}
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest text-white border border-white/30 transition-colors hover:border-white/70"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
