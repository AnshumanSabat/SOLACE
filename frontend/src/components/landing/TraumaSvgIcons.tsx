import React from 'react';

// Custom, hand-crafted artistic SVGs for the 10 motifs of control and liberation
// Styled with theme colors: #3B2630 (Primary Text), #DEB3A5 (Blush stroke), #E5DCD4 (Divider)

export function BrokenPhoneSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Phone Body */}
      <rect x="18" y="8" width="28" height="48" rx="5" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      {/* Screen */}
      <rect x="22" y="14" width="20" height="34" rx="2" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.6" />
      {/* Speaker and Home */}
      <line x1="28" y1="11" x2="36" y2="11" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="51" r="1.5" fill={stroke} />
      {/* Shatter Crack lines across screen */}
      <path d="M22 28L31 34L26 40L38 46" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 34L42 26" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 40L23 45" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      {/* Cut-off signal slash */}
      <line x1="40" y1="11" x2="48" y2="19" stroke="#E2847A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CrackedMirrorSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Mirror Outer Oval Frame */}
      <ellipse cx="32" cy="30" rx="18" ry="22" stroke={stroke} strokeWidth="2" />
      <ellipse cx="32" cy="30" rx="15" ry="19" stroke={stroke} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
      {/* Handle / Pedestal */}
      <path d="M30 52L28 58H36L34 52" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Fractured Mirror Cracks radiating from center */}
      <path d="M32 15L30 25L38 31L32 44" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 25L20 28" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 31L44 26" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 25L24 19" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M38 31L43 38" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function BruisedArmSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Arm Silhouette Outline */}
      <path
        d="M20 10C21 22 23 34 22 46C22 50 25 54 29 55C33 56 37 54 39 49C42 41 43 28 44 10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Subtle Bruise Contours on forearm */}
      <path
        d="M26 28C28 26 33 27 35 29C37 32 36 36 33 37C29 38 27 34 26 28Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="1 1"
        fill="#DEB3A5"
        fillOpacity="0.35"
      />
      {/* Secondary Fingerprint Contours (Grip marks) */}
      <ellipse cx="30" cy="23" rx="2.5" ry="1.5" fill="#DEB3A5" fillOpacity="0.5" />
      <ellipse cx="35" cy="25" rx="2" ry="1.5" fill="#DEB3A5" fillOpacity="0.5" />
      <ellipse cx="28" cy="33" rx="2" ry="1.5" fill="#DEB3A5" fillOpacity="0.5" />
    </svg>
  );
}

export function TornClothingSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Garment / Shirt collar & sleeves */}
      <path d="M22 14L14 24L20 28L24 22" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 14L50 24L44 28L40 22" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 14C26 18 38 18 42 14" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      {/* Torso with shredded jagged tear down the middle */}
      <path d="M24 22V52" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M40 22V52" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      {/* Jagged tear line */}
      <path
        d="M32 20L28 26L34 32L29 38L35 44L30 52"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Frayed thread stitches */}
      <line x1="26" y1="29" x2="31" y2="30" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
      <line x1="33" y1="36" x2="38" y2="35" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
      <line x1="27" y1="42" x2="32" y2="43" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function BrokenChainSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Left Chain Link */}
      <path
        d="M14 36L22 44C25 47 30 47 33 44L35 42"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8 30L16 22C19 19 24 19 27 22L30 25"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Broken / Snapped Middle Link */}
      <path d="M24 38L27 35" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M37 25L40 22" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      {/* Right Chain Link flying free */}
      <path
        d="M39 29L47 21C50 18 55 18 58 21L59 22"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M45 35L53 43C56 46 61 46 64 43"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Impact Sparks of Freedom */}
      <path d="M32 28L30 26M35 34L37 36M28 32H25M39 31H42" stroke="#B8A8D4" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LockedDoorSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Door Frame */}
      <rect x="16" y="10" width="32" height="46" rx="2" stroke={stroke} strokeWidth="2" />
      {/* Inner Door Panels */}
      <rect x="20" y="14" width="10" height="16" rx="1" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />
      <rect x="34" y="14" width="10" height="16" rx="1" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />
      <rect x="20" y="34" width="10" height="18" rx="1" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />
      <rect x="34" y="34" width="10" height="18" rx="1" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />
      {/* Heavy Padlock on the latch */}
      <rect x="37" y="30" width="8" height="7" rx="1.5" stroke={stroke} strokeWidth="1.8" fill="#FFF9F4" />
      <path d="M39 30V27C39 25.5 40 24.5 41 24.5C42 24.5 43 25.5 43 27V30" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="41" cy="33.5" r="0.75" fill={stroke} />
    </svg>
  );
}

export function ShatteredGlassSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer Border Fragment */}
      <rect x="12" y="12" width="40" height="40" rx="3" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Center Impact Point */}
      <circle cx="32" cy="32" r="2.5" fill={stroke} />
      {/* Radial Fractures */}
      <path d="M32 32L18 16" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 32L46 14" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 32L50 36" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 32L42 48" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 32L22 48" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 32L14 34" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      {/* Cross Geometric Shards */}
      <polygon points="26,24 34,22 30,28" stroke={stroke} strokeWidth="1.2" fill="#F3DCD4" fillOpacity="0.4" />
      <polygon points="36,36 44,40 38,44" stroke={stroke} strokeWidth="1.2" fill="#F3DCD4" fillOpacity="0.4" />
      <polygon points="22,36 28,40 24,44" stroke={stroke} strokeWidth="1.2" fill="#F3DCD4" fillOpacity="0.4" />
    </svg>
  );
}

