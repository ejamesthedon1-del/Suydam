import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  setCurrentPage: (page: 'home' | 'terms' | 'privacy' | 'refund' | 'policies') => void;
}

export function TermsOfService({ setCurrentPage }: TermsOfServiceProps) {
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

        <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Terms of Service</h1>
        <p className="text-gray-600 mb-12">Last Updated: January 9, 2026</p>

        <div className="prose max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">1. Agreement to Terms</h2>
            <p>
              By accessing and using the services of Suydam Williams Photography ("Company", "we", "our", or "us"), 
              you agree to be bound by these Terms of Service. If you disagree with any part of these terms, 
              you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">2. Services Provided</h2>
            <p>
              Suydam Williams Photography provides professional photography services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Wedding photography and videography</li>
              <li>Portrait and family photography sessions</li>
              <li>Corporate headshots and business photography</li>
              <li>Event photography services</li>
              <li>Fine art and editorial photography</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">3. Booking and Payment Terms</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.1 Booking Process</h3>
            <p>
              All bookings require a signed contract and non-refundable deposit of 50% of the total package price. 
              Your booking date is not secured until both the contract and deposit are received.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.2 Payment Schedule</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>50% deposit due upon booking to secure your date</li>
              <li>Remaining 50% balance due 14 days prior to the scheduled session/event</li>
              <li>Late payments may result in postponement or cancellation of services</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.3 Accepted Payment Methods</h3>
            <p>
              We accept payment via bank transfer, credit card, debit card, and certified checks. 
              A 3% processing fee applies to all credit card transactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">4. Cancellation and Rescheduling</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">4.1 Client Cancellation</h3>
            <p>
              If you need to cancel your booking, please refer to our Refund Policy. The 50% deposit is 
              non-refundable under all circumstances as it represents lost business opportunity.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">4.2 Rescheduling</h3>
            <p>
              Rescheduling is permitted one time only, subject to availability, with at least 30 days notice. 
              Rescheduling requests made with less than 30 days notice may incur a rescheduling fee of $250.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">4.3 Force Majeure</h3>
            <p>
              We are not liable for failure to perform services due to circumstances beyond our control, 
              including but not limited to natural disasters, severe weather, illness, or equipment failure. 
              In such cases, we will work with you to reschedule or provide a suitable substitute photographer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">5. Copyright and Usage Rights</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.1 Copyright Ownership</h3>
            <p>
              All photographs and digital files remain the intellectual property and copyright of Suydam Williams Photography. 
              We grant you a non-exclusive license to use the images for personal purposes.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.2 Commercial Use</h3>
            <p>
              Commercial use of images requires a separate licensing agreement and additional fees. 
              This includes but is not limited to advertising, resale, or publication.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.3 Our Promotional Use</h3>
            <p>
              We reserve the right to use photographs for our portfolio, website, social media, advertising, 
              and promotional materials unless you have purchased exclusive rights or requested privacy in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">6. Delivery and Turnaround Time</h2>
            <p>
              Final edited images will be delivered within the following timeframes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Wedding photography: 8-12 weeks from event date</li>
              <li>Portrait sessions: 3-4 weeks from session date</li>
              <li>Corporate/headshots: 1-2 weeks from session date</li>
              <li>Event photography: 2-3 weeks from event date</li>
            </ul>
            <p className="mt-4">
              Rush delivery is available for an additional fee. These timeframes may be extended during peak season (May-October).
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">7. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate contact information and event details</li>
              <li>Obtain necessary permissions for photography at venues</li>
              <li>Inform us of any special requirements or restrictions</li>
              <li>Ensure family members and guests cooperate with photography</li>
              <li>Provide a safe working environment for our photographers</li>
              <li>Make timely payments as outlined in the contract</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">8. Limitation of Liability</h2>
            <p>
              Our liability is limited to the refund of fees paid. We carry professional liability insurance 
              and equipment backup systems, but cannot be held responsible for circumstances beyond our control. 
              We are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Images not captured due to interference by guests or third parties</li>
              <li>Technical failures beyond our reasonable control</li>
              <li>Venue restrictions on photography</li>
              <li>Consequential damages or lost profits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">9. Image Editing and Alterations</h2>
            <p>
              All images are professionally edited and color-corrected as part of our standard service. 
              Additional retouching requests beyond standard editing may incur extra charges at $75 per hour.
            </p>
            <p className="mt-4">
              RAW, unedited files are not provided under any circumstances as they do not represent our professional standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">10. Model Release</h2>
            <p>
              By booking our services, you grant us permission to use photographs containing your likeness for 
              promotional purposes. If you require privacy or do not wish images to be used publicly, 
              you must request this in writing and may be subject to a privacy fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">11. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms will be governed by the laws of the State of Louisiana. 
              Both parties agree to first attempt to resolve disputes through mediation before pursuing litigation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">12. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on 
              our website with the revision date. Continued use of our services after modifications constitutes 
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">13. Contact Information</h2>
            <p>
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-50 border border-gray-200">
              <p className="mb-2"><strong>Suydam Williams Photography</strong></p>
              <p>13627 Greenview Ave</p>
              <p>Baton Rouge, LA 70816</p>
              <p className="mt-2">Email: suydamstudio@yahoo.com</p>
              <p>Phone: (959) 999-6154</p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600">
              By booking our services and signing our contract, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}