'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const companionUrl = 'https://ai-avatar-frontend-coral.vercel.app/';

const navLinks = [
  { label: 'Legal Rights', href: '#legal-rights', external: false },
  { label: 'SOS Converter', href: '/create-post', external: false },
  { label: 'SOS Decrypter', href: '/decrypter', external: false },
  { label: 'AI Companion', href: companionUrl, external: true },
];

const navClass = 'transition-colors hover:text-[#3B2630]';

export default function HomeNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFF9F4]/85 backdrop-blur-md border-b border-[#E5DCD4]/60">
      <div className="mx-auto w-full max-w-[120rem] flex items-center justify-between gap-4 px-4 sm:px-6 xl:px-[1.75rem] h-14 xl:h-[3.75rem]">
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#E5DCD4] bg-[#FFF9F4] shadow-sm flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
            <Image
              src="/solace-logo.png"
              alt="solace logo"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#3B2630] leading-none">
            solace<span className="text-[#B08D57]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#766B68] md:flex xl:ml-auto xl:mr-8 xl:gap-8">
          {navLinks.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={navClass}
              >
                {label}
              </a>
            ) : (
              <Link key={label} href={href} className={navClass}>
                {label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/create-post"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#3B2630] px-4 py-2 text-sm font-medium text-[#FFF9F4] transition-colors hover:bg-[#523744] sm:px-5"
        >
          Find Support
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
