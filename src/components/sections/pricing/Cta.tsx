'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Users, Clock, Shield } from 'lucide-react';

export default function Cta() {
  const [isHovered, setIsHovered] = useState(false);

  const config = {
    badge: '🚀 Join 10,000+ users building with AI',
    title: 'Ready to Build Your Website?',
    subtitle:
      'Start creating your professional website in minutes. No coding required, no credit card needed.',
    primaryButtonText: 'Start Building Free',
    primaryButtonHref: '/signup',
    secondaryButtonText: 'View Examples',
    secondaryButtonHref: '/examples',
    features: [
      {
        icon: Clock,
        text: 'Live in 5 minutes',
      },
      {
        icon: Shield,
        text: 'SSL & CDN included',
      },
      {
        icon: Users,
        text: 'No credit card required',
      },
    ],
    trustText: 'Trusted by 10,000+ users worldwide',
    statsText: '500K+ websites created',
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-lg animate-pulse delay-500" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span data-editable="badge">{config.badge}</span>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up delay-200">
            <span data-editable="title">{config.title}</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-600">
          <button
            onClick={() => (window.location.href = config.primaryButtonHref)}
            data-editable-href="primaryButtonHref"
            data-href={config.primaryButtonHref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span data-editable="primaryButtonText">{config.primaryButtonText}</span>
            <ArrowRight
              className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
            />

            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
          </button>

          <button
            onClick={() => (window.location.href = config.secondaryButtonHref)}
            data-editable-href="secondaryButtonHref"
            data-href={config.secondaryButtonHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            <span data-editable="secondaryButtonText">{config.secondaryButtonText}</span>
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up delay-800">
          {config.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium" data-editable={`feature${index}Text`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="space-y-4 animate-fade-in-up delay-1000">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span data-editable="trustText">{config.trustText}</span>
          </div>

          <div className="text-sm font-semibold text-primary">
            <span data-editable="statsText">{config.statsText}</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
