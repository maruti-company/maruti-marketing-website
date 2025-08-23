import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "📐",
      title: "Design Consultation",
      description:
        "Expert guidance to bring your vision to life with professional design insights.",
      process: [
        "Initial Meeting",
        "Space Analysis",
        "Design Proposal",
        "Final Approval",
      ],
    },
    {
      icon: "⚙️",
      title: "Custom Manufacturing",
      description:
        "Tailored solutions manufactured to your exact specifications and requirements.",
      process: ["Requirements", "Production", "Quality Check", "Delivery"],
    },
    {
      icon: "🚛",
      title: "Delivery & Logistics",
      description:
        "Reliable nationwide delivery with proper packaging and handling.",
      process: [
        "Order Processing",
        "Packaging",
        "Transit Tracking",
        "Safe Delivery",
      ],
    },
    {
      icon: "👥",
      title: "Installation Services",
      description:
        "Professional installation by our skilled craftsmen for perfect results.",
      process: [
        "Site Preparation",
        "Installation",
        "Quality Check",
        "Handover",
      ],
    },
  ];

  const benefits = [
    "40+ Years Experience",
    "ISI/ISO Certified Quality",
    "Pan-India Delivery",
    "Expert Installation",
    "Warranty Support",
    "24/7 Customer Service",
  ];

  return (
    <section
      id="services"
      className="py-12 bg-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-accent-foreground">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold">
            End-to-End
            <span className="text-gradient block">Wood Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From initial consultation to final installation, we provide
            comprehensive services to ensure your project succeeds beyond
            expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group space-y-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Card */}
              <div className="bg-gradient-card p-6 rounded-2xl shadow-card hover-lift border border-border/50 h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold group-hover:text-gradient transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Process Steps */}
                <div className="mt-4 space-y-2">
                  {service.process.map((step, stepIndex) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/50 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-2">
              Our Process
            </h3>
            <p className="text-muted-foreground">
              Simple, transparent, and efficient workflow
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              "Consultation",
              "Design",
              "Manufacturing",
              "Delivery",
              "Installation",
            ].map((step, index) => (
              <div
                key={step}
                className="flex flex-col md:flex-row items-center gap-4"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium mt-2">{step}</div>
                </div>
                {index < 4 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-accent to-accent/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & CTA */}
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-center">
              Why Choose Our Services?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 justify-center">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span className="text-sm text-muted-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
