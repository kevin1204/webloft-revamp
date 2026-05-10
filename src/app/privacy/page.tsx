import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Webloft Studio",
  description: "Privacy Policy for Webloft Studio. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-16" style={{ background: 'var(--bg)' }}>
        <div className="ds-container">
          <div className="text-center">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="h-1 mb-6">Privacy Policy</h1>
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
              Information We Collect
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              We collect information you provide directly to us, such as when you create an account,
              make a purchase, or contact us for support. This may include your name, email address,
              phone number, company information, and project details.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              How We Use Your Information
            </h2>
            <p className="body mb-4" style={{ color: 'var(--ink-dim)' }}>
              We use the information we collect to:
            </p>
            <ul className="space-y-2 mb-6 pl-4">
              {[
                'Provide, maintain, and improve our services',
                'Process transactions and send related information',
                'Send technical notices, updates, and support messages',
                'Respond to your comments and questions',
                'Communicate with you about products, services, and events',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 body" style={{ color: 'var(--ink-dim)' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '0.125rem' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Information Sharing
            </h2>
            <p className="body mb-4" style={{ color: 'var(--ink-dim)' }}>
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as described in this policy. We may share your information
              in the following circumstances:
            </p>
            <ul className="space-y-2 mb-6 pl-4">
              {[
                'With your consent',
                'To comply with legal obligations',
                'To protect our rights and prevent fraud',
                'With service providers who assist us in operating our business',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 body" style={{ color: 'var(--ink-dim)' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '0.125rem' }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Data Security
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              We implement appropriate security measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100% secure.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Cookies and Tracking
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              We use cookies and similar tracking technologies to enhance your experience on our website.
              You can control cookie settings through your browser preferences.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Your Rights
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              You have the right to access, update, or delete your personal information. You may also
              opt out of certain communications from us. To exercise these rights, please contact us
              using the information provided below.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Changes to This Policy
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>

            <div className="hairline my-10" />

            <h2 className="h-2 mb-6">
              Contact Us
            </h2>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              If you have any questions about this privacy policy, please contact us:
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
            Questions About Our Privacy Policy?
          </h2>
          <p className="body-lg mb-8" style={{ color: 'var(--ink-dim)' }}>
            We&apos;re here to help. Contact us if you have any questions about how we handle your data.
          </p>
          <Link href="/contact" className="ds-btn ds-btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
