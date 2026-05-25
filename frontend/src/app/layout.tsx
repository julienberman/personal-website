import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Public_Sans,
} from "next/font/google";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julien Berman",
  description: "Personal website for Julien Berman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(jetbrainsMono.variable, "font-sans", publicSans.variable)}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto min-h-screen w-full max-w-6xl px-6 sm:px-10">
          <header className="sticky top-0 z-50 flex items-center gap-6 border-b border-border bg-background/90 py-5 backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              Julien Berman
            </Link>

            <nav className="ml-auto flex items-center gap-2">
              <Button asChild size="nav" variant="ghost">
                <Link href="/">Home</Link>
              </Button>
              <Button asChild size="nav" variant="ghost">
                <Link href="/projects">Projects</Link>
              </Button>
              <Button asChild size="nav" variant="ghost">
                <a href="/resume.pdf" rel="noreferrer" target="_blank">
                  Resume
                </a>
              </Button>
            </nav>
          </header>

          <div className="py-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
