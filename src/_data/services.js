// Service catalog — drives the /services/ index and each generated service page.
// Edit here to add, remove, or reword a service everywhere at once.
module.exports = [
  {
    slug: "landscape-design",
    order: 1,
    icon: "compass",
    name: "Landscape Design",
    short: "Custom, water-wise designs built around how you actually live outdoors.",
    hero: "Landscape design that fits Central Texas — and your family.",
    intro:
      "Every project starts on paper. We walk your property, read your soil and sun, listen to how you want to use the space, and design a landscape that looks intentional in year one and even better in year five. No copy-paste plans — every design is drawn for your lot, your budget, and the Hill Country climate.",
    features: [
      "On-site design consultation with the owner",
      "Native & adapted plant selection for Central Texas",
      "Water-saving and xeriscape-forward layouts",
      "Flower beds, borders, and full front-yard makeovers",
      "3D-informed planning so you see it before we build it"
    ],
    keywords: ["landscape design", "landscape designer", "yard design", "xeriscape design"]
  },
  {
    slug: "landscape-installation",
    order: 2,
    icon: "sprout",
    name: "Landscape Installation & Planting",
    short: "We build what we design — beds, native plantings, and fresh sod that takes.",
    hero: "Installation done right the first time.",
    intro:
      "A design is only as good as the crew that installs it. We handle soil prep, bed shaping, planting, mulching, and sod so everything is set up to thrive in our clay-and-caliche soils. Because we maintain what we plant, we build for the long haul — not just for the day the truck leaves.",
    features: [
      "Native and drought-tolerant plant installation",
      "New sod and turf establishment",
      "Flower beds, borders, and garden makeovers",
      "Mulch, decomposed granite, and gravel installs",
      "Soil amendment and grading for healthy roots"
    ],
    keywords: ["landscape installation", "planting", "sod installation", "new sod"]
  },
  {
    slug: "hardscape-outdoor-living",
    order: 3,
    icon: "wall",
    name: "Hardscape & Outdoor Living",
    short: "Pergolas, patios, masonry and stonework that turn a yard into a room.",
    hero: "Pergolas, patios & stonework built to last.",
    intro:
      "This is the work our long-time customers rave about — pergolas, patio extensions, masonry, stone borders, and full outdoor living spaces. It's high-craft construction, not landscaping-as-an-afterthought. If you want a backyard you actually spend time in, this is where it starts.",
    features: [
      "Custom pergolas and shade structures",
      "Patio extensions and paver installations",
      "Masonry, stone, and hardscape borders",
      "Fire features and outdoor living areas",
      "Retaining walls and grade solutions"
    ],
    keywords: ["hardscape", "pergola builder", "patio installation", "masonry", "outdoor living"]
  },
  {
    slug: "lawn-care-turf-management",
    order: 4,
    icon: "grass",
    name: "Lawn Care & Turf Management",
    short: "Ongoing, science-backed care that keeps your turf thick, green and healthy.",
    hero: "Turf management from a company that studies turf.",
    intro:
      "The name is not an accident. We manage turf like agronomists — mowing at the right height, feeding on the right schedule, and treating for the weeds, grubs, and diseases that hit St. Augustine, Bermuda, and Zoysia lawns in Central Texas. Consistent care, one crew, no surprises.",
    features: [
      "Scheduled mowing, edging, and cleanup",
      "Seasonal fertilization programs",
      "Weed, grub, and lawn-disease control",
      "Aeration and topdressing",
      "Turf health assessments"
    ],
    keywords: ["lawn care", "turf management", "lawn maintenance", "lawn service"]
  },
  {
    slug: "tree-care-trimming",
    order: 5,
    icon: "tree",
    name: "Tree Care & Trimming",
    short: "Shaping, trimming and health care for the trees that anchor your yard.",
    hero: "Healthy trees, cleanly shaped.",
    intro:
      "Trees are the most valuable living thing in most Central Texas yards — and the easiest to damage with a bad cut. We trim for health and structure, clear deadwood, and keep canopies shaped so your trees stay strong through drought, storms, and oak-wilt season.",
    features: [
      "Structural and aesthetic trimming",
      "Deadwood and hazard limb removal",
      "Canopy thinning and shaping",
      "Seasonal-timing guidance for oaks",
      "Debris haul-off and cleanup"
    ],
    keywords: ["tree trimming", "tree care", "tree service", "canopy trimming"]
  },
  {
    slug: "irrigation-sprinkler-systems",
    order: 6,
    icon: "droplet",
    name: "Irrigation & Sprinkler Systems",
    short: "Efficient watering that keeps plants alive and water bills sane.",
    hero: "Water smarter, not more.",
    intro:
      "In a region that lives under drought restrictions, watering efficiently is the whole game. We install, adjust, and repair irrigation so every zone delivers water where it's needed and nowhere it isn't — protecting your investment and staying inside Hays County restrictions.",
    features: [
      "Sprinkler and drip-irrigation installation",
      "Zone tuning for water efficiency",
      "Repairs, leaks, and head replacement",
      "Smart-controller setup",
      "Drought-restriction-friendly scheduling"
    ],
    keywords: ["irrigation", "sprinkler system", "sprinkler repair", "drip irrigation"]
  }
];
