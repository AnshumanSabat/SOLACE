'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { InputForm } from '@/components/InputForm';
import Share from '@/components/Share';
import { useClerk } from '@clerk/nextjs';
import HorizontalLinearStepper from '@/components/MultiStep';
import ImageGen from '@/components/ImageGen';
import { ShieldSecurityWoman } from '@/components/illustrations/WomanIllustrations';

function Page() {
  const [resImage, setResImage] = useState<string | null>(null);
  const [resText, setText] = useState<string | null>(null);
  const [resTextGemma, setTextGemma] = useState<string | null>(null);
  const { user } = useClerk();
  const [activeStep, setActiveStep] = useState(0);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    if (resText) {
      setActiveStep(1);
    }
  }, [resText, resTextGemma]);

  useEffect(() => {
    if (resImage) {
      setActiveStep(2);
    }
  }, [resImage]);

  useEffect(() => {
    if (shared) {
      setActiveStep(4);
    }
  }, [shared]);

  const stepContent = [
    <InputForm key="step1" setText={setText} setTextGemma={setTextGemma} />,
    <ImageGen
      key="step2"
      text={resText || ''}
      setResImage={setResImage}
      textGemma={resTextGemma || ''}
    />,
    <Share
      key="step3"
      imageURL={resImage || ''}
      setShared={setShared}
      resText={resText || ''}
    />,
  ];

  // EMPATHETIC ONBOARDING / SIGN-IN SCREEN
  if (!user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-lg mx-auto text-center">
        <div className="w-40 h-40 mb-4 flex items-center justify-center">
          <ShieldSecurityWoman className="w-full h-auto drop-shadow-sm select-none" />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal tracking-tight mb-3">
          Confidential SOS Studio
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#766B68] font-light leading-relaxed mb-8">
          To protect the integrity of covert dispatch reports and ensure emergency data remains encrypted under your control, please enter your secure sanctuary session.
        </p>

        <Link
          href="/sign-in"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3B2630] text-[#FFF9F4] font-sans text-sm font-semibold tracking-wide hover:bg-[#523744] transition-all"
        >
          Sign In to Sanctuary
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-8 flex flex-col">
      <div className="mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#3B2630] font-normal tracking-tight">
          Covert SOS Steganography Studio
        </h1>
        <p className="font-sans text-sm text-[#766B68] font-light mt-1">
          Compose your distress situation. Our intelligence engine will structure the coordinates and encode the payload imperceptibly into an everyday photograph.
        </p>
      </div>

      <div className="bg-[#FFF9F4] rounded-3xl border border-[#E5DCD4] p-4 sm:p-8">
        <HorizontalLinearStepper
          activeStep={activeStep}
          stepContent={stepContent}
        />
      </div>
    </div>
  );
}

export default Page;
