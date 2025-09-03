import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-40 pb-16 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-card">
              <span className="text-accent">✨</span>
              <span className="text-sm font-medium text-muted-foreground">
                Premium Quality Since 1986
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                Crafting
                <span className="text-gradient block">Excellence</span>
                in Wood
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transform your spaces with our premium plywood, exquisite
                laminates, durable hardware, and complete interior solutions.
                Where quality meets innovation.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground">🏆</span>
                </div>
                <div>
                  <div className="font-semibold">40+ Years</div>
                  <div className="text-sm text-muted-foreground">
                    Experience
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground">👥</span>
                </div>
                <div>
                  <div className="font-semibold">5,000+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground">⭐</span>
                </div>
                <div>
                  <div className="font-semibold">5 Star</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#products">
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:opacity-90 transition-smooth shadow-elegant hover-glow group"
                >
                  Explore Products
                  <span className="ml-2 group-hover:translate-x-1 transition-smooth">
                    →
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 space-y-6">
              {/* Main showcase card */}
              <div className="bg-gradient-card p-8 rounded-2xl shadow-card hover-lift">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <span className="text-4xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold">
                    Premium Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Every piece crafted with precision and attention to detail,
                    ensuring durability and aesthetic excellence.
                  </p>
                </div>
              </div>

              {/* Secondary cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-card hover-lift">
                  <div className="text-3xl font-bold text-gradient">10000+</div>
                  <div className="text-sm text-muted-foreground">
                    Product Varieties
                  </div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-card hover-lift">
                  <div className="text-3xl font-bold text-gradient">
                    ISI/ISO
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Certified Quality
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-accent opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 fill-background"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
