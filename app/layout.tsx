import { Toaster } from 'sonner';
import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import { LenisProvider } from "@/components/lenis-provider";
import type { Metadata } from "next";
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SHARAFATH ABIL HAS PP | MERN & Next.js Developer",
  description: "I build production-grade web systems — not demos. Engineering-first developer specializing in MERN, Next.js, and scalable architectures.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-foreground selection:text-background">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LenisProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
            </div>
          </LenisProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
