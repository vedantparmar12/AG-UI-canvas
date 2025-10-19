import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import "@copilotkit/react-ui/styles.css";

// Using Inter as a more reliable alternative to Manrope
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "CardiGraph - AI-Powered Visual Canvas",
  description: "Build, manage, and automate complex workflows with AI-powered visual canvas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable}`}>
      <body className="subpixel-antialiased">
        {children}
      </body>
    </html>
  );
}
