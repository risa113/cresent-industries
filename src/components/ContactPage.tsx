import React, { useState, useEffect } from 'react';
import { SITE_PAGES_SEO, VERIFIED_BUSINESS_DATA, PRODUCTION_DOMAIN } from '../data/seoData';
import { COMPANY_CONTACT, getWhatsAppUrl, createQuoteInquiryLinks } from '../data/mockData';
import { useRouter } from '../context/RouterContext';
import { updateSEOTags } from '../utils/seoHelper';
import {
  ChevronRight,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Navigation,
  Send,
  Building2,
  CheckCircle2,
} from 'lucide-react';

export interface ContactPageProps {
  readonly onOpenQuoteModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const { navigate } = useRouter();
  const pageMeta = SITE_PAGES_SEO.contact;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Heavy Structural Steel Fabrication',
    area: '',
    location: '',
    notes: '',
  });

  const [dispatchedLinks, setDispatchedLinks] = useState<{
    whatsappUrl1: string;
    whatsappUrl2: string;
    mailtoUrl: string;
  } | null>(null);

  useEffect(() => {
    updateSEOTags({
      title: pageMeta.title,
      description: pageMeta.description,
      canonicalPath: '/contact',
      ogImage: `${PRODUCTION_DOMAIN}/images/hero-steel-hd.webp`,
      breadcrumbs: [
        { name: 'Home', url: `${PRODUCTION_DOMAIN}/` },
        { name: 'Contact Us', url: `${PRODUCTION_DOMAIN}/contact` },
      ],
    });
  }, [pageMeta]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const links = createQuoteInquiryLinks({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      category: formData.category,
      area: formData.area,
      location: formData.location,
      notes: formData.notes,
    });

    setDispatchedLinks(links);
    setFormSubmitted(true);

    // Direct to primary WhatsApp desk in new tab
    window.open(links.whatsappUrl1, '_blank', 'noopener,noreferrer');

    // Also trigger email client via mailto
    setTimeout(() => {
      window.location.href = links.mailtoUrl;
    }, 400);
  };

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
          <li className="text-slate-900 font-bold">Contact</li>
        </ol>
      </nav>

      {/* 2. Hero Header */}
      <header className="relative bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 font-mono text-xs font-bold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>MELAPALAYAM WORKS &amp; ADMINISTRATIVE OFFICE // TIRUNELVELI</span>
            </div>

            {/* Clear Primary H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.12]">
              Contact Crescent Engineering Industries
            </h1>

            <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed pt-2">
              Contact Crescent Engineering Industries in Melapalayam, Tirunelveli, for steel fabrication, PEB structures and industrial roofing enquiries.
            </p>
          </div>
        </div>
      </header>

      {/* 3. Main Contact Body */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Form & Direct Inquiries */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-amber-700 font-bold tracking-wider uppercase block">
                    PROJECT RFP &amp; SPECIFICATION FORM
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                    Send a Project Enquiry
                  </h2>
                </div>
                <span className="text-xs font-mono text-slate-400">IS 800:2007 COMPLIANT</span>
              </div>

              {formSubmitted ? (
                <div className="py-6 space-y-5">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-300 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-display">
                        Specification Dispatched!
                      </h3>
                      <p className="text-xs text-emerald-700 font-mono font-medium">
                        Directly directed to WhatsApp Desk &amp; Email
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-mono leading-relaxed">
                    Your project details for <strong className="text-slate-900">{formData.name}</strong> ({formData.category}) have been formatted and dispatched to our senior structural engineering team.
                  </p>

                  {dispatchedLinks && (
                    <div className="space-y-2 pt-2">
                      <a
                        href={dispatchedLinks.whatsappUrl1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold rounded-xl transition-colors"
                      >
                        <span>Open WhatsApp Desk 1 ({COMPANY_CONTACT.primaryPhone})</span>
                        <MessageSquare className="w-4 h-4" />
                      </a>
                      <a
                        href={dispatchedLinks.mailtoUrl}
                        className="flex items-center justify-between px-4 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-mono text-xs font-bold rounded-xl transition-colors"
                      >
                        <span>Open In Email Client ({COMPANY_CONTACT.email})</span>
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="w-full py-2.5 border border-slate-300 rounded-xl text-xs font-mono uppercase text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Er. / Mr. / Company Name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-sans text-slate-900 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Mobile Number"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-sans text-slate-900 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Corporate Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-sans text-slate-900 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Engineering Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-sans text-slate-900 bg-slate-50/50"
                      >
                        <option>Heavy Structural Steel Fabrication</option>
                        <option>Pre-Engineered Buildings (PEB)</option>
                        <option>Industrial Roofing Works</option>
                        <option>Steel Bridge Fabrication</option>
                        <option>Steel Chimney Fabrication</option>
                        <option>Steel Mezzanine Floors</option>
                        <option>Insulated Roofing &amp; PUF Panels</option>
                        <option>Factory Shed / Warehouse Conversion</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Estimated Area (Sq. Ft.)
                      </label>
                      <input
                        type="text"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="e.g. 25,000 Sq. Ft."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-sans text-slate-900 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                        Project Site Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Melapalayam / Tirunelveli / Gangaikondan"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-sans text-slate-900 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-700 font-semibold uppercase mb-1">
                      Project Notes / Bay Span Specifications
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify clear span, crane gantry tonnage, roof profile, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm font-sans text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Dispatch Specification Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] font-mono text-slate-500 text-center">
                    Submitting opens WhatsApp with your pre-filled details &amp; copies to email. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Verified NAP & Location Authority */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Verified Address & Contact Card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-6 shadow-lg">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950 font-display">
                    Verified Works &amp; Office
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    LAT 8.7139° N, LONG 77.7567° E
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono text-slate-700">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                    BUSINESS NAME
                  </span>
                  <div className="text-slate-900 font-bold text-sm">
                    {VERIFIED_BUSINESS_DATA.name}
                  </div>
                  <div className="text-amber-700 font-semibold text-xs">
                    {VERIFIED_BUSINESS_DATA.division}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                    REGISTERED ADDRESS
                  </span>
                  <p className="text-slate-900 font-medium text-xs leading-relaxed">
                    {VERIFIED_BUSINESS_DATA.formattedAddress}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80 space-y-2">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      PRIMARY PHONE
                    </span>
                    <a
                      href={`tel:${COMPANY_CONTACT.primaryPhone}`}
                      className="text-slate-950 font-bold text-sm hover:text-amber-600 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      <span>{COMPANY_CONTACT.primaryPhone}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      ADDITIONAL MOBILE
                    </span>
                    <a
                      href={`tel:${COMPANY_CONTACT.mobile2}`}
                      className="text-slate-900 font-semibold hover:text-amber-600 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      <span>{COMPANY_CONTACT.mobile2}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      OFFICE LANDLINES
                    </span>
                    <span className="text-slate-800">{COMPANY_CONTACT.landlines}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      EMAIL DESK
                    </span>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="text-slate-900 font-semibold hover:text-amber-600 flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-600" />
                      <span>{COMPANY_CONTACT.email}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex justify-between">
                  <div>
                    <span className="text-slate-500">GSTIN: </span>
                    <span className="text-slate-900 font-bold">{COMPANY_CONTACT.gstn}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">EXP: </span>
                    <span className="text-amber-700 font-bold">{COMPANY_CONTACT.experience}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={`tel:${COMPANY_CONTACT.primaryPhone}`}
                  className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Primary Line</span>
                </a>

                <a
                  href={COMPANY_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-sky-600" />
                  <span>Get Directions (Google Maps)</span>
                </a>

                <a
                  href={getWhatsAppUrl(COMPANY_CONTACT.whatsapp1Clean, 'Hello Crescent Engineering, I would like to consult about a project in Tirunelveli.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
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
                <div className="flex items-center gap-1.5 text-slate-700 font-bold mb-1">
                  <Building2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Key Coverage Zones:</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Melapalayam, Tirunelveli, Tenkasi, Thoothukudi, Gangaikondan SIPCOT, Nanguneri SEZ, Madurai &amp; Tamil Nadu.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
