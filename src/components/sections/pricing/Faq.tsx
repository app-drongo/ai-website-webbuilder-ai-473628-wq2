'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'free-plan',
    question: 'How does the free plan work?',
    answer:
      'The free plan includes 3 active websites, 50+ component templates, AI template selection & customization, live URL with subdomain, and community support. No credit card required to get started.',
  },
  {
    id: 'custom-domain',
    question: 'Can I use my own domain?',
    answer:
      'Yes! Pro and Agency plans include custom domain support. You can connect your existing domain or purchase a new one through our platform. SSL certificates are included automatically.',
  },
  {
    id: 'ai-selection',
    question: 'How does AI template selection work?',
    answer:
      'Our AI analyzes your prompt to understand your needs, then selects the most appropriate templates for each component. It considers your industry, style preferences, and functionality requirements to create the perfect match.',
  },
  {
    id: 'switch-templates',
    question: 'Can I switch templates after creation?',
    answer:
      'Absolutely! You can swap any component with alternatives from our template library at any time. Changes are applied instantly to your live website with no downtime.',
  },
  {
    id: 'custom-features',
    question: 'What if I need a custom feature?',
    answer:
      'Agency plan users get access to custom templates and dedicated support for unique requirements. You can also use our AI chat to request specific modifications or contact our development team.',
  },
  {
    id: 'export-code',
    question: 'Can I export my website code?',
    answer:
      'Yes, Pro and Agency plans include code export functionality. You get clean, production-ready Next.js code that you can host anywhere or continue developing independently.',
  },
  {
    id: 'refunds',
    question: 'Do you offer refunds?',
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund within 30 days of purchase.",
  },
  {
    id: 'billing',
    question: 'How is billing handled?',
    answer:
      'Billing is automatic and secure. You can choose monthly or yearly plans, with yearly plans offering significant savings. Cancel anytime from your account settings - no questions asked.',
  },
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span data-editable="title">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">
              Got questions? We've got answers. If you can't find what you're looking for, feel free
              to reach out to our support team.
            </span>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(item.id);

            return (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-lg font-semibold text-foreground pr-4">
                    <span data-editable={`question-${item.id}`}>{item.question}</span>
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="text-muted-foreground leading-relaxed">
                      <span data-editable={`answer-${item.id}`}>{item.answer}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              <span data-editable="supportTitle">Still have questions?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              <span data-editable="supportDescription">
                Our support team is here to help. Get in touch and we'll get back to you as soon as
                possible.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <span data-editable="contactButtonText">Contact Support</span>
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <span data-editable="docsButtonText">View Documentation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
