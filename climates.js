// climates.js
// Super in-depth climate, habitat, threats & preservation information
// for all 18 penguin species used in your app.
//
// No modules — attaches data and functions to `window` for plain browser use.

// Store all penguin climate info
window.climateData = {
  // 1) EMPREROR
  emperor: {
    habitat: `
Emperor Penguins (Aptenodytes forsteri) are obligate Antarctic breeders and one of the most ice-dependent penguin species.
They are found almost exclusively on sea ice surrounding the Antarctic continent and in areas of fast ice and pack ice where stable breeding platforms form.
Their range encircles the continent and they are associated with areas of multi-year ice and broad pack-ice fields that persist through the austral winter.
During the non-breeding season some individuals disperse northwards into marginal ice zones, polynyas and the edges of the pack where foraging is productive.
Key breeding sites include large fast-ice expanses adjacent to the continental landmass; animals travel from open water to these sites to begin their iconic winter breeding cycle.
Emperors are adapted to living at the extremes — they can remain on the sea ice for prolonged periods and forage across large distances, following prey concentrations that change seasonally.
`,
    zoos: `
Because Emperor Penguins require cold, stable, and extensive icy environments, they are rarely kept in zoos or aquaria; historically, keeping emperors in captivity has been extraordinarily difficult and expensive.
To replicate natural conditions institutions must provide very large chilled enclosures, deep pools for long and deep dives, extensive air cooling, and complex husbandry regimes to mimic natural light cycles.
Only a handful of large facilities have attempted to care for emperor penguins, and successful, long-term ex situ programs are limited.
Consequently, most public education about emperors relies on photographic, film, and virtual exhibits rather than live colonies in zoo settings.
`,
    food: `
Emperors are top mid-water predators in the Antarctic ecosystem. Their diet is dominated by:
• Antarctic fish species (e.g., Antarctic silverfish, Pleuragramma antarcticum) — important particularly under the sea ice;  
• Antarctic krill (Euphausia superba) — consumed where abundant;  
• Smaller amounts of squid and other crustaceans depending on local availability.
Emperors are deep divers and can exploit prey layers inaccessible to many other predators, meaning their diet composition can vary strongly by location and season.
Foraging trips during chick rearing balance the need to return frequently with the need to find prey patches that are often deep and patchy.
`,
    breeding: `
Breeding is extraordinary among birds: emperors breed during the Antarctic winter. Adults undertake longshore or sea-ice marches to traditional colony sites in late autumn; courtship and egg laying occur in the harshest months (May–July).
Females lay a single egg, which the male accepts and transfers onto his feet, covering it with a brood pouch. The male incubates the egg alone for approximately 64 days, fasting and enduring severe cold and wind.
During incubation, males huddle tightly in large groups to conserve heat. Females return from months at sea with food and relieve males, who then go to sea to feed.
Chicks hatch in late winter/early spring and are brooded and fed by parents; fledging occurs several months later when chicks reach sufficient mass and plumage.
Success depends on sea-ice stability and prey access. Because emperors rely on large sea-ice platforms, even small shifts in ice dynamics can cause breeding failure by lengthening parental foraging trips and increasing chick starvation risk.
`,
    dangers: `
Emperors face a set of natural and anthropogenic threats:
• Climate change: reduction and increased variability of sea ice directly impacts breeding platform availability, timing of breeding, and prey accessibility.  
• Food web shifts: changes in prey abundance or distribution (fish, krill) caused by warming or oceanographic changes reduce feeding success.  
• Extreme weather events: storms or anomalous warming can cause mass chick mortality.  
• Local disturbance from increasing scientific presence or tourism in some regions, though this is currently limited compared to other threats.  
• Indirect ecosystem shifts (e.g., changes in predator populations or competition) that alter prey dynamics.
Because emperors depend on the largest and most persistent sea-ice, they are considered sentinel species for Antarctic environmental change.
`,
    human: `
Human interactions are complex for emperor penguins. Direct human disturbance is relatively rare because most breeding colonies are remote and visited infrequently.
However:
• Scientific infrastructure and increased polar tourism near some breeding areas can cause local disturbance if not managed carefully.  
• The major human influence is through global greenhouse gas emissions driving climate change and altering sea-ice dynamics and ocean productivity.  
• Fisheries operating in the Southern Ocean (notably krill fisheries) have the potential to affect prey availability, though management and seasonal restrictions aim to reduce direct impacts.
Overall, empires are more impacted by global-scale human activities (climate, fisheries) than by local direct interactions.
`,
    preservation: `
Conservation for emperor penguins requires large-scale environmental protections and climate mitigation:
• Monitoring: systematic censuses using satellite imagery and field studies to track colony size and distribution.  
• Climate action: global reductions in greenhouse gas emissions are essential to preserve Antarctic sea-ice habitats.  
• Fisheries management: precautionary management of krill fisheries to ensure sufficient prey availability in key foraging areas.  
• Protected areas: designation of marine protected areas (MPAs) to safeguard foraging zones and reduce combined stressors.  
• Research: investment in long-term ecological research to model population responses to ice and prey changes and to inform adaptive conservation.
Given their ice dependence, emperors function as a flagship for Antarctic ecosystem conservation and climate policy influence.
`
  },

  // 2) KING
  king: {
    habitat: `
King Penguins (Aptenodytes patagonicus) breed mainly on subantarctic islands and some cool temperate islands in the Southern Ocean.
They prefer beaches, tussock grass zones and gently sloping beaches adjacent to productive oceanic fronts where rich feeding grounds occur.
Major breeding islands include South Georgia, the Falkland Islands, the Crozet Archipelago, Kerguelen, and Macquarie Island (though distributions vary).
Kings are associated with oceanic frontal systems where prey (myctophid fish and squid) aggregate; they forage over continental shelf breaks and in pelagic waters often many tens to hundreds of kilometres from colonies.
They form large, dense colonies onshore and rely on nearby productive marine areas to provision chicks.
`,
    zoos: `
King penguins are commonly featured in large aquaria and zoos because, while still large and requiring considerable care, they adapt relatively well to captive environments compared with emperors.
Effective exhibits provide:
• Deep plunge pools for sustained swimming,  
• Large flat holding areas and beach substrates,  
• Climate control to keep ambient temperatures cool,  
• Enrichment to maintain foraging and social behaviours.
Captive king penguins are valuable for public education, husbandry research, and as an insurance population, but they still require experienced veterinary and husbandry teams and substantial space.
`,
    food: `
King penguins are primarily piscivorous, feeding on mid-water fish such as myctophids (lanternfish) and in some areas deep-water fish and squid.
They take prey at oceanic fronts and shelf edges where prey are vertically aggregated, often relying on deep dives and extended foraging trips.
Their diet is highly influenced by regional oceanography, and seasonal changes in prey availability can affect breeding success strongly.
`,
    breeding: `
King penguins have an unusually long breeding cycle relative to many other penguins: they can take more than a year to raise a single chick under some environmental conditions.
Pairs may oust earlier chicks or delay breeding in poor conditions. They do not build nests but brood a single chick on the feet or in shallow depressions; incubation is shared.
Chick rearing is extended, with a prolonged guard and crèche phase: young may remain with parents or in groups until they are ready to fledge many months later.
This prolonged parental care imposes heavy foraging demands on adults and ties breeding success closely to sustained prey availability over long time windows.
`,
    dangers: `
Key threats include:
• Changes in prey distribution due to ocean warming and shifts in frontal systems, reducing consistent access to myctophids and squid.  
• Fisheries impacts: competition with commercial fisheries or indirect effects from bycatch.  
• Disturbance from tourism and introduced predators on some islands (e.g., rats, cats) where biosecurity is insufficient.  
• Local environmental changes (pollution, oil spills) that can cause chick mortality or habitat deterioration.
Because kings rely on predictable oceanic fronts, they are sensitive to long-term changes in oceanography.
`,
    human: `
Kings are a popular species for wildlife tourism and public exhibits; this increases public awareness but also requires careful visitor management to avoid disturbance during critical breeding windows.
Fisheries and shipping in the Southern Ocean present potential conflicts; careful planning of shipping routes, pollution prevention, and fishery management are needed to reduce impacts.
Research projects that track foraging and demography provide essential baseline data to inform conservation.
`,
    preservation: `
Conservation actions include:
• Continued long-term monitoring of colony trends and demography.  
• Marine spatial planning to safeguard foraging grounds and reduce conflicts with fisheries.  
• Biosecurity on breeding islands to exclude introduced predators.  
• International cooperation since kings range across multiple jurisdictions and high-seas feeding grounds.  
• Public engagement through responsible eco-tourism and captive display programs to promote conservation funding and awareness.
`
  },

  // 3) ADELIE (already detailed earlier, preserved and expanded)
  adelie: {
    habitat: `
Adélie Penguins (Pygoscelis adeliae) are classic Antarctic shoreline breeders. They occupy ice-free rocky coasts, headlands and small islands adjacent to sea ice.
Their breeding distribution spans much of the Antarctic coastline: significant colonies exist at Cape Adare, Terre Adélie, Cape Royds, Cape Crozier, Esperanza Bay, and multiple island archipelagos such as the South Shetland and South Orkney Islands.
Adélies exploit environments where pebble substrates are available for nest construction and where sea ice conditions allow seasonal access to foraging grounds.
They also exhibit large-scale seasonal migrations linked to sea ice advance and retreat, moving northwards in winter when packs expand and returning to breed on coasts in austral summer.
`,
    zoos: `
Ex situ exhibits for Adélie penguins must replicate seasonal cold and control local humidity and air temperature to prevent overheating.
Specialised Antarctic exhibits are expensive to operate due to refrigeration requirements, but they provide excellent educational opportunities and avenues for ex situ research on behaviour and physiology.
Zoos housing Adélies usually run husbandry programs focused on nutrition, breeding biology, and veterinary care for cold-adapted species.
`,
    food: `
The diet is dominated by Antarctic krill (Euphausia superba) in many colonies, supplemented by small Antarctic fish and squid when available.
Krill is often the central driver of foraging ecology for Adélies; changes in krill abundance due to fishing or climate can have immediate impacts on chick survival and adult condition.
Foraging typically consists of multiple short trips during chick rearing, with parents balancing provisioning frequency against prey patch quality.
`,
    breeding: `
Adélies arrive at colonies in early spring (September–October) and lay two eggs in late October–November.
Both parents share incubation, often alternating long fasts exceeding 30 days per shift. Chicks hatch after around 35–40 days and require intensive parental provisioning.
Chicks fledge at approximately 50–60 days and then form juvenile groups. Fledgling survival is highly variable and correlates strongly with sea ice and krill availability. Under favourable conditions, breeding success can exceed 1.2 chicks per nest; poor ice conditions can reduce success sharply.
`,
    dangers: `
Major natural and anthropogenic risks:
• Leopard seals (Hydrurga leptonyx) and orcas prey on adults and juveniles at sea.  
• Skua and giant petrels prey on eggs and small chicks.  
• Reduction of krill due to climate change or fisheries depletes food resources.  
• Extreme sea-ice conditions (too extensive or delayed breakup) make parent travel longer, increasing chick starvation risk.  
• Local pollution and disturbance from research stations or tourism, while often managed, can still cause impacts at sensitive colonies.
`,
    human: `
Human impact is mostly indirect via climate change and krill fisheries. Research presence near colonies has generated strong scientific knowledge about Adélies, with many long-term studies providing data on the impacts of environmental variability.
Tourism is controlled in most Antarctic regions; when appropriately managed, human visitation has not been shown to reduce breeding success and has educational benefits. However, large or poorly managed visitation could increase disturbance.
`,
    preservation: `
Preservation actions focus on:
• Robust krill fishery management under an ecosystem approach.  
• Continued long-term monitoring, including satellite and aerial surveys for population trends.  
• Protection and regulation of human activities near major colonies (research and tourism).  
• Climate mitigation at a global scale to slow sea-ice decline and ecosystem changes.
`
  },

  // 4) CHINSTRAP
  chinstrap: {
    habitat: `
Chinstrap Penguins (Pygoscelis antarctica) breed predominantly on Antarctic and subantarctic rocky islands and coastal slopes.
They prefer areas free from heavy snow cover where pebble nesting is possible, and colonies are often located on steep beaches and slopes that provide quick access to the sea.
Breeding range includes the South Shetland Islands, South Orkney Islands, South Georgia, and other islands around the Antarctic Peninsula.
Outside the breeding season they congregate at sea and exploit productive waters near the Antarctic Polar Front.
`,
    zoos: `
Chinstraps are occasionally kept in aquarium and zoo collections where specialists can provide cold water pools and rocky nesting substrates.
Captive care focuses on maintaining appropriate water quality, diet (krill and small fish), and conditions that mimic seasonal cycles to support breeding behaviour.
Their social and vocal nature makes them engaging exhibit animals when husbandry needs are met.
`,
    food: `
Diet is dominated by Antarctic krill and small fish. Foraging often occurs in flocks and in association with other penguin species, with individuals capable of diving to moderate depths for prey patches.
Chinstrap feeding ecology is tightly connected to krill availability and the position of the Polar Front in their foraging regions.
`,
    breeding: `
Chinstraps build pebble nests and typically lay two eggs. Both parents share incubation and chick rearing responsibilities.
Colonies can be very large and densely packed; nest defense is vigorous and vocal communication is a strong feature of colony life.
Chick rearing is rapid and juveniles form crèches while parents forage.
`,
    dangers: `
Primary threats include:
• Variability in krill stocks due to climate change and fisheries, affecting foraging success.  
• Predation by skua and giant petrels on eggs and chicks; leopard seals at sea.  
• Climate-driven shifts in sea-ice extent and oceanographic conditions that alter prey distribution.  
• Localised human impacts from research stations and tourism where management is inadequate.
`,
    human: `
Human activity impacts chinstraps mostly indirectly through climate change and fishery interactions. Research and ecotourism near the Antarctic Peninsula are managed under strict guidelines, but increasing visitor numbers require careful oversight to minimise disturbance.
`,
    preservation: `
Conservation focuses on ecosystem-based fishery management for krill, international monitoring of colonies, and protection of key breeding islands from invasive species and undue human disturbance.
`
  },

  // 5) GENTOO
  gentoo: {
    habitat: `
Gentoo Penguins (Pygoscelis papua) nest on beaches, rocky shores, and grassy areas of islands in subantarctic and temperate regions.
They are typically found on the Antarctic Peninsula and subantarctic islands such as South Georgia, the Falklands, and islands off the southern tips of South America.
Gentoos prefer accessible, ice-free coastal sites where pebble or rock materials are available for nest construction and where relatively nearshore foraging is productive.
Because they forage relatively close to shore, their colonies are distributed where local prey sources are reliable.
`,
    zoos: `
Gentoos are often included in aquarium and zoo collections due to their charismatic appearance and active behaviour.
Exhibit design includes rocky beaches, shallow pools for swimming, and controlled temperatures; gentoos typically adapt well to managed settings compared to ice-dependent species.
Captive populations support public education and husbandry research.
`,
    food: `
Gentoos are generalist feeders with diets including krill, small fish, and squid. They are powerful and fast swimmers, allowing them to pursue fast-moving prey.
Local prey abundance is a strong determinant of breeding success and colony stability for gentoo populations.
`,
    breeding: `
Gentoos construct pebble nests and often lay two eggs. Both parents participate in incubation and chick provisioning.
Fledging occurs relatively quickly compared to the crested species; chicks may be guarded initially and then form crèches while parents forage.
Their reliance on nearshore prey makes them susceptible to localized food shortages.
`,
    dangers: `
Threats include:
• Competition for prey with commercial fisheries and local overfishing.  
• Pollution and oil spills that can be catastrophic for nearshore foraging species.  
• Local human disturbance from coastal development or tourism.  
• Predation on eggs and chicks by skua and other avian predators in some colonies.
Climate change can also alter the timing and distribution of prey, impacting local colonies.
`,
    human: `
Gentoo colonies near human visitation sites require careful management. Nest boxes and protected shorelines can aid breeding success in disturbed locations.
Captive programs provide education on marine conservation and research on penguin behaviour.
`,
    preservation: `
Effective conservation includes marine protected areas that safeguard nearshore foraging grounds, pollution prevention measures, and coordination with fisheries to maintain prey stocks.
Ongoing monitoring of colony sizes and breeding success informs adaptive management.
`
  },

  // 6) AFRICAN (Jackass)
  african: {
    habitat: `
African Penguins (Spheniscus demersus) inhabit the temperate coasts of southern Africa, including islands off South Africa and Namibia and a few mainland colonies.
They nest in burrows, under boulders, or within scrub and vegetation to avoid heat and predation. Historically more widespread, many colonies are now confined to offshore islands and protected coastal pockets due to human pressures.
They are adapted to a temperate marine environment and forage in coastal upwelling zones where small pelagic fish are abundant.
`,
    zoos: `
African penguins are widely displayed in zoos and aquaria globally; their care is well established and zoos often run captive breeding and rehabilitation programs.
Exhibits mimic warm temperate shorelines with shaded nesting spaces and pools; many facilities also provide veterinary rehabilitation for oiled or injured birds returned from the wild.
Zoos participate in research and captive breeding that supports population recovery efforts and public education.
`,
    food: `
African penguins feed primarily on small pelagic fish such as sardine and anchovy. They forage relatively close to shore and depend on local schooling fish that are also targeted by commercial fisheries.
Food scarcity due to overfishing is one of the principal drivers of breeding failure and population declines in this species.
`,
    breeding: `
African penguins typically lay one or two eggs in a clutch and nest in burrows or under vegetation to protect from heat and aerial predators.
They may breed at various times of year depending on local conditions and food availability. Chick survival is strongly tied to local prey abundance and the timing of food availability during the breeding season.
Human provisioning and nest box programs have been used to support colonies where natural burrow sites have been lost.
`,
    dangers: `
Major threats include:
• Overfishing of key prey species (anchovy and sardine), resulting in widespread food shortages.  
• Oil pollution and spills that cause mortality and long-term reproductive impacts.  
• Habitat loss due to coastal development and guano removal.  
• Predation by introduced mammalian predators (where present), and disturbance from tourism and humans.
Combined, these threats have caused dramatic declines — many colonies have shrunk or been lost entirely during the past century.
`,
    human: `
Human activities have been the major driver of African penguin declines. Fisheries management failures and oil pollution have had immediate and large impacts.
Conservation actions include fishery regulations near colonies, oil spill response and rehabilitation programs, habitat restoration including artificial nests, and public awareness campaigns.
Zoos also play a significant role through captive breeding, research, and public engagement.
`,
    preservation: `
Conservation for African penguins focuses on:
• Securing adequate prey through regional fishery management and spatial protection of foraging grounds.  
• Oil spill prevention and rapid response capacity.  
• Nest box programs and habitat restoration to replace lost nesting substrate.  
• Predator control where invasive mammals are present.  
• Long-term monitoring and international cooperation among South African and Namibian agencies and NGOs.
`
  },

  // 7) MAGELLANIC
  magellanic: {
    habitat: `
Magellanic Penguins (Spheniscus magellanicus) breed along the temperate coasts of South America, primarily in Argentina, Chile, and the Falkland Islands.
They prefer coastal cliffs, burrows in soft soil, and scrubby coastal habitats; many colonies are located on mainland beaches where burrows provide shelter from predation and weather.
Breeding sites are typically in coastal Patagonia and southern South America; outside the breeding season many individuals migrate northwards along the Atlantic and Pacific coasts to find food.
`,
    zoos: `
Magellanic penguins are commonly kept in zoos and aquaria, particularly in South America, Europe, and North America, where they serve as ambassadors for southern ocean conservation.
Exhibits provide burrow boxes, shaded nesting areas, and appropriately temperate conditions to mimic coastal habitats.
Captive programs can support research into migration and foraging ecology when combined with tracking programs.
`,
    food: `
Their diet consists mainly of small fish (sardine, anchovy), small squid and crustaceans. Foraging strategies involve short to medium range trips during breeding to locate coastal prey.
Food availability in upwelling zones and coastal currents is crucial to chick provisioning and adult condition.
`,
    breeding: `
Magellanic penguins dig burrows for nesting or nest in shallow scrapes; they commonly lay two eggs and may reuse nest sites across years.
Breeding timing is seasonally variable and dependent on local conditions and prey availability. Chicks remain in burrows or crèches while parents forage offshore.
Because they often nest on mainland sites, they are vulnerable to terrestrial threats in addition to marine ones.
`,
    dangers: `
Major threats include:
• Oil spills and marine pollution that kill birds and contaminate food resources.  
• Fisheries interactions and reductions in local fish stocks due to commercial fishing.  
• Habitat loss from human development, guano extraction, and coastal disturbance.  
• Climate variability affecting prey distribution and storm events that may inundate burrows.
Terrestrial predation by dogs and other introduced species at mainland colonies is also a concern.
`,
    human: `
Magellanic penguins commonly nest near human activity and therefore experience direct and indirect impacts from people.
Conservation interventions include nest protection, establishment of reserves, fisheries management, and rescue & rehabilitation following oil spills.
Public outreach and ecotourism that is well managed can provide funding and incentives for colony protection.
`,
    preservation: `
Conservation priorities include:
• Protected coastal areas and management of development near colonies.  
• Fishery management to secure prey populations.  
• Oil spill contingency planning and rehabilitation capacity.  
• Community engagement and responsible tourism to reduce disturbance and fund local protection.
`
  },

  // 8) HUMBOLDT
  humboldt: {
    habitat: `
Humboldt Penguins (Spheniscus humboldti) are narrowly distributed along the cold, nutrient-rich Humboldt Current off the Pacific coasts of Peru and Chile.
They typically breed on rocky islands and coastal cliffs and in some sheltered mainland sites where guano and shelter provide nesting opportunities.
Their distribution is closely tied to the upwelling system and associated high productivity of the Humboldt Current, which supplies abundant small fish.
Because of this tight association with a specific current system, they are highly sensitive to changes such as El Niño events which disrupt upwelling and reduce prey availability.
`,
    zoos: `
Humboldt penguins are present in many zoos and aquaria worldwide and are often the focus of regional breeding programs.
Captive animals play a role in education, research (particularly around the effects of El Niño), and ex situ conservation efforts.
Exhibit design replicates rocky coastal habitats with nesting crevices, shaded areas and pools.
`,
    food: `
Diet consists predominantly of small, schooling fish such as anchoveta (anchovy), sardine, and other small pelagic species, although squid and crustaceans may be eaten locally.
Their foraging is typically close to the coastal upwelling zone that brings nutrient rich waters to the surface.
During El Niño events, prey abundance can collapse and cause breeding failures and mass mortality.
`,
    breeding: `
Humboldt penguins breed in small colonies on islands and sheltered coastal ledges. They nest in crevices, caves, and under boulders, which provide protection from weather and predators.
Clutch size is usually two eggs with both parents sharing incubation and chick rearing. Breeding can be interrupted or delayed by poor prey conditions (e.g., during El Niño).
`,
    dangers: `
Threats include:
• Fisheries competition and local depletion of fish stocks.  
• El Niño events causing dramatic prey shortages and mass breeding failures.  
• Habitat degradation from guano extraction, coastal development, and disturbance.  
• Predation and disturbance at breeding sites, and occasional oil pollution incidents.
Local anthropogenic pressures can quickly drive population declines in this geographically restricted species.
`,
    human: `
Humboldt penguins have been significantly impacted by human activities over the last century.
Overfishing of anchoveta and habitat modification have caused population fragmentation and declines in many areas.
Conservation actions often require coordination between fisheries managers and protected area planners in Peru and Chile.
Zoos and rehabilitation centres are important for oiled birds and for public outreach.
`,
    preservation: `
Key conservation measures:
• Manage coastal fisheries and protect upwelling habitat to ensure prey availability.  
• Designate and effectively manage marine and terrestrial protected areas for breeding sites.  
• Control guano extraction and coastal disturbance.  
• Develop El Niño contingency plans for colony protection and emergency rehabilitation.
`
  },

  // 9) GALÁPAGOS
  galapagos: {
    habitat: `
The Galápagos Penguin (Spheniscus mendiculus) is the only penguin species found north of the equator in the wild and is restricted to the Galápagos archipelago.
Its distribution is limited to a few western islands where upwelling and cool currents (like the Cromwell Current) provide feeding opportunities near the surface.
They occupy rocky shores and small coves and are confined to a very small geographic range which makes them exceptionally vulnerable to local changes.
`,
    zoos: `
Because of their sensitivity and the unique conditions they require, Galápagos penguins are not commonly kept in zoos.
Conservation emphasis is on in situ protection, strict biosecurity on the islands, and habitat management rather than ex situ displays.
When captive care is necessary (e.g., rehabilitation after oiling or disease), specialised local facilities handle treatment and release.
`,
    food: `
Diet is concentrated on small fish such as mullet and sardine-like species that aggregate near island shores. Because the Galápagos are in an equatorial region, upwelling events such as those associated with the Cromwell Current or cool water anomalies are critical to providing prey.
Feeding success and breeding seasons are strongly tied to the timing and strength of these cool-water events.
`,
    breeding: `
Breeding is opportunistic and often linked to the occurrence of cool-water events like seasonal upwelling or weak La Niña conditions. Galápagos penguins can breed multiple times in favourable years, but in El Niño years breeding often fails due to lack of prey.
Clutch sizes are small and breeding success varies widely between years. Close parental cooperation and opportunistic reproduction strategies characterize their breeding biology.
`,
    dangers: `
Severe dangers include:
• Strong El Niño events that warm water, collapse upwelling, and dramatically reduce prey, causing mass mortality and breeding failure.  
• Introduced predators and diseases brought by human activity can devastate small, localized colonies.  
• Human disturbance, pollution, and habitat degradation on islands.  
• Climate change and increasing frequency/intensity of extreme events further threaten their fragile populations.
Because the species is range-restricted, stochastic events have outsized impacts on population viability.
`,
    human: `
Conservation in the Galápagos is intimately tied to strict local control of human activities: tourism, fisheries, and introduced species are all regulated.
Biosecurity is a major management priority to prevent introductions of rats, cats, dogs, and pathogens. Human activities that reduce prey or child survival can have rapid negative effects due to the species’ small population size.
`,
    preservation: `
Conservation actions include:
• Strict biosecurity and invasive species control.  
• Managing fisheries and protecting nearshore feeding zones during sensitive seasons.  
• Rapid response plans for El Niño years, including food supplementation and rehabilitation when necessary.  
• Long-term monitoring and continued protection of island habitats through both local government and international support.
`
  },

  // 10) LITTLE (Fairy / Little Blue)
  little: {
    habitat: `
Little Penguins (Eudyptula minor), also known as Fairy Penguins or Little Blue Penguins, inhabit temperate coastal regions of southern Australia and New Zealand.
They nest in burrows, rock crevices, and man-made nest boxes along rocky shorelines, beaches and coastal cliffs.
Colonies occur on offshore islands as well as mainland locations where suitable nesting habitat persists; they are often colonial but at a smaller spatial scale than large Antarctic colonies.
Little penguins are tied closely to nearshore foraging habitats and often return to shore at dusk after hunting in coastal waters.
`,
    zoos: `
Little penguins are commonly kept in zoos and aquaria worldwide and are among the most frequently displayed species due to their small size and engaging behaviour.
Exhibit designs emphasize burrows or artificial nest boxes, safe nighttime return areas, and pools replicating nearshore feeding conditions.
Captive programs support research, local rehabilitation, and public education about coastal marine ecosystems.
`,
    food: `
Diet consists primarily of small schooling fish and pelagic crustaceans; common prey include pilchards, anchovy, and small squid, depending on region.
Because they feed close to shore, their foraging success is strongly affected by coastal water quality, fisheries, and local oceanographic conditions.
`,
    breeding: `
Little penguins typically breed in burrows or nest boxes, laying clutches of 1–3 eggs depending on conditions and location.
Breeding timing is seasonal but can be flexible; both parents share incubation and provisioning. Chicks fledge after several weeks and juvenile survival is affected by predation and food availability.
Nest boxes and managed colonies have been used successfully to maintain populations near human settlements.
`,
    dangers: `
Threats include:
• Predation by introduced mammals (foxes, cats, dogs) at mainland colonies.  
• Habitat loss due to coastal development and human disturbance.  
• Oil pollution, litter entanglement, and ingestion of marine debris.  
• Declines in local forage fish stocks due to overfishing or environmental change.
Because they nest on or near populated coasts, local human management strongly influences survival.
`,
    human: `
Little penguins often live in proximity to human communities; conservation measures such as predator control, nest box programs, and community engagement can dramatically improve local population outcomes.
Citizen science and local conservation groups are frequently key contributors to monitoring and management.
`,
    preservation: `
Successful conservation tools:
• Predator control and exclusion fencing at vulnerable colonies.  
• Nest box programs to replace lost natural burrows.  
• Pollution prevention and rapid oil-spill response.  
• Local habitat protection and community stewardship programs.
Long-term resilience depends on maintaining nearshore prey populations and reducing coastal threats.
`
  },

  // 11) SOUTHERN ROCKHOPPER
  southern_rockhopper: {
    habitat: `
Southern Rockhopper Penguins (Eudyptes chrysocome) occupy remote subantarctic islands and rocky shores where steep, rugged coastlines allow colony formation on cliffs and ledges.
Key breeding localities include islands in the southern Atlantic and Indian Oceans; they favor boulder-strewn shorelines and tussock grass patches adjacent to steep terrain.
Rockhoppers are specially adapted to hopping locomotion between rocks and ledges, allowing them to access remote nesting sites that are relatively predator-free.
`,
    zoos: `
Southern rockhoppers are present in selected aquaria and zoos; exhibits focus on cliff and boulder structures, crevices for nests, and deep pools for foraging behaviour.
Their specialized locomotion and crested appearance make them attractive exhibit animals but they require careful habitat replication and social grouping.
`,
    food: `
Diet is mainly krill, small fish and cephalopods. Foraging ranges vary, with many populations undertaking medium distance trips to productive feeding grounds.
Their reliance on krill in many areas links their fortunes to ecosystem changes influencing krill densities.
`,
    breeding: `
They lay two eggs in pebble nests or rock crevices; the smaller first egg often has lower survival than the second due to brood hierarchy and resource allocation.
Chicks are reared in dense colonies and parents feed chicks in shifts; juveniles congregate in crèches while both parents forage.
Rockhopper breeding timing is seasonal and linked to local productivity cycles.
`,
    dangers: `
Threats include:
• Decline in krill or small fish stocks due to climate variability and fisheries.  
• Bycatch in fishing gear and incidental mortality on foraging trips.  
• Introduced predators on islands where biosecurity fails.  
• Habitat changes and increased storm frequency that affect nesting sites.
Many rockhopper populations have experienced significant declines, prompting conservation concern.
`,
    human: `
Because rockhoppers breed on remote islands, direct human disturbance is limited, but long-range effects through climate change and fisheries are pronounced.
Monitoring and international conservation efforts are required due to their wide distribution across jurisdictions.
`,
    preservation: `
Preservation efforts include bycatch mitigation, krill fishery management, protection of breeding islands via strict biosecurity, and monitoring population trends to detect declines early.
`
  },

  // 12) MACARONI
  macaroni: {
    habitat: `
Macaroni Penguins (Eudyptes chrysolophus) breed on subantarctic islands across the Southern Ocean, often in large dense colonies on cliffs, rocky slopes, and tussock grasslands.
Colonies can be extremely large and conspicuous, sometimes numbering hundreds of thousands of pairs, concentrated on remote offshore islands with access to abundant krill and planktonic food resources.
Their distribution encompasses islands such as South Georgia, the South Sandwich Islands, and parts of the subantarctic Indian Ocean.
`,
    zoos: `
Macaronis are less commonly held in captivity in large numbers; reproducing their massive colony environment is impractical for most institutions.
When kept, husbandry focuses on diet, social grouping, and providing adequate space and enrichment to stimulate natural behaviours.
Zoos do not typically hold conservation populations for macaronis because of their large wild numbers historically and specific ecological needs.
`,
    food: `
Macaroni penguins feed mainly on Antarctic krill as well as small fish and zooplankton. They forage in pelagic waters and often depend on large prey aggregations.
Because macaronis feed heavily on krill, their populations are sensitive to large-scale changes in krill abundance driven by climate and fisheries.
`,
    breeding: `
Breeding occurs in large, dense colonies with synchronized egg-laying and intensive chick-rearing periods. Parents alternate foraging trips and provisioning, with chicks congregating in crèches as parents feed at sea.
Their dense colonies and synchronized breeding make macaronis highly dependent on consistent regional productivity.
`,
    dangers: `
The main risks are:
• Decreases in krill abundance due to climate change and fisheries.  
• Human disturbance and potential oil pollution in shipping lanes adjacent to some breeding islands.  
• Introduced predators are a serious threat on some islands if biosecurity is breached.  
• Widespread reductions in prey resources can lead to large population declines because so many individuals rely on the same food base.
`,
    human: `
Macaronis have experienced population declines in several regions, prompting concern despite historically large numbers.
Research and monitoring programs are essential for tracking trends and guiding krill fishery management and marine conservation.
`,
    preservation: `
Focus areas: krill ecosystem management, designation of MPAs around major breeding areas, and continued monitoring and research into macaronis’ population trends and foraging ecology.
`
  },

  // 13) ROYAL
  royal: {
    habitat: `
Royal Penguins (Eudyptes schlegeli) breed predominantly on Macquarie Island and small adjacent islands in the subantarctic.
They prefer lowland tussock and beach habitats where large colonies can form; Macquarie Island is a primary breeding stronghold.
Their restricted breeding distribution concentrates conservation responsibility on the protection of a few key islands and their adjacent marine environment.
`,
    zoos: `
Royal penguins are rare in captivity and, like many subantarctic species, are not commonly held in large numbers. Zoos that do keep related crested species focus on husbandry that supports crested display and breeding behaviour.
Captive work contributes to public education but in situ protection of Macquarie Island is the highest priority for this species.
`,
    food: `
Diet consists mainly of krill and small fish. Royal penguins forage at sea and depend on seasonal prey concentrations in subantarctic waters.
Foraging ecology is closely tied to local oceanographic productivity around their breeding islands.
`,
    breeding: `
Breeding is concentrated on Macquarie Island where colonies may be very dense. Royals share many behavioural traits with other crested penguins, including crèche formation for chicks and synchronized colony behaviour.
They typically produce a single chick per breeding season, and chick condition depends strongly on local prey abundance.
`,
    dangers: `
Threats include:
• Localized declines caused by changes in prey abundance.  
• Introduced species, historic overgrazing by rabbits and other mammals has altered island vegetation in the past (many of these issues have been targeted by eradication programs).  
• Climate change that alters prey distributions and seasonal timing.
Because royals rely heavily on a restricted breeding area, localized impacts can be disproportionately harmful.
`,
    human: `
Macquarie Island has been the focus of restoration and biosecurity efforts, including the removal of introduced mammals. These local actions are among the most effective conservation measures for insular penguins.
Continued protection of breeding habitat and monitoring of prey and population trends is crucial.
`,
    preservation: `
Effective measures include strict island biosecurity, habitat restoration, protection of marine feeding grounds, and continued monitoring of breeding success and population numbers.
`
  },

  // 14) ERECT-CRESTED
  erect_crested: {
    habitat: `
Erect-crested Penguins (Eudyptes sclateri) are restricted to a small set of subantarctic islands, including the Snares and Auckland Islands.
They breed in dense, often cliff or tussock-covered colonies and favor remoteness and isolation where predation pressure is low and breeding habitat is undisturbed.
Their small population sizes and limited breeding sites increase vulnerability to local disturbances and stochastic events.
`,
    zoos: `
Because erect-crested penguins are rare, they are seldom kept in captivity. Conservation emphasis is on protecting their natural island habitats and maintaining strict biosecurity to prevent invasive species introductions.
Zoos generally focus on public education about island conservation rather than holding large captive populations of this species.
`,
    food: `
They feed on krill, small fish and cephalopods in subantarctic waters. Foraging patterns are influenced by the proximity of productive feeding grounds and the timing of seasonal prey availability.
`,
    breeding: `
They form relatively small colonies compared with more numerous crested species; breeding ecology involves dense nesting, parental coordination of incubation and feeding, and crèche formation where appropriate.
Breeding success can vary substantially between years depending on prey availability and environmental conditions.
`,
    dangers: `
Dangers include:
• Small population size increases extinction risk from stochastic events.  
• Climate change and changes to prey availability.  
• Risk from introduced predators and human disturbance if biosecurity lapses occur.  
• Local environmental change resulting from extreme weather events or habitat alteration.
`,
    human: `
Limited direct human contact due to remoteness reduces chronic disturbance, but conservation requires vigilance against the introduction of invasive species and the protection of foraging habitats from indirect human pressures.
`,
    preservation: `
Management focuses on maintaining strict island biosecurity, protecting foraging areas, and monitoring populations closely to detect declines early.
`
  },

  // 15) SNARES
  snares: {
    habitat: `
Snares Penguins (Eudyptes robustus) are endemic to the Snares Islands south of New Zealand, breeding on a handful of islands and islets.
They nest among dense vegetation, rock crevices, and sheltered niches near the shore where microclimates provide protection from winds and predators.
The restricted distribution means their entire world population is limited to a small geographic area.
`,
    zoos: `
Snares penguins are not commonly maintained in captivity, and conservation focus remains on in situ protection, biosecurity, and habitat preservation on the Snares Islands.
Zoos contribute through education and support for field research.
`,
    food: `
They feed mainly on krill and small fish in the productive waters surrounding the Snares Islands.
Because they forage relatively near their colonies, localized changes in prey can directly affect reproductive success.
`,
    breeding: `
Breeding biology includes nesting under vegetation or in shallow burrows; colonies are dense and breeding is seasonal.
Chicks are brooded and provisioned by parents; crèches form for chick safety while parents forage.
Breeding success is tightly connected to weather and local prey availability.
`,
    dangers: `
Threats include:
• Restricted range and small population size making them vulnerable to stochastic events.  
• Potential for introduced predators to cause catastrophic declines if biosecurity fails.  
• Climate-driven changes in prey abundance and storm frequency.
Because the entire species is restricted to few islands, any significant local change could be devastating.
`,
    human: `
Human access to the Snares is restricted and tightly controlled to preserve their habitat; research is permitted under strict conditions.
Preservation is therefore heavily reliant on maintaining rigorous protection and preventing introductions of invasive species.
`,
    preservation: `
Preservation requires continued strict protection of the Snares Islands, biosecurity, and monitoring of population trends and prey conditions, with rapid response capability if threats are detected.
`
  },

  // 16) FIORDLAND
  fiordland: {
    habitat: `
Fiordland Penguins (Eudyptes pachyrhynchus) occupy temperate coastal forests, fiords and rocky coastal habitat on the southwest coasts of New Zealand's South Island.
They nest under dense forest or coastal vegetation often close to sea caves, in burrows, or under rock ledges where concealment from avian predators is high.
Their selection of forested coastal terrain distinguishes them from many open-colony penguins, making habitat protection on land a critical component of conservation.
`,
    zoos: `
Fiordland penguins are not commonly held in captivity; conservation emphasis lies in preserving forested coastal habitats and controlling invasive predators.
Zoos contribute to research, rehabilitation and educational outreach but do not typically maintain large ex situ populations.
`,
    food: `
Diet includes fish and squid taken from nearshore waters. Their foraging ranges are often coastal and influenced by local sea conditions and prey abundance.
These penguins are less reliant on wide oceanic prey aggregations and more closely tied to coastal productivity.
`,
    breeding: `
They breed in secluded forest or fiordside locations, often in hidden nests under vegetation or in caves. Clutch size and parental care are similar to other crested penguins, with both parents involved in incubation and chick provisioning.
They are relatively elusive, and many colonies are difficult to access for study.
`,
    dangers: `
Threats include:
• Habitat loss and degradation due to forestry, development or erosion near coastal nesting sites.  
• Introduced predators (stoats, rats, dogs) that may prey on eggs and chicks.  
• Human disturbance and pollution in coastal areas.
Because of their forested nesting habits, terrestrial threats are particularly important for fiordland penguins.
`,
    human: `
Local human activity that reduces or fragments coastal forest and increases predator presence is the main human impact.
Conservation requires local land management and predator control to maintain breeding success.
`,
    preservation: `
Preservation strategies include habitat protection, predator control, restoration of native vegetation, and monitoring to measure the effectiveness of interventions.
Community engagement and responsible land use planning are crucial.
`
  },

  // 17) YELLOW-EYED
  yellow_eyed: {
    habitat: `
The Yellow-eyed Penguin (Megadyptes antipodes) breeds along coastal New Zealand, typically on forested shorelines, sheltered beaches, and scrub habitats.
They nest in dense vegetation or forested patches immediately inland from the shore, often in isolated coves and peninsulas of the Otago and Southland regions.
This reliance on mature vegetation close to shore differentiates them from many other penguins and makes terrestrial habitat preservation essential.
`,
    zoos: `
Yellow-eyed penguins are occasionally maintained in captivity for rehabilitation and educational purposes. Captive care focuses on maintaining naturalistic forested nesting areas and preventing disease.
Zoos often assist with veterinary care and rehabilitation for displaced or oiled birds.
`,
    food: `
They feed on small coastal fish such as red cod, opalfish, and other nearshore species. Their foraging tends to be predictable and close to shore, which historically made them easy to locate but also increases vulnerability to local changes in prey populations.
`,
    breeding: `
Yellow-eyed penguins generally breed as solitary pairs or in small scattered colonies. Nests are commonly in forested areas or dense scrub, and both parents participate in incubation and feeding.
They are sensitive to disturbance and often abandon nests if repeatedly disturbed by humans or dogs, making nest protection critical.
`,
    dangers: `
Major threats:
• Habitat loss and fragmentation due to coastal development and logging.  
• Introduced predators (dogs, stoats, cats) that prey on eggs and chicks.  
• Human disturbance from tourism and recreation that can cause nest abandonment.  
• Disease outbreaks and changes in prey availability due to local fisheries or oceanographic shifts.
Their small and localized populations have declined substantially in some areas.
`,
    human: `
Humans have been the primary driver of yellow-eyed declines through habitat loss, disturbance and introduced predators. Intensive local conservation programs show that predator control, habitat restoration, and visitor management can improve breeding success when implemented effectively.
`,
    preservation: `
Conservation success relies on integrated local actions:
• Habitat restoration and protection of coastal forests.  
• Predator control programs targeted to nesting areas.  
• Managed tourism and strict controls on dog access close to colonies.  
• Disease surveillance and rapid response to outbreaks.
Local community involvement and consistent long-term management have been shown to stabilize and sometimes increase local populations.
`
  },

  // 18) NORTHERN ROCKHOPPER
  northern_rockhopper: {
    habitat: `
Northern Rockhopper Penguins (Eudyptes moseleyi) breed on remote islands in the South Atlantic and Indian Oceans, including Tristan da Cunha, Gough Island, and several islands in the Atlantic/Indian sector.
They use rugged shorelines and boulder fields, often accessing high, steep nesting ledges that are inaccessible to many predators and humans.
Their distribution is naturally fragmented across a series of isolated archipelagos, with each island population subject to local environmental dynamics.
`,
    zoos: `
Northern rockhoppers are occasionally part of specialist collections; their husbandry requires replicating rocky, cliff-like terrain and social colony conditions.
Captive care is focused on maintaining social groups, protecting against disease, and simulating natural foraging schedules.
Zoos also often contribute to recovery and research programs for island species and serve as advocates for conservation.
`,
    food: `
Diet largely comprises krill, small fish and cephalopods. Foraging is predominantly pelagic and can involve long trips to productive oceanic zones.
Because of their broad oceanic foraging and patchy prey distribution, northern rockhoppers are subject to strong interannual variability in food availability driven by oceanographic shifts.
`,
    breeding: `
They form colonies on high rocky ledges and boulder fields and lay two eggs, with both parents sharing incubation and chick provisioning responsibilities.
Chicks aggregate in crèches and parents undertake extended feeding trips. Survival depends strongly on local oceanographic productivity and the timing of prey abundance.
`,
    dangers: `
Threats include:
• Declines in prey caused by ocean warming and shifts in marine productivity.  
• Fisheries bycatch and competition for prey.  
• Introduced predators on breeding islands where biosecurity has been breached.  
• Storms and extreme events that can damage nesting areas and reduce chick survival.
Northern rockhoppers have experienced severe population declines in several island groups, prompting urgent conservation attention.
`,
    human: `
Human threats are mostly indirect via fisheries and climate-driven changes and, where human presence exists, introduced predators and habitat alteration.
Conservation requires multinational cooperation given the birds’ remote but international distribution.
`,
    preservation: `
Priorities include bycatch mitigation, designation and enforcement of marine protected areas, island biosecurity, monitoring of population trends and foraging ecology, and coordinated international conservation efforts.
`
  }
};

