import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  setCurrentPage: (page: 'home' | 'terms' | 'privacy' | 'refund' | 'policies') => void;
}

export function PrivacyPolicy({ setCurrentPage }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="size-5" />
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last Updated: January 9, 2026</p>

        <div className="prose max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">1. Introduction</h2>
            <p>
              Suydam Williams Photography ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our website and services.
            </p>
            <p className="mt-4">
              Please read this privacy policy carefully. By using our services, you consent to the 
              practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">2. Information We Collect</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Event details (wedding date, venue, number of guests)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communication preferences</li>
              <li>Special requests or requirements</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>IP address and browser information</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">2.3 Photographs and Images</h3>
            <p>
              We create and store photographs containing your likeness as part of our service delivery. 
              These images are considered personal data and are protected under this privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To provide and manage photography services</li>
              <li>To process payments and maintain financial records</li>
              <li>To communicate with you about bookings, deliveries, and updates</li>
              <li>To improve our services and customer experience</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To display portfolio images on our website and social media (with your consent)</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To maintain business records and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">4. Legal Basis for Processing (GDPR)</h2>
            <p>For users in the European Economic Area, we process your data based on:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Contract Performance:</strong> Processing necessary to fulfill our service contract with you</li>
              <li><strong>Consent:</strong> When you have given explicit consent for specific processing activities</li>
              <li><strong>Legitimate Interests:</strong> For business operations, marketing, and service improvement</li>
              <li><strong>Legal Obligations:</strong> To comply with tax, accounting, and legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">5. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share information with:</p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.1 Service Providers</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Payment processors (Stripe, PayPal)</li>
              <li>Cloud storage providers (for image delivery and backup)</li>
              <li>Email service providers (for communications)</li>
              <li>Website hosting and analytics providers</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.2 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, court order, or to protect our rights, 
              property, or safety, or that of others.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.3 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred 
              to the acquiring entity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>SSL encryption for data transmission</li>
              <li>Secure cloud storage with encryption at rest</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information by authorized personnel only</li>
              <li>Secure backup systems and disaster recovery procedures</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee 
              absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">7. Data Retention</h2>
            <p>We retain your information for the following periods:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Client Records:</strong> 7 years from last service date (for legal and tax purposes)</li>
              <li><strong>Photographs:</strong> We maintain master copies indefinitely for portfolio and reprint purposes</li>
              <li><strong>Marketing Data:</strong> Until you unsubscribe or request deletion</li>
              <li><strong>Website Analytics:</strong> 26 months</li>
            </ul>
            <p className="mt-4">
              You may request earlier deletion of your personal data, subject to our legal retention obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">8. Your Privacy Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.1 Access and Portability</h3>
            <p>Request a copy of the personal information we hold about you in a portable format.</p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.2 Correction</h3>
            <p>Request correction of inaccurate or incomplete personal information.</p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.3 Deletion</h3>
            <p>Request deletion of your personal information, subject to legal retention requirements.</p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.4 Objection and Restriction</h3>
            <p>Object to processing of your data or request restriction of processing.</p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.5 Withdraw Consent</h3>
            <p>Withdraw consent for marketing communications or image usage at any time.</p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.6 California Privacy Rights (CCPA)</h3>
            <p>California residents have additional rights under the CCPA, including the right to know, delete, and opt-out of data sales.</p>

            <p className="mt-6">
              To exercise these rights, contact us at privacy@lensandlight.com. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">9. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Measure marketing campaign effectiveness</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Note that disabling cookies may limit 
              website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal 
              information from children. If we become aware of such collection, we will delete it promptly.
            </p>
            <p className="mt-4">
              Photographs of minors are only used with explicit parental consent and can be removed upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">12. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of 
              residence. We ensure appropriate safeguards are in place for such transfers in compliance with 
              applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">13. Marketing Communications</h2>
            <p>
              With your consent, we may send you marketing emails about new services, special offers, and 
              photography tips. You can unsubscribe at any time using the link in our emails or by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">14. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of material changes by 
              posting the updated policy on our website with a new "Last Updated" date. Continued use of 
              our services after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">15. Contact Us</h2>
            <p>
              For questions, concerns, or to exercise your privacy rights, contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-50 border border-gray-200">
              <p className="mb-2"><strong>Suydam Williams Photography</strong></p>
              <p className="mb-1">Data Protection Officer</p>
              <p>13627 Greenview Ave</p>
              <p>Baton Rouge, LA 70816</p>
              <p className="mt-2">Email: suydamstudio@yahoo.com</p>
              <p>Phone: (959) 999-6154</p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600">
              This privacy policy is designed to comply with GDPR, CCPA, and other applicable privacy regulations. 
              If you have concerns about our privacy practices, you have the right to lodge a complaint with 
              your local data protection authority.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}