'use client';

import React from 'react';
import Image from 'next/image';

export default function RealitySection() {
  return (
    <section className="relative py-24 md:py-36 bg-[#F8F1EA] border-t border-[#E5DCD4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Evocative Editorial Photography */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#E5DCD4] bg-[#FFF9F4] shadow-sm">
              <Image
                src="/images/distress-window.jpg"
                alt="A young woman looking through a rain-streaked window in contemplation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter saturate-[0.88]"
              />
            </div>
            <p className="font-serif italic text-sm text-[#766B68] text-center">
              &ldquo;Globally, 1 in 3 women face coercion. When every device is monitored, reaching out is dangerous.&rdquo;
            </p>
          </div>

          {/* Right Column: Editorial Narrative & Three Realities */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3B2630] font-normal leading-tight">
              In abusive environments, ordinary cries for help provoke danger.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#766B68] font-light leading-relaxed">
              When abusive partners inspect call logs, browser tabs, and messaging applications, standard emergency hotlines become an unacceptable hazard. Over 80% of domestic trauma is endured in silence—not for lack of courage, but for lack of safe secrecy.
            </p>

            <div className="pt-4 space-y-6 border-t border-[#E5DCD4]">
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl text-[#3B2630] font-medium">
                  01. The Trap of Digital Footprints
                </h3>
                <p className="font-sans text-sm text-[#766B68] font-light leading-relaxed">
                  Call records and downloaded apps leave immediate traces. Solace runs ephemerally in standard browser tabs with instant session wipes and undetectable LSB pixel steganography.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl text-[#3B2630] font-medium">
                  02. Paralyzing Psychological Isolation
                </h3>
                <p className="font-sans text-sm text-[#766B68] font-light leading-relaxed">
                  Fear and constant surveillance cloud clear decision-making. Our 3D companion provides an unmonitored space for grounding exercises and compassionate conversation.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-xl text-[#3B2630] font-medium">
                  03. The Opaque Legal Barrier
                </h3>
                <p className="font-sans text-sm text-[#766B68] font-light leading-relaxed">
                  Navigating protection orders and custody laws shouldn’t require expensive retainers. Solace breaks down legal rights into plain, actionable language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
