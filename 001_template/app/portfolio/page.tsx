'use client';

import { useState, useEffect } from 'react';
import { portfolioCompanies } from '@/lib/data';
import { PortfolioSector } from '@/types';
import { useScrollAnimations } from '@/utils/scrollAnimations';

const sectors: PortfolioSector[] = ['All', 'Technology', 'Healthcare', 'Financial Services', 'Consumer', 'Industrial'];

export default function PortfolioPage() {
  const [selectedSector, setSelectedSector] = useState<PortfolioSector>('All');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'exited'>('all');

  useScrollAnimations();

  const filteredCompanies = portfolioCompanies.filter((company) => {
    const matchesSector = selectedSector === 'All' || company.sector === selectedSector;
    const matchesStatus = selectedStatus === 'all' || company.status === selectedStatus;
    return matchesSector && matchesStatus;
  });

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Our Portfolio</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">Strategic investments across technology, healthcare, and financial services sectors.</p>
        </div>
      </section>

      <section className="bg-black border-b border-white/5 sticky top-0 z-40 backdrop-blur-xl">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <label className="text-sm font-semibold text-white mb-2 block">Filter by Sector</label>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className={`px-4 py-2 text-xs font-light tracking-wide transition ${
                      selectedSector === sector
                        ? 'bg-red-600 text-white'
                        : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-white mb-2 block">Status</label>
              <div className="flex gap-2">
                {['all', 'active', 'exited'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status as any)}
                    className={`px-4 py-2 text-xs font-light tracking-wide capitalize transition ${
                      selectedStatus === status
                        ? 'bg-red-600 text-white'
                        : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-neutral-500">
            Showing {filteredCompanies.length} of {portfolioCompanies.length} companies
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {filteredCompanies.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredCompanies.map((company, index) => (
                <div
                  key={company.id}
                  className="group relative aspect-square overflow-hidden bg-neutral-900 border border-white/5 transition hover:border-red-500/30 animate-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    {company.status === 'exited' && (
                      <span className="px-2 py-1 bg-red-500/90 text-white text-xs font-light backdrop-blur-sm">Exited</span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-lg font-heading font-light text-white mb-1">{company.name}</h3>
                    <p className="text-xs text-neutral-400">{company.sector}</p>
                    <p className="text-xs text-neutral-500 mt-2">Invested {company.investmentYear}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-neutral-500">No companies found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-transparent via-red-950/5 to-transparent">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-light text-white text-center mb-12">Performance Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: portfolioCompanies.filter((c) => c.status === 'active').length, label: 'Active Investments' },
              { value: portfolioCompanies.filter((c) => c.status === 'exited').length, label: 'Successful Exits' },
              { value: '5', label: 'Industry Sectors' },
              { value: '$800M+', label: 'Capital Deployed' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-light text-red-500 mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-400 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
