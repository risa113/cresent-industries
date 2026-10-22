/**
 * SEO & Service Repository for Crescent Engineering Industries – Steel Fabricators
 * Division: Crescent Roofing
 * 
 * Verified Domain: https://www.crescentconstrution.com
 * Verified Address: Vaalan Complex, 11H, Ambai Road, Veeramanikapuram, Melapalayam, Tirunelveli, Tamil Nadu 627005, India.
 * Primary Phone: +91 93603 35276
 * Additional Phones: +91 98430 60976, 0462-290 7277, 0462-290 8277
 * GSTIN: 33AAHFC8912C2ZS
 * Experience: More than 30 years
 */

export const PRODUCTION_DOMAIN = 'https://www.crescentconstrution.com';

export interface BreadcrumbItem {
  readonly name: string;
  readonly url: string;
}

export interface ServiceDetail {
  readonly slug: string;
  readonly path: string;
  readonly canonicalUrl: string;
  readonly title: string;
  readonly metaDescription: string;
  readonly h1: string;
  readonly eyebrow: string;
  readonly shortSummary: string;
  readonly leadParagraph: string;
  readonly secondaryParagraph: string;
  readonly heroImage: string;
  readonly heroImageAlt: string;
  readonly technicalSpecifications: {
    readonly label: string;
    readonly value: string;
    readonly detail: string;
  }[];
  readonly typicalApplications: string[];
  readonly engineeringFeatures: {
    readonly title: string;
    readonly description: string;
    readonly icon: string;
  }[];
  readonly relatedServiceSlugs: string[];
  readonly categoryBadge: string;
  readonly quoteCategory: string;
}

export interface PageMetadata {
  readonly title: string;
  readonly description: string;
  readonly canonicalUrl: string;
  readonly h1?: string;
  readonly breadcrumbs?: BreadcrumbItem[];
}

export const VERIFIED_BUSINESS_DATA = {
  name: 'Crescent Engineering Industries – Steel Fabricators',
  alternateName: 'Crescent Engineering Industries',
  division: 'Crescent Roofing',
  category: 'Steel fabricator',
  address: {
    streetAddress: 'Vaalan Complex, 11H, Ambai Road, Veeramanikapuram, Melapalayam',
    addressLocality: 'Tirunelveli',
    addressRegion: 'Tamil Nadu',
    postalCode: '627005',
    addressCountry: 'IN',
  },
  formattedAddress: 'Vaalan Complex, 11H, Ambai Road, Veeramanikapuram, Melapalayam, Tirunelveli, Tamil Nadu 627005, India.',
  geo: {
    latitude: 8.7139,
    longitude: 77.7567,
  },
  primaryPhone: '+91 93603 35276',
  primaryPhoneClean: '919360335276',
  secondaryPhone: '+91 98430 60976',
  secondaryPhoneClean: '919843060976',
  landlines: ['0462-290 7277', '0462-290 8277'],
  email: 'crescentfabs@gmail.com',
  gstin: '33AAHFC8912C2ZS',
  experience: 'More than 30 years',
  mapsUrl: 'https://maps.google.com/?q=Vaalan+Complex,+11H,+Ambai+Road,+Veeramanikapuram,+Melapalayam,+Tirunelveli,+Tamil+Nadu+627005',
  logoUrl: `${PRODUCTION_DOMAIN}/images/crescent-logo.svg`,
  heroImageUrl: `${PRODUCTION_DOMAIN}/images/hero-steel-hd.webp`,
  founder: {
    name: 'Er. K. Mohamed',
    role: 'Founder & Chief Structural Consultant',
    experience: 'Over 35 years in structural engineering',
  },
  genuineServiceAreas: [
    { name: 'Melapalayam', type: 'Locality' },
    { name: 'Tirunelveli', type: 'City' },
    { name: 'Palayamkottai', type: 'Locality' },
    { name: 'Tenkasi', type: 'District' },
    { name: 'Thoothukudi', type: 'District' },
    { name: 'Gangaikondan SIPCOT', type: 'Industrial Area' },
    { name: 'Nanguneri SEZ', type: 'Industrial Area' },
    { name: 'Madurai', type: 'City' },
    { name: 'Tamil Nadu', type: 'State' },
  ],
  industriesServed: [
    'Warehouses & Logistics Hubs',
    'Cold Storages & Controlled Envelopes',
    'Factory Sheds & Manufacturing Plants',
    'Supermarkets & Commercial Retail',
    'Airport Hangars & Aerospace Shelters',
    'Stock Yards & Raw Material Depots',
    'Industrial Complexes & Foundries',
    'Workshops & Engineering Yards',
    'Sports Centres & Indoor Arenas',
    'Exhibition Centres & Convention Pavilions',
    'Garment & Textile Processing Mills',
  ],
};

