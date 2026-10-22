/**
 * SEO Management Helper
 * Updates DOM title, meta description, canonical link, Open Graph, Twitter cards,
 * and JSON-LD structured data dynamically on route changes.
 */

import { PRODUCTION_DOMAIN, VERIFIED_BUSINESS_DATA, ServiceDetail, BreadcrumbItem } from '../data/seoData';

export interface SEOUpdateOptions {
  title: string;
  description: string;
  canonicalPath: string; // e.g. '/', '/about', '/services/steel-fabrication'
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  service?: ServiceDetail;
}

export const updateSEOTags = (options: SEOUpdateOptions) => {
  if (typeof document === 'undefined') return;

  const canonicalUrl = `${PRODUCTION_DOMAIN}${options.canonicalPath.startsWith('/') ? options.canonicalPath : `/${options.canonicalPath}`}`;
  const ogImage = options.ogImage || `${PRODUCTION_DOMAIN}/images/hero-steel-hd.webp`;

  // 1. Update Document Title
  document.title = options.title;

  // 2. Update or Create Meta Description
  updateMetaTag('name', 'description', options.description);

  // 3. Update or Create Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 4. Update Open Graph Tags
  updateMetaTag('property', 'og:title', options.title);
  updateMetaTag('property', 'og:description', options.description);
  updateMetaTag('property', 'og:url', canonicalUrl);
  updateMetaTag('property', 'og:image', ogImage);
  updateMetaTag('property', 'og:site_name', VERIFIED_BUSINESS_DATA.name);

  // 5. Update Twitter Tags
  updateMetaTag('name', 'twitter:title', options.title);
  updateMetaTag('name', 'twitter:description', options.description);
  updateMetaTag('name', 'twitter:image', ogImage);

  // 6. Update JSON-LD Structured Data
  updateJsonLdSchema(options, canonicalUrl);
};

const updateMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateJsonLdSchema = (options: SEOUpdateOptions, _canonicalUrl?: string) => {
  // Remove existing dynamic JSON-LD script if present
  const existingDynamicScript = document.getElementById('dynamic-json-ld');
  if (existingDynamicScript) {
    existingDynamicScript.remove();
  }

  const schemas: any[] = [];

  // LocalBusiness & Organization Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    '@id': `${PRODUCTION_DOMAIN}/#organization`,
    name: VERIFIED_BUSINESS_DATA.name,
    alternateName: [
      VERIFIED_BUSINESS_DATA.alternateName,
      VERIFIED_BUSINESS_DATA.division,
      'Crescent Steel Fabricators',
    ],
    url: PRODUCTION_DOMAIN,
    logo: VERIFIED_BUSINESS_DATA.logoUrl,
    image: VERIFIED_BUSINESS_DATA.heroImageUrl,
    description:
      'Crescent Engineering Industries specializes in heavy structural steel fabrication, pre-engineered buildings (PEB), steel bridges, industrial chimneys, mezzanine floors and industrial roofing in Melapalayam, Tirunelveli, Tamil Nadu.',
    telephone: VERIFIED_BUSINESS_DATA.primaryPhone,
    email: VERIFIED_BUSINESS_DATA.email,
    taxID: VERIFIED_BUSINESS_DATA.gstin,
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: VERIFIED_BUSINESS_DATA.address.streetAddress,
      addressLocality: VERIFIED_BUSINESS_DATA.address.addressLocality,
      addressRegion: VERIFIED_BUSINESS_DATA.address.addressRegion,
      postalCode: VERIFIED_BUSINESS_DATA.address.postalCode,
      addressCountry: VERIFIED_BUSINESS_DATA.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: VERIFIED_BUSINESS_DATA.geo.latitude,
      longitude: VERIFIED_BUSINESS_DATA.geo.longitude,
    },
    hasMap: VERIFIED_BUSINESS_DATA.mapsUrl,
    founder: {
      '@type': 'Person',
      name: VERIFIED_BUSINESS_DATA.founder.name,
      jobTitle: VERIFIED_BUSINESS_DATA.founder.role,
    },
    areaServed: VERIFIED_BUSINESS_DATA.genuineServiceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area.name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:30',
      },
    ],
  };

  schemas.push(localBusinessSchema);

  // WebSite Schema
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${PRODUCTION_DOMAIN}/#website`,
    url: PRODUCTION_DOMAIN,
    name: VERIFIED_BUSINESS_DATA.name,
    publisher: {
      '@id': `${PRODUCTION_DOMAIN}/#organization`,
    },
  };
  schemas.push(webSiteSchema);

  // Breadcrumbs Schema if provided
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: options.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
    schemas.push(breadcrumbSchema);
  }

  // Service Schema if service detail provided
  if (options.service) {
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${options.service.canonicalUrl}#service`,
      name: options.service.h1,
      serviceType: options.service.categoryBadge,
      description: options.service.shortSummary,
      provider: {
        '@id': `${PRODUCTION_DOMAIN}/#organization`,
      },
      areaServed: VERIFIED_BUSINESS_DATA.genuineServiceAreas.map((area) => ({
        '@type': 'AdministrativeArea',
        name: area.name,
      })),
      url: options.service.canonicalUrl,
    };
    schemas.push(serviceSchema);
  }

  // Inject updated script element
  const scriptElement = document.createElement('script');
  scriptElement.id = 'dynamic-json-ld';
  scriptElement.type = 'application/ld+json';
  scriptElement.textContent = JSON.stringify(schemas, null, 2);
  document.head.appendChild(scriptElement);
};
