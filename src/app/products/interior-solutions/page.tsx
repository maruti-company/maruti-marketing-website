import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Home, Palette, Sparkles } from "lucide-react";
import Link from "next/link";

const InteriorSolutionsPage = () => {
  const interiorProducts = [
    {
      name: "Cement Sheets",
      description: "Durable cement fiber sheets for exterior and interior applications",
      features: ["Fire Resistant", "Weather Proof", "High Strength", "Low Maintenance"]
    },
    {
      name: "PVC Sheet",
      description: "Versatile PVC sheets for modern interior and exterior designs",
      features: ["Water Resistant", "Easy Installation", "Lightweight", "Cost Effective"]
    },
    {
      name: "Bison Panel",
      description: "High-performance bison panels for premium construction applications",
      features: ["Superior Strength", "Thermal Insulation", "Sound Absorption", "Eco Friendly"]
    },
    {
      name: "Adhesive",
      description: "Professional-grade adhesives for all bonding and installation needs",
      features: ["Strong Bond", "Quick Setting", "Weather Resistant", "Multi-Purpose"]
    },
    {
      name: "Veneers",
      description: "Natural wood veneers for elegant finishing and decorative applications",
      features: ["Natural Wood", "Premium Quality", "Multiple Species", "Custom Cuts"]
    },
    {
      name: "Fibre Sheets",
      description: "High-density fiber sheets for structural and decorative applications",
      features: ["High Density", "Smooth Finish", "Easy Machining", "Versatile Use"]
    },
    {
      name: "PU Panel",
      description: "Polyurethane panels offering excellent insulation and durability",
      features: ["Thermal Insulation", "Lightweight", "Energy Efficient", "Durable Finish"]
    },
    {
      name: "Highlighters",
      description: "Decorative highlighter materials for accent and feature applications",
      features: ["Decorative Finish", "Light Reflective", "Easy Application", "Design Flexibility"]
    },
    {
      name: "Louvers",
      description: "Architectural louvers for ventilation and aesthetic enhancement",
      features: ["Air Circulation", "Weather Protection", "Architectural Design", "Multiple Sizes"]
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-7xl pt-32">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/" className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-smooth">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Home className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
                    Interior Solutions
                  </h1>
                  <p className="text-xl text-primary-foreground/90 leading-relaxed">
                    Complete range of interior materials and solutions for modern construction and design needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6">Interior Product Range</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our comprehensive collection of interior solutions designed for modern construction and architectural applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interiorProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-gradient-card p-8 rounded-2xl shadow-card hover-lift border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">{product.name}</h3>
                      <p className="text-muted-foreground mb-6">{product.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Palette className="w-4 h-4 text-accent" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-accent" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gradient-section">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Perfect For Every Application</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our interior solutions are suitable for a wide range of residential and commercial applications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Residential", desc: "Homes, apartments, and personal spaces" },
                { title: "Commercial", desc: "Offices, retail, and business establishments" },
                { title: "Hospitality", desc: "Hotels, restaurants, and entertainment venues" },
                { title: "Institutional", desc: "Schools, hospitals, and public buildings" }
              ].map((application) => (
                <div key={application.title} className="bg-gradient-card p-6 rounded-xl text-center border border-border/50">
                  <h3 className="font-semibold mb-2">{application.title}</h3>
                  <p className="text-sm text-muted-foreground">{application.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4">Ready for Your Next Project?</h2>
              <p className="text-muted-foreground mb-8">
                Let our experts help you choose the right interior solutions for your specific requirements and applications.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InteriorSolutionsPage;