import { useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Menu, X, Camera, Award, Clock, Shield } from 'lucide-react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { Portfolio } from '@/app/components/Portfolio';
import { Services } from '@/app/components/Services';
import { BookingSection } from '@/app/components/BookingSection';
import { Footer } from '@/app/components/Footer';
import { TermsOfService } from '@/app/components/TermsOfService';
import { PrivacyPolicy } from '@/app/components/PrivacyPolicy';
import { RefundPolicy } from '@/app/components/RefundPolicy';
import { BusinessPolicies } from '@/app/components/BusinessPolicies';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy' | 'refund' | 'policies'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Portfolio />
          <Services />
          <BookingSection />
          <Footer setCurrentPage={setCurrentPage} />
        </>
      )}
      
      {currentPage === 'terms' && <TermsOfService setCurrentPage={setCurrentPage} />}
      {currentPage === 'privacy' && <PrivacyPolicy setCurrentPage={setCurrentPage} />}
      {currentPage === 'refund' && <RefundPolicy setCurrentPage={setCurrentPage} />}
      {currentPage === 'policies' && <BusinessPolicies setCurrentPage={setCurrentPage} />}
    </div>
  );
}
