import { Button } from "@/components/ui/button";
import Link from "next/link";

const Products = () => {
  const products = [
    {
      icon: "🌲",
      title: "Premium Plywood",
      description:
        "High-grade marine, commercial, and decorative plywood for all construction needs.",
      features: [
        "Marine Grade",
        "BWR Quality",
        "Decorative Finish",
        "Custom Sizes",
      ],
      gradient: "from-emerald-500 to-teal-600",
      link: "/products/plywood",
    },
    {
      icon: "📋",
      title: "Luxury Laminates",
      description:
        "Designer laminates with stunning finishes and textures for modern interiors.",
      features: [
        "HPL Sheets",
        "Textured Finish",
        "Anti-Bacterial",
        "Scratch Resistant",
      ],
      gradient: "from-blue-500 to-indigo-600",
      link: "/products/laminates",
    },
    {
      icon: "🔧",
      title: "Hardware Solutions",
      description:
        "Complete range of furniture hardware, hinges, handles, and accessories.",
      features: [
        "Soft Close",
        "Heavy Duty",
        "Corrosion Resistant",
        "Designer Finish",
      ],
      gradient: "from-amber-500 to-orange-600",
      link: "/products/hardware",
    },
    {
      icon: "🏠",
      title: "Interior Solutions",
      description:
        "Complete range of interior materials and solutions for modern construction needs.",
      features: [
        "Cement Sheets",
        "PVC Sheets",
        "Bison Panels",
        "Adhesives & More",
      ],
      gradient: "from-purple-500 to-pink-600",
      link: "/products/interior-solutions",
    }
  ];

  return (
    <section
      id="products"
      className="py-12 bg-gradient-section relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-accent-foreground">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold">
            Complete Range of
            <span className="text-gradient block">Wood Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From premium plywood to luxury laminates, we offer everything you
            need to bring your vision to life with uncompromising quality.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-gradient-card p-8 rounded-2xl shadow-card hover-lift border border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-smooth rounded-2xl`}
              ></div>

              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <span className="text-3xl">{product.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold group-hover:text-gradient transition-smooth">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href={product.link}>
                  <Button
                    variant="outline"
                    className="group/btn hover-lift w-full mt-5"
                  >
                    Explore Range
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-smooth">
                      →
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
