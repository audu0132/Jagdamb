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
    name: "Milky Commercial Khoa / Mawa Making Machine",
    category: "dairy-processing",
    categoryName: "Dairy Processing Equipment",
    badge: "Milky Brand • Heavy Duty",
    isFeatured: true,
    tagline: "Motorized planetary scraper kadai for non-stick khoa, mawa, basundi & condensed milk",
    shortDescription: "Stainless steel tilting kadai with motorized Teflon scrapers and dual gas burners for uniform, non-stick khoa and mawa production.",
    fullDescription: "Built by Mahesh Engineering Works (Milky Brand), this commercial Khoa / Mawa Making Machine eliminates manual stirring and burnt milk wastage. Designed with a heavy-gauge AISI 304 food-grade stainless steel tilting boiling pan, motorized spring-loaded Teflon (PTFE) scrapers, dual high-efficiency gas burners, and sturdy castor wheels with foot brakes for simple mobility in sweet marts and dairy plants.",
    features: [
      "Authentic Milky Brand engineering by Mahesh Eng. Works",
      "Heavy-gauge AISI 304 food-grade stainless steel hemispherical boiling pan",
      "Motorized planetary scraping arms with food-grade PTFE Teflon wipers",
      "Dual heavy-duty LPG / Gas burner controls with precision needle valves",
      "Smooth manual tilting mechanism for effortless, burn-free unloading",
      "Heavy tubular stainless steel chassis mounted on 4 locking castor wheels",
      "Drastically cuts labor requirement and prevents milk caramelization or scorching"
    ],
    specifications: [
      { label: "Brand / Make", value: "Milky Brand (Mahesh Eng. Works)" },
      { label: "Pan Material", value: "AISI 304 Food-Grade Stainless Steel" },
      { label: "Batch Capacity", value: "50 Litres to 150 Litres per batch" },
      { label: "Scraper Type", value: "Food-grade Teflon (PTFE) contour wiper" },
      { label: "Heating Source", value: "LPG Gas Burner / Natural Gas / Diesel" },
      { label: "Mobility", value: "4 Heavy-duty swivel castor wheels with brakes" },
      { label: "Motor", value: "1 HP / 2 HP Geared Reduction Motor (Single / 3-Phase)" }
    ],
    applications: [
      "Commercial dairy processing units and cooperatives",
      "Sweet marts, halwais, basundi & pedha manufacturers",
      "Ghee boiling and concentrated milk preparation"
    ],
    image: "/images/products/khoa-machine.jpg",
    gallery: [
      "/images/products/khoa-machine.jpg"
    ]
  },
  {
    id: "prod-dp-02",
    slug: "heavy-duty-paneer-press-machine",
    name: "Stainless Steel Manual Screw Paneer Press Machine",
    category: "dairy-processing",
    categoryName: "Dairy Processing Equipment",
    badge: "Food-Grade SS 304",
    isFeatured: true,
    tagline: "Heavy-duty screw spindle press with perforated moulding box for uniform paneer blocks",
    shortDescription: "Sanitary stainless steel manual screw paneer press box engineered for uniform whey extraction and perfectly shaped, firm paneer blocks.",
    fullDescription: "Crafted entirely from heavy-duty AISI 304 food-grade stainless steel, this manual screw paneer press provides precise, controlled pressing for cottage cheese (paneer). Featuring a micro-perforated rectangular moulding container for rapid whey drainage, a reinforced pressure plate, heavy-threaded acme screw spindle with ergonomic T-bar handle, and a rigid square frame structure for commercial daily use.",
    features: [
      "100% Food-grade AISI 304 stainless steel construction — zero rust or corrosion",
      "Perforated moulding box for rapid, complete whey separation",
      "Heavy-duty acme thread screw spindle with ergonomic T-bar handle",
      "Heavy stainless steel pressure top plate ensuring flat, even paneer blocks",
      "Quick-release crossbar with safety lock pins for effortless mould loading and removal",
      "Sturdy 4-leg square-tube frame providing stability on washdown floors",
      "Easy to clean, sanitize, and maintain according to FSSAI dairy standards"
    ],
    specifications: [
      { label: "Material", value: "100% AISI 304 Food-Grade Stainless Steel" },
      { label: "Operation", value: "Heavy-Duty Acme Screw Manual Spindle with T-Handle" },
      { label: "Batch Capacity", value: "5 kg to 15 kg block per pressing cycle" },
      { label: "Drainage", value: "Micro-perforated side walls and base plate" },
      { label: "Frame", value: "Heavy square hollow section SS 304 legs" },
      { label: "Crossbar", value: "Detachable swing/pin latch for quick uncoupling" }
    ],
    applications: [
      "Commercial paneer makers and dairy plants",
      "Sweet shops, halwais, restaurants, and cloud kitchens",
      "Farmer producer organisations (FPOs) producing packaged paneer"
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
    name: "Heavy-Duty Motorized Chaff Cutter Range (Kutti Machine)",
    category: "chaff-cutters",
    categoryName: "Chaff Cutters & Fodder Machinery",
    badge: "High Output Series",
    isFeatured: true,
    tagline: "High-efficiency fodder cutters for green maize, napier grass, sorghum & dry straw",
    shortDescription: "Heavy-duty electric motor and engine-powered chaff cutter range including Fighter, Boxer, Boxer Pro, Begin, and Begin Pro models for dairy farms.",
    fullDescription: "Nutritious and easily digestible fodder is key to animal health and higher milk yield. Our complete range of motorized Chaff Cutters (Kutti Machines) features hardened alloy steel blades, smooth anti-jam feeder rollers, and sturdy anti-vibration frames to chop green fodder and dry roughage into uniform, easily chewable bites.",
    features: [
      "Comprehensive lineup: Fighter, Boxer, Boxer Pro, Begin, and Begin Pro models",
      "Specially hardened high-carbon alloy blades for prolonged cutting edge life",
      "Dual and triple spring-tensioned feed rollers preventing feeding chokes",
      "Adjustable cutting length gears (10mm - 20mm) for cattle, sheep, and goat feeding",
      "Available with electric motors (2 HP / 3 HP) or petrol/diesel engine power",
      "Reinforced safety hoods and emergency stop controls for farm safety",
      "Heavy structural steel frame on 4 wheels for effortless shed mobility"
    ],
    specifications: [
      { label: "Output Capacity", value: "500 kg to 1,500 kg per hour (green fodder)" },
      { label: "Available Models", value: "Fighter, Boxer, Boxer Pro, Begin, Begin Pro" },
      { label: "Blade Count", value: "2 to 3 Reversible Hardened Carbon Steel Blades" },
      { label: "Motor Requirement", value: "2 HP or 3 HP Single/Three Phase Motor / Engine" },
      { label: "Cutting Size", value: "10mm - 20mm adjustable cut length" },
      { label: "Chassis", value: "Heavy powder-coated tubular steel on 4 wheels" }
    ],
    applications: [
      "Dairy cattle & buffalo farms (5 to 100+ animals)",
      "Silage preparation and fodder storage bunkers",
      "Goat and sheep livestock farming units",
      "Custom fodder cutting service contractors"
    ],
    image: "/images/products/chaff-cutters-series.jpg",
    gallery: [
      "/images/products/chaff-cutters-series.jpg",
      "/images/products/chaff-cutter-fighter.jpg",
      "/images/products/chaff-cutter-boxer.jpg",
      "/images/products/chaff-cutter-boxer-pro.jpg",
      "/images/products/chaff-cutter-begin.jpg",
      "/images/products/chaff-cutter-begin-pro.jpg"
    ]
  },
  {
    id: "prod-cc-02",
    slug: "fighter-heavy-duty-chaff-cutter",
    name: "Fighter Heavy-Duty Motorized Chaff Cutter",
    category: "chaff-cutters",
    categoryName: "Chaff Cutters & Fodder Machinery",
    badge: "Fighter Model",
    isFeatured: true,
    tagline: "Mobile 4-wheel electric fodder cutter with high-speed cutting drum",
    shortDescription: "High-speed electric chaff cutter mounted on a 4-wheel mobile chassis for smooth movement across cow sheds.",
    fullDescription: "The Fighter Chaff Cutter is designed for medium dairy farms needing an agile, dependable fodder cutter. Powered by a high-torque electric motor with protective belt cover and quick-discharge chute, it cuts napier grass, maize stalks, and straw with minimal physical effort.",
    features: [
      "High-speed precision rotor with tempered carbon steel blades",
      "Sturdy 4-wheel trolley chassis for easy positioning in cattle sheds",
      "Deep intake hopper for rapid manual fodder feeding",
      "Integrated motor mount platform ensuring zero belt slip",
      "Safety cowl covering all moving pulleys and belts"
    ],
    specifications: [
      { label: "Model", value: "Fighter Chaff Cutter" },
      { label: "Output Capacity", value: "600 - 900 kg/hour" },
      { label: "Motor Power", value: "2 HP / 3 HP Single Phase Motor" },
      { label: "Blade Material", value: "High-grade hardened alloy steel" },
      { label: "Mobility", value: "4 Heavy-duty wheels with steering ease" }
    ],
    applications: [
      "Farms with 10 to 30 dairy cows or buffaloes",
      "Green maize and napier grass daily cutting"
    ],
    image: "/images/products/chaff-cutter-fighter.jpg",
    gallery: [
      "/images/products/chaff-cutter-fighter.jpg",
      "/images/products/chaff-cutters-series.jpg"
    ]
  },
  {
    id: "prod-cc-03",
    slug: "boxer-compact-chaff-cutter",
    name: "Boxer Compact Chaff Cutter Machine",
    category: "chaff-cutters",
    categoryName: "Chaff Cutters & Fodder Machinery",
    badge: "Boxer Model",
    isFeatured: false,
    tagline: "Compact vertical-stance electric kutti machine with enclosed motor stand",
    shortDescription: "Space-saving compact fodder cutter with enclosed bottom motor enclosure and 4-wheel mobility.",
    fullDescription: "The Boxer Chaff Cutter features a space-saving vertical footprint ideal for farms with compact shed corridors. Its enclosed motor shelf keeps fodder chaff and dust away from the motor windings, extending equipment lifespan while providing consistent cut uniformity.",
    features: [
      "Vertical space-saving frame with enclosed lower motor compartment",
      "Smooth roller feeding with self-gripping tooth design",
      "Dual forward cutting blades with quick-sharpening design",
      "4 Red mobility castor wheels for effortless repositioning",
      "Low power consumption with high cutting inertia"
    ],
    specifications: [
      { label: "Model", value: "Boxer Chaff Cutter" },
      { label: "Output Capacity", value: "500 - 800 kg/hour" },
      { label: "Motor", value: "2 HP Single Phase 1440 RPM Motor" },
      { label: "Structure", value: "Heavy-gauge square tube vertical stand" },
      { label: "Fodder Types", value: "Green grass, sorghum, dry maize, sugarcane tops" }
    ],
    applications: [
      "Small to medium dairy farms (5 to 20 cattle)",
      "Sheds with limited storage or maneuvering space"
    ],
    image: "/images/products/chaff-cutter-boxer.jpg",
    gallery: [
      "/images/products/chaff-cutter-boxer.jpg",
      "/images/products/chaff-cutters-series.jpg"
    ]
  },
  {
    id: "prod-cc-04",
    slug: "boxer-pro-heavy-duty-chaff-cutter",
    name: "Boxer Pro Extended Conveyor Chaff Cutter",
    category: "chaff-cutters",
    categoryName: "Chaff Cutters & Fodder Machinery",
    badge: "Popular Model",
    isFeatured: true,
    tagline: "Extended feeder table & wide-mouth intake for high-volume commercial cutting",
    shortDescription: "Commercial-grade chaff cutter with extended feed table and heavy-duty rotor for fast, fatigue-free feeding.",
    fullDescription: "The Boxer Pro is engineered for higher productivity. Its lengthened feeding tray allows operators to load full armfuls of long maize stalks or thick hybrid napier grass without bunching or kickback. Heavy-duty roller bearings and an oversized flywheel ensure smooth operation through tough, fibrous fodder.",
    features: [
      "Extended horizontal feeding trough for effortless continuous feeding",
      "Wide feed mouth with high-traction intake rollers",
      "Wide-stance anti-vibration chassis with heavy low-profile wheels",
      "Top-mounted safety shut-off mechanism",
      "Multi-groove V-belt transmission with robust cast iron pulleys"
    ],
    specifications: [
      { label: "Model", value: "Boxer Pro Chaff Cutter" },
      { label: "Output Capacity", value: "800 - 1,200 kg/hour" },
      { label: "Motor Power", value: "3 HP Single or Three Phase Motor" },
      { label: "Cutting Mechanism", value: "Heavy flywheel with 3 hardened steel blades" },
      { label: "Feed System", value: "Extended trough with automated intake rollers" }
    ],
    applications: [
      "Commercial dairy herds (25 to 60 cows/buffaloes)",
      "Intensive fodder chopping and daily silage preparation"
    ],
    image: "/images/products/chaff-cutter-boxer-pro.jpg",
    gallery: [
      "/images/products/chaff-cutter-boxer-pro.jpg",
      "/images/products/chaff-cutters-series.jpg"
    ]
  },
  {
    id: "prod-cc-05",
    slug: "begin-dual-gear-chaff-cutter",
    name: "Begin Dual-Gear Fodder Chaff Cutter",
    category: "chaff-cutters",
    categoryName: "Chaff Cutters & Fodder Machinery",
    badge: "Begin Model",
    isFeatured: false,
    tagline: "Operator safety control with forward, reverse & neutral gearbox levers",
    shortDescription: "Safety-first fodder cutting machine equipped with a manual reverse/forward gearbox lever to instantly clear jams.",
    fullDescription: "The Begin Chaff Cutter features a quick-action gearbox lever that puts complete feeding control in the operator's hands. In the event of an accidental overload or thick stalk jam, simply switching to reverse backs out the fodder immediately, protecting blades and the electric motor.",
    features: [
      "Forward, Reverse & Neutral gear selector lever for jam-free operation",
      "Ergonomic red safety trip bar for instant stop",
      "High-angle discharge chute throwing chopped fodder neatly into carts",
      "Balanced heavy steel flywheel for smooth low-vibration cutting",
      "Low maintenance oil-bath gearbox construction"
    ],
    specifications: [
      { label: "Model", value: "Begin Chaff Cutter" },
      { label: "Output Capacity", value: "700 - 1,000 kg/hour" },
      { label: "Gearbox", value: "Forward / Reverse / Neutral manual lever" },
      { label: "Motor", value: "2 HP to 3 HP Single Phase" },
      { label: "Frame", value: "Welded angle steel with powder-coated red body" }
    ],
    applications: [
      "Progressive dairy farmers seeking maximum operator safety",
      "Cutting thick sorghum, sugarcane tops, and green fodder"
    ],
    image: "/images/products/chaff-cutter-begin.jpg",
    gallery: [
      "/images/products/chaff-cutter-begin.jpg",
      "/images/products/chaff-cutters-series.jpg"
    ]
  },
  {
    id: "prod-cc-06",
    slug: "begin-pro-commercial-chaff-cutter",
    name: "Begin Pro Commercial Multi-Power Chaff Cutter",
    category: "chaff-cutters",
    categoryName: "Chaff Cutters & Fodder Machinery",
    badge: "Heavy Duty Commercial",
    isFeatured: true,
    tagline: "Ultra-heavy capacity fodder cutter supporting electric motor or engine drive",
    shortDescription: "Heavyweight commercial chaff cutter engineered for high throughput, compatible with petrol engines or electric motors.",
    fullDescription: "The flagship Begin Pro Chaff Cutter is designed for commercial dairies and custom silage operations where power cuts must not stop fodder preparation. Equipped with dual mounting for either high-output electric motors or fuel engines, an extra-wide folding feeder hopper, and reinforced cutting rotor, it processes up to 1,500 kg per hour.",
    features: [
      "Dual mounting platform for electric motor or petrol/diesel engine",
      "Extra-wide folding feed hopper accommodating large fodder bundles",
      "Industrial gear selector lever with instant reverse action",
      "Ultra-thick hardened carbon steel blades designed for continuous cutting",
      "Reinforced heavy-gauge chassis with wide track wheels for rugged farm ground"
    ],
    specifications: [
      { label: "Model", value: "Begin Pro Chaff Cutter" },
      { label: "Output Capacity", value: "1,000 - 1,500 kg/hour" },
      { label: "Power Source", value: "3 HP Electric Motor or 6.5 HP Petrol / Diesel Engine" },
      { label: "Gearbox", value: "Multi-speed with Instant Reverse" },
      { label: "Blades", value: "3 High-strength reversible alloy blades" },
      { label: "Weight", value: "Approx. 125 kg (heavyweight stability)" }
    ],
    applications: [
      "Commercial dairy herds (50+ animals)",
      "Off-grid farms running on petrol/diesel engine",
      "Commercial silage contracting businesses"
    ],
    image: "/images/products/chaff-cutter-begin-pro.jpg",
    gallery: [
      "/images/products/chaff-cutter-begin-pro.jpg",
      "/images/products/chaff-cutters-series.jpg"
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
  },

  // 9. Dairy Equipment & Farm Machinery (Separate Category)
  {
    id: "prod-de-01",
    slug: "electronic-milk-weighing-scale-platform",
    name: "Electronic Milk Weighing Scale & Platform (100kg / 200kg)",
    category: "dairy-equipment",
    categoryName: "Dairy Equipment",
    badge: "Collection Essential",
    isFeatured: true,
    tagline: "Heavy-duty digital platform scale for milk cans and collection centers with dual display",
    shortDescription: "High-accuracy digital stainless steel platform scale for instant milk can weighing, compatible with AMCU and dairy collection data processors.",
    fullDescription: "Built specifically for humid village milk procurement centers and dairy farm collection docks. Featuring a corrosion-resistant AISI 304 stainless steel platter, water-protected load cell, and dual high-contrast green LED display for both farmer and operator.",
    features: [
      "Heavy-duty AISI 304 stainless steel pan resistant to milk acidity and regular washdowns",
      "High-precision IP65 sealed strain gauge load cell with overload stopper protection",
      "Dual LED display pole (operator facing and farmer customer facing)",
      "Standard RS-232 serial communication port for direct AMCU analyser & computer link",
      "Inbuilt rechargeable SMF battery providing 40+ hours backup during rural power cuts"
    ],
    specifications: [
      { label: "Weighing Capacity", value: "100 kg (model DE-WS100) / 200 kg (model DE-WS200)" },
      { label: "Accuracy / Readability", value: "10 grams (100kg) / 20 grams (200kg)" },
      { label: "Platform Dimensions", value: "400mm x 400mm / 500mm x 500mm heavy gauge pan" },
      { label: "Display Type", value: "Dual bright 0.8-inch Green LED digits" },
      { label: "Battery Backup", value: "6V / 4.5Ah rechargeable battery with auto power saver" },
      { label: "Interface", value: "RS-232C bi-directional serial port" }
    ],
    applications: [
      "Village milk collection centers (VMC)",
      "Dairy farm daily dispatch intake",
      "Wholesale milk distribution centers"
    ],
    image: "/images/products/weighing-scale.jpg",
    gallery: [
      "/images/products/weighing-scale.jpg"
    ]
  },
  {
    id: "prod-de-02",
    slug: "ss-milk-plunger-sampler-dipper-set",
    name: "SS 304 Milk Plunger, Sampler & Dipper Measure Set",
    category: "dairy-equipment",
    categoryName: "Dairy Equipment",
    badge: "Sanitary Grade",
    isFeatured: false,
    tagline: "Hygienic AISI 304 stainless steel plungers, samplers, and calibrated measuring dippers",
    shortDescription: "Heavy-gauge food-grade SS 304 collection accessories for uniform milk stirring before fat testing, hygienic sample extraction, and accurate dispensing.",
    fullDescription: "Standardized dairy collection tools made from certified AISI 304 stainless steel. The perforated plunger allows swift agitation to disperse fat globule layers evenly prior to analyser testing, while calibrated dippers enable hygienic sample draw.",
    features: [
      "Perforated plunger disc designed to mix cream without causing milk churning",
      "Long 750mm rigid stainless handle with ergonomic grip loop",
      "Calibrated dipping measures available in 100ml, 200ml, 500ml, and 1000ml sizes",
      "Seamless sanitary electro-polish finish preventing milk residue or bacterial films",
      "Suitable for boiling water sterilization and alkaline dairy detergents"
    ],
    specifications: [
      { label: "Material", value: "Certified AISI 304 Food-Grade Stainless Steel" },
      { label: "Plunger Disc Diameter", value: "150 mm / 200 mm with precision flow perforations" },
      { label: "Handle Length", value: "750 mm (29.5 inches)" },
      { label: "Available Dipper Sizes", value: "50ml, 100ml, 200ml, 500ml, 1000ml" },
      { label: "Joint Construction", value: "Sanitary TIG welded, smooth crevice-free radius" }
    ],
    applications: [
      "Milk collection centers and societies",
      "Testing laboratories and sample collection docks",
      "On-farm milk storage agitation"
    ],
    image: "/images/products/milk-plunger-set.jpg",
    gallery: [
      "/images/products/milk-plunger-set.jpg"
    ]
  },
  {
    id: "prod-de-03",
    slug: "heavy-duty-interlocking-rubber-cow-mats",
    name: "Heavy-Duty Interlocking Rubber Cow Mats (Cattle Shed Flooring)",
    category: "dairy-equipment",
    categoryName: "Dairy Equipment",
    badge: "Animal Welfare",
    isFeatured: true,
    tagline: "Anti-slip, shock-absorbing barn flooring for udder protection, joint relief, and mastitis prevention",
    shortDescription: "High-density vulcanized rubber mats designed for cattle stalls to reduce hoof injuries, prevent slipping, and keep cows clean and comfortable.",
    fullDescription: "Cattle comfort directly translates into higher milk yields. Our heavy-duty vulcanized rubber cow mats insulate animals against cold concrete floors, cushion knee joints during resting, and feature micro-grooved bottom drainage to channel urine away, drastically lowering mastitis risks.",
    features: [
      "Premium vulcanized natural and synthetic rubber with high tensile strength",
      "Textured anti-skid surface provides sure footing for cows and buffaloes",
      "Bottom channel drainage grooves keep resting surface dry and hygienic",
      "Protects udders and teats from bacterial infection and rough concrete abrasions",
      "Interlocking puzzle borders or straight edges for seamless barn stall fitting"
    ],
    specifications: [
      { label: "Dimensions", value: "6 ft x 4 ft (1800 mm x 1200 mm)" },
      { label: "Thickness", value: "20 mm to 25 mm high-density rubber" },
      { label: "Weight per Mat", value: "Approx. 38 kg - 42 kg (heavyweight, won't curl)" },
      { label: "Top Pattern", value: "Diamond / Bubble anti-slip texture" },
      { label: "Bottom Pattern", value: "Linear drainage flow channels" }
    ],
    applications: [
      "Commercial cow & buffalo sheds",
      "Milking parlour standing platforms",
      "Veterinary recovery stalls"
    ],
    image: "/images/products/cow-mat-cow.jpg",
    gallery: [
      "/images/products/cow-mat-cow.jpg",
      "/images/products/cow-mat-ribbed.jpg"
    ]
  },
  {
    id: "prod-de-04",
    slug: "ribbed-drainage-rubber-cow-mat",
    name: "Ribbed Heavy-Duty Rubber Dairy Mat (Drainage Grooves)",
    category: "dairy-equipment",
    categoryName: "Dairy Equipment",
    badge: "Anti-Skid & Drainage",
    isFeatured: true,
    tagline: "Deep linear drainage underside with high-traction textured top for clean, dry cattle stalls",
    shortDescription: "High-density vulcanized ribbed rubber dairy floor mat with engineered drainage channels to divert fluids away and prevent slipping.",
    fullDescription: "Built for wet and slippery dairy shed environments, this heavy-duty ribbed dairy mat features deep underside longitudinal channels that continuously drain urine and washdown water away. Its high-traction textured top prevents cows and buffaloes from slipping or injuring hips and joints, while insulating them from cold damp floors.",
    features: [
      "Deep longitudinal drainage grooves on bottom surface allow rapid wastewater runoff",
      "High-grip textured top skin prevents slips, hip splits, and lameness",
      "High-density vulcanized compound resists severe claw pressure and heavy bodyweight",
      "Provides thermal insulation against cold concrete, enhancing cattle resting duration",
      "Non-porous, waterproof construction resists ammonia and dairy chemicals",
      "Heavyweight design prevents mat edges from curling or shifting"
    ],
    specifications: [
      { label: "Dimensions", value: "6 ft x 4 ft (1800 mm x 1200 mm)" },
      { label: "Thickness", value: "22 mm to 25 mm heavy-duty thickness" },
      { label: "Bottom Profile", value: "Continuous deep drainage flow ribs" },
      { label: "Top Profile", value: "Micro-textured anti-skid grip pattern" },
      { label: "Weight", value: "Approx. 40 kg - 44 kg per mat" },
      { label: "Material", value: "Vulcanized natural & synthetic rubber blend" }
    ],
    applications: [
      "Tie-stall and loose-housing dairy sheds",
      "Milking parlour waiting bays and wash lanes",
      "Feed alley standing platforms"
    ],
    image: "/images/products/cow-mat-ribbed.jpg",
    gallery: [
      "/images/products/cow-mat-ribbed.jpg",
      "/images/products/cow-mat-cow.jpg"
    ]
  }
];
