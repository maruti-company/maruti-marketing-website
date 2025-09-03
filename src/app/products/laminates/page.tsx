import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Layers, Palette, Sparkles } from "lucide-react";
import Link from "next/link";

const LaminatesPage = () => {
  const laminateTypes = [
    {
      name: "High Pressure Laminates (HPL)",
      description:
        "Premium decorative surface materials for high-traffic areas",
      features: [
        "Scratch Resistant",
        "Heat Resistant",
        "Easy Maintenance",
        "Wide Color Range",
      ],
    },
    {
      name: "Compact Laminates",
      description:
        "Self-supporting panels for exterior and wet area applications",
      features: [
        "Waterproof",
        "UV Stable",
        "Impact Resistant",
        "Self Supporting",
      ],
    },
    {
      name: "Decorative Laminates",
      description:
        "Beautiful surface finishes for furniture and interior applications",
      features: [
        "Designer Patterns",
        "Natural Textures",
        "Anti-Bacterial",
        "Stain Resistant",
      ],
    },
    {
      name: "Laminate Sheet",
      description:
        "Versatile laminate sheets for various interior design applications",
      features: [
        "Flexible Application",
        "Easy Installation",
        "Cost Effective",
        "Durable Finish",
      ],
    },
    {
      name: "Acrylic Sheet",
      description:
        "High-gloss acrylic sheets for modern and contemporary designs",
      features: [
        "High Gloss Finish",
        "UV Resistant",
        "Easy to Clean",
        "Vibrant Colors",
      ],
    },
    {
      name: "ASA Sheet",
      description:
        "Weather-resistant ASA sheets ideal for outdoor applications",
      features: [
        "Weather Resistant",
        "UV Stable",
        "Color Retention",
        "Long Lasting",
      ],
    },
    {
      name: "PYC Sheet",
      description:
        "Premium PYC sheets offering superior durability and aesthetics",
      features: [
        "Superior Durability",
        "Premium Quality",
        "Aesthetic Appeal",
        "Versatile Use",
      ],
    },
    {
      name: "Linner Sheet",
      description:
        "Specialized linner sheets for professional finishing applications",
      features: [
        "Professional Grade",
        "Smooth Finish",
        "High Performance",
        "Reliable Quality",
      ],
    },
  ];

  const finishes = [
    "Wood Grain",
    "Stone Texture",
    "Fabric Finish",
    "Metallic",
    "Solid Colors",
    "Abstract Patterns",
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-7xl pt-32">
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-smooth"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Layers className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
                    Luxury Laminates
                  </h1>
                  <p className="text-xl text-primary-foreground/90 leading-relaxed">
                    Designer laminates with stunning finishes and textures for
                    modern interiors.
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
              <h2 className="text-4xl font-serif font-bold mb-6">
                Laminate Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your spaces with our premium laminate collection
                featuring the latest designs and textures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {laminateTypes.map((product, index) => (
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
                      <h3 className="text-2xl font-serif font-semibold mb-3">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {product.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Palette className="w-4 h-4 text-accent" />
                        Key Features
                      </h4>
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2"
                          >
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

            {/* Finishes Section */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  Available Finishes
                </h3>
                <p className="text-muted-foreground">
                  Choose from our extensive range of premium finishes
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {finishes.map((finish) => (
                  <div
                    key={finish}
                    className="bg-background p-4 rounded-xl text-center border border-border hover-lift"
                  >
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg mx-auto mb-2"></div>
                    <span className="text-sm font-medium">{finish}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-section">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4">
                See Our Laminate Samples
              </h2>
              <p className="text-muted-foreground mb-8">
                Visit our showroom to experience the quality and beauty of our
                laminates firsthand.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LaminatesPage;
