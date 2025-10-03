import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brite Cleaners",
  description: "Professional Cleaning Services in Manchester and Bolton - Brite Cleaners",
  
};
  keywords: [
    "cleaning services Manchester",
    "house cleaning Manchester",
    "office cleaning Manchester",
    "carpet cleaning Manchester",
    "end of tenancy cleaning Manchester",
    "domestic cleaning Manchester",
    "commercial cleaning Manchester",
    "cleaners in Manchester",
    "professional cleaning services Manchester",
    "affordable cleaning services Manchester",
    "cleaning company Manchester",
    "home cleaning services Manchester",
  ]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
