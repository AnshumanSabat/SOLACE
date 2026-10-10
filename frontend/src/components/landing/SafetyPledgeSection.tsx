'use client';

import React from 'react';
import { Shield, EyeOff, Trash2, KeyRound, ShieldAlert } from 'lucide-react';

export default function SafetyPledgeSection() {
  const handleEscapeNow = () => {
    try {
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.replace('https://www.google.com');
  };

  return (
    <section id="privacy" className="relative py-24 md:py-36 bg-[#F8F1EA] border-t border-[#E5DCD4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF9F4] rounded-3xl p-8 sm:p-14 border border-[#E5DCD4]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal leading-tight">
                Our covenant with your safety.
              </h2>
              <p className="font-sans text-base text-[#766B68] font-light leading-relaxed">
                When privacy is compromised, lives are at risk. Solace is built from the core architecture up with zero-footprint principles. We never sell data, run tracking pixels, or store cookies that could compromise you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#3B2630]">
                    <Trash2 className="w-4 h-4 text-[#766B68]" />
                    <span>Instant Session Wipe</span>
                  </div>
                  <p className="text-xs text-[#766B68] font-light leading-normal">
                    Closing this tab or pressing ESC instantly clears all cached state from memory.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#3B2630]">
                    <EyeOff className="w-4 h-4 text-[#766B68]" />
                    <span>Zero Ad Trackers</span>
                  </div>
                  <p className="text-xs text-[#766B68] font-light leading-normal">
                    Completely free of commercial analytics, marketing scripts, and retargeting tags.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#3B2630]">
                    <KeyRound className="w-4 h-4 text-[#766B68]" />
                    <span>Encrypted at Rest</span>
                  </div>
                  <p className="text-xs text-[#766B68] font-light leading-normal">
                    Every distress signal and legal lookup is shielded with modern TLS 1.3 and AES-GCM.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#3B2630]">
                    <Shield className="w-4 h-4 text-[#766B68]" />
                    <span>Consent-Only Memory</span>
                  </div>
                  <p className="text-xs text-[#766B68] font-light leading-normal">
                    The 3D AI companion preserves previous conversation history only with your explicit click.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Quick Escape Panel */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4]">
              <span className="font-serif italic text-lg text-[#3B2630] mb-2">
                &ldquo;If someone suddenly enters the room&rdquo;
              </span>
              <p className="text-xs text-[#766B68] font-light mb-6 max-w-xs leading-relaxed">
                Click this button or press the <kbd className="px-1.5 py-0.5 text-[10px] bg-[#FFF9F4] rounded border border-[#E5DCD4] font-mono">ESC</kbd> key anywhere on this site to immediately redirect to Google Search without back history.
              </p>
              <button
                onClick={handleEscapeNow}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFF9F4] text-[#3B2630] border border-[#E5DCD4] font-sans text-xs font-medium hover:border-[#3B2630] transition-colors"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#DEB3A5]" />
                <span>Quick Exit Now (Esc)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
