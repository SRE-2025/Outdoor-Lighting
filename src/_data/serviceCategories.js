// The 5 main service categories — matching the company's actual service menu.
// Detailed service pages (from services.js) are nested under each category by slug.
// Order here is the order shown in menus, the services index, and the home page.
module.exports = [
  {
    slug: "lawn-care",
    name: "Lawn Care Services",
    icon: "grass",
    short: "Mowing, feeding and turf health that keep your lawn thick and green all year.",
    intro:
      "Dependable, science-backed lawn care from one consistent crew — mowing on schedule, feeding and weed control timed for Central Texas, and everything it takes to keep St. Augustine, Bermuda and Zoysia lawns healthy through our seasons.",
    subs: [
      "lawn-care-mowing",
      "lawn-fertilization-weed-control",
      "sod-installation",
      "seasonal-cleanups-freeze-recovery"
    ]
  },
  {
    slug: "misting-systems",
    name: "Misting Systems",
    icon: "droplet",
    short: "Automated mosquito misting that makes your yard comfortable again.",
    intro:
      "Take your outdoor space back from mosquitoes. We install and service automated misting systems, sized and zoned for your property, so your patio and yard stay usable all through a Central Texas summer.",
    subs: [
      "mosquito-misting-systems"
    ]
  },
  {
    slug: "outdoor-living",
    name: "Outdoor Living",
    icon: "wall",
    short: "Design, hardscape and planting that turn your yard into a room you actually use.",
    intro:
      "This is the high-craft work our long-time customers rave about — landscape design, patios, pergolas, masonry, retaining walls, plantings and lighting that transform a plain yard into a true outdoor living space built for how you live.",
    subs: [
      "landscape-design",
      "patios-patio-extensions",
      "pergolas-outdoor-living",
      "masonry-stonework",
      "retaining-walls",
      "flower-beds-planting",
      "mulch-rock-gravel",
      "landscape-lighting"
    ]
  },
  {
    slug: "sprinkler-systems",
    name: "Sprinkler Systems",
    icon: "water",
    short: "Efficient irrigation and drainage for a healthy, water-wise landscape.",
    intro:
      "Water smarter, not more. We install, tune and repair sprinkler and drip irrigation, and solve drainage and erosion, so every drop goes where it's needed and stays inside Hays County restrictions.",
    subs: [
      "irrigation-sprinkler-systems",
      "drainage-erosion-control"
    ]
  },
  {
    slug: "tree-care",
    name: "Tree Care",
    icon: "tree",
    short: "Trimming and health care for the trees that anchor your landscape.",
    intro:
      "Trees are the most valuable living thing in most Central Texas yards. We trim for health and structure, clear deadwood, and shape canopies so your trees stay strong through drought, storms and oak-wilt season.",
    subs: [
      "tree-care-trimming"
    ]
  }
];
