'use client';
import React from 'react';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      description: 'Building amazing websites',
      trend: '+23%',
    },
    {
      id: 2,
      icon: Globe,
      value: '500K+',
      label: 'Websites Created',
      description: 'Powered by AI technology',
      trend: '+156%',
    },
    {
      id: 3,
      icon: Zap,
      value: '< 5min',
      label: 'Average Build Time',
      description: 'From prompt to live site',
      trend: '-12%',
    },
    {
      id: 4,
      icon: TrendingUp,
      value: '98%',
      label: 'Satisfaction Rate',
      description: 'Happy customers worldwide',
      trend: '+5%',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span data-editable="badge">Trusted by thousands</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span data-editable="title">Join the AI Revolution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">
              See why developers and businesses choose WebBuilder AI to create stunning websites in
              minutes
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/20"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center text-sm font-medium text-muted-foreground">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      <span data-editable={`trend${stat.id}`}>{stat.trend}</span>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      <span data-editable={`value${stat.id}`}>{stat.value}</span>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      <span data-editable={`label${stat.id}`}>{stat.label}</span>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`description${stat.id}`}>{stat.description}</span>
                  </p>

                  {/* Animated Bar */}
                  <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"
                      style={{
                        transitionDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaText">Ready to join thousands of satisfied users?</span>
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 group">
            <span data-editable="ctaButton">Start Building Free</span>
            <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
