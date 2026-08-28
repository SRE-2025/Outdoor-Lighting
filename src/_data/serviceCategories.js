// The 5 main service categories — matching the company's actual service menu.
// Detailed service pages (from services.js) are nested under each category by slug.
// Order here is the order shown in menus, the services index, and the home page.
module.exports = [
  {
    slug: "lawn-care",
    name: "Lawn Care Services",
    icon: "grass",
    photo: "lawn",
    short: "Mowing, feeding and turf health that keep your lawn thick and green all year.",
    intro:
      "Dependable, science-backed lawn care from one consistent crew — mowing on schedule, feeding and weed control timed for Central Texas, and everything it takes to keep St. Augustine, Bermuda and Zoysia lawns healthy through our seasons.",
    subs: [
      "lawn-care-mowing",
      "lawn-fertilization-weed-control",
      "sod-installation",
      "seasonal-cleanups-freeze-recovery"
    ],
    body: [
      {
        h: "A healthy lawn here is managed, not just mowed",
        p: [
          "Keeping turf green in Central Texas is genuinely hard. Our warm-season grasses face months of triple-digit heat, watering restrictions that limit when you can help them, clay and caliche soils that fight root growth, and a whole roster of pests and diseases that thrive in our climate. A lawn that just gets cut every couple of weeks doesn't stand a chance against all that.",
          "Our lawn care brings the whole picture together: mowing at the right height, feeding and weed control timed for our seasons, fresh sod where the lawn is beyond saving, and seasonal cleanups that carry the turf through the extremes. It's one coordinated program from one consistent crew, not a handful of disconnected visits."
        ]
      },
      {
        h: "How the pieces fit together",
        p: [
          "Mowing and edging keep the lawn at the correct height for its grass type and season, which by itself does more for turf health than most people realize. Fertilization and weed control build density from the roots so the lawn crowds weeds out instead of you chasing them with a spray bottle. When turf is too far gone, new sod, properly prepped, resets the lawn. And seasonal cleanups clear leaves, refresh beds, and handle freeze recovery so nothing gets smothered or lost to the cold.",
          "Each service supports the others. A well-mowed lawn responds better to feeding, a well-fed lawn resists disease, and a clean, cared-for yard shows fewer problems in the first place. Run together, they compound."
        ]
      },
      {
        h: "One reliable crew that knows your yard",
        p: [
          "The biggest advantage of putting your whole lawn program with us is continuity. The same insured crew comes back on schedule, learns your property's quirks, its dry corners, its shady patches, its problem weeds, and catches small issues while they're still small. There's no rotating cast of subcontractors and no starting over every visit.",
          "That consistency, plus real agronomic know-how for our specific grasses and soils, is what keeps a lawn thick and green through a Central Texas year instead of just barely surviving it."
        ]
      }
    ],
    faqs: [
      { q: "What does a full lawn care program include?", a: "Ours brings together scheduled mowing and edging at the right height, timed fertilization and weed control, sod installation when a lawn needs replacing, and seasonal cleanups and freeze recovery. Managed together as one program, these keep St. Augustine, Bermuda, and Zoysia lawns healthy through our heat, drought, and occasional freezes." },
      { q: "Do I need all the services or can I pick some?", a: "You can start with what you need most, mowing, a feeding and weed program, a sod install, and add from there. That said, the services reinforce each other: mowing height, feeding, and cleanups all affect how well the lawn resists weeds and disease, so a coordinated program gets better results than any one piece alone." },
      { q: "Which grasses do you care for?", a: "The warm-season grasses common across Central Texas, primarily St. Augustine, Bermuda, and Zoysia. Each has different mowing heights, water needs, and disease risks, and we tailor the care to your specific turf rather than treating every lawn the same." },
      { q: "Will the same crew handle my lawn each time?", a: "Yes. You get one consistent, insured crew rather than rotating subcontractors, which means they learn your property and catch problems early. That continuity is a big part of why our long-time customers stay with us for years." },
      { q: "Can you keep my lawn healthy within watering restrictions?", a: "That's exactly what the program is built for. Correct mowing height, root-building fertilization, and healthy soil all help turf hold up on limited watering days, and we can coordinate with efficient irrigation so the lawn gets the most from every drop it's allowed." }
    ]
  },
  {
    slug: "misting-systems",
    name: "Misting Systems",
    icon: "droplet",
    photo: "care",
    short: "Automated mosquito misting that makes your yard comfortable again.",
    intro:
      "Take your outdoor space back from mosquitoes. We install and service automated misting systems, sized and zoned for your property, so your patio and yard stay usable all through a Central Texas summer.",
    subs: [
      "mosquito-misting-systems"
    ],
    body: [
      {
        h: "Comfort that lets you actually use your yard",
        p: [
          "There's no point building a beautiful patio if the mosquitoes own it after sundown. In Central Texas the biting starts right when the evenings finally cool off enough to be outside, and our warm, humid stretches after a rain send the population soaring. A misting system exists to solve exactly that, so the outdoor space you invested in is comfortable and usable, not surrendered every night.",
          "This category is focused: automated misting systems, designed, installed, and serviced to keep mosquitoes and other biting insects off your patio, seating areas, and yard throughout the season, without candles, sprays, or a fight."
        ]
      },
      {
        h: "Designed and installed for your property",
        p: [
          "Every yard is different, so we size the reservoir and pump to your property and lay out the zones around where you actually spend time. The tubing and nozzles are routed discreetly through beds, along fences, and under eaves so the system nearly disappears while still reaching the shady, humid spots where mosquitoes gather. Then it runs on an automatic schedule, typically short bursts when the insects are most active.",
          "Because we're a landscape company first, we install misting so it fits the whole yard rather than getting stapled onto a fence. The result is coverage where it counts and a system you barely notice."
        ]
      },
      {
        h: "Serviced by family, alongside pest control",
        p: [
          "A misting system keeps working only if the reservoir is refilled, the nozzles stay clear, and the timing is tuned as the season changes. We handle that ongoing service so it performs all summer instead of quietly running dry. And our sister company, Excel Pest & Lawn Control, is the same family and the same crews, so your misting and broader pest control come from one team that already knows your property.",
          "That means one trusted point of contact for keeping the biting insects handled, indoors and out."
        ]
      }
    ],
    faqs: [
      { q: "How well does a misting system control mosquitoes?", a: "A properly sized and placed system makes a real, noticeable difference in the treated zones, knocking down mosquitoes and other biting insects on an automatic schedule so your patio and seating areas stay usable. The keys are correct sizing, smart nozzle placement, and ongoing service, all of which we handle." },
      { q: "Is a misting system better than sprays or candles?", a: "For a permanent outdoor living space, generally yes. Candles and sprays are a nightly chore that only cover the spot you're standing in, while a misting system treats your whole seating area automatically on schedule. You set it once and the yard stays comfortable without you thinking about it." },
      { q: "Will the system be visible in my landscape?", a: "Not much. We route the tubing and tuck the nozzles discreetly through beds, along fence lines, and under eaves, so the system blends into the landscape rather than standing out. Clean, hidden lines are a mark of a proper install and something we take care to get right." },
      { q: "Do you service the system after installation?", a: "Yes. We refill the reservoir, keep the nozzles clear, and tune the timing through the season so the system keeps performing. With our sister company Excel Pest & Lawn Control handling broader pest control, one family team can keep the biting insects managed for your whole property." },
      { q: "When should I have a misting system installed?", a: "Ideally before mosquito season ramps up, so it's running before the warm, humid months peak. We install year-round though, and adding one mid-season still hands you the rest of the summer back on your patio." }
    ]
  },
  {
    slug: "outdoor-living",
    name: "Outdoor Living",
    icon: "wall",
    photo: "outdoor",
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
    ],
    body: [
      {
        h: "Turning a yard into a room you live in",
        p: [
          "Outdoor living is our signature work, the high-craft side of the business our long-time customers rave about. It's the difference between a yard you mow and a yard you actually spend your evenings in: a shaded patio, a fire feature for the cooler months, stonework that anchors the space, beds that soften it, and lighting that keeps it working after dark. In a climate where the best hours are often after sunset, that outdoor room earns its keep.",
          "This category pulls together everything it takes to build that space, design, patios, pergolas, masonry, retaining walls, planting, mulch and stone, and lighting, as one coordinated project rather than a pile of separate jobs."
        ]
      },
      {
        h: "It starts with design, and it stays together",
        p: [
          "Every outdoor living project begins on paper with Gye walking your property, because the patio, the shade, the plantings, and the lighting all have to work as one composition. A pergola has to shade the patio where the afternoon sun actually hits. The retaining wall has to create the flat ground the patio sits on. The beds and stonework frame it, and the lighting brings it alive at night. Designed together, the pieces reinforce each other.",
          "Because we're a design-build company, the same team designs and builds all of it, no handoff, no gap between the vision and the crew. That's how the finished space feels intentional instead of assembled from parts that don't quite match."
        ]
      },
      {
        h: "Built for our soil, weather, and stone",
        p: [
          "High-craft outdoor work has to survive Central Texas to be worth anything. Patios and walls are based to handle expansive clay that swells and shrinks. Structures are anchored for our sun and wind. Stonework ties into native Hill Country limestone, and plantings lean native and low-water so the space looks lush within our restrictions. This is the craftsmanship customers name in their reviews years later.",
          "The payoff is an outdoor space that holds up for decades and gets better as the plantings mature, not one that looks dated or cracked in a few seasons."
        ]
      }
    ],
    faqs: [
      { q: "What counts as outdoor living work?", a: "It's the whole toolkit for turning a yard into a usable outdoor room: landscape design, patios and patio extensions, pergolas and shade structures, masonry and stonework, retaining walls, flower beds and planting, mulch and stone, and landscape lighting. We design and build these together so they read as one cohesive space." },
      { q: "Do I have to do the whole project at once?", a: "No, and many clients phase it. Because we design the full outdoor space up front, you can start with the patio and pergola, then add a fire feature, stonework, or lighting in a later season, and each phase fits the master plan instead of looking bolted on." },
      { q: "Why design the space before building it?", a: "Because the elements depend on each other, the pergola shades the patio, the wall creates the level ground, the lighting brings it all to life after dark. Designing them together is what makes the finished space feel intentional rather than assembled piecemeal, and it lets you phase the work without conflicts." },
      { q: "Will an outdoor living space hold up in Central Texas?", a: "It will when it's built for our conditions, which is the whole point of doing it right. We base patios and walls for expansive clay, anchor structures for our sun and wind, and lean on native, low-water plantings, so the space lasts for decades and matures beautifully rather than cracking or fading fast." },
      { q: "Do you handle both the hardscape and the plantings?", a: "Yes, that's the advantage of a design-build company. One team designs and builds the patio, pergola, and stonework and installs the beds, mulch, and lighting, so the hard and soft elements are coordinated and there's a single company accountable for the whole result." }
    ]
  },
  {
    slug: "sprinkler-systems",
    name: "Sprinkler Systems",
    icon: "water",
    photo: "garden",
    short: "Efficient irrigation and drainage for a healthy, water-wise landscape.",
    intro:
      "Water smarter, not more. We install, tune and repair sprinkler and drip irrigation, and solve drainage and erosion, so every drop goes where it's needed and stays inside Hays County restrictions.",
    subs: [
      "irrigation-sprinkler-systems",
      "drainage-erosion-control"
    ],
    body: [
      {
        h: "Two sides of the same problem: water",
        p: [
          "In Central Texas, water is either the thing you can't get enough of or the thing you can't get rid of fast enough, and often both in the same year. Months of drought under watering restrictions give way to a flash-flood downpour that our clay soil sheds straight toward the foundation. Managing your landscape's water well means handling both extremes, which is why irrigation and drainage belong together.",
          "This category covers the whole water picture: efficient sprinkler and drip irrigation that keeps plants alive on limited watering days, and drainage and erosion control that moves storm runoff safely away from your home. Get both right and your landscape thrives while your foundation stays protected."
        ]
      },
      {
        h: "Efficient irrigation for a restricted region",
        p: [
          "With allowed watering days limited across Hays and Travis counties, efficiency isn't optional. We install and tune systems that zone turf, beds, and trees separately, put beds and trees on drip to nearly eliminate evaporation, and run on smart, weather-based controllers that skip watering after rain and stay inside the rules. We also repair and re-tune existing systems, since a cracked head or stuck valve can waste an astonishing amount of water quietly.",
          "The goal is the least water your landscape needs to thrive, delivered exactly where the roots are and only on the days you're allowed to use it."
        ]
      },
      {
        h: "Drainage that protects the biggest thing you own",
        p: [
          "When the downpour comes, our clay soil doesn't absorb it, it runs, and it heads for the lowest point, which is too often your foundation. We solve standing water, soggy beds, and eroding slopes with regrading, French drains, catch basins, dry creek beds, and swales, routing water away from the house and off your slopes before it does damage.",
          "On our expansive clay, water pooling against a slab is a real long-term threat. Establishing positive drainage away from the home is some of the highest-value work we do, and it pairs naturally with getting the irrigation right so you're neither over-watering nor letting storms run wild."
        ]
      }
    ],
    faqs: [
      { q: "Why group irrigation and drainage together?", a: "Because they're two halves of managing your landscape's water. Irrigation gets water to your plants efficiently during our droughts and restrictions, while drainage moves storm runoff safely away from your home during our downpours. A yard needs both to stay healthy and protect the foundation, so we handle them as one water strategy." },
      { q: "How can I keep my landscape healthy within watering restrictions?", a: "An efficient, well-zoned system is the answer. Putting beds and trees on drip, separating sun and shade zones, and running a smart weather-based controller lets your landscape get what it needs on the limited days you're allowed to water. We design and tune systems specifically for that constraint." },
      { q: "How do I know if I have a drainage problem?", a: "Common signs are standing water or soggy beds after rain, a spot that stays green and mushy, erosion channels on a slope, or water pooling near the foundation. Any of those is worth addressing, especially near the house, since our expansive clay makes foundation drainage a real priority." },
      { q: "Do you fix existing sprinkler systems or only install new ones?", a: "Both. A large share of our irrigation work is repairing and re-tuning existing systems, finding broken heads, leaks, and stuck valves, and correcting inefficient zoning and scheduling. We're glad to bring a neglected system back to working efficiently, whoever installed it." },
      { q: "Can drainage issues really threaten my foundation?", a: "Yes, and it's why we treat it seriously. Our clay swells and shrinks with moisture, and water pooling against a slab worsens that movement over time. Grading and drainage that carry water away from the house are among the most protective investments you can make in the property." }
    ]
  },
  {
    slug: "tree-care",
    name: "Tree Care",
    icon: "tree",
    photo: "care",
    short: "Trimming and health care for the trees that anchor your landscape.",
    intro:
      "Trees are the most valuable living thing in most Central Texas yards. We trim for health and structure, clear deadwood, and shape canopies so your trees stay strong through drought, storms and oak-wilt season.",
    subs: [
      "tree-care-trimming"
    ],
    body: [
      {
        h: "The most valuable living thing in your yard",
        p: [
          "The live oaks, red oaks, cedar elms, and pecans that shade Central Texas properties are usually worth more than anything else growing there, and the hardest to replace. A mature shade tree is decades of growth you can't buy back, it cools the house and the yard, and it anchors the whole landscape. It's also the easiest thing on the property to damage with a careless cut, because trees don't heal wounds, they seal around them permanently.",
          "Our tree care exists to protect that investment: trimming for health and structure, clearing deadwood and hazard limbs, and shaping canopies so your trees stay strong through drought, storms, and oak-wilt season."
        ]
      },
      {
        h: "Oak wilt makes local knowledge essential",
        p: [
          "You can't do tree care in Central Texas without accounting for oak wilt, the fungal disease that spreads through the region and can kill oaks, sometimes whole connected stands of them, quickly. It's introduced through fresh wounds by beetles drawn to the sap, so timing and technique aren't optional details, they're the whole game. We avoid pruning oaks during the high-risk period and seal every oak cut immediately, every single time.",
          "This is exactly the kind of thing a crew from out of the area gets wrong. Trimming your oaks at the wrong time of year or leaving cuts unsealed can introduce the very disease you were trying to protect them from. Doing it right takes local knowledge, and we've been at it here since 1998."
        ]
      },
      {
        h: "Trimming that makes trees stronger",
        p: [
          "Good trimming is about the tree's long-term health, not just making it smaller this week. We shape young trees for strong structure early, remove deadwood and hazard limbs before a storm or ice event brings them down on your roof, and thin canopies thoughtfully to let light and wind pass through, without topping, gutting, or lion-tailing the tree. Then we haul off the debris and leave the yard clean.",
          "Thinning done right helps a tree ride out our flash-flood downpours and rare hard freezes. Done wrong, it stresses the tree and invites decay. We're also honest about scope and will tell you plainly when a job is better left to a specialist or left alone."
        ]
      }
    ],
    faqs: [
      { q: "Why is timing so important for trimming oaks here?", a: "Because of oak wilt. The disease spreads through fresh wounds by beetles that are most active in the spring, so we avoid pruning oaks during that high-risk window and seal every oak cut immediately year-round. Getting the timing and sealing right is the single most important part of caring for Central Texas oaks." },
      { q: "What is oak wilt and can it be prevented?", a: "Oak wilt is a fungal disease that can kill oaks quickly and spread between trees through connected roots. It's largely preventable with proper pruning practices: trimming at low-risk times, sealing every cut, and using clean technique. Using a crew that understands local trees is the best protection there is." },
      { q: "How often should trees be trimmed?", a: "Most established shade trees benefit from attention every few years, while young trees are worth shaping more often to build strong structure early. We recommend based on the tree's actual health, deadwood, and canopy rather than a fixed schedule, since over-trimming can harm a tree as much as neglect." },
      { q: "Can you remove limbs that threaten my house before a storm?", a: "Yes, and it's one of the smartest preventive steps you can take. We clear deadwood and hazard limbs that could fall on your roof, car, or fence during one of our downpours or a rare ice event. Handling it ahead of time is far cheaper than dealing with the damage afterward." },
      { q: "Do you do large tree removals?", a: "Our focus is trimming, shaping, and tree health care that keeps your trees thriving, and we're always straight about scope. If a job calls for a large removal or specialized equipment, we'll tell you honestly rather than take on work better suited to a dedicated removal crew." }
    ]
  }
];
