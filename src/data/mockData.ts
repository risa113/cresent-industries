export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface CapabilityItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
  readonly metric: string;
  readonly cadSpec: string;
}

export interface BlueprintCallout {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly spec: string;
  readonly xPercent: number; // For desktop placement
  readonly yPercent: number;
}

export interface PrecisionBlock {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly tolerance: string;
}

export interface SectorItem {
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export interface PortfolioProject {
  readonly id: string;
  readonly code: string;
  readonly year: string;
  readonly location: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly area: string;
  readonly steel: string;
  readonly image: string;
  readonly alt: string;
  readonly isRealSite?: boolean;
}

export interface LeaderProfile {
  readonly name: string;
  readonly role: string;
  readonly icon: string;
  readonly bio: string;
  readonly expertise: string;
  readonly credentials: string;
}

export interface TestimonialItem {
  readonly quote: string;
  readonly author: string;
  readonly title: string;
  readonly projectBadge: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Blueprint Board', href: '#blueprint' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const BASE = import.meta.env.BASE_URL || '/';

export const HERO_DATA = {
  eyebrow: 'ENGINEERED FOR STRENGTH // CAD-SPEC: IS 800:2007 // PEB MATRIX v4.2',
  division: 'STRUCTURAL DIVISION: CRESCENT ROOFING & PEB',
  headline: 'Engineering Strength.',
  headlineHighlight: 'Building Tomorrow.',
  description:
    'Premium steel structural fabrication, pre-engineered buildings, industrial roofing matrices, and heavy infrastructure frameworks engineered for zero-tolerance performance, seismic compliance, and severe load durability.',
  bgImage: `${BASE}images/hero-steel-hd.webp`,
  metrics: [
    { label: 'ANNUAL FABRICATION', value: '12,000+ MT' },
    { label: 'MAX CLEAR SPAN', value: '65 METERS' },
    { label: 'CRANE CAPACITY', value: 'UP TO 50 MT' },
    { label: 'CYCLONIC RATING', value: '180 KM/H' },
  ],
};

export const COMPANY_DATA = {
  sectionTag: '01 / THE COMPANY',
  subtitle: 'ENTERPRISE PROFILE',
  founded: 'FOUNDED 1999 // TIRUNELVELI, TN',
  eyebrow: 'PRECISION CIVIL ENGINEERING',
  headline: 'Built on Precision. Delivered with Strength.',
  p1: 'For over a quarter of a century, Crescent Engineering Industries has pioneered the vanguard of civil and structural engineering across Southern India. Operating with strict adherence to IS 800:2007 and MBMA quality frameworks, we manufacture and erect high-tolerance Pre-Engineered Steel Buildings, structural canopies, and specialized industrial envelopes.',
  p2: 'Our fabrication yard in Melapalayam, Tirunelveli integrates heavy CNC beam lines, automated submerged arc welding, and multi-axis plasma plate profiling. From colossal manufacturing hangars to heavy rail overbridge structures, our work bridges architectural intent with unyielding structural physics.',
  specBox: [
    { label: 'LEGAL ENTITY', value: 'CRESCENT ENGINEERING INDUSTRIES' },
    { label: 'OPERATIONAL DIVISION', value: 'CRESCENT ROOFING SYSTEMS' },
    { label: 'CHIEF EXECUTIVE LEADERSHIP', value: 'Er. K. Mohamed | Er. Mohamed Asseesul Islam, D.C.E.' },
    { label: 'STRUCTURAL SPECIFICATIONS', value: 'IS 800:2007 // ASTM A653 // IS 2062 E350' },
  ],
  image: `${BASE}images/editorial-steel-hd.webp`,
  gps: 'LAT 8.7139° N, LONG 77.7567° E',
  datum: 'IS 2062 E250 / E350',
  facilityCode: 'FACILITY CODE: CEI-PLANT-01',
  qcTolerance: 'QC TOLERANCE: ±1.5MM',
};

export const CAPABILITIES: readonly CapabilityItem[] = [
  {
    id: 'peb',
    number: '01',
    title: 'Pre-Engineered Buildings (PEB)',
    icon: 'warehouse',
    description:
      'Custom designed tapered I-beam primary framing, Z/C purlin secondary grids, and integrated crane gantry brackets up to 50 MT load ratings.',
    metric: 'SPAN: 12M - 65M',
    cadSpec: 'IS 800:2007 / MBMA 2012 / Tapered Flange Section H-Beams',
  },
  {
    id: 'steel-fab',
    number: '02',
    title: 'Steel Structural Fabrication',
    icon: 'precision_manufacturing',
    description:
      'Heavy industrial structural framing for chemical refineries, automated cement plants, high-rise processing towers, and mechanical conveyor galleries.',
    metric: 'STEEL: IS 2062 E350',
    cadSpec: 'IS 2062 Grade E350BR / SAW Submerged Arc Welding AWS D1.1',
  },
  {
    id: 'tensile',
    number: '03',
    title: 'Tensile Roof Structures',
    icon: 'roofing',
    description:
      'Curvilinear architectural membranes manufactured with imported PVDF-coated Ferrari fabrics and calibrated stainless tension tie-rods.',
    metric: 'MEMBRANE: PVDF TYPE II/III',
    cadSpec: 'Serge Ferrari 1002 T2 / 316 Stainless Steel Turnbuckles',
  },
  {
    id: 'puff-panel',
    number: '04',
    title: 'PUFF Panel Sheeting Systems',
    icon: 'layers',
    description:
      'Continuous line injected polyurethane foam (PUR/PIR) insulated composite wall and roof panels with interlocking tongue-and-groove joint profile.',
    metric: 'CORE DENSITY: 40±2 KG/M³',
    cadSpec: 'Thermal Conductivity k = 0.022 W/m.K / B1 Fire Rating',
  },
  {
    id: 'conversion',
    number: '05',
    title: 'Conversion / Extension Buildings',
    icon: 'domain_add',
    description:
      'Structural retrofit engineering: raising existing roof heights, column removal for enlarged bay clear spans, and mezzanine floor structural insertions.',
    metric: 'METHOD: ZERO SHUTDOWN RETROFIT',
    cadSpec: 'High-Tensile HSFG Grade 8.8 / 10.9 Bolted Splice Connections',
  },
  {
    id: 'colour-coated',
    number: '06',
    title: 'Colour-Coated Roofing Systems',
    icon: 'architecture',
    description:
      'High-rib trapezoidal profile steel panels roll-formed from premium 550 MPa yield Galvalume coil substrates with anti-capillary weather grooves.',
    metric: 'COATING: AZ-150 GSM',
    cadSpec: 'Bare Galvalume / SMP Paint System 25 Micron Primer Coat',
  },
  {
    id: 'cold-storage',
    number: '07',
    title: 'Cold Storage Systems',
    icon: 'ac_unit',
    description:
      'Hermetically sealed controlled atmosphere (CA) deep cold chambers engineered with thermal-break structural base plates and air-tight vapor retarders.',
    metric: 'TEMP: +15°C TO -40°C',
    cadSpec: 'Continuous Vapor Barrier 0.05 Perm / 150mm PUFF Density',
  },
  {
    id: 'stone-coated',
    number: '08',
    title: 'Stone-Coated Roofing Systems',
    icon: 'cottage',
    description:
      'Architectural luxury steel roof shingles embedded with natural volcanic stone granules, combining classic villa aesthetic with hurricane-proof interlocking nails.',
    metric: 'WARRANTY: 50 YEARS',
    cadSpec: 'Zinc-Alu Alloy Coated Base Sheet / Acrylic Resin Matrix',
  },
  {
    id: 'steel-bridges',
    number: '09',
    title: 'Steel Bridges & Girders',
    icon: 'view_carousel',
    description:
      'Plate girders, composite bowstring arches, and heavy truss superstructures fabricated to Indian Road Congress (IRC) and Railway standards.',
    metric: 'STANDARD: IRC CLASS 70R',
    cadSpec: 'Full Penetration Butt Welds 100% Radiography Tested',
  },
  {
    id: 'upvc',
    number: '10',
    title: 'UPVC Roofing Sheets',
    icon: 'shield',
    description:
      '3-layer co-extruded multi-rib synthetic resin sheets explicitly engineered for acid fumes, chemical fertilizer facilities, and intense coastal marine environments.',
    metric: 'CORROSION RESISTANCE: 100%',
    cadSpec: 'ASA Surface Polymer / 0% Corrosion under High Acid Exposure',
  },
  {
    id: 'polycarbonate',
    number: '11',
    title: 'Polycarbonate Roofing Sheets',
    icon: 'wb_sunny',
    description:
      'Multiwall and embossed UV-stabilized daylighting panels providing high impact resistance (250x glass) with 99% harmful ultraviolet radiation filtration.',
    metric: 'TRANSMISSION: 85% LUX',
    cadSpec: 'Co-extruded UV Absorber / Impact Strength > 300J',
  },
];

export const BLUEPRINT_DATA = {
  header: '09 / FEATURED PEB EXPERIENCE (ARCHITECTURAL BLUEPRINT BOARD)',
  subtitle: 'BLUEPRINT ARCHIVE // INDEX: PEB-SPEC-900',
  headline: 'Structures Designed for Performance.',
  scale: 'SCALE: 1:100 AUTOCAD REV 2026.4',
  tag: 'CLEAR SPAN ARCHITECTURE SYSTEM',
  image: `${BASE}images/blueprint-truss-hd.webp`,
  imageOriginalHd: `${BASE}images/blueprint-truss-hd.webp`,
  callouts: [
    {
      id: 'point-a',
      code: 'POINT A // RAFTER TRUSS',
      title: 'HIGH-TENSILE CLEAR SPAN RAFTER',
      description: 'Primary structural frame built with automated submerged arc welded tapered I-beams.',
      spec: 'IS 2062 Grade E350 Welded I-Sections',
      xPercent: 24,
      yPercent: 28,
    },
    {
      id: 'point-b',
      code: 'POINT B // ENVELOPE',
      title: 'MULTI-RIB LEAK-PROOF FASTENING',
      description: 'Weather-tight interlocking roof profile with integrated thermal insulation barrier.',
      spec: 'Class 3 Self-Drilling EPDM Washers',
      xPercent: 78,
      yPercent: 16,
    },
    {
      id: 'point-c',
      code: 'POINT C // PURLIN GRID',
      title: 'Z & C COLD-FORMED PURLINS',
      description: 'Continuous overlap purlin design maximizing structural moment capacity.',
      spec: 'Yield 345 MPa Galvanized Continuous Lap',
      xPercent: 18,
      yPercent: 65,
    },
    {
      id: 'point-d',
      code: 'POINT D // FOUNDATION EMBED',
      title: 'SEISMIC ZONE III RESILIENT',
      description: 'High-strength shear key anchor stud bolts embedded in reinforced concrete footings.',
      spec: 'High-Strength Anchor Stud Bolt Assemblies',
      xPercent: 72,
      yPercent: 82,
    },
  ] as readonly BlueprintCallout[],
  specs: [
    { label: 'ANALYSIS SOFTWARE', value: 'STAAD.Pro v22 // ETABS Ultimate' },
    { label: 'DESIGN CODE COMPLIANCE', value: 'IS 800:2007 // MBMA 2012 SPEC' },
    { label: 'SURFACE TREATMENT', value: 'SA 2.5 Shot Blast + Zinc Epoxy Primer' },
    { label: 'DELIVERY TIMELINE', value: 'Turnkey Erection: 6 - 8 Weeks' },
  ],
};

export const PRECISION_BLOCKS: readonly PrecisionBlock[] = [
  {
    number: '01.',
    title: 'Engineering-Focused Execution',
    description:
      'In-house structural engineering teams model every anchor bolt, haunch connection, and wind brace. Manufacturing tolerances strictly kept within ±1.5mm.',
    tolerance: 'TOLERANCE: ±1.5 MM',
  },
  {
    number: '02.',
    title: 'Certified High-Yield Raw Materials',
    description:
      'Direct institutional procurement from premier primary steel producers: Tata Steel, JSW Steel, and Jindal Steel & Power with complete Mill Test Certificates (MTC).',
    tolerance: 'MILLS: TATA / JSW / JINDAL',
  },
  {
    number: '03.',
    title: 'Skilled In-House Fabrication',
    description:
      'Certified AWS D1.1 welders operating twin-wire submerged arc welding heads, automatic H-beam assembly lines, and calibrated ultrasonic flaw testing.',
    tolerance: 'TESTING: UT / RADIOGRAPHY',
  },
  {
    number: '04.',
    title: 'Bespoke Clear-Span Solutions',
    description:
      'No forced templated structures. We calculate custom clear spans exceeding 60+ meters unobstructed by interior columns for optimal industrial maneuvering.',
    tolerance: 'SPAN CAPACITY: 60M+ UNOBSTRUCTED',
  },
  {
    number: '05.',
    title: 'Safety & Cyclonic Durability',
    description:
      'Engineered to resist coastal cyclones with basic wind speeds calibrated up to 180 km/h (50 m/s) in full accordance with IS 875 (Part 3) terrain category standards.',
    tolerance: 'WIND RATING: 180 KM/H GUST',
  },
  {
    number: '06.',
    title: 'Turnkey Project Integration',
    description:
      'Complete lifecycle ownership: soil condition calculation, foundation civil works, steel fabrication, logistics transport, and mobile crane erection.',
    tolerance: 'CONTRACT: 100% SINGLE SOURCE EPC',
  },
];

export const SECTORS: readonly SectorItem[] = [
  {
    title: 'Heavy Manufacturing',
    icon: 'factory',
    description: 'Automotive assembly lines, textile spinning mills, steel rolling plants, and heavy foundry complexes.',
  },
  {
    title: 'Warehousing & Logistics',
    icon: 'inventory_2',
    description: 'High-bay automated fulfillment centers, third-party logistics (3PL) hubs, and distribution depots.',
  },
  {
    title: 'Commercial Buildings',
    icon: 'corporate_fare',
    description: 'Corporate headquarters, multi-deck parking facilities, hypermarkets, and exhibition pavilions.',
  },
  {
    title: 'Agro-Processing & Storage',
    icon: 'agriculture',
    description: 'Grain silos, modern rice mills, fertilizer handling facilities, and ventilated poultry structures.',
  },
  {
    title: 'Cold Storage & Fisheries',
    icon: 'kitchen',
    description: 'Controlled atmosphere meat & seafood freezing vaults, dairy depots, and pharmaceutical deep-cold hubs.',
  },
  {
    title: 'Educational Institutions',
    icon: 'school',
    description: 'Indoor sports stadiums, covered convocation amphitheaters, workshop laboratories, and auditoriums.',
  },
  {
    title: 'Automobile Retail Showrooms',
    icon: 'storefront',
    description: 'High-visibility glass facade frames, integrated vehicle service bays, and parts warehousing.',
  },
  {
    title: 'Infrastructure & Transport',
    icon: 'tram',
    description: 'Railway platform covers, airport terminal ancillary canopies, port handling hangars, and highway toll plazas.',
  },
];

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    id: 'peb-tnv-204',
    code: 'PROJECT: PEB-TNV-204',
    year: 'COMPLETED 2025',
    location: 'TIRUNELVELI',
    title: 'Wide-Span Industrial PEB Manufacturing Plant',
    category: 'PEB BUILDINGS',
    description:
      'Tirunelveli High-Tech Industrial Corridor. Complete turnkey clear-span manufacturing bay engineered with heavy structural columns, precision roof trusses, and crane rail foundations.',
    area: '145,000 SQ. FT.',
    steel: '680 METRIC TONS',
    image: `${BASE}images/portfolio-peb-plant.webp`,
    alt: 'Industrial PEB turnkey manufacturing plant clear-span structural steel structure',
    isRealSite: true,
  },
  {
    id: 'log-chn-882',
    code: 'PROJECT: LOG-CHN-882',
    year: 'COMPLETED 2024',
    location: 'CHENNAI REGION',
    title: 'High-Bay Logistics Hub & Warehouse Shed',
    category: 'LOGISTICS & PEB',
    description:
      'High-clearance factory warehouse development engineered with rigid structural steel trusses, purlin grids, perimeter masonry integration, and crane-lift erection.',
    area: '220,000 SQ. FT.',
    steel: '1,150 METRIC TONS',
    image: `${BASE}images/portfolio-logistics-hub.webp`,
    alt: 'Modern logistics automated warehouse steel framing and high-bay distribution hub',
    isRealSite: true,
  },
  {
    id: 'ten-cbe-115',
    code: 'PROJECT: TEN-CBE-115',
    year: 'COMPLETED 2024',
    location: 'COIMBATORE REGION',
    title: 'Multi-Tier Commercial Structural PEB Facility',
    category: 'STRUCTURAL STEEL',
    description:
      'Multi-level heavy structural steel skeleton building engineered for maximum moment resistance, seismic stability, and custom industrial manufacturing configurations.',
    area: '85,000 SQ. FT.',
    steel: '495 METRIC TONS',
    image: `${BASE}images/portfolio-steel-skeleton.webp`,
    alt: 'Multi-tier structural steel skeleton framework and high-rise industrial structure',
    isRealSite: true,
  },
  {
    id: 'cld-mdu-412',
    code: 'PROJECT: CLD-MDU-412',
    year: 'COMPLETED 2025',
    location: 'MADURAI REGION',
    title: 'Cold Storage Terminal & Insulated PUFF Panel Shed',
    category: 'COLD STORAGE & PUFF',
    description:
      'High-bay structural steel envelope with continuous insulated sandwich panels, automated submerged arc welded trusses, and thermal-break foundations.',
    area: '110,000 SQ. FT.',
    steel: '540 METRIC TONS',
    image: `${BASE}images/portfolio-cold-storage.webp`,
    alt: 'Cold storage terminal and insulated sandwich PUFF panel industrial warehouse',
    isRealSite: true,
  },
  {
    id: 'prt-tut-709',
    code: 'PROJECT: PRT-TUT-709',
    year: 'COMPLETED 2023',
    location: 'TUTICORIN PORT',
    title: 'Maritime Port Cargo Terminal & Logistics Transit Shed',
    category: 'PORT & INFRASTRUCTURE',
    description:
      'Port vicinity heavy structural steel framework engineered for high-salinity marine winds, dynamic dead-and-live load tolerances, and rapid turnkey crane erection.',
    area: '95,000 SQ. FT.',
    steel: '510 METRIC TONS',
    image: `${BASE}images/portfolio-port-transit.webp`,
    alt: 'Maritime port cargo transit terminal and coastal heavy structural steel framework',
    isRealSite: true,
  },
];

