# Apex Capital Partners - Private Equity Website Template

A premium, production-ready website template for private equity firms built with Next.js 14, TypeScript, and Tailwind CSS. Features a sophisticated design aesthetic with comprehensive functionality for showcasing portfolios, team profiles, services, and insights.

## 🌟 Features

### Design & User Experience
- 💼 **Premium Corporate Aesthetic**: Minimalist, sophisticated design tailored for institutional investors
- 🎨 **Custom Design System**: Deep Navy (#0A0E27), Gold Accents (#D4AF37), carefully crafted color palette
- 📱 **Fully Responsive**: Mobile-first approach with breakpoints at 576px, 768px, 992px, and 1200px
- ✨ **Smooth Animations**: Fade-in effects, hover transitions, and scroll animations for professional polish
- ♿ **WCAG Accessible**: Proper ARIA labels, keyboard navigation, and focus states

### Technical Features
- ⚡ **Next.js 14 App Router**: Server-side rendering (SSR) for optimal SEO and performance
- 🔍 **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- 📝 **TypeScript**: Fully typed codebase for maintainability and developer experience
- 🎯 **Form Validation**: React Hook Form + Zod for robust client-side validation
- 🧪 **Testing Ready**: Jest and React Testing Library configuration included
- 🚀 **Performance Optimized**: Next.js Image component, code splitting, and optimized fonts

### Pages & Functionality
- **Home Page**: Hero section, featured portfolio, investment approach, latest insights
- **Portfolio Page**: Filterable grid by sector and status (active/exited)
- **About Us Page**: Firm overview, investment philosophy, leadership team profiles
- **Services Page**: Investment criteria, value creation framework, sector focus
- **Contact Page**: Form with validation, office locations, contact information
- **Insights Page**: Filterable articles by category, newsletter signup
- **Article Detail Pages**: Dynamic routes for individual articles

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **Fonts**: Montserrat (Headings) + Inter (Body)

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.17 or later
- **Package Manager**: npm, yarn, pnpm, or bun
- **Git**: For version control

### Installation

1. **Clone or download the template**:
   ```bash
   git clone <repository-url>
   cd 001_template
   ```

2. **Install dependencies**:
   ```bash
   bun install
   # or npm install
   # or yarn install
   # or pnpm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and configure:
   ```env
   SITE_URL=http://localhost:3000
   NEXT_PUBLIC_FORM_API_URL=https://your-api-endpoint.com/contact
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

4. **Run the development server**:
   ```bash
   bun dev
   # or npm run dev
   # or yarn dev
   # or pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the result.

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun test` - Run tests in watch mode
- `bun test:ci` - Run tests in CI mode

## 📁 Project Structure

```
001_template/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles & Tailwind
│   ├── portfolio/
│   │   └── page.tsx             # Portfolio page with filtering
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   └── insights/
│       ├── page.tsx             # Insights listing page
│       └── [slug]/
│           └── page.tsx         # Individual article pages
│
├── components/                   # Reusable React components
│   ├── Header.tsx               # Sticky navigation header
│   ├── Footer.tsx               # Footer with office locations
│   ├── Button.tsx               # Customizable button component
│   ├── PortfolioCard.tsx        # Portfolio company card
│   ├── ArticleCard.tsx          # Article preview card
│   ├── ContactForm.tsx          # Contact form with validation
│   └── BackToTop.tsx            # Scroll-to-top button
│
├── lib/
│   └── data.ts                  # Mock data for development
│
├── types/
│   └── index.ts                 # TypeScript type definitions
│
├── public/                       # Static assets
│   └── images/                  # Image placeholders
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS & design tokens
├── tsconfig.json                # TypeScript configuration
├── jest.config.js               # Jest testing configuration
└── package.json                 # Dependencies & scripts
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#0A0E27',    // Deep Navy
    dark: '#060914',
  },
  accent: {
    DEFAULT: '#D4AF37',    // Gold
    hover: '#B8960F',
  },
  background: {
    DEFAULT: '#F5F5F5',    // Soft Gray
    white: '#FFFFFF',
  },
  text: {
    DEFAULT: '#1A1A1A',    // Near Black
    light: '#666666',
  },
}
```

### Typography

Fonts are configured in `app/layout.tsx` and `tailwind.config.ts`:
- **Headings**: Montserrat (600-800 weight)
- **Body**: Inter (400-600 weight)

### Content Updates

1. **Portfolio Companies**: Edit `lib/data.ts` → `portfolioCompanies`
2. **Leadership Team**: Edit `lib/data.ts` → `leadershipTeam`
3. **Services**: Edit `lib/data.ts` → `services`
4. **Articles**: Edit `lib/data.ts` → `articles`
5. **Office Locations**: Edit `lib/data.ts` → `officeLocations`

### Adding Real Images

Replace placeholder images in `public/images/`:
```
public/images/
├── portfolio/           # Portfolio company logos
├── team/               # Leadership headshots
└── articles/           # Article featured images
```

Update image paths in `lib/data.ts` and use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
  src="/images/portfolio/company.jpg"
  alt="Company Name"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

### Form Submission

The contact form in `components/ContactForm.tsx` currently simulates submission. To connect to your backend:

1. Update the API endpoint in `.env.local`:
   ```env
   NEXT_PUBLIC_FORM_API_URL=https://your-api.com/contact
   ```

2. Or create an API route at `app/api/contact/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server';

   export async function POST(request: Request) {
     const data = await request.json();
     // Process form data (send email, save to database, etc.)
     return NextResponse.json({ success: true });
   }
   ```

## 🏗 Building for Production

```bash
# Build the application
bun build

# Start production server locally
bun start

# Or build and export static site
bun build && next export
```

### Production Checklist

- [ ] Update all placeholder content in `lib/data.ts`
- [ ] Replace placeholder images with real assets
- [ ] Configure environment variables for production
- [ ] Set up form submission endpoint
- [ ] Add Google Analytics ID (optional)
- [ ] Test all pages and forms
- [ ] Run accessibility audit
- [ ] Optimize images with Next.js Image component
- [ ] Review and update SEO meta tags

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy automatically on push

### Netlify

1. Build command: `bun build` or `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

Run tests with Jest and React Testing Library:

```bash
# Run tests in watch mode
bun test

# Run tests once (CI mode)
bun test:ci

# Generate coverage report
bun test -- --coverage
```

## 📝 Notes

### Mock Data
All data in `lib/data.ts` is placeholder content for demonstration. Replace with your actual firm data.

### Images
Image paths point to `/images/` directory. Add actual images or integrate with a CMS/CDN.

### Analytics
Google Analytics is configured in `app/layout.tsx`. Add your GA4 tracking ID in `.env.local`.

### SEO
Metadata is configured per-page. Update the `metadata` export in each page file for custom SEO.

## 🤝 Support

For issues, questions, or contributions:
- Create an issue in the repository
- Contact BTY Technology support

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by BTY Technology**

*A production-ready Next.js template for private equity firms*
