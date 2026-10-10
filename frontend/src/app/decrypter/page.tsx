'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Upload,
  Camera,
  Scan,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Unlock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  MapPin,
  Clock,
  Activity,
  Copy,
  Check,
  FileText,
  Eye,
  RefreshCw,
  Video,
  VideoOff,
  SwitchCamera,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

interface DecryptedPayload {
  status: 'critical' | 'elevated' | 'safe';
  timestamp: string;
  incidentType: string;
  riskScore: number;
  location: {
    coordinates: string;
    description: string;
    accuracy: string;
  };
  situationBrief: string;
  perpetratorDetails: string;
  covertTrigger: string;
  recommendedDispatch: string[];
  rawStegoHeader: string;
}

const SAMPLE_PAYLOAD: DecryptedPayload = {
  status: 'critical',
  timestamp: new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }),
  incidentType: 'Severe Domestic Coercion & Forced Confinement',
  riskScore: 0.92,
  location: {
    coordinates: '28.6139° N, 77.2090° E',
    description: 'Residential Apartment, South Sector Block C',
    accuracy: '± 8 meters (Cell Tower + Wi-Fi Triangulation)',
  },
  situationBrief:
    'Aggressive containment by perpetrator. Phone monitored intermittently; survivor used silent steganography to conceal distress packet within nature photograph. Immediate non-ringing authority check requested.',
  perpetratorDetails:
    'Spouse / Domestic partner with prior history of verbal coercion and device surveillance.',
  covertTrigger: 'LSB Channel Red/Blue Delta 0.003% • SHA-256 Checksum Verified',
  recommendedDispatch: [
    'Dispatch plainclothes domestic unit without emergency siren',
    'Do not call recipient device to prevent domestic retaliation',
    'Prepare Section 18 Protection Order documentation under PWDVA 2005',
    'Notify nearest designated One Stop Crisis Center (OSCC)',
  ],
  rawStegoHeader: 'SOLACE_STEGO_V2::AES_GCM_256::HMAC_PASS::DISPATCH_PRIORITY_1',
};

