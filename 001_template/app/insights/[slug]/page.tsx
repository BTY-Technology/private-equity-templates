import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '@/lib/data';
import Button from '@/components/Button';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.publishedDate).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Article Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20 md:py-28">
        <div className="container-custom max-w-4xl">
          <Link
            href="/insights"
            className="inline-flex items-center text-accent hover:text-accent-hover transition-colors mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Insights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">
              {article.category}
            </span>
            {article.readTime && (
              <span className="text-xs text-gray-400">{article.readTime}</span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-300">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-text-light leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Sample Content - Replace with actual article content */}
            <div className="space-y-6 text-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Key Insights
              </h2>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <ul className="list-disc list-inside space-y-2 my-6">
                <li>Strategic market positioning and competitive advantages</li>
                <li>Operational efficiency and cost optimization strategies</li>
                <li>Technology adoption and digital transformation</li>
                <li>M&A opportunities and market consolidation trends</li>
              </ul>

              <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
                Looking Forward
              </h2>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <div className="bg-background p-8 rounded-lg my-12">
                <p className="text-lg font-semibold text-primary mb-2">
                  Key Takeaway
                </p>
                <p className="text-text-light italic">
                  &quot;The convergence of technology and traditional industries
                  presents unprecedented opportunities for value creation in the
                  coming decade.&quot;
                </p>
              </div>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold text-text mb-4">
                Share this article
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium transition-colors">
                  LinkedIn
                </button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium transition-colors">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium transition-colors">
                  Email
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/insights/${relatedArticle.slug}`}
                  className="card p-6 hover:shadow-xl transition-shadow"
                >
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-primary mt-3 mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-text-light line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Interested in Learning More?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Connect with our team to discuss investment opportunities and
            partnership possibilities.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
