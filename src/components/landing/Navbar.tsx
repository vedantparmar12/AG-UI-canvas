"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { openFuzzieInstructions } from "@/lib/fuzzie-redirect";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Canvas", href: "/canvas" },
  { name: "Fuzzie", href: "#fuzzie" },
  { name: "Templates", href: "#templates" },
  { name: "Docs", href: "#docs" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRedirectToFuzzie = () => {
    openFuzzieInstructions();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-foreground">
              CardiGraph
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/canvas">Try Canvas</Link>
            </Button>
            <Button 
              variant="outline" 
              onClick={handleRedirectToFuzzie}
              className="border-purple-500 text-purple-600 hover:bg-purple-50"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Fuzzie
            </Button>
            <Button asChild>
              <Link href="/workflows">Start Building</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/canvas">Try Canvas</Link>
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-purple-500 text-purple-600 hover:bg-purple-50"
                onClick={() => {
                  handleRedirectToFuzzie();
                  setIsMobileMenuOpen(false);
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Fuzzie Platform
              </Button>
              <Button className="w-full" asChild>
                <Link href="/workflows">Start Building</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
