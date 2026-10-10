'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Heart, Wind, ShieldAlert, Sparkles, Eye } from 'lucide-react';
import {
  BrokenPhoneSvg,
  CrackedMirrorSvg,
  BruisedArmSvg,
  TornClothingSvg,
  BrokenChainSvg,
  LockedDoorSvg,
  ShatteredGlassSvg,
  BandageSvg,
  TornPhotographSvg,
  SilencedMouthSvg,
} from './TraumaSvgIcons';

const BACKGROUND_SVGS = [
  {
    id: 'locked-door',
    title: 'Locked Door',
    desc: 'Feeling trapped & physical confinement',
    Svg: LockedDoorSvg,
    position: 'top-12 left-4 md:top-20 md:left-12',
    color: '#3B2630',
  },
  {
    id: 'broken-phone',
    title: 'Broken Phone',
    desc: 'Communication controlled or severed',
    Svg: BrokenPhoneSvg,
    position: 'top-28 left-1/4 md:top-36 md:left-[18%]',
    color: '#3B2630',
  },
  {
    id: 'silenced-mouth',
    title: 'Hand Over Mouth',
    desc: 'Silencing & psychological control',
    Svg: SilencedMouthSvg,
    position: 'top-12 right-4 md:top-20 md:right-12',
    color: '#3B2630',
  },
  {
    id: 'cracked-mirror',
    title: 'Cracked Mirror',
    desc: 'Damaged self-image & gaslighting',
    Svg: CrackedMirrorSvg,
    position: 'top-28 right-1/4 md:top-36 md:right-[18%]',
    color: '#3B2630',
  },
  {
    id: 'shattered-glass',
    title: 'Shattered Glass',
    desc: 'Trauma & broken sense of safety',
    Svg: ShatteredGlassSvg,
    position: 'bottom-28 left-6 md:bottom-36 md:left-16',
    color: '#3B2630',
  },
  {
    id: 'bruised-arm',
    title: 'Bruised Arm',
    desc: 'Physical violence hidden under sleeves',
    Svg: BruisedArmSvg,
    position: 'bottom-28 right-6 md:bottom-36 md:right-16',
    color: '#3B2630',
  },
  {
    id: 'torn-clothing',
    title: 'Torn Clothing',
    desc: 'Physical sign of a violent incident',
    Svg: TornClothingSvg,
    position: 'bottom-12 left-1/4 md:bottom-16 md:left-[28%]',
    color: '#3B2630',
  },
  {
    id: 'torn-photo',
    title: 'Torn Photograph',
    desc: 'A relationship broken by abuse',
    Svg: TornPhotographSvg,
    position: 'bottom-12 right-1/4 md:bottom-16 md:right-[28%]',
    color: '#3B2630',
  },
  {
    id: 'broken-chain',
    title: 'Broken Chain',
    desc: 'Freedom from abuse & sovereign choice',
    Svg: BrokenChainSvg,
    position: 'top-6 left-1/2 -translate-x-1/2 md:top-8',
    color: '#3B2630',
  },
  {
    id: 'bandage',
    title: 'Bandage',
    desc: 'Physical wounds & somatic recovery',
    Svg: BandageSvg,
    position: 'bottom-6 left-1/2 -translate-x-1/2 md:bottom-8',
    color: '#3B2630',
  },
];