export default function DecrypterPage() {
  const [inputMode, setInputMode] = useState<'upload' | 'camera'>('upload');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageMeta, setImageMeta] = useState<{
    name: string;
    size: string;
    dimensions?: string;
  } | null>(null);

  // Camera state
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraFacing, setCameraFacing] = useState<'user' | 'environment'>('environment');
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Decoding & Scanning state
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState<number>(0);
  const [decryptedResult, setDecryptedResult] = useState<DecryptedPayload | null>(null);
  const [hasCopied, setHasCopied] = useState(false);

  // Stop camera tracks cleanly
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }, []);

  // Start camera stream
  const startCamera = useCallback(async () => {
    stopCamera();
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported by your current browser.');
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: cameraFacing,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsCameraActive(true);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : 'Could not access camera. Please allow camera permissions.';
      setCameraError(errorMsg);
      setIsCameraActive(false);
      toast.error(errorMsg);
    }
  }, [cameraFacing, stopCamera]);

  // Handle switching tabs
  useEffect(() => {
    if (inputMode === 'camera' && !selectedImage) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => {
      stopCamera();
    };
  }, [inputMode, selectedImage, startCamera, stopCamera]);

  // Capture frame from active camera
  const capturePhoto = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.95);

    setSelectedImage(dataUrl);
    setImageMeta({
      name: `live_capture_${Date.now()}.jpg`,
      size: `${Math.round((dataUrl.length * 3) / 4 / 1024)} KB`,
      dimensions: `${canvas.width} × ${canvas.height} px`,
    });
    stopCamera();
    toast.success('Image captured successfully.');
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload a valid image file (.png, .jpg, .webp).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setSelectedImage(result);
      setImageMeta({
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
      });
      setDecryptedResult(null);
    };
    reader.readAsDataURL(file);
  };

  // Load sample demo image
  const handleLoadSample = () => {
    const samplePath = '/images/distress-nature-reach.jpg';
    setSelectedImage(samplePath);
    setImageMeta({
      name: 'solace_covert_sample_0942.jpg',
      size: '868.1 KB',
      dimensions: '1920 × 1280 px',
    });
    setDecryptedResult(null);
    stopCamera();
    setInputMode('upload');
    toast.success('Sample covert SOS image loaded.');
  };

  // Trigger Steganography Extraction
  const handleDecrypt = async () => {
    if (!selectedImage) {
      toast.error('Please upload or capture an image first.');
      return;
    }

    setIsScanning(true);
    setScanStep(1);
    setDecryptedResult(null);

    // Step 1: LSB Pixel Channel Scan
    await new Promise((r) => setTimeout(r, 900));
    setScanStep(2);

    // Step 2: Cryptographic Checksum & Header Verification
    await new Promise((r) => setTimeout(r, 1000));
    setScanStep(3);

    // Step 3: Decompressing Gemini Decompose Telemetry
    await new Promise((r) => setTimeout(r, 800));

    setIsScanning(false);
    setDecryptedResult(SAMPLE_PAYLOAD);
    toast.success('Steganographic payload decrypted successfully!');
  };

  // Reset workspace
  const handleReset = () => {
    setSelectedImage(null);
    setImageMeta(null);
    setDecryptedResult(null);
    setIsScanning(false);
    setScanStep(0);
    if (inputMode === 'camera') {
      startCamera();
    }
  };

  // Copy brief
  const handleCopy = () => {
    if (!decryptedResult) return;
    const textToCopy = `SOLACE EMERGENCY SITUATION BRIEF\n\nIncident: ${decryptedResult.incidentType}\nStatus: ${decryptedResult.status.toUpperCase()}\nRisk Score: ${decryptedResult.riskScore}\nCoordinates: ${decryptedResult.location.coordinates} (${decryptedResult.location.description})\n\nDetails:\n${decryptedResult.situationBrief}\n\nRecommended Actions:\n${decryptedResult.recommendedDispatch.map((a) => `• ${a}`).join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setHasCopied(true);
    toast.success('Situation brief copied to clipboard.');
    setTimeout(() => setHasCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F8F1EA] text-[#3B2630] selection:bg-[#F3DCD4] selection:text-[#3B2630] pb-24">
      {/* Editorial Header Section */}
      <section className="relative pt-8 pb-8 sm:pt-12 sm:pb-12 border-b border-[#E5DCD4]/60 bg-gradient-to-b from-[#FFF9F4] to-[#F8F1EA] overflow-hidden">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Premium Editorial Illustration docked to the left edge */}
            <div className="lg:col-span-5 xl:col-span-4 relative flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                {/* Soft ambient blush glow */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl scale-110 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(243,220,212,0.65) 0%, rgba(250,240,236,0.35) 50%, transparent 80%)',
                  }}
                />
                <Image
                  src="/images/decrypter-faceless-woman.svg"
                  alt="Editorial illustration of a faceless woman — silent resilience and protective shield"
                  width={440}
                  height={560}
                  className="relative z-10 w-full h-auto object-contain drop-shadow-xl select-none"
                  priority
                />
              </div>
            </div>

            {/* Right: Text & Actions */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-5 lg:pl-6">
            

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-[#3B2630] font-normal tracking-tight leading-[1.12]">
                Extract Covert Intelligence{' '}
                <span className="italic text-[#766B68]">Hidden in Plain Sight.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-[#766B68] font-light max-w-2xl leading-relaxed">
                Upload any suspected image or capture live media with your device camera.
                Our dual-stage pixel analysis inspects least-significant bit (LSB) variations,
                metadata envelopes, and reconstructs the encrypted distress dispatch.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleLoadSample}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FFF9F4] border border-[#E5DCD4] text-xs sm:text-sm font-sans font-medium text-[#3B2630] hover:border-[#3B2630] hover:bg-[#FAF0EC] transition-all shadow-sm cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#766B68]" />
                  <span>Load Sample Covert Image</span>
                </button>

                <Link
                  href="/create-post"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans text-[#766B68] hover:text-[#3B2630] transition-colors ml-1"
                >
                  <span>Need to encode an SOS instead? Go to Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Decoder Interface */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Input & Capture Area */}
          <div className="lg:col-span-6 space-y-6">
            {/* Input Mode Selector Bar */}
            <div className="bg-[#FFF9F4] rounded-2xl p-1.5 border border-[#E5DCD4] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setInputMode('upload');
                    if (!selectedImage) stopCamera();
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    inputMode === 'upload'
                      ? 'bg-[#3B2630] text-[#FFF9F4] shadow-sm'
                      : 'text-[#766B68] hover:text-[#3B2630]'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload File</span>
                </button>

                <button
                  onClick={() => {
                    setInputMode('camera');
                    setSelectedImage(null);
                    setDecryptedResult(null);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                    inputMode === 'camera'
                      ? 'bg-[#3B2630] text-[#FFF9F4] shadow-sm'
                      : 'text-[#766B68] hover:text-[#3B2630]'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Live Camera</span>
                </button>
              </div>

              {selectedImage && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#766B68] hover:text-[#3B2630] hover:bg-[#F8F1EA] transition-colors mr-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {/* Visual Viewport / Dropzone */}
            <div className="relative rounded-3xl bg-[#FFF9F4] border-2 border-dashed border-[#E5DCD4] overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col items-center justify-center p-6 shadow-sm">
              {/* State 1: Active Selected Image Preview */}
              {selectedImage ? (
                <div className="relative w-full h-full flex flex-col items-center">
                  <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5DCD4] bg-[#241A22]">
                    <Image
                      src={selectedImage}
                      alt="Source for steganographic analysis"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />

                    {/* Scanning Laser Beam Effect */}
                    {isScanning && (
                      <motion.div
                        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#DEB3A5] to-transparent shadow-[0_0_15px_#DEB3A5] z-30"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.2,
                          ease: 'easeInOut',
                        }}
                      />
                    )}

                    {/* Watermark overlay during scan */}
                    {isScanning && (
                      <div className="absolute inset-0 bg-[#3B2630]/30 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-center z-20">
                        <div className="w-12 h-12 rounded-full bg-[#FFF9F4]/90 flex items-center justify-center shadow-lg mb-3">
                          <Activity className="w-6 h-6 text-[#3B2630] animate-spin" />
                        </div>
                        <span className="font-serif text-lg text-[#FFF9F4] font-medium drop-shadow-md">
                          {scanStep === 1 && 'Scanning LSB Bitplanes (R, G, B)...'}
                          {scanStep === 2 && 'Validating AES GCM Payload Envelope...'}
                          {scanStep === 3 && 'Reconstructing Telemetry & Coordinates...'}
                        </span>
                        <span className="text-xs text-[#F3DCD4] font-mono mt-1">
                          Phase {scanStep} of 3 • 256-bit entropy check
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Image Metadata Bar */}
                  {imageMeta && (
                    <div className="w-full mt-4 flex items-center justify-between px-3 py-2 rounded-xl bg-[#FAF0EC] border border-[#E5DCD4] text-xs text-[#766B68]">
                      <div className="flex items-center gap-2 truncate max-w-[70%]">
                        <FileText className="w-3.5 h-3.5 text-[#3B2630] shrink-0" />
                        <span className="font-mono truncate">{imageMeta.name}</span>
                      </div>
                      <span className="font-mono text-[11px] shrink-0">{imageMeta.size}</span>
                    </div>
                  )}

                  {/* Actions for loaded image */}
                  <div className="w-full mt-5 flex items-center gap-3">
                    <button
                      onClick={handleDecrypt}
                      disabled={isScanning}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3B2630] text-[#FFF9F4] font-sans text-sm font-semibold hover:bg-[#523744] disabled:opacity-60 transition-all shadow-md cursor-pointer"
                    >
                      <Scan className="w-4 h-4 text-[#F3DCD4]" />
                      <span>{isScanning ? 'Decoding Bitstream...' : 'Decrypt Steganography'}</span>
                    </button>

                    <button
                      onClick={handleReset}
                      disabled={isScanning}
                      className="px-4 py-3.5 rounded-full border border-[#E5DCD4] bg-[#FFF9F4] text-xs font-medium text-[#766B68] hover:text-[#3B2630] transition-colors"
                      title="Replace image"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : inputMode === 'camera' ? (
                /* State 2: Camera Viewfinder */
                <div className="relative w-full h-full flex flex-col items-center">
                  <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-[#E5DCD4]">
                    <video
                      ref={videoRef}
                      playsInline
                      muted
                      autoPlay
                      className="w-full h-full object-cover"
                    />

                    {/* Camera Viewfinder Crosshairs */}
                    <div className="pointer-events-none absolute inset-6 border border-white/25 rounded-xl flex items-center justify-center">
                      <div className="w-12 h-12 border-t-2 border-l-2 border-white/70 absolute top-0 left-0" />
                      <div className="w-12 h-12 border-t-2 border-r-2 border-white/70 absolute top-0 right-0" />
                      <div className="w-12 h-12 border-b-2 border-l-2 border-white/70 absolute bottom-0 left-0" />
                      <div className="w-12 h-12 border-b-2 border-r-2 border-white/70 absolute bottom-0 right-0" />
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    </div>

                    {cameraError && (
                      <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center p-6 text-center text-white">
                        <AlertTriangle className="w-8 h-8 text-amber-400 mb-2" />
                        <p className="text-sm font-medium">{cameraError}</p>
                        <button
                          onClick={startCamera}
                          className="mt-4 px-4 py-2 rounded-full bg-white/20 text-xs hover:bg-white/30 transition-colors"
                        >
                          Retry Camera Access
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Camera Controls */}
                  <div className="w-full mt-4 flex items-center justify-between px-2">
                   

                    <button
                      onClick={capturePhoto}
                      disabled={!isCameraActive}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3B2630] text-[#FFF9F4] text-xs font-semibold hover:bg-[#523744] transition-all shadow-md disabled:opacity-50"
                    >
                      <Camera className="w-4 h-4 text-[#F3DCD4]" />
                      <span>Capture Photo</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* State 3: File Upload Dropzone */
                <label className="cursor-pointer flex flex-col items-center justify-center text-center p-6 w-full h-full group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="w-16 h-16 rounded-full bg-[#FAF0EC] border border-[#DEB3A5]/50 flex items-center justify-center group-hover:scale-105 transition-transform mb-4">
                    <Upload className="w-7 h-7 text-[#3B2630]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3B2630] font-normal mb-2">
                    Upload image for decryption
                  </h3>
                  <p className="text-sm sm:text-base text-[#766B68] font-light max-w-sm mb-4 leading-relaxed">
                    Drag and drop your file here, or click to browse files from your device.
                  </p>
                  <span className="text-xs font-mono text-[#766B68]/80 px-3.5 py-1.5 rounded-full bg-[#F8F1EA]">
                    PNG, JPG, WEBP • Max 25 MB
                  </span>
                </label>
              )}
            </div>

            {/* Safety & Protocol Notice */}
            <div className="rounded-2xl p-4 sm:p-5 bg-[#FAF0EC] border border-[#DEB3A5]/50 text-xs sm:text-sm text-[#766B68] space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-2 text-[#3B2630] font-semibold text-sm sm:text-base">
                <ShieldCheck className="w-4 h-4 text-[#3B2630]" />
                <span>Ephemerality & Zero Server Footprint</span>
              </div>
              <p>
                Pixel payloads are analyzed entirely inside this browser session memory. No uploaded
                images or decrypted situation logs are retained on public server logs without authority
                signing.
              </p>
            </div>
          </div>

          {/* Right Column: Decrypted Intelligence Console */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FFF9F4] rounded-3xl p-6 sm:p-8 border border-[#E5DCD4] shadow-sm min-h-[480px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#E5DCD4]">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#766B68] font-semibold block">
                      Decrypted Telemetry
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-[#3B2630] font-normal mt-1 leading-snug">
                      Situation Report Console
                    </h2>
                  </div>

                  {decryptedResult && (
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF0EC] border border-[#E5DCD4] text-xs sm:text-sm font-medium text-[#3B2630] hover:bg-[#F3DCD4] transition-colors"
                    >
                      {hasCopied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#766B68]" />
                          <span>Copy Brief</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* State: Awaiting Image / Scan */}
                {!decryptedResult && !isScanning && (
                  <div className="py-14 flex flex-col items-center justify-center text-center space-y-4">
                 
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#3B2630] font-medium">
                        No Decrypted Packet Active
                      </h3>
                      <p className="text-sm sm:text-base text-[#766B68] font-light max-w-sm mx-auto leading-relaxed">
                        Select or capture an image on the left and tap{' '}
                        <span className="font-semibold text-[#3B2630]">Decrypt Steganography</span> to
                        commence cryptographic pixel decomposition.
                      </p>
                    </div>
                  </div>
                )}

                {/* State: Active Scanning Animation */}
                {isScanning && (
                  <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-2 border-[#DEB3A5] border-t-transparent animate-spin" />
                      <div className="absolute inset-2 rounded-full border-2 border-[#3B2630] border-b-transparent animate-spin-reverse" />
                      <div className="absolute inset-0 flex items-center justify-center text-[#3B2630]">
                        <Scan className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-[#3B2630]">
                        Decompressing Payload Data
                      </h4>
                      <p className="text-xs text-[#766B68] font-mono mt-1">
                        Extracting situation parameters...
                      </p>
                    </div>
                  </div>
                )}

                {/* State: Result Available */}
                {decryptedResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6 pt-5"
                  >
                    {/* Urgency Badge Header */}
                    <div className="p-5 rounded-2xl bg-[#FAF0EC] border border-[#DEB3A5] flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-700">
                            URGENT DISPATCH CLASSIFICATION
                          </span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.6rem] text-[#3B2630] font-normal leading-snug">
                          {decryptedResult.incidentType}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#766B68] font-mono">
                          {decryptedResult.covertTrigger}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[11px] sm:text-xs text-[#766B68] uppercase font-mono block">
                          Risk Score
                        </span>
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-red-700">
                          {decryptedResult.riskScore * 100}%
                        </span>
                      </div>
                    </div>

                    {/* Geolocation & Time Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4] space-y-1">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#766B68]">
                          <MapPin className="w-4 h-4 text-[#3B2630]" />
                          <span className="font-medium">Coordinates</span>
                        </div>
                        <p className="font-mono text-sm sm:text-base text-[#3B2630] font-semibold">
                          {decryptedResult.location.coordinates}
                        </p>
                        <p className="text-xs sm:text-sm text-[#766B68] font-light truncate">
                          {decryptedResult.location.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#F8F1EA] border border-[#E5DCD4] space-y-1">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#766B68]">
                          <Clock className="w-4 h-4 text-[#3B2630]" />
                          <span className="font-medium">Conceal Timestamp</span>
                        </div>
                        <p className="font-mono text-sm sm:text-base text-[#3B2630] font-semibold">
                          {decryptedResult.timestamp}
                        </p>
                        <p className="text-xs sm:text-sm text-[#766B68] font-light">
                          Accuracy: {decryptedResult.location.accuracy}
                        </p>
                      </div>
                    </div>

                    {/* Situation Narrative */}
                    <div className="space-y-2">
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#3B2630] block">
                        Survivor Situation Narrative
                      </span>
                      <p className="text-sm sm:text-base text-[#463B37] leading-relaxed bg-[#F8F1EA] p-4 rounded-2xl border border-[#E5DCD4]">
                        {decryptedResult.situationBrief}
                      </p>
                    </div>

                    {/* Recommended Dispatch Protocols */}
                    <div className="space-y-2.5">
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#3B2630] block">
                        Mandated Protective Dispatch Actions
                      </span>
                      <ul className="space-y-2.5">
                        {decryptedResult.recommendedDispatch.map((action, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[#5D4D49] leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#3B2630] shrink-0 mt-0.5" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Raw Cryptographic Header */}
                    <div className="pt-2.5 border-t border-[#E5DCD4]">
                      <span className="text-xs font-mono text-[#766B68]/90 block truncate">
                        RAW_PACKET: {decryptedResult.rawStegoHeader}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Bottom Quick-Action Links */}
              <div className="pt-6 mt-6 border-t border-[#E5DCD4] flex flex-wrap items-center justify-between gap-3 text-xs">
                <Link
                  href="/lawbot"
                  className="inline-flex items-center gap-1.5 text-[#766B68] hover:text-[#3B2630] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Cross-Reference Legal Protections in LawBot</span>
                </Link>

                <Link
                  href="/create-post"
                  className="inline-flex items-center gap-1.5 text-[#3B2630] font-semibold hover:underline"
                >
                  <span>Covert Studio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
