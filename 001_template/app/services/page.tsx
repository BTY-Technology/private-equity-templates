'use client';

import { services } from '@/lib/data';
import Button from '@/components/Button';
import { useScrollAnimations } from '@/utils/scrollAnimations';

export default function ServicesPage() {
  useScrollAnimations();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Our Services</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">Comprehensive investment and operational support designed to accelerate growth and drive value creation.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className={`overflow-hidden bg-gradient-to-br ${index % 2 === 0 ? 'from-red-950/20' : 'from-purple-950/20'} to-transparent border ${index % 2 === 0 ? 'border-red-500/10' : 'border-purple-500/10'} backdrop-blur-sm p-8 animate-in`} style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-3xl font-heading font-light text-white mb-4">{service.title}</h3>
                {service.ticketSize && <div className="inline-block px-4 py-2 bg-red-500/10 text-red-400 font-light rounded mb-4">{service.ticketSize}</div>}
                <p className="text-neutral-400 mb-6 font-light">{service.description}</p>
                <ul className="space-y-3">
                  {service.focus.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-300 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-transparent via-red-950/5 to-transparent">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden p-12 sm:p-16 bg-gradient-to-br from-red-950/10 via-black to-purple-950/20 border-red-500/20 border relative backdrop-blur-xl animate-in text-center">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">Interested in Partnering?</h2>
              <p className="text-lg text-neutral-300 mb-8">If you&apos;re a growth-stage company looking for strategic capital, we&apos;d love to hear from you.</p>
              <Button href="/contact" variant="white" size="lg">Contact Us Today</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
