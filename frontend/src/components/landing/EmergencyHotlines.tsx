'use client';

import React from 'react';
import { PhoneCall, MessageSquare } from 'lucide-react';

const hotlines = [
  {
    region: 'United States & Canada',
    name: 'National Domestic Violence Hotline',
    phone: '1-800-799-SAFE (7233)',
    text: 'Text "START" to 88788',
    hours: '24/7 &bull; Free &bull; Confidential',
  },
  {
    region: 'India',
    name: 'National Commission for Women (NCW)',
    phone: '7827170170 / 1091 (Women Helpline)',
    text: 'WhatsApp: 7217735372',
    hours: '24/7 National Emergency Hotline',
  },
  {
    region: 'United Kingdom',
    name: 'National Freephone Helpline (Refuge)',
    phone: '0808 2000 247',
    text: 'Online confidential chat available',
    hours: '24/7 &bull; Completely free to call',
  },
  {
    region: 'International & Global',
    name: 'Crisis Text Line & Global Hotlines',
    phone: 'Dial 112 (EU) or 911 (US/CAN)',
    text: 'Text "HOME" to 741741',
    hours: 'Global Crisis Support Network',
  },
];

export default function EmergencyHotlines() {
  return (
    <section id="emergency" className="relative py-20 md:py-28 bg-[#FFF9F4] border-t border-[#E5DCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#3B2630] font-normal leading-tight">
            Immediate danger resources
          </h2>
          <p className="font-sans text-sm text-[#766B68] font-light mt-2">
            If you can safely access a telephone, these verified services operate around the clock with trained crisis counselors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotlines.map((item) => (
            <div
              key={item.region}
              className="p-6 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4] flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-xs font-sans text-[#766B68] font-medium block mb-1">
                  {item.region}
                </span>
                <h3 className="font-serif text-base text-[#3B2630] font-medium leading-snug">
                  {item.name}
                </h3>
              </div>

              <div className="space-y-2 pt-3 border-t border-[#E5DCD4]/70">
                <div className="flex items-center gap-2 text-xs text-[#3B2630]">
                  <PhoneCall className="w-3.5 h-3.5 text-[#766B68] flex-shrink-0" />
                  <span className="font-sans font-medium">{item.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#766B68]">
                  <MessageSquare className="w-3.5 h-3.5 text-[#766B68] flex-shrink-0" />
                  <span className="font-sans">{item.text}</span>
                </div>
              </div>

              <div className="text-[11px] text-[#766B68] font-light">
                <span dangerouslySetInnerHTML={{ __html: item.hours }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
