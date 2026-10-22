import React, { useEffect } from 'react';
import { ServiceDetail, getServiceBySlug, SERVICES_CATALOG, VERIFIED_BUSINESS_DATA, PRODUCTION_DOMAIN } from '../data/seoData';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/mockData';
import { useRouter } from '../context/RouterContext';
import { updateSEOTags } from '../utils/seoHelper';
import {
  ArrowRight,
  Phone,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  Layers,
  Building,
  Navigation,
} from 'lucide-react';

export interface ServiceDetailPageProps {
  readonly serviceSlug: string;
  readonly onRequestQuote: (category?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceSlug,
  onRequestQuote,
}) => {
  const { navigate } = useRouter();
  const service = getServiceBySlug(serviceSlug) || SERVICES_CATALOG[0];

  useEffect(() => {
    updateSEOTags({
      title: service.title,
      description: service.metaDescription,
      canonicalPath: service.path,
      ogImage: `${PRODUCTION_DOMAIN}${service.heroImage}`,
      breadcrumbs: [
        { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
        { name: 'Services', url: `${PRODUCTION_DOMAIN}/#services` },
        { name: service.categoryBadge, url: service.canonicalUrl },
      ],
      service,
    });
  }, [service]);

  // Related services
  const relatedServices = service.relatedServiceSlugs
    .map((slug) => SERVICES_CATALOG.find((s) => s.slug === slug))
    .filter((s): s is ServiceDetail => Boolean(s));

  return (
    <article className="min-h-screen bg-white text-slate-900 pt-6 pb-20 select-none">
      {/* 1. Breadcrumbs Strip */}
      <nav aria-label="Breadcrumb" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-3 border-b border-slate-200">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs font-mono text-slate-500">
          <li>
            <button
              onClick={() => navigate('/')}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Home
            </button>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <li>
            <button
              onClick={() => navigate('#services')}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Services
            </button>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <li className="text-slate-900 font-bold truncate max-w-[240px] sm:max-w-none">
            {service.categoryBadge}
          </li>
        </ol>
      </nav>

      {/* 2. Page Header / Hero */}
      <header className="relative bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 font-mono text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>{service.eyebrow}</span>
            </div>

            {/* Clear Primary H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.12]">
              {service.h1}
            </h1>

            <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed pt-2">
              {service.leadParagraph}
            </p>

            {/* Fast Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onRequestQuote(service.quoteCategory)}
                className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 active:scale-95 flex items-center gap-2"
              >
                <span>Request {service.categoryBadge} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_CONTACT.primaryPhone}`}
                className="px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_CONTACT.primaryPhone}</span>
              </a>

              <a
                href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, `Hello Crescent Engineering, I would like to consult regarding ${service.categoryBadge} requirements.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Main Content Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Left Column (Content, Specs, Applications) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Authentic Hero Photograph */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  width="1200"
                  height="675"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-mono text-[11px]">
                  <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded">
                    AUTHENTIC PROJECT WORK
                  </span>
                  <span className="text-slate-300 hidden sm:inline">
                    MELAPALAYAM &amp; TIRUNELVELI WORKS
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Overview & Standards */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Engineering Specification &amp; Execution Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {service.secondaryParagraph}
              </p>
            </section>

            {/* Technical Specifications Table */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                  Technical Specifications &amp; Material Compliance
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.technicalSpecifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 block">
                      {spec.label}
                    </span>
                    <div className="text-sm font-mono font-bold text-slate-950">
                      {spec.value}
                    </div>
                    <p className="text-xs text-slate-600 leading-normal pt-1">
                      {spec.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Typical Applications */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                  Typical Industrial &amp; Commercial Applications
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Our {service.categoryBadge.toLowerCase()} solutions are deployed across key industrial corridors in Tamil Nadu:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.typicalApplications.map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{app}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Engineering Features Highlights */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                Key Engineering Advantages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.engineeringFeatures.map((feat, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="material-symbols-outlined text-2xl text-amber-600">
                      {feat.icon}
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 font-display">{feat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Services Navigation */}
            {relatedServices.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-slate-200">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                  Related Engineering Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedServices.map((rel) => (
                    <button
                      key={rel.slug}
                      onClick={() => navigate(rel.path)}
                      className="p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-md transition-all text-left flex items-center justify-between group cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-amber-700 font-bold uppercase tracking-wider block">
                          SERVICE
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                          {rel.h1}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Local Authority & Contact Card */}
          <aside className="lg:col-span-4 space-y-6 sticky top-24">
            {/* Project RFP CTA Box */}
            <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-50/60 to-white p-6 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-amber-700 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>DIRECT RFP &amp; ESTIMATE</span>
              </div>
              <h3 className="text-xl font-bold text-slate-950 font-display">
                Request a Detailed Specification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consult with our structural engineering team for {service.categoryBadge} steel schedules, wind load tolerances, and turnkey fabrication pricing.
              </p>
              <button
                type="button"
                onClick={() => onRequestQuote(service.quoteCategory)}
                className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm text-center"
              >
                Get Structural Estimate
              </button>
            </div>

            {/* Verified Business Information Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4 text-xs font-mono text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-slate-900 uppercase">
                  VERIFIED MELAPALAYAM WORKS
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                  BUSINESS ENTITY
                </span>
                <span className="text-slate-900 font-bold block">{VERIFIED_BUSINESS_DATA.name}</span>
                <span className="text-slate-600 text-[11px] block">{VERIFIED_BUSINESS_DATA.division}</span>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                  OFFICE &amp; WORKS ADDRESS
                </span>
                <p className="text-slate-900 text-xs leading-relaxed">
                  {VERIFIED_BUSINESS_DATA.formattedAddress}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                  CONTACT CHANNELS
                </span>
                <div>
                  <span className="text-slate-500">Primary Mobile: </span>
                  <a href={`tel:${COMPANY_CONTACT.primaryPhone}`} className="text-slate-900 font-bold hover:text-amber-600">
                    {COMPANY_CONTACT.primaryPhone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500">Additional: </span>
                  <a href={`tel:${COMPANY_CONTACT.mobile2}`} className="text-slate-900 font-semibold hover:text-amber-600">
                    {COMPANY_CONTACT.mobile2}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500">Landlines: </span>
                  <span className="text-slate-800">{COMPANY_CONTACT.landlines}</span>
                </div>
                <div>
                  <span className="text-slate-500">Email: </span>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-slate-800 hover:text-amber-600">
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80 flex justify-between items-center">
                <span className="text-slate-500">GSTIN:</span>
                <span className="text-slate-900 font-bold">{COMPANY_CONTACT.gstn}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">EXPERIENCE:</span>
                <span className="text-amber-700 font-bold">{COMPANY_CONTACT.experience}</span>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors text-xs font-bold"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-600" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Genuine Service Areas */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Operating Hours</span>
              </div>
              <p className="text-slate-600">
                Monday – Saturday: 9:00 AM – 7:30 PM <br />
                Sunday: By Prior Project Appointment
              </p>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">
                  GENUINE SERVICE COVERAGE
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Melapalayam</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Tirunelveli</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Tenkasi</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Thoothukudi</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Gangaikondan SIPCOT</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Tamil Nadu</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