export const SITE_PAGES_SEO: Record<string, PageMetadata> = {
  home: {
    title: 'Steel Fabrication & Roofing in Tirunelveli | Crescent Engineering',
    description:
      'Crescent Engineering Industries specializes in heavy structural steel fabrication, PEB structures, steel bridges and industrial roofing in Tirunelveli, Tamil Nadu.',
    canonicalUrl: `${PRODUCTION_DOMAIN}/`,
    h1: 'Heavy Structural Steel Fabrication in Tirunelveli',
  },
  about: {
    title: 'About Crescent Engineering Industries | 30+ Years',
    description:
      'Discover Crescent Engineering Industries, a heavy structural steel fabrication company with over 30 years of experience in industrial fabrication and steel erections.',
    canonicalUrl: `${PRODUCTION_DOMAIN}/about`,
    h1: 'About Crescent Engineering Industries',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'About Us', url: `${PRODUCTION_DOMAIN}/about` },
    ],
  },
  contact: {
    title: 'Contact Crescent Engineering Industries | Melapalayam',
    description:
      'Contact Crescent Engineering Industries in Melapalayam, Tirunelveli, for steel fabrication, PEB structures and industrial roofing enquiries.',
    canonicalUrl: `${PRODUCTION_DOMAIN}/contact`,
    h1: 'Contact Crescent Engineering Industries',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Contact', url: `${PRODUCTION_DOMAIN}/contact` },
    ],
  },
};

