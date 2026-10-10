'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, ArrowUpRight, Heart, Sparkles, Wind } from 'lucide-react';

export default function CtaSection() {
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
    <section className="relative overflow-hidden py-28 md:py-44 my-8">
      {/* Background Image Container with Smooth Cinematic Drift Animation */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/cta-distress-bg.jpg"
            alt="A woman in quiet emotional distress seeking light and sanctuary"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center filter saturate-[0.85] brightness-[0.75]"
          />
        </motion.div>
      </div>

      {/* Seamless Multi-Layer Gradient Overlays ensuring zero harsh cuts */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#F8F1EA] via-[#3B2630]/85 to-[#FFF9F4]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,#3B2630/90,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F4]/15 backdrop-blur-md border border-[#FFF9F4]/20 text-[#FFF9F4] text-xs uppercase tracking-widest font-sans mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#F3DCD4] animate-pulse" />
          <span>A Silent Shield &bull; Confidential &bull; Zero Footprint</span>
        </motion.div>

        {/* Center Headline with Editorial Playfair Typography */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFF9F4] font-normal leading-[1.1] tracking-tight max-w-4xl mx-auto"
        >
          You don&apos;t have to carry the silence alone.
        </motion.h2>

        {/* Compassionate Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#FFF9F4]/85 font-light leading-relaxed max-w-2xl mx-auto mt-6 mb-10"
        >
          Whether you need an undetectable cry for help, a compassionate voice to ground you through a panic attack, or plain-language legal rights to take back your freedom—Solace is here.
        </motion.p>

        {/* Centered Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/create-post"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F3DCD4] text-[#3B2630] font-sans text-sm font-semibold tracking-wide shadow-lg hover:bg-[#FFF9F4] hover:shadow-xl transition-all duration-300 group"
          >
            <span>Initiate Covert SOS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="https://ai-avatar-frontend-coral.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFF9F4]/15 backdrop-blur-md text-[#FFF9F4] border border-[#FFF9F4]/30 font-sans text-sm font-medium tracking-wide hover:bg-[#FFF9F4]/25 transition-all"
          >
            <Heart className="w-4 h-4 text-[#D9D0E8]" />
            <span>Speak with 3D Companion</span>
          </Link>

          <button
            onClick={() => setIsBreathing(!isBreathing)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent text-[#FFF9F4]/90 border border-[#FFF9F4]/20 hover:border-[#FFF9F4]/50 font-sans text-xs tracking-wider uppercase transition-all"
          >
            <Wind className="w-3.5 h-3.5" />
            <span>{isBreathing ? 'Stop Breath Tool' : 'Calm Breathing Guide'}</span>
          </button>
        </motion.div>

        {/* Interactive Somatic Grounding Ring (Embedded in CTA) */}
        <AnimatePresence>
          {isBreathing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, height: 0 }}
              animate={{ opacity: 1, scale: 1, height: 'auto' }}
              exit={{ opacity: 0, scale: 0.9, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-8 max-w-sm mx-auto rounded-3xl bg-[#FFF9F4]/10 backdrop-blur-lg border border-[#FFF9F4]/25 text-[#FFF9F4] flex flex-col items-center space-y-4"
            >
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#F3DCD4]">
                4-4-4-4 Somatic Box Breathing
              </span>

              <motion.div
                animate={{
                  scale: breathPhase === 'Inhale' || breathPhase === 'Hold' ? 1.3 : 0.85,
                  borderColor:
                    breathPhase === 'Inhale'
                      ? '#F3DCD4'
                      : breathPhase === 'Hold'
                      ? '#D9D0E8'
                      : '#E1E7D9',
                }}
                transition={{ duration: 3.8, ease: 'easeInOut' }}
                className="w-24 h-24 rounded-full border-4 border-[#F3DCD4] flex items-center justify-center shadow-inner"
              >
                <span className="font-serif text-sm font-semibold tracking-wide">
                  {breathPhase}
                </span>
              </motion.div>

              <p className="font-serif italic text-xs text-[#FFF9F4]/80 text-center max-w-xs">
                Feel your feet on the ground. You are safe in this present breath.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Safety Escape Note */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-[#FFF9F4]/70 font-light">
          <ShieldAlert className="w-3.5 h-3.5 text-[#F3DCD4]" />
          <span>If in sudden danger, hit the </span>
          <kbd className="px-2 py-0.5 rounded bg-[#FFF9F4]/20 border border-[#FFF9F4]/30 text-[#FFF9F4] font-mono text-[10px]">
            ESC
          </kbd>
          <span> key or tap </span>
          <button
            onClick={handleQuickExit}
            className="underline underline-offset-2 hover:text-[#FFF9F4] transition-colors"
          >
            Quick Exit
          </button>
        </div>
      </div>
    </section>
  );
}
