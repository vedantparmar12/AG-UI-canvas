"use client";

import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TemplatesSection } from "@/components/landing/TemplatesSection";
import { FuzzieSection } from "@/components/landing/FuzzieSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TemplatesSection />
        <FuzzieSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
