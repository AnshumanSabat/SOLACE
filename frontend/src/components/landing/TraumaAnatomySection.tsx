'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
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

interface MotifItem {
  id: string;
  category: 'control' | 'liberation';
  title: string;
  sub: string;
  struggle: string;
  intervention: string;
  quote: string;
  Svg: React.ComponentType<{ className?: string; stroke?: string }>;
}

const MOTIFS: MotifItem[] = [
  {
    id: 'locked-door',
    category: 'control',
    title: 'Locked Door',
    sub: 'Spatial Confinement',
    struggle:
      'Being physically or psychologically confined within interior rooms, where doorways are blocked and escape routes are cut off under threats of escalation.',
    intervention:
      'Indoor room descriptors and distress coordinates are packaged into covert LSB pixel payloads, alerting responders without audible calls.',
    quote:
      '“He stood in the doorway. I couldn’t step outside without sparking rage.”',
    Svg: LockedDoorSvg,
  },
  {
    id: 'silenced-mouth',
    category: 'control',
    title: 'Hand Over Mouth',
    sub: 'Enforced Silence',
    struggle:
      'The terror of being silenced, screamed over, or threatened into believing that no one on the outside will believe or protect you.',
    intervention:
      'Our 3D companion provides an unmonitored sanctuary where your voice is heard with unconditional belief and gentle grounding.',
    quote:
      '“You learn to hold your breath and swallow your cries so the walls don’t hear.”',
    Svg: SilencedMouthSvg,
  },
  {
    id: 'broken-phone',
    category: 'control',
    title: 'Broken Phone',
    sub: 'Controlled Communication',
    struggle:
      'Screens smashed in anger, contacts deleted, or devices audited nightly for any sign of reaching out to family, friends, or services.',
    intervention:
      'Solace leaves zero local browser footprint, stores no cached data, and transmits distress signals through innocent photo galleries.',
    quote:
      '“Every night my phone was audited. If I deleted a thread, the questioning got worse.”',
    Svg: BrokenPhoneSvg,
  },
  {
    id: 'cracked-mirror',
    category: 'control',
    title: 'Cracked Mirror',
    sub: 'Fractured Confidence',
    struggle:
      'Relentless gaslighting and psychological degradation that slowly erodes your confidence, leaving you doubting your own sanity and memory.',
    intervention:
      'Psychological grounding routines validate your reality, rebuild self-agency, and counter cognitive distortion in a safe space.',
    quote:
      '“I looked in the mirror and barely recognized the trembling girl staring back.”',
    Svg: CrackedMirrorSvg,
  },
  {
    id: 'torn-photo',
    category: 'control',
    title: 'Torn Photograph',
    sub: 'Betrayed Relationship',
    struggle:
      'The heartbreak when the partner who promised tenderness becomes the source of terror, alternating violent rages with manipulative apologies.',
    intervention:
      'Objective trauma education demystifies trauma bonding and the cycle of violence, freeing survivors from guilt and self-blame.',
    quote:
      '“He would rip our memories to pieces in anger, then weep and beg for forgiveness the next morning.”',
    Svg: TornPhotographSvg,
  },
  {
    id: 'shattered-glass',
    category: 'control',
    title: 'Shattered Glass',
    sub: 'Broken Sense of Safety',
    struggle:
      'The chronic hypervigilance of living on edge, knowing any minor action could shatter household peace into sudden violent chaos.',
    intervention:
      'Emergency safety checklists help plan discreet grab-bags, secure essential documents, and map immediate exit routes.',
    quote:
      '“You learn to walk without making a sound, terrified of triggering the next explosion.”',
    Svg: ShatteredGlassSvg,
  },
  {
    id: 'bruised-arm',
    category: 'control',
    title: 'Bruised Arm',
    sub: 'Concealed Physical Trauma',
    struggle:
      'Physical markings hidden under long sleeves and makeup to preserve the public illusion that everything is fine while suffering alone.',
    intervention:
      'Client-side encrypted evidence logging preserves timestamped, court-admissible records without saving visible files to your device.',
    quote:
      '“I wore long sweaters even in the summer heat so coworkers wouldn’t see the handprints.”',
    Svg: BruisedArmSvg,
  },
  {
    id: 'torn-clothing',
    category: 'control',
    title: 'Torn Clothing',
    sub: 'Sign of Escalation',
    struggle:
      'The tangible aftermath of physical restraint and struggle, leaving survivors disoriented, shaken, and fearing the next escalation.',
    intervention:
      'Clear, confidential guidance on forensic evidence preservation and nearest safe shelters during emergency escapes.',
    quote:
      '“Holding the shredded fabric of my shirt in the bathroom, I realized I had to survive.”',
    Svg: TornClothingSvg,
  },
  {
    id: 'broken-chain',
    category: 'liberation',
    title: 'Broken Chain',
    sub: 'Freedom from Abuse',
    struggle:
      'The definitive, courageous threshold: severing the cycle of coercion and reclaiming sovereign ownership over your life and future.',
    intervention:
      'Constitutional legal agents demystify protective restraining orders, custody rights, and ex-parte relief in plain language.',
    quote:
      '“The moment the court order was granted, the invisible chains on my chest finally broke.”',
    Svg: BrokenChainSvg,
  },
  {
    id: 'bandage',
    category: 'liberation',
    title: 'Healing Bandage',
    sub: 'Somatic Recovery',
    struggle:
      'Tending to both physical wounds and nervous system exhaustion, relearning that safety, stillness, and peace are your birthright.',
    intervention:
      'Recovery and grounding modules support nervous system regulation, sleep restoration, and compassionate long-term healing.',
    quote:
      '“Healing isn’t forgetting—it’s waking up without your pulse racing in fear.”',
    Svg: BandageSvg,
  },
];

