import { PortfolioCompany } from '@/types';

interface PortfolioCardProps {
  company: PortfolioCompany;
}

export default function PortfolioCard({ company }: PortfolioCardProps) {
  return (
    <div className="card p-6 group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
            {company.name}
          </h3>
          <p className="text-sm text-accent font-medium">{company.sector}</p>
        </div>
        {company.status === 'exited' && (
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
            Exited
          </span>
        )}
      </div>

      <p className="text-text-light text-sm mb-4 line-clamp-3">
        {company.description}
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-text-light">
        <div>
          <span className="font-semibold text-text">Investment: </span>
          {company.investmentYear}
        </div>
        {company.investmentSize && (
          <div>
            <span className="font-semibold text-text">Size: </span>
            {company.investmentSize}
          </div>
        )}
        {company.exitYear && (
          <div>
            <span className="font-semibold text-text">Exit: </span>
            {company.exitYear}
          </div>
        )}
      </div>

      {company.exitType && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-text-light">
            <span className="font-semibold text-text">Exit Type: </span>
            {company.exitType}
          </p>
        </div>
      )}
    </div>
  );
}
