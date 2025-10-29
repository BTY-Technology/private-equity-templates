# Apex Capital Partners - Implementation Guide

## Overview

This document provides a comprehensive overview of the implementation, architecture, and customization options for the Apex Capital Partners private equity website template.

## Architecture

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Form Management**: React Hook Form + Zod
- **Testing**: Jest + React Testing Library
- **Fonts**: Google Fonts (Montserrat + Inter)

### Key Design Decisions

1. **App Router over Pages Router**: Leverages Next.js 14's latest features including server components, streaming, and improved data fetching.

2. **Server-Side Rendering (SSR)**: All pages use SSR for optimal SEO and initial page load performance.

3. **TypeScript Throughout**: Full type safety with comprehensive interfaces in `types/index.ts`.

4. **Component-Based Architecture**: Reusable, composable components following React best practices.

5. **Mobile-First Design**: Responsive breakpoints at 576px, 768px, 992px, and 1200px.

## Project Structure

### Pages (`app/`)

#### Home Page (`page.tsx`)
- Hero section with gradient background and CTA buttons
- Stats section showcasing key metrics
- Featured portfolio companies (3 most recent active)
- Investment approach section
- Latest insights (3 most recent articles)
- Call-to-action section

#### Portfolio Page (`portfolio/page.tsx`)
- Filterable grid by sector and status
- Sticky filter bar
- Portfolio statistics
- Client-side filtering for instant results

#### About Us Page (`about/page.tsx`)
- Firm story and history
- Investment philosophy pillars
- Leadership team profiles with LinkedIn links
- Career opportunities CTA

#### Services Page (`services/page.tsx`)
- Four main service offerings
- Investment criteria breakdown
- Value creation framework (6 pillars)
- Partnership CTA

#### Contact Page (`contact/page.tsx`)
- Contact form with validation
- Office locations (3 locations)
- General inquiries contact info
- Press contact information
- Map placeholder for future integration

#### Insights Page (`insights/page.tsx`)
- Featured article highlight
- Filterable article grid by category
- Newsletter subscription form
- Client-side category filtering

#### Article Detail Page (`insights/[slug]/page.tsx`)
- Dynamic routing for individual articles
- Article metadata and author info
- Related articles section
- Social sharing buttons
- Back to insights navigation

### Components (`components/`)

#### Header.tsx
- Sticky navigation with scroll detection
- Responsive hamburger menu for mobile
- Active page highlighting
- Smooth transitions and backdrop blur

#### Footer.tsx
- Three-column layout (company info, locations, quick links)
- Social media links
- Compliance disclaimer
- Legal links (Privacy, Terms, Disclaimer)

#### Button.tsx
- Three variants: primary, secondary, outline
- Three sizes: sm, md, lg
- Link or button rendering
- Disabled state support

#### PortfolioCard.tsx
- Company information display
- Sector and status badges
- Investment details
- Exit information for exited companies

#### ArticleCard.tsx
- Article preview with image
- Category and read time
- Author and publish date
- Hover effects and transitions

#### ContactForm.tsx
- React Hook Form integration
- Zod schema validation
- Inline error messages
- Success/error status handling
- Five inquiry types

#### BackToTop.tsx
- Scroll detection
- Smooth scroll to top
- Fade in/out animation

### Data Layer (`lib/data.ts`)

Mock data structure for:
- 6 portfolio companies (mix of active/exited)
- 4 leadership team members
- 4 service offerings
- 4 sample articles
- 3 office locations
- 6 navigation items

**Production**: Replace with actual data from CMS, database, or API.

### Type Definitions (`types/index.ts`)

Comprehensive TypeScript interfaces:
- `PortfolioCompany` - Portfolio company data structure
- `LeadershipMember` - Team member profiles
- `Service` - Service offerings
- `Article` - Blog/insights articles
- `ContactFormData` - Contact form fields
- `OfficeLocation` - Office information
- `NavItem` - Navigation structure
- `SEOProps` - SEO metadata

### Utilities (`utils/helpers.ts`)

Helper functions for:
- Date formatting
- Currency formatting
- Text truncation
- Slug generation
- Email validation
- Reading time calculation
- Phone number formatting
- Debouncing
- Array sorting

## Design System

### Color Palette

```typescript
Primary: #0A0E27 (Deep Navy)      // Headers, text, dark sections
Accent: #D4AF37 (Gold)            // CTAs, highlights, links
Background: #F5F5F5 (Soft Gray)   // Page background
White: #FFFFFF                     // Card backgrounds
Text: #1A1A1A (Near Black)        // Body text
Text Light: #666666 (Gray)        // Secondary text
```

### Typography Scale

- **H1**: 5xl → 6xl → 7xl (mobile → tablet → desktop)
- **H2**: 4xl → 5xl → 6xl
- **H3**: 3xl → 4xl
- **H4**: 2xl → 3xl
- **H5**: xl → 2xl
- **H6**: lg → xl
- **Body**: base (16px)
- **Small**: sm (14px)
- **Tiny**: xs (12px)

### Spacing System

Follows Tailwind's default spacing scale (0.25rem increments).

Common patterns:
- Section padding: `py-16 md:py-24 lg:py-32`
- Container: `max-w-container mx-auto px-4 sm:px-6 lg:px-8`
- Grid gaps: `gap-8` or `gap-12`

### Animations

Defined in `tailwind.config.ts`:
- **fade-in**: 0.6s ease-in-out (opacity + translateY)
- **slide-up**: 0.5s ease-out (opacity + translateY)

Applied via:
- CSS classes: `animate-fade-in`, `animate-slide-up`
- Staggered with `style={{ animationDelay: '${index * 100}ms' }}`

