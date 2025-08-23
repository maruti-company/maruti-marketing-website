"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-card">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm max-w-7xl">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{process.env.NEXT_PUBLIC_PRIMARY_MOBILE_NO || '+91 9737080808'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
            </div>
          </div>
          <div className="hidden md:block text-xs">
            Mon - Sat: 10:00 AM - 8:00 PM
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/maruti-logo.jfif"
              alt="Maruti Laminates Logo"
              className="h-10 w-auto object-contain"
            />
            <h1 className="text-2xl font-serif font-bold text-gradient">
              Maruti Laminates
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-smooth origin-left"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-smooth origin-left"></span>
                </a>
              )
            ))}
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Link href="/quote">
                <Button className="bg-gradient-hero hover:opacity-90 transition-smooth mt-4 w-fit">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;