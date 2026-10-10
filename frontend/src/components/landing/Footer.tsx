'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5DCD4] bg-[#FFF9F4] text-[#766B68] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E5DCD4]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E5DCD4] bg-[#FFF9F4] shadow-sm">
                <Image
                  src="/solace-logo.png"
                  alt="solace logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-[#3B2630]">
                solace
              </span>
            </div>

            <p className="font-sans text-sm text-[#766B68] font-light max-w-sm leading-relaxed">
              A trauma-informed safety sanctuary engineered for women navigating domestic coercion and high-surveillance environments.
            </p>

            <p className="font-serif italic text-xs text-[#3B2630]/80">
              A Silent Shield, A Strong Voice.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#3B2630] font-sans font-medium block">
              Core Sanctuary
            </span>
            <ul className="space-y-2 text-sm font-sans font-light">
              <li>
                <Link href="/create-post" className="hover:text-[#3B2630] transition-colors">
                  Covert SOS Generator
                </Link>
              </li>
              <li>
                <Link
                  href="https://ai-avatar-frontend-coral.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3B2630] transition-colors"
                >
                  3D AI Companion
                </Link>
              </li>
              <li>
                <Link href="/lawbot" className="hover:text-[#3B2630] transition-colors">
                  Constitutional Law Agent
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#3B2630] transition-colors">
                  Authority Vector Console
                </Link>
              </li>
            </ul>
          </div>

          {/* Safety & Protocol */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#3B2630] font-sans font-medium block">
              Digital Discretion
            </span>
            <p className="text-xs text-[#766B68] font-light leading-relaxed">
              Solace does not install tracking beacons, monitor IP geolocation without consent, or record persistent local storage credentials. To protect yourself further, browse in a Private or Incognito window.
            </p>
            <div className="pt-2 text-xs text-[#3B2630] font-medium">
              <span>Quick Exit always enabled with key: </span>
              <kbd className="px-2 py-0.5 rounded bg-[#F8F1EA] border border-[#E5DCD4] text-[11px] font-mono">
                ESC
              </kbd>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#766B68]">
          <p>&copy; {new Date().getFullYear()} solace. Dedicated to every silent struggle.</p>
          <div className="flex items-center gap-6">
            <span>Non-commercial open sanctuary</span>
            <span>Zero ad monetization</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
