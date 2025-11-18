'use client';

import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Users, Crown, ArrowRight, Sparkles } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  badge?: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
  popular?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricingTiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for trying out WebBuilder AI',
      features: [
        '3 active websites',
        '50+ component templates',
        'AI template selection & customization',
        'Live URL (subdomain)',
        'Community support',
        'WebBuilder AI branding',
      ],
      buttonText: 'Start Free',
      buttonVariant: 'outline',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: { monthly: 29, yearly: 290 },
      description: 'For professionals and growing businesses',
      badge: 'Most Popular',
      features: [
        'Unlimited websites',
        '100+ premium templates',
        'Advanced AI customization',
        'Custom domain support',
        'Remove branding',
        'Priority support',
        'Version history',
        'SSL & global CDN',
      ],
      buttonText: 'Start 14-day Trial',
      buttonVariant: 'primary',
      popular: true,
    },
    {
      id: 'agency',
      name: 'Agency',
      price: { monthly: 99, yearly: 990 },
      description: 'For agencies and teams',
      features: [
        'Everything in Pro',
        'White-label solution',
        'Team collaboration (5 seats)',
        'Custom templates',
        'API access',
        'Dedicated account manager',
        'SLA guarantee',
        'Premium support',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary',
    },
  ];

  const faqs: FAQ[] = [
    {
      question: 'How does the free plan work?',
      answer:
        'The free plan gives you access to 3 active websites with 50+ component templates and AI customization. Your sites get a WebBuilder AI subdomain and include our branding. Perfect for testing our platform before upgrading.',
    },
    {
      question: 'Can I use my own domain?',
      answer:
        'Yes! Pro and Agency plans include custom domain support. You can connect your existing domain or purchase a new one through our platform. SSL certificates are included automatically.',
    },
    {
      question: 'How does AI template selection work?',
      answer:
        'Our AI analyzes your prompt and automatically selects the best matching templates for each component. You can always swap any component with alternatives from our library with just one click.',
    },
    {
      question: 'Can I switch templates after creation?',
      answer:
        'Absolutely! You can change any component template at any time. Our AI will preserve your content and adapt it to the new template design automatically.',
    },
    {
      question: 'What if I need a custom feature?',
      answer:
        'Agency plan includes custom template creation and API access. For unique requirements, our team can build custom components or integrations. Contact our sales team to discuss your needs.',
    },
    {
      question: 'Can I export my website code?',
      answer:
        'Yes, all plans include code export. Your websites are built with clean, production-ready Next.js, React, and Tailwind CSS code that you can download and host anywhere.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact support for a full refund within 30 days of purchase.",
    },
    {
      question: 'How is billing handled?',
      answer:
        'Billing is automatic and secure. You can pay monthly or yearly (with savings). Cancel anytime from your account settings. No hidden fees or long-term contracts required.',
    },
  ];

  const getYearlySavings = (monthly: number, yearly: number) => {
    if (monthly === 0) return 0;
    return monthly * 12 - yearly;
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-muted rounded-lg p-1 flex items-center">
            <div
              className={`absolute top-1 bottom-1 bg-background rounded-md shadow-sm transition-all duration-300 ${
                billingCycle === 'monthly' ? 'left-1 right-1/2' : 'left-1/2 right-1'
              }`}
            />
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <span data-editable="monthlyLabel">Monthly</span>
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-6 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <span data-editable="yearlyLabel">Yearly</span>
              <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                <span data-editable="savingsLabel">Save up to $198</span>
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative bg-card rounded-2xl border transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                tier.popular
                  ? 'border-primary shadow-lg ring-1 ring-primary/20'
                  : 'border-border hover:border-primary/50'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              {/* Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span data-editable={`${tier.id}Badge`}>{tier.badge}</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {tier.id === 'starter' && <Zap className="w-8 h-8 text-primary" />}
                    {tier.id === 'pro' && <Crown className="w-8 h-8 text-primary" />}
                    {tier.id === 'agency' && <Users className="w-8 h-8 text-primary" />}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    <span data-editable={`${tier.id}Name`}>{tier.name}</span>
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    <span data-editable={`${tier.id}Description`}>{tier.description}</span>
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-foreground">
                        ${tier.price[billingCycle]}
                      </span>
                      <span className="text-muted-foreground">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>

                    {billingCycle === 'yearly' && tier.price.monthly > 0 && (
                      <div className="mt-2 text-sm text-primary">
                        Save ${getYearlySavings(tier.price.monthly, tier.price.yearly)} per year
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        <span data-editable={`${tier.id}Feature${featureIndex}`}>{feature}</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    tier.buttonVariant === 'primary'
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                      : tier.buttonVariant === 'secondary'
                        ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        : 'border border-border text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <span data-editable={`${tier.id}ButtonText`}>{tier.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span data-editable="faqBadge">Frequently Asked Questions</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span data-editable="faqTitle">Everything you need to know</span>
            </h2>

            <p className="text-xl text-muted-foreground">
              <span data-editable="faqSubtitle">
                Can't find the answer you're looking for? Reach out to our support team.
              </span>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-primary/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
                >
                  <span className="font-medium text-foreground">
                    <span data-editable={`faqQuestion${index}`}>{faq.question}</span>
                  </span>
                  <div
                    className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-4 h-0.5 bg-foreground absolute" />
                      <div className="w-0.5 h-4 bg-foreground absolute" />
                    </div>
                  </div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-4 text-muted-foreground">
                    <span data-editable={`faqAnswer${index}`}>{faq.answer}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-16 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span data-editable="trustBadge1">Money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="w-5 h-5 text-primary" />
            <span data-editable="trustBadge2">No credit card required for free plan</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ArrowRight className="w-5 h-5 text-primary" />
            <span data-editable="trustBadge3">Cancel anytime</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            <span data-editable="finalCtaTitle">Start building your website today</span>
          </h3>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            <span data-editable="finalCtaButton">Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
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
