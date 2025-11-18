import React from 'react';
import { ArrowRight, MessageSquare, Palette, Globe, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Enter Your Prompt',
      description: 'Describe your website in plain English. Be as detailed or brief as you want.',
      example:
        'Create a landing page for my AI coding assistant with hero, features, pricing, and testimonials',
      icon: MessageSquare,
      visual: 'prompt',
      features: ['Natural language processing', 'Context understanding', 'Smart suggestions'],
    },
    {
      number: '02',
      title: 'AI Selects Templates',
      description: 'Our AI analyzes your needs and picks the perfect template for each component',
      example: 'Hero template + Features template + Pricing template being selected',
      icon: Palette,
      visual: 'selection',
      features: ['Component matching', 'Layout optimization', 'Design consistency'],
    },
    {
      number: '03',
      title: 'AI Customizes Everything',
      description: 'AI generates all content, adjusts colors, and matches your brand',
      example: "Don't like a component? Swap it with one click from our library",
      icon: CheckCircle,
      visual: 'customization',
      features: ['Content generation', 'Brand matching', 'One-click swapping'],
    },
    {
      number: '04',
      title: 'Get Live URL',
      description: 'Your website goes live instantly with a shareable URL',
      example: 'yourname.webbuilderai.com',
      icon: Globe,
      visual: 'deployment',
      features: ['Instant live URL', 'Custom domain support', 'SSL & CDN included'],
    },
  ];

  const additionalFeatures = [
    {
      title: 'Visual Editor',
      description: 'Click any text or image to edit',
      icon: '✏️',
    },
    {
      title: 'AI Chat',
      description: 'Continue refining with conversational commands',
      icon: '💬',
    },
    {
      title: 'Template Library',
      description: '100+ components, mix and match freely',
      icon: '🎨',
    },
    {
      title: 'Real-time Preview',
      description: 'See changes instantly',
      icon: '⚡',
    },
  ];

  const techStack = ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui'];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Process Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Number */}
              <div className="flex items-center justify-center mb-8">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                  <span data-editable={`step${index + 1}Number`}>{step.number}</span>
                </div>
              </div>

              {/* Step Content */}
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      <span data-editable={`step${index + 1}Title`}>{step.title}</span>
                    </h3>
                  </div>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    <span data-editable={`step${index + 1}Description`}>{step.description}</span>
                  </p>

                  <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground font-medium">
                      <span data-editable={`step${index + 1}Example`}>{step.example}</span>
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span
                          className="text-foreground"
                          data-editable={`step${index + 1}Feature${featureIndex + 1}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-card border rounded-xl p-8 shadow-lg">
                    {step.visual === 'prompt' && (
                      <div className="space-y-4">
                        <div className="bg-background border rounded-lg p-4">
                          <div className="text-sm text-muted-foreground mb-2">Prompt Input</div>
                          <div className="bg-muted/30 rounded p-3 text-sm">
                            <span data-editable="promptExample">
                              Create a landing page for my AI coding assistant with hero, features,
                              pricing, and testimonials
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2">
                            <span className="text-sm">Generate</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )}

                    {step.visual === 'selection' && (
                      <div className="space-y-4">
                        <div className="text-center text-sm text-muted-foreground mb-4">
                          <span data-editable="selectionTitle">AI Analyzing Components</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {['Hero', 'Features', 'Pricing'].map((component, i) => (
                            <div
                              key={component}
                              className="bg-primary/10 border-2 border-primary rounded-lg p-3 text-center"
                            >
                              <div className="w-full h-12 bg-primary/20 rounded mb-2"></div>
                              <div className="text-xs font-medium text-primary">{component}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.visual === 'customization' && (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Before</span>
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">After</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                            <div className="h-3 bg-muted rounded w-3/4"></div>
                            <div className="h-2 bg-muted rounded w-1/2"></div>
                            <div className="h-2 bg-muted rounded w-2/3"></div>
                          </div>
                          <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 space-y-2">
                            <div className="h-3 bg-primary/60 rounded w-3/4"></div>
                            <div className="h-2 bg-primary/40 rounded w-1/2"></div>
                            <div className="h-2 bg-primary/40 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.visual === 'deployment' && (
                      <div className="space-y-4">
                        <div className="bg-background border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium">Live Website</span>
                          </div>
                          <div className="bg-muted/30 rounded p-2 text-sm font-mono">
                            <span data-editable="liveUrlExample">yourname.webbuilderai.com</span>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm">
                            <span data-editable="shareButton">Share Link</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-16">
                  <div className="w-px h-16 bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span data-editable="additionalFeaturesTitle">Powerful Features Built In</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <span data-editable="additionalFeaturesDescription">
                Everything you need to build, customize, and deploy professional websites
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">
                  <span data-editable={`additionalFeature${index + 1}Title`}>{feature.title}</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <span data-editable={`additionalFeature${index + 1}Description`}>
                    {feature.description}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-24 bg-muted/30 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              <span data-editable="techStackTitle">Built with Modern Technology</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              <span data-editable="techStackDescription">Fast, secure, production-ready code</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                  data-editable={`techStack${index + 1}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span data-editable="ctaTitle">Ready to build your website?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              <span data-editable="ctaDescription">
                Join thousands of users creating professional websites with AI in minutes
              </span>
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              <span data-editable="ctaButtonText">Start Building Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
