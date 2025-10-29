'use client';

import ContactForm from '@/components/ContactForm';
import { officeLocations } from '@/lib/data';
import { useScrollAnimations } from '@/utils/scrollAnimations';

export default function ContactPage() {
  useScrollAnimations();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Contact Us</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Let&apos;s discuss how we can partner to build exceptional businesses together.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden p-12 sm:p-16 bg-gradient-to-br from-red-950/10 via-black to-purple-950/20 border-red-500/20 border relative backdrop-blur-xl animate-in">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>

            <div className="relative">
              <h2 className="text-3xl font-heading font-light text-white mb-8 text-center">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((location) => (
              <div key={location.id} className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm animate-in">
                <h3 className="text-lg font-heading font-light text-white mb-3">{location.city}</h3>
                <p className="text-sm text-neutral-400 whitespace-pre-line mb-3">{location.address}</p>
                <p className="text-sm text-neutral-500">
                  <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-red-400 transition">
                    {location.phone}
                  </a>
                </p>
                <p className="text-sm text-neutral-500">
                  <a href={`mailto:${location.email}`} className="hover:text-red-400 transition">
                    {location.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
