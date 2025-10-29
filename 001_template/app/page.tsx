'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';
import GlowEffect from '@/components/GlowEffect';
import { portfolioCompanies } from '@/lib/data';
import { useScrollAnimations, useHeroScrollEffect } from '@/utils/scrollAnimations';

export default function Home() {
  useScrollAnimations();
  useHeroScrollEffect('hero-content', 'portrait-img');

  const featuredPortfolio = portfolioCompanies.slice(0, 4);

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('#hero-content .animate-in').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <GlowEffect color="red" position="top-left" size="lg" />
          <GlowEffect color="purple" position="bottom-right" size="lg" />
        </div>

        <div id="hero-content" className="relative z-10 text-center px-6 py-32">
          <div className="mb-12 flex justify-center">
            <div className="relative animate-float animate-in scale-in delay-100">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 via-transparent to-transparent rounded-full blur-2xl"></div>
              <div className="w-80 h-80 md:w-96 md:h-96 overflow-hidden ring-1 ring-neutral-50/20 rounded-full relative">
                <img
                  id="portrait-img"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&crop=edges"
                  alt="Apex Capital Partners"
                  className="w-full h-full object-cover"
                  style={{ willChange: 'filter' }}
                />
                <div className="bg-gradient-to-b from-black/20 via-transparent to-black/60 absolute inset-0"></div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-6 text-outline animate-in delay-200 font-heading">
            APEX CAPITAL
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-extralight tracking-wide text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-in delay-300">
            Building exceptional businesses through strategic capital and operational expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-400">
            <Button
              href="/portfolio"
              variant="primary"
              size="lg"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              }
            >
              View Portfolio
            </Button>
            <Button href="/contact" variant="outline" size="lg"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              }
            >
              Get in Touch
            </Button>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce animate-in delay-500">
            <span className="text-xs font-light tracking-widest">SCROLL</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14m7-7-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4 animate-in font-heading">
              Portfolio Companies
            </h2>
            <p className="text-sm sm:text-base font-extralight tracking-wide text-neutral-400 animate-in delay-100">
              Strategic investments driving industry transformation
            </p>
          </div>

          <div className="space-y-12 lg:space-y-8">
            {featuredPortfolio.map((company, index) => (
              <div
                key={company.id}
                className={`group relative overflow-hidden bg-gradient-to-br ${
                  index % 4 === 0 ? 'from-red-950/20' :
                  index % 4 === 1 ? 'from-purple-950/20' :
                  index % 4 === 2 ? 'from-amber-950/20' : 'from-red-950/20'
                } to-transparent border ${
                  index % 4 === 0 ? 'border-red-500/10 hover:border-red-500/30' :
                  index % 4 === 1 ? 'border-purple-500/10 hover:border-purple-500/30' :
                  index % 4 === 2 ? 'border-amber-500/10 hover:border-amber-500/30' : 'border-red-500/10 hover:border-red-500/30'
                } backdrop-blur-sm transition-all animate-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className={`lg:col-span-5 aspect-video lg:aspect-square overflow-hidden order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="w-full h-full relative group-hover:scale-105 transition duration-700">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60"></div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 p-8 lg:p-12 order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`text-5xl font-extralight ${
                        index % 4 === 0 ? 'text-red-500/60' :
                        index % 4 === 1 ? 'text-purple-500/60' :
                        index % 4 === 2 ? 'text-amber-500/60' : 'text-pink-500/60'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className={`h-px flex-1 bg-gradient-to-r ${
                        index % 4 === 0 ? 'from-red-500/40' :
                        index % 4 === 1 ? 'from-purple-500/40' :
                        index % 4 === 2 ? 'from-amber-500/40' : 'from-pink-500/40'
                      } to-transparent`}></div>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-2 font-heading">
                      {company.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-4">
                      {company.sector} • Invested {company.investmentYear}
                    </p>
                    <p className="text-sm font-light text-neutral-400 mb-8 leading-relaxed italic">
                      &quot;{company.description}&quot;
                    </p>

                    <Button href="/portfolio" variant="outline" size="sm">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-12 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-transparent via-red-950/5 to-transparent">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-8 animate-in font-heading">
            Investment Excellence
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent w-64 mx-auto mb-12 animate-in delay-100"></div>
          <p className="text-base sm:text-lg font-light leading-relaxed text-neutral-300 mb-8 animate-in delay-200">
            For over 15 years, Apex Capital Partners has partnered with exceptional management teams to build market-leading companies.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-400 font-extralight animate-in delay-300">
            Our hands-on approach combines strategic capital with operational expertise, driving sustainable growth in every portfolio company.
          </p>
          <div className="mt-12 animate-in delay-400">
            <Button href="/about" variant="outline" size="lg">
              Learn About Our Approach
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden p-12 sm:p-16 bg-gradient-to-br from-red-950/10 via-black to-purple-950/20 border-red-500/20 border relative backdrop-blur-xl animate-in">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6 font-heading">
                Partner With Us
              </h2>
              <p className="text-base sm:text-lg font-light text-neutral-300 mb-12">
                Building the next generation of market leaders together.
              </p>

              <Button href="/contact" variant="white" size="lg"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                }
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
