/**
 * Official PDF Catalogue Products Data
 * Extracted directly from the original 2026 Dairy Equipment Catalogue PDF.
 * Single source of truth for catalogue specs, prices, and high-resolution visuals.
 */

export const pdfCatalogueInfo = {
  title: "Official Dairy Equipment & Milking Machinery Catalogue",
  edition: "2026 Official Edition",
  totalPages: 23,
  pdfUrl: "/catalogue/product-catalogue-2026.pdf",
  downloadFileName: "Jagdamb-Enterprises-Dairy-Catalogue-2026.pdf",
  fileSize: "17.0 MB",
  coverage: "Complete range of Milking Machines, Vacuum Pumps, Motors, Pulsators, Claws, Liners, Tubes & Spares."
};

export const catalogueCategories = [
  {
    "id": "all",
    "name": "All Catalogue Items",
    "count": 98
  },
  {
    "id": "milk-analysers",
    "name": "Milk Analysers & Testing",
    "description": "Ultrasonic digital milk analysers for FAT, SNF, CLR, added water & temperature"
  },
  {
    "id": "milking-machines",
    "name": "Milking Machines",
    "description": "Portable & fixed single, double & 6-bucket milking machines (Pages 2-8)"
  },
  {
    "id": "milking-buckets-sets",
    "name": "Milking Sets & Buckets",
    "description": "Complete 25L stainless steel bucket sets with pulsator, claw & tubes (Page 9)"
  },
  {
    "id": "pulsators",
    "name": "Pulsators",
    "description": "Pneumatic 60/40 pulsators, steel/fiber pipe & Melasty original (Pages 10-11)"
  },
  {
    "id": "milking-claws",
    "name": "Milking Claws",
    "description": "240cc, 200cc, 160cc AP, Melasty, barrel & all-steel claws (Pages 11-12)"
  },
  {
    "id": "liners-cups",
    "name": "Liners & Teat Cups",
    "description": "27mm, 22mm, 18mm food-grade rubber liners & stainless steel teat cups (Pages 13, 18)"
  },
  {
    "id": "tubes-pipes",
    "name": "Milking & Vacuum Tubes",
    "description": "100ft & 50ft rolls of transparent milking tubes and vacuum hoses (Page 14)"
  },
  {
    "id": "gaskets-brushes",
    "name": "Gaskets & Cleaning Brushes",
    "description": "Silicone lid gaskets, bucket seals & specialized tube/claw cleaning brushes (Page 15)"
  },
  {
    "id": "spares-valves-regulators",
    "name": "Spares, Valves & Regulators",
    "description": "Vacuum regulators, liquid gauges, drain valves, non-return valves & claw spares (Pages 16-18)"
  },
  {
    "id": "vacuum-pumps",
    "name": "Vacuum & Monoblock Pumps",
    "description": "150 LPM, 170 LPM, 200 LPM, 400 LPM & 650 LPM vacuum and monoblock pumps (Pages 19-20)"
  },
  {
    "id": "electric-motors",
    "name": "Electric Motors",
    "description": "0.5 HP & 1 HP copper and aluminium winding motors by KP, Godrej, Precicraft & Marathon (Pages 21-22)"
  }
];

