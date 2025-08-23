import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, TreePine, Shield, Droplets, Star } from "lucide-react";
import Link from "next/link";

const PlywoodPage = () => {
  const plywoodTypes = [
    {
      name: "Marine Plywood",
      description: "Premium waterproof plywood for marine and exterior applications",
      features: ["100% Waterproof", "Termite Resistant", "High Strength", "Smooth Finish"]
    },
    {
      name: "Commercial Plywood", 
      description: "Cost-effective solution for interior furniture and construction",
      features: ["Moisture Resistant", "Economical", "Versatile", "Easy to Work"]
    },
    {
      name: "Decorative Plywood",
      description: "Pre-finished plywood with beautiful veneers for premium interiors",
      features: ["Ready to Use", "Natural Grain", "UV Protection", "Scratch Resistant"]
    },
    {
      name: "MR Plywood",
      description: "Moisture resistant plywood ideal for interior applications and furniture",
      features: ["Moisture Resistant", "Interior Use", "Cost Effective", "Durable"]
    },
    {
      name: "MR Block Board",
      description: "Moisture resistant block board with solid wood core for heavy-duty applications",
      features: ["Solid Wood Core", "High Strength", "Moisture Resistant", "Warp Resistant"]
    },
    {
      name: "MR Flush Door",
      description: "Ready-to-use moisture resistant flush doors for interior applications",
      features: ["Ready to Install", "Smooth Surface", "Moisture Resistant", "Uniform Thickness"]
    },
    {
      name: "BWP Plywood",
      description: "Boiling water proof plywood for exterior and marine applications",
      features: ["100% Waterproof", "Weather Resistant", "Marine Grade", "Long Lasting"]
    },
    {
      name: "BWP Block Board",
      description: "Waterproof block board with solid wood core for exterior use",
      features: ["Waterproof", "Solid Core", "Weather Resistant", "High Load Bearing"]
    },
    {
      name: "BWP Flush Door",
      description: "Waterproof flush doors suitable for exterior and wet area applications",
      features: ["Waterproof", "Weather Resistant", "Exterior Grade", "Low Maintenance"]
    },
    {
      name: "Fire Retardant Plywood",
      description: "Specially treated plywood with fire-resistant properties for enhanced safety",
      features: ["Fire Resistant", "Safety Certified", "Low Smoke Emission", "Structural Integrity"]
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
                  <TreePine className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
                    Premium Plywood
                  </h1>
                  <p className="text-xl text-primary-foreground/90 leading-relaxed">
                    High-grade marine, commercial, and decorative plywood for all your construction and interior needs.
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
              <h2 className="text-4xl font-serif font-bold mb-6">Our Plywood Range</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive range of premium plywood solutions, each engineered for specific applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plywoodTypes.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-gradient-card p-8 rounded-2xl shadow-card hover-lift border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">{product.name}</h3>
                      <p className="text-muted-foreground mb-6">{product.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-accent" />
                        Key Features
                      </h4>
                      <div className="space-y-2 mb-6">
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
      </main>
    </div>
  );
};

export default PlywoodPage;