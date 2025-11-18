'use client';

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  showBreadcrumbs?: boolean;
  className?: string;
}

export default function Pageheader({
  title = 'How It Works',
  subtitle = 'From Prompt to Live Website in Minutes',
  breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'How It Works' }],
  showBreadcrumbs = true,
  className = '',
}: PageHeaderProps) {
  return (
    <section
      className={`relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumbs */}
        {showBreadcrumbs && (
          <nav
            className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 animate-fade-in"
            aria-label="Breadcrumb"
          >
            <Home className="w-4 h-4" />
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="w-4 h-4" />
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="hover:text-foreground transition-colors duration-200"
                    data-editable-href={`breadcrumb-${index}-href`}
                    data-href={crumb.href}
                  >
                    <span data-editable={`breadcrumb-${index}-label`}>{crumb.label}</span>
                  </a>
                ) : (
                  <span
                    className="text-foreground font-medium"
                    data-editable={`breadcrumb-${index}-label`}
                  >
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Header Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            <span data-editable="title">{title}</span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
              <span data-editable="subtitle">{subtitle}</span>
            </p>
          )}

          {/* Decorative Elements */}
          <div className="flex justify-center mt-8 animate-fade-in animation-delay-400">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse animation-delay-100" />
              <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse animation-delay-200" />
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
