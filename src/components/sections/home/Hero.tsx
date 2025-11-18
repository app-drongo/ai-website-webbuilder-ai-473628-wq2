'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, Globe, Clock } from 'lucide-react';

export default function Hero() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    badge: '🚀 Build websites with AI in minutes',
    headline: 'What do you want to build?',
    subheadline:
      'Describe your website and our AI creates it instantly with professional templates',
    placeholder: 'Create a landing page for my SaaS product with pricing and testimonials...',
    exampleChips: ['SaaS landing page', 'E-commerce store', 'Portfolio website', 'Restaurant site'],
    socialProofTitle: 'Join 10,000+ users building with AI',
    stats: [
      { label: 'websites created', value: '500K+' },
      { label: 'satisfaction', value: '98%' },
      { label: 'average build time', value: '< 5min' },
    ],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      // Here would be the actual AI processing logic
    }, 2000);
  };

  const handleChipClick = (chipText: string) => {
    setPrompt(chipText);
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span data-editable="badge">{config.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            <span data-editable="headline">{config.headline}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            <span data-editable="subheadline">{config.subheadline}</span>
          </p>

          {/* Prompt Input Area */}
          <div className="max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
            <form
              onSubmit={handleSubmit}
              className="relative"
              data-form-id="691bce7a710a688e8470e563"
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <textarea
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  placeholder={config.placeholder}
                  className="w-full h-32 bg-transparent text-foreground placeholder:text-muted-foreground resize-none border-0 outline-none text-lg leading-relaxed"
                  disabled={isLoading}
                />

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    disabled={!prompt.trim() || isLoading}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Building...
                      </>
                    ) : (
                      <>
                        Build Website
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Example Chips */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {config.exampleChips.map((chip, index) => (
                <button
                  key={index}
                  onClick={() => handleChipClick(chip)}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
                  data-editable={`chip${index}`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="animate-fade-in-up animation-delay-600">
            <p className="text-muted-foreground mb-6 font-medium">
              <span data-editable="socialProofTitle">{config.socialProofTitle}</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
              {config.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-bold text-foreground" data-editable={`statValue${index}`}>
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground" data-editable={`statLabel${index}`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center gap-8 mt-16 animate-fade-in-up animation-delay-800">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium">Instant</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Globe className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium">Live URL</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Clock className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium">Minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
