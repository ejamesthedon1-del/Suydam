import { ArrowLeft } from 'lucide-react';

interface RefundPolicyProps {
  setCurrentPage: (page: 'home' | 'terms' | 'privacy' | 'refund' | 'policies') => void;
}

export function RefundPolicy({ setCurrentPage }: RefundPolicyProps) {
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

        <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Refund & Cancellation Policy</h1>
        <p className="text-gray-600 mb-12">Last Updated: January 9, 2026</p>

        <div className="prose max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">1. Overview</h2>
            <p>
              At Suydam Williams Photography, we understand that circumstances may change. This Refund & Cancellation 
              Policy outlines the terms under which refunds may be issued and bookings may be cancelled. 
              We strive to be fair and transparent in all our business dealings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">2. Deposit Policy</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">2.1 Non-Refundable Deposit</h3>
            <p>
              All bookings require a 50% deposit to secure your date. <strong>This deposit is non-refundable 
              under all circumstances</strong>, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Client-initiated cancellations</li>
              <li>Change of mind or plans</li>
              <li>Date changes or postponements</li>
              <li>Weather-related cancellations (see Force Majeure section)</li>
              <li>Illness or personal emergencies (see Compassionate Circumstances section)</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">2.2 Purpose of Deposit</h3>
            <p>
              The deposit serves to hold your date exclusively and represents lost business opportunity. 
              Once we accept your deposit, we decline all other inquiries for that date, making it impossible 
              to rebook if you cancel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">3. Cancellation Timeframes</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.1 Cancellation More Than 90 Days Before Event</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Deposit: Non-refundable</li>
              <li>Balance paid: 100% refund if balance has been paid</li>
              <li>Rescheduling: One free date change permitted (subject to availability)</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.2 Cancellation 60-89 Days Before Event</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Deposit: Non-refundable</li>
              <li>Balance paid: 50% refund of balance paid</li>
              <li>Rescheduling: $250 rescheduling fee applies</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.3 Cancellation 30-59 Days Before Event</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Deposit: Non-refundable</li>
              <li>Balance paid: 25% refund of balance paid</li>
              <li>Rescheduling: $500 rescheduling fee applies</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">3.4 Cancellation Less Than 30 Days Before Event</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Deposit: Non-refundable</li>
              <li>Balance paid: Non-refundable</li>
              <li>100% of package price is due and non-refundable</li>
              <li>Rescheduling: Not permitted</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">4. Rescheduling Policy</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">4.1 One-Time Date Change</h3>
            <p>
              Clients may reschedule their booking one time only, subject to photographer availability and 
              the fees outlined above. The rescheduled date must be within 12 months of the original date.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">4.2 Subsequent Changes</h3>
            <p>
              Any additional date changes will be treated as a cancellation, and standard cancellation policies apply.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">4.3 Availability Not Guaranteed</h3>
            <p>
              Rescheduling is subject to photographer availability. If we cannot accommodate your new date, 
              standard cancellation refund terms apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">5. Photographer-Initiated Cancellation</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.1 Full Refund Circumstances</h3>
            <p>
              If Suydam Williams Photography must cancel your booking for any reason, you will receive a 100% 
              refund of all payments made. Our liability is limited to the refund amount.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">5.2 Substitute Photographer</h3>
            <p>
              In the event of photographer illness or emergency, we reserve the right to provide a qualified 
              substitute photographer of equal skill and experience. If you decline the substitute, standard 
              cancellation refund policies apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">6. Force Majeure</h2>
            <p>
              Force majeure events include circumstances beyond our reasonable control, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Natural disasters (hurricanes, earthquakes, floods)</li>
              <li>Government-mandated restrictions or lockdowns</li>
              <li>Severe weather making travel impossible or dangerous</li>
              <li>Acts of terrorism or war</li>
              <li>Pandemics or public health emergencies</li>
            </ul>
            <p className="mt-4">
              <strong>Force Majeure - Client Cancellation:</strong> If you cancel due to force majeure, 
              we will offer rescheduling at no additional charge (one time only) or apply your deposit 
              as a credit toward future services within 24 months. Deposits remain non-refundable.
            </p>
            <p className="mt-4">
              <strong>Force Majeure - Photographer Cancellation:</strong> If we cannot perform services 
              due to force majeure, we will reschedule or provide a full refund at your discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">7. Compassionate Circumstances</h2>
            <p>
              We recognize that life brings unexpected challenges. In cases of serious illness, death of an 
              immediate family member, or other extraordinary circumstances, we will work with you on a 
              case-by-case basis to find a fair solution.
            </p>
            <p className="mt-4">
              While deposits remain non-refundable, we may offer:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Extended credit for future services (up to 24 months)</li>
              <li>Transferability of booking to another party</li>
              <li>Waived rescheduling fees for one date change</li>
            </ul>
            <p className="mt-4">
              Documentation may be required to qualify for compassionate consideration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">8. Refund Processing</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.1 Refund Method</h3>
            <p>
              Refunds will be issued to the original payment method within 14 business days of cancellation approval.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.2 Processing Fees</h3>
            <p>
              Credit card processing fees (3% of transaction) are non-refundable and will be deducted from 
              any refund amount.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">8.3 Refund Confirmation</h3>
            <p>
              You will receive written confirmation once the refund has been processed. Please allow 5-10 
              business days for the refund to appear in your account depending on your financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">9. Dissatisfaction with Services</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">9.1 Quality Guarantee</h3>
            <p>
              We stand behind the quality of our work. If you are unsatisfied with the final edited images, 
              please contact us within 14 days of delivery with specific concerns.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">9.2 Resolution Process</h3>
            <p>
              We will work with you to address legitimate concerns through:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Additional editing or corrections</li>
              <li>Re-shooting (if feasible and at our discretion)</li>
              <li>Partial refund in exceptional circumstances</li>
            </ul>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">9.3 Limitations</h3>
            <p>
              Refunds will not be issued for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Subjective style preferences</li>
              <li>Changes of mind after delivery</li>
              <li>Issues caused by client or third-party interference</li>
              <li>Circumstances communicated in advance (e.g., venue restrictions)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">10. Package Add-Ons and Products</h2>
            
            <h3 className="text-xl mb-3 mt-6 text-gray-900">10.1 Physical Products</h3>
            <p>
              Albums, prints, and other physical products are custom-made and non-refundable once production 
              has begun. You will receive proofs for approval before production.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">10.2 Digital Add-Ons</h3>
            <p>
              Digital products (additional edited images, RAW files, expedited delivery) are non-refundable 
              once delivered.
            </p>

            <h3 className="text-xl mb-3 mt-6 text-gray-900">10.3 Defective Products</h3>
            <p>
              We will replace or refund any physical products with manufacturing defects at no charge if 
              reported within 30 days of receipt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">11. Travel Fees</h2>
            <p>
              Travel fees paid for destination photography services are non-refundable as they cover actual 
              costs incurred (flights, accommodations, permits) that cannot be recovered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">12. How to Request a Refund</h2>
            <p>To request a refund or cancellation:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Submit a written request to cancellations@suydamwilliams.com</li>
              <li>Include your booking reference number and reason for cancellation</li>
              <li>We will review your request and respond within 3 business days</li>
              <li>Approved refunds will be processed within 14 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">13. Chargebacks</h2>
            <p>
              Initiating a chargeback without first contacting us constitutes breach of contract. If you 
              dispute a charge with your credit card company:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>We will provide documentation to your credit card company</li>
              <li>Your images and gallery access will be suspended pending resolution</li>
              <li>You may be liable for legal fees if the chargeback is found to be fraudulent</li>
            </ul>
            <p className="mt-4">
              Please contact us first to resolve any billing disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">14. Contact Information</h2>
            <p>
              For questions about our refund policy or to request a cancellation:
            </p>
            <div className="mt-4 p-6 bg-gray-50 border border-gray-200">
              <p className="mb-2"><strong>Suydam Williams Photography</strong></p>
              <p>Cancellations & Refunds Department</p>
              <p>13627 Greenview Ave</p>
              <p>Baton Rouge, LA 70816</p>
              <p className="mt-2">Email: cancellations@suydamwilliams.com</p>
              <p>Phone: (555) 123-4567</p>
              <p className="mt-2 text-sm">Office hours: Monday-Friday, 9:00 AM - 6:00 PM CST</p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600">
              This refund policy is part of your service contract and is legally binding. By booking our services, 
              you acknowledge that you have read, understood, and agree to these terms. This policy complies with 
              consumer protection laws and merchant processing guidelines.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}