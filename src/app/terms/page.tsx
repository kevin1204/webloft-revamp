import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Webloft Studio",
  description: "Terms of Service for Webloft Studio. Read our terms and conditions for using our web development services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-16" style={{ background: 'var(--bg)' }}>
        <div className="ds-container">
          <div className="text-center">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="h-1 mb-6">Terms of Service</h1>
            <p className="body-lg" style={{ color: 'var(--ink-dim)' }}>
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Content */}
      <section className="py-20">
        <div className="ds-container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="h-2 mb-6">
              Acceptance of Terms
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              By accessing and using Webloft Studio&apos;s services, you accept and agree to be bound by
              the terms and provision of this agreement. If you do not agree to abide by the above,
              please do not use this service.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Services Description
            </h2>
            <p className="body mb-4" style={{ color: 'var(--ink-dim)' }}>
              Webloft Studio provides web development, design, and digital marketing services including
              but not limited to:
            </p>
            <ul className="space-y-2 mb-6 pl-4">
              {[
                'Website design and development',
                'Webflow development services',
                'SEO optimization',
                'Website maintenance and support',
                'Digital marketing consultation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 body" style={{ color: 'var(--ink-dim)' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '0.125rem' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Payment Terms
            </h2>
            <p className="body mb-4" style={{ color: 'var(--ink-dim)' }}>
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul className="space-y-2 mb-6 pl-4">
              {[
                'Projects require a 50% deposit before work begins',
                'Final payment is due upon project completion',
                'Payment methods include bank transfer, PayPal, and credit cards',
                'Late payments may incur additional fees',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 body" style={{ color: 'var(--ink-dim)' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '0.125rem' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Project Timeline and Deliverables
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              Project timelines and deliverables will be outlined in individual project agreements.
              We strive to meet all deadlines but cannot guarantee completion dates due to factors
              beyond our control, including client feedback delays.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Client Responsibilities
            </h2>
            <p className="body mb-4" style={{ color: 'var(--ink-dim)' }}>
              Clients are responsible for:
            </p>
            <ul className="space-y-2 mb-6 pl-4">
              {[
                'Providing timely feedback and approvals',
                'Supplying necessary content, images, and materials',
                'Maintaining access to hosting and domain accounts',
                'Backing up their website data',
                'Complying with applicable laws and regulations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 body" style={{ color: 'var(--ink-dim)' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '0.125rem' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Intellectual Property
            </h2>
            <p className="body mb-4" style={{ color: 'var(--ink-dim)' }}>
              Upon full payment, clients own the final website design and content created specifically
              for their project. Webloft Studio retains rights to:
            </p>
            <ul className="space-y-2 mb-6 pl-4">
              {[
                'Our proprietary code libraries and frameworks',
                'Design templates and methodologies',
                'Portfolio rights to showcase completed work',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 body" style={{ color: 'var(--ink-dim)' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '0.125rem' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Limitation of Liability
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              Webloft Studio&apos;s liability is limited to the amount paid for services. We are not liable
              for indirect, incidental, or consequential damages arising from the use of our services.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Warranty and Support
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              We provide a 30-day warranty on all development work. Support and maintenance services
              are available under separate agreements. We do not guarantee specific business results
              or search engine rankings.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Termination
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              Either party may terminate services with 30 days written notice. Upon termination,
              clients will be billed for work completed up to the termination date.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Changes to Terms
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              We reserve the right to modify these terms at any time. Changes will be posted on this
              page with an updated revision date. Continued use of our services constitutes acceptance
              of modified terms.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Contact Information
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              For questions about these terms, please contact us:
            </p>
            <div className="ds-card p-6">
              <p className="body mb-2" style={{ color: 'var(--ink)' }}>
                <strong>Email:</strong> info@webloftstudio.com
              </p>
              <p className="body" style={{ color: 'var(--ink)' }}>
                <strong>Website:</strong> webloftstudio.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="body-lg mb-8" style={{ color: 'var(--ink-dim)' }}>
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <Link href="/contact" className="ds-btn ds-btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
