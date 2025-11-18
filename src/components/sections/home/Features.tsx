import React from 'react';
import { Zap, Palette, Code, Globe, Smartphone, Rocket } from 'lucide-react';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: Zap,
    title: 'AI-Powered Generation',
    description:
      'Describe your vision and watch our AI create professional websites instantly with smart template selection.',
  },
  {
    icon: Palette,
    title: 'Smart Customization',
    description:
      'AI automatically matches your brand colors, fonts, and style preferences across all components.',
  },
  {
    icon: Code,
    title: 'Production-Ready Code',
    description:
      "Built with Next.js 15, React 19, and TypeScript. Clean, optimized code that's ready for deployment.",
  },
  {
    icon: Globe,
    title: 'Instant Live URLs',
    description:
      'Your website goes live immediately with SSL, CDN, and custom domain support included.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description:
      'Every template is fully responsive and optimized for all devices from mobile to desktop.',
  },
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description:
      'Optimized for speed with automatic image optimization, lazy loading, and performance best practices.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span data-editable="badge">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span data-editable="title">Everything you need to build amazing websites</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="subtitle">
              From AI-powered generation to instant deployment, WebBuilder AI provides all the tools
              you need to create professional websites without any technical expertise.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`feature${index + 1}Description`}>
                    {feature.description}
                  </span>
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-muted/50 text-muted-foreground">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
              <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-background" />
              <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background" />
            </div>
            <span className="text-sm font-medium">
              <span data-editable="socialProof">Join 10,000+ users building with AI</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
