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
    },
    {
      slug: "south-austin",
      city: "South Austin",
      county: "Travis County",
      headline: "Landscaping & Lawn Care in South Austin, TX",
      intro:
        "South Austin is where this business started back in 1998, and it's still core territory for us. From established yards off Manchaca and Slaughter to newer builds toward Buda, we design, build and maintain landscapes that fit South Austin's mix of mature trees, tight lots, and Central Texas heat.",
      note:
        "South Austin is our original home turf — and one of our fastest-response areas."
    },
    {
      slug: "lakeway",
      city: "Lakeway",
      county: "Travis County",
      headline: "Landscape Design & Hardscape in Lakeway, TX",
      intro:
        "Lakeway's hillside lots and lake views call for landscaping that works with the grade, not against it — retaining walls, terracing, native plantings and outdoor living spaces that make the most of the setting. We design and build for exactly that kind of Hill Country property.",
      note:
        "Lakeway is prime territory for our retaining-wall, hardscape and outdoor-living work."
    },
    {
      slug: "bee-cave",
      city: "Bee Cave",
      county: "Travis County",
      headline: "Landscaping & Outdoor Living in Bee Cave, TX",
      intro:
        "Bee Cave properties tend to be larger, rockier, and beautifully exposed to the Hill Country. That's ideal for the water-wise, native-forward design and high-craft hardscape — pergolas, patios, stonework — that we're known for. We build outdoor spaces that match the setting and the home.",
      note:
        "Bee Cave is a strong market for our full design-build and outdoor-living projects."
    },
    {
      slug: "west-lake-hills",
      city: "West Lake Hills",
      county: "Travis County",
      headline: "Landscape Design in West Lake Hills, TX",
      intro:
        "West Lake Hills homes deserve landscaping with the same craftsmanship as the architecture. We bring careful design, quality stonework and masonry, and meticulous maintenance to Westlake properties — landscapes that look intentional in every season and hold their value.",
      note:
        "West Lake Hills is a premium market for our design, masonry and maintenance work."
    }
  ],

  // Additional covered cities — listed, not given thin standalone pages.
  additional: [
    "Austin", "Barton Creek", "Bear Creek", "Blanco", "Briarcliff",
    "Canyon Lake", "Creedmoor", "Hudson Bend", "Johnson City",
    "Lost Creek", "Mustang Ridge", "Niederwald", "Point Venture", "Redwood",
    "Sunset Valley", "Uhland"
  ]
};
