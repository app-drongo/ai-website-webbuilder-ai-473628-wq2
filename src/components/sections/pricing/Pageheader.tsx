import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderConfig {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  showPattern?: boolean;
}

const defaultConfig: PageHeaderConfig = {
  title: 'Simple, Transparent Pricing',
  subtitle: 'Start free, upgrade when you grow. All plans include instant live URLs.',
  breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Pricing' }],
  showPattern: true,
};

export default function Pageheader({ config = defaultConfig }: { config?: PageHeaderConfig }) {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/30 border-b border-border overflow-hidden">
      {/* Background Pattern */}
      {config.showPattern && (
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--foreground) / 0.1) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>
      )}

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Breadcrumbs */}
        <nav
          className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2">
            {config.breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center">
                {index === 0 && <Home className="w-4 h-4 mr-2" aria-hidden="true" />}
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm px-1 py-0.5"
                    data-editable-href={`breadcrumb-${index}-href`}
                    data-href={item.href}
                  >
                    <span data-editable={`breadcrumb-${index}-label`}>{item.label}</span>
                  </a>
                ) : (
                  <span
                    className="text-foreground font-medium"
                    data-editable={`breadcrumb-${index}-label`}
                  >
                    {item.label}
                  </span>
                )}
                {index < config.breadcrumbs.length - 1 && (
                  <ChevronRight
                    className="w-4 h-4 mx-2 text-muted-foreground/60"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight"
            style={{ animationDelay: '0.2s' }}
          >
            <span data-editable="title">{config.title}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Decorative Elements */}
          <div
            className="flex justify-center items-center mt-8 space-x-2 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-500" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-1000" />
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span data-editable="trust-indicator-1">Money-back guarantee</span>
          </div>
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300" />
            <span data-editable="trust-indicator-2">No credit card required</span>
          </div>
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-600" />
            <span data-editable="trust-indicator-3">Cancel anytime</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
