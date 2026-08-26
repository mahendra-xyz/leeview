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
    tagline: "Comprehensive upkeep for your home, inside and out.",
    description:
      "Keeping a property in great condition takes consistent effort. We handle the full picture — from minor repairs to seasonal upkeep — so you don't have to worry about what's being neglected. Whether you own, rent, or manage a property, we're your dependable local team in Ballincollig and across Cork.",
    includes: [
      "Regular maintenance visits",
      "Minor structural repairs",
      "Gutter cleaning and inspection",
      "Door and window maintenance",
      "General interior and exterior upkeep",
      "Seasonal property checks",
    ],
    icon: Wrench,
    gallery: 6,
  },
  {
    slug: "painting",
    title: "Painting — Interior & Exterior",
    tagline: "Professional finish, clean lines, lasting results.",
    description:
      "A fresh coat of paint is one of the most effective ways to transform a property. We take pride in preparation — proper masking, priming, and clean application — so the result is smooth, even, and built to last. Interior or exterior, residential or commercial.",
    includes: [
      "Full surface preparation and priming",
      "Interior walls, ceilings, and woodwork",
      "Exterior walls, fascias, and soffits",
      "Fence and gate painting",
      "Feature walls and colour matching",
      "Clean, professional finish every time",
    ],
    icon: Paintbrush,
    gallery: 6,
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    tagline: "Lawns, beds, and borders kept in top condition.",
    description:
      "A well-kept garden adds real value and kerb appeal to any property. We provide regular maintenance to keep your outdoor space looking its best through every season — from lawn cutting and edging to weeding, planting, and general tidying.",
    includes: [
      "Lawn mowing and edging",
      "Weeding and bed maintenance",
      "Seasonal planting and tidying",
      "Leaf clearance and clean-ups",
      "Path and border maintenance",
      "One-off or regular visits available",
    ],
    icon: Leaf,
    gallery: 6,
  },
  {
    slug: "hedge-cutting-tree-work",
    title: "Hedge Cutting & Tree Work",
    tagline: "Tidy hedges and safe, expert tree management.",
    description:
      "Overgrown hedges and trees can quickly make a property look uncared for — and can become a safety hazard. We provide clean, precise hedge cutting and responsible tree work, leaving your garden looking sharp and well-managed.",
    includes: [
      "Hedge trimming and shaping",
      "Tree pruning and crown reduction",
      "Deadwood removal",
      "Stump grinding (on request)",
      "Full debris clearance included",
      "Residential and commercial",
    ],
    icon: Scissors,
    gallery: 6,
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    tagline: "Driveways, patios, and paths cleaned to a new standard.",
    description:
      "Years of grime, moss, and algae can make even a well-maintained property look tired. Our pressure washing service restores driveways, patios, decking, and paths to a clean, fresh finish — quickly and effectively.",
    includes: [
      "Driveway and path cleaning",
      "Patio and decking washing",
      "Wall and render cleaning",
      "Moss and algae treatment",
      "Bin areas and outbuildings",
      "Residential and commercial",
    ],
    icon: Droplets,
    gallery: 6,
  },
  {
    slug: "fencing-decking",
    title: "Fencing & Decking",
    tagline: "New installations and repairs, built to last.",
    description:
      "Whether you need a new fence for privacy, security, or appearance, or your decking needs repair or a full replacement, we do the job properly. All materials sourced to a high standard, all work finished neatly.",
    includes: [
      "Timber fence installation and repair",
      "Panel, post, and rail fencing",
      "Garden decking installation",
      "Decking repair and treatment",
      "Gate installation and hanging",
      "Painting and staining included on request",
    ],
    icon: Fence,
    gallery: 6,
  },
  {
    slug: "handyman",
    title: "Small Repairs & Handyman Jobs",
    tagline: "No job too small — we get it done right.",
    description:
      "That long list of small jobs that never quite get done? We handle them. From fixing a sticky door to assembling furniture, replacing a broken tile, or patching a wall — reliable, affordable, and done properly.",
    includes: [
      "Door and window repairs",
      "Tile replacement and grouting",
      "Furniture assembly",
      "Shelf and fixture fitting",
      "Wall patching and filling",
      "General odd-jobs and repairs",
    ],
    icon: Hammer,
    gallery: 4,
  },
  {
    slug: "outdoor-improvements",
    title: "Outdoor Improvements",
    tagline: "Transform your outdoor space into something special.",
    description:
      "From a complete garden redesign to adding new features like raised beds, pathways, or outdoor seating areas — we help you make the most of your outdoor space. Practical improvements that look great and add lasting value.",
    includes: [
      "Pathway and step installation",
      "Raised bed construction",
      "Gravel and stone laying",
      "Outdoor seating area setup",
      "Garden lighting installation",
      "Drainage improvements",
    ],
    icon: Sun,
    gallery: 6,
  },
  {
    slug: "home-garden-upkeep",
    title: "General Home & Garden Upkeep",
    tagline: "Regular maintenance so your property is always at its best.",
    description:
      "Our ongoing upkeep service is perfect for homeowners who want their property maintained to a high standard without the hassle of managing multiple tradespeople. We become your single point of contact for everything your home and garden needs.",
    includes: [
      "Scheduled regular visits",
      "Combined garden and property maintenance",
      "Seasonal tasks included",
      "Single point of contact",
      "Flexible visit frequency",
      "Priority booking for regular clients",
    ],
    icon: Home,
    gallery: 4,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