export const STATS = [
  { value: '500+', label: 'COMPLETED PROJECTS', sub: 'Across 6 Southern States' },
  { value: '25+', label: 'YEARS IN SERVICE', sub: 'Established Since 1999' },
  { value: '1.2M+', label: 'SQ. FT. CONSTRUCTED', sub: 'Industrial Clear Span Space' },
  { value: '100%', label: 'ZERO FAILURE RECORD', sub: 'Fully IS & ASTM Compliant' },
];

export const LEADERS: readonly LeaderProfile[] = [
  {
    name: 'Er. K. Mohamed',
    role: 'Founder & Chief Structural Consultant',
    icon: 'verified_user',
    bio: 'With over 35 years in heavy civil construction and structural steel systems, Er. K. Mohamed founded Crescent Engineering Industries to bring global PEB manufacturing precision to Southern India. He has supervised the engineering execution of hundreds of industrial facilities.',
    expertise: 'Structural Steel, PEB Optimization, Foundation Dynamics',
    credentials: 'Institution of Engineers (India) // ICI Life Member',
  },
  {
    name: 'Er. Mohamed Asseesul Islam, D.C.E.',
    role: 'Director of Operations & Structural Engineering',
    icon: 'engineering',
    bio: 'Specializing in modern computational structural analysis and automated CNC fabrication logistics, Er. Mohamed Asseesul Islam oversees the plant operations, structural engineering quality assurance, and on-site crane erection divisions across all major enterprise contracts.',
    expertise: 'STAAD.Pro Modeling, Cold-Formed Steel, High-Tensile Fasteners',
    credentials: 'Structural PEB Consultant // MBMA Member',
  },
];

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    quote:
      'Crescent Engineering executed our 120,000 sq. ft. textile spinning facility in Tuticorin three weeks ahead of schedule. The clear-span column clearance allowed uninterrupted setup of our automated ring frames.',
    author: 'M. Sundararajan',
    title: 'Vice President Projects, Southern Spinners Ltd',
    projectBadge: 'PROJECT: 120,000 SQ FT PEB',
  },
  {
    quote:
      'Their multi-rib roofing and sandwich PUFF panel installation endured the severest cyclonic winds of December 2023 with absolutely zero panel dislocation or water intrusion. A benchmark of structural honesty.',
    author: 'Dr. A. Rahim Sait',
    title: 'Managing Director, Marine Agro Cold Chains',
    projectBadge: 'PROJECT: -30°C COLD TERMINAL',
  },
  {
    quote:
      "As architectural consultants, we demand extreme fidelity to blueprint curves. Crescent's tensile canopy team delivered immaculate stainless tension joints that look like sculpture while bearing high live loads.",
    author: 'Ar. V. Anandhan, FIIA',
    title: 'Principal Architect, Studio Metrix Designs',
    projectBadge: 'PROJECT: 45M TENSILE PAVILION',
  },
];

export const COMPANY_CONTACT = {
  companyName: 'CRESCENT ENGINEERING INDUSTRIES',
  division: 'DIVISION: CRESCENT ROOFING',
  address: '11, Ambasamudram Road, Near Bharath Petrol Bulk, Melapalayam, Tirunelveli – 627005, Tamil Nadu, India.',
  gstn: '33AAHFC8912C2ZS',
  compliance: 'GOVT. REGISTERED STRUCTURAL FABRICATOR',
  mobile1: '+91 98430 60976',
  mobile2: '+91 93603 35276',
  whatsapp1Clean: '919843060976',
  whatsapp2Clean: '919360335276',
  landlines: '0462-290 7277 / 290 8277',
  email: 'crescentfabs@gmail.com',
  coords: 'LAT 8.7139° N, LONG 77.7567° E',
  systemTime: 'SYSTEM TIME UTC+05:30',
  logoUrl: `${BASE}images/crescent-logo.svg`,
};

export const getWhatsAppUrl = (
  numberClean: string = COMPANY_CONTACT.whatsapp1Clean,
  message: string = 'Hello Crescent Engineering, I am interested in your PEB and Structural Steel services.'
): string => {
  return `https://wa.me/${numberClean}?text=${encodeURIComponent(message)}`;
};
