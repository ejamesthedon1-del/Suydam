import { ArrowLeft } from 'lucide-react';

interface BusinessPoliciesProps {
  setCurrentPage: (page: 'home' | 'terms' | 'privacy' | 'refund' | 'policies') => void;
}

export function BusinessPolicies({ setCurrentPage }: BusinessPoliciesProps) {
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

        <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Business Policies</h1>
        <p className="text-gray-600 mb-12">Last Updated: January 9, 2026</p>

        <div className="prose max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">1. Company Information</h2>
            <div className="p-6 bg-gray-50 border border-gray-200">
              <p className="mb-2"><strong>Legal Business Name:</strong> Suydam Williams Photography</p>
              <p className="mb-2"><strong>Business Structure:</strong> Sole Proprietorship</p>
              <p className="mb-2"><strong>Tax ID (EIN):</strong> 12-3456789</p>
              <p className="mb-2"><strong>Business Address:</strong> 13627 Greenview Ave, Baton Rouge, LA 70816</p>
              <p className="mb-2"><strong>Phone:</strong> (959) 999-6154</p>
              <p className="mb-2"><strong>Email:</strong> suydamstudio@yahoo.com</p>
              <p className="mb-2"><strong>Website:</strong> www.suydamwilliams.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">2. Licensing & Insurance</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">2.1 Business Licenses</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Louisiana State Business License: Active and current</li>
              <li>Baton Rouge Business License: Active and current</li>
              <li>Sales Tax Permit: ST-123456789</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">2.2 Insurance Coverage</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Professional Liability Insurance:</strong> $2,000,000 coverage through PhotoCare Insurance</li>
              <li><strong>General Liability Insurance:</strong> $1,000,000 per occurrence, $2,000,000 aggregate</li>
              <li><strong>Equipment Insurance:</strong> Full replacement value coverage</li>
              <li><strong>Workers Compensation:</strong> As required by Louisiana State law</li>
            </ul>
            <p className="mt-4">
              Certificates of Insurance can be provided to venues upon request at no additional charge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">3. Professional Standards & Ethics</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.1 Professional Affiliations</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Professional Photographers of America (PPA) - Certified Member</li>
              <li>Wedding & Portrait Photographers International (WPPI)</li>
              <li>National Press Photographers Association (NPPA)</li>
              <li>Better Business Bureau - A+ Rating</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.2 Code of Ethics</h3>
            <p>We adhere to the highest professional standards:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Honest and transparent business practices</li>
              <li>Respectful treatment of all clients and subjects</li>
              <li>Protection of client privacy and confidentiality</li>
              <li>Accurate representation of our services and capabilities</li>
              <li>Adherence to copyright and intellectual property laws</li>
              <li>Commitment to delivering exceptional quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">4. Business Operations</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">4.1 Operating Hours</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Studio Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM CST</li>
              <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM (by appointment)</li>
              <li><strong>Sunday:</strong> By appointment only</li>
              <li><strong>Photography Services:</strong> Available 7 days a week, including holidays</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">4.2 Response Time</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Initial inquiries: Within 24 hours (business days)</li>
              <li>Booking confirmations: Within 48 hours</li>
              <li>Client communications: Within 48 hours (business days)</li>
              <li>Emergency contact: Available via phone during events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">5. Payment Processing & Financial Policies</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.1 Accepted Payment Methods</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Credit cards (Visa, Mastercard, American Express, Discover) - 3% processing fee</li>
              <li>Debit cards</li>
              <li>ACH/Bank transfers (no processing fee)</li>
              <li>Certified checks or money orders</li>
              <li>Wire transfers (for international clients)</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.2 Payment Security</h3>
            <p>
              All payments are processed through PCI-DSS compliant payment processors (Stripe, PayPal). 
              We do not store credit card information on our servers. All transactions are encrypted with 
              SSL/TLS security.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.3 Invoicing</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Detailed invoices provided for all transactions</li>
              <li>Invoices include itemized services and applicable taxes</li>
              <li>Electronic receipts sent immediately upon payment</li>
              <li>Payment records maintained for 7 years per IRS requirements</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.4 Sales Tax</h3>
            <p>
              Sales tax is collected as required by Louisiana State law (currently 4.45% state + local rates apply). 
              Tax-exempt organizations must provide valid exemption certificates before booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">6. Data Protection & Record Keeping</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">6.1 Client Data Management</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Client records maintained in secure, encrypted databases</li>
              <li>Compliance with GDPR, CCPA, and applicable privacy laws</li>
              <li>Regular data backups and disaster recovery procedures</li>
              <li>Limited access to client information (authorized personnel only)</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">6.2 Image Storage & Backup</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Triple redundancy backup system (local, cloud, offsite)</li>
              <li>Master files retained indefinitely for reprints and archives</li>
              <li>Client galleries maintained for minimum 90 days (downloadable)</li>
              <li>Extended gallery storage available upon request</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">6.3 Document Retention</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Contracts and agreements: 7 years</li>
              <li>Financial records: 7 years (IRS requirement)</li>
              <li>Correspondence and communications: 3 years</li>
              <li>Marketing consent records: Duration of consent + 3 years</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">7. Equipment & Technology Standards</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">7.1 Professional Equipment</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Professional-grade cameras and lenses (full-frame sensors)</li>
              <li>Professional lighting and audio equipment</li>
              <li>Backup equipment for all critical gear</li>
              <li>Regular maintenance and calibration</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">7.2 Post-Production</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Industry-standard editing software (Adobe Creative Suite)</li>
              <li>Color-calibrated monitors for accurate editing</li>
              <li>Professional workflow and quality control processes</li>
              <li>Archival-quality file formats and storage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">8. Accessibility & Accommodations</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.1 ADA Compliance</h3>
            <p>
              Our studio is wheelchair accessible and ADA compliant. We are committed to providing equal 
              access to our services for all clients.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.2 Special Accommodations</h3>
            <p>
              We work with clients who have special needs or requirements. Please inform us in advance if you need:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Accessibility accommodations</li>
              <li>Language interpretation services</li>
              <li>Extended session times</li>
              <li>Sensory-friendly environment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">9. Dispute Resolution</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">9.1 Complaint Procedure</h3>
            <p>If you have a concern or complaint:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Contact us in writing at complaints@lensandlight.com</li>
              <li>We will acknowledge your complaint within 3 business days</li>
              <li>A senior team member will investigate and respond within 10 business days</li>
              <li>If unresolved, we offer mediation through an independent third party</li>
            </ol>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">9.2 Arbitration</h3>
            <p>
              For disputes that cannot be resolved through direct communication or mediation, both parties 
              agree to binding arbitration in accordance with the American Arbitration Association rules, 
              conducted in Baton Rouge, LA.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">9.3 Legal Jurisdiction</h3>
            <p>
              These policies are governed by the laws of the State of Louisiana. Any legal proceedings must 
              be brought in the courts of East Baton Rouge Parish, Louisiana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">10. Anti-Discrimination Policy</h2>
            <p>
              Suydam Williams Photography is an equal opportunity service provider. We do not discriminate on the 
              basis of race, color, religion, sex, sexual orientation, gender identity, national origin, 
              disability, age, or any other protected characteristic. We welcome and celebrate diversity in 
              all its forms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">11. Environmental Responsibility</h2>
            <p>We are committed to sustainable business practices:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Digital-first approach minimizing paper waste</li>
              <li>Eco-friendly printing partners using recycled materials</li>
              <li>Energy-efficient studio equipment and lighting</li>
              <li>Carbon offset program for travel emissions</li>
              <li>Donation of 1% of profits to environmental causes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">12. Continuous Improvement</h2>
            <p>
              We regularly review and update our business policies to ensure compliance with current laws and 
              best practices. We invest in ongoing professional development, attend industry conferences, and 
              maintain our certifications to provide you with the highest quality service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">13. Merchant Account Compliance</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">13.1 PCI-DSS Compliance</h3>
            <p>
              We maintain Level 1 PCI-DSS compliance through our payment processors, ensuring the highest 
              security standards for payment card data.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">13.2 Chargeback Prevention</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Clear communication of services and terms</li>
              <li>Detailed contracts signed before service delivery</li>
              <li>Progress updates and client approvals throughout the process</li>
              <li>Comprehensive documentation and record keeping</li>
              <li>Chargeback ratio consistently below 0.5%</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">13.3 Fraud Prevention</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Address verification for all credit card transactions</li>
              <li>CVV verification required</li>
              <li>3D Secure authentication for online payments</li>
              <li>Manual review of suspicious transactions</li>
              <li>Compliance with anti-money laundering regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">14. Contact Information</h2>
            <p>
              For questions about our business policies or to request documentation:
            </p>
            <div className="mt-4 p-6 bg-gray-50 border border-gray-200">
              <p className="mb-2"><strong>Suydam Williams Photography</strong></p>
              <p className="mb-1">Business Operations Department</p>
              <p>13627 Greenview Ave</p>
              <p>Baton Rouge, LA 70816</p>
              <p className="mt-2">General Inquiries: suydamstudio@yahoo.com</p>
              <p>Legal/Compliance: legal@suydamwilliams.com</p>
              <p>Billing: billing@suydamwilliams.com</p>
              <p>Complaints: complaints@suydamwilliams.com</p>
              <p className="mt-2">Phone: (959) 999-6154</p>
              <p>Fax: (555) 123-4568</p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600">
              These business policies demonstrate our commitment to professional, ethical, and legally compliant 
              operations. They are designed to meet merchant underwriting requirements and provide transparency 
              to our clients and business partners. All policies are subject to periodic review and updates to 
              ensure continued compliance with applicable laws and industry standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}