'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  ShieldSecurityWoman,
  CompanionEmpathyWomen,
  LegalEmpowermentWoman,
} from '../illustrations/WomanIllustrations';

export default function PillarsSection() {
  return (
    <section id="pillars" className="relative py-24 md:py-36 bg-[#F8F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 md:space-y-40">
        {/* Section Intro */}
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3B2630] font-normal leading-tight">
            Engineered for privacy when ordinary systems fail.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#766B68] font-light mt-4 leading-relaxed">
            Every layer of Solace is rooted in psychological trauma care and cryptographic subtlety, restoring agency without compromise.
          </p>
        </div>

        {/* =========================================================================
            PILLAR 1: SOFT BLUSH (#F3DCD4) - COVERT SOS STEGANOGRAPHY
        ========================================================================= */}
        <div id="sos" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal leading-tight">
              Transmit cries for help in plain sight.
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#766B68] font-light leading-relaxed">
              When domestic partners inspect chat histories and phone galleries, asking for help is dangerous. Solace invisibly weaves encrypted distress coordinates into innocent, ordinary photographs of morning tea or gentle greenery.
            </p>

            <ul className="space-y-3 font-sans text-sm text-[#766B68] font-light pt-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DEB3A5] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Prompt Expansion:</strong> Fragmented distress words are structured into actionable emergency dossiers by Google Gemini.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DEB3A5] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Pixel Steganography:</strong> LSB payload encoding keeps images indistinguishable to the human eye.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DEB3A5] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Zero Local Trace:</strong> EXIF data is sanitized and no incident drafts are saved to browser cache.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/create-post"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3B2630] text-[#FFF9F4] font-sans text-sm font-semibold hover:bg-[#523744] transition-all"
              >
                <span>Create a Safety Plan</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Illustration Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#FFF9F4] border border-[#E5DCD4]">
              <ShieldSecurityWoman className="w-full h-auto drop-shadow-sm select-none" />
              <p className="text-center font-serif italic text-xs text-[#766B68] mt-4">
                &ldquo;A harmless picture in the gallery that speaks directly to verified responders.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PILLAR 2: LAVENDER (#D9D0E8) - 3D AI TRAUMA COMPANION
        ========================================================================= */}
        <div id="companion" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Illustration Column */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#FFF9F4] border border-[#E5DCD4]">
              <CompanionEmpathyWomen className="w-full h-auto drop-shadow-sm select-none" />
              <p className="text-center font-serif italic text-xs text-[#766B68] mt-4">
                &ldquo;Trauma-informed voice resonance that validates reality and de-escalates panic.&rdquo;
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal leading-tight">
              A gentle, confidential presence in your darkest hour.
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#766B68] font-light leading-relaxed">
              Living in acute fear causes sensory overload and cognitive paralysis. Solace provides a 24/7 empathetic listener with real-time lip-synced 3D facial expressions, guiding you through somatic grounding without ever judging.
            </p>

            <ul className="space-y-3 font-sans text-sm text-[#766B68] font-light pt-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9A8D4] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Somatic De-escalation:</strong> 4-7-8 pacing and sensory 5-4-3-2-1 grounding exercises to regulate your nervous system.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9A8D4] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Natural Audioviseme Speech:</strong> Compassionate conversational voice powered by ElevenLabs with micro-expression cues.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9A8D4] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Consent-Driven Ephemerality:</strong> Conversations vanish the moment the window closes unless you explicitly choose to remember.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="https://ai-avatar-frontend-coral.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3B2630] text-[#FFF9F4] font-sans text-sm font-semibold hover:bg-[#523744] transition-all"
              >
                <span>Talk to Your Companion</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PILLAR 3: SAGE TINT (#E1E7D9) - CONSTITUTIONAL LEGAL AGENT
        ========================================================================= */}
        <div id="legal" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal leading-tight">
              Constitutional rights without costly retainers.
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#766B68] font-light leading-relaxed">
              Legal statutes are often weaponized through complexity and fear. Solace translates intricate domestic violence acts, emergency protective orders, and custody rights into clear, step-by-step guidance.
            </p>

            <ul className="space-y-3 font-sans text-sm text-[#766B68] font-light pt-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2CEB5] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Statutory Retrieval:</strong> Indexed with domestic abuse legislation, child welfare protocols, and emergency relief statutes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2CEB5] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Court-Admissible Evidence:</strong> Checklists on preserving timestamped records safely without triggering abuser retaliation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2CEB5] mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-[#3B2630] font-medium">Ex-Parte Filing Assistance:</strong> Understand how to petition for protective orders safely before notifying the abuser.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/lawbot"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3B2630] text-[#FFF9F4] font-sans text-sm font-semibold hover:bg-[#523744] transition-all"
              >
                <span>Learn Your Options</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Illustration Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#FFF9F4] border border-[#E5DCD4]">
              <LegalEmpowermentWoman className="w-full h-auto drop-shadow-sm select-none" />
              <p className="text-center font-serif italic text-xs text-[#766B68] mt-4">
                &ldquo;Clear, accessible legal knowledge that restores sovereignty over your life.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
