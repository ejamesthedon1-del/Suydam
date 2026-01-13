import { Check, Camera, Users, Building2, Heart, Sparkles, Award } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      price: "Starting at $3,500",
      description: "Comprehensive coverage of your special day with premium editing and digital gallery.",
      features: [
        "8 hours of coverage",
        "Two professional photographers",
        "300+ edited high-resolution images",
        "Online gallery with download rights",
        "Engagement session included",
        "Custom wedding album (40 pages)"
      ]
    },
    {
      icon: Users,
      title: "Portrait Sessions",
      price: "Starting at $450",
      description: "Professional portrait photography for individuals, couples, and families.",
      features: [
        "1-2 hour session",
        "Multiple outfit changes",
        "Location of your choice",
        "30+ edited images",
        "Personal online gallery",
        "Print release included"
      ]
    },
    {
      icon: Building2,
      title: "Corporate & Headshots",
      price: "Starting at $350",
      description: "Professional imagery for executives, teams, and business branding.",
      features: [
        "Studio or on-location",
        "Multiple backgrounds available",
        "Same-day turnaround available",
        "Bulk pricing for teams",
        "Usage rights included",
        "Professional retouching"
      ]
    },
    {
      icon: Sparkles,
      title: "Event Photography",
      price: "Starting at $1,200",
      description: "Capturing corporate events, galas, and special celebrations with sophistication.",
      features: [
        "4+ hours of coverage",
        "Candid and posed shots",
        "Fast turnaround (48 hours)",
        "100+ edited images",
        "Event highlights album",
        "Social media ready files"
      ]
    },
    {
      icon: Camera,
      title: "Fine Art & Editorial",
      price: "Custom Quote",
      description: "Bespoke photography services for publications, brands, and artistic projects.",
      features: [
        "Creative direction included",
        "Location scouting",
        "Professional styling coordination",
        "Unlimited revisions",
        "Full licensing options",
        "Exclusive usage rights available"
      ]
    },
    {
      icon: Award,
      title: "Premium Package",
      price: "Starting at $8,500",
      description: "Our signature all-inclusive experience with white-glove service throughout.",
      features: [
        "Full-day coverage (12+ hours)",
        "Three professional photographers",
        "Unlimited edited images",
        "Same-day sneak peek",
        "Premium albums and prints",
        "Complimentary engagement & day-after session"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored photography packages designed to meet your unique needs with exceptional quality and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="mb-6">
                  <div className="size-12 bg-gray-900 text-white flex items-center justify-center mb-4">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-900">{service.price}</p>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="size-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-8 px-6 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                  Book This Package
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 p-8 bg-gray-50 border border-gray-200">
          <h3 className="text-xl mb-4 text-gray-900">What's Included in All Packages</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <p className="mb-2"><span className="text-gray-900">✓</span> Professional editing & color correction</p>
              <p className="mb-2"><span className="text-gray-900">✓</span> High-resolution digital files</p>
            </div>
            <div>
              <p className="mb-2"><span className="text-gray-900">✓</span> Private online gallery</p>
              <p className="mb-2"><span className="text-gray-900">✓</span> Download & print rights</p>
            </div>
            <div>
              <p className="mb-2"><span className="text-gray-900">✓</span> Professional liability insurance</p>
              <p className="mb-2"><span className="text-gray-900">✓</span> Backup equipment & redundancy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
