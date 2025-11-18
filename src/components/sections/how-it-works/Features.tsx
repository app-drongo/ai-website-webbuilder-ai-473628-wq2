'use client';

import React from 'react';
import { Check, Zap, Shield, Globe, Palette, Code, Users, Rocket } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Generation',
      description:
        'Describe your website in plain English and watch our AI create professional components instantly.',
      highlights: [
        'Natural language processing',
        'Smart template selection',
        'Instant customization',
      ],
    },
    {
      icon: Palette,
      title: 'Visual Editor',
      description:
        'Click any text or image to edit directly. No coding required, just point and click to customize.',
      highlights: ['Real-time editing', 'Drag & drop interface', 'Live preview'],
    },
    {
      icon: Code,
      title: 'Production-Ready Code',
      description:
        'Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Clean, optimized, and scalable.',
      highlights: ['Modern tech stack', 'TypeScript support', 'Optimized performance'],
    },
    {
      icon: Globe,
      title: 'Instant Live URLs',
      description:
        'Your website goes live immediately with SSL, CDN, and custom domain support included.',
      highlights: ['Instant deployment', 'SSL certificates', 'Global CDN'],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-level security with automated backups, version history, and 99.9% uptime guarantee.',
      highlights: ['SOC 2 compliant', 'Automated backups', 'Version control'],
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Work together with your team in real-time. Share, comment, and iterate seamlessly.',
      highlights: ['Real-time collaboration', 'Comment system', 'Role management'],
    },
    {
      icon: Rocket,
      title: '100+ Templates',
      description:
        'Mix and match from our extensive library of professionally designed components and layouts.',
      highlights: ['Premium templates', 'Regular updates', 'Industry-specific designs'],
    },
    {
      icon: Zap,
      title: 'AI Chat Assistant',
      description:
        'Continue refining your website with conversational commands. Just tell the AI what you want to change.',
      highlights: ['Conversational interface', 'Context awareness', 'Iterative improvements'],
    },
  ];

  const stats = [
    { value: '500K+', label: 'Websites Created' },
    { value: '10K+', label: 'Active Users' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '<5min', label: 'Average Build Time' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span data-editable="badge">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span data-editable="title">Everything you need to build amazing websites</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">
              From AI-powered generation to enterprise-grade hosting, WebBuilder AI provides all the
              tools you need to create professional websites in minutes.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  <span data-editable={`feature${index}Title`}>{feature.title}</span>
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  <span data-editable={`feature${index}Description`}>{feature.description}</span>
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-3 h-3 text-primary flex-shrink-0" />
                      <span data-editable={`feature${index}Highlight${highlightIndex}`}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.1),transparent_50%)] rounded-3xl" />

          <div className="relative p-12 rounded-3xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                <span data-editable="statsTitle">Trusted by thousands of creators</span>
              </h3>
              <p className="text-muted-foreground">
                <span data-editable="statsSubtitle">
                  Join the community of builders creating amazing websites with AI
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span data-editable={`stat${index}Value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    <span data-editable={`stat${index}Label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl hover:shadow-primary/25">
              <span data-editable="ctaPrimary">Start Building Free</span>
            </button>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors duration-200">
              <span data-editable="ctaSecondary">View Live Demo</span>
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <span data-editable="ctaNote">No credit card required • Start building in seconds</span>
          </p>
        </div>
      </div>
    </section>
  );
}
