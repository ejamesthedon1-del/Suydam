import { Camera, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'terms' | 'privacy' | 'refund' | 'policies') => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="size-8" strokeWidth={1.5} />
              <span className="text-2xl tracking-tight">SUYDAM WILLIAMS</span>
            </div>
            <p className="text-white/70 mb-4">
              Premium photography services capturing timeless moments with sophistication and artistry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/70 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Wedding Photography</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Portrait Sessions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Corporate & Headshots</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Event Photography</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Fine Art & Editorial</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <button 
                  onClick={() => setCurrentPage('policies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Business Policies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('refund')}
                  className="hover:text-white transition-colors text-left"
                >
                  Refund Policy
                </button>
              </li>
              <li><a href="#booking" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-white/70">
              <li>13627 Greenview Ave</li>
              <li>Baton Rouge, LA 70816</li>
              <li className="pt-2">
                <a href="tel:+19599996154" className="hover:text-white transition-colors">
                  (959) 999-6154
                </a>
              </li>
              <li>
                <a href="mailto:suydamstudio@yahoo.com" className="hover:text-white transition-colors">
                  suydamstudio@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
            <p>&copy; 2026 Lens & Light Photography. All rights reserved.</p>
            <div className="flex gap-6">
              <button 
                onClick={() => setCurrentPage('terms')}
                className="hover:text-white transition-colors"
              >
                Terms
              </button>
              <button 
                onClick={() => setCurrentPage('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy
              </button>
              <button 
                onClick={() => setCurrentPage('refund')}
                className="hover:text-white transition-colors"
              >
                Refunds
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}