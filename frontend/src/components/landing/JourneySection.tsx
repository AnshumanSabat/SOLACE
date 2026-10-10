'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'The Silent Threshold',
    description:
      'Recognizing fear in an environment of digital surveillance. You do not need to make an audible call or leave a trail to seek help.',
  },
  {
    number: '02',
    title: 'Discreet Transmission',
    description:
      'A simple, hurried note is transformed into a peaceful visual and transmitted invisibly to emergency support systems.',
  },
  {
    number: '03',
    title: 'Trauma Grounding',
    description:
      'Access an empathetic, confidential voice companion that steadies your heart rate and restores emotional clarity.',
  },
  {
    number: '04',
    title: 'Constitutional Protection',
    description:
      'Clear, accessible legal knowledge guides you through restraining orders and protective custody step-by-step.',
  },
];

export default function JourneySection() {
  return (
    <section className="relative py-24 md:py-36 bg-[#F8F1EA] border-t border-[#E5DCD4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image of Hope & Solace */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#E5DCD4] bg-[#FFF9F4] shadow-sm">
              <Image
                src="/images/hope-calm.jpg"
                alt="A young woman emerging into gentle sunlight, finding solace and renewed hope"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2630]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-[#FFF9F4]">
                <p className="font-serif italic text-lg leading-snug">
                  &ldquo;You are not powerless. Safety begins with knowing there is a quiet door open just for you.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Pathway */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3B2630] font-normal leading-tight">
              From silence to sovereign safety.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#766B68] font-light leading-relaxed">
              Navigating an exit plan or living safely under high surveillance requires deliberate, protected steps. Solace meets you wherever you are today.
            </p>

            <div className="space-y-6 pt-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-5 py-3 border-b border-[#E5DCD4]/70 last:border-b-0"
                >
                  <span className="font-serif text-xl font-medium text-[#3B2630] w-8 flex-shrink-0 pt-0.5">
                    {step.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-[#3B2630] font-medium">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-[#766B68] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/create-post"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3B2630] text-[#FFF9F4] font-sans text-sm font-semibold hover:bg-[#523744] transition-all"
              >
                <span>Create a Safety Plan</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
