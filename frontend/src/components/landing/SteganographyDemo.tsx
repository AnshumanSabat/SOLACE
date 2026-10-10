'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function SteganographyDemo() {
  const [activeTab, setActiveTab] = useState<'survivor' | 'authority'>('survivor');

  return (
    <section className="relative py-24 md:py-36 bg-[#F8F1EA] border-t border-[#E5DCD4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal leading-tight mb-4">
            How covert steganography protects in plain sight.
          </h2>
          <p className="font-sans text-base text-[#766B68] font-light leading-relaxed max-w-xl mx-auto">
            Compare the perspective of a monitored phone gallery against the verified authority decoder.
          </p>

          {/* Toggle buttons */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#FFF9F4] border border-[#E5DCD4] mt-8">
            <button
              onClick={() => setActiveTab('survivor')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-all ${
                activeTab === 'survivor'
                  ? 'bg-[#3B2630] text-[#FFF9F4]'
                  : 'text-[#766B68] hover:text-[#3B2630]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Monitored View</span>
            </button>
            <button
              onClick={() => setActiveTab('authority')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-all ${
                activeTab === 'authority'
                  ? 'bg-[#3B2630] text-[#FFF9F4]'
                  : 'text-[#766B68] hover:text-[#3B2630]'
              }`}
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Authority Decoder</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Pane */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-4xl mx-auto bg-[#FFF9F4] rounded-3xl p-8 sm:p-12 border border-[#E5DCD4]"
        >
          {activeTab === 'survivor' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-[#E5DCD4] bg-[#F8F1EA]">
                <Image
                  src="/images/distress-nature-reach.jpg"
                  alt="A benign image of sunlight filtering through gentle foliage"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <h3 className="font-serif text-2xl text-[#3B2630] font-normal">
                  Innocent and undetectable to snooping eyes
                </h3>
                <p className="text-sm text-[#766B68] font-light leading-relaxed">
                  To any abuser or bystander reviewing camera rolls, shared media, or social posts, this image appears as nothing more than a peaceful nature photograph.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-[#766B68]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3B2630] flex-shrink-0" />
                    <span>No conspicuous emergency application icons on device</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3B2630] flex-shrink-0" />
                    <span>Standard EXIF metadata sanitized of distress markers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3B2630] flex-shrink-0" />
                    <span>Can be shared over benign public social hashtags</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 bg-[#FAF0EC] rounded-2xl p-6 border border-[#F3DCD4] space-y-4">
                <div className="font-mono text-xs text-[#3B2630] space-y-2 bg-[#FFF9F4] p-4 rounded-xl border border-[#E5DCD4]">
                  <p className="text-[11px] text-[#766B68]">
                    STATUS: URGENT_DISPATCH_REQUIRED
                  </p>
                  <p>
                    <strong className="text-[#3B2630]">INCIDENT:</strong> Confined indoors, abusive partner blocking exits.
                  </p>
                  <p>
                    <strong className="text-[#3B2630]">GPS:</strong> 37.7749° N, 122.4194° W
                  </p>
                  <p>
                    <strong className="text-[#3B2630]">RISK SCORE:</strong> 0.89 (High Escalation)
                  </p>
                </div>
                <p className="text-[11px] text-[#766B68] font-sans">
                  Vector query matched 2 prior domestic incident reports in immediate jurisdiction.
                </p>
              </div>

              <div className="md:col-span-7 space-y-4">
                <h3 className="font-serif text-2xl text-[#3B2630] font-normal">
                  Decrypted into structured emergency intelligence
                </h3>
                <p className="text-sm text-[#766B68] font-light leading-relaxed">
                  When the image enters designated monitoring endpoints, the reverse steganographic pipeline automatically extracts the binary payload, decrypts the Gemini-structured situation report, and alerts designated emergency responders.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-[#766B68]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3B2630] flex-shrink-0" />
                    <span>Instant priority classification based on extracted keywords</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3B2630] flex-shrink-0" />
                    <span>Repeat offender vector similarity lookup via MongoDB Atlas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3B2630] flex-shrink-0" />
                    <span>Discreet authority alert without victim device callback ring</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
