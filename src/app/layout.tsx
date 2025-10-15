import type { Metadata } from "next";

import { Manrope } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import "@copilotkit/react-ui/styles.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
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
    <html lang="en" className={`${manrope.variable} ${GeistMono.variable}`}>
      <body className="subpixel-antialiased">
        {children}
      </body>
    </html>
  );
}
