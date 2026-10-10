'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const companionUrl = 'https://ai-avatar-frontend-coral.vercel.app/';

const mediaBg = 'bg-gradient-to-br from-[#E4DAF1] via-[#F2DDD0] to-[#F7C99A]';

const titleClip =
  'polygon(2.86% 0%, 97.14% 0%, 100% 4.8%, 100% 57.2%, 82.98% 100%, 2.86% 100%, 0% 95.2%, 0% 4.8%)';

const productClip =
  'polygon(27.77% 30.13%, 97% 1.3%, 100% 3.5%, 100% 96.5%, 96.76% 100%, 3.24% 100%, 1.28% 96.79%)';

export default function HeroSection() {
  return (
    <section
      className="relative w-full max-w-[120rem] xl:aspect-[1920/920] mx-auto bg-[#FFF9F4] p-3 sm:p-6 xl:p-0 overflow-hidden"
    >
      <svg aria-hidden="true" focusable="false" className="absolute h-0 w-0">
        <defs>
          <clipPath id="solace-media-clip" clipPathUnits="objectBoundingBox">
            <polygon points="0.3141,0 0.9871,0 1,0.0248 1,0.4923 0.8255,0.6443 0.7579,1 0.0129,1 0,0.9752 0,0.4964 0.0129,0.4717 0.2490,0.4717 0.3035,0.2641 0.3035,0.0248" />
          </clipPath>
        </defs>
      </svg>


      <div className="hidden xl:contents">
        <motion.div
          className="absolute left-[1.458%] top-[7%] z-[1] h-[91%] w-[97.083%] overflow-hidden bg-[#241A22]"
          style={{ clipPath: 'url(#solace-media-clip)' }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        >
          <video
            src="/gemini_generated_video_2b8403cf.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full absolute inset-0 z-10 object-cover"
          />
          <div className={`w-full h-full ${mediaBg}`} />
        </motion.div>

        <motion.div
          className="absolute left-[1.458%] top-[7%] z-[2] flex h-[39.5%] w-[28.5%] flex-col bg-[#FAF0DE] p-5 lg:p-6 xl:p-7 overflow-hidden"
          style={{ clipPath: titleClip }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        >
          {/* SVG background illustration */}
          <div className="pointer-events-none absolute bottom-0 right-0 h-[85%] w-[48%] select-none opacity-20">
            <Image
              src="/hero-woman.svg"
              alt=""
              fill
              sizes="20vw"
              className="object-contain object-bottom"
            />
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.45rem] 2xl:text-[2.75rem] leading-[1.1] tracking-tight text-[#3B2630] relative z-[1]">
            When silence is survival,{' '}
            <span className="italic">solace</span> is your shield.
          </h1>

          <div className="mt-auto flex flex-col gap-2 xl:gap-2.5 relative z-[1]">
            <p className="text-xs xl:text-[0.9rem] 2xl:text-[0.98rem] leading-[1.4] text-[#766B68] max-w-[95%]">
              A confidential sanctuary for women navigating coercion,
              surveillance, and domestic distress. Find discreet support,
              a compassionate AI companion, and legal guidance.
            </p>

            <div className="flex flex-wrap gap-2 xl:gap-2.5">
              <Link
                href="/create-post"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#3B2630] px-3.5 py-1.5 xl:px-4.5 xl:py-2 text-xs xl:text-sm font-semibold text-[#FFF9F4] transition-colors hover:bg-[#523744]"
              >
                Find Support
                <ArrowUpRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              </Link>

              <a
                href={companionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[#D9C8BC] px-3.5 py-1.5 xl:px-4.5 xl:py-2 text-xs xl:text-sm font-medium text-[#3B2630] transition-colors hover:bg-[#FFF9F4]"
              >
                Talk to AI
              </a>
            </div>
          </div>
        </motion.div>

       <motion.div
  className="absolute left-[75.853%] top-[53.44%] z-[2] h-[44.56%] w-[22.689%] overflow-hidden bg-[#E9DCD1]"
  style={{ clipPath: productClip }}
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
>
  <div className="pointer-events-none absolute bottom-0 right-0 h-[92%] w-[85%] select-none opacity-20">
    <Image
      src="/hero-shield.svg"
      alt=""
      fill
      sizes="20vw"
      className="object-contain object-bottom-right"
    />
  </div>

  <div className="absolute bottom-[6%] left-[27%] right-[4%] z-[1]">
    <p className="text-xs xl:text-[0.78rem] 2xl:text-[0.82rem] font-semibold uppercase tracking-[0.15em] text-[#766B68]">
      The protective suite
    </p>

    <h2 className="mt-1 text-balance font-serif text-base lg:text-lg xl:text-xl 2xl:text-[1.45rem] leading-[1.15] text-[#3B2630]">
      Support that puts you first.
    </h2>

    <ul className="mt-2 space-y-1 text-xs xl:text-[0.8rem] 2xl:text-[0.88rem] leading-[1.3] text-[#5D4D49]">
      <li className="flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-[#766B68] shrink-0" />
        Covert SOS & Steganography
      </li>
      <li className="flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-[#766B68] shrink-0" />
        Private AI Companion
      </li>
      <li className="flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-[#766B68] shrink-0" />
        Legal Rights & Guidance
      </li>
    </ul>

    <Link
      href="/create-post"
      className="mt-2.5 inline-flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-[#3B2630] hover:underline"
    >
      Explore support <ArrowUpRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
    </Link>
  </div>
</motion.div>
      </div>

      <div className="grid gap-4 xl:hidden">
        <div className="rounded-[24px] bg-[#FAF0DE] p-5 sm:p-7">
          <h1 className="font-serif text-3xl leading-tight text-[#3B2630] sm:text-4xl">
            When silence is survival,{' '}
            <span className="italic">solace</span> is your shield.
          </h1>

          <div className="mt-5 flex items-start gap-4">
            <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#E9DDF0] sm:h-32 sm:w-24">
              <Image
                src="/solace-avatar.png"
                alt="Solace companion"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-[#766B68]">
                A confidential sanctuary for women seeking discreet support,
                an AI companion, and legal guidance.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/create-post"
                  className="rounded-full bg-[#3B2630] px-4 py-2.5 text-sm font-semibold text-[#FFF9F4]"
                >
                  Find Support
                </Link>

                <a
                  href={companionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#D9C8BC] px-4 py-2.5 text-sm font-medium text-[#3B2630]"
                >
                  Talk to AI
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-[24px] sm:aspect-video overflow-hidden bg-[#241A22]">
          <video
            src="/gemini_generated_video_2b8403cf.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full absolute inset-0 z-10 object-cover"
          />
          <div className={`w-full h-full ${mediaBg}`} />
        </div>

        <div className="relative min-h-[250px] overflow-hidden rounded-[24px] bg-[#E5EBDD]">
          <Image
            src="/images/hope-calm.jpg"
            alt="A peaceful and hopeful space"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#211820]/70 to-transparent p-6 pt-16">
            <p className="font-serif text-xl text-white">
              A safe space to pause, breathe, and find your way forward.
            </p>
          </div>
        </div>

        <div className="rounded-[24px] bg-[#E9DCD1] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#766B68]">
            The protective suite
          </p>
          <h2 className="mt-2 font-serif text-2xl text-[#3B2630]">
            Support that puts you first.
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[#5D4D49]">
            <li>Covert SOS and image steganography</li>
            <li>Private AI companion</li>
            <li>Legal rights and guidance</li>
          </ul>
          <Link
            href="/create-post"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3B2630]"
          >
            Explore support <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}