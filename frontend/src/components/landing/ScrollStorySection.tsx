'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const companionUrl = 'https://ai-avatar-frontend-coral.vercel.app/';

const STORY_STAGES = [
  {
    id: 'stage-01',
    number: '01',
    title: 'When words are hard to find',
    quote: '“Sometimes, something feels wrong, but explaining it to someone feels impossible.”',
    detail: 'Unspoken weight can feel isolating and heavy. When confusion, pressure, or past experiences make it difficult to articulate what you are going through, you are not failing—you are carrying something that needs care.',
    imageSrc: '/images/story/stage-1.svg',
    imageAlt: 'Minimalist editorial vector illustration of a face reflecting quiet emotion',
    layout: 'img-left', // Left = Image, Right = Text
  },
  {
    id: 'stage-02',
    number: '02',
    title: 'You deserve to be heard',
    quote: '“Share your thoughts anonymously, understand confusing messages, and express yourself without fear of judgement.”',
    detail: 'A safe sanctuary begins with unconditional understanding. Here, your privacy is inviolable. You can explore your thoughts freely, make sense of confusing dynamic signals, and find clarity at your own pace.',
    imageSrc: '/images/story/stage-2.svg',
    imageAlt: 'Artistic surreal cut paper vector illustration of opening safe space',
    layout: 'img-right', // Left = Text, Right = Image
  },
  {
    id: 'stage-03',
    number: '03',
    title: 'Your next step, on your terms',
    quote: '“Find practical guidance, explore trusted support resources, and move forward at your own pace.”',
    detail: 'Empowerment comes from gentle, informed action. Access practical legal insights, covert support avenues, and verified emergency connections—always on your timeline, always under your complete control.',
    imageSrc: '/images/story/stage-3.svg',
    imageAlt: 'Minimalist editorial vector illustration of empowerment and clarity',
    layout: 'img-left', // Left = Image, Right = Text
  },
];

export default function ScrollStorySection() {
  return (
    <section
      className="relative w-full bg-[#F8F1EA] text-[#3B2630] py-16 md:py-24 lg:py-32 overflow-hidden selection:bg-[#F3DCD4] border-t-2 border-b-2 border-[#064E3B]/20"
      aria-label="A Woman's Journey Story"
    >
     
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 lg:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#064E3B]/15 pb-8">
          <div>
            <span className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-[#3F8E7C] font-semibold block mb-3">
              Editorial Scroll Story
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#064E3B] font-medium tracking-tight leading-[1.12]">
              The Path to Sanctuary
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-[#3B2630]/75 max-w-md mt-4 md:mt-0 font-normal">
            A three-part narrative on reclaiming your voice, navigating confusion, and stepping forward with complete autonomy.
          </p>
        </div>
      </div>

      {/* ── ALTERNATING ZIG-ZAG STORY STAGES ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-24 md:space-y-36 lg:space-y-44">
        {STORY_STAGES.map((stage, index) => {
          const isImgLeft = stage.layout === 'img-left';

          return (
            <article
              key={stage.id}
              id={stage.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* IMAGE COLUMN */}
              <motion.div
                className={`lg:col-span-6 ${
                  isImgLeft ? 'lg:order-1' : 'lg:order-2'
                } flex justify-center items-center`}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden p-4 md:p-6 flex items-center justify-center">
                  {/* Soft organic glow background behind SVG */}
                  <div className="absolute inset-0 bg-[#FFF9F4]/70 rounded-2xl blur-xl opacity-60 -z-10" />
                  
                  <Image
                    src={stage.imageSrc}
                    alt={stage.imageAlt}
                    width={700}
                    height={700}
                    priority={index === 0}
                    className="w-full h-full object-contain max-h-[460px] drop-shadow-sm transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </motion.div>

              {/* TEXT COLUMN */}
              <motion.div
                className={`lg:col-span-6 ${
                  isImgLeft ? 'lg:order-2' : 'lg:order-1'
                } flex flex-col justify-center`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Stage Number - Understated Typography */}
                <div className="mb-4">
                  <span className="font-serif text-sm tracking-[0.2em] uppercase text-[#3F8E7C] font-semibold">
                    {stage.number} — Stage
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#064E3B] font-medium leading-[1.16] tracking-tight mb-6">
                  {stage.title}
                </h3>

                {/* Quote */}
                <blockquote className="border-l-2 border-[#3F8E7C]/40 pl-6 my-4">
                  <p className="font-serif italic text-xl md:text-2xl text-[#3B2630]/90 font-normal leading-relaxed">
                    {stage.quote}
                  </p>
                </blockquote>

                {/* Detail */}
                <p className="font-sans text-base md:text-lg text-[#3B2630]/75 leading-relaxed mt-4 max-w-xl font-normal">
                  {stage.detail}
                </p>
              </motion.div>
            </article>
          );
        })}
      </div>

      {/* ── BOTTOM CTA LINK: TALK TO OUR AVATAR ── */}
      <div className="mt-24 md:mt-36 pt-16 border-t border-[#064E3B]/15 text-center max-w-4xl mx-auto px-6">
        <span className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-[#3F8E7C] font-semibold block mb-3">
          Ready to Express Yourself?
        </span>
        <h3 className="font-serif text-2xl md:text-4xl text-[#064E3B] font-medium mb-6">
          Begin an anonymous, supportive conversation in a safe space.
        </h3>
        <a
          href={companionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-serif text-lg md:text-xl text-[#064E3B] hover:text-[#3F8E7C] font-medium group transition-colors underline underline-offset-8 decoration-[#064E3B]/30 hover:decoration-[#3F8E7C]"
        >
          <span>Talk to our avatar</span>
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#3F8E7C]" />
        </a>
      </div>
    </section>
  );
}
