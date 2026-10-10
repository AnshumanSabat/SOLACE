'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Scale, AlertCircle, X, ChevronRight, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';

interface LawItem {
  id: string;
  title: string;
  category: string;
  sectionTag: string;
  penaltyBadge: string;
  summary: string;
  fullLaw: string;
  keyProtections: string[];
  penalty: string;
  bgGradient: string;
  image?: string;
  accentColor: string;
}

const VIOLATION_LAWS: LawItem[] = [
  // Column 1
  {
    id: 'pwdva-2005',
    title: 'DOMESTIC VIOLENCE ACT',
    category: 'Protection from Domestic Abuse',
    sectionTag: 'PWDVA, 2005 (Sec 12–23)',
    penaltyBadge: 'Protection & Injunction Orders',
    summary: 'Shields women from physical, emotional, sexual, verbal, and economic abuse within shared domestic households.',
    fullLaw: 'The Protection of Women from Domestic Violence Act, 2005 (PWDVA)',
    keyProtections: [
      'Right to Reside: An aggrieved woman cannot be evicted or dispossessed from the shared household.',
      'Protection Orders (Sec 18): Court prohibits the abuser from committing or aiding any act of domestic violence.',
      'Monetary Relief & Maintenance (Sec 20): Covers medical expenses, loss of earnings, and monthly maintenance.',
      'Child Custody Orders (Sec 21): Temporary custody of children granted to the mother.'
    ],
    penalty: 'Breach of protection order is cognizable & non-bailable, punishable by up to 1 year imprisonment and fine.',
    bgGradient: 'from-[#3B2630] via-[#5C3345] to-[#2B1B24]',
    image: '/images/distress-window.jpg',
    accentColor: '#DEB3A5'
  },
  {
    id: 'dowry-498a',
    title: 'DOWRY CRUELTY & HARASSMENT',
    category: 'Marital Cruelty Penal Shield',
    sectionTag: 'Section 498A IPC / Sec 85 BNS',
    penaltyBadge: 'Non-Bailable • Up to 3 Yrs Jail',
    summary: 'Strict criminal law against any husband or in-laws subjecting a woman to physical or mental cruelty for dowry or coercion.',
    fullLaw: 'Section 498A Indian Penal Code (IPC) / Section 85 Bharatiya Nyaya Sanhita (BNS)',
    keyProtections: [
      'Immediate non-bailable FIR registration against abusive spouses and demanding relatives.',
      'Covers both physical abuse and willful mental conduct driving a woman to danger or distress.',
      'Protects against unlawful demands for property, valuable security, gold, or cash.'
    ],
    penalty: 'Cognizable, non-bailable imprisonment up to 3 years and mandatory judicial fine.',
    bgGradient: 'from-[#42222E] via-[#63283F] to-[#28151D]',
    image: '/images/distress-silhouette.jpg',
    accentColor: '#F3DCD4'
  },
  {
    id: 'posh-act',
    title: 'THE POSH ACT 2013',
    category: 'Workplace Safety & Dignity',
    sectionTag: 'POSH Act 2013 & Sec 354A',
    penaltyBadge: 'Mandatory ICC • Zero Retaliation',
    summary: 'Guarantees prevention, prohibition, and redressal against sexual harassment in all private and public workplaces.',
    fullLaw: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    keyProtections: [
      'Mandatory Internal Complaints Committee (ICC) in every organisation with 10+ employees.',
      'Zero Retaliation Guarantee: Victim is entitled to paid leave, transfer, and protection during enquiry.',
      'Strict confidentiality: Identity of the complainant cannot be disclosed to the public or press.'
    ],
    penalty: 'Employer license cancellation and fine; perpetrator faces termination, disciplinary action, and IPC/BNS prosecution.',
    bgGradient: 'from-[#232B3E] via-[#2F3D59] to-[#171E2D]',
    image: '/images/distress-nature-reach.jpg',
    accentColor: '#D9D0E8'
  },

  // Column 2
  {
    id: 'cyber-stalking',
    title: 'CYBER STALKING & VOYEURISM',
    category: 'Digital Violence Protection',
    sectionTag: 'Sec 354D IPC & Sec 66E IT Act',
    penaltyBadge: 'Non-Bailable on Repeat • 3 Yrs',
    summary: 'Criminalizes electronic monitoring, intrusive online stalking, unauthorized private photo captures, and non-consensual tracking.',
    fullLaw: 'Section 354D IPC / Sec 78 BNS & Section 66E Information Technology Act, 2000',
    keyProtections: [
      'Covers monitoring internet, social media, email, or digital communications without consent.',
      'Section 66E IT Act: Strict penalty for capturing, publishing, or transmitting images of private body areas.',
      'Immediate takedown orders enforceable with cybercrime cells and intermediary platforms.'
    ],
    penalty: 'First conviction: up to 3 years imprisonment + fine; Second conviction: up to 5 years + non-bailable.',
    bgGradient: 'from-[#1B2A32] via-[#29424F] to-[#121E24]',
    image: '/images/distress-overcast.jpg',
    accentColor: '#C2CEB5'
  },
  {
    id: 'deepfake-morphing',
    title: 'DEEPFAKES & MORPHED MEDIA',
    category: 'Non-Consensual Imagery',
    sectionTag: 'Sec 67 & 67A IT Act, 2000',
    penaltyBadge: 'Up to 5 Yrs Rigorous Imprisonment',
    summary: 'Rigorous penal laws forbidding publication, circulation, or generation of sexually explicit morphed pictures, videos, and deepfakes.',
    fullLaw: 'Sections 67 & 67A Information Technology Act & Sec 354C IPC (Voyeurism)',
    keyProtections: [
      'Criminalizes sharing morphed imagery, obscene AI generations, or intimate media without permission.',
      'Social media intermediaries must remove flagged intimate images within 24 hours of notification.',
      'Complainant identity strictly guarded throughout cyber investigation.'
    ],
    penalty: 'Non-bailable offense carrying 5 years imprisonment and up to ₹10 Lakhs fine on first conviction.',
    bgGradient: 'from-[#2D1B36] via-[#482855] to-[#1E1124]',
    image: '/images/distress-thought.jpg',
    accentColor: '#D9D0E8'
  },
  {
    id: 'outraging-modesty',
    title: 'OUTRAGING MODESTY & FORCE',
    category: 'Assault & Criminal Force',
    sectionTag: 'Section 354 IPC / Sec 74 BNS',
    penaltyBadge: 'Cognizable & Non-Bailable • 1–5 Yrs',
    summary: 'Punishes using criminal force or assault against any woman with the intention or likelihood to outrage her modesty.',
    fullLaw: 'Section 354 IPC / Section 74 Bharatiya Nyaya Sanhita (BNS)',
    keyProtections: [
      'Encompasses physical molestation, unwelcome physical touch, and intrusive sexual gestures.',
      'Non-bailable offense: Police are mandated to arrest without warrant upon lodging of FIR.',
      'Statement recorded by a woman magistrate with privacy provisions.'
    ],
    penalty: 'Mandatory imprisonment not less than 1 year, extendable up to 5 years, along with judicial fine.',
    bgGradient: 'from-[#3A2222] via-[#5B3030] to-[#251515]',
    image: '/images/hope-calm.jpg',
    accentColor: '#DEB3A5'
  },

  // Column 3
  {
    id: 'zero-fir',
    title: 'ZERO FIR MANDATE',
    category: 'Unrestricted Police Registration',
    sectionTag: 'CrPC / BNSS Binding Directive',
    penaltyBadge: 'File at Any Station Anywhere',
    summary: 'A woman has the absolute legal right to lodge an FIR at ANY police station in the country, irrespective of jurisdiction limits.',
    fullLaw: 'Ministry of Home Affairs & Supreme Court Zero FIR Mandate',
    keyProtections: [
      'Police station CANNOT reject a crime complaint citing jurisdictional boundaries.',
      'Duty officer must record the FIR as "Zero FIR" and immediately initiate medical aid/investigation.',
      'FIR is later transferred to the concerned jurisdictional police station automatically.'
    ],
    penalty: 'Police officer refusing to register FIR under Sec 166A IPC faces up to 2 years imprisonment.',
    bgGradient: 'from-[#192E38] via-[#244757] to-[#111F26]',
    image: '/images/silenced-portrait.jpg',
    accentColor: '#FAF0EC'
  },
  {
    id: 'rape-laws',
    title: 'SEXUAL ASSAULT & RAPE LAWS',
    category: 'Stringent Criminal Offense',
    sectionTag: 'Sec 376 IPC / Sec 64 BNS',
    penaltyBadge: 'Min 10 Yrs to Life Imprisonment',
    summary: 'Comprehensive criminal code penalizing non-consensual sexual acts, aggravated assault, and abuse of authority.',
    fullLaw: 'Section 376 IPC / Section 64 Bharatiya Nyaya Sanhita (BNS)',
    keyProtections: [
      'Mandatory free emergency medical examination and forensic documentation within 24 hours.',
      'Statement must be recorded by a woman police officer or judicial magistrate.',
      'In-camera court trial to safeguard confidentiality and prevent revictimization.'
    ],
    penalty: 'Minimum 10 years rigorous imprisonment up to natural life imprisonment or capital penalty in aggravated cases.',
    bgGradient: 'from-[#361E28] via-[#582A3E] to-[#231219]',
    image: '/images/distress-window.jpg',
    accentColor: '#F3DCD4'
  },
  {
    id: 'pocso-act',
    title: 'THE POCSO ACT 2012',
    category: 'Protection of Minor Girls & Children',
    sectionTag: 'POCSO Act, 2012',
    penaltyBadge: 'Special Fast-Track Courts',
    summary: 'Gender-neutral and stringent statutory framework shielding minors under 18 from sexual assault, harassment, and exploitation.',
    fullLaw: 'Protection of Children from Sexual Offences (POCSO) Act, 2012',
    keyProtections: [
      'Child-friendly investigation: Police cannot wear uniforms during questioning of the child.',
      'Mandatory reporting: Failure to report child sexual abuse by any person is a punishable crime.',
      'Speedy trial completion mandated within 1 year from the date of taking cognizance.'
    ],
    penalty: 'Rigorous imprisonment ranging from 3 years to Life Imprisonment and capital punishment for aggravated penetrative assault.',
    bgGradient: 'from-[#2C243B] via-[#43355C] to-[#1C1627]',
    image: '/images/distress-thought.jpg',
    accentColor: '#D9D0E8'
  },

  // Column 4
  {
    id: 'night-arrest',
    title: 'NIGHT ARREST IMMUNITY',
    category: 'Arrest & Procedural Dignity',
    sectionTag: 'Section 46(4) CrPC / BNSS',
    penaltyBadge: 'No Arrest Between Sunset & Sunrise',
    summary: 'Except in exceptional circumstances with prior judicial magistrate approval, no woman can be arrested after sunset and before sunrise.',
    fullLaw: 'Section 46(4) Code of Criminal Procedure (CrPC)',
    keyProtections: [
      'A female police officer must be present during any detention, inquiry, or arrest of a woman.',
      'Woman can only be searched by another woman with strict regard to decency.',
      'Medical examinations must be performed strictly by or under the supervision of a female medical practitioner.'
    ],
    penalty: 'Arrests made in violation are illegal, rendering officers subject to departmental inquiry and contempt.',
    bgGradient: 'from-[#2A2B33] via-[#3E404E] to-[#1A1A21]',
    image: '/images/distress-overcast.jpg',
    accentColor: '#EFF3EB'
  },
  {
    id: 'acid-attack',
    title: 'ACID ATTACK PROHIBITION',
    category: 'Heinous Grievous Hurt',
    sectionTag: 'Sec 326A & 326B IPC',
    penaltyBadge: 'Min 10 Yrs to Life Imprisonment',
    summary: 'Zero-tolerance criminal statute strictly punishing acid throwing or attempted acid attacks causing burns, disfigurement, or disability.',
    fullLaw: 'Sections 326A and 326B IPC / Sections 124(1) & 124(2) BNS',
    keyProtections: [
      'Mandatory free emergency medical treatment across all private and government hospitals (Sec 357C CrPC).',
      'Immediate victim compensation scheme under state legal services funds.',
      'Strict licensing restrictions on over-the-counter sale of corrosive acids.'
    ],
    penalty: 'Mandatory minimum 10 years rigorous imprisonment, extendable to life imprisonment + fine paid to victim.',
    bgGradient: 'from-[#42211C] via-[#663229] to-[#2B1411]',
    image: '/images/distress-silhouette.jpg',
    accentColor: '#DEB3A5'
  },
  {
    id: 'anonymity-right',
    title: 'RIGHT TO ANONYMITY',
    category: 'Privacy & Identity Shield',
    sectionTag: 'Section 228A IPC / Sec 72 BNS',
    penaltyBadge: 'Strict Media & Identity Embargo',
    summary: 'Strict prohibition on publishing or revealing the name, photo, address, or identity of any victim of sexual assault or trauma.',
    fullLaw: 'Section 228A Indian Penal Code / Section 72 Bharatiya Nyaya Sanhita (BNS)',
    keyProtections: [
      'Applies to newspapers, digital media, social networks, and official court documents.',
      'Protects dignity, preventing social stigmatization and harassment of the survivor.',
      'All trials in sensitive offenses are mandatorily conducted behind closed doors (in-camera).'
    ],
    penalty: 'Up to 2 years imprisonment and mandatory fine for any individual, media house, or publication violating anonymity.',
    bgGradient: 'from-[#1E272C] via-[#2F3F48] to-[#151D21]',
    image: '/images/silenced-portrait.jpg',
    accentColor: '#C2CEB5'
  },

  // Column 5
  {
    id: 'free-legal-aid',
    title: 'FREE LEGAL AID COUNSEL',
    category: 'Constitutional Defense Right',
    sectionTag: 'Article 39A & NALSA Act, 1987',
    penaltyBadge: '100% Free Legal Representation',
    summary: 'Every woman in India is unconditionally entitled to free legal counsel and court representation, regardless of financial income.',
    fullLaw: 'Section 12(c) Legal Services Authorities Act, 1987 & Article 39A Constitution of India',
    keyProtections: [
      'Unconditional eligibility: Women do not need to prove poverty to receive free state legal representation.',
      'Covers lawyer fees, drafting charges, court documentation, and certified copies.',
      'Available through National, State, and District Legal Services Authorities (NALSA / DLSA).'
    ],
    penalty: 'Denial of state legal services can be directly appealed to the High Court / Supreme Court.',
    bgGradient: 'from-[#23332A] via-[#354D3F] to-[#17231C]',
    image: '/images/hope-calm.jpg',
    accentColor: '#C2CEB5'
  },
  {
    id: 'indecent-rep',
    title: 'INDECENT PORTRAYAL BAN',
    category: 'Obscenity & Commercial Dignity',
    sectionTag: 'IRWA Act, 1986',
    penaltyBadge: 'Bans Obscene Representation',
    summary: 'Prohibits derogatory, salacious, or indecent representation of women through advertisements, media, publications, or hoardings.',
    fullLaw: 'The Indecent Representation of Women (Prohibition) Act, 1986',
    keyProtections: [
      'Bans advertising that depicts women in an offensive or derogatory manner injurious to public morality.',
      'Authorizes seizure and confiscation of unlawful promotional materials and publications.',
      'Applies to print, electronic broadcasting, digital media, and public display boards.'
    ],
    penalty: 'First offense: 2 years imprisonment and ₹2,000 fine; subsequent offense: up to 5 years and ₹1 Lakh fine.',
    bgGradient: 'from-[#352538] via-[#523757] to-[#221624]',
    image: '/images/distress-thought.jpg',
    accentColor: '#D9D0E8'
  },
  {
    id: 'maternity-act',
    title: 'MATERNITY BENEFIT ACT',
    category: 'Reproductive & Employment Rights',
    sectionTag: 'Maternity Benefit Act, 1961',
    penaltyBadge: '26 Weeks Paid Leave & Job Shield',
    summary: 'Protects pregnant women and new mothers from dismissal and mandates paid leave, medical bonus, and creche amenities.',
    fullLaw: 'Maternity Benefit (Amendment) Act, 2017',
    keyProtections: [
      '26 weeks fully paid maternity leave for up to two surviving children.',
      'Illegal to terminate or serve dismissal notice to a woman during her maternity leave period.',
      'Creche facilities mandatory for all establishments employing 50 or more workers.'
    ],
    penalty: 'Imprisonment up to 1 year and forfeiture of company subsidies for non-compliance.',
    bgGradient: 'from-[#382622] via-[#593932] to-[#241714]',
    image: '/images/distress-nature-reach.jpg',
    accentColor: '#DEB3A5'
  },

  // Column 6
  {
    id: 'criminal-intimidation',
    title: 'THREATS & INTIMIDATION',
    category: 'Psychological & Coercive Threats',
    sectionTag: 'Section 506 IPC / Sec 351 BNS',
    penaltyBadge: 'Up to 7 Yrs Imprisonment',
    summary: 'Penalizes threatening a woman with injury to her person, reputation, property, or family to force compliance or silence.',
    fullLaw: 'Section 506 Indian Penal Code / Section 351 Bharatiya Nyaya Sanhita (BNS)',
    keyProtections: [
      'Protects against death threats, blackmail, acid threats, or threats to leak private photos.',
      'Can be filed immediately alongside domestic violence or stalking complaints.',
      'Enables emergency police protection orders when imminent life threat exists.'
    ],
    penalty: 'Up to 7 years rigorous imprisonment or fine when the threat is to cause death or grievous injury.',
    bgGradient: 'from-[#332029] via-[#543041] to-[#22131A]',
    image: '/images/distress-silhouette.jpg',
    accentColor: '#F3DCD4'
  },
  {
    id: 'wrongful-confinement',
    title: 'WRONGFUL CONFINEMENT',
    category: 'Spatial Restraint & Imprisonment',
    sectionTag: 'Section 342 IPC / Sec 127 BNS',
    penaltyBadge: 'Punishable Illegal Confinement',
    summary: 'Prohibits locking a woman in rooms, seizing her phones/keys, or forcibly preventing her from leaving home or workplace.',
    fullLaw: 'Sections 340 & 342 IPC / Section 127 Bharatiya Nyaya Sanhita (BNS)',
    keyProtections: [
      'Recognizes locked rooms and physical containment as serious criminal detention.',
      'Magistrate can issue search warrants for recovery of wrongfully confined persons under Sec 97 CrPC.',
      'Police can execute immediate rescue operations based on third-party distress reports.'
    ],
    penalty: 'Imprisonment up to 1 year and fine; extendable to 3 years for confinement lasting over 3 days.',
    bgGradient: 'from-[#222B30] via-[#33424A] to-[#151C20]',
    image: '/images/distress-window.jpg',
    accentColor: '#EFF3EB'
  },
  {
    id: 'equal-remuneration',
    title: 'EQUAL REMUNERATION ACT',
    category: 'Economic Equality & Non-Bias',
    sectionTag: 'Equal Remuneration Act, 1976',
    penaltyBadge: 'Equal Pay for Equal Work',
    summary: 'Mandates equal payment for women workers performing the same work or work of similar nature without gender disparity.',
    fullLaw: 'Equal Remuneration Act, 1976 & Code on Wages, 2019',
    keyProtections: [
      'Zero discrimination in hiring, promotions, training, or wage disbursement based on gender.',
      'Covers organized, unorganized, factory, and corporate sector jobs.',
      'Prohibits lowering male wages to equalize disparity.'
    ],
    penalty: 'Fines and penal prosecution for repeated corporate non-compliance.',
    bgGradient: 'from-[#2C2E24] via-[#434735] to-[#1C1D16]',
    image: '/images/hope-calm.jpg',
    accentColor: '#C2CEB5'
  }
];

