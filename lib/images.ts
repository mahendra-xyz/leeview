// Image library for Leeview Property Maintenance
// Real job photos are preferred. Stock images used only where no real photo exists.
// NEVER use an image on a page/section whose slug isn't in its `tags` array.

export type StockImage = {
  url: string;
  alt: string;
  tags: string[]; // service slugs this image is approved for
  real?: boolean; // true = real job photo, false/undefined = stock
};

export const images: StockImage[] = [
  // --- Real job photos (preferred, shown first) ---
  { url: "/images/work/driveway-pressure-wash.png", alt: "Driveway pressure washing — before and after", tags: ["pressure-washing", "property-maintenance"], real: true },
  { url: "/images/work/garden-landscaping.png", alt: "Garden landscaping transformation — before and after", tags: ["garden-maintenance", "outdoor-improvements"], real: true },
  { url: "/images/work/hedge-tree-work.png", alt: "Hedge trimming and tree surgery — before and after", tags: ["hedge-cutting-tree-work", "garden-maintenance"], real: true },
  { url: "/images/work/tree-surgery.png", alt: "Tree surgery — before and after", tags: ["hedge-cutting-tree-work"], real: true },
  { url: "/images/work/roof-replacement-before-after.jpg", alt: "Roof replacement — before and after", tags: ["property-maintenance"], real: true },
  { url: "/images/work/kitchen-renovation.png", alt: "Kitchen renovation — before and after", tags: ["interior-renovations"], real: true },

  { url: "/images/work/exterior-painting-1.jpg", alt: "Exterior painting in progress — side wall render", tags: ["painting", "property-maintenance"], real: true },
  { url: "/images/work/exterior-painting-2.jpg", alt: "Exterior house painting — scaffolding up, work underway", tags: ["painting", "property-maintenance"], real: true },
  { url: "/images/work/exterior-painting-3.jpg", alt: "Exterior house painting completed — fresh render finish", tags: ["painting", "property-maintenance"], real: true },

  // --- Stock (downloaded locally, no people, used in service cards/pages only) ---
  // Painting
  { url: "/images/stock/paint-brushes.jpg", alt: "Paint brushes close-up", tags: ["painting"] },
  { url: "/images/stock/paint-roller-wall.jpg", alt: "Paint roller on wall", tags: ["painting"] },
  { url: "/images/stock/paint-cans.jpg", alt: "Paint cans and supplies", tags: ["painting"] },
  { url: "/images/stock/painting-wall.jpg", alt: "Freshly painted wall", tags: ["painting"] },
  // Fencing & Decking
  { url: "/images/stock/fence-panels.jpg", alt: "Garden fence panels", tags: ["fencing-decking"] },
  { url: "/images/stock/decking-fence.jpg", alt: "Wooden decking and fence", tags: ["fencing-decking"] },
  { url: "/images/stock/garden-fencing.jpg", alt: "Garden fencing installed", tags: ["fencing-decking"] },
  // Handyman
  { url: "/images/stock/tools-bench.jpg", alt: "Tools on workshop bench", tags: ["handyman"] },
  { url: "/images/stock/repair-tools.jpg", alt: "Home repair tools", tags: ["handyman"] },
  // Outdoor Improvements
  { url: "/images/stock/garden-path-steps.jpg", alt: "Garden path and stone steps", tags: ["outdoor-improvements"] },
  { url: "/images/stock/outdoor-garden.jpg", alt: "Outdoor garden improvement", tags: ["outdoor-improvements"] },
  // Hedge (stock fill)
  { url: "/images/stock/trimmed-hedge.jpg", alt: "Neatly trimmed garden hedge", tags: ["hedge-cutting-tree-work"] },
  { url: "/images/stock/shaped-hedging.jpg", alt: "Shaped garden hedging", tags: ["hedge-cutting-tree-work"] },
  // Pressure Washing (surface only)
  { url: "/images/stock/pressure-wash-surface.jpg", alt: "Pressure washed paved surface", tags: ["pressure-washing"] },
  { url: "/images/stock/pressure-wash-patio.jpg", alt: "Pressure washed patio", tags: ["pressure-washing"] },
  // Home exterior (used for interior-renovations as fill)
  { url: "/images/stock/house-exterior.jpg", alt: "Clean house exterior", tags: ["interior-renovations"] },
  { url: "/images/stock/home-curb-appeal.jpg", alt: "Home with curb appeal", tags: ["interior-renovations"] },
];

// Hero grid images (homepage only) — real Leeview job photos (no people)
export const heroImages = [
  { url: "/images/work/driveway-pressure-wash.png", alt: "Driveway pressure washing — before and after", fit: "cover" as const },
  { url: "/images/work/garden-landscaping.png", alt: "Garden landscaping transformation — before and after", fit: "contain" as const },
  { url: "/images/work/roof-replacement-after.png", alt: "Roof replacement completed with new slate tiles", fit: "contain" as const },
  { url: "/images/work/hedge-tree-work.png", alt: "Hedge trimming and tree surgery — before and after", fit: "cover" as const },
];

// Helper: get all images approved for a specific service slug
export function getServiceImages(slug: string): StockImage[] {
  return images.filter((img) => img.tags.includes(slug));
}

// Helper: get only real job photos for a service (used in service page galleries)
export function getRealServiceImages(slug: string): StockImage[] {
  return images.filter((img) => img.tags.includes(slug) && img.real);
}