export const SERVICES_CATALOG: ServiceDetail[] = [
  {
    slug: 'steel-fabrication',
    path: '/services/steel-fabrication',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/steel-fabrication`,
    title: 'Heavy Structural Steel Fabrication in Tirunelveli',
    metaDescription:
      'Explore structural steel fabrication, industrial steel buildings, mezzanine floors, steel chimneys and complex steel erection capabilities.',
    h1: 'Heavy Structural Steel Fabrication in Tirunelveli',
    eyebrow: 'HEAVY INDUSTRIAL FABRICATION // IS 800:2007',
    categoryBadge: 'HEAVY STRUCTURAL STEEL',
    quoteCategory: 'Heavy Structural Steel Fabrication',
    shortSummary:
      'High-tolerance structural steel fabrication, built-up plate girders, heavy column matrices, and certified on-site steel erection for industrial and commercial projects across Tamil Nadu.',
    leadParagraph:
      'Crescent Engineering Industries provides specialized heavy structural steel fabrication and erection services from our Melapalayam, Tirunelveli facility. With more than 30 years of stated industry experience, our engineering team executes high-load structural frameworks conforming to IS 800:2007, IS 2062, and AWS D1.1 structural welding standards.',
    secondaryParagraph:
      'From complex clear-span portal frames and crane gantry girders to multi-tier industrial structures, our fabrication processes integrate multi-axis plate profiling, submerged arc welding, and non-destructive weld testing (NDT). We handle projects across Tirunelveli, Melapalayam, Gangaikondan SIPCOT, and surrounding industrial hubs in Tamil Nadu.',
    heroImage: '/images/editorial-steel-hd.webp',
    heroImageAlt:
      'Heavy structural steel fabrication and column erection work at Crescent Engineering Industries facility in Tirunelveli',
    technicalSpecifications: [
      {
        label: 'Design Standard',
        value: 'IS 800:2007 / AWS D1.1',
        detail: 'General construction in steel code with working stress and limit state design procedures.',
      },
      {
        label: 'Steel Grade',
        value: 'IS 2062 Grade E250 / E350',
        detail: 'High tensile structural steel plates and sections from certified primary steel producers.',
      },
      {
        label: 'Fabrication Tolerance',
        value: 'Within ±1.5 mm',
        detail: 'Strict dimensional verification using calibrated electronic total stations and jigs.',
      },
      {
        label: 'Welding Process',
        value: 'Submerged Arc (SAW) & MIG',
        detail: 'Multi-pass full penetration butt welds and fillet welds with ultrasonic and magnetic particle testing.',
      },
      {
        label: 'Surface Treatment',
        value: 'SA 2.5 Blast + Epoxy Primer',
        detail: 'Abrasive blast cleaning followed by high-build zinc phosphate primer and polyurethane topcoats.',
      },
      {
        label: 'Fastener Assemblies',
        value: 'HSFG Grade 8.8 / 10.9 Bolts',
        detail: 'High-strength friction grip torque-calibrated structural bolting for seismic resilience.',
      },
    ],
    typicalApplications: [
      'Heavy factory sheds and foundry workshops',
      'Overhead EOT crane gantry systems (up to 50 MT rating)',
      'Industrial complexes and manufacturing facilities',
      'Stock yard shed enclosures and bulk material structures',
      'Steel process towers and equipment support structures',
      'Commercial supermarkets and airport hangars',
    ],
    engineeringFeatures: [
      {
        title: 'Precision CAD/BIM Detailing',
        description: 'Complete 3D structural model generation ensuring zero connection clashes before cutting steel.',
        icon: 'design_services',
      },
      {
        title: 'Heavy Crane Lift Erection',
        description: 'Certified rigging crews equipped with mobile cranes for rapid, safe on-site installation.',
        icon: 'precision_manufacturing',
      },
      {
        title: 'Non-Destructive Testing (NDT)',
        description: 'Ultrasonic (UT), radiographic, and dye-penetrant testing verifying joint integrity.',
        icon: 'verified',
      },
    ],
    relatedServiceSlugs: ['peb-structures', 'mezzanine-floors', 'steel-bridges', 'steel-chimneys'],
  },
  {
    slug: 'peb-structures',
    path: '/services/peb-structures',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/peb-structures`,
    title: 'PEB Structures & Fabrication in Tirunelveli | Crescent',
    metaDescription:
      'Explore pre-engineered building structures for warehouses, industrial facilities and commercial applications from Crescent Engineering Industries.',
    h1: 'Pre-Engineered Building (PEB) Structures in Tirunelveli',
    eyebrow: 'TURNKEY PEB SYSTEMS // MBMA & IS 800 STANDARDS',
    categoryBadge: 'PRE-ENGINEERED BUILDINGS',
    quoteCategory: 'Pre-Engineered Buildings (PEB)',
    shortSummary:
      'Custom pre-engineered building (PEB) systems featuring tapered built-up frames, continuous cold-formed purlin grids, and clear spans up to 65 meters unobstructed by intermediate columns.',
    leadParagraph:
      'Crescent Engineering Industries engineers, fabricates, and erects turnkey Pre-Engineered Steel Buildings (PEB) optimized for warehouses, industrial production units, cold storage chambers, and large-format commercial buildings. Operating from Melapalayam, Tirunelveli, we provide precision clear-span structural envelopes designed strictly in accordance with IS 800:2007 and MBMA design standards.',
    secondaryParagraph:
      'Our PEB structures utilize high-tensile tapered I-beams where stress is highest, minimizing dead load and reducing overall steel consumption by 20% to 30% compared to conventional heavy frames. Combined with Galvalume or insulated PUF roof sheeting, our PEB solutions deliver fast project turnaround, structural longevity, and maximum usable floor area.',
    heroImage: '/images/service-peb-buildings-hd.jpg',
    heroImageAlt:
      'Pre-Engineered Building PEB clear-span steel warehouse framework erected in Tirunelveli by Crescent Engineering',
    technicalSpecifications: [
      {
        label: 'Clear Span Capacity',
        value: '12m to 65m Unobstructed',
        detail: 'Column-free interior layouts optimizing material handling and forklift maneuvering.',
      },
      {
        label: 'Design Standards',
        value: 'IS 800:2007 & MBMA 2012',
        detail: 'Engineered for dead loads, live loads, seismic zones, and coastal wind speeds.',
      },
      {
        label: 'Primary Framing',
        value: 'Built-up Tapered I-Beams',
        detail: 'Fabricated from high-tensile steel plates with automated submerged arc welded webs and flanges.',
      },
      {
        label: 'Secondary Framing',
        value: 'Galvanized Z & C Purlins',
        detail: 'Cold-formed continuous overlap purlins with yield strength of 345 MPa for high lateral stiffness.',
      },
      {
        label: 'Wind Speed Rating',
        value: 'Calibrated up to 180 km/h',
        detail: 'Designed in compliance with IS 875 (Part 3) terrain and coastal cyclonic gust parameters.',
      },
      {
        label: 'Erection Schedule',
        value: '30% Faster than Conventional',
        detail: 'Pre-punched, bolt-together components assembled with high-tensile HSFG fasteners on site.',
      },
    ],
    typicalApplications: [
      'Logistics warehouses and freight distribution centres',
      'Industrial factory sheds and assembly workshops',
      'Cold storage and controlled temperature facilities',
      'Agricultural stock yards and food processing sheds',
      'Indoor sports complexes and community exhibition centres',
      'Supermarkets and large commercial showrooms',
    ],
    engineeringFeatures: [
      {
        title: 'Optimized Steel Efficiency',
        description: 'Tapered member profiles put strength exactly where bending moment is greatest.',
        icon: 'trending_up',
      },
      {
        title: 'Clear-Span Flexibility',
        description: 'Wide spans up to 65m without intermediate columns provide 100% floor layout freedom.',
        icon: 'crop_free',
      },
      {
        title: 'Weather-Tight Envelopes',
        description: 'Precision lap joints, anti-capillary grooves, and Class 3 EPDM fasteners prevent leakages.',
        icon: 'shield',
      },
    ],
    relatedServiceSlugs: ['steel-fabrication', 'industrial-roofing', 'mezzanine-floors', 'insulated-roofing'],
  },
  {
    slug: 'industrial-roofing',
    path: '/services/industrial-roofing',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/industrial-roofing`,
    title: 'Industrial Roofing Contractor in Tirunelveli | Crescent Roofing',
    metaDescription:
      'Explore industrial steel roofing, insulated roofing systems and roof structures for industrial and commercial buildings.',
    h1: 'Industrial Roofing Contractor in Tirunelveli',
    eyebrow: 'DIVISION: CRESCENT ROOFING // WEATHERPROOF SOLUTIONS',
    categoryBadge: 'INDUSTRIAL ROOFING',
    quoteCategory: 'Industrial Roofing Works',
    shortSummary:
      'Turnkey industrial steel roofing solutions including Galvalume trapezoidal profile sheets, curved self-supported roof works, skylight polycarbonate panels, and anti-corrosive multi-rib sheeting.',
    leadParagraph:
      'Crescent Roofing, the specialized operational division of Crescent Engineering Industries, operates as a premier industrial roofing contractor in Tirunelveli and Southern Tamil Nadu. Backed by over 30 years of hands-on roofing experience, we design, fabricate, and install durable roofing structures tailored for extreme monsoon precipitation, intense thermal exposure, and coastal environmental conditions.',
    secondaryParagraph:
      'Our industrial roofing systems utilize premium AZ150 zinc-aluminum alloy coated Galvalume steel, pre-painted galvanized iron (PPGI), high-impact multiwall polycarbonate daylight panels, and chemical-resistant UPVC sheets. From new industrial shed installations to legacy roof retrofits and height expansions, our roofing crew ensures leak-proof performance and thermal comfort.',
    heroImage: '/images/industrial-steel-roofing-hd.jpg',
    heroImageAlt:
      'Industrial steel roof installation and Galvalume trapezoidal profile sheeting by Crescent Roofing in Melapalayam',
    technicalSpecifications: [
      {
        label: 'Sheet Profiles',
        value: 'Trapezoidal & Curved Rib',
        detail: 'Deep 28mm to 32mm rib depth for maximum water discharge capacity during heavy downpours.',
      },
      {
        label: 'Base Substrate',
        value: '550 MPa Yield Galvalume',
        detail: '55% Aluminum, 43.4% Zinc, and 1.6% Silicon protective alloy coating (AZ150 GSM).',
      },
      {
        label: 'Weatherproofing',
        value: 'Class 3 EPDM Washers',
        detail: 'Self-drilling fasteners with ozone-resistant EPDM seals eliminating bolt-hole water ingress.',
      },
      {
        label: 'Paint Coating',
        value: 'Regular Modified Polyester (RMP)',
        detail: '20-micron topcoat over 5-micron primer with epoxy backer for UV and corrosion defense.',
      },
      {
        label: 'Daylight Integration',
        value: 'Matching Polycarbonate Sheets',
        detail: 'UV-coated matching profile translucent sheets delivering up to 80% natural glare-free light.',
      },
      {
        label: 'Ventilation & Accessories',
        value: 'Turbo Ventilators & Ridge Caps',
        detail: 'Stainless steel wind-driven ridge ventilators and continuous perimeter flashings.',
      },
    ],
    typicalApplications: [
      'Factory shed roofs and manufacturing workshops',
      'Commercial godowns and Ambasamudram Road warehouse depots',
      'Textile processing units and garment manufacturing plants',
      'Curved canopy structures for transit and loading bays',
      'Chemical fertilizer and coastal industrial facilities (UPVC)',
      'Retrofitting and replacing damaged asbestos or metal roofing',
    ],
    engineeringFeatures: [
      {
        title: 'Zero Leakage Guarantee',
        description: 'Engineered anti-capillary siphonic groove prevents water creep even during storm squalls.',
        icon: 'water_drop',
      },
      {
        title: 'High Thermal Reflection',
        description: 'Solar reflectance index (SRI) over 70 helps lower indoor warehouse temperatures naturally.',
        icon: 'thermostat',
      },
      {
        title: 'Rapid Erection & Overhaul',
        description: 'Experienced on-site sheeting teams complete large-area industrial re-roofing with zero plant shutdown.',
        icon: 'bolt',
      },
    ],
    relatedServiceSlugs: ['insulated-roofing', 'peb-structures', 'steel-fabrication', 'mezzanine-floors'],
  },
  {
    slug: 'steel-bridges',
    path: '/services/steel-bridges',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/steel-bridges`,
    title: 'Steel Bridge Fabrication | Crescent Engineering Industries',
    metaDescription:
      'Discover steel bridge fabrication capabilities from Crescent Engineering Industries for relevant industrial and infrastructure requirements.',
    h1: 'Steel Bridge Fabrication & Heavy Infrastructure',
    eyebrow: 'INFRASTRUCTURE FABRICATION // IRC COMPLIANCE',
    categoryBadge: 'STEEL BRIDGES',
    quoteCategory: 'Steel Bridge Fabrication',
    shortSummary:
      'Plate girder steel bridges, open-web truss pedestrian overbridges, inter-facility transit walkways, and heavy industrial pipe-rack bridges engineered for dynamic loads.',
    leadParagraph:
      'Crescent Engineering Industries fabricates structural steel bridges, heavy plate girders, and open-web truss walkways for industrial plants, infrastructure authorities, and private commercial facilities. With more than 30 years of engineering expertise, our Melapalayam fabrication facility produces heavy structural bridge components compliant with Indian Road Congress (IRC) and Indian Railways specifications.',
    secondaryParagraph:
      'Our capability spans composite steel-concrete bridge girders, factory pipeline bridges, conveyor gantries, and overhead pedestrian footbridges. Each bridge assembly undergoes full trial shop assembly, coordinate measurement, certified radiographic and ultrasonic weld inspection, and SA 2.5 blast cleaning before dispatch to site.',
    heroImage: '/images/service-steel-bridges-hd.jpg',
    heroImageAlt:
      'Heavy structural steel bridge truss and plate girder fabrication by Crescent Engineering Industries',
    technicalSpecifications: [
      {
        label: 'Structural Types',
        value: 'Plate Girder & Open-Web Truss',
        detail: 'Welded I-girder, box-girder, and Warren / Pratt truss designs for clear spanning capabilities.',
      },
      {
        label: 'Design Code',
        value: 'IRC:24 / IRC:6 / IS 800',
        detail: 'Engineered for live vehicular loading, dynamic impact factors, thermal expansion, and seismic forces.',
      },
      {
        label: 'Material Grade',
        value: 'IS 2062 E350 / E410 Quality C',
        detail: 'Fully killed, fine-grained structural steel tested for Charpy V-notch impact toughness at sub-zero temperatures.',
      },
      {
        label: 'Quality Assurance',
        value: '100% NDT on Critical Welds',
        detail: 'Radiographic and ultrasonic flaw detection on all tension flange butt welds.',
      },
      {
        label: 'Shop Pre-Assembly',
        value: 'Full Trial Assembly in Yard',
        detail: 'Camber verification and reaming of splice connection holes prior to blast cleaning.',
      },
      {
        label: 'Corrosion Protection',
        value: 'Multi-Coat Epoxy & Polyurethane',
        detail: 'Heavy industrial protective coating system designed for 25+ years atmospheric durability.',
      },
    ],
    typicalApplications: [
      'Industrial transit walkways connecting plant buildings',
      'Heavy pipe-rack bridges for chemical and power facilities',
      'Material handling conveyor gantries and crossing structures',
      'Pedestrian foot overbridges (FOB) across roadways and rails',
      'Approach spans and steel girder decks for industrial estates',
    ],
    engineeringFeatures: [
      {
        title: 'Trial Yard Assembly',
        description: 'Complete horizontal trial erection in our Melapalayam yard guarantees flawless site fit-up.',
        icon: 'handyman',
      },
      {
        title: 'Dynamic Load Analysis',
        description: 'Computational modeling for vibration, fatigue limits, and cyclic dynamic loading.',
        icon: 'analytics',
      },
      {
        title: 'Heavy Transport Logistics',
        description: 'Engineered section segmenting allows seamless highway transport and mobile crane placement.',
        icon: 'local_shipping',
      },
    ],
    relatedServiceSlugs: ['steel-fabrication', 'peb-structures', 'steel-chimneys'],
  },
  {
    slug: 'steel-chimneys',
    path: '/services/steel-chimneys',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/steel-chimneys`,
    title: 'Industrial Steel Chimney Fabrication | Crescent Engineering',
    metaDescription:
      'Explore industrial steel chimney fabrication, self-supporting and guyed steel stacks engineered for industrial emission and furnace plants.',
    h1: 'Industrial Steel Chimney Fabrication in Tirunelveli',
    eyebrow: 'INDUSTRIAL PROCESS STACKS // IS 6533 COMPLIANT',
    categoryBadge: 'STEEL CHIMNEYS',
    quoteCategory: 'Steel Chimney Fabrication',
    shortSummary:
      'Self-supporting, guy-wired, and multi-flue industrial steel chimneys fabricated to IS 6533 standards for boiler exhausts, industrial furnaces, kilns, and thermal exhaust applications.',
    leadParagraph:
      'Crescent Engineering Industries manufactures and erects custom industrial steel chimneys (stacks) engineered to withstand high flue gas temperatures, aerodynamic vortex shedding, and corrosive chemical exhaust. Fabricated from our Melapalayam works in Tirunelveli, our steel chimneys meet stringent IS 6533 (Part 1 & 2) structural criteria and industrial emission regulations.',
    secondaryParagraph:
      'We supply self-supporting cylindrical stacks, conical base chimneys, guyed steel stacks, and refractory-lined chimneys for manufacturing plants across Tamil Nadu. Every chimney is designed with dynamic wind oscillation analysis, aerodynamic helical strakes where required, internal ladder access, aviation obstruction lighting, and sampling ports for pollution monitoring compliance.',
    heroImage: '/images/sector-industrial-fabrication-hd.jpg',
    heroImageAlt:
      'Industrial steel stack and heavy chimney fabrication work at Crescent Engineering Industries',
    technicalSpecifications: [
      {
        label: 'Design Code',
        value: 'IS 6533:1989 (Parts 1 & 2)',
        detail: 'Code of practice for design and construction of steel chimneys (mechanical and structural aspects).',
      },
      {
        label: 'Chimney Types',
        value: 'Self-Supporting & Guy-Wired',
        detail: 'Freestanding cylindrical steel stacks and guy-supported tall configurations up to 60+ meters.',
      },
      {
        label: 'Shell Material',
        value: 'IS 2062 / Corten Steel / Stainless',
        detail: 'Atmospheric corrosion-resistant weathering steel or high-grade carbon steel plate shells.',
      },
      {
        label: 'Internal Lining',
        value: 'Refractory / Castable Insulation',
        detail: 'Thermal ceramic or refractory brick lining to protect outer shell from acidic condensation.',
      },
      {
        label: 'Aerodynamic Strakes',
        value: 'Helical Spoiler Fins',
        detail: 'Fitted on upper third to disrupt von Kármán vortex shedding and eliminate resonant wind vibration.',
      },
      {
        label: 'Accessories',
        value: 'Pollution Ports & Lightning Arrester',
        detail: 'Integrated CPCB-compliant sampling platform, safety cage ladders, and earthing conductors.',
      },
    ],
    typicalApplications: [
      'Industrial boilers and captive power generation plants',
      'Foundry cupolas and furnace exhaust discharge',
      'Textile boiler and drying plant flue gas exhausts',
      'Chemical processing plant incinerator stacks',
      'Agro-processing and biomass boiler facilities',
    ],
    engineeringFeatures: [
      {
        title: 'Vortex Oscillation Mitigation',
        description: 'Engineered helical strakes suppress wind-induced resonant vibrations and shell fatigue.',
        icon: 'air',
      },
      {
        title: 'Thermal Stress Calculation',
        description: 'Finite element analysis of temperature gradients prevents thermal shell distortion.',
        icon: 'local_fire_department',
      },
      {
        title: 'Turnkey Base Anchor Erection',
        description: 'Heavy base flange templates with foundation anchor embeds for high overturning resistance.',
        icon: 'anchor',
      },
    ],
    relatedServiceSlugs: ['steel-fabrication', 'peb-structures', 'industrial-roofing'],
  },
  {
    slug: 'mezzanine-floors',
    path: '/services/mezzanine-floors',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/mezzanine-floors`,
    title: 'Industrial Steel Mezzanine Floors | Crescent Engineering',
    metaDescription:
      'Explore heavy-duty structural steel mezzanine flooring systems, multi-tier platforms and warehouse capacity expansion in Tamil Nadu.',
    h1: 'Industrial Steel Mezzanine Floors & Platforms',
    eyebrow: 'SPACE MULTIPLICATION // STRUCTURAL STEEL FLOORS',
    categoryBadge: 'MEZZANINE FLOORS',
    quoteCategory: 'Steel Mezzanine Floors',
    shortSummary:
      'Heavy-duty industrial steel mezzanine floors, multi-tier platforms, and elevated office walkways engineered to double or triple usable warehouse space without expanding building footprint.',
    leadParagraph:
      'Crescent Engineering Industries designs, manufactures, and installs high load-bearing structural steel mezzanine floors for warehouses, manufacturing facilities, supermarkets, and industrial plants. Built directly in our Melapalayam fabrication facility, our mezzanine platforms provide cost-effective space multiplication capable of bearing heavy machinery, pallet racking, or administrative offices.',
    secondaryParagraph:
      'Each structural mezzanine platform is engineered in strict compliance with IS 800:2007, utilizing heavy universal columns, primary support beams, cold-formed secondary joists, and heavy chequered deck plate or reinforced composite concrete decking. Designed for high live loads up to 2,000 kg/m², our systems integrate industrial safety handrails, kick plates, and access staircases.',
    heroImage: '/images/service-mezzanine-floors-hd.jpg',
    heroImageAlt:
      'Heavy-duty industrial structural steel mezzanine floor platform installed in warehouse by Crescent Engineering',
    technicalSpecifications: [
      {
        label: 'Load Capacity',
        value: '500 to 2,000 kg/m²',
        detail: 'Engineered for heavy pallet storage, industrial equipment loads, and forklift movement.',
      },
      {
        label: 'Structural Framing',
        value: 'Heavy Universal Beams & Columns',
        detail: 'Hot-rolled ISMB/ISMC sections or built-up structural steel with high moment-resistant connections.',
      },
      {
        label: 'Decking Options',
        value: 'Chequered Plate / Composite Deck',
        detail: 'Anti-slip steel diamond plate, galvanized profile steel deck with concrete slab, or heavy grating.',
      },
      {
        label: 'Column Grid Spacing',
        value: 'Custom Spans 4m to 10m',
        detail: 'Wide column spacing underneath to maintain unobstructed ground floor logistics workflow.',
      },
      {
        label: 'Safety Integration',
        value: 'Compliant Handrails & Kick Plates',
        detail: 'Continuous industrial safety railings, toe guards, and pallet loading safety swing gates.',
      },
      {
        label: 'Modular Reconfiguration',
        value: 'Bolted Splice Engineering',
        detail: 'Fully bolted design enables future expansion, relocation, or structural modification.',
      },
    ],
    typicalApplications: [
      'Logistics warehouse order picking and packing platforms',
      'Manufacturing plant elevated maintenance walkways',
      'In-plant modular supervisory offices and meeting suites',
      'Automotive spare parts storage and multi-tier shelving',
      'Supermarket and retail inventory back-room storage',
      'Equipment support platforms for compressors and chillers',
    ],
    engineeringFeatures: [
      {
        title: 'Zero Footprint Expansion',
        description: 'Utilizes vertical warehouse headroom to double floor space at a fraction of new construction cost.',
        icon: 'open_in_full',
      },
      {
        title: 'Heavy Dynamic Load Rating',
        description: 'Rigid deflection standards (L/350 to L/500) eliminate floor vibration under forklift operations.',
        icon: 'fitness_center',
      },
      {
        title: 'Integrated Access Stairs & Gates',
        description: 'Complete with ergonomic staircases, pallet safety pivot gates, and goods-lift interface framing.',
        icon: 'stairs',
      },
    ],
    relatedServiceSlugs: ['steel-fabrication', 'peb-structures', 'industrial-roofing'],
  },
  {
    slug: 'insulated-roofing',
    path: '/services/insulated-roofing',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/insulated-roofing`,
    title: 'Insulated Roofing Systems & PUF Panels | Crescent Roofing',
    metaDescription:
      'Explore insulated roofing systems, PUF sandwich panels and thermal roofing envelopes for warehouses, cold storages and industrial buildings.',
    h1: 'Insulated Roofing Systems & PUF Panels in Tirunelveli',
    eyebrow: 'THERMAL ROOFING // DIVISION: CRESCENT ROOFING',
    categoryBadge: 'INSULATED ROOFING',
    quoteCategory: 'Insulated Roofing & PUF Panels',
    shortSummary:
      'High-performance insulated polyurethane foam (PUF) composite sandwich panels and thermal roofing envelopes delivering exceptional temperature control, energy savings, and condensation defense.',
    leadParagraph:
      'Crescent Roofing, the operational division of Crescent Engineering Industries, delivers turnkey insulated roofing systems and PUF sandwich panel envelopes for climate-sensitive facilities across Tirunelveli and Tamil Nadu. With over 30 years of industrial roofing experience, we engineer thermal envelopes for cold storages, pharmaceutical plants, food processing facilities, and high-comfort industrial factory sheds.',
    secondaryParagraph:
      'Our insulated roofing systems feature continuous injection-molded polyurethane (PUF) or polyisocyanurate (PIR) cores encapsulated between pre-painted Galvalume or galvanized steel facings with interlocking tongue-and-groove joint matrices. With thermal conductivity as low as 0.022 W/m.K, our insulated panels reduce air-conditioning loads by up to 40% and completely prevent underside condensation during heavy rains.',
    heroImage: '/images/service-puf-panel-hd.jpg',
    heroImageAlt:
      'Insulated PUF sandwich panel roofing system and thermal wall cladding installation by Crescent Roofing',
    technicalSpecifications: [
      {
        label: 'Core Insulation',
        value: 'High-Density PUF / PIR Foam',
        detail: 'CFC/HCFC-free polyurethane foam with closed-cell content exceeding 95% and density of 40 ± 2 kg/m³.',
      },
      {
        label: 'Thermal Conductivity',
        value: 'k = 0.020 to 0.024 W/m.K',
        detail: 'Ultra-low thermal transfer delivering superior energy insulation compared to glass wool or rock wool.',
      },
      {
        label: 'Facing Substrates',
        value: 'PPGL / PPGI 0.45mm to 0.60mm',
        detail: 'Alu-Zinc coated steel with anti-microbial paint or food-grade Plastisol finishes.',
      },
      {
        label: 'Joint Profile',
        value: 'Tongue & Groove Interlock',
        detail: 'Concealed fastener profile with weather-tight vapor seal preventing thermal bridges and air leakage.',
      },
      {
        label: 'Fire Performance',
        value: 'Self-Extinguishing B1/B2 Grade',
        detail: 'Tested fire-retardant foam formulation compliant with industrial safety standards.',
      },
      {
        label: 'Panel Thicknesses',
        value: '30mm, 50mm, 80mm, 100mm, 150mm',
        detail: 'Calibrated for ambient air-conditioned factory sheds through to -40°C deep cold storage chambers.',
      },
    ],
    typicalApplications: [
      'Controlled atmosphere cold storages and banana ripening chambers',
      'Food processing and dairy production facilities',
      'Pharmaceutical clean rooms and laboratories',
      'Air-conditioned garment factories and spinning mills',
      'Commercial supermarkets and cold retail rooms',
      'Industrial control rooms and high-temperature furnace control booths',
    ],
    engineeringFeatures: [
      {
        title: 'Thermal Cost Savings',
        description: 'Reduces HVAC operating costs significantly, delivering rapid return on investment.',
        icon: 'savings',
      },
      {
        title: 'Condensation Elimination',
        description: 'Continuous thermal break prevents droplet formation on the building interior.',
        icon: 'dry',
      },
      {
        title: 'Acoustic Attenuation',
        description: 'Dampens high-decibel rainfall drumming noise, creating a quiet factory floor environment.',
        icon: 'volume_off',
      },
    ],
    relatedServiceSlugs: ['industrial-roofing', 'peb-structures', 'steel-fabrication'],
  },
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return SERVICES_CATALOG.find((s) => s.slug === slug);
};
