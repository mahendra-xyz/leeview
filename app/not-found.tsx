import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
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
              404 Error
            </span>
          </div>

          <h1
            className="text-[10rem] sm:text-[14rem] leading-none text-white mb-2 select-none"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em", opacity: 0.08 }}
            aria-hidden="true"
          >
            404
          </h1>

          <div className="-mt-16 sm:-mt-24 mb-8">
            <h2
              className="text-4xl sm:text-6xl leading-none text-white mb-4"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
            >
              Page Not Found
            </h2>
            <p className="text-blue-200 text-base max-w-md leading-relaxed">
              Looks like this page doesn't exist. It may have been moved or the link might be wrong.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--green)" }}
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-widest text-white border border-white/30 transition-colors hover:border-white/70"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
