const penguins = [
  // 1. Emperor
  {
    id: 'emperor',
    overviewPane: {
      name: 'Emperor Penguin',
      scientific: 'Aptenodytes forsteri',
      image: 'images/emperor.jpg',
      length_cm: 115,
      weight_kg: 30,
      region: 'antarctica',
      status: 'Near Threatened',
      summary: 'Largest penguin species; breeds during the Antarctic winter on pack ice. Famous for their extreme breeding behaviour and deep diving abilities.',
      diet: 'Fish, krill, squid',
      habitat: 'Pack ice, coastal',
      facts: [
        'Can dive over 500 m',
        'Male incubates egg on feet under brood pouch',
        'Survive extreme cold up to -60°C'
      ]
    },
    biologyPane: {
      biology: 'Emperor penguins breed during the Antarctic winter. Males incubate a single egg on their feet under a brood pouch while females forage at sea for weeks. Adults form tight huddles to conserve heat. They are superb divers (recorded dives >500 m) and can stay submerged for more than 20 minutes. Foraging is mainly on schooling fish and large swarms of krill.'
    },
    conservationPane: {
      conservation: 'Near Threatened due to climate-driven loss of sea ice, prey availability changes, and human disturbance. Conservation includes population monitoring and protected breeding areas.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Extremely cold Antarctic winters, down to -60°C.' },
        { title: 'Sea Ice', description: 'Dependent on pack ice for breeding and feeding.' },
        { title: 'Habitat', description: 'Coastal Antarctica; open sea and ice edges.' }
      ]
    }
  },

  // 2. King
  {
    id: 'king',
    overviewPane: {
      name: 'King Penguin',
      scientific: 'Aptenodytes patagonicus',
      image: 'images/king.jpg',
      length_cm: 100,
      weight_kg: 11,
      region: 'subantarctic',
      status: 'Least Concern',
      summary: 'Second largest penguin species, notable for bright orange cheek patches and long chick-rearing cycles.',
      diet: 'Fish, squid',
      habitat: 'Islands, beaches',
      facts: [
        'Form huge colonies',
        'Long chick-rearing cycles',
        'Can live up to ~20 years'
      ]
    },
    biologyPane: {
      biology: 'King penguins breed on subantarctic islands in large colonies. Eggs are incubated on the feet under a brood pouch. Chicks may take over a year to fledge. They forage on long trips to rich oceanic fronts.'
    },
    conservationPane: {
      conservation: 'Least Concern, but sensitive to changes in prey availability, climate change, and human disturbance. Conservation involves monitoring and protected areas.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cool subantarctic climate; summers mild, winters cold but moderate.' },
        { title: 'Habitat', description: 'Open beaches and coastal islands; rely on marine productivity.' }
      ]
    }
  },

  // 3. Adélie
  {
    id: 'adelie',
    overviewPane: {
      name: 'Adélie Penguin',
      scientific: 'Pygoscelis adeliae',
      image: 'images/adelie.jpg',
      length_cm: 70,
      weight_kg: 4.5,
      region: 'antarctica',
      status: 'Near Threatened',
      summary: 'Small, spunky Antarctic penguin that nests with stones and forms large colonies on rocky coasts.',
      diet: 'Krill, fish',
      habitat: 'Coastal, rocky',
      facts: [
        'Toboggan on bellies',
        'Aggressive defenders of nests',
        'Colonies of thousands'
      ]
    },
    biologyPane: {
      biology: 'Adélie penguins nest on ice-free rocky coasts, build pebble nests, and feed on krill and small fish. They migrate north in winter and return in summer.'
    },
    conservationPane: {
      conservation: 'Near Threatened; some colonies stable, others declining due to warming and reduced sea ice. Focus on krill fishery management and habitat protection.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cold Antarctic climate with highly seasonal variation.' },
        { title: 'Sea Ice', description: 'Breeds on ice-free rocky coasts; dependent on surrounding sea ice for foraging.' }
      ]
    }
  },

  // 4. Chinstrap
  {
    id: 'chinstrap',
    overviewPane: {
      name: 'Chinstrap Penguin',
      scientific: 'Pygoscelis antarctica',
      image: 'images/chinstrap.jpg',
      length_cm: 68,
      weight_kg: 4.5,
      region: 'antarctica',
      status: 'Least Concern',
      summary: 'Named for the thin black line under its head; common on Antarctic and subantarctic islands.',
      diet: 'Krill, fish',
      habitat: 'Rocky islands',
      facts: [
        'Very vocal',
        'Excellent swimmers',
        'Breed in dense colonies'
      ]
    },
    biologyPane: {
      biology: 'Chinstraps breed on rocky islands, build pebble nests, and feed mainly on krill. Colony life is dense and noisy, with aggressive interactions for nest defense.'
    },
    conservationPane: {
      conservation: 'Least Concern globally, but local declines are monitored due to sea ice and krill changes.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cold Antarctic climate, strong winds.' },
        { title: 'Habitat', description: 'Rocky coastal islands; foraging waters rich in krill.' }
      ]
    }
  },

  // 5. Gentoo
  {
    id: 'gentoo',
    overviewPane: {
      name: 'Gentoo Penguin',
      scientific: 'Pygoscelis papua',
      image: 'images/gentoo.jpg',
      length_cm: 75,
      weight_kg: 5.5,
      region: 'subantarctic',
      status: 'Near Threatened',
      summary: 'Recognised by a white head stripe; one of the fastest underwater-swimming penguins.',
      diet: 'Krill, fish',
      habitat: 'Beaches, rocky',
      facts: [
        'Build pebble nests',
        'Fast swimmers',
        'Often in small colonies'
      ]
    },
    biologyPane: {
      biology: 'Gentoo penguins nest on beaches and rocky shores. Fast swimmers, they pursue fish and krill. Both parents care for eggs and chicks.'
    },
    conservationPane: {
      conservation: 'Near Threatened; populations vary depending on local conditions. Conservation includes protected sites and research.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cool, windy subantarctic islands.' },
        { title: 'Habitat', description: 'Beaches and rocky coasts; nearshore waters rich in krill and fish.' }
      ]
    }
  },

  // 6. African (Jackass)
  {
    id: 'african',
    overviewPane: {
      name: 'African (Jackass) Penguin',
      scientific: 'Spheniscus demersus',
      image: 'images/african.jpg',
      length_cm: 60,
      weight_kg: 3.5,
      region: 'temperate',
      status: 'Endangered',
      summary: 'Also called jackass penguin for its loud braying call; found on southwestern African coasts.',
      diet: 'Fish',
      habitat: 'Coastal South Africa, Namibia',
      facts: [
        'Nests under bushes or in burrows',
        'Vulnerable to overfishing',
        'Distinct braying call'
      ]
    },
    biologyPane: {
      biology: 'African penguins nest in burrows or under vegetation. Feed mainly on small schooling fish like anchovy and sardine.'
    },
    conservationPane: {
      conservation: 'Endangered due to overfishing, oil spills, habitat destruction. Conservation: marine protected areas, fishery management, nest box programs.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Temperate southern African coast; mild winters and warm summers.' },
        { title: 'Habitat', description: 'Rocky coastal shores, islands, and burrows; dependent on marine fish abundance.' }
      ]
    }
  },

  // 7. Magellanic
  {
    id: 'magellanic',
    overviewPane: {
      name: 'Magellanic Penguin',
      scientific: 'Spheniscus magellanicus',
      image: 'images/magellanic.jpg',
      length_cm: 61,
      weight_kg: 3.5,
      region: 'temperate',
      status: 'Near Threatened',
      summary: 'Breeds in burrows along coasts of Argentina and Chile; migratory for feeding.',
      diet: 'Fish, squid',
      habitat: 'Coastal South America',
      facts: [
        'Often nest in burrows',
        'Migratory feeders',
        'Pairs may re-use sites'
      ]
    },
    biologyPane: {
      biology: 'Magellanic penguins dig burrows along coastal Patagonia. They migrate for feeding and bring fish and squid to chicks.'
    },
    conservationPane: {
      conservation: 'Near Threatened due to oil pollution, fisheries, climate changes, and human disturbance. Conservation: protected areas and monitoring.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Temperate coastal climate.' },
        { title: 'Habitat', description: 'Burrows along rocky coasts; nutrient-rich upwelling zones.' }
      ]
    }
  },

  // 8. Humboldt
  {
    id: 'humboldt',
    overviewPane: {
      name: 'Humboldt Penguin',
      scientific: 'Spheniscus humboldti',
      image: 'images/humboldt.jpg',
      length_cm: 65,
      weight_kg: 4,
      region: 'temperate',
      status: 'Vulnerable',
      summary: 'Tied to the cold Humboldt Current; vulnerable due to fishing pressure and El Niño events.',
      diet: 'Small fish',
      habitat: 'Peru & Chile coasts',
      facts: [
        'Nest on rocky ledges',
        'Affected by El Niño',
        'Fragmented colonies'
      ]
    },
    biologyPane: {
      biology: 'Nest in rocky crevices along coasts of Peru and Chile; feed on small fish. Populations affected by El Niño events.'
    },
    conservationPane: {
      conservation: 'Vulnerable due to overfishing, habitat disturbance, and El Niño. Conservation: marine protected areas, habitat protection, fisheries management.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cool temperate coastal climate.' },
        { title: 'Habitat', description: 'Rocky shores and crevices; rely on marine upwelling.' }
      ]
    }
  },

  // 9. Galápagos
  {
    id: 'galapagos',
    overviewPane: {
      name: 'Galápagos Penguin',
      scientific: 'Spheniscus mendiculus',
      image: 'images/galapagos.jpg',
      length_cm: 49,
      weight_kg: 2.5,
      region: 'tropical',
      status: 'Endangered',
      summary: 'Only penguin species north of the equator; restricted to Galápagos Islands.',
      diet: 'Small fish',
      habitat: 'Galápagos Islands',
      facts: [
        'Uses shade to avoid overheating',
        'Small, localized populations',
        'Vulnerable to climate shifts'
      ]
    },
    biologyPane: {
      biology: 'Adapted to equatorial environment; feed on small fish and use shade to avoid overheating. Breeding tied to cool-water events.'
    },
    conservationPane: {
      conservation: 'Endangered due to small population, climate variability, and introduced predators. Conservation: monitoring, habitat protection, biosecurity.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Warm tropical climate; sea temperatures fluctuate due to El Niño.' },
        { title: 'Habitat', description: 'Rocky islands; rely on upwelling of cold water for prey.' }
      ]
    }
  },

  // 10. Little
  {
    id: 'little',
    overviewPane: {
      name: 'Little (Fairy/Little Blue) Penguin',
      scientific: 'Eudyptula minor',
      image: 'images/little.jpg',
      length_cm: 33,
      weight_kg: 1.2,
      region: 'temperate',
      status: 'Least Concern',
      summary: 'Smallest penguin species; often active at dusk.',
      diet: 'Small fish',
      habitat: 'Coastal Australia & New Zealand',
      facts: [
        'Also called fairy penguin',
        'Nests in burrows or boxes',
        'Social and noisy at night'
      ]
    },
    biologyPane: {
      biology: 'Nocturnal on land; feed on small fish close to shore. Use burrows or boxes for nesting.'
    },
    conservationPane: {
      conservation: 'Least Concern; local populations threatened by predators and coastal development. Conservation: predator control, habitat restoration, nest boxes.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Temperate maritime climate.' },
        { title: 'Habitat', description: 'Coastal burrows and shores; nearshore fish availability.' }
      ]
    }
  },

  // 11. Southern Rockhopper
  {
    id: 'southern_rockhopper',
    overviewPane: {
      name: 'Southern Rockhopper Penguin',
      scientific: 'Eudyptes chrysocome',
      image: 'images/southern-rockhopper.jpg',
      length_cm: 55,
      weight_kg: 3.7,
      region: 'subantarctic',
      status: 'Vulnerable',
      summary: 'Spiky crest feathers; energetic hopping on rocky shores.',
      diet: 'Krill, fish',
      habitat: 'Rocky islands',
      facts: [
        'Hops between rocks',
        'Large flocks on cliffs',
        'Aggressive during breeding'
      ]
    },
    biologyPane: {
      biology: 'Nest on subantarctic islands on steep cliffs. Feed on krill and small fish; chicks fledge after 10–12 weeks.'
    },
    conservationPane: {
      conservation: 'Vulnerable due to climate change, predators, and human disturbance. Conservation: monitoring and breeding island protection.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cool subantarctic climate; frequent storms and winds.' },
        { title: 'Habitat', description: 'Rocky coastal islands with cliffs; nutrient-rich waters.' }
      ]
    }
  },

  // 12. Macaroni
  {
    id: 'macaroni',
    overviewPane: {
      name: 'Macaroni Penguin',
      scientific: 'Eudyptes chrysolophus',
      image: 'images/macaroni.jpg',
      length_cm: 70,
      weight_kg: 5.5,
      region: 'subantarctic',
      status: 'Vulnerable',
      summary: 'Bright yellow crest feathers; populations declining.',
      diet: 'Krill, fish',
      habitat: 'Subantarctic islands',
      facts: [
        'Bright yellow crests',
        'Largest Eudyptes species',
        'Colonial breeders'
      ]
    },
    biologyPane: {
      biology: 'Breed in dense colonies on subantarctic islands; feed mainly on krill and small fish.'
    },
    conservationPane: {
      conservation: 'Vulnerable due to declining populations; conservation includes monitoring and protected breeding sites.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Subantarctic climate; cool and windy.' },
        { title: 'Habitat', description: 'Steep rocky slopes on islands; rely on krill-rich waters.' }
      ]
    }
  },

  // 13. Royal
  {
    id: 'royal',
    overviewPane: {
      name: 'Royal Penguin',
      scientific: 'Eudyptes schlegeli',
      image: 'images/royal.jpg',
      length_cm: 70,
      weight_kg: 5.5,
      region: 'subantarctic',
      status: 'Near Threatened',
      summary: 'Close relative of macaroni penguin; breeds only on subantarctic islands.',
      diet: 'Krill, fish',
      habitat: 'Subantarctic islands',
      facts: [
        'White face and yellow crest',
        'Breed on Macquarie Island',
        'Highly colonial'
      ]
    },
    biologyPane: {
      biology: 'Breed in dense colonies; feed on krill and small fish. Adults highly faithful to colony sites.'
    },
    conservationPane: {
      conservation: 'Near Threatened; small breeding range and sensitivity to prey availability. Conservation: monitor and protect habitat.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cool, windy subantarctic climate.' },
        { title: 'Habitat', description: 'Coastal rocky slopes; rely on nearby productive waters.' }
      ]
    }
  },

  // 14. Erect-crested
  {
    id: 'erect_crested',
    overviewPane: {
      name: 'Erect-crested Penguin',
      scientific: 'Eudyptes sclateri',
      image: 'images/erect-crested.jpg',
      length_cm: 60,
      weight_kg: 4.5,
      region: 'subantarctic',
      status: 'Endangered',
      summary: 'Rare, little-known species; breeds on subantarctic islands.',
      diet: 'Krill, fish',
      habitat: 'Rocky subantarctic islands',
      facts: [
        'Distinctive erect yellow crest',
        'Remote breeding sites',
        'Population declining'
      ]
    },
    biologyPane: {
      biology: 'Breed on remote subantarctic islands; feed mainly on krill and fish.'
    },
    conservationPane: {
      conservation: 'Endangered due to small population, restricted range, and climate-related food shortages.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cold, windy subantarctic climate.' },
        { title: 'Habitat', description: 'Rocky islands with limited human access; marine-dependent.' }
      ]
    }
  },

  // 15. Snares
  {
    id: 'snares',
    overviewPane: {
      name: 'Snares Penguin',
      scientific: 'Eudyptes robustus',
      image: 'images/snares.jpg',
      length_cm: 60,
      weight_kg: 3.5,
      region: 'subantarctic',
      status: 'Vulnerable',
      summary: 'Breeds exclusively on the Snares Islands near New Zealand.',
      diet: 'Krill, fish',
      habitat: 'Remote subantarctic islands',
      facts: [
        'Nest in burrows',
        'Limited breeding range',
        'Population sensitive to environmental change'
      ]
    },
    biologyPane: {
      biology: 'Breed in burrows on Snares Islands; feed on krill and fish from surrounding waters.'
    },
    conservationPane: {
      conservation: 'Vulnerable due to restricted breeding range; monitored and protected.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cool subantarctic climate; oceanic influences.' },
        { title: 'Habitat', description: 'Remote islands; predator-free breeding sites.' }
      ]
    }
  },

  // 16. Fiordland
  {
    id: 'fiordland',
    overviewPane: {
      name: 'Fiordland Penguin',
      scientific: 'Eudyptes pachyrhynchus',
      image: 'images/fiordland.jpg',
      length_cm: 60,
      weight_kg: 3.5,
      region: 'temperate',
      status: 'Vulnerable',
      summary: 'Also called Tawaki; breeds along New Zealand’s southwest coast.',
      diet: 'Fish, squid',
      habitat: 'Temperate forested coast',
      facts: [
        'Nests in forest burrows',
        'Secretive and nocturnal',
        'Population declining'
      ]
    },
    biologyPane: {
      biology: 'Breed in burrows in temperate forests; feed on fish and squid close to shore.'
    },
    conservationPane: {
      conservation: 'Vulnerable due to habitat loss and introduced predators. Conservation includes predator control and habitat protection.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Temperate coastal climate; high rainfall.' },
        { title: 'Habitat', description: 'Forested burrows and coastal feeding areas.' }
      ]
    }
  },

  // 17. Yellow-eyed
  {
    id: 'yellow_eyed',
    overviewPane: {
      name: 'Yellow-eyed Penguin',
      scientific: 'Megadyptes antipodes',
      image: 'images/yellow-eyed.jpg',
      length_cm: 65,
      weight_kg: 5,
      region: 'temperate',
      status: 'Endangered',
      summary: 'Rare, shy penguin of New Zealand; named for its pale yellow eyes.',
      diet: 'Fish, squid',
      habitat: 'Coastal forests and beaches',
      facts: [
        'Very shy and solitary',
        'Breeds in secluded areas',
        'Population small and declining'
      ]
    },
    biologyPane: {
      biology: 'Nest in forest or scrub close to shore; feed on local fish and squid. Adults are territorial during breeding.'
    },
    conservationPane: {
      conservation: 'Endangered due to predation, habitat destruction, and human disturbance. Conservation includes predator control and habitat restoration.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Temperate climate with oceanic influences.' },
        { title: 'Habitat', description: 'Coastal forests and beaches; isolated nesting areas.' }
      ]
    }
  },

  // 18. Royal Rockhopper (Southern variant merged as unique)
  {
    id: 'northern_rockhopper',
    overviewPane: {
      name: 'Northern Rockhopper Penguin',
      scientific: 'Eudyptes moseleyi',
      image: 'images/northern-rockhopper.jpg',
      length_cm: 55,
      weight_kg: 3.7,
      region: 'subantarctic',
      status: 'Endangered',
      summary: 'Distinct species from southern rockhopper; breeds on Tristan da Cunha and Amsterdam/St. Paul Islands.',
      diet: 'Krill, fish',
      habitat: 'Remote subantarctic islands',
      facts: [
        'Spiky yellow crest',
        'Remote breeding sites',
        'Declining populations'
      ]
    },
    biologyPane: {
      biology: 'Breed on remote islands; feed on krill and small fish. Populations declining due to climate change and human impacts.'
    },
    conservationPane: {
      conservation: 'Endangered; requires monitoring and protection of breeding colonies.'
    },
    climatePane: {
      climate: [
        { title: 'Temperature', description: 'Cool subantarctic climate; stormy weather common.' },
        { title: 'Habitat', description: 'Remote rocky islands; marine-dependent food supply.' }
      ]
    }
  }
];
