import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Webloft Studio",
  description: "Privacy Policy for Webloft Studio. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support. This may include your name, email address, 
              phone number, company information, and project details.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Information Sharing
            </h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information 
              in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist us in operating our business</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Data Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-6">
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us. To exercise these rights, please contact us 
              using the information provided below.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@webloftstudio.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@webloftstudio.com
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> webloftstudio.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help. Contact us if you have any questions about how we handle your data.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
