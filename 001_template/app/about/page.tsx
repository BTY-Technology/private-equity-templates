'use client';

import { leadershipTeam } from '@/lib/data';
import Button from '@/components/Button';
import { useScrollAnimations } from '@/utils/scrollAnimations';

export default function AboutPage() {
  useScrollAnimations();

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">About Apex Capital</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">Building exceptional businesses through strategic capital and operational expertise since 2008.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-8 text-center animate-in">Our Story</h2>
          <div className="space-y-6 text-neutral-300 font-light leading-relaxed animate-in delay-100">
            <p>Founded in 2008, Apex Capital Partners has established itself as a leading private equity firm focused on growth investments in technology, healthcare, and financial services. With over $2.5 billion in assets under management, we partner with exceptional management teams to build market-leading companies.</p>
            <p>Our investment philosophy is built on three core principles: deep sector expertise, hands-on operational support, and long-term partnership. We believe that sustainable value creation comes from working closely with management teams to accelerate growth, improve operations, and capture strategic opportunities.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-transparent via-red-950/5 to-transparent">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-12 text-center animate-in">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadershipTeam.map((member, index) => (
              <div key={member.id} className="card p-8 border border-white/5 bg-white/5 backdrop-blur-sm animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0 ring-2 ring-white/10"
                  />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-heading font-light text-white mb-1">{member.name}</h3>
                    <p className="text-red-400 font-light mb-4">{member.title}</p>
                    <p className="text-neutral-400 text-sm mb-4 font-light">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden p-12 sm:p-16 bg-gradient-to-br from-red-950/10 via-black to-purple-950/20 border-red-500/20 border relative backdrop-blur-xl animate-in text-center">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">Join Our Team</h2>
              <p className="text-lg text-neutral-300 mb-8">We&apos;re always looking for talented professionals to join our team.</p>
              <Button href="/contact" variant="white" size="lg">View Opportunities</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
