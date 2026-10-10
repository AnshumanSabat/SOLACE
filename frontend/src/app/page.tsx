import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import WomenRightsSection from '@/components/landing/WomenRightsSection';
import ScrollStorySection from '@/components/landing/ScrollStorySection';
import SteganographyDemo from '@/components/landing/SteganographyDemo';
import EmergencyHotlines from '@/components/landing/EmergencyHotlines';
import Footer from '@/components/landing/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import HomeNav from '@/components/landing/HomeNav';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F1EA] text-[#3B2630] selection:bg-[#F3DCD4] selection:text-[#3B2630] overflow-x-hidden">
      {/* Sticky nav — lives at page root so sticky:top-0 works without overflow-hidden interference */}
      <HomeNav />

      {/* 01. Hero — flush with nav */}
      <div className="-mt-3 sm:-mt-5 xl:-mt-[70px]">
        <HeroSection />
      </div>

      {/* 02. Legal Protections & Violation Laws Against Women (Calm-style Structure) */}
      <AnimatedSection variant="up" delay={0}>
        <WomenRightsSection />
      </AnimatedSection>

      {/* 03. Scroll Story — A Woman's Journey (Trapped -> Heard -> Empowered) */}
      <AnimatedSection variant="fade" delay={0}>
        <ScrollStorySection />
      </AnimatedSection>

    

      {/* 05. Dignified Footer */}
      <AnimatedSection variant="fade" delay={0}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
