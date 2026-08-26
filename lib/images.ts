// Stock image library for Leeview Property Maintenance
// Each image is tagged to prevent cross-service misuse.
// NEVER use an image on a page/section whose slug isn't in its `tags` array.

export type StockImage = {
  url: string;
  alt: string;
  tags: string[]; // service slugs this image is approved for
};

export const images: StockImage[] = [
  // --- Property Maintenance ---
  { url: "https://images.unsplash.com/photo-1676311396794-f14881e9daaa?auto=format&fit=crop&w=800&q=80", alt: "Worker carrying out property maintenance", tags: ["property-maintenance", "home-garden-upkeep"] },
  { url: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800&q=80", alt: "Home repair tools and materials", tags: ["property-maintenance", "handyman"] },
  { url: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?auto=format&fit=crop&w=800&q=80", alt: "Property maintenance work in progress", tags: ["property-maintenance"] },
  { url: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80", alt: "Home upkeep and fixing", tags: ["property-maintenance", "home-garden-upkeep"] },

  // --- Painting ---
  { url: "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?auto=format&fit=crop&w=800&q=80", alt: "Painting a wall", tags: ["painting"] },
  { url: "https://images.unsplash.com/photo-1688372198189-de6a51777a81?auto=format&fit=crop&w=800&q=80", alt: "Interior painting work", tags: ["painting"] },
  { url: "https://images.unsplash.com/photo-1600508774764-4ce704363d66?auto=format&fit=crop&w=800&q=80", alt: "Painter rolling paint on wall", tags: ["painting"] },
  { url: "https://images.unsplash.com/photo-1603801705834-e653954f39aa?auto=format&fit=crop&w=800&q=80", alt: "House painting scene", tags: ["painting"] },

  // --- Garden Maintenance ---
  { url: "https://images.unsplash.com/photo-1458245201577-fc8a130b8829?auto=format&fit=crop&w=800&q=80", alt: "Lawn mowing in progress", tags: ["garden-maintenance", "home-garden-upkeep"] },
  { url: "https://images.unsplash.com/photo-1690068023694-053da714f95f?auto=format&fit=crop&w=800&q=80", alt: "Garden maintenance work", tags: ["garden-maintenance"] },
  { url: "https://images.unsplash.com/photo-1590820292118-e256c3ac2676?auto=format&fit=crop&w=800&q=80", alt: "Grass cutting close-up", tags: ["garden-maintenance"] },
  { url: "https://images.unsplash.com/photo-1608101854678-b45ad1d25556?auto=format&fit=crop&w=800&q=80", alt: "Garden bed maintenance", tags: ["garden-maintenance", "outdoor-improvements"] },

  // --- Hedge Cutting & Tree Work ---
  { url: "https://images.unsplash.com/photo-1668189777890-495c36095340?auto=format&fit=crop&w=800&q=80", alt: "Hedge trimming in garden", tags: ["hedge-cutting-tree-work"] },
  { url: "https://images.unsplash.com/photo-1599151893427-e09096e38d6d?auto=format&fit=crop&w=800&q=80", alt: "Tree and hedge cutting", tags: ["hedge-cutting-tree-work"] },
  { url: "https://images.unsplash.com/photo-1667140092555-b0ca51dc69d7?auto=format&fit=crop&w=800&q=80", alt: "Hedge cutting work", tags: ["hedge-cutting-tree-work"] },
  { url: "https://images.unsplash.com/photo-1584004342213-256573aa03db?auto=format&fit=crop&w=800&q=80", alt: "Garden hedging and shaping", tags: ["hedge-cutting-tree-work"] },

  // --- Pressure Washing ---
  { url: "https://images.unsplash.com/photo-1718152421680-d1580e843cc9?auto=format&fit=crop&w=800&q=80", alt: "Pressure washer cleaning surface", tags: ["pressure-washing"] },
  { url: "https://images.unsplash.com/photo-1718152521364-b9655b8a7926?auto=format&fit=crop&w=800&q=80", alt: "Power washing patio", tags: ["pressure-washing"] },
  { url: "https://images.unsplash.com/photo-1718152423993-a29048dbc223?auto=format&fit=crop&w=800&q=80", alt: "Pressure washing driveway", tags: ["pressure-washing"] },
  { url: "https://images.unsplash.com/photo-1677956787377-a0f32c0974af?auto=format&fit=crop&w=800&q=80", alt: "Exterior surface pressure cleaning", tags: ["pressure-washing"] },

  // --- Fencing & Decking ---
  { url: "https://images.unsplash.com/photo-1593285247650-cd7bb44adcfd?auto=format&fit=crop&w=800&q=80", alt: "Garden fence panel installation", tags: ["fencing-decking"] },
  { url: "https://images.unsplash.com/photo-1549996722-5ad80bfc463a?auto=format&fit=crop&w=800&q=80", alt: "Wooden decking and fence", tags: ["fencing-decking"] },
  { url: "https://images.unsplash.com/photo-1585597985125-9ad0229ae71d?auto=format&fit=crop&w=800&q=80", alt: "Garden fencing installed", tags: ["fencing-decking"] },
  { url: "https://images.unsplash.com/photo-1588047979213-20323304740b?auto=format&fit=crop&w=800&q=80", alt: "Timber decking and fence", tags: ["fencing-decking"] },

  // --- Handyman ---
  { url: "https://images.unsplash.com/photo-1584677191047-38f48d0db64e?auto=format&fit=crop&w=800&q=80", alt: "Handyman tools laid out", tags: ["handyman"] },
  { url: "https://images.unsplash.com/photo-1533780898421-b118c81ac26b?auto=format&fit=crop&w=800&q=80", alt: "Home repair tools", tags: ["handyman", "property-maintenance"] },
  { url: "https://images.unsplash.com/photo-1645651964715-d200ce0939cc?auto=format&fit=crop&w=800&q=80", alt: "Repair work being done", tags: ["handyman"] },
  { url: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=800&q=80", alt: "Handyman at work", tags: ["handyman"] },

  // --- Outdoor Improvements ---
  { url: "https://images.unsplash.com/photo-1465765639406-044153778532?auto=format&fit=crop&w=800&q=80", alt: "Garden path and stone steps", tags: ["outdoor-improvements"] },
  { url: "https://images.unsplash.com/photo-1619377472056-fc05725278ab?auto=format&fit=crop&w=800&q=80", alt: "Outdoor garden improvement", tags: ["outdoor-improvements"] },
  { url: "https://images.unsplash.com/photo-1695492599545-50ebc702424e?auto=format&fit=crop&w=800&q=80", alt: "Garden transformation project", tags: ["outdoor-improvements"] },
  { url: "https://images.unsplash.com/photo-1771075863642-225a354123e1?auto=format&fit=crop&w=800&q=80", alt: "Outdoor steps and path layout", tags: ["outdoor-improvements"] },

  // --- General Home & Garden Upkeep ---
  { url: "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?auto=format&fit=crop&w=800&q=80", alt: "Clean house exterior", tags: ["home-garden-upkeep"] },
  { url: "https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=800&q=80", alt: "Tidy home and garden", tags: ["home-garden-upkeep"] },
  { url: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?auto=format&fit=crop&w=800&q=80", alt: "Neat home exterior with curb appeal", tags: ["home-garden-upkeep"] },
  { url: "https://images.unsplash.com/photo-1571398346062-ed19c6b23210?auto=format&fit=crop&w=800&q=80", alt: "Well-kept garden and home", tags: ["home-garden-upkeep"] },
];

// Hero grid images (homepage only)
export const heroImages = [
  { url: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80", alt: "Professional property exterior work" },
  { url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80", alt: "Home renovation exterior" },
  { url: "https://images.unsplash.com/photo-1600182129474-bd1cbd1c1b48?auto=format&fit=crop&w=1200&q=80", alt: "House exterior professional finish" },
  { url: "https://images.unsplash.com/photo-1786295866836-2949bbd847cd?auto=format&fit=crop&w=1200&q=80", alt: "Home and garden professional view" },
];

// Helper: get images approved for a specific service slug
export function getServiceImages(slug: string): StockImage[] {
  return images.filter((img) => img.tags.includes(slug));
}
