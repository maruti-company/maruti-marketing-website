import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Leaf,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    { name: "Premium Plywood", href: "/products/plywood" },
    { name: "Luxury Laminates", href: "/products/laminates" },
    { name: "Hardware Solutions", href: "/products/hardware" },
    { name: "Interior Solutions", href: "/products/interior-solutions" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/16tcRAfaw5/", name: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/marutilaminates/?igsh=MWx0MG04YXp4eXJ6Mw%3D%3D#", name: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Maruti Laminates
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Crafting excellence in wood for over 35 years. Your trusted
                partner for premium plywood, laminates, and complete interior
                solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">
                  MARUTI LAMINATES PVT. LTD. <br/>
                  Near serenity sky, Opp. kavisha panorama, <br/>
                  South Bopal, Ghuma main road, Ahmedabad
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm">{process.env.NEXT_PUBLIC_PRIMARY_MOBILE_NO}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm">{process.env.NEXT_PUBLIC_EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-smooth" />
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-smooth" />
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-smooth" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 01:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-bounce" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80 text-center md:text-left">
              © {new Date().getFullYear()} Maruti Laminates. All rights reserved. | Crafted with
              excellence since 1986.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
