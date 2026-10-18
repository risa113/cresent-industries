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
  readonly image?: string;
  readonly imageAlt?: string;
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
  readonly id?: string;
  readonly number?: string;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
  readonly metric?: string;
  readonly image?: string;
  readonly imageAlt?: string;
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
  readonly photo?: string;
  readonly imageAlt?: string;
}

export interface TestimonialItem {
  readonly quote: string;
  readonly author: string;
  readonly title: string;
  readonly projectBadge: string;
  readonly location?: string;
  readonly rating?: number;
  readonly verifiedSource?: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'About', href: '#editorial' },
  { label: 'Services', href: '#services' },
  { label: 'Blueprint', href: '#blueprint' },
  { label: 'Applicable For', href: '#applicable-for' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Reviews', href: '#testimonials' },
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
      'Custom designed tapered I-beam primary framing, Z/C purlin secondary grids, and clear-span engineering conforming to IS 800:2007 and MBMA standards.',
    metric: 'SPAN: 12M - 65M CLEAR',
    cadSpec: 'IS 800:2007 / MBMA 2012 / Tapered Flange Section H-Beams',
    image: `${BASE}images/service-peb-buildings-hd.jpg`,
    imageAlt: 'Pre-Engineered Buildings (PEB) industrial plant facility structural steel framing',
  },
  {
    id: 'conversion',
    number: '02',
    title: 'Conversion Buildings',
    icon: 'domain_add',
    description:
      'Structural retrofit engineering, factory roof height elevations, column removal for enlarged bay clear spans, and structural extensions.',
    metric: 'RETROFIT: ZERO SHUTDOWN',
    cadSpec: 'High-Tensile HSFG Grade 8.8 / 10.9 Bolted Splice Connections',
    image: `${BASE}images/service-conversion-buildings-hd.jpg`,
    imageAlt: 'Conversion and structural industrial building extension and steel framework',
  },
  {
    id: 'puf-panel',
    number: '03',
    title: 'PUF Panel Sheeting Systems',
    icon: 'layers',
    description:
      'Continuous line injected polyurethane foam (PUF) insulated composite wall and roof panels with interlocking tongue-and-groove joint profile.',
    metric: 'CORE DENSITY: 40±2 KG/M³',
    cadSpec: 'Thermal Conductivity k = 0.022 W/m.K / B1 Fire Rating',
    image: `${BASE}images/service-puf-panel-hd.jpg`,
    imageAlt: 'Insulated PUF panel sheeting system envelope with polyurethane core',
  },
  {
    id: 'colour-coated',
    number: '04',
    title: 'Colour-Coated Roofing Sheets',
    icon: 'roofing',
    description:
      'High-rib trapezoidal profile steel panels roll-formed from premium 550 MPa yield Galvalume coil substrates with anti-capillary weather grooves.',
    metric: 'COATING: AZ-150 GSM',
    cadSpec: 'Bare Galvalume / SMP Paint System 25 Micron Primer Coat',
    image: `${BASE}images/service-colour-coated-roofing-hd.jpg`,
    imageAlt: 'Colour-coated Galvalume trapezoidal roofing sheets installation on steel frame',
  },
  {
    id: 'tensile',
    number: '05',
    title: 'Tensile Roofing Systems',
    icon: 'architecture',
    description:
      'Curvilinear architectural membranes manufactured with imported PVDF-coated fabrics and calibrated stainless tension tie-rods and arched supports.',
    metric: 'MEMBRANE: ARCHITECTURAL PVDF',
    cadSpec: 'High-Tensile Structural Cable Systems / Stainless Steel Turnbuckles',
    image: `${BASE}images/service-tensile-roofing-hd.jpg`,
    imageAlt: 'Curved tensile architectural roofing system and cantilever canopy',
  },
  {
    id: 'steel-bridges',
    number: '06',
    title: 'Steel Bridges',
    icon: 'view_carousel',
    description:
      'Plate girders, composite bowstring arches, pedestrian overbridges, and heavy truss superstructures fabricated to Indian Road Congress (IRC) standards.',
    metric: 'STANDARD: IRC CLASS 70R',
    cadSpec: 'Full Penetration Butt Welds 100% Radiography Tested',
    image: `${BASE}images/service-steel-bridges-hd.jpg`,
    imageAlt: 'Structural steel bridge and heavy truss superstructure',
  },
  {
    id: 'cold-storage',
    number: '07',
    title: 'Cold Storage Systems',
    icon: 'ac_unit',
    description:
      'Hermetically sealed controlled atmosphere deep-cold chambers engineered with thermal-break structural base plates and air-tight vapor retarders.',
    metric: 'TEMP: +15°C TO -40°C',
    cadSpec: 'Continuous Vapor Barrier 0.05 Perm / 150mm PUF Density',
    image: `${BASE}images/service-cold-storage-hd.jpg`,
    imageAlt: 'Engineered cold storage insulated building facility and racking system',
  },
  {
    id: 'mezzanine',
    number: '08',
    title: 'Mezzanine Floors',
    icon: 'stairs',
    description:
      'Heavy-duty intermediate structural steel mezzanine floors and multi-tier platforms designed to multiply usable warehouse and industrial capacity.',
    metric: 'LOAD: UP TO 2,000 KG/M²',
    cadSpec: 'Heavy Universal Beams / Chequered Steel Deck Plate',
    image: `${BASE}images/service-mezzanine-floors-hd.jpg`,
    imageAlt: 'Structural steel mezzanine floor platform and warehouse elevated structure',
  },
  {
    id: 'stone-coated',
    number: '09',
    title: 'Stone-Coated Roofing Systems',
    icon: 'cottage',
    description:
      'Architectural luxury steel roof shingles embedded with natural volcanic stone granules, combining classic aesthetics with hurricane-proof interlocking fasteners.',
    metric: 'PROFILE: VOLCANIC GRANULE',
    cadSpec: 'Alu-Zinc Alloy Coated Base Sheet / Acrylic Resin Matrix',
    image: `${BASE}images/service-stone-coated-roofing-hd.jpg`,
    imageAlt: 'Stone-coated architectural metal roofing tile system',
  },
  {
    id: 'polycarbonate',
    number: '10',
    title: 'Polycarbonate Roofing Systems',
    icon: 'wb_sunny',
    description:
      'Multiwall and embossed UV-stabilized daylighting panels providing high impact resistance (250x glass) with 99% harmful ultraviolet radiation filtration.',
    metric: 'TRANSMISSION: UP TO 85% LUX',
    cadSpec: 'Co-extruded UV Absorber / Impact Strength > 300J',
    image: `${BASE}images/service-polycarbonate-roofing-hd.jpg`,
    imageAlt: 'Polycarbonate daylighting and curved barrel vault skylight roofing system',
  },
  {
    id: 'upvc',
    number: '11',
    title: 'UPVC Roofing Systems',
    icon: 'shield',
    description:
      '3-layer co-extruded multi-rib synthetic resin sheets explicitly engineered for acid fumes, chemical fertilizer facilities, and intense coastal marine environments.',
    metric: 'CORROSION RESISTANCE: 100%',
    cadSpec: 'ASA Surface Polymer / 0% Corrosion under High Acid Exposure',
    image: `${BASE}images/service-upvc-roofing-hd.jpg`,
    imageAlt: 'Chemical and weather resistant UPVC corrugated roofing sheet installation',
  },
];