## SEO Implementation

### Metadata Configuration

Each page exports a `metadata` object or `generateMetadata` function:

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for search results',
  keywords: ['keyword1', 'keyword2'],
  openGraph: { /* OG tags */ },
  twitter: { /* Twitter card */ },
};
```

### Structured Data

Ready for implementation in `app/layout.tsx`:
- Organization schema
- LocalBusiness schema
- BreadcrumbList schema

### Performance

- Next.js Image component for optimized images
- Font optimization with next/font
- Code splitting via dynamic imports
- Server components for zero JS bundle

## Form Handling

### Contact Form Flow

1. **Client Validation**: React Hook Form + Zod schema
2. **Error Display**: Inline error messages per field
3. **Submission**: POST to `/api/contact` (to be implemented)
4. **Status Feedback**: Success/error messages
5. **Reset**: Form clears on successful submission

### Validation Rules

```typescript
firstName: min 2 characters
lastName: min 2 characters
email: valid email format
inquiryType: required selection
message: min 10 characters
company: optional
phone: optional
```

## Responsive Design

### Breakpoints

```typescript
sm: 640px    // Small devices
md: 768px    // Tablets
lg: 1024px   // Laptops
xl: 1280px   // Desktops
2xl: 1536px  // Large desktops
```

### Mobile Menu

- Hamburger icon transforms to X
- Full-screen overlay menu
- Prevents body scroll when open
- Smooth slide-in animation
- Touch-friendly tap targets (min 44px)

## Accessibility

### WCAG Compliance

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Alt text for images (when implemented)
- Color contrast ratios meet AA standards

### Screen Reader Support

- Skip to content link (can be added)
- Descriptive link text
- Form labels properly associated
- Error messages announced

## Performance Optimization

### Core Web Vitals

- **LCP**: Hero images optimized with Next.js Image
- **FID**: Minimal JavaScript, server components
- **CLS**: Reserved space for images, no layout shift

### Optimization Techniques

1. **Image Optimization**: WebP format, lazy loading
2. **Font Loading**: `font-display: swap` via next/font
3. **Code Splitting**: Dynamic imports for heavy components
4. **Tree Shaking**: Unused code eliminated in production
5. **Minification**: Automatic with Next.js build

## Testing

### Unit Tests

Example: `__tests__/components/Button.test.tsx`

Tests cover:
- Component rendering
- Props variations
- User interactions
- Edge cases

### Testing Philosophy

- Test user-facing behavior, not implementation
- Focus on critical paths (forms, navigation)
- Mock external dependencies
- Maintain >80% coverage for components

## Deployment Considerations

### Environment Variables

Required for production:
```env
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_FORM_API_URL=https://api.yourdomain.com/contact
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Build Process

1. Install dependencies: `bun install`
2. Build application: `bun build`
3. Run production server: `bun start`

### Hosting Recommendations

1. **Vercel** (Recommended): Native Next.js support, automatic deployments
2. **Netlify**: Good Next.js support, form handling
3. **AWS Amplify**: Enterprise-grade, scalable
4. **Docker + Cloud Run**: Full control, containerized

## Customization Guide

### Quick Customization Checklist

1. **Branding**
   - [ ] Update company name in Header, Footer, metadata
   - [ ] Replace color palette in `tailwind.config.ts`
   - [ ] Add logo SVG to `public/`
   - [ ] Update favicon and app icons

2. **Content**
   - [ ] Replace portfolio companies in `lib/data.ts`
   - [ ] Update leadership team profiles
   - [ ] Modify service offerings
   - [ ] Add real articles/insights
   - [ ] Update office locations

3. **Images**
   - [ ] Add portfolio logos to `public/images/portfolio/`
   - [ ] Add team photos to `public/images/team/`
   - [ ] Add article images to `public/images/articles/`

4. **Functionality**
   - [ ] Implement contact form API endpoint
   - [ ] Set up email service (SendGrid, AWS SES)
   - [ ] Configure Google Analytics
   - [ ] Add map integration to contact page

5. **SEO**
   - [ ] Update all page metadata
   - [ ] Add structured data schemas
   - [ ] Generate and submit sitemap
   - [ ] Configure robots.txt

### Advanced Customization

#### Adding New Pages

1. Create `app/new-page/page.tsx`
2. Add route to `lib/data.ts` → `navItems`
3. Export metadata for SEO
4. Implement page content

#### Integrating CMS

Replace `lib/data.ts` with CMS queries:
- **Contentful**: `@contentful/rich-text-react-renderer`
- **Sanity**: `@sanity/client`
- **Strapi**: REST or GraphQL API

#### Adding Authentication

Consider for client portals:
- **NextAuth.js**: OAuth, email/password
- **Clerk**: Managed authentication
- **Auth0**: Enterprise authentication

## Maintenance

### Regular Updates

- Dependency updates: Monthly
- Security patches: Immediate
- Next.js upgrades: Quarterly
- Content updates: As needed

### Monitoring

Recommended tools:
- **Vercel Analytics**: Performance monitoring
- **Sentry**: Error tracking
- **Google Analytics**: User behavior
- **Lighthouse CI**: Performance regression tests

## Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hook Form Docs](https://react-hook-form.com/)

### Community
- GitHub Issues for this template
- BTY Technology support channel

## Conclusion

This template provides a solid foundation for a private equity firm website with:
- Production-ready code
- Best practices throughout
- Full TypeScript support
- Comprehensive documentation
- Easy customization

Focus on replacing mock data with real content and implementing backend integrations for a fully functional site.

---

**Questions or Issues?**
Contact BTY Technology support or open an issue in the repository.
