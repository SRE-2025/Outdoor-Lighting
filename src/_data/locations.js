// Priority-corridor cities get full, differentiated landing pages.
// The remaining service-area cities are listed on the service-area page
// without thin duplicate pages (per SEO best practice).
module.exports = {
  // Full landing pages — unique copy per city.
  priority: [
    {
      slug: "buda",
      city: "Buda",
      county: "Hays County",
      headline: "Landscaping & Turf Management in Buda, TX",
      intro:
        "Buda is home. Our warehouse sits on Warehouse Dr, our crews live here, and we've been designing and maintaining Buda landscapes since long before the subdivisions filled in. From Garlic Creek to Whispering Hollow to the older homes off Main Street, we know the caliche, the clay, and exactly which plants survive a Buda August.",
      note:
        "Because we're based in Buda, our response times here are the fastest in our service area — and our long-time Buda customers are the ones who've stayed with us for 13, 20, even 30 years."
    },
    {
      slug: "kyle",
      city: "Kyle",
      county: "Hays County",
      headline: "Landscape Design & Lawn Care in Kyle, TX",
      intro:
        "Kyle has grown fast, and a lot of its newer yards were scraped flat and sodded on the cheap. We fix that — redesigning builder-grade yards into water-wise landscapes that actually fit the Hill Country, and keeping established Plum Creek and Steeplechase lawns thick and healthy year-round.",
      note:
        "Kyle sits minutes from our Buda shop, so full-service design-build and ongoing maintenance are both easy for us to deliver here."
    },
    {
      slug: "san-marcos",
      city: "San Marcos",
      county: "Hays County",
      headline: "Landscaping & Hardscape in San Marcos, TX",
      intro:
        "From the neighborhoods around Texas State to the newer developments off Wonder World, San Marcos yards deal with heat, slope, and thin soils. We design for it — native plantings, smart irrigation, and hardscape like patios and retaining walls that hold up on Central Texas grades.",
      note:
        "San Marcos anchors the south end of our service corridor, and it's one of our strongest markets for full landscape build-outs."
    },
    {
      slug: "dripping-springs",
      city: "Dripping Springs",
      county: "Hays County",
      headline: "Landscape Design in Dripping Springs, TX",
      intro:
        "Dripping Springs properties tend to be bigger, rockier, and more exposed — which makes thoughtful, drought-tolerant design essential. We specialize in native and xeriscape landscapes that look lush without fighting the land, plus pergolas and outdoor living spaces built for Hill Country entertaining.",
      note:
        "Larger Dripping Springs lots are ideal for the design-build and hardscape work our crews are known for."
    },
    {
      slug: "wimberley",
      city: "Wimberley",
      county: "Hays County",
      headline: "Native Landscaping in Wimberley, TX",
      intro:
        "Wimberley wears its Hill Country character proudly, and the best landscapes here lean into it — native plants, stone, and low-water design that blends with the cedar and limestone instead of fighting it. That's exactly the kind of work we love: beautiful, sustainable, and built to last through drought.",
      note:
        "We bring native-plant expertise and water-wise design to Wimberley properties of every size."
    },
    {
      slug: "driftwood",
      city: "Driftwood",
      county: "Hays County",
      headline: "Landscaping & Outdoor Living in Driftwood, TX",
      intro:
        "Driftwood's larger acreage and open skies are made for outdoor living — pergolas, patios, fire features, and native plantings that frame the view. We design and build outdoor spaces that make the most of Driftwood's country setting while staying easy to maintain and light on water.",
      note:
        "Driftwood is prime territory for our hardscape and outdoor-living work."
    },
    {
      slug: "manchaca",
      city: "Manchaca",
      county: "Travis County",
      headline: "Lawn Care & Landscaping in Manchaca, TX",
      intro:
        "Manchaca (Menchaca) sits right in our northern corridor between Buda and South Austin. Its mix of established homes and newer builds means everything from mature-tree care and turf renovation to full redesigns — all of which we handle with a single, reliable crew.",
      note:
        "Manchaca is an easy, close-in service area for both maintenance and design-build projects."
    },
    {
      slug: "del-valle",
      city: "Del Valle",
      county: "Travis County",
      headline: "Landscaping & Turf Care in Del Valle, TX",
      intro:
        "Del Valle's growth has brought a wave of new homes that need real landscaping — not just builder sod. We design water-wise yards, install native beds and turf, and keep them maintained so your outdoor space grows in beautifully instead of struggling through the first summer.",
      note:
        "Del Valle rounds out the eastern edge of our Central Texas service area."
    }
  ],

  // Additional covered cities — listed, not given thin standalone pages.
  additional: [
    "Austin", "Barton Creek", "Bear Creek", "Bee Cave", "Blanco", "Briarcliff",
    "Canyon Lake", "Creedmoor", "Hudson Bend", "Johnson City", "Lakeway",
    "Lost Creek", "Mustang Ridge", "Niederwald", "Point Venture", "Redwood",
    "Sunset Valley", "Uhland", "West Lake Hills"
  ]
};
