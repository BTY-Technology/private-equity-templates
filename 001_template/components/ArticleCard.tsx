import Link from 'next/link';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="card overflow-hidden group block"
    >
      {article.image && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent/20 group-hover:scale-105 transition-transform duration-300" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-accent uppercase tracking-wide">
            {article.category}
          </span>
          {article.readTime && (
            <span className="text-xs text-text-light">{article.readTime}</span>
          )}
        </div>

        <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-text-light text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-text-light">
          <span>{article.author}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
}