export default function WomenRightsSection() {
  const [selectedLaw, setSelectedLaw] = useState<LawItem | null>(null);

   // Group into 6 columns with 2 cards each (bottom 3rd row removed)
  const col1 = VIOLATION_LAWS.slice(0, 2);
  const col2 = VIOLATION_LAWS.slice(2, 4);
  const col3 = VIOLATION_LAWS.slice(4, 6);
  const col4 = VIOLATION_LAWS.slice(6, 8);
  const col5 = VIOLATION_LAWS.slice(8, 10);
  const col6 = VIOLATION_LAWS.slice(10, 12);

  const columns = [col1, col2, col3, col4, col5, col6];

  return (
    <section id="legal-rights" className="relative w-full bg-[#F8F1EA] pt-8 pb-12 sm:pt-10 sm:pb-16 overflow-hidden border-t border-[#E5DCD4]/60">
      
      {/* Header: Two-column — text left, SVG right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Text */}
          <div className="space-y-3">
          
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3B2630] font-normal tracking-tight leading-snug">
              The Law Is Your<br />
              <span className="italic text-[#766B68]">Unbreakable Shield.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#766B68] font-light max-w-lg leading-relaxed">
              Every violation against a woman is documented, punishable, and backed by state-enforced protection. Tap any card below to review specific sections, penalties, and immediate remedies.
            </p>
            <div className="pt-1">
              <Link
                href="/lawbot"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B2630] text-[#FFF9F4] text-xs sm:text-sm font-medium hover:bg-[#5C3345] transition-all shadow-sm"
              >
                <Scale className="w-3.5 h-3.5 text-[#F3DCD4]" />
                <span>Ask Solace LawBot</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Editorial SVG Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Soft blush glow behind illustration */}
              <div
                className="absolute inset-0 rounded-full blur-3xl scale-110"
                style={{ background: 'radial-gradient(circle, rgba(243,220,212,0.55) 0%, rgba(250,240,236,0.3) 50%, transparent 80%)' }}
              />
              <Image
                src="/images/editorial-woman.svg"
                alt="Editorial illustration of a woman — dignity and strength"
                width={480}
                height={560}
                className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* TILTED VERTICAL SCROLL CAROUSEL */}
      <div className="relative w-full overflow-hidden select-none" style={{ height: '520px' }}>
        
        {/* Top & Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#F8F1EA] via-[#F8F1EA]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#F8F1EA] via-[#F8F1EA]/80 to-transparent z-20" />

        {/* Tilted outer wrapper */}
        <div className="absolute inset-0 -rotate-6 scale-110 flex items-start">
          <div className="grid grid-cols-6 gap-3 sm:gap-4 px-2 w-full">
            {columns.map((column, colIdx) => {
              const isDown = colIdx % 2 === 1;
              // duplicate for seamless loop
              const loopedCards = [...column, ...column];
              return (
                <div
                  key={colIdx}
                  className="overflow-hidden"
                  style={{ height: '900px' }}
                >
                  <div
                    className={isDown ? 'animate-scroll-down' : 'animate-scroll-up'}
                    style={{ willChange: 'transform' }}
                  >
                    <div className="flex flex-col gap-3 sm:gap-4">
                      {loopedCards.map((law, cardIdx) => (
                        <div
                          key={`${law.id}-${cardIdx}`}
                          onClick={() => setSelectedLaw(law)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedLaw(law);
                            }
                          }}
                          className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 flex-shrink-0"
                          style={{ aspectRatio: '3/4', width: '100%' }}
                        >
                          {/* Background */}
                          {law.image ? (
                            <div className="absolute inset-0 z-0">
                              <Image
                                src={law.image}
                                alt={law.title}
                                fill
                                sizes="20vw"
                                className="object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-t ${law.bgGradient} opacity-40 mix-blend-multiply`} />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </div>
                          ) : (
                            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${law.bgGradient}`}>
                              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/60" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                            </div>
                          )}

                          {/* Card Content */}
                          <div className="relative z-10 h-full p-3 sm:p-4 flex flex-col justify-between text-white">
                            <span className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase text-white/60">
                              {law.category}
                            </span>

                            <div className="text-center px-1">
                              <h4 className="font-serif text-sm sm:text-base lg:text-lg font-semibold tracking-tight text-white drop-shadow-md leading-tight group-hover:text-[#F3DCD4] transition-colors">
                                {law.title}
                              </h4>
                            </div>

                            <div className="mx-auto w-fit max-w-full px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-center truncate">
                              <span className="text-[8px] sm:text-[10px] font-medium text-white/90">
                                {law.sectionTag}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

   

      {/* 4. Interactive Law Details Modal */}
      {selectedLaw && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedLaw(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FFF9F4] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5DCD4] max-h-[90vh] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLaw(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F8F1EA] text-[#766B68] hover:text-[#3B2630] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
            
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2630] font-medium leading-snug">
                {selectedLaw.fullLaw}
              </h3>
              <p className="text-sm text-[#766B68] font-light">
                {selectedLaw.summary}
              </p>
            </div>

            {/* Key Rights and Protections */}
            <div className="mt-6 pt-6 border-t border-[#E5DCD4] space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#3B2630]">
                Key Statutory Protections
              </h4>
              <ul className="space-y-2.5">
                {selectedLaw.keyProtections.map((protection, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#766B68] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DEB3A5] mt-2 shrink-0" />
                    <span>{protection}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Penal Consequence */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF0EC] border border-[#DEB3A5]/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#3B2630] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3B2630] block">
                  Legal Consequence & Penalty
                </span>
                <p className="text-xs sm:text-sm text-[#3B2630] mt-1 font-medium">
                  {selectedLaw.penalty}
                </p>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5DCD4]">
              <span className="text-xs text-[#766B68]">
                Confidential legal consultation is free under Indian Law.
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedLaw(null)}
                  className="px-4 py-2 text-xs sm:text-sm font-medium text-[#766B68] hover:text-[#3B2630] transition-colors"
                >
                  Dismiss
                </button>
                <Link
                  href="/lawbot"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#3B2630] text-[#FFF9F4] text-xs sm:text-sm font-medium hover:bg-[#5C3345] transition-all shadow-sm"
                >
                  <span>Ask Solace LawBot</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