export const BLUEPRINT_DATA = {
  header: '09 / FEATURED PEB EXPERIENCE (ARCHITECTURAL BLUEPRINT BOARD)',
  subtitle: 'BLUEPRINT ARCHIVE // INDEX: PEB-SPEC-900',
  headline: 'Industrial Steel Roofing & PEB Structural Architecture.',
  scale: 'SCALE: 1:100 AUTOCAD REV 2026.4 // ERECTION PHASE',
  tag: 'LIVE INDUSTRIAL STEEL ROOFING INSTALLATION',
  image: `${BASE}images/industrial-steel-roofing-hd.jpg`,
  imageOriginalHd: `${BASE}images/industrial-steel-roofing-hd.jpg`,
  callouts: [
    {
      id: 'point-a',
      code: 'POINT A // RAFTER TRUSS',
      title: 'HIGH-TENSILE CLEAR SPAN RAFTER',
      description: 'Submerged arc welded tapered I-beam primary framing engineered for heavy industrial spans.',
      spec: 'IS 2062 Grade E350 Welded I-Sections',
      xPercent: 23,
      yPercent: 18,
    },
    {
      id: 'point-b',
      code: 'POINT B // ROOF ENVELOPE',
      title: 'MULTI-RIB LEAK-PROOF ROOF SHEETING',
      description: 'Galvalume steel roof panels mechanically fastened with Class 3 EPDM weatherproof self-drilling washers.',
      spec: 'AZ-150 GSM Galvalume & EPDM Fasteners',
      xPercent: 64,
      yPercent: 53,
    },
    {
      id: 'point-c',
      code: 'POINT C // PURLIN GRID',
      title: 'Z & C COLD-FORMED PURLINS',
      description: 'Galvanized cold-formed Z & C purlins in continuous lap configuration with anti-sag rods for rigid lateral stability.',
      spec: 'Yield 345 MPa Galvanized Continuous Lap',
      xPercent: 22,
      yPercent: 58,
    },
    {
      id: 'point-d',
      code: 'POINT D // PORTAL BRACING',
      title: 'INDUSTRIAL PORTAL FRAME & BRACING',
      description: 'Diagonal roof diaphragm cross-ties and heavy tubular bracing engineered for 180 km/h wind shear load.',
      spec: 'High-Tensile Wind Ties & IS 800:2007 Portal System',
      xPercent: 49,
      yPercent: 28,
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
    id: 'warehouses',
    number: '01',
    title: 'Warehouses',
    icon: 'inventory_2',
    description:
      'High-bay automated fulfillment centres, logistics distribution hubs, and bulk storage facilities engineered for maximum clear height and heavy floor loads.',
    metric: 'MAX CLEAR SPAN',
    image: `${BASE}images/sector-warehouses-hd.jpg`,
    imageAlt: 'High-bay logistics warehouse and distribution facility interior',
  },
  {
    id: 'industrial-fabrication',
    number: '02',
    title: 'Industrial Fabrication',
    icon: 'precision_manufacturing',
    description:
      'Heavy structural steel fabrication yards, CNC profiling lines, and industrial equipment assembly bays engineered with heavy-duty overhead EOT gantry cranes.',
    metric: 'CRANE INTEGRATED',
    image: `${BASE}images/sector-industrial-fabrication-hd.jpg`,
    imageAlt: 'Industrial steel fabrication facility with overhead EOT gantry crane',
  },
  {
    id: 'sports-centres',
    number: '03',
    title: 'Sports Centres',
    icon: 'stadium',
    description:
      'Column-free indoor sports arenas, swimming pavilions, and athletic centres featuring long-span curved space trusses and natural daylighting integration.',
    metric: 'COLUMN-FREE SPAN',
    image: `${BASE}images/sector-sports-centres-hd.jpg`,
    imageAlt: 'Sports complex long-span curved space truss dome structure',
  },
  {
    id: 'exhibition-centres',
    number: '04',
    title: 'Exhibition Centres',
    icon: 'museum',
    description:
      'Monumental convention pavilions, expo centres, and public event halls delivering unobstructed interior vistas and architectural structural steel aesthetics.',
    metric: 'WIDE OPEN VOLUME',
    image: `${BASE}images/sector-exhibition-centres-hd.jpg`,
    imageAlt: 'High clearance convention and exhibition centre pavilion',
  },
  {
    id: 'factories',
    number: '05',
    title: 'Factories',
    icon: 'factory',
    description:
      'Heavy manufacturing plants, chemical processing facilities, and textile mills designed with insulated envelopes and high operational safety compliance.',
    metric: 'HEAVY INDUSTRIAL',
    image: `${BASE}images/sector-factories-hd.jpg`,
    imageAlt: 'Turnkey industrial manufacturing plant and factory shed with overhead cranes',
  },
  {
    id: 'showrooms',
    number: '06',
    title: 'Showrooms',
    icon: 'storefront',
    description:
      'Automobile dealerships, commercial retail galleries, and brand display centres integrating wide-span structural glass facades and architectural canopies.',
    metric: 'GLASS FACADE READY',
    image: `${BASE}images/sector-showrooms-hd.jpg`,
    imageAlt: 'Automobile dealership and commercial showroom with architectural steel framing',
  },
  {
    id: 'supermarkets',
    number: '07',
    title: 'Supermarkets',
    icon: 'shopping_cart',
    description:
      'Large-format hypermarkets, retail supercentres, and commercial department stores designed for rapid turnkey assembly, energy efficiency, and high footfall.',
    metric: 'INSULATED ENVELOPE',
    image: `${BASE}images/sector-supermarkets-hd.jpg`,
    imageAlt: 'Commercial retail supermarket and hypermarket building with wide-span roof',
  },
  {
    id: 'hospitals',
    number: '08',
    title: 'Hospitals',
    icon: 'local_hospital',
    description:
      'Healthcare complexes and emergency medical centres constructed with seismic-compliant steel frameworks, vibration control, and climate-sealed envelopes.',
    metric: 'SEISMIC ZONE COMPLIANT',
    image: `${BASE}images/sector-hospitals-hd.jpg`,
    imageAlt: 'Healthcare infrastructure and hospital structural steel framework under construction',
  },
  {
    id: 'aircraft-hangars',
    number: '09',
    title: 'Aircraft Hangars',
    icon: 'flight',
    description:
      'Monumental aviation hangars engineered with ultra-wide clear spans, bi-parting sliding door support, and zero interior obstruction for aircraft maintenance.',
    metric: '60M+ CLEAR OPENING',
    image: `${BASE}images/sector-aircraft-hangars-hd.jpg`,
    imageAlt: 'Monumental clear-span aviation aircraft hangar structure housing aircraft',
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
    title: 'Industrial Curved Steel Roofing & PEB Truss Facility',
    category: 'STEEL ROOFING & PEB',
    description:
      'Turnkey industrial steel roofing installation featuring curved Galvalume profile sheets, heavy tubular roof trusses, continuous cold-formed purlin grids, and weatherproof fastening for maximum cyclone resilience.',
    area: '95,000 SQ. FT.',
    steel: '520 METRIC TONS',
    image: `${BASE}images/portfolio-steel-roofing-hd.jpg`,
    alt: 'Industrial curved steel roofing installation and heavy PEB structural truss work',
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
    photo: `${BASE}images/founder-er-k-mohamed.jpg`,
    imageAlt: 'Er. K. Mohamed - Founder & Chief Structural Consultant at Crescent Engineering Industries',
    bio: 'With over 35 years in heavy civil construction and structural steel systems, Er. K. Mohamed founded Crescent Engineering Industries to bring global PEB manufacturing precision to Southern India. He has supervised the engineering execution of hundreds of industrial facilities.',
    expertise: 'Structural Steel, PEB Optimization, Foundation Dynamics',
    credentials: 'Institution of Engineers (India) // ICI Life Member',
  },
  {
    name: 'Er. Mohamed Asseesul Islam, D.C.E.',
    role: 'Director of Operations & Structural Engineering',
    icon: 'engineering',
    photo: `${BASE}images/director-asseesul-islam.jpg`,
    imageAlt: 'Er. Mohamed Asseesul Islam, D.C.E. - Director of Operations & Structural Engineering at Crescent Engineering Industries',
    bio: 'Specializing in modern computational structural analysis and automated CNC fabrication logistics, Er. Mohamed Asseesul Islam oversees the plant operations, structural engineering quality assurance, and on-site crane erection divisions across all major enterprise contracts.',
    expertise: 'STAAD.Pro Modeling, Cold-Formed Steel, High-Tensile Fasteners',
    credentials: 'Structural PEB Consultant // MBMA Member',
  },
];

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    quote:
      'Excellent job done by Crescent Engineering in our workshop & fabrication unit. High quality steel roofing truss, proper welding, and prompt completion with strong materials. The best structural fabricator in Melapalayam, Tirunelveli.',
    author: 'Hameed',
    title: 'Workshop & Fabrication Unit Owner',
    location: 'Melapalayam, Tirunelveli',
    projectBadge: 'PROJECT: MELAPALAYAM WORKSHOP SHED',
    rating: 5,
    verifiedSource: 'Verified Justdial Review (5.0 ★)',
  },
  {
    quote:
      'Nice service and prompt completion of roofing work for our commercial godown on Ambasamudram Road. Heavy rainfall during monsoon had zero leakage or damage. Highly recommended for heavy steel sheds.',
    author: 'Yousuf',
    title: 'Commercial Godown & Logistics Proprietor',
    location: 'Ambasamudram Road, Tirunelveli',
    projectBadge: 'PROJECT: COMMERCIAL STORAGE GODOWN',
    rating: 5,
    verifiedSource: 'Verified Justdial Review (5.0 ★)',
  },
  {
    quote:
      'Good quality steel truss fabrication and erection work for our factory shed. Their 26+ years of hands-on experience in Tirunelveli shows in the flawless alignment and durable Galvalume sheet finishing.',
    author: 'S. Islam',
    title: 'Managing Partner, Industrial Engineering Unit',
    location: 'Palayamkottai, Tirunelveli',
    projectBadge: 'PROJECT: PALAYAMKOTTAI FACTORY SHED',
    rating: 5,
    verifiedSource: 'Verified Justdial Review (5.0 ★)',
  },
  {
    quote:
      'Crescent Engineering completed our 35,000 sq. ft. PEB clear-span warehouse at Gangaikondan SIPCOT. Clear communication, accurate IS 800 code fabrication, and hassle-free crane erection ahead of schedule.',
    author: 'K. Senthil Nathan',
    title: 'General Manager Projects, South Agro Mills',
    location: 'Gangaikondan SIPCOT, Tirunelveli',
    projectBadge: 'PROJECT: GANGAIKONDAN 35,000 SQ FT PEB',
    rating: 5,
    verifiedSource: 'Direct Client Endorsement (5.0 ★)',
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

export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  category: string;
  area?: string;
  location?: string;
  notes?: string;
}

