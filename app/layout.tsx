"use client";
// import { Metadata } from "./metadata";
import localFont from "next/font/local";
import { useEffect } from "react";
import i18n from "../i18n/i18n";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "../styles/globals.css";
import  {AuthProvider}  from "../context/authContext";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const updateDocumentDirection = () => {
      const direction = i18n.dir(); // Get the direction based on the language
      const lang = i18n.language; // Get the current language
      document.documentElement.setAttribute("dir", direction); // Update `dir` attribute
      document.documentElement.setAttribute("lang", lang); // Update `lang` attribute
    };

    // Set initial direction and language
    updateDocumentDirection();

    // Listen for language changes
    i18n.on("languageChanged", updateDocumentDirection);

    // Cleanup on unmount
    return () => {
      i18n.off("languageChanged", updateDocumentDirection);
    };
  }, []);

  return (
    <html lang={i18n.language}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} `}
      >
        <AuthProvider>
        <Navbar />
        {children}
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