export default function HeroCtaSection() {
  const [hoveredSvg, setHoveredSvg] = useState<string | null>(null);
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');

  useEffect(() => {
    if (!isBreathing) return;
    const phases: Array<'Inhale' | 'Hold' | 'Exhale' | 'Rest'> = ['Inhale', 'Hold', 'Exhale', 'Rest'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setBreathPhase(phases[idx]);
    }, 4000);
    return () => clearInterval(interval);
  }, [isBreathing]);

  const handleQuickExit = () => {
    try {
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.replace('https://www.google.com');
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F8F1EA]">
      {/* =========================================================================
          BACKGROUND LAYER 1: CINEMATIC IMAGE OF GIRL IN DISTRESS
      ========================================================================= */}
      <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/cta-distress-bg.jpg"
            alt="A woman in emotional distress seeking light and safety"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center filter saturate-[0.80] opacity-35"
          />
        </motion.div>
      </div>

      {/* =========================================================================
          BACKGROUND LAYER 2: THEME GRADIENT WASH (Strict Palette & High Contrast)
          Ensures the centered text is 100% visible, sharp and legible!
      ========================================================================= */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#F8F1EA]/90 via-[#F8F1EA]/75 to-[#F8F1EA]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_80%_65%_at_50%_50%,#FFF9F4/95,#F8F1EA/90)]"
        aria-hidden="true"
      />

      {/* =========================================================================
          BACKGROUND LAYER 3: THE 10 ARTISTIC SVGs IN THE BACKGROUND
          (Broken phone, Cracked mirror, Bruised arm, Torn clothing, Broken chain,
           Locked door, Shattered glass, Bandage, Torn photograph, Hand over mouth)
      ========================================================================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-auto">
        {BACKGROUND_SVGS.map((item, index) => {
          const SvgComponent = item.Svg;
          const isHovered = hoveredSvg === item.id;
          return (
            <motion.div
              key={item.id}
              className={`absolute ${item.position} group cursor-pointer transition-all duration-300`}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: [0, (index % 2 === 0 ? -6 : 6), 0],
              }}
              transition={{
                y: { duration: 6 + (index % 4), repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.8, delay: index * 0.08 },
              }}
              onMouseEnter={() => setHoveredSvg(item.id)}
              onMouseLeave={() => setHoveredSvg(null)}
            >
              <div
                className={`p-2.5 rounded-2xl transition-all duration-300 ${
                  isHovered
                    ? 'bg-[#FFF9F4] shadow-md border border-[#DEB3A5] scale-110'
                    : 'bg-[#FFF9F4]/40 hover:bg-[#FFF9F4]/80 border border-[#E5DCD4]/60'
                }`}
              >
                <SvgComponent
                  className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 ${
                    isHovered ? 'text-[#3B2630]' : 'text-[#3B2630]/65'
                  }`}
                  stroke={isHovered ? '#3B2630' : '#523744'}
                />
              </div>

              {/* Informative Tooltip on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-40 left-1/2 -translate-x-1/2 mt-2 px-3.5 py-1.5 rounded-xl bg-[#3B2630] text-[#FFF9F4] text-center whitespace-nowrap shadow-xl pointer-events-none"
                  >
                    <p className="font-serif text-xs font-medium leading-none">
                      {item.title}
                    </p>
                    <span className="text-[10px] font-sans text-[#F3DCD4] block mt-0.5 font-light">
                      {item.desc}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* =========================================================================
          FOREGROUND: CENTERED HIGH-IMPACT HERO CTA CONTENT
      ========================================================================= */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Pill (Theme-aligned Soft Blush & Primary Text) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F4] border border-[#DEB3A5] text-[#3B2630] text-xs uppercase tracking-widest font-sans shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#DEB3A5] animate-pulse" />
          <span className="font-medium">Confidential &bull; Steganographic &bull; Zero Digital Footprint</span>
        </motion.div>

        {/* Primary Headline with Google Font (Playfair Display) */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#3B2630] font-normal tracking-tight leading-[1.12] max-w-3xl"
        >
          When silence is survival,{' '}
          <span className="italic font-medium text-[#3B2630] underline decoration-[#DEB3A5] decoration-2 underline-offset-8">
            solace
          </span>{' '}
          is your strength.
        </motion.h1>

        {/* Supporting Subtext with Plus Jakarta Sans */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#766B68] font-light leading-relaxed max-w-2xl mt-6 mb-10"
        >
          You do not have to endure fear or surveillance alone. Send covert distress signals concealed inside ordinary photos, speak with a trauma-informed 3D companion, and access constitutional legal rights—without leaving a trace.
        </motion.p>

        {/* Centered Action Buttons (High contrast & Theme Colors) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/create-post"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3B2630] text-[#FFF9F4] font-sans text-sm font-semibold tracking-wide shadow-md hover:bg-[#523744] hover:shadow-lg transition-all duration-200 group"
          >
            <span>Initiate Covert SOS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="https://ai-avatar-frontend-coral.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFF9F4] text-[#3B2630] border border-[#DEB3A5] font-sans text-sm font-medium tracking-wide shadow-sm hover:border-[#3B2630] hover:bg-[#FAF0EC] transition-all duration-200"
          >
            <Heart className="w-4 h-4 text-[#766B68]" />
            <span>Speak with 3D Companion</span>
          </Link>

          <button
            onClick={() => setIsBreathing(!isBreathing)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#F3DCD4] text-[#3B2630] border border-[#DEB3A5] hover:bg-[#DEB3A5] font-sans text-xs uppercase tracking-wider font-medium transition-all duration-200"
          >
            <Wind className="w-3.5 h-3.5" />
            <span>{isBreathing ? 'Close Breath Guide' : 'Somatic Breath Guide'}</span>
          </button>
        </motion.div>

        {/* Interactive Somatic Box Breathing Tool */}
        <AnimatePresence>
          {isBreathing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, height: 0 }}
              animate={{ opacity: 1, scale: 1, height: 'auto' }}
              exit={{ opacity: 0, scale: 0.9, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 p-6 sm:p-8 max-w-sm w-full mx-auto rounded-3xl bg-[#FFF9F4] border border-[#DEB3A5] shadow-lg flex flex-col items-center space-y-4"
            >
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#766B68]">
                4-4-4-4 Somatic Panic De-escalation
              </span>

              <motion.div
                animate={{
                  scale: breathPhase === 'Inhale' || breathPhase === 'Hold' ? 1.25 : 0.88,
                  borderColor:
                    breathPhase === 'Inhale'
                      ? '#DEB3A5'
                      : breathPhase === 'Hold'
                      ? '#B8A8D4'
                      : '#C5D2B8',
                }}
                transition={{ duration: 3.8, ease: 'easeInOut' }}
                className="w-24 h-24 rounded-full border-4 border-[#DEB3A5] bg-[#F8F1EA] flex items-center justify-center shadow-inner"
              >
                <span className="font-serif text-sm font-semibold text-[#3B2630] tracking-wide">
                  {breathPhase}
                </span>
              </motion.div>

              <p className="font-serif italic text-xs text-[#766B68] text-center max-w-xs">
                Feel your feet against the floor. You are safe in this present moment.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Symbols Hint & Quick Exit Indicator */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#766B68] font-light">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DEB3A5]" />
            <span>Hover background icons to reveal symbols of control & healing</span>
          </div>

          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-[#3B2630]" />
            <span>Press </span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#FFF9F4] border border-[#E5DCD4] text-[10px] font-mono text-[#3B2630] font-semibold">
              ESC
            </kbd>
            <span> anytime for instant Google exit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
