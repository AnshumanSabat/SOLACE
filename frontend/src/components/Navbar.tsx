'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';
import { LoginDropdown } from './LoginDropdown';
import SignOut from './SignOut';
import { ShieldAlert } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useClerk();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  // Emergency quick exit handler for distress safety
  const handleQuickExit = () => {
    // Clear session storage and replace window to prevent back-button trace
    try {
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.replace('https://www.google.com');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleQuickExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (pathname === '/') {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFF9F4]/90 backdrop-blur-md border-b border-[#E5DCD4] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#E5DCD4] bg-[#FFF9F4] shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/solace-logo.png"
              alt="solace logo"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold tracking-wide text-[#3B2630] leading-none">
              solace
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#766B68] font-sans mt-0.5">
              Silent Shield
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-sans font-medium text-[#766B68]">
          <Link
            href="/"
            className={`transition-colors py-1 relative ${
              isActive('/')
                ? 'text-[#3B2630] font-semibold'
                : 'hover:text-[#3B2630]'
            }`}
          >
            Sanctuary
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3B2630] rounded-full" />
            )}
          </Link>

          <Link
            href="/create-post"
            className={`transition-colors py-1 relative ${
              isActive('/create-post')
                ? 'text-[#3B2630] font-semibold'
                : 'hover:text-[#3B2630]'
            }`}
          >
            SOS Converter
            {isActive('/create-post') && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3B2630] rounded-full" />
            )}
          </Link>

          <Link
            href="https://ai-avatar-frontend-coral.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors py-1 hover:text-[#3B2630]"
          >
            AI Companion
          </Link>

          <Link
            href="/decrypter"
            className={`transition-colors py-1 relative ${
              isActive('/decrypter')
                ? 'text-[#3B2630] font-semibold'
                : 'hover:text-[#3B2630]'
            }`}
          >
            SOS Decrypter
            {isActive('/decrypter') && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3B2630] rounded-full" />
            )}
          </Link>

          <Link
            href="/lawbot"
            className={`transition-colors py-1 relative ${
              isActive('/lawbot')
                ? 'text-[#3B2630] font-semibold'
                : 'hover:text-[#3B2630]'
            }`}
          >
            Legal Rights
            {isActive('/lawbot') && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3B2630] rounded-full" />
            )}
          </Link>

          {(user?.unsafeMetadata as { isAdmin?: boolean })?.isAdmin && (
            <Link
              href="/dashboard"
              className={`transition-colors py-1 relative ${
                isActive('/dashboard')
                  ? 'text-[#3B2630] font-semibold'
                  : 'hover:text-[#3B2630]'
              }`}
            >
              Authority Console
              {isActive('/dashboard') && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3B2630] rounded-full" />
              )}
            </Link>
          )}
        </nav>

        {/* Primary CTA on the far right */}
        <div className="flex items-center gap-3">
          <Link
            href="/create-post"
            className="px-5 py-2 rounded-full bg-[#3B2630] text-[#FFF9F4] hover:bg-[#523744] font-sans text-xs sm:text-sm font-medium tracking-wide transition-colors"
          >
            Find Support
          </Link>

          <button
            onClick={handleQuickExit}
            title="Press ESC to quickly leave this page without browser history trace"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium bg-[#FAF4EE] border border-[#E5DCD4] text-[#3B2630] hover:bg-[#E5DCD4] transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#DEB3A5]" />
            <span>Esc</span>
          </button>

          {!user ? <LoginDropdown /> : <SignOut />}
        </div>
      </div>
    </header>
  );
}