export const createQuoteInquiryLinks = (data: QuoteFormData) => {
  const messageBody =
`*NEW STRUCTURAL SPECIFICATION INQUIRY*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${data.name}
📱 *Phone / WhatsApp:* ${data.phone}
📧 *Email:* ${data.email || 'N/A'}
🏗️ *Category:* ${data.category}
${data.area ? `📐 *Estimated Area:* ${data.area}\n` : ''}${data.location ? `📍 *Location:* ${data.location}\n` : ''}${data.notes ? `📝 *Notes/Specs:* ${data.notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━
Sent via Crescent Engineering Web Portal`;

  const emailSubject = `Structural RFP Specification: ${data.name} - ${data.category}`;
  const emailBody =
`NEW STRUCTURAL SPECIFICATION INQUIRY / RFP

Client / Company: ${data.name}
Contact Phone: ${data.phone}
Email Address: ${data.email || 'Not provided'}
Structural Category: ${data.category}
${data.area ? `Estimated Area: ${data.area}\n` : ''}${data.location ? `Project Site Location: ${data.location}\n` : ''}${data.notes ? `Requirements & Tolerances: ${data.notes}\n` : ''}
----------------------------------------
Transmitted via Crescent Engineering Industries Web Portal
Melapalayam, Tirunelveli - 627005`;

  const whatsappUrl1 = `https://wa.me/${COMPANY_CONTACT.whatsapp1Clean}?text=${encodeURIComponent(messageBody)}`;
  const whatsappUrl2 = `https://wa.me/${COMPANY_CONTACT.whatsapp2Clean}?text=${encodeURIComponent(messageBody)}`;
  const mailtoUrl = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return {
    messageBody,
    whatsappUrl1,
    whatsappUrl2,
    mailtoUrl,
  };
};
