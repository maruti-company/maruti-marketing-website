import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  const values = [
    {
      icon: "🌿",
      title: "Sustainable",
      description:
        "Eco-friendly sourcing and manufacturing processes for a better tomorrow.",
    },
    {
      icon: "🛡️",
      title: "Quality Assured",
      description:
        "Rigorous quality control ensures every product meets the highest standards.",
    },
    {
      icon: "🏆",
      title: "Industry Leader",
      description:
        "40+ years of excellence and innovation in wood craftsmanship.",
    },
    {
      icon: "❤️",
      title: "Customer First",
      description: "Your satisfaction and trust drive everything we do.",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 bg-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-accent-foreground">
                About Maruti
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Building Dreams with
                <span className="text-gradient block">Premium Wood</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 1986, Maruti Laminates has been at the forefront of
                wood innovation, delivering exceptional plywood, laminates, and
                interior solutions that transform spaces into extraordinary
                experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, sustainability, and customer
                satisfaction has made us the preferred choice for architects,
                designers, and homeowners across the region. We combine
                traditional craftsmanship with modern technology to create
                products that stand the test of time.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">40+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Excellence
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gradient">5,000+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
            </div>

            <Button className="bg-gradient-hero hover:opacity-90 transition-smooth shadow-elegant group" asChild>
              <Link href="/gallery">
                Explore Gallery
                <span className="ml-2 group-hover:translate-x-1 transition-smooth">
                  →
                </span>
              </Link>
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-gradient-card p-6 rounded-2xl shadow-card hover-lift border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
