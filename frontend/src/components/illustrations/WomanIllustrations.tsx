import React from 'react';

// Editorial vector illustrations of women designed in the exact artistic language of the SOLACE brand:
// Soft layered organic shapes, flowing curves, transparent backgrounds, and the authentic SOLACE palette:
// #3B2630 (Plum), #F3DCD4 (Blush), #D9D0E8 (Lavender), #E1E7D9 (Sage), #FFF9F4 (Surface)

export function HeroSanctuaryWoman({ className = 'w-full h-auto max-w-lg' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial illustration of a woman in peaceful sanctuary, cradled by gentle crescent curves"
    >
      <defs>
        <linearGradient id="heroCrescentGrad" x1="120" y1="80" x2="520" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F3DCD4" />
          <stop offset="45%" stopColor="#D9D0E8" />
          <stop offset="100%" stopColor="#DEB3A5" />
        </linearGradient>

        <linearGradient id="heroFaceGrad" x1="260" y1="180" x2="420" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF9F4" />
          <stop offset="70%" stopColor="#F3DCD4" />
          <stop offset="100%" stopColor="#DEB3A5" />
        </linearGradient>

        <linearGradient id="heroHairDark" x1="220" y1="100" x2="360" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#523744" />
          <stop offset="50%" stopColor="#3B2630" />
          <stop offset="100%" stopColor="#25161E" />
        </linearGradient>

        <linearGradient id="heroHairMid" x1="180" y1="180" x2="340" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8C6374" />
          <stop offset="60%" stopColor="#523744" />
          <stop offset="100%" stopColor="#3B2630" />
        </linearGradient>

        <linearGradient id="heroPetalGlow" x1="140" y1="360" x2="300" y2="540" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D9D0E8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F3DCD4" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="heroSageLeaf" x1="380" y1="360" x2="540" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E1E7D9" />
          <stop offset="100%" stopColor="#C5D2B8" />
        </linearGradient>
      </defs>

      {/* Outer Ambient Crescent Halo */}
      <path
        d="M190 70C315 20 480 75 530 200C580 325 510 470 410 535C470 430 460 300 405 210C350 120 255 75 190 70Z"
        fill="url(#heroCrescentGrad)"
        fillOpacity="0.8"
      />

      {/* Gentle Backing Aura */}
      <circle cx="340" cy="300" r="180" fill="#FFF9F4" fillOpacity="0.45" />

      {/* Flowing Back Locks */}
      <path
        d="M230 110C290 85 370 115 390 190C400 230 380 270 360 310C330 370 320 440 330 500C290 470 270 410 270 350C270 290 290 240 280 190C275 160 250 130 230 110Z"
        fill="url(#heroHairDark)"
      />

      {/* Layered Hair Waves - Left Ribbons */}
      <path
        d="M170 260C165 340 220 410 280 470C250 420 230 360 235 300C240 250 270 210 270 160C250 180 200 210 170 260Z"
        fill="url(#heroHairMid)"
      />

      <path
        d="M140 330C150 420 220 490 290 530C260 490 235 430 230 370C225 320 245 280 235 240C205 265 165 290 140 330Z"
        fill="#DEB3A5"
        fillOpacity="0.75"
      />

      {/* Face & Elegant Neck Profile (Looking Upward with Hope) */}
      <path
        d="M360 175C365 185 375 200 395 210C420 222 430 230 425 245C420 260 395 270 390 285C385 300 395 325 385 350C375 375 350 410 350 450C345 480 350 510 360 535C335 520 315 485 315 440C315 390 335 345 345 300C350 270 340 250 345 220C350 195 355 185 360 175Z"
        fill="url(#heroFaceGrad)"
      />

      {/* Delicate Profile Details */}
      <path
        d="M380 225C388 230 398 235 410 238"
        stroke="#523744"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M375 255C382 258 392 260 400 260"
        stroke="#8C6374"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Foreground Graceful Hair Waves */}
      <path
        d="M330 130C360 150 370 190 355 230C340 270 320 310 320 360C320 410 350 460 380 500C330 475 295 430 295 370C295 310 320 265 325 220C330 180 310 155 330 130Z"
        fill="url(#heroHairDark)"
      />

      {/* Soft Blush Petal Swirl Embracing the Shoulder */}
      <path
        d="M280 430C340 390 410 420 460 480C420 520 350 535 290 515C250 500 230 460 280 430Z"
        fill="url(#heroPetalGlow)"
      />

      {/* Sage Healing Leaf Accenting Base */}
      <path
        d="M420 460C480 435 540 470 560 525C505 545 445 520 420 460Z"
        fill="url(#heroSageLeaf)"
        fillOpacity="0.85"
      />

      {/* Delicate Outlines and Flow Ribbons */}
      <path
        d="M210 160C260 140 330 160 345 220C360 280 325 335 325 395C325 450 360 495 400 525"
        stroke="#FFF9F4"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CompanionEmpathyWomen({ className = 'w-full h-auto max-w-md' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial illustration of two women in compassionate solidarity and trauma grounding"
    >
      <defs>
        <linearGradient id="compLavGrad" x1="100" y1="100" x2="420" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ECE7F4" />
          <stop offset="60%" stopColor="#D9D0E8" />
          <stop offset="100%" stopColor="#B9A8D4" />
        </linearGradient>

        <linearGradient id="compBlushGrad" x1="160" y1="140" x2="380" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAF0EC" />
          <stop offset="65%" stopColor="#F3DCD4" />
          <stop offset="100%" stopColor="#DEB3A5" />
        </linearGradient>
      </defs>

      {/* Gentle Lavender Background Aura */}
      <ellipse cx="270" cy="260" rx="210" ry="190" fill="url(#compLavGrad)" fillOpacity="0.45" />

      {/* Woman 1 (Comforted, Head Leaning Gently) */}
      <path
        d="M170 150C210 120 260 145 270 195C275 220 265 245 250 265C230 290 220 330 225 370C200 350 185 315 185 275C185 235 200 200 190 175C185 160 175 155 170 150Z"
        fill="#3B2630"
      />
      {/* Profile */}
      <path
        d="M245 190C255 198 265 210 265 225C265 240 250 250 245 265C240 280 245 305 240 330C225 310 220 275 225 240C230 215 238 200 245 190Z"
        fill="url(#compBlushGrad)"
      />

      {/* Woman 2 (The Companion Embracing with Gentle Hands) */}
      <path
        d="M330 130C380 110 430 140 435 195C440 240 415 280 395 320C370 370 365 420 370 470C330 445 315 395 315 345C315 295 340 250 335 205C330 175 315 150 330 130Z"
        fill="#523744"
      />
      {/* Embracing Arm & Hands Rested on Shoulder */}
      <path
        d="M380 270C345 275 300 290 260 320C240 335 225 350 205 355C190 358 175 345 180 330C190 305 220 285 260 265C305 245 355 250 380 270Z"
        fill="url(#compBlushGrad)"
      />

      {/* Flowing Lower Ribbon of Safety */}
      <path
        d="M160 360C220 340 300 355 360 410C315 445 240 455 180 430C150 415 140 380 160 360Z"
        fill="#D9D0E8"
        fillOpacity="0.75"
      />
    </svg>
  );
}

export function ShieldSecurityWoman({ className = 'w-full h-auto max-w-md' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial illustration of covert protection, safe communication, and digital shelter"
    >
      <defs>
        <linearGradient id="shieldBlushGrad" x1="120" y1="80" x2="420" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAF0EC" />
          <stop offset="50%" stopColor="#F3DCD4" />
          <stop offset="100%" stopColor="#DEB3A5" />
        </linearGradient>
      </defs>

      {/* Protective Organic Arch (Steganographic Shield) */}
      <path
        d="M150 140C240 80 350 80 430 140C460 240 440 350 360 430C290 480 220 450 160 400C110 320 110 220 150 140Z"
        fill="url(#shieldBlushGrad)"
        fillOpacity="0.45"
      />

      {/* Woman's Graceful Silhouette in Safe Interior */}
      <path
        d="M250 150C295 130 340 160 345 210C350 245 330 280 315 315C295 360 290 405 295 450C265 425 250 380 250 335C250 290 270 255 265 215C260 190 245 170 250 150Z"
        fill="#3B2630"
      />

      {/* Steganographic Flower / Radiance held in hands */}
      <path
        d="M210 310C240 285 275 300 295 330C275 360 235 365 205 345C195 335 195 320 210 310Z"
        fill="#F3DCD4"
      />
      <circle cx="250" cy="325" r="14" fill="#FFF9F4" />

      {/* Protective Botanical Leaf Wrapping Beneath */}
      <path
        d="M180 370C230 335 310 360 360 420C305 450 230 455 175 420C155 405 160 385 180 370Z"
        fill="#E1E7D9"
        fillOpacity="0.8"
      />
    </svg>
  );
}

export function LegalEmpowermentWoman({ className = 'w-full h-auto max-w-md' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Editorial illustration of legal confidence, constitutional rights, and calm sovereignty"
    >
      <defs>
        <linearGradient id="legalSageGrad" x1="120" y1="80" x2="420" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EFF3EB" />
          <stop offset="55%" stopColor="#E1E7D9" />
          <stop offset="100%" stopColor="#C2CEB5" />
        </linearGradient>
      </defs>

      {/* Sage Tint Backing of Grounding and Truth */}
      <ellipse cx="270" cy="250" rx="200" ry="180" fill="url(#legalSageGrad)" fillOpacity="0.45" />

      {/* Tall, Dignified Woman Standing in Certainty */}
      <path
        d="M260 120C305 105 345 130 355 175C360 210 345 240 335 275C320 320 315 370 320 420C290 395 280 355 280 315C280 275 295 240 290 205C285 180 270 160 260 120Z"
        fill="#3B2630"
      />

      {/* Profile with Calm, Clear Expression */}
      <path
        d="M320 160C330 168 340 180 340 195C340 210 325 220 320 235C315 250 320 275 315 300C300 280 295 245 300 210C305 185 312 170 320 160Z"
        fill="#FFF9F4"
      />

      {/* Balanced Scales / Laurel Leaf of Justice held serenely */}
      <path
        d="M210 260C260 235 320 250 355 295C325 325 260 330 215 305C195 290 195 275 210 260Z"
        fill="#E1E7D9"
      />
      <circle cx="280" cy="275" r="8" fill="#3B2630" />
      <line x1="280" y1="283" x2="280" y2="340" stroke="#3B2630" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