// Render function: fills the climate pane with collapsible sections
window.renderClimateTab = function(speciesId) {
  const pane = document.getElementById('climatePane');
  if (!pane) {
    console.warn('climates.js: #climatePane element not found.');
    return;
  }

  const data = window.climateData[speciesId];
  if (!data) {
    pane.innerHTML = `<p>No detailed climate/environment data available for <strong>${speciesId}</strong>.</p>`;
    return;
  }

  const section = (title, html) => `
    <details class="climate-block" style="margin-bottom:10px;border-radius:8px;padding:8px;border:1px solid #e6eef0;background:#fbfeff;">
      <summary style="font-weight:700;cursor:pointer;padding:6px 4px;">${title}</summary>
      <div class="climate-content" style="margin-top:8px;color:#21343b;line-height:1.5">${html}</div>
    </details>
  `;

  pane.innerHTML = `
    ${section('Habitat', data.habitat)}
    ${section('Zoos & Captivity Notes', data.zoos)}
    ${section('Favorite Food', data.food)}
    ${section('Breeding Cycle & Phenology', data.breeding)}
    ${section('Major Dangers & Predators', data.dangers)}
    ${section('Interactions with Humans', data.human)}
    ${section('Preservation & Conservation Actions', data.preservation)}
  `;
};
