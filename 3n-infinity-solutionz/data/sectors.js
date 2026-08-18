/**
 * Every sector page and every homepage card is generated from this file.
 * To add a 10th competency: add one object here. No HTML edits needed.
 *
 * division must match an id in data/company.js -> divisions
 */
module.exports = [
  {
    slug: "solar-panel-cleaning",
    code: "SC",
    division: "energy",
    name: "Solar Panel Cleaning Contracts",
    shortName: "Robotic Solar Cleaning",
    tagline: "Autonomous robotic cleaning that protects your solar yield.",
    heroSummary:
      "Dust and grime can silently cut solar output by 15–25%. We run scheduled, waterless/low-water robotic cleaning contracts that keep utility-scale and commercial installations performing at rated capacity — without manual crews on your panels.",
    overview:
      "Soiling loss is one of the least-monitored line items on a solar asset's P&L. Manual cleaning crews are slow, inconsistent, and carry safety and glass-damage risk at scale. Our robotic cleaning fleet is contracted on a recurring basis — weekly, fortnightly, or monsoon-adjusted schedules — with performance reporting tied to actual generation recovery, not just a cleaning checklist.",
    capabilities: [
      "Autonomous robotic cleaning units for rooftop, ground-mount & floating solar",
      "Waterless and low-water cleaning modes for water-stressed sites",
      "Scheduled AMC contracts with defined cleaning cycles",
      "Pre/post-clean generation reporting to quantify yield recovery",
      "Trained on-site operators and remote fleet monitoring",
      "Coverage across India & UAE installations"
    ],
    whoFor: [
      "Solar EPC & asset owners running O&M contracts",
      "Commercial & industrial rooftop solar operators",
      "Utility-scale and floating solar plant operators",
      "Facilities teams responsible for on-site generation assets"
    ],
    process: [
      { step: "Site & soiling audit", detail: "We assess panel tilt, dust load, water access and current yield loss." },
      { step: "Cleaning cycle design", detail: "A contract schedule is set against your site's soiling rate and season." },
      { step: "Robotic deployment", detail: "Autonomous units clean on schedule with minimal site disruption." },
      { step: "Yield reporting", detail: "Generation data before/after cleaning is reported against contract SLAs." }
    ],
    ctaLabel: "Request a soiling audit"
  },
  {
    slug: "cotton-yarn-supply",
    code: "CY",
    division: "industrial",
    name: "Cotton & Yarn Cloth Supply",
    shortName: "Cotton & Yarn Supply",
    tagline: "Consistent-quality cotton & yarn sourcing for manufacturers who can't absorb variability.",
    heroSummary:
      "Raw material inconsistency shows up on your production floor as rework and rejected lots. We supply graded cotton and yarn on contracted volumes, with quality specifications held constant order to order.",
    overview:
      "Textile and garment manufacturers lose more margin to inconsistent raw material than to price. We work as a scheduled supply partner rather than a spot-market trader — locking count, strength, and moisture specifications against your production standards, and holding to them across repeat orders.",
    capabilities: [
      "Combed & carded cotton in contracted grades",
      "Yarn supply across count ranges for weaving & knitting",
      "Lot-consistent quality specification (count, strength, moisture)",
      "Scheduled/contracted volume supply, not one-off spot orders",
      "Quality documentation per batch",
      "Export-ready packing for India–UAE trade"
    ],
    whoFor: [
      "Garment & textile manufacturers",
      "Weaving and knitting units",
      "Home-textile and industrial fabric producers",
      "Trading houses requiring consistent-spec bulk supply"
    ],
    process: [
      { step: "Specification lock", detail: "We agree count, grade and tolerance bands against your production line." },
      { step: "Sourcing & sampling", detail: "Sample lots are approved before contracted volumes are committed." },
      { step: "Scheduled dispatch", detail: "Supply is released against your production calendar, not ad hoc." },
      { step: "Batch quality reporting", detail: "Each lot ships with documentation against agreed spec." }
    ],
    ctaLabel: "Request a supply quote"
  },
  {
    slug: "rubber-gloves-hygiene",
    code: "RG",
    division: "corporate",
    name: "Rubber Gloves & Hygiene Products",
    shortName: "Gloves & Hygiene",
    tagline: "Certified hygiene and safety consumables for industrial & healthcare supply chains.",
    heroSummary:
      "From industrial-grade rubber gloves to healthcare and hygiene consumables, we supply on recurring procurement cycles so your facilities and safety teams never run a stockout audit.",
    overview:
      "Hygiene and PPE consumables are a compliance line item as much as a procurement one. We supply against defined specifications — glove thickness, material grade, certification — on scheduled reorder cycles so facilities, healthcare and industrial safety teams can standardize rather than re-source every quarter.",
    capabilities: [
      "Industrial & examination-grade rubber gloves",
      "Nitrile, latex and vinyl variants by application",
      "Facility hygiene consumables (sanitation, PPE add-ons)",
      "Bulk & recurring-order supply agreements",
      "Certification and compliance documentation on request",
      "India & UAE distribution"
    ],
    whoFor: [
      "Manufacturing & industrial safety procurement teams",
      "Healthcare and clinical facilities",
      "Facility management & housekeeping contractors",
      "Food processing and hygiene-regulated units"
    ],
    process: [
      { step: "Spec & compliance review", detail: "We confirm grade, material and certification requirements." },
      { step: "Sample approval", detail: "Facilities teams sign off on sample stock before bulk supply." },
      { step: "Recurring supply cycle", detail: "Reorder schedules are set to your consumption rate." },
      { step: "Stock & compliance tracking", detail: "Documentation is issued per batch for audit readiness." }
    ],
    ctaLabel: "Set up a supply agreement"
  },
  {
    slug: "hotel-amenities",
    code: "HA",
    division: "corporate",
    name: "Hotel Amenities Kits",
    shortName: "Hotel Amenities",
    tagline: "Branded guest amenities that hospitality groups reorder without thinking twice.",
    heroSummary:
      "Guest amenity kits — from welcome sets to bathroom consumables — supplied and branded to your property standard, on a repeat-order cycle that matches your occupancy.",
    overview:
      "Hotel amenities are a brand touchpoint disguised as a consumable. We produce and supply amenity kits to property spec — packaging, branding and contents — and keep the reorder simple so procurement and housekeeping aren't re-briefing a supplier every cycle.",
    capabilities: [
      "Custom-branded welcome & guest amenity kits",
      "Bathroom consumables (soap, shampoo, dental, shaving sets)",
      "Eco-friendly & refillable format options",
      "Property-standard packaging and branding",
      "Volume supply matched to occupancy cycles",
      "Multi-property / chain-level contract supply"
    ],
    whoFor: [
      "Independent hotels & boutique properties",
      "Hotel chains & hospitality groups",
      "Serviced apartments and resorts",
      "Hospitality procurement & facilities teams"
    ],
    process: [
      { step: "Brand & spec brief", detail: "We capture property branding, format and sustainability preferences." },
      { step: "Kit sampling", detail: "A sample kit is approved before production volumes run." },
      { step: "Production run", detail: "Kits are produced and packed to property specification." },
      { step: "Scheduled reorder", detail: "Supply is set to occupancy-linked reorder cycles." }
    ],
    ctaLabel: "Request amenity samples"
  },
  {
    slug: "heat-pumps",
    code: "HP",
    division: "energy",
    name: "Heat Pumps — Solar & Electric",
    shortName: "Heat Pump Systems",
    tagline: "High-efficiency solar and electric heat pump systems for commercial hot water demand.",
    heroSummary:
      "For hotels, hospitals, industrial units and residential developments with heavy hot-water load, we supply and install solar-assisted and electric heat pump systems engineered against your daily demand curve.",
    overview:
      "Hot water is one of the largest and most predictable energy loads in hospitality and industrial facilities — and one of the easiest to cut with the right heat pump sizing. We design systems (solar-assisted or fully electric) around your actual demand profile, not a generic capacity table.",
    capabilities: [
      "Solar-assisted and fully electric heat pump systems",
      "Commercial-scale sizing for hotels, hospitals & factories",
      "Demand-curve based system design",
      "Installation, commissioning & handover",
      "Energy savings & payback projections",
      "AMC and maintenance support post-installation"
    ],
    whoFor: [
      "Hotels & hospitality groups with high hot-water demand",
      "Hospitals & healthcare facilities",
      "Industrial units with process heating needs",
      "Residential & commercial developers"
    ],
    process: [
      { step: "Demand audit", detail: "We measure your hot-water load profile across peak and off-peak hours." },
      { step: "System sizing", detail: "Solar-assisted or electric configuration is sized against that profile." },
      { step: "Install & commission", detail: "Certified installation with performance testing before handover." },
      { step: "Ongoing AMC", detail: "Scheduled maintenance keeps efficiency at rated levels." }
    ],
    ctaLabel: "Request a demand audit"
  },
  {
    slug: "printing-packaging",
    code: "PP",
    division: "industrial",
    name: "Printing & Packaging",
    shortName: "Printing & Packaging",
    tagline: "Machinery and consumables that keep print & packaging lines running.",
    heroSummary:
      "We supply both sides of the print & packaging line — machinery and the consumables that keep it running — so plant managers aren't sourcing capital equipment from one vendor and consumables from five others.",
    overview:
      "Printing and packaging operations depend equally on machine uptime and consumable reliability. We supply new and reconditioned machinery alongside a standing consumables line — inks, plates, packaging substrates — under a single account, reducing the vendor sprawl most plants carry.",
    capabilities: [
      "Printing & packaging machinery supply",
      "Consumables: inks, plates, adhesives, substrates",
      "Machine installation & operator handover",
      "Recurring consumables supply agreements",
      "Spare parts sourcing support",
      "India & UAE plant supply"
    ],
    whoFor: [
      "Print production houses",
      "Packaging manufacturers & converters",
      "FMCG & consumer goods plants with in-house packaging lines",
      "Plant procurement & maintenance teams"
    ],
    process: [
      { step: "Line assessment", detail: "We review current machinery and consumables spend across the line." },
      { step: "Equipment or consumable proposal", detail: "A scoped proposal covers machinery, consumables, or both." },
      { step: "Supply & installation", detail: "Machinery is installed; consumables supply is scheduled to run rate." },
      { step: "Ongoing account management", detail: "One point of contact for reorders and spares." }
    ],
    ctaLabel: "Request a line assessment"
  },
  {
    slug: "corporate-gifts",
    code: "CG",
    division: "corporate",
    name: "A4 & Office / Corporate Event Gifts",
    shortName: "Office & Corporate Gifting",
    tagline: "Office paper supply and curated corporate gifting, procured and delivered on schedule.",
    heroSummary:
      "Two procurement needs, one vendor: recurring A4 and office paper supply for day-to-day operations, and curated corporate gifting for events, onboarding kits and client relationships.",
    overview:
      "Office supply and corporate gifting sit in the same procurement category but rarely the same vendor — one needs reliability, the other needs taste. We run both: scheduled A4/office paper supply on standing orders, and sourced-and-branded corporate gifts for events, milestones and client accounts.",
    capabilities: [
      "A4 & office paper — scheduled bulk supply",
      "Corporate event gifting, curated by budget & occasion",
      "Employee onboarding & milestone gift kits",
      "Custom branding on gift items",
      "Standing order accounts for recurring office supply",
      "Event-timed delivery for corporate gifting"
    ],
    whoFor: [
      "Corporate admin & procurement teams",
      "HR teams sourcing onboarding/milestone gifts",
      "Events & marketing teams for client gifting",
      "Multi-branch offices needing standing supply accounts"
    ],
    process: [
      { step: "Category scoping", detail: "We confirm whether you need office supply, gifting, or both." },
      { step: "Standing order / gift brief", detail: "A reorder schedule or a gifting brief (occasion, budget, branding) is set." },
      { step: "Sourcing & branding", detail: "Gifts are sourced and branded; office supply is queued for dispatch." },
      { step: "Scheduled delivery", detail: "Supply lands on your reorder cycle; gifts land ahead of the event date." }
    ],
    ctaLabel: "Talk to corporate gifting"
  },
  {
    slug: "solar-projects",
    code: "SP",
    division: "energy",
    name: "Solar Panel Projects",
    shortName: "Solar EPC Projects",
    tagline: "End-to-end solar EPC — design, install, commission.",
    heroSummary:
      "Rooftop, ground-mount and captive solar projects handled end-to-end — site assessment, system design, installation and grid/off-grid commissioning — for commercial and industrial clients.",
    overview:
      "A solar project is only as good as its weakest handoff — design that doesn't match the site, installation that doesn't match the design, or commissioning that skips performance testing. We run the full EPC scope under one accountable team, and can transition completed installations directly into our own robotic cleaning AMC.",
    capabilities: [
      "Site assessment & feasibility studies",
      "System design for rooftop, ground-mount & captive solar",
      "Engineering, procurement & construction (EPC)",
      "Grid-tied and off-grid commissioning",
      "Performance testing before handover",
      "Direct transition to O&M / robotic cleaning AMC"
    ],
    whoFor: [
      "Commercial & industrial facilities going solar",
      "Developers building captive generation capacity",
      "Businesses replacing diesel/grid dependency",
      "Asset owners needing EPC + long-term O&M under one vendor"
    ],
    process: [
      { step: "Feasibility & site assessment", detail: "Load profile, roof/land capacity and payback are assessed." },
      { step: "System design", detail: "Capacity, layout and equipment are engineered to the site." },
      { step: "EPC execution", detail: "Procurement, civil/structural work and installation are managed end-to-end." },
      { step: "Commissioning & handover", detail: "Performance is tested before formal handover, with O&M available on continuation." }
    ],
    ctaLabel: "Request a feasibility study"
  },
  {
    slug: "metal-scrap-trading",
    code: "MS",
    division: "industrial",
    name: "Metal Scraps",
    shortName: "Metal Scrap Trading",
    tagline: "Structured ferrous & non-ferrous scrap sourcing and offtake.",
    heroSummary:
      "We manage scrap metal sourcing and offtake for industrial generators and buyers — ferrous and non-ferrous — with weighment, grading and documentation handled as a standing process, not a one-off deal.",
    overview:
      "Industrial scrap is a recurring revenue or procurement line that too often runs informally. We structure it: consistent grading, transparent weighment, and documented offtake or supply agreements — for manufacturers generating scrap and for buyers needing a reliable feed of graded material.",
    capabilities: [
      "Ferrous & non-ferrous scrap sourcing and offtake",
      "On-site grading & weighment",
      "Standing offtake agreements for industrial generators",
      "Graded material supply for buyers/re-processors",
      "Documentation for compliance & audit",
      "India & UAE trade coverage"
    ],
    whoFor: [
      "Manufacturing units generating industrial scrap",
      "Construction & demolition contractors",
      "Foundries & re-processors needing graded feedstock",
      "Metal trading & export businesses"
    ],
    process: [
      { step: "Material assessment", detail: "Scrap type, volume and generation frequency are reviewed." },
      { step: "Grading & pricing", detail: "Material is graded and offtake/supply terms are agreed." },
      { step: "Collection or supply", detail: "Scheduled collection (generators) or supply (buyers) begins." },
      { step: "Documentation", detail: "Weighment and compliance records are issued per transaction." }
    ],
    ctaLabel: "Discuss an offtake agreement"
  }
];