export default function TraumaAnatomySection() {
  const [selectedId, setSelectedId] = useState<string>('locked-door');
  const activeMotif = MOTIFS.find((m) => m.id === selectedId) || MOTIFS[0];
  const ActiveSvg = activeMotif.Svg;

  return (
    <section className="relative py-24 md:py-36 bg-[#F8F1EA] border-t border-[#E5DCD4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3B2630] font-normal leading-tight">
            The unspoken anatomy of coercion and recovery.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#766B68] font-light mt-4 leading-relaxed">
            Domestic distress is rarely a single moment—it is an intricate web of silent controls. Explore how Solace intervenes at each stage to guide you toward safety and freedom.
          </p>
        </div>

        {/* Editorial Split Matrix (No card nesting) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Typographic & Icon Index */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-[#766B68] font-sans pb-2 border-b border-[#E5DCD4]">
                Signs of Captivity (8)
              </div>
              <div className="divide-y divide-[#E5DCD4]/60">
                {MOTIFS.filter((m) => m.category === 'control').map((motif) => {
                  const isSelected = motif.id === selectedId;
                  const Icon = motif.Svg;
                  return (
                    <button
                      key={motif.id}
                      onClick={() => setSelectedId(motif.id)}
                      className={`w-full py-3 px-3 flex items-center justify-between text-left transition-colors ${
                        isSelected
                          ? 'bg-[#FFF9F4] text-[#3B2630] font-medium'
                          : 'text-[#766B68] hover:text-[#3B2630]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#3B2630]/75" stroke="#3B2630" />
                        <div>
                          <span className="font-serif text-base block leading-none">
                            {motif.title}
                          </span>
                          <span className="text-[11px] font-sans text-[#766B68] font-light">
                            {motif.sub}
                          </span>
                        </div>
                      </div>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B2630]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Liberation Paths */}
            <div className="pt-4 space-y-1">
              <div className="text-xs uppercase tracking-wider text-[#3B2630] font-sans font-medium pb-2 border-b border-[#E5DCD4]">
                Pathways to Freedom (2)
              </div>
              <div className="divide-y divide-[#E5DCD4]/60">
                {MOTIFS.filter((m) => m.category === 'liberation').map((motif) => {
                  const isSelected = motif.id === selectedId;
                  const Icon = motif.Svg;
                  return (
                    <button
                      key={motif.id}
                      onClick={() => setSelectedId(motif.id)}
                      className={`w-full py-3 px-3 flex items-center justify-between text-left transition-colors ${
                        isSelected
                          ? 'bg-[#FFF9F4] text-[#3B2630] font-medium'
                          : 'text-[#766B68] hover:text-[#3B2630]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#3B2630]" stroke="#3B2630" />
                        <div>
                          <span className="font-serif text-base block leading-none">
                            {motif.title}
                          </span>
                          <span className="text-[11px] font-sans text-[#766B68] font-light">
                            {motif.sub}
                          </span>
                        </div>
                      </div>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B2630]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Focused Reading Pane */}
          <div className="lg:col-span-7 bg-[#FFF9F4] p-8 sm:p-12 rounded-3xl border border-[#E5DCD4]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMotif.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                {/* Header with SVG Emblem */}
                <div className="flex items-center justify-between border-b border-[#E5DCD4] pb-6">
                  <div>
                    <h3 className="font-serif text-3xl text-[#3B2630] font-normal">
                      {activeMotif.title}
                    </h3>
                    <span className="text-xs font-sans text-[#766B68] uppercase tracking-wider block mt-1">
                      {activeMotif.sub}
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4]">
                    <ActiveSvg className="w-8 h-8 text-[#3B2630]" stroke="#3B2630" />
                  </div>
                </div>

                {/* Survivor Quote */}
                <p className="font-serif italic text-xl text-[#3B2630] leading-snug">
                  {activeMotif.quote}
                </p>

                {/* Core Struggle & Platform Intervention */}
                <div className="space-y-6 pt-2">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wider text-[#766B68] font-sans font-medium block">
                      The Lived Experience
                    </span>
                    <p className="font-sans text-base text-[#766B68] font-light leading-relaxed">
                      {activeMotif.struggle}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-[#E5DCD4]">
                    <span className="text-xs uppercase tracking-wider text-[#3B2630] font-sans font-medium flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#3B2630]" />
                      <span>How Solace Intervenes</span>
                    </span>
                    <p className="font-sans text-base text-[#3B2630] font-light leading-relaxed">
                      {activeMotif.intervention}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
