import React, { useEffect } from 'react';
import { SITE_PAGES_SEO, VERIFIED_BUSINESS_DATA, PRODUCTION_DOMAIN, SERVICES_CATALOG } from '../data/seoData';
import { COMPANY_CONTACT, LEADERS, STATS, getWhatsAppUrl } from '../data/mockData';
import { useRouter } from '../context/RouterContext';
import { updateSEOTags } from '../utils/seoHelper';
import {
  ChevronRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  MapPin,
  Award,
} from 'lucide-react';

export interface AboutPageProps {
  readonly onRequestQuote: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestQuote }) => {
  const { navigate } = useRouter();
  const pageMeta = SITE_PAGES_SEO.about;

  useEffect(() => {
    updateSEOTags({
      title: pageMeta.title,
      description: pageMeta.description,
      canonicalPath: '/about',
      ogImage: `${PRODUCTION_DOMAIN}/images/editorial-steel-hd.webp`,
      breadcrumbs: [
        { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
        { name: 'About Us', url: `${PRODUCTION_DOMAIN}/about` },
      ],
    });
  }, [pageMeta]);

  return (
    <article className="min-h-screen bg-white text-slate-900 pt-6 pb-20 select-none">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-3 border-b border-slate-200">
        <ol className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
          <li>
            <button
              onClick={() => navigate('/')}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Home
            </button>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <li className="text-slate-900 font-bold">About Us</li>
        </ol>
      </nav>

      {/* 2. Hero Header */}
      <header className="relative bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 font-mono text-xs font-bold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>ESTABLISHED ENGINEERING ENTERPRISE // MORE THAN 30 YEARS</span>
            </div>

            {/* Clear Primary H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.12]">
              About Crescent Engineering Industries
            </h1>

            <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed pt-2">
              Discover Crescent Engineering Industries, a heavy structural steel fabrication company with over 30 years of experience in industrial fabrication and steel erections.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onRequestQuote('Pre-Engineered Buildings (PEB)')}
                className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 flex items-center gap-2"
              >
                <span>Request Project Proposal</span>
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
                href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to learn more about your fabrication capabilities.')}
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

      {/* 3. Main Editorial Body */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Story & Technical Philosophy */}
          <div className="lg:col-span-8 space-y-12">
            {/* Presentation Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/images/editorial-steel-hd.webp"
                  alt="Authentic structural PEB truss framework and column grid fabricated by Crescent Engineering Industries in Tirunelveli"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  width="1200"
                  height="675"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-mono text-[11px]">
                  <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded">
                    MELAPALAYAM WORKS
                  </span>
                  <span>IS 800:2007 COMPLIANT FABRICATION</span>
                </div>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Three Decades of Structural Excellence in Southern India
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Crescent Engineering Industries provides heavy structural steel fabrication, pre-engineered building structures, steel erection and industrial roofing solutions from Melapalayam, Tirunelveli, Tamil Nadu. With more than 30 years of stated industry experience, the company serves industrial and commercial requirements across its relevant service areas.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our workshop facility at <strong className="text-slate-900">Vaalan Complex, Ambai Road, Veeramanikapuram, Melapalayam</strong> brings together heavy plate cutting, automatic submerged arc welding lines, and rigorous non-destructive quality diagnostics. We bridge architectural vision with unyielding structural physics, delivering buildings that withstand extreme weather, dynamic equipment loads, and coastal corrosion.
              </p>
            </section>

            {/* Leadership Profile */}
            <section className="space-y-6 pt-4 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Executive Structural Leadership
              </h2>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-300 shrink-0 bg-slate-200 shadow-md">
                  <img
                    src={LEADERS[0].photo}
                    alt={LEADERS[0].imageAlt || LEADERS[0].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-950 font-display">
                      {LEADERS[0].name}
                    </h3>
                    <ShieldCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider block">
                    {LEADERS[0].role}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {LEADERS[0].bio}
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-slate-500">
                    <span className="font-semibold text-slate-700">EXPERTISE: </span>
                    {LEADERS[0].expertise}
                  </div>
                </div>
              </div>
            </section>

            {/* Industries Served */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                  Industries Served Across Tamil Nadu
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Over our 30+ years in service, we have engineered and erected structural solutions across multiple sectors:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {VERIFIED_BUSINESS_DATA.industriesServed.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 bg-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{industry}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Services Links */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                Our Engineering Disciplines
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES_CATALOG.map((svc) => (
                  <button
                    key={svc.slug}
                    onClick={() => navigate(svc.path)}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-sm transition-all text-left flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {svc.h1}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Spec Sheet & Stats */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Stats Grid */}
            <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 space-y-4 shadow-xl">
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-widest block">
                AT A GLANCE // TRACK RECORD
              </span>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold font-display text-amber-400">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono text-slate-300 uppercase font-bold">
                      {stat.label}
                    </div>
                    <div className="text-[9px] font-mono text-slate-400">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Business Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4 text-xs font-mono text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-slate-900 uppercase">
                  VERIFIED BUSINESS DETAILS
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                  LEGAL ENTITY
                </span>
                <span className="text-slate-900 font-bold block">{VERIFIED_BUSINESS_DATA.name}</span>
                <span className="text-slate-600 text-[11px] block">{VERIFIED_BUSINESS_DATA.division}</span>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                  REGISTERED WORKS
                </span>
                <p className="text-slate-900 text-xs leading-relaxed">
                  {VERIFIED_BUSINESS_DATA.formattedAddress}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 space-y-1">
                <div><span className="text-slate-500">Primary: </span><a href={`tel:${COMPANY_CONTACT.primaryPhone}`} className="text-slate-900 font-bold">{COMPANY_CONTACT.primaryPhone}</a></div>
                <div><span className="text-slate-500">Additional: </span><a href={`tel:${COMPANY_CONTACT.mobile2}`} className="text-slate-900 font-semibold">{COMPANY_CONTACT.mobile2}</a></div>
                <div><span className="text-slate-500">Landlines: </span><span className="text-slate-800">{COMPANY_CONTACT.landlines}</span></div>
                <div><span className="text-slate-500">GSTIN: </span><span className="text-slate-900 font-bold">{COMPANY_CONTACT.gstn}</span></div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onRequestQuote('Pre-Engineered Buildings (PEB)')}
                  className="w-full py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-center transition-colors"
                >
                  Consult With An Engineer
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
