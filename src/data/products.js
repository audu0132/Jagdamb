/**
 * Dairy Equipment Catalog Data
 * Easily maintainable product catalog structure with genuine equipment specifications.
 */
export const products = [
  // 1. Milking Machines
  {
    id: "prod-mm-01",
    slug: "single-bucket-milking-machine-trolley",
    name: "Single Bucket Trolley Milking Machine",
    category: "milking-machines",
    categoryName: "Milking Machines",
    badge: "Popular for Small Herds",
    isFeatured: true,
    tagline: "Portable, oil-lubricated vacuum milking system for 5 to 15 cows/buffaloes",
    shortDescription: "A durable trolley-mounted milking unit designed for small dairy setups and individual dairy farmers, featuring food-grade SS 304 bucket and smooth vacuum operation.",
    fullDescription: "The Single Bucket Trolley Milking Machine by Jagdamb Enterprises is engineered for effortless mobility around the shed. Equipped with an oil-lubricated high-efficiency vacuum pump, an adjustable pneumatic pulsator, and a 25-litre food-grade stainless steel bucket, it minimizes milking time while safeguarding udder health.",
    features: [
      "Sturdy powder-coated heavy gauge trolley with heavy-duty rubber wheels",
      "Food-grade AISI 304 stainless steel milking bucket (25 Litre capacity)",
      "High-precision pneumatic pulsator with balanced 60:40 pulsation ratio",
      "Transparent food-grade silicone milk hoses for visual milk flow tracking",
      "Automatic shut-off vacuum valve preventing liquid ingress into pump",
      "Suitable for both crossbred cows and high-yielding Murrah buffaloes"
    ],
    specifications: [
      { label: "Milking Capacity", value: "8 - 10 cows or buffaloes per hour" },
      { label: "Bucket Material", value: "Stainless Steel AISI 304 (25L)" },
      { label: "Motor Power", value: "0.75 kW (1 HP) Single Phase / 220V" },
      { label: "Pulsator Type", value: "Pneumatic, 60:40 pulse ratio" },
      { label: "Vacuum Pump", value: "Oil-lubricated rotary vane, 200 LPM" },
      { label: "Claw Piece", value: "160cc Food-grade claw with shut-off valve" },
      { label: "Operating Vacuum", value: "48 - 50 kPa (adjustable)" }
    ],
    applications: [
      "Small-scale dairy farms (5 to 15 animals)",
      "Progressive rural milk producers",
      "Individual cattle owners wanting hygienic hands-free milking"
    ],
    image: "/images/products/single-bucket-milker.jpg",
    gallery: [
      "/images/products/single-bucket-milker.jpg",
      "/images/products/milker-bucket-detail.jpg"
    ]
  },
  {
    id: "prod-mm-02",
    slug: "double-bucket-milking-machine-trolley",
    name: "Double Bucket Trolley Milking Machine",
    category: "milking-machines",
    categoryName: "Milking Machines",
    badge: "Best Seller",
    isFeatured: true,
    tagline: "Dual-bucket simultaneous milking for medium dairy farms (15 to 40 animals)",
    shortDescription: "High-output mobile milking trolley with two independent 25L stainless steel buckets and high-capacity vacuum pump to milk two animals simultaneously.",
    fullDescription: "Built for commercial productivity, this double bucket system cuts milking duration in half. Powered by a heavy-duty electric motor and high-displacement vacuum pump, it provides stable vacuum across both milking clusters, ensuring rapid, gentle, and complete milk extraction.",
    features: [
      "Simultaneous milking of two animals with independent cluster control",
      "Two 25-litre AISI 304 stainless steel buckets with hygienic sanitary lids",
      "Heavy-duty 300 LPM rotary vane vacuum pump with integrated oiler",
      "Dual pneumatic pulsators with precise pulsation synchronization",
      "Robust twin-handle trolley for simple navigation across wet sheds",
      "Emergency vacuum release and calibrated dry-type pressure gauge"
    ],
    specifications: [
      { label: "Milking Capacity", value: "16 - 20 animals per hour" },
      { label: "Bucket Configuration", value: "2 x 25 Litre AISI 304 SS Buckets" },
      { label: "Motor Power", value: "1.5 kW (2 HP) Single or Three Phase" },
      { label: "Vacuum Capacity", value: "300 - 350 LPM" },
      { label: "Pulsation Rate", value: "60 pulses per minute (adjustable)" },
      { label: "Cluster Assemblies", value: "2 Complete sets with stainless shells & silicone liners" },
      { label: "Chassis", value: "Heavy tubular steel with anti-corrosion coating" }
    ],
    applications: [
      "Medium commercial dairy farms (15 to 40 cows/buffaloes)",
      "Dairy cooperatives & self-help farming groups",
      "Commercial dairy sheds requiring rapid morning/evening shifts"
    ],
    image: "/images/products/double-bucket-milker.jpg",
    gallery: [
      "/images/products/double-bucket-milker.jpg"
    ]
  },
  {
    id: "prod-mm-03",
    slug: "pipeline-milking-system",
    name: "Automated Pipeline Milking System",
    category: "milking-machines",
    categoryName: "Milking Machines",
    badge: "Commercial Grade",
    isFeatured: false,
    tagline: "Fixed sanitary pipeline milking delivering milk directly to bulk milk cooling tanks",
    shortDescription: "Custom-configured stainless steel overhead pipeline milking system for commercial herd barns, eliminating manual bucket handling and optimizing hygiene.",
    fullDescription: "Our pipeline milking installation delivers clean, untouched milk straight from the cow's udder to the bulk milk cooler. Designed with sanitary electro-polished SS 304 milk lines, electronic or pneumatic pulsation, and automated CIP (Clean-In-Place) wash loops, it sets the gold standard for dairy herd operations.",
    features: [
      "Untouched milk transfer directly to storage / BMC chillers",
      "Sanitary SS 304 overhead milk line with quick-action milking points",
      "Automated CIP wash unit with cycle timing and chemical intake",
      "Centralized heavy-duty vacuum tank maintaining ultra-stable vacuum",
      "Compatible with herringbone, parallel, and stanchion barn sheds",
      "Modular expansion capability as your herd size expands"
    ],
    specifications: [
      { label: "Barn Capacity", value: "Configurable for 20 to 100+ cattle" },
      { label: "Milk Line Material", value: "Sanitary electro-polished SS 304 (50mm diameter)" },
      { label: "Vacuum Unit", value: "Direct-drive industrial rotary pump (600 - 1200 LPM)" },
      { label: "Washing System", value: "Automated Clean-In-Place (CIP) circulation" },
      { label: "Pulsators", value: "Electronic 24V or Heavy-Duty Pneumatic" },
      { label: "Installation Type", value: "Custom turnkey shed installation by our Baramati technicians" }
    ],
    applications: [
      "Commercial dairy herds (30+ cattle)",
      "Modern tie-stall and free-stall barns",
      "Corporate & institutional dairy farms"
    ],
    image: "/images/products/pipeline-milking.jpg",
    gallery: [
      "/images/products/pipeline-milking.jpg"
    ]
  },

  // 2. Milk Analysers & Testing Equipment
  {
    id: "prod-ma-01",
    slug: "ultrasonic-milk-analyser-digital",
    name: "Ultrasonic Electronic Milk Analyser",
    category: "milk-analysers-testing",
    categoryName: "Milk Analysers & Testing",
    badge: "High Precision",
    isFeatured: true,
    tagline: "Instant measurement of Fat, SNF, Added Water, Density, and Protein in 30 seconds",
    shortDescription: "Advanced ultrasonic analyzer for accurate, chemical-free testing of cow and buffalo milk at collection centers and dairy plants.",
    fullDescription: "Our Digital Ultrasonic Milk Analyser is a cornerstone tool for milk procurement centers across Maharashtra. Delivering rapid test results within 30 to 40 seconds without hazardous chemicals, it ensures fair pricing for farmers and airtight quality control for collection centers.",
    features: [
      "Chemical-free testing utilizing multi-frequency ultrasonic sensors",
      "Multi-parameter readout: Fat, SNF, Added Water, Density, Protein, Freezing Point",
      "Dual calibration profiles for Cow, Buffalo, and Mixed milk",
      "RS-232 / USB interface for automatic weight scale and printer integration",
      "Internal memory log with date and sample numbering",
      "Automatic cleaning prompt with low reagent consumption"
    ],
    specifications: [
      { label: "Measuring Time", value: "30 - 40 seconds per sample" },
      { label: "Fat Range", value: "0.01% to 25.0% (Accuracy: ±0.10%)" },
      { label: "SNF Range", value: "3.0% to 15.0% (Accuracy: ±0.15%)" },
      { label: "Added Water", value: "0.0% to 70.0% (Accuracy: ±5.0%)" },
      { label: "Density Range", value: "1015 to 1040 kg/m³" },
      { label: "Sample Volume", value: "10 ml to 15 ml" },
      { label: "Power Supply", value: "12V DC / 220V AC with battery backup support" }
    ],
    applications: [
      "Village milk collection centers (VMC)",
      "Dairy cooperative societies",
      "Private milk chilling hubs & processing dairies"
    ],
    image: "/images/products/milk-analyser.jpg",
    gallery: [
      "/images/products/milk-analyser.jpg"
    ]
  },
  {
    id: "prod-ma-02",
    slug: "automatic-milk-testing-data-processor-setup",
    name: "Automatic Milk Collection Unit (AMCU) Setup",
    category: "milk-analysers-testing",
    categoryName: "Milk Analysers & Testing",
    badge: "Integrated System",
    isFeatured: false,
    tagline: "Turnkey milk collection station with analyser, electronic scale, and receipt printer",
    shortDescription: "Complete integrated procurement unit linking digital weighing scales, ultrasonic analysers, and thermal slip printers for seamless member payments.",
    fullDescription: "A turnkey station designed for Village Milk Collection Centers. It integrates the weighing platform, milk fat/SNF analyser, thermal bill printer, and digital display onto a single robust data collection hub, eliminating manual log errors and building trust between societies and farmers.",
    features: [
      "Direct integration between weighing balance and milk analyser",
      "Instant farmer slip generation with Fat, SNF, Litres, and calculated payout",
      "RFID / Member card reader compatible for instant farmer identification",
      "Inbuilt data backup with USB pendrive export to dairy billing software",
      "Rugged metal workstation stand resistant to shed moisture and vibrations"
    ],
    specifications: [
      { label: "Components", value: "Analyser + Weighing Scale + Thermal Printer + Display Unit" },
      { label: "Printer Type", value: "Heavy-duty 2-inch or 3-inch thermal slip printer" },
      { label: "Weighing Scale", value: "Electronic scale 50kg / 100kg with 10g accuracy" },
      { label: "Display", value: "High-contrast dual LED display (Operator & Customer facing)" },
      { label: "Connectivity", value: "USB, RS232, optional Bluetooth / GPRS" }
    ],
    applications: [
      "Primary milk collection societies",
      "Private dairy procurement routes",
      "Chilling plant intake docks"
    ],
    image: "/images/products/amcu-setup.jpg",
    gallery: [
      "/images/products/amcu-setup.jpg"
    ]
  },

  // 3. Cream Separators
  {
    id: "prod-cs-01",
    slug: "electric-motor-cream-separator-machine",
    name: "Electric Motor-Driven Cream Separator",
    category: "cream-separators",
    categoryName: "Cream Separators",
    badge: "High Output",
    isFeatured: true,
    tagline: "High-speed centrifugal milk skimming machine for commercial dairies and halwais",
    shortDescription: "Precision-balanced electric cream separator crafted with stainless steel bowl and discs for clean separation of sweet cream from fresh milk.",
    fullDescription: "Designed for intensive continuous duty, this motor-driven cream separator achieves separation efficiencies leaving less than 0.03% fat in skimmed milk. Featuring dynamically balanced food-grade stainless steel separator discs and a vibration-damped motor base, it is an essential workhorse for dairy sweetmakers, ghee manufacturers, and milk plants.",
    features: [
      "Dynamically balanced stainless steel bowl ensuring vibration-free spin",
      "High skimming efficiency (residual fat in skim milk under 0.03%)",
      "AISI 304 stainless steel milk receiver pan, spouts, and float",
      "Heavy cast-iron/aluminum base with protective epoxy finish",
      "Equipped with thermal overload protection on electric motor",
      "Easy teardown for hygienic daily water & detergent washdown"
    ],
    specifications: [
      { label: "Separating Capacity", value: "165 to 300 Litres per hour (models available up to 500 LPH)" },
      { label: "Bowl Speed", value: "8,500 - 9,500 RPM" },
      { label: "Milk Pan Capacity", value: "15 to 25 Litres" },
      { label: "Contact Parts", value: "Stainless Steel AISI 304" },
      { label: "Motor Power", value: "0.25 HP to 0.5 HP Single Phase 220V" },
      { label: "Number of Discs", value: "19 to 23 SS separator discs" }
    ],
    applications: [
      "Sweet makers & Halwais (Khoa, Ghee & Cream production)",
      "Dairy processing plants & local milk dairies",
      "Farmers extracting table cream for direct retail"
    ],
    image: "/images/products/cream-separator-electric.jpg",
    gallery: [
      "/images/products/cream-separator-electric.jpg"
    ]
  },
  {
    id: "prod-cs-02",
    slug: "manual-hand-operated-cream-separator",
    name: "Hand-Operated Stainless Cream Separator",
    category: "cream-separators",
    categoryName: "Cream Separators",
    badge: "Economical & Reliable",
    isFeatured: false,
    tagline: "Smooth hand-crank centrifugal separator for rural farms with intermittent electricity",
    shortDescription: "Reliable manual cream separator with geared transmission for effortless hand spinning, perfect for rural farms and small milk processors.",
    fullDescription: "An economical, electricity-free solution for cream separation. Built with precision brass gearing and stainless steel separation discs, it allows rural farmers to extract rich cream and skimmed milk even in areas with unreliable power supply.",
    features: [
      "Smooth gear drive requiring low manual cranking effort",
      "Precision brass and steel gear train immersed in oil bath",
      "Food-contact stainless steel discs and collection spouts",
      "Bench-mounting bracket for rock-solid stability during operation",
      "Easy disassembly without special tools for cleaning"
    ],
    specifications: [
      { label: "Capacity", value: "60 to 100 Litres per hour" },
      { label: "Drive Type", value: "Manual Hand Crank with Helical Gearing" },
      { label: "Bowl Speed", value: "7,500 - 8,000 RPM at 60 crank RPM" },
      { label: "Milk Pan", value: "Stainless Steel 10 Litre" },
      { label: "Discs Material", value: "Stainless Steel AISI 304" }
    ],
    applications: [
      "Rural homesteads without 24/7 power supply",
      "Small cottage dairy makers",
      "Farmhouse ghee producers"
    ],
    image: "/images/products/cream-separator-manual.jpg",
    gallery: [
      "/images/products/cream-separator-manual.jpg"
    ]
  },

  // 4. Bulk Milk Coolers & Chillers
  {
    id: "prod-bmc-01",
    slug: "direct-expansion-bulk-milk-cooler-500l-1000l",
    name: "Direct Expansion (DX) Bulk Milk Cooler (BMC)",
    category: "bulk-milk-coolers",
    categoryName: "Bulk Milk Coolers (BMC) & Chillers",
    badge: "Heavy Duty Cold Chain",
    isFeatured: true,
    tagline: "Rapid chilling to 4°C preserving freshness, preventing bacterial growth and acidity",
    shortDescription: "Heavy-duty SS 304 insulated refrigeration cooling tank equipped with automated agitation and laser-welded dimple evaporator jacket.",
    fullDescription: "Our Direct Expansion (DX) Bulk Milk Coolers are designed to preserve milk fresh from the udder by dropping the temperature from 35°C to 4°C within 2.5 to 3 hours. Constructed with AISI 304 stainless steel and high-density CFC-free polyurethane foam (PUF) insulation, they maintain optimal temperature even during hot Maharashtra summers.",
    features: [
      "Direct expansion laser-welded dimple jacket for maximum heat exchange efficiency",
      "High-density PUF insulation (40-45 kg/m³) ensuring minimal temperature rise during power outages",
      "Slow-speed gear motor agitator (25-30 RPM) preventing fat churning or cream separation",
      "Hermetic scroll compressor with R404a/R134a eco-friendly refrigerant",
      "Digital temperature controller and automated agitation cycling",
      "Manual and automated CIP (Clean-In-Place) spray ball cleaning"
    ],
    specifications: [
      { label: "Standard Capacities", value: "500 L, 1,000 L, 2,000 L, 3,000 L & 5,000 L" },
      { label: "Cooling Time", value: "35°C down to 4°C in ≤ 3 hours for rated batch" },
      { label: "Inner Tank Material", value: "AISI 304 SS (2.0mm thickness, sanitary mirror finish)" },
      { label: "Outer Shell Material", value: "AISI 304 SS (1.5mm thickness)" },
      { label: "Insulation", value: "High-density CFC-free polyurethane foam (50mm thickness)" },
      { label: "Agitator Speed", value: "25 - 30 RPM gentle agitation" },
      { label: "Standards Compliance", value: "ISO 5708-2A II Class Refrigeration Standard" }
    ],
    applications: [
      "Village Dairy Cooperative chilling centers",
      "Medium to large scale dairy farms",
      "Private milk procurement route chilling hubs"
    ],
    image: "/images/products/bulk-milk-cooler.jpg",
    gallery: [
      "/images/products/bulk-milk-cooler.jpg"
    ]
  },

  // 5. Milk Cans & Storage Tanks
  {
    id: "prod-mc-01",
    slug: "stainless-steel-304-milk-cans",
    name: "Stainless Steel AISI 304 Milk Cans (10L - 50L)",
    category: "milk-cans-storage",
    categoryName: "Milk Cans & Storage Tanks",
    badge: "Sanitary Grade",
    isFeatured: true,
    tagline: "Seamless spun, dent-resistant hygienic stainless steel cans with air-tight rubber gasket lids",
    shortDescription: "Industrial sanitary grade SS 304 milk transport cans with sturdy welded drop handles and smooth rounded internal corners for zero milk residue.",
    fullDescription: "Jagdamb Enterprises supplies authentic, heavy-gauge AISI 304 stainless steel milk cans built to withstand tough everyday transport on motorbikes, pickups, and tractors. Spun without sharp welded crevices, they wash easily and never harbor sour milk bacteria.",
    features: [
      "Manufactured from prime certified food-grade AISI 304 stainless steel",
      "Seamless spun bottom and rounded interior corners preventing sediment buildup",
      "Heavy stainless steel rim and thick bottom reinforcement ring protecting against drops",
      "Tight-fitting push lid with food-grade silicone / rubber sealing gasket",
      "Robust solid handles ergonomically shaped for comfortable two-man lifting",
      "Laser-etched serial numbering or cooperative name branding available on bulk orders"
    ],
    specifications: [
      { label: "Available Sizes", value: "10 Litres, 20 Litres, 40 Litres, and 50 Litres" },
      { label: "Material", value: "Certified AISI 304 Stainless Steel" },
      { label: "Thickness", value: "1.2mm to 1.5mm heavy-duty gauge" },
      { label: "Lid Type", value: "Mushroom lid with food-grade gasket or flat lock lid" },
      { label: "Finish", value: "Sanitary electro-polished inner & mirror outer finish" }
    ],
    applications: [
      "Daily milk collection and transit to dairy centers",
      "Dairy farm storage and chilling docks",
      "Ghee and liquid product transport"
    ],
    image: "/images/products/ss-milk-can.jpg",
    gallery: [
      "/images/products/ss-milk-can.jpg"
    ]
  },

  // 6. Dairy Processing Equipment
  {
    id: "prod-dp-01",
    slug: "commercial-khoa-mawa-making-machine",
    name: "Commercial Khoa / Mawa Making Machine",
    category: "dairy-processing",
    categoryName: "Dairy Processing Equipment",
    badge: "Commercial Grade",
    isFeatured: false,
    tagline: "Motorized scrapers prevent burning while boiling milk down to fresh rich Khoa",
    shortDescription: "Stainless steel tilting steam or gas jacketed kadai equipped with Teflon scrapers for uniform, non-stick khoa and mawa production.",
    fullDescription: "Save labour and prevent milk scorching with our motorized Khoa/Mawa making machine. Utilizing rotating Teflon scraper blades contouring the bowl curvature, it produces velvety, uniform khoa, condensed milk, and basundi in a fraction of the time required by manual stirring.",
    features: [
      "Heavy gauge SS 304 hemispherical bowl with tilting mechanism for easy emptying",
      "Food-grade Teflon wiper blades that scrape bottom and sides continuously",
      "Available with LPG / Diesel burner heating or indirect steam boiler jacket",
      "Variable speed planetary stirring mechanism",
      "Significant reduction in manual labor and zero burnt milk wastage"
    ],
    specifications: [
      { label: "Batch Capacity", value: "50 Litres, 100 Litres, and 150 Litres milk batch" },
      { label: "Scraper Material", value: "Food-grade PTFE (Teflon) with spring tensioning" },
      { label: "Bowl Material", value: "AISI 304 Stainless Steel (heavy 3mm bottom)" },
      { label: "Tilting", value: "Manual worm-gear handwheel tilting" },
      { label: "Motor", value: "1 HP to 2 HP geared reduction motor" }
    ],
    applications: [
      "Sweet marts, halwais & commercial dairy processors",
      "Ghee, Basundi, Kunda and Mawa manufacturers"
    ],
    image: "/images/products/khoa-machine.jpg",
    gallery: [
      "/images/products/khoa-machine.jpg"
    ]
  },
  {
    id: "prod-dp-02",
    slug: "heavy-duty-paneer-press-machine",
    name: "Pneumatic & Mechanical Paneer Press",
    category: "dairy-processing",
    categoryName: "Dairy Processing Equipment",
    badge: "Sanitary Grade",
    isFeatured: false,
    tagline: "Uniform pressing for block paneer with controlled moisture release",
    shortDescription: "Sanitary stainless steel multi-mould paneer pressing unit for professional block shaping and moisture extraction.",
    fullDescription: "Constructed with AISI 304 food-grade stainless steel, this paneer press exerts uniform pressure across perforated moulds to ensure firm, smooth paneer blocks without crumbles.",
    features: [
      "Full stainless steel framework and drip drainage tray",
      "Available in manual screw press or pneumatic air-cylinder variants",
      "Perforated paneer moulds in 1kg, 2kg, and 5kg block dimensions",
      "Effortless cleaning with zero hidden crevices"
    ],
    specifications: [
      { label: "Capacity", value: "10 kg to 50 kg per pressing cycle" },
      { label: "Material", value: "All contact parts AISI 304 SS" },
      { label: "Operation", value: "Manual screw or Pneumatic cylinder" }
    ],
    applications: [
      "Commercial paneer manufacturers",
      "Dairy sweet shops & hotels"
    ],
    image: "/images/products/paneer-press.jpg",
    gallery: [
      "/images/products/paneer-press.jpg"
    ]
  },

  // 7. Chaff Cutters & Fodder Equipment
  {
    id: "prod-cc-01",
    slug: "heavy-duty-motorized-chaff-cutter",
    name: "Heavy-Duty Motorized Chaff Cutter (Kutti Machine)",
    category: "chaff-cutters",
    categoryName: "Chaff Cutters & Fodder Machinery",
    badge: "High Throughput",
    isFeatured: false,
    tagline: "Precision chopped green maize, napier grass, and dry straw for enhanced cattle digestion",
    shortDescription: "Robust electric motor-driven fodder cutting machine equipped with hardened alloy steel blades and multi-gear speed regulation.",
    fullDescription: "Feed quality directly impacts milk production. Our Heavy-Duty Motorized Chaff Cutter chops green grass, maize, sorghum, and dry sugarcane tops into uniform 10-15mm bites, dramatically reducing fodder rejection by cattle and boosting cud chewing.",
    features: [
      "Specially hardened high-carbon alloy blades for prolonged sharpness",
      "Dual or triple feed rollers ensuring smooth self-intake without jamming",
      "Adjustable gear box allowing cut length selection (fine or coarse)",
      "Protective safety cover over pulleys and rotating cutter wheel",
      "Heavy structural steel frame resisting vibration during continuous operation"
    ],
    specifications: [
      { label: "Output Capacity", value: "600 kg to 1,200 kg per hour (green fodder)" },
      { label: "Blade Count", value: "2 or 3 Hardened Carbon Steel Blades" },
      { label: "Motor Requirement", value: "2 HP or 3 HP Single/Three Phase Motor" },
      { label: "Cutting Size", value: "10mm - 20mm adjustable cut length" },
      { label: "Weight", value: "Approx. 85 - 110 kg" }
    ],
    applications: [
      "Dairy cattle farms (10+ cows/buffaloes)",
      "Silage making setups",
      "Fodder preparation units"
    ],
    image: "/images/products/chaff-cutter.jpg",
    gallery: [
      "/images/products/chaff-cutter.jpg"
    ]
  },

  // 8. Spare Parts & Accessories
  {
    id: "prod-sp-01",
    slug: "pneumatic-milking-pulsator-l80-interpuls-type",
    name: "Pneumatic Milking Pulsator (InterPuls Type L80)",
    category: "spare-parts-accessories",
    categoryName: "Spare Parts & Consumables",
    badge: "Genuine Replacement",
    isFeatured: true,
    tagline: "Accurate, dust-resistant 60:40 pulsation rate for gentle milking extraction",
    shortDescription: "Durable pneumatic pulsator with balanced alternating stroke, ensuring gentle massage and teat relief throughout milking cycles.",
    fullDescription: "The heart of every milking machine. We stock genuine L80 pneumatic pulsators made with wear-resistant internal diaphragms, stainless steel slide valves, and easy-clean air filters to ensure unwavering pulsation rates in dusty shed conditions.",
    features: [
      "Accurate 60:40 pulsation ratio for gentle teat stimulation",
      "Dust and moisture resistant internal filtration chamber",
      "Simple manual adjustment screw for pulse speed tuning (50 - 65 ppm)",
      "Long-lasting synthetic elastomer diaphragms",
      "Universal push-fit mounting collar fits standard machine lid adaptors"
    ],
    specifications: [
      { label: "Type", value: "Pneumatic Alternating (2-exit)" },
      { label: "Rate", value: "Adjustable 50 - 65 pulses/minute" },
      { label: "Ratio", value: "60:40 standard" },
      { label: "Compatibility", value: "Standard single and double bucket milking units" }
    ],
    applications: [
      "Direct replacement on portable milking trolleys and pipeline systems",
      "Annual preventative maintenance overhaul"
    ],
    image: "/images/products/pulsator.jpg",
    gallery: [
      "/images/products/pulsator.jpg"
    ]
  },
  {
    id: "prod-sp-02",
    slug: "food-grade-silicone-rubber-teat-cup-liners",
    name: "Food-Grade Teat Cup Liners & Shells",
    category: "spare-parts-accessories",
    categoryName: "Spare Parts & Consumables",
    badge: "Hygienic Consumables",
    isFeatured: false,
    tagline: "Gentle on cow and buffalo teats, resistant to milk fat and chemical detergents",
    shortDescription: "Certified food-grade silicone and black rubber liners designed for hygienic teat adhesion and zero slipping during milking.",
    fullDescription: "Worn or cracked liners cause teat irritation and elevate somatic cell counts. Jagdamb Enterprises supplies genuine dairy liners and heavy stainless steel teat shells engineered for cow and buffalo anatomy.",
    features: [
      "Certified food-grade non-toxic rubber or transparent silicone",
      "Smooth interior surface prevents bacterial attachment and milk stone",
      "Precision flex collar prevents vacuum leaks and teat slips",
      "Matched stainless steel 304 outer teat shells with weight balance"
    ],
    specifications: [
      { label: "Material", value: "Food Contact Grade Silicone / Synthetic Nitrile Rubber" },
      { label: "Life Expectancy", value: "2,500 milkings (rubber) / 5,000 milkings (silicone)" },
      { label: "Variants", value: "Cow standard liner & Buffalo wide-mouth liner" }
    ],
    applications: [
      "Routine liner replacement every 6 months",
      "Teat health & mastitis prevention programs"
    ],
    image: "/images/products/liners.jpg",
    gallery: [
      "/images/products/liners.jpg"
    ]
  },
  {
    id: "prod-sp-03",
    slug: "rotary-vane-vacuum-pump-assembly",
    name: "Industrial Rotary Vane Vacuum Pump Unit",
    category: "spare-parts-accessories",
    categoryName: "Spare Parts & Consumables",
    badge: "Heavy Duty Spares",
    isFeatured: false,
    tagline: "High-displacement oil-lubricated vacuum pump with silencer and oil recovery tank",
    shortDescription: "Continuous-duty vacuum pump core with precision ground rotor, fiber vanes, and oil recirculator for milking machine rigs.",
    fullDescription: "Replacement vacuum pumps for milking trolleys and centralized shed vacuum networks. Manufactured with heavy-duty cast iron housing and balanced rotors to deliver deep, constant vacuum without overheating.",
    features: [
      "Precision-bored close-grained cast iron cylinder",
      "Long-life synthetic fiber or carbon vanes",
      "Built-in exhaust silencer with transparent oil trap reservoir",
      "Non-return check valve preventing oil backflow during sudden stops"
    ],
    specifications: [
      { label: "Capacity", value: "200 LPM, 350 LPM, 550 LPM and 900 LPM models" },
      { label: "Shaft Speed", value: "1,440 RPM direct or V-belt driven" },
      { label: "Lubrication", value: "Automatic drop-feed oiler" }
    ],
    applications: [
      "Replacement vacuum pump on aging milking setups",
      "Upgrading single bucket trolleys to double bucket capacity"
    ],
    image: "/images/products/vacuum-pump.jpg",
    gallery: [
      "/images/products/vacuum-pump.jpg"
    ]
  }
];
