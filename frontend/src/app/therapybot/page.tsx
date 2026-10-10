'use client';

import React from 'react';
import { useAvatar } from '@avatechai/avatars/react';
import { ShieldAlert, Heart } from 'lucide-react';

function Page() {
  const { avatarDisplay } = useAvatar({
    avatarId: 'af3f42c9-d1d7-4e14-bd81-bf2e05fd11a3',
    scale: 1,
  });

  const handleQuickExit = () => {
    try {
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.replace('https://www.google.com');
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-between p-4 sm:p-8 max-w-5xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="text-center max-w-xl mx-auto mb-4">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal tracking-tight">
          Trauma-Informed 3D Sanctuary
        </h1>
        <p className="font-sans text-sm text-[#766B68] font-light mt-1">
          Speak freely in complete confidentiality. Conversations evaporate instantly upon closing the tab.
        </p>
      </div>

      {/* 3D Avatar Display Container */}
      <div className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl bg-[#FFF9F4] border border-[#E5DCD4] flex items-center justify-center overflow-hidden shadow-sm">
        {avatarDisplay}
      </div>

      {/* Reassurance Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#766B68] font-light">
        <span className="flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#B9A8D4]" />
          <span>Non-judgmental emotional first-aid</span>
        </span>
        <button
          onClick={handleQuickExit}
          className="flex items-center gap-1 text-[#3B2630] font-medium hover:underline"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-[#DEB3A5]" />
          <span>Quick Exit (Esc)</span>
        </button>
      </div>
    </div>
  );
}

export default Page;
