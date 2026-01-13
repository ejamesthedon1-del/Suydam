import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: 'home' | 'terms' | 'privacy' | 'refund' | 'policies') => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-0.5 group md:flex md:items-center md:gap-0.5"
          >
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-12 w-12 md:h-20 md:w-20 object-contain"
            />
            <div className="flex flex-col -ml-2 md:-ml-5">
              <span className="text-lg md:text-2xl tracking-tight text-gray-900">SUYDAM WILLIAMS</span>
              <span className="text-xs md:text-sm text-gray-900 tracking-[0.35em]">PHOTOGRAPHY</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => setCurrentPage('policies')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Policies
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="px-6 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="size-6 text-gray-900" />
            ) : (
              <Menu className="size-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Contact
            </button>
            <button 
              onClick={() => {
                setCurrentPage('policies');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Policies
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="block w-full px-6 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-center"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}