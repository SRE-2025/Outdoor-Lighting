// Service catalog — the brief's full landscaping architecture.
// Each entry generates its own SEO/AEO page at /services/<slug>/ and appears
// in the menu, footer, home grid, and sitemap automatically.
module.exports = [
  {
    slug: "landscape-design",
    order: 1,
    icon: "compass",
    name: "Landscape Design",
    short: "Custom, water-wise designs built around how you actually live outdoors.",
    hero: "Landscape design made for Central Texas — and your family.",
    intro:
      "Every project starts on paper. We walk your property, read your soil and sun, and design a landscape that looks intentional in year one and even better in year five. No copy-paste plans — every design is drawn for your lot, your budget, and the Hill Country climate.",
    features: [
      "On-site design consultation with the owner",
      "Native & adapted plant selection for Central Texas",
      "Water-saving, xeriscape-forward layouts",
      "Full front-yard and backyard makeovers",
      "A clear plan and estimate before any work begins"
    ],
    keywords: ["landscape design", "landscape designer", "yard design", "xeriscape design"]
  },
  {
    slug: "lawn-care-mowing",
    order: 2,
    icon: "grass",
    name: "Lawn Care & Mowing Plans",
    short: "Dependable, scheduled mowing and turf care from one consistent crew.",
    hero: "Lawn care you never have to think about.",
    intro:
      "We manage turf like agronomists — mowing at the right height, edging clean, and keeping St. Augustine, Bermuda and Zoysia lawns thick and healthy through the Central Texas seasons. Pick a recurring plan and the same crew shows up, week after week.",
    features: [
      "Weekly or bi-weekly mowing, edging & blowing",
      "Correct mow height by grass type and season",
      "Bed edging and cleanup included",
      "Seasonal turf health checks",
      "One reliable crew — no rotating subcontractors"
    ],
    keywords: ["lawn care", "lawn mowing", "lawn maintenance", "mowing service"]
  },
  {
    slug: "lawn-fertilization-weed-control",
    order: 3,
    icon: "sprout",
    name: "Fertilization & Weed Control",
    short: "Scheduled feeding and weed prevention that keeps turf thick and green.",
    hero: "Feed the lawn, starve the weeds.",
    intro:
      "A thick, well-fed lawn is the best weed control there is. We build a season-long program — pre-emergent timed for Central Texas, balanced fertilization, and spot treatment for the weeds and lawn diseases that hit our region — so your turf outcompetes the problems.",
    features: [
      "Pre-emergent applications timed for Central Texas",
      "Balanced seasonal fertilization",
      "Broadleaf and grassy weed control",
      "Grub, chinch bug and brown-patch treatment",
      "Soil-appropriate programs for clay and caliche"
    ],
    keywords: ["lawn fertilization", "weed control", "pre-emergent", "lawn treatment"]
  },
  {
    slug: "sod-installation",
    order: 4,
    icon: "grass",
    name: "Sod Installation & New Lawns",
    short: "Fresh sod, prepped and installed to actually take and stay green.",
    hero: "A new lawn that survives its first summer.",
    intro:
      "Most DIY sod fails in the first six weeks — bad soil prep, poor contact, wrong watering. We handle grading and soil prep, choose the right grass for your sun and water, and establish the lawn so it roots in and thrives instead of struggling.",
    features: [
      "Grass selection for your sun, soil & water",
      "Grading and soil preparation",
      "St. Augustine, Bermuda & Zoysia sod",
      "Full lawn replacements and new installs",
      "Establishment guidance so it takes"
    ],
    keywords: ["sod installation", "new lawn", "sod", "lawn replacement"]
  },
  {
    slug: "irrigation-sprinkler-systems",
    order: 5,
    icon: "droplet",
    name: "Irrigation & Sprinkler Systems",
    short: "Efficient watering that keeps plants alive and water bills sane.",
    hero: "Water smarter, not more.",
    intro:
      "In a region that lives under drought restrictions, watering efficiently is the whole game. We install, tune and repair irrigation so every zone delivers water where it's needed and nowhere it isn't — protecting your investment and staying inside Hays County restrictions.",
    features: [
      "Sprinkler & drip-irrigation installation",
      "Zone tuning for water efficiency",
      "Repairs, leaks & head replacement",
      "Smart, weather-based controller setup",
      "Drought-restriction-friendly scheduling"
    ],
    keywords: ["irrigation", "sprinkler system", "sprinkler repair", "drip irrigation"]
  },
  {
    slug: "drainage-erosion-control",
    order: 6,
    icon: "water",
    name: "Drainage & Erosion Control",
    short: "Move water away from your home before the next big Central Texas storm.",
    hero: "Stop the water before it finds your foundation.",
    intro:
      "Central Texas swings from drought to downpour, and clay soil sheds water fast. We solve standing water, soggy beds, and eroding slopes with grading, French drains, dry creek beds and swales — protecting your foundation, your landscape, and your neighbors downhill.",
    features: [
      "French drains and catch basins",
      "Regrading for positive drainage",
      "Dry creek beds and swales",
      "Slope stabilization and erosion control",
      "Downspout and runoff management"
    ],
    keywords: ["drainage solutions", "french drain", "erosion control", "yard drainage"]
  },
  {
    slug: "flower-beds-planting",
    order: 7,
    icon: "flower",
    name: "Flower Beds & Planting",
    short: "Fresh beds, native plantings and garden makeovers that thrive here.",
    hero: "Beds that bloom without a fight.",
    intro:
      "The right plant in the right place barely needs you. We design and install flower beds and borders with native and adapted plants suited to Central Texas — color that comes back, structure year-round, and far less water than a typical bed.",
    features: [
      "Native & drought-tolerant plant selection",
      "New bed installs and full garden makeovers",
      "Seasonal color and perennial borders",
      "Bed shaping, edging and soil amendment",
      "Pollinator- and pet-friendly options"
    ],
    keywords: ["flower beds", "planting", "garden design", "native plants"]
  },
  {
    slug: "mulch-rock-gravel",
    order: 8,
    icon: "layers",
    name: "Mulch, Rock & Gravel",
    short: "Clean, finished beds and ground cover that cut water and weeds.",
    hero: "The finish that ties the whole yard together.",
    intro:
      "Mulch and decomposed granite aren't just looks — they cut evaporation, suppress weeds, and keep roots cool through a Central Texas summer. We install mulch, rock, gravel and decomposed granite for beds, paths and low-water ground cover, cleanly edged and built to last.",
    features: [
      "Hardwood mulch and bed refresh",
      "Decomposed granite paths and patios",
      "Rock and gravel ground cover",
      "River rock for drainage and accents",
      "Clean steel or stone bed edging"
    ],
    keywords: ["mulch installation", "decomposed granite", "gravel", "rock landscaping"]
  },
  {
    slug: "patios-patio-extensions",
    order: 9,
    icon: "wall",
    name: "Patios & Patio Extensions",
    short: "More usable outdoor space — pavers, stone and flagstone built to last.",
    hero: "Turn unused yard into a room you actually use.",
    intro:
      "A well-built patio is the backbone of outdoor living. We design and build new patios and extend existing ones with pavers, flagstone and stamped concrete — properly based to handle Central Texas soil movement, and shaped to fit how you entertain.",
    features: [
      "New patios and patio extensions",
      "Paver, flagstone & stone surfaces",
      "Proper base prep for our soils",
      "Seamless tie-in to existing hardscape",
      "Built for entertaining and everyday use"
    ],
    keywords: ["patio installation", "patio extension", "paver patio", "flagstone patio"]
  },
  {
    slug: "pergolas-outdoor-living",
    order: 10,
    icon: "wall",
    name: "Pergolas & Outdoor Living",
    short: "Shade, structure and outdoor rooms built for Hill Country living.",
    hero: "Shade you'll live under all summer.",
    intro:
      "This is the high-craft work our long-time customers rave about — custom pergolas, shade structures, and complete outdoor living spaces with fire features and built-in seating. If you want a backyard you actually spend time in, this is where it starts.",
    features: [
      "Custom pergolas & shade structures",
      "Outdoor living rooms and kitchens",
      "Fire pits and fire features",
      "Built-in seating and screening",
      "Designed to match your home and yard"
    ],
    keywords: ["pergola builder", "outdoor living", "shade structure", "outdoor kitchen"]
  },
  {
    slug: "masonry-stonework",
    order: 11,
    icon: "wall",
    name: "Masonry & Stonework",
    short: "Stone borders, columns and craftsmanship that anchor the landscape.",
    hero: "Stonework that makes a yard feel finished.",
    intro:
      "Texas limestone and quality masonry are what separate a good yard from a great one. We build stone borders, columns, veneer, steps and accents with real craftsmanship — the kind of detail customers name in their reviews years later.",
    features: [
      "Texas limestone and natural stone",
      "Stone borders, columns and veneer",
      "Steps, edging and accents",
      "Front-porch and entry masonry",
      "Craftsmanship that lasts decades"
    ],
    keywords: ["masonry", "stonework", "stone borders", "limestone landscaping"]
  },
  {
    slug: "retaining-walls",
    order: 12,
    icon: "wall",
    name: "Retaining Walls",
    short: "Engineered walls that hold slopes, create beds, and stop erosion.",
    hero: "Hold the hill, gain usable yard.",
    intro:
      "On Central Texas slopes, a proper retaining wall does double duty — it stops erosion and turns unusable grade into flat, planted, usable space. We build block and natural-stone walls with the drainage and base work that keep them standing for the long haul.",
    features: [
      "Block and natural-stone retaining walls",
      "Terracing for sloped lots",
      "Proper drainage behind every wall",
      "Raised planting beds and borders",
      "Erosion control on grade"
    ],
    keywords: ["retaining wall", "retaining walls", "stone wall", "terracing"]
  },
  {
    slug: "tree-care-trimming",
    order: 13,
    icon: "tree",
    name: "Tree Care & Trimming",
    short: "Shaping, trimming and health care for the trees that anchor your yard.",
    hero: "Healthy trees, cleanly shaped.",
    intro:
      "Trees are the most valuable living thing in most Central Texas yards — and the easiest to damage with a bad cut. We trim for health and structure, clear deadwood, and keep canopies shaped so your trees stay strong through drought, storms, and oak-wilt season.",
    features: [
      "Structural and aesthetic trimming",
      "Deadwood and hazard-limb removal",
      "Canopy thinning and shaping",
      "Oak-wilt-aware timing and sealing",
      "Debris haul-off and cleanup"
    ],
    keywords: ["tree trimming", "tree care", "tree service", "canopy trimming"]
  },
  {
    slug: "landscape-lighting",
    order: 14,
    icon: "bulb",
    name: "Landscape Lighting",
    short: "Low-voltage lighting that makes your landscape work after dark.",
    hero: "Your yard, twice as long each day.",
    intro:
      "Good lighting doubles the hours you enjoy your landscape and adds real safety and curb appeal. We design and install low-voltage lighting that highlights trees, paths, and architecture — warm, efficient, and controlled on a timer or from your phone.",
    features: [
      "Path, step and safety lighting",
      "Uplighting for trees and features",
      "Patio and outdoor-living lighting",
      "Efficient low-voltage LED systems",
      "Timer and smart-control setup"
    ],
    keywords: ["landscape lighting", "outdoor lighting", "low voltage lighting", "path lighting"]
  },
  {
    slug: "seasonal-cleanups-freeze-recovery",
    order: 15,
    icon: "broom",
    name: "Seasonal Cleanups & Freeze Recovery",
    short: "Get your landscape ready for each season — and back after a freeze.",
    hero: "Ready for every Central Texas season.",
    intro:
      "Central Texas throws it all at a landscape — summer drought, fall leaves, and the occasional hard freeze. We handle seasonal cleanups, bed refreshes, and freeze recovery: cutting back what's damaged, protecting what can be saved, and getting your yard ready to bounce back.",
    features: [
      "Spring and fall cleanups",
      "Leaf and bed cleanup",
      "Freeze-damage assessment and cutback",
      "Replanting and recovery after hard freezes",
      "Seasonal bed and mulch refresh"
    ],
    keywords: ["seasonal cleanup", "freeze recovery", "fall cleanup", "yard cleanup"]
  }
];
