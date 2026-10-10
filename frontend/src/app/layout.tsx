import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'solace — A Silent Shield, A Strong Voice',
  description:
    'A trauma-informed safety, covert SOS, and constitutional legal sanctuary engineered for women.',
  icons: {
    icon: '/solace-logo.png',
  },
};

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Playfair_Display({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
        <body
          className="font-sans antialiased bg-[#F8F1EA] text-[#3B2630] min-h-screen selection:bg-[#F3DCD4] selection:text-[#3B2630]"
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col bg-[#F8F1EA]">
              <Navbar />
              <main className="flex-1 flex flex-col">{children}</main>
            </div>
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
