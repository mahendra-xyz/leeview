import { Wrench, Paintbrush, Leaf, Scissors, Droplets, Fence, Hammer, Sun, Home, LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  icon: LucideIcon;
  gallery: number; // number of placeholder slots
};

export const services: Service[] = [
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    tagline: "Comprehensive property maintenance across Cork — inside and out.",
    description:
      "Reliable property maintenance in Cork and Ballincollig, covering everything your home or rental property needs. From routine upkeep and minor repairs to gutter cleaning, seasonal checks, and general interior and exterior maintenance — we keep properties in top condition year-round. One local team, one call.",
    includes: [
      "Regular property maintenance visits",
      "Minor structural and cosmetic repairs",
      "Gutter cleaning and inspection",
      "Door, window, and fixture maintenance",
      "General interior and exterior upkeep",
      "Seasonal property checks across Cork",
    ],
    icon: Wrench,
    gallery: 6,
  },
  {
    slug: "painting",
    title: "Painting & Decorating",
    tagline: "Professional painting and decorating in Cork — interior and exterior.",
    description:
      "Expert painting and decorating throughout Cork and Ballincollig. We take pride in preparation — proper masking, priming, and clean application — delivering a smooth, lasting finish every time. Interior painting, exterior painting, and full decorating services for homes and commercial properties across Cork.",
    includes: [
      "Full surface preparation and priming",
      "Interior walls, ceilings, and woodwork",
      "Exterior walls, fascias, and soffits",
      "Fence and gate painting Cork",
      "Feature walls and colour matching",
      "Residential and commercial painting Cork",
    ],
    icon: Paintbrush,
    gallery: 6,
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    tagline: "Professional garden maintenance and gardening services in Cork.",
    description:
      "Trusted garden maintenance across Cork and Ballincollig. A well-kept garden adds real kerb appeal and value to any property. Our gardening services cover everything from regular lawn cutting and edging to weeding, planting, seasonal tidying, and full garden upkeep — keeping your outdoor space looking its best all year round.",
    includes: [
      "Lawn mowing and edging Cork",
      "Weeding and garden bed maintenance",
      "Seasonal planting and garden tidying",
      "Leaf clearance and garden clean-ups",
      "Path and border maintenance",
      "Regular and one-off gardening visits",
    ],
    icon: Leaf,
    gallery: 6,
  },
  {
    slug: "hedge-cutting-tree-work",
    title: "Hedge Cutting & Tree Work",
    tagline: "Hedge cutting and tree surgery across Cork.",
    description:
      "Professional hedge cutting and tree work in Cork and Ballincollig. Overgrown hedges and trees can quickly make a property look neglected — and become a safety hazard. We deliver clean, precise hedge trimming and responsible tree surgery, including crown reduction, pruning, and full debris clearance.",
    includes: [
      "Hedge trimming and shaping Cork",
      "Tree pruning and crown reduction",
      "Tree surgery and deadwood removal",
      "Stump grinding (on request)",
      "Full debris clearance included",
      "Residential and commercial Cork",
    ],
    icon: Scissors,
    gallery: 6,
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    tagline: "Driveway and patio pressure washing across Cork.",
    description:
      "High-quality pressure washing in Cork and Ballincollig. Years of grime, moss, and algae can make even a well-maintained property look tired. Our pressure washing service restores driveways, patios, paths, and decking to a clean, fresh finish — quickly and effectively. Cork's trusted driveway cleaning specialists.",
    includes: [
      "Driveway and path pressure washing Cork",
      "Patio and decking cleaning",
      "Wall and render washing",
      "Moss and algae treatment",
      "Bin areas and outbuildings",
      "Residential and commercial Cork",
    ],
    icon: Droplets,
    gallery: 6,
  },
  {
    slug: "fencing-decking",
    title: "Fencing & Decking",
    tagline: "Fencing and decking installation and repair in Cork.",
    description:
      "Quality fencing and decking in Cork and Ballincollig. Whether you need new garden fencing for privacy, security, or appearance, or your decking needs repair or full replacement, we do the job properly. All materials sourced to a high standard, all work finished neatly.",
    includes: [
      "Timber fence installation and repair Cork",
      "Panel, post, and rail fencing",
      "Garden decking installation Cork",
      "Decking repair and treatment",
      "Gate installation and hanging",
      "Painting and staining on request",
    ],
    icon: Fence,
    gallery: 6,
  },
  {
    slug: "handyman",
    title: "Handyman Services",
    tagline: "Reliable handyman in Cork — no job too small.",
    description:
      "Local handyman services across Cork and Ballincollig. That long list of small jobs that never quite gets done? We handle them. From fixing sticky doors and replacing tiles to assembling furniture or patching walls — affordable, reliable, and done properly. Cork's trusted handyman for home repairs.",
    includes: [
      "Door and window repairs Cork",
      "Tile replacement and grouting",
      "Furniture assembly",
      "Shelf and fixture fitting",
      "Wall patching and filling",
      "General handyman jobs across Cork",
    ],
    icon: Hammer,
    gallery: 4,
  },
  {
    slug: "outdoor-improvements",
    title: "Outdoor Improvements",
    tagline: "Outdoor landscaping and garden improvements across Cork.",
    description:
      "Transform your outdoor space with professional outdoor improvements in Cork and Ballincollig. From new garden pathways, steps, and raised beds to gravel laying, outdoor seating areas, and drainage solutions — practical improvements that look great and add lasting value to your Cork property.",
    includes: [
      "Pathway and step installation Cork",
      "Raised bed construction",
      "Gravel and stone laying",
      "Outdoor seating area setup",
      "Garden lighting installation",
      "Drainage improvements Cork",
    ],
    icon: Sun,
    gallery: 6,
  },
  {
    slug: "interior-renovations",
    title: "Interior Renovations",
    tagline: "Home renovation specialists in Cork — kitchens, bathrooms, and beyond.",
    description:
      "Trusted home renovation company in Cork and Ballincollig. From full kitchen fit-outs and bathroom renovations to complete room overhauls, we handle home renovations from start to finish. Whether stripping back to bare walls or refreshing an existing space, we deliver a clean, professional result. Cork's local choice for interior renovations and home improvement.",
    includes: [
      "Kitchen renovation and full fit-out Cork",
      "Bathroom and wet room renovation Cork",
      "Flooring — tiling, laminate, and vinyl",
      "Plastering and drylining",
      "Home renovation project management",
      "Residential and rental property upgrades Cork",
    ],
    icon: Home,
    gallery: 4,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
