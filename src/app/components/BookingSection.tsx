import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Award, Shield } from 'lucide-react';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight text-gray-900">
            Book Your Session
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's create something beautiful together. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-2xl mb-6 text-gray-900">Send Us a Message</h3>
            
            {submitted ? (
              <div className="p-6 bg-gray-900 text-white text-center">
                <p className="text-xl mb-2">Thank you for your inquiry!</p>
                <p>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Sessions</option>
                    <option value="corporate">Corporate & Headshots</option>
                    <option value="event">Event Photography</option>
                    <option value="fine-art">Fine Art & Editorial</option>
                    <option value="premium">Premium Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="size-5" />
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="underline hover:text-gray-900">Terms of Service</a> and{' '}
                  <a href="#" className="underline hover:text-gray-900">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="size-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-1">Email</p>
                    <a href="mailto:hello@lensandlight.com" className="text-gray-900 hover:underline">
                      hello@suydamwilliams.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="size-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-900 hover:underline">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="size-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-1">Studio Location</p>
                    <p className="text-gray-900">
                      13627 Greenview Ave<br />
                      Baton Rouge, LA 70816
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="size-6 text-gray-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-1">Business Hours</p>
                    <p className="text-gray-900">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-900 text-white p-8">
              <h3 className="text-xl mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="size-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-1">Award-Winning Photography</p>
                    <p className="text-white/80 text-sm">Recognized by industry leaders for excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="size-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-1">Fully Insured & Licensed</p>
                    <p className="text-white/80 text-sm">$2M liability coverage for your peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="size-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="mb-1">10+ Years Experience</p>
                    <p className="text-white/80 text-sm">Trusted by over 500 satisfied clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}