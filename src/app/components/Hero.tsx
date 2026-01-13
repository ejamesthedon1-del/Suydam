import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1719786625035-71f46082e385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3OTk3NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          Timeless Moments,
          <br />
          Captured Forever
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
          Premium photography services for weddings, portraits, and fine art. 
          Creating sophisticated imagery that tells your unique story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToBooking}
            className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
          >
            Book a Session
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('portfolio');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors"
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
