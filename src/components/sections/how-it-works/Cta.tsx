'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, Globe, Users } from 'lucide-react';

interface CtaConfig {
  badge: string;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  features: Array<{
    icon: string;
    text: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

const defaultConfig: CtaConfig = {
  badge: '🚀 Ready to get started?',
  title: 'Build Your Website with AI Today',
  subtitle:
    "Join thousands of users who've already created stunning websites in minutes. No coding required, no setup hassle.",
  primaryButtonText: 'Start Building Free',
  primaryButtonHref: '/',
  secondaryButtonText: 'View Examples',
  secondaryButtonHref: '/examples',
  features: [
    { icon: 'zap', text: 'Live in 5 minutes' },
    { icon: 'globe', text: 'Instant live URL' },
    { icon: 'users', text: 'No credit card required' },
    { icon: 'sparkles', text: 'AI-powered customization' },
  ],
  stats: [
    { value: '10,000+', label: 'Happy Users' },
    { value: '500K+', label: 'Websites Created' },
    { value: '98%', label: 'Satisfaction Rate' },
  ],
};

const iconMap = {
  zap: Zap,
  globe: Globe,
  users: Users,
  sparkles: Sparkles,
};

export default function Cta() {
  const [config] = useState<CtaConfig>(defaultConfig);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrimaryClick = () => {
    window.location.href = config.primaryButtonHref;
  };

  const handleSecondaryClick = () => {
    window.location.href = config.secondaryButtonHref;
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/10),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.accent/10),transparent_50%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(theme(colors.border)_1px,transparent_1px),linear-gradient(90deg,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span data-editable="badge">{config.badge}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            <span data-editable="title">{config.title}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:200ms]">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up [animation-delay:400ms]">
            <button
              onClick={handlePrimaryClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              data-editable-href="primaryButtonHref"
              data-href={config.primaryButtonHref}
            >
              <span data-editable="primaryButtonText">{config.primaryButtonText}</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
              />

              {/* Button shine effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            <button
              onClick={handleSecondaryClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              data-editable-href="secondaryButtonHref"
              data-href={config.secondaryButtonHref}
            >
              <span data-editable="secondaryButtonText">{config.secondaryButtonText}</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up [animation-delay:600ms]">
            {config.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-border hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <span
                    className="text-sm font-medium text-foreground text-center"
                    data-editable={`feature-${index}-text`}
                  >
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-border/50 pt-16">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-lg">
              Trusted by developers and businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {config.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div
                  className="text-3xl sm:text-4xl font-bold text-primary mb-2"
                  data-editable={`stat-${index}-value`}
                >
                  {stat.value}
                </div>
                <div
                  className="text-muted-foreground font-medium"
                  data-editable={`stat-${index}-label`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-float [animation-delay:4s]" />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
