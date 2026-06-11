import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balaj Parasuraman Sangeetha | Business Analyst",
  description:
    "Business Analyst specializing in Analytics, Strategy, Operations, AI Automation, and Process Improvement.",

  keywords: [
    "Business Analyst",
    "Operations Analyst",
    "Strategy",
    "Analytics",
    "Data Analytics",
    "AI Automation",
    "Business Intelligence",
    "Graduate Jobs",
    "Internships",
  ],

  authors: [{ name: "Balaj Parasuraman Sangeetha" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}