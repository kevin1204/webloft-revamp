import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Webloft Studio",
  description: "Terms of Service for Webloft Studio. Read our terms and conditions for using our web development services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
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
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Webloft Studio's services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Services Description
            </h2>
            <p className="text-gray-600 mb-6">
              Webloft Studio provides web development, design, and digital marketing services including 
              but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Website design and development</li>
              <li>Webflow development services</li>
              <li>SEO optimization</li>
              <li>Website maintenance and support</li>
              <li>Digital marketing consultation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Payment Terms
            </h2>
            <p className="text-gray-600 mb-6">
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Projects require a 50% deposit before work begins</li>
              <li>Final payment is due upon project completion</li>
              <li>Payment methods include bank transfer, PayPal, and credit cards</li>
              <li>Late payments may incur additional fees</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Project Timeline and Deliverables
            </h2>
            <p className="text-gray-600 mb-6">
              Project timelines and deliverables will be outlined in individual project agreements. 
              We strive to meet all deadlines but cannot guarantee completion dates due to factors 
              beyond our control, including client feedback delays.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Client Responsibilities
            </h2>
            <p className="text-gray-600 mb-6">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Providing timely feedback and approvals</li>
              <li>Supplying necessary content, images, and materials</li>
              <li>Maintaining access to hosting and domain accounts</li>
              <li>Backing up their website data</li>
              <li>Complying with applicable laws and regulations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Intellectual Property
            </h2>
            <p className="text-gray-600 mb-6">
              Upon full payment, clients own the final website design and content created specifically 
              for their project. Webloft Studio retains rights to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Our proprietary code libraries and frameworks</li>
              <li>Design templates and methodologies</li>
              <li>Portfolio rights to showcase completed work</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-6">
              Webloft Studio's liability is limited to the amount paid for services. We are not liable 
              for indirect, incidental, or consequential damages arising from the use of our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Warranty and Support
            </h2>
            <p className="text-gray-600 mb-6">
              We provide a 30-day warranty on all development work. Support and maintenance services 
              are available under separate agreements. We do not guarantee specific business results 
              or search engine rankings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Termination
            </h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate services with 30 days written notice. Upon termination, 
              clients will be billed for work completed up to the termination date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Changes to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Changes will be posted on this 
              page with an updated revision date. Continued use of our services constitutes acceptance 
              of modified terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              For questions about these terms, please contact us:
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