export function BandageSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Diagonal Strip 1 */}
      <rect
        x="12"
        y="26"
        width="40"
        height="12"
        rx="6"
        transform="rotate(-45 32 32)"
        stroke={stroke}
        strokeWidth="2"
        fill="#FFF9F4"
      />
      {/* Diagonal Strip 2 (Crossed) */}
      <rect
        x="12"
        y="26"
        width="40"
        height="12"
        rx="6"
        transform="rotate(45 32 32)"
        stroke={stroke}
        strokeWidth="2"
        fill="#FFF9F4"
        fillOpacity="0.85"
      />
      {/* Central Gauze Pad */}
      <rect
        x="27"
        y="27"
        width="10"
        height="10"
        rx="2"
        stroke={stroke}
        strokeWidth="1.2"
        fill="#E1E7D9"
        fillOpacity="0.5"
      />
      {/* Perforation holes */}
      <circle cx="29" cy="29" r="0.8" fill={stroke} />
      <circle cx="35" cy="29" r="0.8" fill={stroke} />
      <circle cx="29" cy="35" r="0.8" fill={stroke} />
      <circle cx="35" cy="35" r="0.8" fill={stroke} />
    </svg>
  );
}

export function TornPhotographSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Left Halved Photo */}
      <path
        d="M14 14H28L31 22L27 30L32 38L28 46L30 50H14C12.5 50 11 48.5 11 47V17C11 15.5 12.5 14 14 14Z"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="#FFF9F4"
      />
      {/* Right Halved Photo (Slightly displaced / separated) */}
      <path
        d="M36 14H50C51.5 14 53 15.5 53 17V47C53 48.5 51.5 50 50 50H34L32 46L36 38L31 30L35 22L32 14H36Z"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="#FFF9F4"
      />
      {/* Left Figure Silhouette */}
      <circle cx="20" cy="25" r="3" stroke={stroke} strokeWidth="1.2" />
      <path d="M15 38C15 33 25 33 25 38" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      {/* Right Figure Silhouette (Alienated) */}
      <circle cx="44" cy="25" r="3" stroke={stroke} strokeWidth="1.2" />
      <path d="M39 38C39 33 49 33 49 38" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function SilencedMouthSvg({ className = 'w-10 h-10', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Woman's Profile Silhouette (Gently outlined) */}
      <path
        d="M26 12C34 12 40 18 40 26C40 31 38 34 38 37C37 42 35 48 30 52"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M22 28C22 28 24 30 26 30" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      {/* Eye looking up in fear / seeking refuge */}
      <path d="M31 23C33 21 37 21 39 23" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="35" cy="24" rx="1.5" ry="1.5" fill={stroke} />
      {/* Dominant Hand Covering the Mouth (Firm suppression grip) */}
      <path
        d="M16 35H38C41 35 43 37 43 40C43 43 41 45 38 45H24"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="#F3DCD4"
        fillOpacity="0.4"
      />
      {/* Finger Separators */}
      <line x1="20" y1="38" x2="38" y2="38" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="41" x2="38" y2="41" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export const MOTIF_SVG_CONFIG = [
  { id: 'broken-phone', label: 'Broken Phone', sub: 'Communication Controlled', Svg: BrokenPhoneSvg, x: '8%', y: '16%' },
  { id: 'cracked-mirror', label: 'Cracked Mirror', sub: 'Damaged Self-Image', Svg: CrackedMirrorSvg, x: '88%', y: '14%' },
  { id: 'locked-door', label: 'Locked Door', sub: 'Feeling Trapped', Svg: LockedDoorSvg, x: '5%', y: '48%' },
  { id: 'silenced-mouth', label: 'Hand Over Mouth', sub: 'Silencing & Control', Svg: SilencedMouthSvg, x: '91%', y: '44%' },
  { id: 'shattered-glass', label: 'Shattered Glass', sub: 'Broken Safety', Svg: ShatteredGlassSvg, x: '12%', y: '78%' },
  { id: 'bruised-arm', label: 'Bruised Arm', sub: 'Physical Violence', Svg: BruisedArmSvg, x: '86%', y: '75%' },
  { id: 'torn-clothing', label: 'Torn Clothing', sub: 'Violent Incident', Svg: TornClothingSvg, x: '26%', y: '88%' },
  { id: 'torn-photo', label: 'Torn Photograph', sub: 'Damaged Relationship', Svg: TornPhotographSvg, x: '72%', y: '88%' },
  { id: 'broken-chain', label: 'Broken Chain', sub: 'Freedom from Abuse', Svg: BrokenChainSvg, x: '38%', y: '6%' },
  { id: 'bandage', label: 'Bandage', sub: 'Wounds & Recovery', Svg: BandageSvg, x: '62%', y: '6%' },
];
