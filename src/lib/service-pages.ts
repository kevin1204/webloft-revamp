import type { Metadata } from 'next';

export type ServiceSlug =
  | 'web-design'
  | 'webflow-development'
  | 'website-redesign'
  | 'landing-pages'
  | 'seo-optimization'
  | 'lead-capture-automation'
  | 'hosting-security-setup'
  | 'analytics-monthly-reports';

export type ServicePageData = {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  heroTitle: string;
  heroAccent: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  tags: string[];
  outcomes: string[];
  snapshot: {
    label: string;
    value: string;
  }[];
  intro: string[];
  includes: {
    title: string;
    text: string;
  }[];
  process: {
    title: string;
    text: string;
  }[];
  proof: {
    title: string;
    text: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  related: ServiceSlug[];
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'web-design',
    number: '01',
    title: 'Custom website design',
    shortTitle: 'Custom design',
    eyebrow: 'Custom Website Design',
    heroTitle: 'Custom website design for brands ready to',
    heroAccent: 'stand apart.',
    summary:
      'Bespoke website design for service businesses that need a premium digital presence, clearer messaging, and a site that turns attention into qualified enquiries.',
    metaTitle: 'Custom Website Design Services | Conversion-Focused Web Design | Webloft Studio',
    metaDescription:
      'Custom website design services for growing businesses. Webloft Studio creates responsive, conversion-focused websites with strong UX, premium visuals, and SEO-ready structure.',
    keywords: [
      'custom website design',
      'custom web design services',
      'conversion focused website design',
      'professional website design',
      'responsive web design',
    ],
    tags: ['UX strategy', 'UI design', 'Design systems', 'Responsive layouts'],
    outcomes: ['A distinctive brand-led interface', 'Clear paths to enquiry', 'Reusable page and section patterns'],
    snapshot: [
      { label: 'Best for', value: 'New brands or sites starting fresh' },
      { label: 'Typical scope', value: '5-10 core pages' },
      { label: 'Primary goal', value: 'Trust, clarity, conversion' },
    ],
    intro: [
      'Template websites can launch quickly, but they often flatten the parts of your business that make people choose you. Custom website design gives your brand a visual system, page structure, and user experience built around your audience and offer.',
      'We design every key page with a clear hierarchy: what you do, why it matters, why you are credible, and what the visitor should do next. The result is a polished website that feels specific to your business and works across desktop, tablet, and mobile.',
    ],
    includes: [
      { title: 'Website strategy', text: 'Audience, offer, sitemap, messaging, and conversion goals defined before the visual design begins.' },
      { title: 'Custom UI design', text: 'Homepage and inner page designs built around your brand, content, and buyer journey.' },
      { title: 'Responsive design system', text: 'Reusable typography, spacing, component, and section rules for consistent pages at every screen size.' },
      { title: 'Conversion guidance', text: 'CTA placement, trust blocks, proof points, and lead paths designed into the page flow.' },
    ],
    process: [
      { title: 'Map the offer', text: 'We clarify your services, ideal clients, objections, and the decisions visitors need to make.' },
      { title: 'Design the system', text: 'We create a visual direction, page hierarchy, and reusable layout system that feels premium and practical.' },
      { title: 'Refine for action', text: 'We polish responsive states, calls to action, and content rhythm before handoff or development.' },
    ],
    proof: {
      title: 'Built for more than first impressions.',
      text:
        'Strong custom design helps visitors understand your value faster, compare you more confidently, and take the next step without friction.',
    },
    faqs: [
      { question: 'Do I need custom website design or a template?', answer: 'Custom design is best when your offer, positioning, or audience needs more care than a template can provide. It gives you a site that is easier to differentiate, scale, and optimize.' },
      { question: 'Can you design only and let my team build it?', answer: 'Yes. We can provide design files, responsive guidance, and component specs for your internal team or developer.' },
      { question: 'Is SEO considered during design?', answer: 'Yes. Page hierarchy, headings, content structure, internal linking opportunities, and conversion paths are planned from the start.' },
    ],
    related: ['webflow-development', 'seo-optimization', 'analytics-monthly-reports'],
  },
  {
    slug: 'webflow-development',
    number: '02',
    title: 'Website development',
    shortTitle: 'Development',
    eyebrow: 'Website Development',
    heroTitle: 'Fast, responsive website development built to',
    heroAccent: 'perform.',
    summary:
      'High-quality website development for businesses that need clean implementation, simple editing, strong performance, and a technical foundation that supports SEO and lead generation.',
    metaTitle: 'Website Development Services | Webflow, Next.js & CMS Development | Webloft Studio',
    metaDescription:
      'Website development services for fast, responsive, SEO-ready websites. Webloft Studio builds Webflow, CMS, and custom websites designed for performance and easy updates.',
    keywords: [
      'website development services',
      'webflow development',
      'responsive website development',
      'cms website development',
      'seo friendly website development',
    ],
    tags: ['Webflow', 'Next.js', 'CMS', 'Performance'],
    outcomes: ['Clean responsive implementation', 'Editable CMS structures', 'Fast loading and accessible pages'],
    snapshot: [
      { label: 'Best for', value: 'Designs ready to be built' },
      { label: 'Typical scope', value: 'Marketing sites and CMS builds' },
      { label: 'Primary goal', value: 'Speed, stability, easy updates' },
    ],
    intro: [
      'Great website development is invisible when it works: pages load quickly, layouts hold together on every device, forms submit correctly, editors can update content, and search engines can understand the site.',
      'We develop websites with the same care we apply to design. That means semantic structure, responsive components, accessible interactions, performance checks, and content systems that are practical for daily use.',
    ],
    includes: [
      { title: 'Responsive build', text: 'Pages built and tested across common desktop, tablet, and mobile breakpoints.' },
      { title: 'CMS setup', text: 'Editable collections for blogs, case studies, services, team content, or other repeatable content.' },
      { title: 'Performance foundation', text: 'Image handling, clean structure, and front-end choices that support Core Web Vitals.' },
      { title: 'Launch support', text: 'Form testing, domain guidance, redirects, metadata checks, and final QA before go-live.' },
    ],
    process: [
      { title: 'Audit the design', text: 'We review the page system, responsive needs, CMS requirements, and integration points.' },
      { title: 'Build the site', text: 'We implement the design in clean sections and components with maintainable content structures.' },
      { title: 'Test and launch', text: 'We check responsiveness, forms, SEO basics, performance, and launch details before handoff.' },
    ],
    proof: {
      title: 'Development that protects the design.',
      text:
        'A polished design should not fall apart in the browser. We build the final site so it feels intentional at every viewport and easy to operate after launch.',
    },
    faqs: [
      { question: 'Do you build in Webflow?', answer: 'Yes. We build Webflow sites as well as custom front-end and CMS websites when the project calls for more control.' },
      { question: 'Can you work from existing designs?', answer: 'Yes. We can build from Figma or similar design files, and we will flag responsive or content issues before development starts.' },
      { question: 'Will I be able to update the website?', answer: 'Yes. We structure editable content so routine updates can be handled without developer support.' },
    ],
    related: ['web-design', 'hosting-security-setup', 'analytics-monthly-reports'],
  },
  {
    slug: 'website-redesign',
    number: '03',
    title: 'Website redesigns',
    shortTitle: 'Redesigns',
    eyebrow: 'Website Redesigns',
    heroTitle: 'Website redesigns that turn underperforming sites into',
    heroAccent: 'sales assets.',
    summary:
      'Strategic website redesign services for businesses with an outdated, confusing, slow, or low-converting site that needs clearer positioning and a stronger conversion path.',
    metaTitle: 'Website Redesign Services | SEO-Safe Website Redesign | Webloft Studio',
    metaDescription:
      'Website redesign services for outdated or underperforming websites. Improve UX, conversions, performance, SEO structure, and lead generation with Webloft Studio.',
    keywords: [
      'website redesign services',
      'website redesign',
      'seo safe website redesign',
      'website redesign agency',
      'conversion website redesign',
    ],
    tags: ['Audit', 'UX rebuild', 'SEO migration', 'Conversion strategy'],
    outcomes: ['Sharper positioning', 'Modern responsive UX', 'Protected SEO fundamentals'],
    snapshot: [
      { label: 'Best for', value: 'Sites that no longer convert' },
      { label: 'Typical scope', value: 'Audit, redesign, rebuild, launch' },
      { label: 'Primary goal', value: 'Modernize without losing momentum' },
    ],
    intro: [
      'A redesign should do more than make a website look current. It should solve the reasons visitors are leaving, leads are weak, or your brand no longer feels credible online.',
      'We redesign around evidence: analytics, page flow, search visibility, content gaps, technical issues, and the questions buyers ask before they contact you. Then we rebuild the experience with better hierarchy, faster pages, and stronger calls to action.',
    ],
    includes: [
      { title: 'Site and conversion audit', text: 'We review content, UX, analytics, SEO structure, page speed, and lead capture points.' },
      { title: 'New page strategy', text: 'A revised sitemap and section plan that gives important services and proof the space they need.' },
      { title: 'SEO-aware migration', text: 'Redirect planning, metadata review, headings, internal links, and indexable content protected during launch.' },
      { title: 'Modern visual system', text: 'A redesigned interface that keeps the brand recognizable while improving trust and usability.' },
    ],
    process: [
      { title: 'Find the friction', text: 'We identify what is hurting trust, comprehension, speed, search visibility, or lead quality.' },
      { title: 'Rebuild the experience', text: 'We redesign priority pages around clearer messaging, stronger proof, and easier next steps.' },
      { title: 'Launch with care', text: 'We handle redirects, responsive QA, SEO checks, and analytics so the new site launches cleanly.' },
    ],
    proof: {
      title: 'A redesign should reduce risk, not add it.',
      text:
        'The best redesigns preserve what already works, fix what does not, and give the business a stronger foundation for future marketing.',
    },
    faqs: [
      { question: 'Will a redesign hurt SEO?', answer: 'It can if handled poorly. We plan redirects, preserve important content, improve page structure, and check metadata so the redesign supports SEO instead of disrupting it.' },
      { question: 'Can you redesign without changing every page?', answer: 'Yes. Some projects only need priority pages redesigned first, then supporting pages can follow the same system.' },
      { question: 'Do you review analytics before redesigning?', answer: 'Yes. Analytics, conversion paths, search data, and user behavior are part of the redesign strategy when available.' },
    ],
    related: ['seo-optimization', 'analytics-monthly-reports', 'lead-capture-automation'],
  },
  {
    slug: 'landing-pages',
    number: '04',
    title: 'Landing pages',
    shortTitle: 'Landing pages',
    eyebrow: 'Landing Page Design',
    heroTitle: 'Landing pages built for one campaign and one',
    heroAccent: 'clear action.',
    summary:
      'Conversion-focused landing page design and development for ads, launches, lead magnets, offers, events, waitlists, and service campaigns.',
    metaTitle: 'Landing Page Design Services | High-Converting Landing Pages | Webloft Studio',
    metaDescription:
      'Landing page design services for campaigns, paid ads, launches, and lead generation. Webloft Studio builds fast, persuasive, conversion-focused landing pages.',
    keywords: [
      'landing page design services',
      'high converting landing pages',
      'lead generation landing page',
      'conversion landing page',
      'ppc landing page design',
    ],
    tags: ['Campaign pages', 'Paid ads', 'Lead magnets', 'Conversion copy'],
    outcomes: ['Single-goal page flow', 'Message match for traffic sources', 'Tracking-ready conversion events'],
    snapshot: [
      { label: 'Best for', value: 'Ads, launches, offers, lead magnets' },
      { label: 'Typical scope', value: '1 page plus thank-you state' },
      { label: 'Primary goal', value: 'Increase campaign conversions' },
    ],
    intro: [
      'A landing page has a different job than a homepage. It should match the visitor intent, remove distractions, answer objections quickly, and make the next step feel obvious.',
      'We build landing pages around offer clarity, proof, speed, and conversion tracking. Every section has a purpose: capture attention, explain value, create trust, and move the visitor toward one action.',
    ],
    includes: [
      { title: 'Offer and audience strategy', text: 'We clarify who the page is for, what they want, and what needs to be true before they convert.' },
      { title: 'Conversion copy structure', text: 'Headlines, benefits, proof, FAQs, objection handling, and CTA rhythm shaped for the campaign.' },
      { title: 'Responsive page design', text: 'A polished page that stays focused and easy to act on across mobile, tablet, and desktop.' },
      { title: 'Tracking-ready setup', text: 'Conversion events, thank-you page logic, and analytics requirements planned before launch.' },
    ],
    process: [
      { title: 'Define the conversion', text: 'We identify the one action the page must drive and the proof needed to support it.' },
      { title: 'Write and design the flow', text: 'We build the page around message match, clarity, trust, and CTA placement.' },
      { title: 'QA the funnel', text: 'We test forms, buttons, responsive behavior, thank-you states, and tracking before campaigns go live.' },
    ],
    proof: {
      title: 'Campaign traffic deserves a dedicated path.',
      text:
        'Sending ads to a general website often wastes intent. A focused landing page gives each campaign a cleaner route to conversion.',
    },
    faqs: [
      { question: 'Can you build landing pages for Google Ads or Meta Ads?', answer: 'Yes. We structure the page around the campaign promise, audience intent, and the conversion event that needs to be tracked.' },
      { question: 'Do landing pages include copywriting?', answer: 'Yes. We can create the page structure and write conversion-focused copy based on your offer, audience, and proof.' },
      { question: 'Can the page connect to my CRM or email platform?', answer: 'Yes. Landing pages can connect to forms, CRMs, email tools, calendars, and automation workflows.' },
    ],
    related: ['lead-capture-automation', 'analytics-monthly-reports', 'seo-optimization'],
  },
  {
    slug: 'seo-optimization',
    number: '05',
    title: 'SEO & on-page setup',
    shortTitle: 'SEO setup',
    eyebrow: 'SEO & On-Page Setup',
    heroTitle: 'SEO and on-page setup that gives search engines',
    heroAccent: 'clear signals.',
    summary:
      'Technical and on-page SEO setup for websites that need better structure, metadata, schema, internal links, performance basics, and content foundations.',
    metaTitle: 'SEO & On-Page Setup Services | Technical SEO Foundation | Webloft Studio',
    metaDescription:
      'SEO and on-page setup services for growing websites. Improve metadata, schema, headings, internal linking, indexing, page speed basics, and content structure.',
    keywords: [
      'seo on page setup',
      'technical seo setup',
      'on page seo services',
      'website seo optimization',
      'seo website audit',
    ],
    tags: ['Metadata', 'Schema', 'Internal links', 'Indexing'],
    outcomes: ['Cleaner search structure', 'Better page-level relevance', 'A stronger foundation for content growth'],
    snapshot: [
      { label: 'Best for', value: 'New sites or under-optimized sites' },
      { label: 'Typical scope', value: 'Technical and on-page foundation' },
      { label: 'Primary goal', value: 'Improve crawlability and relevance' },
    ],
    intro: [
      'SEO is not just keywords on a page. Search engines need clear page purpose, clean technical structure, fast access to content, sensible internal links, and metadata that matches user intent.',
      'We set up the on-page and technical foundations that help your website get indexed correctly and compete more effectively over time. It is practical SEO work designed to support long-term organic traffic, not short-term tricks.',
    ],
    includes: [
      { title: 'On-page optimization', text: 'Titles, descriptions, headings, content hierarchy, image alt text, and keyword alignment.' },
      { title: 'Technical SEO checks', text: 'Indexability, sitemap, robots rules, canonical tags, broken links, redirects, and performance basics.' },
      { title: 'Schema markup', text: 'Structured data for organization, services, FAQs, articles, breadcrumbs, or local business needs.' },
      { title: 'Content roadmap', text: 'Priority topics, service page opportunities, and internal linking recommendations for future growth.' },
    ],
    process: [
      { title: 'Audit the foundation', text: 'We review technical issues, existing pages, search intent, and content gaps.' },
      { title: 'Optimize key pages', text: 'We improve page-level signals, metadata, schema, headings, and internal links.' },
      { title: 'Plan the next moves', text: 'We leave you with practical recommendations for content, local SEO, and ongoing improvement.' },
    ],
    proof: {
      title: 'SEO works best when it is built into the site.',
      text:
        'A clear technical foundation helps every future page, campaign, and content investment work harder.',
    },
    faqs: [
      { question: 'Do you guarantee first-page rankings?', answer: 'No ethical SEO partner can guarantee rankings. We focus on the foundations that improve crawlability, relevance, user experience, and long-term search performance.' },
      { question: 'Is this monthly SEO?', answer: 'This service is focused on setup and optimization. Ongoing content, reporting, and SEO retainers can be added when needed.' },
      { question: 'Can you optimize an existing website?', answer: 'Yes. We can audit and optimize an existing site without redesigning it, although major UX or technical issues may require deeper work.' },
    ],
    related: ['website-redesign', 'analytics-monthly-reports', 'landing-pages'],
  },
  {
    slug: 'lead-capture-automation',
    number: '06',
    title: 'Lead capture & automation',
    shortTitle: 'Lead capture',
    eyebrow: 'Lead Capture & Automation',
    heroTitle: 'Lead capture and automation that helps every enquiry',
    heroAccent: 'move faster.',
    summary:
      'Lead capture systems, forms, CRM routing, email notifications, booking flows, and lightweight automations that turn website interest into follow-up-ready opportunities.',
    metaTitle: 'Lead Capture & Automation Services | Website Forms, CRM & Follow-Up | Webloft Studio',
    metaDescription:
      'Lead capture and automation services for websites. Improve forms, CRM routing, booking flows, email notifications, and follow-up workflows for better lead generation.',
    keywords: [
      'lead capture automation',
      'website lead generation forms',
      'crm automation setup',
      'website automation services',
      'lead generation website setup',
    ],
    tags: ['Forms', 'CRM routing', 'Email flows', 'Booking systems'],
    outcomes: ['Better lead quality', 'Faster response workflows', 'Cleaner handoff from website to sales'],
    snapshot: [
      { label: 'Best for', value: 'Service businesses generating enquiries' },
      { label: 'Typical scope', value: 'Forms, routing, notifications, CRM' },
      { label: 'Primary goal', value: 'Capture and follow up faster' },
    ],
    intro: [
      'A website can look great and still leak leads if forms are too generic, follow-up is manual, or enquiries land in the wrong place. Lead capture should make it easy for visitors to act and easy for your team to respond.',
      'We design the capture points, routing, and automations that connect your website to the tools you already use. That can include quote forms, booking flows, email alerts, CRM entries, lead magnets, or segmented follow-up.',
    ],
    includes: [
      { title: 'Lead form strategy', text: 'Form fields, qualification questions, friction reduction, and conversion-friendly placement.' },
      { title: 'CRM and tool connections', text: 'Routing leads into CRMs, spreadsheets, email platforms, calendars, or project intake systems.' },
      { title: 'Notifications and follow-up', text: 'Instant alerts, confirmation emails, internal routing, and simple automated next steps.' },
      { title: 'Lead quality tracking', text: 'Events and source data that help you understand which pages and campaigns produce real opportunities.' },
    ],
    process: [
      { title: 'Map the lead journey', text: 'We define what a qualified lead looks like and where each enquiry should go.' },
      { title: 'Build the capture system', text: 'We design forms, booking paths, routing rules, notifications, and follow-up logic.' },
      { title: 'Test the handoff', text: 'We test submissions, integrations, notifications, spam protection, and analytics before launch.' },
    ],
    proof: {
      title: 'Speed matters after the click.',
      text:
        'Better capture and faster follow-up can improve lead quality without needing more traffic.',
    },
    faqs: [
      { question: 'Can you connect forms to my CRM?', answer: 'Yes. We can connect website forms to common CRMs, email tools, spreadsheets, calendars, or automation platforms depending on your stack.' },
      { question: 'Do you build multi-step forms?', answer: 'Yes. Multi-step forms can improve completion when the offer requires qualification, quoting, or segmented routing.' },
      { question: 'Can you reduce spam submissions?', answer: 'Yes. We can add spam protection, validation, hidden fields, and better form logic to reduce low-quality submissions.' },
    ],
    related: ['landing-pages', 'analytics-monthly-reports', 'webflow-development'],
  },
  {
    slug: 'hosting-security-setup',
    number: '07',
    title: 'Hosting, domains & maintenance',
    shortTitle: 'Hosting & care',
    eyebrow: 'Hosting, Domains & Maintenance',
    heroTitle: 'Hosting, domains and maintenance handled with',
    heroAccent: 'less friction.',
    summary:
      'Website hosting support, domain and DNS setup, SSL, uptime checks, backups, updates, and maintenance guidance for businesses that want fewer technical headaches.',
    metaTitle: 'Hosting, Domains & Website Maintenance Services | Webloft Studio',
    metaDescription:
      'Hosting, domain, DNS, SSL, backup, update, and website maintenance services. Webloft Studio helps keep business websites stable, secure, and easier to manage.',
    keywords: [
      'website maintenance services',
      'website hosting support',
      'domain setup services',
      'dns setup website',
      'website care plan',
    ],
    tags: ['DNS', 'SSL', 'Backups', 'Maintenance'],
    outcomes: ['Cleaner launch setup', 'Fewer technical blockers', 'A maintained website foundation'],
    snapshot: [
      { label: 'Best for', value: 'Businesses that want technical support' },
      { label: 'Typical scope', value: 'Setup, checks, care, updates' },
      { label: 'Primary goal', value: 'Keep the site stable and current' },
    ],
    intro: [
      'Domains, DNS records, SSL certificates, hosting settings, plugin updates, backups, and maintenance tasks are rarely glamorous, but they can make or break the reliability of a website.',
      'We help set up and maintain the technical pieces around your site so launches are smoother and ongoing changes are less stressful. The goal is a website that stays online, loads reliably, and remains easier to manage.',
    ],
    includes: [
      { title: 'Domain and DNS setup', text: 'Guidance and implementation for DNS records, redirects, subdomains, SSL, and launch configuration.' },
      { title: 'Hosting support', text: 'Platform setup, environment checks, performance basics, and launch-readiness review.' },
      { title: 'Maintenance tasks', text: 'Content updates, CMS checks, plugin or platform updates, backups, and routine QA as needed.' },
      { title: 'Issue response', text: 'Support for broken forms, page errors, tracking issues, layout bugs, and other website problems.' },
    ],
    process: [
      { title: 'Review the setup', text: 'We check the current domain, hosting, CMS, integrations, and launch risks.' },
      { title: 'Stabilize the foundation', text: 'We configure required records, SSL, redirects, backups, and access details.' },
      { title: 'Maintain and improve', text: 'We handle routine updates, issue fixes, and practical recommendations as your site evolves.' },
    ],
    proof: {
      title: 'Quiet infrastructure is good infrastructure.',
      text:
        'When hosting, domains, and maintenance are handled properly, your team can focus on the business instead of technical cleanup.',
    },
    faqs: [
      { question: 'Do you host the website directly?', answer: 'We help choose, configure, and maintain the right hosting setup for the platform. The exact arrangement depends on the site and business requirements.' },
      { question: 'Can you help with domain records and email DNS?', answer: 'Yes. We can help configure DNS records for websites, redirects, SSL, verification, and common email requirements.' },
      { question: 'Do you offer ongoing maintenance?', answer: 'Yes. Maintenance can include updates, QA, small content changes, issue fixes, and reporting depending on the plan.' },
    ],
    related: ['webflow-development', 'analytics-monthly-reports', 'seo-optimization'],
  },
  {
    slug: 'analytics-monthly-reports',
    number: '08',
    title: 'Analytics & tracking',
    shortTitle: 'Analytics',
    eyebrow: 'Analytics & Tracking',
    heroTitle: 'Analytics and tracking that show what is actually',
    heroAccent: 'working.',
    summary:
      'GA4, Google Tag Manager, conversion events, dashboards, call tracking, heatmaps, and reporting setup for teams that want cleaner marketing decisions.',
    metaTitle: 'Analytics & Tracking Setup Services | GA4, GTM & Conversion Tracking | Webloft Studio',
    metaDescription:
      'Analytics and tracking setup services for business websites. Set up GA4, Google Tag Manager, conversion events, dashboards, call tracking, and performance reporting.',
    keywords: [
      'analytics tracking setup',
      'ga4 setup services',
      'google tag manager setup',
      'conversion tracking setup',
      'website analytics services',
    ],
    tags: ['GA4', 'GTM', 'Conversion events', 'Dashboards'],
    outcomes: ['Cleaner conversion data', 'Better campaign attribution', 'Reports tied to business actions'],
    snapshot: [
      { label: 'Best for', value: 'Teams running marketing campaigns' },
      { label: 'Typical scope', value: 'GA4, GTM, events, reports' },
      { label: 'Primary goal', value: 'Make decisions from real data' },
    ],
    intro: [
      'Without clean tracking, it is hard to know which pages, services, campaigns, or traffic sources are producing leads. Analytics should answer practical business questions, not just collect page views.',
      'We set up analytics around the actions that matter: form submissions, phone clicks, bookings, downloads, email clicks, landing page conversions, and key navigation paths. Then we make the data easier to read and use.',
    ],
    includes: [
      { title: 'GA4 and GTM setup', text: 'Account, property, container, tags, triggers, events, and basic privacy-conscious configuration.' },
      { title: 'Conversion tracking', text: 'Form submissions, button clicks, phone taps, bookings, downloads, and campaign-specific events.' },
      { title: 'Dashboards and reports', text: 'Readable reporting views focused on leads, traffic quality, engagement, and top-performing pages.' },
      { title: 'Tracking QA', text: 'Testing in preview mode, real-time checks, duplicate event review, and documentation for future changes.' },
    ],
    process: [
      { title: 'Define useful metrics', text: 'We identify the decisions your tracking needs to support and the conversions that matter.' },
      { title: 'Install the system', text: 'We configure tags, triggers, events, parameters, reports, and any required integrations.' },
      { title: 'Validate the data', text: 'We test events, dashboards, attribution basics, and hand over a clear tracking reference.' },
    ],
    proof: {
      title: 'Better data changes better decisions.',
      text:
        'When tracking is clean, you can improve pages, campaigns, and offers based on behavior instead of guesswork.',
    },
    faqs: [
      { question: 'Can you set up GA4 and Google Tag Manager?', answer: 'Yes. We can configure GA4, GTM, events, triggers, conversion tracking, and reporting views.' },
      { question: 'Can you track form submissions and phone clicks?', answer: 'Yes. We can track form submissions, phone taps, email clicks, booking actions, downloads, and other key conversion events.' },
      { question: 'Do you provide monthly reports?', answer: 'Yes. We can set up dashboards and monthly reporting focused on leads, traffic quality, page performance, and conversion trends.' },
    ],
    related: ['lead-capture-automation', 'seo-optimization', 'landing-pages'],
  },
];

export const servicePageSlugs = SERVICE_PAGES.map((service) => service.slug);

export function getServicePage(slug: ServiceSlug) {
  const service = SERVICE_PAGES.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Unknown service page: ${slug}`);
  }

  return service;
}

export function getServiceMetadata(slug: ServiceSlug): Metadata {
  const service = getServicePage(slug);
  const url = `https://webloftstudio.com/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: 'Webloft Studio',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}
