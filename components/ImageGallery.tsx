"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { StockImage } from "@/lib/images";

export default function ImageGallery({ images }: { images: StockImage[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  if (images.length === 0) return null;

  const prev = () => setActiveIdx((i) => (i! > 0 ? i! - 1 : images.length - 1));
  const next = () => setActiveIdx((i) => (i! < images.length - 1 ? i! + 1 : 0));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className="aspect-square relative rounded-sm overflow-hidden border border-gray-100 group focus:outline-none"
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Caption on hover */}
            <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }}
            >
              <p className="w-full px-3 py-2.5 text-white text-xs font-medium leading-snug text-left">
                {img.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/92"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setActiveIdx(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
          )}

          {/* Image + caption */}
          <div
            className="flex flex-col items-center mx-16 max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIdx].url}
              alt={images[activeIdx].alt}
              width={1200}
              height={900}
              className="object-contain w-full max-h-[78vh]"
            />
            <p className="mt-4 text-white/75 text-sm text-center px-4 leading-relaxed">
              {images[activeIdx].alt}
            </p>
            <p className="mt-1.5 text-white/35 text-xs">
              {activeIdx + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
