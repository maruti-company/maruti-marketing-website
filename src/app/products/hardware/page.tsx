import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Wrench, Settings, Cog } from "lucide-react";
import Link from "next/link";

const HardwarePage = () => {
  const hardwareCategories = [
    {
      name: "Cabinet Hardware",
      description: "Premium hinges, drawer slides, and cabinet accessories",
      features: ["Soft Close Technology", "Full Extension", "Adjustable", "Corrosion Resistant"]
    },
    {
      name: "Door Hardware",
      description: "Complete range of door locks, handles, and accessories",
      features: ["Multi-Point Locking", "Anti-Theft", "Weather Sealed", "Easy Installation"]
    },
    {
      name: "Furniture Fittings",
      description: "Modern furniture hardware for contemporary designs",
      features: ["Tool-Free Assembly", "Modular Design", "Space Saving", "Designer Aesthetics"]
    },
    {
      name: "Mortise Lock Handle",
      description: "High-security mortise lock handles for premium door applications",
      features: ["High Security", "Durable Construction", "Premium Finish", "Easy Operation"]
    },
    {
      name: "Wardrobe Handle",
      description: "Stylish and functional handles for wardrobe and closet doors",
      features: ["Ergonomic Design", "Multiple Finishes", "Easy Installation", "Durable Material"]
    },
    {
      name: "Kitchen Handle",
      description: "Modern kitchen cabinet and drawer handles for contemporary kitchens",
      features: ["Food Safe Finish", "Easy to Clean", "Stylish Design", "Corrosion Resistant"]
    },
    {
      name: "Digital Lock",
      description: "Advanced digital locking systems for modern security needs",
      features: ["Keyless Entry", "Multiple Access Codes", "Battery Backup", "Smart Technology"]
    },
    {
      name: "Digital Safe",
      description: "Secure digital safes for valuable storage and protection",
      features: ["Digital Display", "Override Key", "Solid Steel Construction", "Fire Resistant"]
    },
    {
      name: "Tendom Box",
      description: "Premium drawer systems with smooth operation and durability",
      features: ["Smooth Operation", "High Load Capacity", "Self-Closing", "Easy Assembly"]
    },
    {
      name: "Furniture Accessories",
      description: "Complete range of furniture accessories for all applications",
      features: ["Universal Compatibility", "Quality Materials", "Various Sizes", "Professional Grade"]
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
                  <Wrench className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
                    Hardware Solutions
                  </h1>
                  <p className="text-xl text-primary-foreground/90 leading-relaxed">
                    Complete range of furniture hardware, hinges, handles, and accessories for every need.
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
              <h2 className="text-4xl font-serif font-bold mb-6">Hardware Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional-grade hardware solutions for furniture, cabinets, and architectural applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {hardwareCategories.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-gradient-card p-8 rounded-2xl shadow-card hover-lift border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <Settings className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">{product.name}</h3>
                      <p className="text-muted-foreground mb-6">{product.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Cog className="w-4 h-4 text-accent" />
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

        {/* Features Section */}
        <section className="py-16 bg-gradient-section">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Why Choose Our Hardware?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Premium quality hardware backed by extensive testing and industry certifications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "German Technology", desc: "Precision engineering from leading manufacturers" },
                { title: "Load Tested", desc: "Rigorous testing for maximum durability" },
                { title: "Easy Installation", desc: "Simple mounting with detailed instructions" },
                { title: "5 Year Warranty", desc: "Comprehensive warranty on all products" }
              ].map((feature) => (
                <div key={feature.title} className="bg-gradient-card p-6 rounded-xl text-center border border-border/50">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4">Need Hardware Consultation?</h2>
              <p className="text-muted-foreground mb-8">
                Our technical experts can help you select the right hardware for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-hero hover:opacity-90 transition-smooth">
                  Technical Support
                </Button>
                <Button variant="outline">
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HardwarePage;