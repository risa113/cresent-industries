/**
 * Static Page HTML Generator for Crescent Engineering Industries
 * 
 * Generates pre-rendered, SEO-optimized HTML files in dist/ for all canonical routes.
 * Ensures Googlebot and other search engine crawlers receive complete, semantic,
 * indexable HTML with exact titles, meta descriptions, canonical URLs, and JSON-LD schema
 * even without JavaScript execution.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const PRODUCTION_DOMAIN = 'https://www.crescentconstrution.com';

const VERIFIED_BUSINESS_DATA = {
  name: 'Crescent Engineering Industries – Steel Fabricators',
  alternateName: 'Crescent Engineering Industries',
  division: 'Crescent Roofing',
  category: 'Steel fabricator',
  formattedAddress: 'Vaalan Complex, 11H, Ambai Road, Veeramanikapuram, Melapalayam, Tirunelveli, Tamil Nadu 627005, India.',
  primaryPhone: '+91 93603 35276',
  secondaryPhone: '+91 98430 60976',
  landlines: '0462-290 7277 / 0462-290 8277',
  email: 'crescentfabs@gmail.com',
  gstin: '33AAHFC8912C2ZS',
  experience: 'More than 30 years',
  mapsUrl: 'https://maps.google.com/?q=Vaalan+Complex,+11H,+Ambai+Road,+Veeramanikapuram,+Melapalayam,+Tirunelveli,+Tamil+Nadu+627005',
};

const PAGES = [
  {
    path: '',
    canonicalUrl: `${PRODUCTION_DOMAIN}/`,
    title: 'Steel Fabrication & Roofing in Tirunelveli | Crescent Engineering',
    description: 'Crescent Engineering Industries specializes in heavy structural steel fabrication, PEB structures, steel bridges and industrial roofing in Tirunelveli, Tamil Nadu.',
    h1: 'Heavy Structural Steel Fabrication in Tirunelveli',
    category: 'HOMEPAGE',
    leadText: 'Crescent Engineering Industries provides heavy structural steel fabrication, pre-engineered building structures, steel erection and industrial roofing solutions from Melapalayam, Tirunelveli, Tamil Nadu. With more than 30 years of stated industry experience, the company serves industrial and commercial requirements across its relevant service areas.',
    breadcrumbs: [{ name: 'Home', url: `${PRODUCTION_DOMAIN}/` }],
    schemaType: 'home'
  },
  {
    path: 'about',
    canonicalUrl: `${PRODUCTION_DOMAIN}/about`,
    title: 'About Crescent Engineering Industries | 30+ Years',
    description: 'Discover Crescent Engineering Industries, a heavy structural steel fabrication company with over 30 years of experience in industrial fabrication and steel erections.',
    h1: 'About Crescent Engineering Industries',
    category: 'ABOUT US',
    leadText: 'Discover Crescent Engineering Industries, a heavy structural steel fabrication company with over 30 years of experience in industrial fabrication and steel erections based in Melapalayam, Tirunelveli.',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'About Us', url: `${PRODUCTION_DOMAIN}/about` }
    ],
    schemaType: 'about'
  },
  {
    path: 'contact',
    canonicalUrl: `${PRODUCTION_DOMAIN}/contact`,
    title: 'Contact Crescent Engineering Industries | Melapalayam',
    description: 'Contact Crescent Engineering Industries in Melapalayam, Tirunelveli, for steel fabrication, PEB structures and industrial roofing enquiries.',
    h1: 'Contact Crescent Engineering Industries',
    category: 'CONTACT',
    leadText: 'Contact Crescent Engineering Industries in Melapalayam, Tirunelveli, for steel fabrication, PEB structures and industrial roofing enquiries. Located at Vaalan Complex, Ambai Road, Melapalayam.',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Contact', url: `${PRODUCTION_DOMAIN}/contact` }
    ],
    schemaType: 'contact'
  },
  {
    path: 'services/steel-fabrication',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/steel-fabrication`,
    title: 'Heavy Structural Steel Fabrication in Tirunelveli',
    description: 'Explore structural steel fabrication, industrial steel buildings, mezzanine floors, steel chimneys and complex steel erection capabilities.',
    h1: 'Heavy Structural Steel Fabrication in Tirunelveli',
    category: 'HEAVY STRUCTURAL STEEL',
    leadText: 'High-tolerance structural steel fabrication, built-up plate girders, heavy column matrices, and certified on-site steel erection for industrial and commercial projects across Tamil Nadu.',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Services', url: `${PRODUCTION_DOMAIN}/#services` },
      { name: 'Heavy Structural Steel Fabrication', url: `${PRODUCTION_DOMAIN}/services/steel-fabrication` }
    ],
    schemaType: 'service'
  },
  {
    path: 'services/peb-structures',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/peb-structures`,
    title: 'PEB Structures & Fabrication in Tirunelveli | Crescent',
    description: 'Explore pre-engineered building structures for warehouses, industrial facilities and commercial applications from Crescent Engineering Industries.',
    h1: 'Pre-Engineered Building (PEB) Structures in Tirunelveli',
    category: 'PRE-ENGINEERED BUILDINGS',
    leadText: 'Explore pre-engineered building structures for warehouses, industrial facilities and commercial applications from Crescent Engineering Industries with spans up to 65m unobstructed.',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Services', url: `${PRODUCTION_DOMAIN}/#services` },
      { name: 'PEB Structures & Fabrication', url: `${PRODUCTION_DOMAIN}/services/peb-structures` }
    ],
    schemaType: 'service'
  },
  {
    path: 'services/industrial-roofing',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/industrial-roofing`,
    title: 'Industrial Roofing Contractor in Tirunelveli | Crescent Roofing',
    description: 'Explore industrial steel roofing, insulated roofing systems and roof structures for industrial and commercial buildings.',
    h1: 'Industrial Roofing Contractor in Tirunelveli',
    category: 'INDUSTRIAL ROOFING',
    leadText: 'Explore industrial steel roofing, insulated roofing systems and roof structures for industrial and commercial buildings from Crescent Roofing, Melapalayam.',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Services', url: `${PRODUCTION_DOMAIN}/#services` },
      { name: 'Industrial Roofing Contractor', url: `${PRODUCTION_DOMAIN}/services/industrial-roofing` }
    ],
    schemaType: 'service'
  },
  {
    path: 'services/steel-bridges',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/steel-bridges`,
    title: 'Steel Bridge Fabrication | Crescent Engineering Industries',
    description: 'Discover steel bridge fabrication capabilities from Crescent Engineering Industries for relevant industrial and infrastructure requirements.',
    h1: 'Steel Bridge Fabrication & Heavy Infrastructure',
    category: 'STEEL BRIDGES',
    leadText: 'Discover steel bridge fabrication capabilities from Crescent Engineering Industries for relevant industrial and infrastructure requirements conforming to IRC standards.',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Services', url: `${PRODUCTION_DOMAIN}/#services` },
      { name: 'Steel Bridge Fabrication', url: `${PRODUCTION_DOMAIN}/services/steel-bridges` }
    ],
    schemaType: 'service'
  },
  {
    path: 'services/steel-chimneys',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/steel-chimneys`,
    title: 'Industrial Steel Chimney Fabrication | Crescent Engineering',
    description: 'Explore industrial steel chimney fabrication, self-supporting and guyed steel stacks engineered for industrial emission and furnace plants.',
    h1: 'Industrial Steel Chimney Fabrication in Tirunelveli',
    category: 'STEEL CHIMNEYS',
    leadText: 'Explore industrial steel chimney fabrication, self-supporting and guyed steel stacks engineered for industrial emission, boiler plants, and furnace applications.',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Services', url: `${PRODUCTION_DOMAIN}/#services` },
      { name: 'Industrial Steel Chimney Fabrication', url: `${PRODUCTION_DOMAIN}/services/steel-chimneys` }
    ],
    schemaType: 'service'
  },
  {
    path: 'services/mezzanine-floors',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/mezzanine-floors`,
    title: 'Industrial Steel Mezzanine Floors | Crescent Engineering',
    description: 'Explore heavy-duty structural steel mezzanine flooring systems, multi-tier platforms and warehouse capacity expansion in Tamil Nadu.',
    h1: 'Industrial Steel Mezzanine Floors & Platforms',
    category: 'MEZZANINE FLOORS',
    leadText: 'Explore heavy-duty structural steel mezzanine flooring systems, multi-tier platforms and warehouse capacity expansion engineered for loads up to 2,000 kg/m².',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Services', url: `${PRODUCTION_DOMAIN}/#services` },
      { name: 'Industrial Steel Mezzanine Floors', url: `${PRODUCTION_DOMAIN}/services/mezzanine-floors` }
    ],
    schemaType: 'service'
  },
  {
    path: 'services/insulated-roofing',
    canonicalUrl: `${PRODUCTION_DOMAIN}/services/insulated-roofing`,
    title: 'Insulated Roofing Systems & PUF Panels | Crescent Roofing',
    description: 'Explore insulated roofing systems, PUF sandwich panels and thermal roofing envelopes for warehouses, cold storages and industrial buildings.',
    h1: 'Insulated Roofing Systems & PUF Panels in Tirunelveli',
    category: 'INSULATED ROOFING',
    leadText: 'Explore insulated roofing systems, PUF sandwich panels and thermal roofing envelopes for warehouses, cold storages and climate-controlled industrial buildings.',
    breadcrumbs: [
      { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
      { name: 'Services', url: `${PRODUCTION_DOMAIN}/#services` },
      { name: 'Insulated Roofing Systems & PUF Panels', url: `${PRODUCTION_DOMAIN}/services/insulated-roofing` }
    ],
    schemaType: 'service'
  }
];

function generateJsonLd(page) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Organization'],
      '@id': `${PRODUCTION_DOMAIN}/#organization`,
      name: VERIFIED_BUSINESS_DATA.name,
      alternateName: [
        VERIFIED_BUSINESS_DATA.alternateName,
        VERIFIED_BUSINESS_DATA.division,
        'Crescent Steel Fabricators'
      ],
      url: PRODUCTION_DOMAIN,
      logo: `${PRODUCTION_DOMAIN}/images/crescent-logo.svg`,
      image: `${PRODUCTION_DOMAIN}/images/hero-steel-hd.webp`,
      description: 'Crescent Engineering Industries specializes in heavy structural steel fabrication, PEB structures, steel bridges and industrial roofing in Tirunelveli, Tamil Nadu.',
      telephone: VERIFIED_BUSINESS_DATA.primaryPhone,
      email: VERIFIED_BUSINESS_DATA.email,
      taxID: VERIFIED_BUSINESS_DATA.gstin,
      priceRange: '₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vaalan Complex, 11H, Ambai Road, Veeramanikapuram, Melapalayam',
        addressLocality: 'Tirunelveli',
        addressRegion: 'Tamil Nadu',
        postalCode: '627005',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 8.7139,
        longitude: 77.7567
      },
      hasMap: VERIFIED_BUSINESS_DATA.mapsUrl,
      founder: {
        '@type': 'Person',
        name: 'Er. K. Mohamed',
        jobTitle: 'Founder & Chief Structural Consultant',
        image: `${PRODUCTION_DOMAIN}/images/founder-er-k-mohamed.jpg`
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Melapalayam' },
        { '@type': 'AdministrativeArea', name: 'Tirunelveli' },
        { '@type': 'AdministrativeArea', name: 'Palayamkottai' },
        { '@type': 'AdministrativeArea', name: 'Tenkasi' },
        { '@type': 'AdministrativeArea', name: 'Thoothukudi' },
        { '@type': 'AdministrativeArea', name: 'Gangaikondan SIPCOT' },
        { '@type': 'AdministrativeArea', name: 'Nanguneri SEZ' },
        { '@type': 'AdministrativeArea', name: 'Madurai' },
        { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:30'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${PRODUCTION_DOMAIN}/#website`,
      url: PRODUCTION_DOMAIN,
      name: VERIFIED_BUSINESS_DATA.name,
      publisher: {
        '@id': `${PRODUCTION_DOMAIN}/#organization`
      }
    }
  ];

  if (page.breadcrumbs && page.breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: page.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url
      }))
    });
  }

  if (page.schemaType === 'service') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${page.canonicalUrl}#service`,
      name: page.h1,
      serviceType: page.category,
      description: page.leadText,
      provider: {
        '@id': `${PRODUCTION_DOMAIN}/#organization`
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Melapalayam' },
        { '@type': 'AdministrativeArea', name: 'Tirunelveli' },
        { '@type': 'AdministrativeArea', name: 'Tamil Nadu' }
      ],
      url: page.canonicalUrl
    });
  }

  return JSON.stringify(schemas, null, 2);
}

function generatePreRenderedHtml(page) {
  return `
    <header style="padding: 24px; border-bottom: 1px solid #e2e8f0; max-width: 1440px; margin: 0 auto;">
      <nav aria-label="Breadcrumbs" style="font-size: 13px; color: #64748b; margin-bottom: 16px;">
        ${page.breadcrumbs.map(b => `<a href="${b.url}" style="color: #64748b; text-decoration: none;">${b.name}</a>`).join(' &gt; ')}
      </nav>
      <div style="font-family: monospace; font-size: 12px; font-weight: bold; color: #d97706; text-transform: uppercase; margin-bottom: 8px;">
        ${page.category} // CRESCENT ENGINEERING INDUSTRIES
      </div>
      <h1 style="font-size: 36px; font-weight: 800; color: #020617; line-height: 1.15; margin: 0 0 16px 0;">
        ${page.h1}
      </h1>
      <p style="font-size: 18px; color: #334155; line-height: 1.6; max-width: 800px; margin: 0;">
        ${page.leadText}
      </p>
      <div style="margin-top: 24px;">
        <a href="tel:${VERIFIED_BUSINESS_DATA.primaryPhone}" style="display: inline-block; background: #020617; color: #ffffff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 13px; margin-right: 12px;">
          Call ${VERIFIED_BUSINESS_DATA.primaryPhone}
        </a>
        <a href="${VERIFIED_BUSINESS_DATA.mapsUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #f1f5f9; color: #0f172a; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 13px; border: 1px solid #cbd5e1;">
          Get Directions (Melapalayam Works)
        </a>
      </div>
    </header>
    <main style="padding: 32px 24px; max-width: 1440px; margin: 0 auto; font-family: sans-serif; color: #334155;">
      <section style="margin-bottom: 32px;">
        <h2 style="font-size: 24px; color: #0f172a; margin-bottom: 12px;">Verified Workshop &amp; Head Office</h2>
        <p style="line-height: 1.6;">
          <strong>Business Name:</strong> ${VERIFIED_BUSINESS_DATA.name}<br />
          <strong>Division:</strong> ${VERIFIED_BUSINESS_DATA.division}<br />
          <strong>Category:</strong> ${VERIFIED_BUSINESS_DATA.category}<br />
          <strong>Registered Address:</strong> ${VERIFIED_BUSINESS_DATA.formattedAddress}<br />
          <strong>Phone:</strong> ${VERIFIED_BUSINESS_DATA.primaryPhone} / ${VERIFIED_BUSINESS_DATA.secondaryPhone}<br />
          <strong>Landlines:</strong> ${VERIFIED_BUSINESS_DATA.landlines}<br />
          <strong>Email:</strong> ${VERIFIED_BUSINESS_DATA.email}<br />
          <strong>GSTIN:</strong> ${VERIFIED_BUSINESS_DATA.gstin}<br />
          <strong>Stated Experience:</strong> ${VERIFIED_BUSINESS_DATA.experience}
        </p>
      </section>
      <section style="margin-bottom: 32px;">
        <h2 style="font-size: 24px; color: #0f172a; margin-bottom: 12px;">Services Directory</h2>
        <ul style="line-height: 1.8;">
          <li><a href="${PRODUCTION_DOMAIN}/services/steel-fabrication" style="color: #d97706;">Heavy Structural Steel Fabrication</a></li>
          <li><a href="${PRODUCTION_DOMAIN}/services/peb-structures" style="color: #d97706;">Pre-Engineered Buildings (PEB)</a></li>
          <li><a href="${PRODUCTION_DOMAIN}/services/industrial-roofing" style="color: #d97706;">Industrial Roofing Works</a></li>
          <li><a href="${PRODUCTION_DOMAIN}/services/steel-bridges" style="color: #d97706;">Steel Bridge Fabrication</a></li>
          <li><a href="${PRODUCTION_DOMAIN}/services/steel-chimneys" style="color: #d97706;">Industrial Steel Chimneys</a></li>
          <li><a href="${PRODUCTION_DOMAIN}/services/mezzanine-floors" style="color: #d97706;">Steel Mezzanine Floors</a></li>
          <li><a href="${PRODUCTION_DOMAIN}/services/insulated-roofing" style="color: #d97706;">Insulated Roofing &amp; PUF Panels</a></li>
        </ul>
      </section>
    </main>
  `;
}

async function run() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  console.log(`Generating ${PAGES.length} static SEO HTML pages in dist/...`);

  for (const page of PAGES) {
    let html = baseHtml;

    // 1. Replace Title
    html = html.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`);

    // 2. Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${page.description}" />`
    );

    // 3. Replace Canonical Link
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${page.canonicalUrl}" />`
    );

    // 4. Replace OG Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${page.canonicalUrl}" />`
    );

    // 5. Replace Twitter Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${page.description}" />`
    );

    // 6. Replace JSON-LD Schema
    const jsonLdContent = generateJsonLd(page);
    html = html.replace(
      /<script\s+type="application\/ld\+json">.*?<\/script>/s,
      `<script type="application/ld+json">\n${jsonLdContent}\n    </script>`
    );

    // 7. Inject Pre-rendered Semantic HTML into #root for zero-JS crawlers
    const preRendered = generatePreRenderedHtml(page);
    html = html.replace('<div id="root"></div>', `<div id="root">${preRendered}</div>`);

    // Determine target output path
    const targetDir = page.path ? path.join(distDir, page.path) : distDir;
    fs.mkdirSync(targetDir, { recursive: true });
    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');

    console.log(`✓ Generated: ${targetFile} -> ${page.canonicalUrl}`);
  }

  // Also create a 404.html from root index.html for static host fallback
  const notFoundTarget = path.join(distDir, '404.html');
  fs.copyFileSync(path.join(distDir, 'index.html'), notFoundTarget);
  console.log('✓ Generated: dist/404.html (SPA Fallback)');

  console.log('All static SEO pages successfully generated!');
}

run().catch((err) => {
  console.error('Error generating static pages:', err);
  process.exit(1);
});