export const catalogueProducts = [
  {
    "id": "cat-mb20-nano",
    "slug": "mb20-nano-single-bucket",
    "name": "MB20 Nano Single Bucket Milking Machine",
    "model": "MB20 Nano",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 2,
    "price": "\u20b913,100",
    "priceNumeric": 13100,
    "variantPrice": "\u20b913,300 (On/Off Switch Model)",
    "image": "/images/catalogue/p2_img2_640x640.png",
    "badge": "Popular Single Bucket",
    "inStock": true,
    "shortDescription": "Compact, reliable single bucket milking machine with 150 LPM monoblock pump and 25L stainless steel bucket.",
    "specifications": [
      {
        "label": "Model",
        "value": "MB20 Nano Single Bucket"
      },
      {
        "label": "Pump Capacity",
        "value": "150 LPM Monoblock Pump"
      },
      {
        "label": "Motor",
        "value": "0.5 HP Copper Winding Motor"
      },
      {
        "label": "Bucket Capacity",
        "value": "25 Ltr AISI Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "25 Ft Heavy Duty Vacuum Pipe"
      },
      {
        "label": "Switch Option",
        "value": "Standard or Integrated On/Off Switch"
      }
    ],
    "features": [
      "150 LPM high-vacuum monoblock pump for consistent suction",
      "0.5 HP 100% copper winding motor for extended operating life",
      "Hygienic 25 Ltr food-grade stainless steel milk can",
      "Compact footprint suitable for small dairy setups and tight shed spaces"
    ]
  },
  {
    "id": "cat-mb20-square",
    "slug": "mb20-square-single-bucket",
    "name": "MB20 Square Single Bucket Milking Machine",
    "model": "MB20 Square",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 2,
    "price": "\u20b913,900",
    "priceNumeric": 13900,
    "variantPrice": "\u20b914,100 (On/Off Switch Model)",
    "image": "/images/catalogue/p2_img5_640x561.png",
    "badge": "200 LPM High Flow",
    "inStock": true,
    "shortDescription": "Upgraded 200 LPM monoblock milking machine with square base frame and high-suction capacity.",
    "specifications": [
      {
        "label": "Model",
        "value": "MB20 Square Single Bucket"
      },
      {
        "label": "Pump Capacity",
        "value": "200 LPM Monoblock Pump"
      },
      {
        "label": "Motor",
        "value": "0.5 HP Copper Winding Motor"
      },
      {
        "label": "Bucket Capacity",
        "value": "25 Ltr AISI Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "25 Ft Vacuum Pipe"
      },
      {
        "label": "Switch Option",
        "value": "Standard or On/Off Switch Model"
      }
    ],
    "features": [
      "200 LPM high-suction monoblock pump for faster milking cycles",
      "Square sturdy steel base with anti-vibration mountings",
      "0.5 HP copper motor with overload thermal safety",
      "Food-grade 25 Ltr stainless steel bucket with silicone lid gasket"
    ]
  },
  {
    "id": "cat-c17m-kp",
    "slug": "c17m-kp-single-bucket",
    "name": "C17M KP Single Bucket Milking Machine",
    "model": "C17M KP",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 3,
    "price": "\u20b914,750",
    "priceNumeric": 14750,
    "variantPrice": "\u20b914,750 (KP Motor) | \u20b915,100 (CG & Godrej) | \u20b915,240 (Marathon) | \u20b916,340 (KP Copper) | \u20b916,600 (CG Copper)",
    "image": "/images/catalogue/c17m-kp-single-bucket.jpg",
    "badge": "Krushi Power C-Series",
    "inStock": true,
    "shortDescription": "170 LPM belt-drive vacuum pump milking machine with 0.5 HP motor options and 50ft vacuum pipe.",
    "specifications": [
      {
        "label": "Model",
        "value": "C17M KP Single Bucket"
      },
      {
        "label": "Vacuum Pump",
        "value": "170 LPM Vacuum Pump"
      },
      {
        "label": "Motor Power",
        "value": "0.5 HP (KP, CG & Godrej, Marathon, Copper)"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Heavy Vacuum Pipe"
      }
    ],
    "features": [
      "170 LPM oil-bath/vane vacuum pump delivering smooth pulsations",
      "Multiple motor choices: Krushi Power, Crompton Greaves & Godrej, Marathon",
      "50 feet vacuum hose providing flexible reach inside cattle stalls",
      "Heavy-duty tubular chassis for stable shed placement"
    ]
  },
  {
    "id": "cat-c17v-kp",
    "slug": "c17v-kp-single-bucket",
    "name": "C17V KP Single Bucket Milking Machine",
    "model": "C17V KP",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 3,
    "price": "\u20b914,750",
    "priceNumeric": 14750,
    "variantPrice": "\u20b914,750 (KP Motor) | \u20b915,100 (CG & Godrej) | \u20b915,240 (Marathon) | \u20b916,340 (KP Copper) | \u20b916,600 (CG Copper)",
    "image": "/images/catalogue/c17v-kp-single-bucket.jpg",
    "badge": "Vertical Stance",
    "inStock": true,
    "shortDescription": "Vertical format C17V model with 170 LPM vacuum pump and 0.5 HP motor options.",
    "specifications": [
      {
        "label": "Model",
        "value": "C17V KP Single Bucket"
      },
      {
        "label": "Vacuum Pump",
        "value": "170 LPM Vacuum Pump"
      },
      {
        "label": "Motor Power",
        "value": "0.5 HP Motor Options"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Vacuum Pipe"
      }
    ],
    "features": [
      "Vertical chassis layout for space optimization in standard cow sheds",
      "170 LPM vacuum pump capacity for smooth pulsation rate",
      "Choice of high-grade copper or aluminium motors",
      "Complete milking cluster with stainless steel teat cups"
    ]
  },
  {
    "id": "cat-c25v-kp",
    "slug": "c25v-kp-single-bucket",
    "name": "C25V KP Single Bucket Milking Machine",
    "model": "C25V KP",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 4,
    "price": "\u20b914,900",
    "priceNumeric": 14900,
    "variantPrice": "\u20b914,900 (KP Motor) | \u20b915,250 (CG & Godrej) | \u20b915,390 (Marathon) | \u20b916,490 (KP Copper) | \u20b916,750 (CG Copper)",
    "image": "/images/catalogue/p4_img3_560x420.png",
    "badge": "High Demand Model",
    "inStock": true,
    "shortDescription": "Reinforced single bucket machine with 170 LPM pump, rugged chassis, and 50ft vacuum pipe.",
    "specifications": [
      {
        "label": "Model",
        "value": "C25V KP Single Bucket"
      },
      {
        "label": "Vacuum Pump",
        "value": "170 LPM Vacuum Pump"
      },
      {
        "label": "Motor Power",
        "value": "0.5 HP Krushi Power / CG / Marathon Motor"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Vacuum Pipe"
      }
    ],
    "features": [
      "Enhanced vacuum chamber for constant 45-50 kPa operational vacuum",
      "Quick-release bucket lid with genuine silicone seal",
      "Heavy frame with low center of gravity",
      "Supplied with food-grade transparent milking tubes"
    ]
  },
  {
    "id": "cat-c25v-fan-kp",
    "slug": "c25v-fan-kp-single-bucket",
    "name": "C25V-FAN KP Single Bucket Milking Machine",
    "model": "C25V-FAN KP",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 4,
    "price": "\u20b915,200",
    "priceNumeric": 15200,
    "variantPrice": "\u20b915,200 (KP Motor) | \u20b915,550 (CG & Godrej) | \u20b915,690 (Marathon) | \u20b916,790 (KP Copper) | \u20b917,050 (CG Copper)",
    "image": "/images/catalogue/p4_img4_800x444.png",
    "badge": "Fan Cooling System",
    "inStock": true,
    "shortDescription": "Equipped with an integrated forced-air cooling fan for heavy continuous milking shifts.",
    "specifications": [
      {
        "label": "Model",
        "value": "C25V-FAN KP Single Bucket"
      },
      {
        "label": "Cooling System",
        "value": "Integrated Forced Air Cooling Fan"
      },
      {
        "label": "Vacuum Pump",
        "value": "170 LPM Vacuum Pump"
      },
      {
        "label": "Motor Power",
        "value": "0.5 HP Motor Options"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Vacuum Pipe"
      }
    ],
    "features": [
      "Dedicated cooling fan prevents pump overheating during consecutive herd milkings",
      "Extended continuous run duration in warm climatic conditions",
      "Smooth 60/40 ratio pneumatic pulsation",
      "25 Ltr mirror-finish stainless steel container"
    ]
  },
  {
    "id": "cat-c40v-kp",
    "slug": "c40v-kp-double-bucket",
    "name": "C40V KP Double Bucket Milking Machine",
    "model": "C40V KP",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 5,
    "price": "\u20b917,850",
    "priceNumeric": 17850,
    "variantPrice": "\u20b917,850 (KP Motor) | \u20b918,350 (CG & Godrej) | \u20b918,830 (Marathon) | \u20b919,450 (KP Copper) | \u20b920,450 (CG Copper)",
    "image": "/images/catalogue/p5_img2_720x720.png",
    "badge": "Double Bucket 400 LPM",
    "inStock": true,
    "shortDescription": "Double bucket commercial milking machine powered by 400 LPM pump and 1 HP heavy motor.",
    "specifications": [
      {
        "label": "Model",
        "value": "C40V KP Double Bucket"
      },
      {
        "label": "Capacity",
        "value": "Double Bucket (Two Cows Simultaneously)"
      },
      {
        "label": "Vacuum Pump",
        "value": "400 LPM High Flow Vacuum Pump"
      },
      {
        "label": "Motor Power",
        "value": "1 HP (Krushi Power / CG / Marathon / Copper)"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Heavy Vacuum Pipe"
      }
    ],
    "features": [
      "Milks two cows simultaneously cutting total milking time in half",
      "400 LPM heavy industrial vacuum pump with oil lubrication",
      "1 HP powerful motor choices for uninterrupted high load duty",
      "Includes dual milking clusters and pulsators"
    ]
  },
  {
    "id": "cat-c40m-t-kp",
    "slug": "c40m-t-kp-double-bucket",
    "name": "C40M-T KP Double Bucket Milking Machine",
    "model": "C40M-T KP",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 5,
    "price": "\u20b917,850",
    "priceNumeric": 17850,
    "variantPrice": "\u20b917,850 (KP Motor) | \u20b918,350 (CG & Godrej) | \u20b918,830 (Marathon) | \u20b919,450 (KP Copper) | \u20b920,450 (CG Copper)",
    "image": "/images/catalogue/p5_img4_480x360.png",
    "badge": "Thokla Heavy Base",
    "inStock": true,
    "shortDescription": "C40M-T heavy trolley double bucket milking machine with 400 LPM pump for medium-to-large farms.",
    "specifications": [
      {
        "label": "Model",
        "value": "C40M-T KP Double Bucket"
      },
      {
        "label": "Vacuum Pump",
        "value": "400 LPM Vacuum Pump"
      },
      {
        "label": "Motor Power",
        "value": "1 HP Motor Options"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Vacuum Pipe"
      }
    ],
    "features": [
      "Thokla reinforced mount for absolute vibration damping",
      "400 LPM rapid evacuation pump handling 20-40 animals easily",
      "Industrial grade pulleys and V-belt tensioning",
      "Complete accessory kit included"
    ]
  },
  {
    "id": "cat-c60v-kp",
    "slug": "c60v-kp-three-bucket",
    "name": "C60V KP Three Bucket Milking Machine",
    "model": "C60V KP",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 6,
    "price": "\u20b918,900",
    "priceNumeric": 18900,
    "variantPrice": "\u20b918,900 (KP Motor) | \u20b919,400 (CG & Godrej) | \u20b919,880 (Marathon) | \u20b920,500 (KP Copper) | \u20b921,500 (CG Copper)",
    "image": "/images/catalogue/p6_img2_480x360.png",
    "badge": "Three Bucket 650 LPM",
    "inStock": true,
    "shortDescription": "High-capacity commercial three bucket milking system driven by 650 LPM vacuum pump and 1 HP motor.",
    "specifications": [
      {
        "label": "Model",
        "value": "C60V KP Three Bucket"
      },
      {
        "label": "Capacity",
        "value": "Three Bucket (Three Cows Simultaneously)"
      },
      {
        "label": "Vacuum Pump",
        "value": "650 LPM Industrial Vacuum Pump"
      },
      {
        "label": "Motor Power",
        "value": "1 HP (KP / CG & Godrej / Marathon / Copper)"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Heavy Vacuum Pipe"
      }
    ],
    "features": [
      "Milks 3 cows at the same time for high-yield commercial dairy farms",
      "Massive 650 LPM vacuum volume guaranteeing steady vacuum across all 3 clusters",
      "Rugged heavy-gauge frame engineered for dairy sheds with 30-80 cattle",
      "Supplied with 3 full milking clusters and 60/40 pulsators"
    ]
  },
  {
    "id": "cat-c60v-fan-kp",
    "slug": "c60v-fan-kp-three-bucket",
    "name": "C60V-FAN KP Three Bucket Milking Machine",
    "model": "C60V-FAN KP",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 6,
    "price": "\u20b919,400",
    "priceNumeric": 19400,
    "variantPrice": "\u20b919,400 (KP Motor) | \u20b919,900 (CG & Godrej) | \u20b920,380 (Marathon) | \u20b921,000 (KP Copper) | \u20b922,000 (CG Copper)",
    "image": "/images/catalogue/p6_img4_800x444.png",
    "badge": "Three Bucket with Fan",
    "inStock": true,
    "shortDescription": "650 LPM three bucket machine with integrated cooling fan for extended uninterrupted farm shifts.",
    "specifications": [
      {
        "label": "Model",
        "value": "C60V-FAN KP Three Bucket"
      },
      {
        "label": "Cooling System",
        "value": "Heavy-Duty Blower Fan"
      },
      {
        "label": "Vacuum Pump",
        "value": "650 LPM Vacuum Pump"
      },
      {
        "label": "Motor Power",
        "value": "1 HP Motor Options"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Heavy Vacuum Pipe"
      }
    ],
    "features": [
      "Heavy-duty forced air fan maintains optimal pump temperature under commercial load",
      "650 LPM vacuum displacement handles 3 milking buckets smoothly",
      "Extended service life of vanes and seals",
      "High reliability in intensive dairy farming conditions"
    ]
  },
  {
    "id": "cat-mb20-nano-trolley",
    "slug": "mb20-nano-trolley-single-bucket",
    "name": "MB20 Nano Trolley Milking Machine",
    "model": "MB20 Nano Trolley",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 7,
    "price": "\u20b913,800",
    "priceNumeric": 13800,
    "image": "/images/catalogue/p7_img2_418x560.png",
    "badge": "Mobile Trolley",
    "inStock": true,
    "shortDescription": "Compact mobile trolley milking machine with 150 LPM monoblock pump and rugged wheels.",
    "specifications": [
      {
        "label": "Model",
        "value": "MB20 Nano Trolley"
      },
      {
        "label": "Chassis",
        "value": "Mobile Wheeled Trolley with Ergonomic Handle"
      },
      {
        "label": "Pump Capacity",
        "value": "150 LPM Monoblock Pump"
      },
      {
        "label": "Motor",
        "value": "0.5 HP Copper Winding Motor"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      }
    ],
    "features": [
      "Effortless single-person rolling mobility along narrow stall alleys",
      "150 LPM monoblock pump with direct drive motor",
      "Zero belt maintenance or tension adjustment required",
      "Complete with stainless steel bucket and teat cluster"
    ]
  },
  {
    "id": "cat-mobile-milking-double-bucket",
    "slug": "mobile-milking-machine-double-bucket",
    "name": "Mobile Milking Machine (Double Bucket)",
    "model": "Mobile Double Bucket",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 7,
    "price": "\u20b921,700",
    "priceNumeric": 21700,
    "image": "/images/catalogue/p7_img3_640x640.png",
    "badge": "Double Bucket Mobile",
    "inStock": true,
    "shortDescription": "Self-contained mobile double bucket machine with 400 LPM monoblock pump and 50ft vacuum pipe.",
    "specifications": [
      {
        "label": "Model",
        "value": "Mobile Milking Machine Double Bucket"
      },
      {
        "label": "Capacity",
        "value": "Double Bucket (Two Milking Cans)"
      },
      {
        "label": "Vacuum Pump",
        "value": "400 LPM 1 HP Monoblock Vacuum Pump"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Vacuum Pipe"
      },
      {
        "label": "Wheels",
        "value": "Large Heavy-Duty Rubber Wheels"
      }
    ],
    "features": [
      "Complete self-contained mobile workstation with bucket holders",
      "400 LPM 1 HP monoblock pump provides plenty of vacuum reserve",
      "Easily navigated over uneven cattle shed floors",
      "Simultaneous dual-milking without stationary pipe installations"
    ]
  },
  {
    "id": "cat-650lpm-six-bucket",
    "slug": "650lpm-six-bucket-milking-system",
    "name": "650 LPM Six Bucket Milking System",
    "model": "650LPM Six Bucket",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 8,
    "price": "\u20b946,000",
    "priceNumeric": 46000,
    "image": "/images/catalogue/p8_img2_480x431.png",
    "badge": "Commercial 6-Bucket",
    "inStock": true,
    "shortDescription": "Commercial-scale milking machine capable of supporting six buckets simultaneously with 2 HP motor.",
    "specifications": [
      {
        "label": "Model",
        "value": "650 LPM Six Bucket Capacity"
      },
      {
        "label": "Capacity",
        "value": "Up to 6 Milking Buckets Simultaneously"
      },
      {
        "label": "Vacuum Pump",
        "value": "650 LPM Heavy Duty Vacuum Pump"
      },
      {
        "label": "Motor",
        "value": "2 HP Copper Winding Motor"
      },
      {
        "label": "Bucket Included",
        "value": "25 Ltr Stainless Steel Bucket"
      }
    ],
    "features": [
      "Engineered for large progressive dairy farms and cooperative sheds",
      "Heavy 650 LPM vacuum capacity supports up to 6 stations smoothly",
      "2 HP high-torque copper motor designed for continuous duty",
      "Precision vacuum control with industrial vacuum gauge and regulator"
    ]
  },
  {
    "id": "cat-c40g-kp-eco",
    "slug": "c40g-kp-eco-double-bucket",
    "name": "C40G KP Eco Double Bucket Milking Machine",
    "model": "C40G KP Eco",
    "category": "milking-machines",
    "categoryName": "Milking Machines",
    "page": 8,
    "price": "\u20b917,000",
    "priceNumeric": 17000,
    "variantPrice": "\u20b917,000 (Eco Motor) | \u20b917,500 (KP) | \u20b918,000 (CG & Godrej) | \u20b918,480 (Marathon) | \u20b919,100 (KP Copper) | \u20b919,600 (CG Copper)",
    "image": "/images/catalogue/p8_img3_720x720.png",
    "badge": "Eco Value Model",
    "inStock": true,
    "shortDescription": "Affordable double bucket milking machine with 400 LPM vacuum pump and 1 HP motor choices.",
    "specifications": [
      {
        "label": "Model",
        "value": "C40G KP Eco Double Bucket"
      },
      {
        "label": "Vacuum Pump",
        "value": "400 LPM Vacuum Pump"
      },
      {
        "label": "Motor",
        "value": "1 HP KP Eco Model Motor (Upgradable)"
      },
      {
        "label": "Bucket",
        "value": "25 Ltr Stainless Steel Bucket"
      },
      {
        "label": "Vacuum Pipe",
        "value": "50 Ft Vacuum Pipe"
      }
    ],
    "features": [
      "Best value double bucket machine for budget-conscious dairy owners",
      "Full 400 LPM suction capacity for fast milking of two cows",
      "Reliable belt drive system with easy maintenance access",
      "Supplied with standard milking clusters and hoses"
    ]
  },
  {
    "id": "cat-supreme-bucket-set-25l",
    "slug": "25l-supreme-milking-bucket-assembly-set",
    "name": "25L Supreme Milking Bucket Assembly Set",
    "model": "Supreme 25L Kit",
    "category": "milking-buckets-sets",
    "categoryName": "Milking Sets & Buckets",
    "page": 9,
    "price": "Enquire for Set Price",
    "priceNumeric": 0,
    "image": "/images/catalogue/25l-milking-bucket-assembly-set.jpg",
    "badge": "Complete Bucket Set",
    "inStock": true,
    "shortDescription": "Complete 6-piece milking bucket assembly set including 25L Supreme bucket, pulsator, 240cc claw, tubes, and brushes.",
    "specifications": [
      {
        "label": "1. Bucket",
        "value": "25 Ltr Supreme Stainless Steel Bucket"
      },
      {
        "label": "2. Pulsator",
        "value": "Pulsator 60/40 Ratio"
      },
      {
        "label": "3. Claw",
        "value": "240cc Milking Claw"
      },
      {
        "label": "4. Brush Set",
        "value": "Complete Cleaning Brush Set"
      },
      {
        "label": "5. Milk Set",
        "value": "Milking Set with 5 Ft Food Grade Tubes"
      },
      {
        "label": "6. Vacuum Pipe",
        "value": "10 Ft Black Vacuum Pipe"
      }
    ],
    "features": [
      "Ready-to-use plug-and-play milking bucket kit",
      "High-grade AISI 304 food contact stainless steel bucket",
      "Includes genuine 60/40 pulsator for gentle teat massage",
      "Full cleaning brushes included to maintain milk hygiene"
    ]
  },
  {
    "id": "cat-new-sai-bucket-set-25l",
    "slug": "25l-new-sai-milking-bucket-assembly-set",
    "name": "25L New Sai Milking Bucket Assembly Set",
    "model": "New Sai 25L Kit",
    "category": "milking-buckets-sets",
    "categoryName": "Milking Sets & Buckets",
    "page": 9,
    "price": "Enquire for Set Price",
    "priceNumeric": 0,
    "image": "/images/catalogue/25l-milking-bucket-assembly-set.jpg",
    "badge": "New Sai Model",
    "inStock": true,
    "shortDescription": "Heavy-duty 25L New Sai stainless steel milking bucket complete set with claw, pulsator, and pipes.",
    "specifications": [
      {
        "label": "Bucket",
        "value": "25 Ltr New Sai Stainless Steel Bucket"
      },
      {
        "label": "Pulsator",
        "value": "Pulsator 60/40"
      },
      {
        "label": "Claw",
        "value": "240cc Claw"
      },
      {
        "label": "Tubes",
        "value": "Milking Set 5ft & 10ft Black Vacuum Pipe"
      },
      {
        "label": "Brushes",
        "value": "Full Cleaning Brush Set"
      }
    ],
    "features": [
      "Seamless spun stainless steel body with sturdy carrying handle",
      "Airtight silicone seal and transparent lid insert",
      "Compatible with all standard vacuum pipelines and trolley machines"
    ]
  },
  {
    "id": "cat-cowtools-pulsator",
    "slug": "cow-tools-pneumatic-pulsator",
    "name": "Cow Tools Pneumatic Pulsator",
    "model": "CowTools 60/40",
    "category": "pulsators",
    "categoryName": "Pulsators",
    "page": 10,
    "price": "\u20b9550",
    "priceNumeric": 550,
    "image": "/images/catalogue/p10_img1_480x434.png",
    "badge": "Green Model",
    "inStock": true,
    "shortDescription": "High-durability pneumatic pulsator with 60/40 pulse ratio designed for continuous dairy shed usage.",
    "specifications": [
      {
        "label": "Brand",
        "value": "Cow Tools"
      },
      {
        "label": "Pulsation Ratio",
        "value": "60:40 Alternating"
      },
      {
        "label": "Body Material",
        "value": "High-Impact Polymer Casing"
      },
      {
        "label": "Connection",
        "value": "Dual Outlet Nozzles"
      }
    ],
    "features": [
      "Accurate pulsation rate promotes complete milk letdown",
      "Moisture and dust-resistant internal diaphragms",
      "Easy field disassembly for cleaning and servicing"
    ]
  },
  {
    "id": "cat-ap-pulsator",
    "slug": "ap-pneumatic-pulsator",
    "name": "AP Pneumatic Pulsator",
    "model": "AP Pulsator",
    "category": "pulsators",
    "categoryName": "Pulsators",
    "page": 10,
    "price": "\u20b9550",
    "priceNumeric": 550,
    "image": "/images/catalogue/p10_img2_480x480.png",
    "badge": "Standard AP",
    "inStock": true,
    "shortDescription": "Industry standard AP pneumatic pulsator providing consistent rhythm and animal comfort.",
    "specifications": [
      {
        "label": "Brand",
        "value": "AP"
      },
      {
        "label": "Pulse Ratio",
        "value": "60:40"
      },
      {
        "label": "Application",
        "value": "Single & Double Bucket Milking Machines"
      }
    ],
    "features": [
      "Reliable stroke mechanism with minimal air consumption",
      "Consistent beats per minute across varied temperature conditions",
      "Fits all standard bucket lids"
    ]
  },
  {
    "id": "cat-sa03-ap-pulsator",
    "slug": "sa03-ap-pneumatic-pulsator",
    "name": "SA03 AP Pneumatic Pulsator",
    "model": "SA03 AP",
    "category": "pulsators",
    "categoryName": "Pulsators",
    "page": 10,
    "price": "\u20b9550",
    "priceNumeric": 550,
    "image": "/images/catalogue/p10_img3_480x360.png",
    "badge": "SA03 Model",
    "inStock": true,
    "shortDescription": "SA03 edition AP pulsator with optimized diaphragm return spring for crisp pulsation action.",
    "specifications": [
      {
        "label": "Model",
        "value": "SA03 AP Pulsator"
      },
      {
        "label": "Price",
        "value": "\u20b9550/-"
      },
      {
        "label": "Operation",
        "value": "Pneumatic Vacuum Driven"
      }
    ],
    "features": [
      "Fast diaphragm response preventing teat congestion",
      "Sturdy polymer cover protecting moving parts"
    ]
  },
  {
    "id": "cat-ap-transparent-pulsator",
    "slug": "ap-transparent-pulsator",
    "name": "AP Transparent Pneumatic Pulsator",
    "model": "AP Transparent",
    "category": "pulsators",
    "categoryName": "Pulsators",
    "page": 10,
    "price": "Out of Stock",
    "priceNumeric": 0,
    "image": "/images/catalogue/p10_img4_640x640.png",
    "badge": "Out of Stock",
    "inStock": false,
    "shortDescription": "See-through body allows visual monitoring of internal slide valve and diaphragm movement.",
    "specifications": [
      {
        "label": "Model",
        "value": "AP Transparent Pulsator"
      },
      {
        "label": "Body",
        "value": "Clear Transparent Polycarbonate"
      },
      {
        "label": "Availability",
        "value": "Currently Out of Stock"
      }
    ],
    "features": [
      "Clear casing allows quick visual inspection of membrane health and cleanliness"
    ]
  },
  {
    "id": "cat-pulsator-pat-l80-steel",
    "slug": "pulsator-pat-l80-steel-pipe",
    "name": "Pulsator PAT L80 (Steel Pipe)",
    "model": "PAT L80 Steel",
    "category": "pulsators",
    "categoryName": "Pulsators",
    "page": 10,
    "price": "\u20b9610",
    "priceNumeric": 610,
    "image": "/images/catalogue/p10_img6_480x360.png",
    "badge": "Steel Pipe",
    "inStock": true,
    "shortDescription": "Heavy-duty PAT L80 pulsator equipped with rigid stainless steel pipe fitting.",
    "specifications": [
      {
        "label": "Model",
        "value": "PAT L80 Steel Pipe"
      },
      {
        "label": "Pipe Type",
        "value": "Stainless Steel Connecting Pipe"
      },
      {
        "label": "Price",
        "value": "\u20b9610/-"
      }
    ],
    "features": [
      "Rigid steel pipe connection for firm mounting on bucket lids",
      "Balanced alternating pulsation for rapid milking"
    ]
  },
  {
    "id": "cat-melasty-pulsator-original",
    "slug": "melasty-pulsator-original",
    "name": "Melasty Pulsator (Original)",
    "model": "Melasty Original",
    "category": "pulsators",
    "categoryName": "Pulsators",
    "page": 10,
    "price": "\u20b91,750",
    "priceNumeric": 1750,
    "image": "/images/catalogue/p10_img5_800x444.png",
    "badge": "Original Melasty",
    "inStock": true,
    "shortDescription": "Original imported Melasty pneumatic pulsator known worldwide for supreme precision and longevity.",
    "specifications": [
      {
        "label": "Brand",
        "value": "Melasty Original"
      },
      {
        "label": "Type",
        "value": "Premium Precision Pneumatic Pulsator"
      },
      {
        "label": "Ratio",
        "value": "60:40 Calibrated"
      },
      {
        "label": "Price",
        "value": "\u20b91,750/-"
      }
    ],
    "features": [
      "Precision-engineered internal slide valve for zero vacuum flutter",
      "Superior animal comfort ensuring relaxed, high-yield milking",
      "Exceptionally long service life of internal diaphragms"
    ]
  },
  {
    "id": "cat-pulsator-pat-l80-fiber",
    "slug": "pulsator-pat-l80-fiber-pipe",
    "name": "Pulsator PAT L80 (Fiber Pipe)",
    "model": "PAT L80 Fiber",
    "category": "pulsators",
    "categoryName": "Pulsators",
    "page": 11,
    "price": "\u20b91,650",
    "priceNumeric": 1650,
    "image": "/images/catalogue/p11_img1_480x480.jpeg",
    "badge": "Fiber Pipe",
    "inStock": true,
    "shortDescription": "High-end PAT L80 model with reinforced fiber pipe connection for vibration damping.",
    "specifications": [
      {
        "label": "Model",
        "value": "PAT L80 Fiber Pipe"
      },
      {
        "label": "Mounting",
        "value": "Reinforced Fiber Pipe"
      },
      {
        "label": "Price",
        "value": "\u20b91,650/-"
      }
    ],
    "features": [
      "Resilient fiber pipe assembly dampening vibrations",
      "Smooth continuous 60/40 stroke"
    ]
  },
  {
    "id": "cat-claw-240cc-ap-green",
    "slug": "240cc-ap-claw-green",
    "name": "240cc AP Claw (Green Base)",
    "model": "240cc AP Green",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 11,
    "price": "\u20b9480",
    "priceNumeric": 480,
    "image": "/images/catalogue/p11_img3_800x800.png",
    "badge": "240cc Capacity",
    "inStock": true,
    "shortDescription": "240cc high-capacity milk claw with green bottom base and transparent polycarbonate top bowl.",
    "specifications": [
      {
        "label": "Bowl Capacity",
        "value": "240cc Large Volume"
      },
      {
        "label": "Base Color",
        "value": "Green"
      },
      {
        "label": "Material",
        "value": "Food Grade Stainless Steel & Impact Polycarbonate"
      },
      {
        "label": "Inlets",
        "value": "4 Stainless Steel Nipple Inlets"
      }
    ],
    "features": [
      "Large 240cc bowl prevents milk flooding during peak letdown",
      "Transparent top provides instant milk flow visibility",
      "Stainless steel bottom base resists corrosion and impact"
    ]
  },
  {
    "id": "cat-claw-240cc-melasty-red",
    "slug": "240cc-melasty-claw-red",
    "name": "240cc Melasty Claw (Red Base)",
    "model": "240cc Melasty Red",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 11,
    "price": "\u20b9480",
    "priceNumeric": 480,
    "image": "/images/catalogue/p11_img5_420x560.png",
    "badge": "Red Melasty Style",
    "inStock": true,
    "shortDescription": "240cc Melasty style milk claw with red base and heavy stainless steel bottom plate.",
    "specifications": [
      {
        "label": "Capacity",
        "value": "240cc"
      },
      {
        "label": "Base Color",
        "value": "Red"
      },
      {
        "label": "Price",
        "value": "\u20b9480/-"
      }
    ],
    "features": [
      "Quick shut-off valve for rapid cluster attachment and removal",
      "Aerodynamic internal shape for gentle milk transport"
    ]
  },
  {
    "id": "cat-claw-240cc-ap-red",
    "slug": "240cc-ap-claw-red",
    "name": "240cc AP Claw (Red Base)",
    "model": "240cc AP Red",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 11,
    "price": "\u20b9480",
    "priceNumeric": 480,
    "image": "/images/catalogue/p11_img3_800x800.png",
    "badge": "240cc AP Red",
    "inStock": true,
    "shortDescription": "240cc AP claw with red base plate, rapid flow discharge, and transparent bowl.",
    "specifications": [
      {
        "label": "Capacity",
        "value": "240cc"
      },
      {
        "label": "Color",
        "value": "Red Base"
      },
      {
        "label": "Price",
        "value": "\u20b9480/-"
      }
    ],
    "features": [
      "Rapid evacuation preventing back-flow to teats",
      "High chemical resistance against daily dairy detergents"
    ]
  },
  {
    "id": "cat-claw-240cc-steel",
    "slug": "240cc-all-steel-claw",
    "name": "240cc Stainless Steel Claw",
    "model": "240cc Full Steel",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 11,
    "price": "\u20b9650",
    "priceNumeric": 650,
    "image": "/images/catalogue/p11_img8_400x400.png",
    "badge": "All Stainless Steel",
    "inStock": true,
    "shortDescription": "Heavy-duty all stainless steel 240cc claw built for rugged commercial sheds and buffalo milking.",
    "specifications": [
      {
        "label": "Material",
        "value": "100% AISI 304 Stainless Steel"
      },
      {
        "label": "Capacity",
        "value": "240cc"
      },
      {
        "label": "Price",
        "value": "\u20b9650/-"
      }
    ],
    "features": [
      "Virtually indestructible all-metal construction",
      "Extra weight provides optimal teat cup tension for clean milk-out",
      "Ideal for high-strength buffalo and crossbreed cow milking"
    ]
  },
  {
    "id": "cat-claw-240cc-ap-brown",
    "slug": "240cc-ap-claw-brown",
    "name": "240cc AP Claw (Brown Base)",
    "model": "240cc AP Brown",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 11,
    "price": "\u20b9480",
    "priceNumeric": 480,
    "image": "/images/catalogue/p11_img3_800x800.png",
    "badge": "240cc Brown",
    "inStock": true,
    "shortDescription": "Standard brown base 240cc AP claw with clear bowl and precision shut-off valve.",
    "specifications": [
      {
        "label": "Capacity",
        "value": "240cc"
      },
      {
        "label": "Price",
        "value": "\u20b9480/-"
      }
    ],
    "features": [
      "Balanced weight distribution for even teat stimulation"
    ]
  },
  {
    "id": "cat-claw-240cc-a02",
    "slug": "240cc-claw-a02",
    "name": "240cc Claw A02",
    "model": "Claw A02",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 12,
    "price": "\u20b9390",
    "priceNumeric": 390,
    "image": "/images/catalogue/p12_img1_480x360.png",
    "badge": "Economical 240cc",
    "inStock": true,
    "shortDescription": "Cost-effective 240cc claw model A02 offering dependable milking performance.",
    "specifications": [
      {
        "label": "Model",
        "value": "240cc Claw A02"
      },
      {
        "label": "Price",
        "value": "\u20b9390/-"
      }
    ],
    "features": [
      "Affordable replacement claw with 240cc capacity",
      "Clear top for milk flow inspection"
    ]
  },
  {
    "id": "cat-claw-160cc",
    "slug": "160cc-milking-claw",
    "name": "160cc Milking Claw",
    "model": "160cc Claw",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 12,
    "price": "\u20b9450",
    "priceNumeric": 450,
    "image": "/images/catalogue/p12_img2_512x640.png",
    "badge": "160cc Compact",
    "inStock": true,
    "shortDescription": "Compact 160cc claw suitable for indigenous cows and lower-yield animals.",
    "specifications": [
      {
        "label": "Capacity",
        "value": "160cc"
      },
      {
        "label": "Price",
        "value": "\u20b9450/-"
      }
    ],
    "features": [
      "Lightweight compact body ideal for Desi cow breeds",
      "Smooth internal contours"
    ]
  },
  {
    "id": "cat-claw-200cc",
    "slug": "200cc-milking-claw",
    "name": "200cc Milking Claw",
    "model": "200cc Claw",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 12,
    "price": "\u20b9450",
    "priceNumeric": 450,
    "image": "/images/catalogue/p12_img3_480x330.png",
    "badge": "200cc Medium",
    "inStock": true,
    "shortDescription": "Balanced 200cc claw providing medium reservoir capacity.",
    "specifications": [
      {
        "label": "Capacity",
        "value": "200cc"
      },
      {
        "label": "Price",
        "value": "\u20b9450/-"
      }
    ],
    "features": [
      "Optimum balance between weight and milk volume"
    ]
  },
  {
    "id": "cat-claw-240cc-complete-top",
    "slug": "240cc-ap-claw-complete-top",
    "name": "240cc AP Claw Complete Top",
    "model": "240cc Top Assembly",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 12,
    "price": "\u20b9270",
    "priceNumeric": 270,
    "image": "/images/catalogue/p12_img4_320x480.png",
    "badge": "Top Replacement",
    "inStock": true,
    "shortDescription": "Full transparent upper dome assembly for 240cc AP milking claws.",
    "specifications": [
      {
        "label": "Compatibility",
        "value": "All 240cc AP Claw Bases"
      },
      {
        "label": "Price",
        "value": "\u20b9270/-"
      }
    ],
    "features": [
      "Quick snap-in replacement when old claw tops get scratched or cracked"
    ]
  },
  {
    "id": "cat-claw-barrel",
    "slug": "barrel-milking-claw",
    "name": "Barrel Milking Claw",
    "model": "Barrel Claw",
    "category": "milking-claws",
    "categoryName": "Milking Claws",
    "page": 12,
    "price": "\u20b9750",
    "priceNumeric": 750,
    "image": "/images/catalogue/p12_img6_800x300.png",
    "badge": "Heavy Barrel Design",
    "inStock": true,
    "shortDescription": "High-stability cylindrical barrel claw for high-yield dairy herds.",
    "specifications": [
      {
        "label": "Design",
        "value": "Barrel Cylindrical Claw"
      },
      {
        "label": "Price",
        "value": "\u20b9750/-"
      }
    ],
    "features": [
      "Stable horizontal chamber minimizing froth formation"
    ]
  },
  {
    "id": "cat-top-160cc",
    "slug": "160cc-complete-top",
    "name": "160cc Complete Top",
    "model": "160cc Top",
    "category": "liners-cups",
    "categoryName": "Liners & Cups",
    "page": 13,
    "price": "\u20b9250",
    "priceNumeric": 250,
    "image": "/images/catalogue/p13_img1_384x480.png",
    "badge": "160cc Spare",
    "inStock": true,
    "shortDescription": "Transparent polycarbonate upper bowl replacement for 160cc milking claws.",
    "specifications": [
      {
        "label": "Model",
        "value": "160cc Top"
      },
      {
        "label": "Price",
        "value": "\u20b9250/-"
      }
    ],
    "features": [
      "Clear dome for checking milk stream"
    ]
  },
  {
    "id": "cat-top-200cc",
    "slug": "200cc-complete-top",
    "name": "200cc Complete Top",
    "model": "200cc Top",
    "category": "liners-cups",
    "categoryName": "Liners & Cups",
    "page": 13,
    "price": "\u20b9250",
    "priceNumeric": 250,
    "image": "/images/catalogue/p13_img2_560x434.png",
    "badge": "200cc Spare",
    "inStock": true,
    "shortDescription": "Transparent upper bowl replacement for 200cc milking claws.",
    "specifications": [
      {
        "label": "Model",
        "value": "200cc Top"
      },
      {
        "label": "Price",
        "value": "\u20b9250/-"
      }
    ],
    "features": [
      "Accurate fit with original seals"
    ]
  },
  {
    "id": "cat-liner-27mm-cowtools",
    "slug": "27mm-cow-tools-milking-liner",
    "name": "27mm Cow Tools Milking Liner",
    "model": "27mm CowTools",
    "category": "liners-cups",
    "categoryName": "Liners & Cups",
    "page": 13,
    "price": "\u20b9295",
    "priceNumeric": 295,
    "image": "/images/catalogue/p13_img3_480x393.png",
    "badge": "27mm Standard",
    "inStock": true,
    "shortDescription": "Food-grade rubber milking liner with 27mm mouthpiece designed for comfortable teat fit.",
    "specifications": [
      {
        "label": "Size",
        "value": "27mm Mouthpiece Diameter"
      },
      {
        "label": "Brand",
        "value": "Cow Tools"
      },
      {
        "label": "Material",
        "value": "Food Grade Dairy Rubber"
      },
      {
        "label": "Price",
        "value": "\u20b9295/-"
      }
    ],
    "features": [
      "Gentle massage action without teat congestion",
      "High fatigue resistance over thousands of milking cycles"
    ]
  },
  {
    "id": "cat-liner-27mm-melasty",
    "slug": "27mm-melasty-milking-liner",
    "name": "27mm Melasty Milking Liner",
    "model": "27mm Melasty",
    "category": "liners-cups",
    "categoryName": "Liners & Cups",
    "page": 13,
    "price": "\u20b9390",
    "priceNumeric": 390,
    "image": "/images/catalogue/p13_img4_480x480.png",
    "badge": "Melasty Premium",
    "inStock": true,
    "shortDescription": "Original Melasty rubber milking liner with 27mm opening for maximum teat health and milk flow.",
    "specifications": [
      {
        "label": "Brand",
        "value": "Melasty"
      },
      {
        "label": "Diameter",
        "value": "27mm"
      },
      {
        "label": "Price",
        "value": "\u20b9390/-"
      }
    ],
    "features": [
      "European quality rubber compound resistant to butterfat swelling",
      "Optimum collapse characteristics under vacuum"
    ]
  },
  {
    "id": "cat-liner-22mm-melasty",
    "slug": "22mm-melasty-milking-liner",
    "name": "22mm Melasty Milking Liner",
    "model": "22mm Melasty",
    "category": "liners-cups",
    "categoryName": "Liners & Cups",
    "page": 13,
    "price": "\u20b9580",
    "priceNumeric": 580,
    "image": "/images/catalogue/p13_img5_480x480.png",
    "badge": "22mm Precision",
    "inStock": true,
    "shortDescription": "22mm mouthpiece liner ideal for heifers and smaller-teat cattle breeds.",
    "specifications": [
      {
        "label": "Diameter",
        "value": "22mm"
      },
      {
        "label": "Price",
        "value": "\u20b9580/-"
      }
    ],
    "features": [
      "Snug fit preventing liner slip on young cows"
    ]
  },
  {
    "id": "cat-liner-18mm-melasty",
    "slug": "18mm-melasty-milking-liner",
    "name": "18mm Melasty Milking Liner",
    "model": "18mm Melasty",
    "category": "liners-cups",
    "categoryName": "Liners & Cups",
    "page": 13,
    "price": "\u20b9480",
    "priceNumeric": 480,
    "image": "/images/catalogue/p13_img6_400x400.png",
    "badge": "18mm Small Teat",
    "inStock": true,
    "shortDescription": "18mm specialized liner for goats, sheep, and small-teat indigenous dairy animals.",
    "specifications": [
      {
        "label": "Diameter",
        "value": "18mm"
      },
      {
        "label": "Application",
        "value": "Goat, Sheep & Heifer Milking"
      },
      {
        "label": "Price",
        "value": "\u20b9480/-"
      }
    ],
    "features": [
      "Gentle low-pressure seal on delicate teats"
    ]
  },
  {
    "id": "cat-teat-cup-shell-ss",
    "slug": "teat-cup-shell-stainless-steel",
    "name": "Teat Cup Shell (Stainless Steel)",
    "model": "SS Teat Cup Shell",
    "category": "liners-cups",
    "categoryName": "Liners & Cups",
    "page": 18,
    "price": "\u20b9480",
    "priceNumeric": 480,
    "image": "/images/catalogue/p18_img4_400x400.png",
    "badge": "AISI 304 Steel",
    "inStock": true,
    "shortDescription": "Mirror polished AISI 304 stainless steel teat cup shell with weighted balance.",
    "specifications": [
      {
        "label": "Material",
        "value": "Heavy Gauge Stainless Steel"
      },
      {
        "label": "Price",
        "value": "\u20b9480/-"
      }
    ],
    "features": [
      "Weighted correctly to maintain proper milking claw alignment",
      "Corrosion proof and easy to clean"
    ]
  },
  {
    "id": "cat-milking-tube-100ft",
    "slug": "milking-tube-bundle-100ft",
    "name": "Food Grade Milking Tube Bundle (100 Ft)",
    "model": "Milking Tube 100ft",
    "category": "tubes-pipes",
    "categoryName": "Milking & Vacuum Tubes",
    "page": 14,
    "price": "\u20b92,150",
    "priceNumeric": 2150,
    "image": "/images/catalogue/p14_img1_360x640.png",
    "badge": "100 Ft Bundle",
    "inStock": true,
    "shortDescription": "100ft roll of food-grade transparent PVC milk tubing with blue stripe for dairy milk transport.",
    "specifications": [
      {
        "label": "Length",
        "value": "100 Feet (Roll)"
      },
      {
        "label": "Type",
        "value": "Food Grade Transparent Milk Hose"
      },
      {
        "label": "Price",
        "value": "\u20b92,150/-"
      }
    ],
    "features": [
      "Certified non-toxic food-grade polymer safe for raw milk",
      "Transparent wall allows instant visual check of milk flow and cleanliness",
      "Flexible and resistant to kinking in cold mornings"
    ]
  },
  {
    "id": "cat-pulsation-tube-100ft",
    "slug": "pulsation-tube-bundle-100ft",
    "name": "Pulsation Tube Bundle (100 Ft)",
    "model": "Pulsation Tube 100ft",
    "category": "tubes-pipes",
    "categoryName": "Milking & Vacuum Tubes",
    "page": 14,
    "price": "\u20b9950",
    "priceNumeric": 950,
    "image": "/images/catalogue/p14_img2_360x480.png",
    "badge": "100 Ft Twin",
    "inStock": true,
    "shortDescription": "100ft bundle of twin air pulsation hose for linking pulsator to milking claw nipples.",
    "specifications": [
      {
        "label": "Length",
        "value": "100 Feet"
      },
      {
        "label": "Type",
        "value": "Twin Air Pulsation Hose"
      },
      {
        "label": "Price",
        "value": "\u20b9950/-"
      }
    ],
    "features": [
      "Maintains snappy vacuum pulse without wall collapse",
      "Twin Siamese tube design prevents tangling"
    ]
  },
  {
    "id": "cat-black-vacuum-tube-100ft",
    "slug": "black-vacuum-tube-bundle-100ft",
    "name": "Black Vacuum Tube Bundle (100 Ft)",
    "model": "Vacuum Tube 100ft",
    "category": "tubes-pipes",
    "categoryName": "Milking & Vacuum Tubes",
    "page": 14,
    "price": "\u20b91,500",
    "priceNumeric": 1500,
    "image": "/images/catalogue/p14_img3_393x400.png",
    "badge": "100 Ft Heavy Vacuum",
    "inStock": true,
    "shortDescription": "100ft heavy-duty black rubber vacuum pipe designed for vacuum supply lines from pump to bucket.",
    "specifications": [
      {
        "label": "Length",
        "value": "100 Feet"
      },
      {
        "label": "Color",
        "value": "Black Heavy Rubber"
      },
      {
        "label": "Price",
        "value": "\u20b91,500/-"
      }
    ],
    "features": [
      "Extra thick wall resists high vacuum suction without collapsing",
      "Tough outer layer withstands trampling and dragging in sheds"
    ]
  },
  {
    "id": "cat-black-vacuum-tube-50ft",
    "slug": "black-vacuum-tube-bundle-50ft",
    "name": "Black Vacuum Tube Bundle (50 Ft)",
    "model": "Vacuum Tube 50ft",
    "category": "tubes-pipes",
    "categoryName": "Milking & Vacuum Tubes",
    "page": 14,
    "price": "\u20b9750",
    "priceNumeric": 750,
    "image": "/images/catalogue/p14_img4_400x400.png",
    "badge": "50 Ft Standard",
    "inStock": true,
    "shortDescription": "50ft bundle of heavy black vacuum hose ideal for single trolley machines.",
    "specifications": [
      {
        "label": "Length",
        "value": "50 Feet"
      },
      {
        "label": "Price",
        "value": "\u20b9750/-"
      }
    ],
    "features": [
      "Ready length for standard milking machine stalls"
    ]
  },
  {
    "id": "cat-blue-vacuum-tube-50ft",
    "slug": "blue-vacuum-tube-bundle-50ft",
    "name": "Blue Vacuum Tube Bundle (50 Ft)",
    "model": "Blue Vacuum Tube 50ft",
    "category": "tubes-pipes",
    "categoryName": "Milking & Vacuum Tubes",
    "page": 14,
    "price": "\u20b9850",
    "priceNumeric": 850,
    "image": "/images/catalogue/p14_img5_397x400.png",
    "badge": "Premium Blue",
    "inStock": true,
    "shortDescription": "50ft roll of premium blue dairy vacuum pipe with high flexibility and UV resistance.",
    "specifications": [
      {
        "label": "Length",
        "value": "50 Feet"
      },
      {
        "label": "Color",
        "value": "High Visibility Blue"
      },
      {
        "label": "Price",
        "value": "\u20b9850/-"
      }
    ],
    "features": [
      "High visibility color prevents tripping hazards",
      "Smooth internal bore ensures minimal pressure loss"
    ]
  },
  {
    "id": "cat-gray-vacuum-tube-50ft",
    "slug": "gray-vacuum-tube-bundle-50ft",
    "name": "Gray Vacuum Tube Bundle (50 Ft)",
    "model": "Gray Vacuum Tube 50ft",
    "category": "tubes-pipes",
    "categoryName": "Milking & Vacuum Tubes",
    "page": 14,
    "price": "\u20b9850",
    "priceNumeric": 850,
    "image": "/images/catalogue/p14_img6_360x480.png",
    "badge": "Heavy Duty Gray",
    "inStock": true,
    "shortDescription": "50ft roll of gray heavy-duty vacuum tubing with thick reinforced walls.",
    "specifications": [
      {
        "label": "Length",
        "value": "50 Feet"
      },
      {
        "label": "Price",
        "value": "\u20b9850/-"
      }
    ],
    "features": [
      "Oil and detergent resistant exterior"
    ]
  },
  {
    "id": "cat-curv-silicon-gasket-25l",
    "slug": "25ltr-curv-silicon-gas-kit",
    "name": "25L Curved Silicone Lid Gasket",
    "model": "25L Curv Silicone",
    "category": "gaskets-brushes",
    "categoryName": "Gaskets & Cleaning Brushes",
    "page": 15,
    "price": "\u20b9120",
    "priceNumeric": 120,
    "image": "/images/catalogue/p15_img1_359x480.png",
    "badge": "Food Grade Silicone",
    "inStock": true,
    "shortDescription": "Curved profile pure silicone sealing gasket for 25L stainless steel milking bucket lids.",
    "specifications": [
      {
        "label": "Capacity",
        "value": "25 Liter Bucket Lids"
      },
      {
        "label": "Material",
        "value": "Transparent Food-Grade Silicone"
      },
      {
        "label": "Profile",
        "value": "Curved Lip Airtight Seal"
      },
      {
        "label": "Price",
        "value": "\u20b9120/-"
      }
    ],
    "features": [
      "100% airtight vacuum retention on bucket rim",
      "High temperature resistance for hot water CIP sanitization",
      "Non-hardening silicone remains elastic for years"
    ]
  },
  {
    "id": "cat-silicon-gasket-25l",
    "slug": "25ltr-silicon-gas-kit",
    "name": "25L Flat Silicone Lid Gasket",
    "model": "25L Silicon Flat",
    "category": "gaskets-brushes",
    "categoryName": "Gaskets & Cleaning Brushes",
    "page": 15,
    "price": "\u20b9120",
    "priceNumeric": 120,
    "image": "/images/catalogue/p15_img2_297x410.png",
    "badge": "Silicone Seal",
    "inStock": true,
    "shortDescription": "Standard flat profile food grade silicone lid gasket for 25L milking cans.",
    "specifications": [
      {
        "label": "Size",
        "value": "25 Liter"
      },
      {
        "label": "Price",
        "value": "\u20b9120/-"
      }
    ],
    "features": [
      "Odorless and non-reactive with raw milk"
    ]
  },
  {
    "id": "cat-rubber-gasket-25l",
    "slug": "25ltr-rubber-gas-kit",
    "name": "25L Rubber Bucket Lid Gasket",
    "model": "25L Black Rubber",
    "category": "gaskets-brushes",
    "categoryName": "Gaskets & Cleaning Brushes",
    "page": 15,
    "price": "\u20b980",
    "priceNumeric": 80,
    "image": "/images/catalogue/p15_img3_400x381.png",
    "badge": "Standard Rubber",
    "inStock": true,
    "shortDescription": "Economical black rubber rim gasket for 25L milking buckets.",
    "specifications": [
      {
        "label": "Size",
        "value": "25 Liter"
      },
      {
        "label": "Price",
        "value": "\u20b980/-"
      }
    ],
    "features": [
      "Tight sealing against bucket rim"
    ]
  },
  {
    "id": "cat-brush-set-a02",
    "slug": "milking-machine-brush-set-a02",
    "name": "Milking Machine Brush Set A02",
    "model": "Brush Set A02",
    "category": "gaskets-brushes",
    "categoryName": "Gaskets & Cleaning Brushes",
    "page": 15,
    "price": "\u20b9120",
    "priceNumeric": 120,
    "image": "/images/catalogue/p15_img4_268x480.png",
    "badge": "Daily Hygiene",
    "inStock": true,
    "shortDescription": "Specialized dairy cleaning brush set for scrubbing teat liners, milk claws, and tubing.",
    "specifications": [
      {
        "label": "Contents",
        "value": "Liner Brush, Long Tube Brush, Claw Brush"
      },
      {
        "label": "Price",
        "value": "\u20b9120/-"
      }
    ],
    "features": [
      "Dense nylon bristles remove milk fat deposits without scratching surfaces",
      "Stainless steel wire handles resist bending"
    ]
  },
  {
    "id": "cat-brush-set-a01-premium",
    "slug": "milking-machine-brush-set-a01-premium",
    "name": "Milking Machine Brush Set A01 Premium",
    "model": "Brush Set A01 Premium",
    "category": "gaskets-brushes",
    "categoryName": "Gaskets & Cleaning Brushes",
    "page": 15,
    "price": "\u20b9210",
    "priceNumeric": 210,
    "image": "/images/catalogue/p15_img5_359x480.png",
    "badge": "Premium Quality",
    "inStock": true,
    "shortDescription": "Heavy-duty professional brush set with extended reach and extra-dense bristle heads.",
    "specifications": [
      {
        "label": "Grade",
        "value": "A01 Premium"
      },
      {
        "label": "Price",
        "value": "\u20b9210/-"
      }
    ],
    "features": [
      "Extended length cleans full 5ft - 10ft tubing easily"
    ]
  },
  {
    "id": "cat-brush-set-plastic",
    "slug": "milking-machine-brush-set-plastic",
    "name": "Milking Machine Brush Set (Plastic Handle)",
    "model": "Brush Set Plastic",
    "category": "gaskets-brushes",
    "categoryName": "Gaskets & Cleaning Brushes",
    "page": 15,
    "price": "\u20b9135",
    "priceNumeric": 135,
    "image": "/images/catalogue/p15_img6_313x560.png",
    "badge": "Plastic Handle",
    "inStock": true,
    "shortDescription": "Ergonomic plastic handle cleaning brush set for milking equipment sanitation.",
    "specifications": [
      {
        "label": "Handle",
        "value": "Molded Plastic"
      },
      {
        "label": "Price",
        "value": "\u20b9135/-"
      }
    ],
    "features": [
      "Comfortable non-slip grip when hands are wet"
    ]
  },
  {
    "id": "cat-claw-nut-240cc",
    "slug": "240cc-claw-nut",
    "name": "240cc Claw Retaining Nut",
    "model": "Claw Nut",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b940",
    "priceNumeric": 40,
    "image": "/images/catalogue/p16_img1_600x600.png",
    "badge": "Hardware",
    "inStock": true,
    "shortDescription": "Stainless steel threaded center nut to secure 240cc claw top dome to base.",
    "specifications": [
      {
        "label": "Application",
        "value": "240cc Milk Claws"
      },
      {
        "label": "Price",
        "value": "\u20b940/-"
      }
    ],
    "features": [
      "Corrosion-proof threading"
    ]
  },
  {
    "id": "cat-claw-o-ring",
    "slug": "milking-claw-o-ring",
    "name": "Milking Claw O-Ring",
    "model": "Claw O-Ring",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b98 / nos",
    "priceNumeric": 8,
    "image": "/images/catalogue/p16_img2_250x250.png",
    "badge": "Seals",
    "inStock": true,
    "shortDescription": "Precision nitrile rubber O-ring seal for milk claw valve stems.",
    "specifications": [
      {
        "label": "Type",
        "value": "O-Ring Seal"
      },
      {
        "label": "Price",
        "value": "\u20b98 / piece"
      }
    ],
    "features": [
      "Prevents vacuum leaks at valve spindle"
    ]
  },
  {
    "id": "cat-claw-gasket-240cc",
    "slug": "240cc-claw-gasket",
    "name": "240cc Claw Sealing Gasket",
    "model": "Claw Gasket 240cc",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b970",
    "priceNumeric": 70,
    "image": "/images/catalogue/p16_img3_320x320.png",
    "badge": "Gasket",
    "inStock": true,
    "shortDescription": "Perimeter sealing rubber gasket fitting between the 240cc claw bowl and bottom base.",
    "specifications": [
      {
        "label": "Size",
        "value": "240cc Claw"
      },
      {
        "label": "Price",
        "value": "\u20b970/-"
      }
    ],
    "features": [
      "Guarantees 100% vacuum seal on claw chamber"
    ]
  },
  {
    "id": "cat-claw-holder-240cc",
    "slug": "240cc-claw-holder-bracket",
    "name": "240cc Claw Hanging Holder",
    "model": "Claw Holder",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b930",
    "priceNumeric": 30,
    "image": "/images/catalogue/p16_img4_300x400.png",
    "badge": "Bracket",
    "inStock": true,
    "shortDescription": "Sturdy claw hanger bracket used to suspend the cluster from trolley or bucket rim.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b930/-"
      }
    ],
    "features": [
      "Convenient cluster storage between milkings"
    ]
  },
  {
    "id": "cat-short-tube",
    "slug": "milking-short-pulse-tube",
    "name": "Short Milk / Pulse Tube",
    "model": "Short Tube",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b910",
    "priceNumeric": 10,
    "image": "/images/catalogue/p16_img5_320x320.png",
    "badge": "Tube Spares",
    "inStock": true,
    "shortDescription": "Short flexible connecting tube bridging teat cup shell and claw air divider.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b910/-"
      }
    ],
    "features": [
      "High elasticity rubber compound"
    ]
  },
  {
    "id": "cat-tube-joinder",
    "slug": "dairy-tube-joinder-connector",
    "name": "Dairy Tube Joinder Connector",
    "model": "Tube Joinder",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b910",
    "priceNumeric": 10,
    "image": "/images/catalogue/p16_img6_308x320.png",
    "badge": "Coupler",
    "inStock": true,
    "shortDescription": "Molded polymer pipe joinder nipple for connecting and extending vacuum hoses.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b910/-"
      }
    ],
    "features": [
      "Barbed ribbed ends prevent hose slippage under suction"
    ]
  },
  {
    "id": "cat-6-way-ap",
    "slug": "6-way-air-distributor-ap",
    "name": "6-Way Air Distributor (AP)",
    "model": "6-Way AP",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b980",
    "priceNumeric": 80,
    "image": "/images/catalogue/p16_img7_320x320.png",
    "badge": "AP Distributor",
    "inStock": true,
    "shortDescription": "6-way pulsation air distributor manifold splitting pulse vacuum evenly to 4 teat cups.",
    "specifications": [
      {
        "label": "Ports",
        "value": "6 Ports"
      },
      {
        "label": "Price",
        "value": "\u20b980/-"
      }
    ],
    "features": [
      "Even air distribution for synchronous liner collapse"
    ]
  },
  {
    "id": "cat-6-way-melasty",
    "slug": "6-way-air-distributor-melasty",
    "name": "6-Way Air Distributor (Melasty)",
    "model": "6-Way Melasty",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b980",
    "priceNumeric": 80,
    "image": "/images/catalogue/p16_img11_320x320.png",
    "badge": "Melasty Style",
    "inStock": true,
    "shortDescription": "Melasty pattern 6-way distributor piece with heavy impact plastic moulding.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b980/-"
      }
    ],
    "features": [
      "Exact port diameter matching Melasty pulsation tubing"
    ]
  },
  {
    "id": "cat-liner-stopper",
    "slug": "milking-liner-stopper-plug",
    "name": "Milking Liner Stopper Plug",
    "model": "Liner Stopper",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b935",
    "priceNumeric": 35,
    "image": "/images/catalogue/p16_img8_250x188.png",
    "badge": "Teat Plug",
    "inStock": true,
    "shortDescription": "Tapered plug inserted into inactive teat cups when milking cows with only 3 active quarters.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b935/-"
      }
    ],
    "features": [
      "Maintains cluster vacuum without drawing dust into unused cups"
    ]
  },
  {
    "id": "cat-vacuum-regulator-imp",
    "slug": "vacuum-regulator-imported",
    "name": "Precision Vacuum Regulator (Imported)",
    "model": "Vacuum Regulator IMP",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b9110",
    "priceNumeric": 110,
    "image": "/images/catalogue/p16_img9_260x347.png",
    "badge": "Imported Model",
    "inStock": true,
    "shortDescription": "Calibrated spring-loaded vacuum regulator valve providing stable 48 kPa milking pressure.",
    "specifications": [
      {
        "label": "Type",
        "value": "Spring Weighted Vacuum Regulator"
      },
      {
        "label": "Grade",
        "value": "Imported Heavy Duty"
      },
      {
        "label": "Price",
        "value": "\u20b9110/-"
      }
    ],
    "features": [
      "Maintains constant milking vacuum protecting cow udder tissues",
      "Adjustable tension knob for fine-tuning system vacuum"
    ]
  },
  {
    "id": "cat-vacuum-regulator-ind",
    "slug": "vacuum-regulator-indian",
    "name": "Vacuum Regulator (Indian Standard)",
    "model": "Vacuum Regulator IND",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b990",
    "priceNumeric": 90,
    "image": "/images/catalogue/p16_img12_300x400.png",
    "badge": "Indian Model",
    "inStock": true,
    "shortDescription": "Reliable standard Indian vacuum relief regulator valve for dairy pipelines.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b990/-"
      }
    ],
    "features": [
      "Simple maintenance and reliable vacuum control"
    ]
  },
  {
    "id": "cat-nylon-filter",
    "slug": "dairy-vacuum-nylon-filter",
    "name": "Dairy Vacuum Nylon Filter",
    "model": "Nylon Filter",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 16,
    "price": "\u20b990",
    "priceNumeric": 90,
    "image": "/images/catalogue/p16_img10_240x320.png",
    "badge": "Filter Element",
    "inStock": true,
    "shortDescription": "Fine mesh nylon air filter protecting vacuum pumps from dust and debris ingestion.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b990/-"
      }
    ],
    "features": [
      "Washable and reusable mesh filter element"
    ]
  },
  {
    "id": "cat-nrv-valve",
    "slug": "nrv-non-return-valve",
    "name": "NRV (Non-Return Valve)",
    "model": "NRV Standard",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b980",
    "priceNumeric": 80,
    "image": "/images/catalogue/p17_img1_320x320.png",
    "badge": "Non-Return",
    "inStock": true,
    "shortDescription": "One-way vacuum check valve preventing oil mist or dirty air backflow into milk lines.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b980/-"
      }
    ],
    "features": [
      "Instant sealing flap mechanism"
    ]
  },
  {
    "id": "cat-shut-off-valve-240cc-ap",
    "slug": "240cc-shut-off-valve-ap",
    "name": "240cc Shut-Off Valve (AP)",
    "model": "Shut Off AP",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b980",
    "priceNumeric": 80,
    "image": "/images/catalogue/p17_img2_400x400.png",
    "badge": "AP Valve",
    "inStock": true,
    "shortDescription": "Quick sliding vacuum shut-off valve for 240cc AP milking claws.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b980/-"
      }
    ],
    "features": [
      "One-touch shutoff when detaching milking cluster"
    ]
  },
  {
    "id": "cat-shut-off-valve-melasty",
    "slug": "shut-off-valve-melasty",
    "name": "Shut-Off Valve (Melasty)",
    "model": "Shut Off Melasty",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b980",
    "priceNumeric": 80,
    "image": "/images/catalogue/p17_img3_347x260.png",
    "badge": "Melasty Style",
    "inStock": true,
    "shortDescription": "Melasty configuration vacuum shut-off slide valve for claws.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b980/-"
      }
    ],
    "features": [
      "Positive lock seal preventing accidental air bleed"
    ]
  },
  {
    "id": "cat-shut-off-valve-160cc",
    "slug": "160cc-shut-off-valve",
    "name": "160cc Shut-Off Valve",
    "model": "Shut Off 160cc",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b980",
    "priceNumeric": 80,
    "image": "/images/catalogue/p17_img4_400x400.png",
    "badge": "160cc Size",
    "inStock": true,
    "shortDescription": "Compact vacuum shutoff valve designed for 160cc claws.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b980/-"
      }
    ],
    "features": [
      "Reliable sealing for smaller volume claws"
    ]
  },
  {
    "id": "cat-shut-off-valve-200cc",
    "slug": "200cc-shut-off-valve",
    "name": "200cc Shut-Off Valve",
    "model": "Shut Off 200cc",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b970",
    "priceNumeric": 70,
    "image": "/images/catalogue/p17_img10_391x400.png",
    "badge": "200cc Size",
    "inStock": true,
    "shortDescription": "Shut-off valve mechanism tailored for 200cc milking claws.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b970/-"
      }
    ],
    "features": [
      "Smooth slide action"
    ]
  },
  {
    "id": "cat-liquid-gauge-cowtools",
    "slug": "liquid-vacuum-gauge-cow-tools",
    "name": "Glycerine Liquid Vacuum Gauge (Cow Tools)",
    "model": "Liquid Gauge Cow Tools",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b9290",
    "priceNumeric": 290,
    "image": "/images/catalogue/p17_img6_400x400.png",
    "badge": "Glycerine Filled",
    "inStock": true,
    "shortDescription": "Heavy-duty glycerine liquid-filled dial vacuum gauge preventing needle vibration flutter.",
    "specifications": [
      {
        "label": "Dial Fill",
        "value": "Liquid Glycerine Filled (Anti-Flutter)"
      },
      {
        "label": "Range",
        "value": "0 to -100 kPa (0 to -30 inHg)"
      },
      {
        "label": "Casing",
        "value": "Stainless Steel Outer Bezel"
      },
      {
        "label": "Price",
        "value": "\u20b9290/-"
      }
    ],
    "features": [
      "Liquid damping gives rock-steady reading under pulsing machine vibrations",
      "Clear color-coded safe vacuum zone marking"
    ]
  },
  {
    "id": "cat-vacuum-gauge-dry",
    "slug": "vacuum-gauge-dry",
    "name": "Dry Dial Vacuum Gauge",
    "model": "Dry Gauge",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b9190",
    "priceNumeric": 190,
    "image": "/images/catalogue/p17_img9_316x320.png",
    "badge": "Dry Dial",
    "inStock": true,
    "shortDescription": "Standard dry dial vacuum gauge for accurate line pressure checks.",
    "specifications": [
      {
        "label": "Dial Size",
        "value": "Standard 2.5 Inch Dial"
      },
      {
        "label": "Price",
        "value": "\u20b9190/-"
      }
    ],
    "features": [
      "Clear dual kPa/inHg scale"
    ]
  },
  {
    "id": "cat-adaptor-gasket",
    "slug": "adaptor-gas-kit",
    "name": "Adaptor Gasket Set",
    "model": "Adaptor Gasket",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b945",
    "priceNumeric": 45,
    "image": "/images/catalogue/p17_img8_480x480.png",
    "badge": "Gasket",
    "inStock": true,
    "shortDescription": "Replacement sealing collar gasket for bucket lid adaptor nipples.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b945/-"
      }
    ],
    "features": [
      "Durable rubber construction"
    ]
  },
  {
    "id": "cat-adaptor-y-set",
    "slug": "adaptor-y-set",
    "name": "Adaptor Y Set",
    "model": "Adaptor Y",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 17,
    "price": "\u20b9200",
    "priceNumeric": 200,
    "image": "/images/catalogue/p17_img11_300x400.png",
    "badge": "Y Adaptor",
    "inStock": true,
    "shortDescription": "Dual branch Y adaptor fitting for dual bucket vacuum splitting.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b9200/-"
      }
    ],
    "features": [
      "Solid moulded construction for leak-free splitting"
    ]
  },
  {
    "id": "cat-drain-valve-indian",
    "slug": "drain-valve-indian",
    "name": "Automatic Drain Valve (Indian)",
    "model": "Drain Valve IND",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 18,
    "price": "\u20b960",
    "priceNumeric": 60,
    "image": "/images/catalogue/p18_img2_400x400.png",
    "badge": "Auto Drain",
    "inStock": true,
    "shortDescription": "Self-draining rubber valve that stays shut under vacuum and automatically ejects condensed water when stopped.",
    "specifications": [
      {
        "label": "Type",
        "value": "Automatic Condensation Drain"
      },
      {
        "label": "Price",
        "value": "\u20b960/-"
      }
    ],
    "features": [
      "Keeps vacuum tank dry automatically without manual intervention",
      "Protects pump bearings from rust and water suck-in"
    ]
  },
  {
    "id": "cat-drain-valve-imported",
    "slug": "drain-valve-imported",
    "name": "Automatic Drain Valve (Imported)",
    "model": "Drain Valve IMP",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 18,
    "price": "\u20b925",
    "priceNumeric": 25,
    "image": "/images/catalogue/p18_img12_560x560.png",
    "badge": "Imported Drain",
    "inStock": true,
    "shortDescription": "Imported high-flexibility rubber automatic drain flap valve.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b925/-"
      }
    ],
    "features": [
      "Instant gravity release when vacuum drops"
    ]
  },
  {
    "id": "cat-pulsator-repair-kit-imp",
    "slug": "pulsator-repair-kit-imported",
    "name": "Pulsator Repair Kit (Imported)",
    "model": "Pulsator Kit IMP",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 18,
    "price": "\u20b990",
    "priceNumeric": 90,
    "image": "/images/catalogue/p18_img3_333x400.png",
    "badge": "Service Kit",
    "inStock": true,
    "shortDescription": "Full internal overhaul kit for pneumatic pulsators including diaphragms, slides, and seals.",
    "specifications": [
      {
        "label": "Contents",
        "value": "Pulsator Diaphragm Pair, Slides, Internal O-Rings"
      },
      {
        "label": "Price",
        "value": "\u20b990/-"
      }
    ],
    "features": [
      "Restores old pulsators back to factory pulse rhythm",
      "Oil-resistant premium synthetic rubber membranes"
    ]
  },
  {
    "id": "cat-pulsator-repair-kit-ind",
    "slug": "pulsator-repair-kit-indian",
    "name": "Pulsator Repair Kit (Indian)",
    "model": "Pulsator Kit IND",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 18,
    "price": "\u20b970",
    "priceNumeric": 70,
    "image": "/images/catalogue/p18_img3_333x400.png",
    "badge": "Standard Service",
    "inStock": true,
    "shortDescription": "Standard Indian replacement diaphragm pair and gaskets for servicing pulsators.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b970/-"
      }
    ],
    "features": [
      "Quick affordable maintenance fix"
    ]
  },
  {
    "id": "cat-pulsator-adaptor",
    "slug": "pulsator-adaptor-mount",
    "name": "Pulsator Adaptor Mount",
    "model": "Pulsator Adaptor",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 18,
    "price": "\u20b9135",
    "priceNumeric": 135,
    "image": "/images/catalogue/p18_img5_400x400.png",
    "badge": "Lid Mount",
    "inStock": true,
    "shortDescription": "Bucket lid mounting adaptor securing pulsator firmly to stainless steel bucket lid.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b9135/-"
      }
    ],
    "features": [
      "Solid leak-free locking interface"
    ]
  },
  {
    "id": "cat-pvc-valve-37",
    "slug": "pvc-valve-no-37",
    "name": "PVC Ball Valve No. 37",
    "model": "PVC Valve 37",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 18,
    "price": "\u20b925",
    "priceNumeric": 25,
    "image": "/images/catalogue/p18_img1_400x400.png",
    "badge": "Valve 37",
    "inStock": true,
    "shortDescription": "Heavy-wall PVC valve component for pipeline vacuum isolation.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b925/-"
      }
    ],
    "features": [
      "Chemical resistant durable PVC"
    ]
  },
  {
    "id": "cat-pvc-valve-38",
    "slug": "pvc-valve-no-38",
    "name": "PVC Valve No. 38",
    "model": "PVC Valve 38",
    "category": "spares-valves-regulators",
    "categoryName": "Spares, Valves & Regulators",
    "page": 18,
    "price": "\u20b925",
    "priceNumeric": 25,
    "image": "/images/catalogue/p18_img1_400x400.png",
    "badge": "Valve 38",
    "inStock": true,
    "shortDescription": "Specialized PVC pipeline connection valve.",
    "specifications": [
      {
        "label": "Price",
        "value": "\u20b925/-"
      }
    ],
    "features": [
      "Tight seal on pipeline branches"
    ]
  },
  {
    "id": "cat-pump-150lpm-monoblock",
    "slug": "150lpm-monoblock-pump",
    "name": "150 LPM Monoblock Vacuum Pump",
    "model": "150 LPM Monoblock",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 19,
    "price": "\u20b95,750",
    "priceNumeric": 5750,
    "variantPrice": "\u20b95,750 / \u20b95,950 (Variant)",
    "image": "/images/catalogue/p19_img1_560x560.png",
    "badge": "150 LPM Monoblock",
    "inStock": true,
    "shortDescription": "Compact direct-drive monoblock vacuum pump displacing 150 liters per minute for single bucket machines.",
    "specifications": [
      {
        "label": "Displacement",
        "value": "150 LPM"
      },
      {
        "label": "Type",
        "value": "Direct-Drive Monoblock Vacuum Pump"
      },
      {
        "label": "Compatible Machine",
        "value": "MB20 Nano & MB20 Square Single Bucket"
      },
      {
        "label": "Price",
        "value": "\u20b95,750/- (Std) | \u20b95,950/-"
      }
    ],
    "features": [
      "Compact monoblock design with built-in motor mounting flange",
      "Zero belt slippage or alignment concerns",
      "Precision ground rotor and vanes for continuous steady vacuum"
    ]
  },
  {
    "id": "cat-pump-200lpm-monoblock",
    "slug": "200lpm-monoblock-pump",
    "name": "200 LPM Monoblock Vacuum Pump",
    "model": "200 LPM Monoblock",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 19,
    "price": "\u20b96,700",
    "priceNumeric": 6700,
    "variantPrice": "\u20b96,700 / \u20b96,900 (Variant)",
    "image": "/images/catalogue/p19_img2_359x480.png",
    "badge": "200 LPM Monoblock",
    "inStock": true,
    "shortDescription": "200 LPM high-output monoblock pump for MB20 Square and fast-milking single setups.",
    "specifications": [
      {
        "label": "Displacement",
        "value": "200 LPM"
      },
      {
        "label": "Type",
        "value": "Monoblock Vacuum Pump"
      },
      {
        "label": "Price",
        "value": "\u20b96,700/- | \u20b96,900/-"
      }
    ],
    "features": [
      "Higher airflow capacity handles momentary air leaks without dropping bucket vacuum",
      "Low maintenance dry/lubricated design"
    ]
  },
  {
    "id": "cat-pump-150lpm-minivac",
    "slug": "150lpm-minivac-pump",
    "name": "150 LPM Minivac Vacuum Pump",
    "model": "150 LPM Minivac",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 19,
    "price": "\u20b93,500",
    "priceNumeric": 3500,
    "image": "/images/catalogue/p19_img3_313x560.png",
    "badge": "Minivac Series",
    "inStock": true,
    "shortDescription": "Belt-driven 150 LPM Minivac pump with compact cast-iron housing.",
    "specifications": [
      {
        "label": "Capacity",
        "value": "150 LPM"
      },
      {
        "label": "Type",
        "value": "Belt-Driven Minivac Vacuum Pump"
      },
      {
        "label": "Price",
        "value": "\u20b93,500/-"
      }
    ],
    "features": [
      "Economical replacement pump for small farm milking systems",
      "Simple pulley drive compatible with 0.5 HP motors"
    ]
  },
  {
    "id": "cat-pump-150lpm-onvac",
    "slug": "150lpm-onvac-pump",
    "name": "150 LPM Onvac Vacuum Pump",
    "model": "150 LPM Onvac",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 19,
    "price": "\u20b93,500",
    "priceNumeric": 3500,
    "image": "/images/catalogue/p19_img4_800x323.png",
    "badge": "Onvac Model",
    "inStock": true,
    "shortDescription": "150 LPM Onvac model vacuum pump engineered for quiet shed operation.",
    "specifications": [
      {
        "label": "Capacity",
        "value": "150 LPM"
      },
      {
        "label": "Price",
        "value": "\u20b93,500/-"
      }
    ],
    "features": [
      "Low operating sound level keeps cows calm"
    ]
  },
  {
    "id": "cat-pump-170lpm-vacuum",
    "slug": "170lpm-vacuum-pump",
    "name": "170 LPM Vacuum Pump (Krushi Power)",
    "model": "170 LPM Vacuum",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 19,
    "price": "\u20b93,500",
    "priceNumeric": 3500,
    "variantPrice": "\u20b93,500 / \u20b93,800 (Variant)",
    "image": "/images/catalogue/p19_img5_360x480.png",
    "badge": "C-Series Standard",
    "inStock": true,
    "shortDescription": "The powerhouse 170 LPM pump utilized in C17M, C17V, C25V, and C25V-FAN machines.",
    "specifications": [
      {
        "label": "Displacement",
        "value": "170 LPM"
      },
      {
        "label": "Compatibility",
        "value": "C17M, C17V, C25V, C25V-FAN Machines"
      },
      {
        "label": "Price",
        "value": "\u20b93,500/- | \u20b93,800/-"
      }
    ],
    "features": [
      "Robust cast iron construction with heat radiating fins",
      "Consistent vacuum recovery rate"
    ]
  },
  {
    "id": "cat-pump-400lpm-vacuum",
    "slug": "400lpm-heavy-duty-vacuum-pump",
    "name": "400 LPM Heavy-Duty Vacuum Pump",
    "model": "400 LPM Vacuum",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 20,
    "price": "\u20b95,500",
    "priceNumeric": 5500,
    "image": "/images/catalogue/p20_img1_400x346.png",
    "badge": "Double Bucket 400 LPM",
    "inStock": true,
    "shortDescription": "Commercial 400 LPM oil-lubricated vacuum pump powering double bucket machines.",
    "specifications": [
      {
        "label": "Air Displacement",
        "value": "400 Liters / Minute"
      },
      {
        "label": "Recommended Motor",
        "value": "1 HP Single or Three Phase"
      },
      {
        "label": "Supported Buckets",
        "value": "2 Milking Buckets Simultaneously"
      },
      {
        "label": "Price",
        "value": "\u20b95,500/-"
      }
    ],
    "features": [
      "Deep vacuum capability up to 50 kPa with large volumetric reserve",
      "Oversized oil reservoir for continuous smooth operation",
      "Used in C40V, C40M, and Mobile double bucket machines"
    ]
  },
  {
    "id": "cat-pump-400lpm-minivac",
    "slug": "400lpm-minivac-pump",
    "name": "400 LPM Minivac Pump",
    "model": "400 LPM Minivac",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 20,
    "price": "\u20b95,500",
    "priceNumeric": 5500,
    "variantPrice": "\u20b95,500 / \u20b97,500 (Heavy Duty)",
    "image": "/images/catalogue/p20_img2_480x480.png",
    "badge": "Minivac 400",
    "inStock": true,
    "shortDescription": "400 LPM high-capacity Minivac pump for dairy pipelines and double buckets.",
    "specifications": [
      {
        "label": "Displacement",
        "value": "400 LPM"
      },
      {
        "label": "Price",
        "value": "\u20b95,500/- | \u20b97,500/- (Heavy Variant)"
      }
    ],
    "features": [
      "Heavy balanced flywheel for vibrationless rotation"
    ]
  },
  {
    "id": "cat-pump-200lpm-minivac",
    "slug": "200lpm-minivac-pump",
    "name": "200 LPM Minivac Pump",
    "model": "200 LPM Minivac",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 20,
    "price": "\u20b96,000",
    "priceNumeric": 6000,
    "image": "/images/catalogue/p20_img4_313x560.png",
    "badge": "200 LPM Minivac",
    "inStock": true,
    "shortDescription": "Mid-tier 200 LPM Minivac pump for enhanced single bucket systems.",
    "specifications": [
      {
        "label": "Displacement",
        "value": "200 LPM"
      },
      {
        "label": "Price",
        "value": "\u20b96,000/-"
      }
    ],
    "features": [
      "High efficiency with moderate motor power"
    ]
  },
  {
    "id": "cat-pump-600lpm-vacuum",
    "slug": "600lpm-commercial-vacuum-pump",
    "name": "600 / 650 LPM Commercial Vacuum Pump",
    "model": "600-650 LPM Industrial",
    "category": "vacuum-pumps",
    "categoryName": "Vacuum & Monoblock Pumps",
    "page": 20,
    "price": "\u20b96,800",
    "priceNumeric": 6800,
    "variantPrice": "\u20b96,800 / \u20b97,200",
    "image": "/images/catalogue/p20_img5_357x640.png",
    "badge": "Commercial 3-6 Buckets",
    "inStock": true,
    "shortDescription": "High-volume 600-650 LPM vacuum pump for 3-bucket and pipeline installations.",
    "specifications": [
      {
        "label": "Air Flow",
        "value": "600 - 650 LPM"
      },
      {
        "label": "Motor Required",
        "value": "1 HP to 2 HP Motor"
      },
      {
        "label": "Price",
        "value": "\u20b96,800/- | \u20b97,200/-"
      }
    ],
    "features": [
      "Powers C60V Three Bucket and large commercial parlor pipelines",
      "Multi-vane rotor ensuring instant vacuum build-up"
    ]
  },
  {
    "id": "cat-motor-kp-1hp-alu",
    "slug": "krushi-power-1hp-aluminium-motor",
    "name": "Krushi Power 1 HP Aluminium Winding Motor",
    "model": "KP 1HP Aluminium",
    "category": "electric-motors",
    "categoryName": "Electric Motors",
    "page": 21,
    "price": "\u20b95,350",
    "priceNumeric": 5350,
    "image": "/images/catalogue/p21_img1_480x480.png",
    "badge": "1 HP Motor",
    "inStock": true,
    "shortDescription": "Standard 1 HP aluminium winding motor for 400 LPM and double bucket milking machines.",
    "specifications": [
      {
        "label": "Power",
        "value": "1.0 HP (0.75 kW)"
      },
      {
        "label": "Winding",
        "value": "Aluminium Winding"
      },
      {
        "label": "Speed",
        "value": "1440 RPM Standard"
      },
      {
        "label": "Brand",
        "value": "Krushi Power"
      },
      {
        "label": "Price",
        "value": "\u20b95,350/-"
      }
    ],
    "features": [
      "High starting torque capable of starting pumps under vacuum load",
      "Enclosed fan-cooled body protects against farm moisture"
    ]
  },
  {
    "id": "cat-motor-kp-05hp-alu",
    "slug": "krushi-power-05hp-aluminium-motor",
    "name": "Krushi Power 0.5 HP Aluminium Winding Motor",
    "model": "KP 0.5HP Aluminium",
    "category": "electric-motors",
    "categoryName": "Electric Motors",
    "page": 21,
    "price": "\u20b94,250",
    "priceNumeric": 4250,
    "image": "/images/catalogue/p21_img2_400x400.png",
    "badge": "0.5 HP Motor",
    "inStock": true,
    "shortDescription": "0.5 HP single-phase motor designed for single-bucket C17 and C25 machines.",
    "specifications": [
      {
        "label": "Power",
        "value": "0.5 HP"
      },
      {
        "label": "Winding",
        "value": "Aluminium Winding"
      },
      {
        "label": "Price",
        "value": "\u20b94,250/-"
      }
    ],
    "features": [
      "Low power consumption, ideal for rural power supply"
    ]
  },
  {
    "id": "cat-motor-kp-1hp-cop",
    "slug": "krushi-power-1hp-copper-winding-motor",
    "name": "Krushi Power 1 HP Copper Winding Motor",
    "model": "KP 1HP 100% Copper",
    "category": "electric-motors",
    "categoryName": "Electric Motors",
    "page": 21,
    "price": "\u20b96,750",
    "priceNumeric": 6750,
    "image": "/images/catalogue/p21_img3_400x400.png",
    "badge": "100% Copper Winding",
    "inStock": true,
    "shortDescription": "Premium 1 HP 100% copper winding motor engineered for continuous heavy dairy shifts.",
    "specifications": [
      {
        "label": "Power",
        "value": "1.0 HP"
      },
      {
        "label": "Winding",
        "value": "100% Pure Copper Winding"
      },
      {
        "label": "Duty",
        "value": "Continuous S1 Duty Rating"
      },
      {
        "label": "Price",
        "value": "\u20b96,750/-"
      }
    ],
    "features": [
      "Superior heat dissipation for extended service life",
      "Maintains rated RPM even during mild voltage fluctuations"
    ]
  },
  {
    "id": "cat-motor-kp-05hp-cop",
    "slug": "krushi-power-05hp-copper-winding-motor",
    "name": "Krushi Power 0.5 HP Copper Winding Motor",
    "model": "KP 0.5HP Copper",
    "category": "electric-motors",
    "categoryName": "Electric Motors",
    "page": 21,
    "price": "\u20b95,750",
    "priceNumeric": 5750,
    "image": "/images/catalogue/p21_img4_400x400.png",
    "badge": "0.5 HP Copper",
    "inStock": true,
    "shortDescription": "Heavy-duty 0.5 HP copper winding motor for MB20, C17, and C25 milking units.",
    "specifications": [
      {
        "label": "Power",
        "value": "0.5 HP"
      },
      {
        "label": "Winding",
        "value": "100% Copper"
      },
      {
        "label": "Price",
        "value": "\u20b95,750/-"
      }
    ],
    "features": [
      "Maximum energy efficiency and long winding life"
    ]
  },
  {
    "id": "cat-motor-godrej-1hp-alu",
    "slug": "godrej-1hp-motor-aluminium",
    "name": "Godrej 1 HP Motor (Aluminium Winding)",
    "model": "Godrej 1HP",
    "category": "electric-motors",
    "categoryName": "Electric Motors",
    "page": 21,
    "price": "\u20b95,750",
    "priceNumeric": 5750,
    "image": "/images/catalogue/p21_img1_480x480.png",
    "badge": "Godrej Brand",
    "inStock": true,
    "shortDescription": "Reputed Godrej brand 1 HP single-phase motor with precision rotor balancing.",
    "specifications": [
      {
        "label": "Brand",
        "value": "Godrej"
      },
      {
        "label": "Power",
        "value": "1 HP"
      },
      {
        "label": "Price",
        "value": "\u20b95,750/-"
      }
    ],
    "features": [
      "Trusted brand reliability across Maharashtra"
    ]
  },
  {
    "id": "cat-motor-godrej-05hp-alu",
    "slug": "godrej-05hp-motor-aluminium",
    "name": "Godrej 0.5 HP Motor (Aluminium Winding)",
    "model": "Godrej 0.5HP",
    "category": "electric-motors",
    "categoryName": "Electric Motors",
    "page": 21,
    "price": "\u20b94,500",
    "priceNumeric": 4500,
    "image": "/images/catalogue/p21_img2_400x400.png",
    "badge": "Godrej 0.5HP",
    "inStock": true,
    "shortDescription": "Godrej 0.5 HP motor for smooth, trouble-free single-bucket milking operation.",
    "specifications": [
      {
        "label": "Power",
        "value": "0.5 HP"
      },
      {
        "label": "Price",
        "value": "\u20b94,500/-"
      }
    ],
    "features": [
      "Silent running and high electrical safety"
    ]
  },
  {
    "id": "cat-motor-precicraft-1hp",
    "slug": "precicraft-1hp-motor-aluminium",
    "name": "Precicraft 1 HP Motor (Aluminium Winding)",
    "model": "Precicraft 1HP",
    "category": "electric-motors",
    "categoryName": "Electric Motors",
    "page": 22,
    "price": "\u20b96,250",
    "priceNumeric": 6250,
    "image": "/images/catalogue/p22_img1_359x359.png",
    "badge": "Precicraft Model",
    "inStock": true,
    "shortDescription": "Precicraft industrial electric motor delivering robust continuous output for milking machinery.",
    "specifications": [
      {
        "label": "Brand",
        "value": "Precicraft"
      },
      {
        "label": "Power",
        "value": "1 HP"
      },
      {
        "label": "Price",
        "value": "\u20b96,250/-"
      }
    ],
    "features": [
      "Rugged casing designed for dairy shed environments"
    ]
  },
  {
    "id": "cat-motor-marathon-05hp",
    "slug": "marathon-genteq-05hp-motor",
    "name": "Marathon / Genteq 0.5 HP Motor (Aluminium Winding)",
    "model": "Marathon / Genteq 0.5HP",
    "category": "electric-motors",
    "categoryName": "Electric Motors",
    "page": 22,
    "price": "\u20b94,550",
    "priceNumeric": 4550,
    "image": "/images/catalogue/p22_img1_359x359.png",
    "badge": "Marathon / Genteq",
    "inStock": true,
    "shortDescription": "High-grade Marathon / Genteq 0.5 HP electric motor for reliable dairy automation.",
    "specifications": [
      {
        "label": "Brand",
        "value": "Marathon / Genteq"
      },
      {
        "label": "Power",
        "value": "0.5 HP"
      },
      {
        "label": "Price",
        "value": "\u20b94,550/-"
      }
    ],
    "features": [
      "High starting torque and thermal overload protection"
    ]
  },
  {
    "id": "cat-essae-ma815",
    "slug": "essae-ma-815-milk-analyser",
    "name": "Essae MA-815 Ultrasonic Milk Analyser",
    "model": "Essae MA-815",
    "category": "milk-analysers",
    "categoryName": "Milk Analysers & Testing",
    "page": 1,
    "price": "Enquire for Best Price",
    "priceNumeric": 0,
    "image": "/images/catalogue/essae-ma-815-milk-analyser.jpg",
    "badge": "Essae Genuine",
    "inStock": true,
    "shortDescription": "Ultrasonic digital milk analyzer for rapid, chemical-free testing of Fat, SNF, Added Water, and Density in under 30 seconds.",
    "specifications": [
      {
        "label": "Model",
        "value": "Essae MA-815"
      },
      {
        "label": "Parameters",
        "value": "Fat, SNF, Added Water, Density (CLR), Temperature"
      },
      {
        "label": "Measuring Time",
        "value": "25 - 30 seconds per sample"
      },
      {
        "label": "Sample Volume",
        "value": "15 ml"
      },
      {
        "label": "Display",
        "value": "High-visibility green LED digital readout"
      },
      {
        "label": "Connectivity",
        "value": "RS-232 / USB for PC, weighing scale & slip printer"
      }
    ],
    "features": [
      "Ultra-fast measurement cycle delivering accurate results in under 30 seconds",
      "Chemical-free ultrasonic testing without hazardous acids",
      "Tests Fat, SNF, Added Water, Density (CLR), and Temperature simultaneously",
      "Bright multi-segment digital display for instant sample readout",
      "Integrated peristaltic cleaning system with dedicated suction wash pipe",
      "Direct interface with AMCU dairy software, weighing scales, and slip printers"
    ]
  }
];
