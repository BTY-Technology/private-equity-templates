'use client';

import { useState } from 'react';
import { articles } from '@/lib/data';
import { ArticleCategory } from '@/types';
import { useScrollAnimations } from '@/utils/scrollAnimations';

const categories: ArticleCategory[] = ['All', 'Market Analysis', 'Thought Leadership', 'Company News', 'Industry Insights'];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('All');
  useScrollAnimations();

  const filteredArticles = articles.filter(
    (article) => selectedCategory === 'All' || article.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 md:py-28">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-heading font-light mb-6">Insights & News</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">Market analysis, thought leadership, and company updates.</p>
        </div>
      </section>

      <section className="bg-black border-b border-white/5 sticky top-0 z-40 backdrop-blur-xl">
        <div className="container-custom py-6">
          <label className="text-sm font-semibold text-white mb-2 block">Filter by Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-light tracking-wide transition ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-neutral-500">Showing {filteredArticles.length} articles</div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div key={article.id} className="group card border border-white/5 overflow-hidden bg-neutral-900 hover:border-red-500/30 transition animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">{article.category}</span>
                  <h3 className="text-xl font-heading font-light text-white my-3 group-hover:text-red-400 transition line-clamp-2">{article.title}</h3>
                  <p className="text-neutral-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
