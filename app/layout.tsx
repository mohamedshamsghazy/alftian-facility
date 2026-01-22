import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { ReactLenis } from 'lenis/react'
import "./globals.css"

import { LanguageProvider } from "@/lib/language-context"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"

// 👇 1. التعديل هنا: غيرنا الاستيراد من Navigation لـ Navbar
import { Navbar } from "@/components/navbar"

import { Footer } from "@/components/footer"
import { CommandMenu } from "@/components/command-menu"
import { Toaster } from "@/components/ui/toaster"
import { CookieBanner } from "@/components/cookie-banner"



export const metadata: Metadata = {
  title: {
    default: "Alftian Facility & Bau GmbH | Premier Construction & Facility Management",
    template: "%s | Alftian Facility & Bau GmbH"
  },
  description: "Leading German provider of integrated facility management, construction services, and technical solutions. Excellence, innovation, and sustainability.",
  keywords: ["construction", "facility management", "bau", "building services", "Germany", "Merseburg", "renovation", "technical building equipment", "TGA"],
  authors: [{ name: "Alftian Facility & Bau GmbH" }],
  creator: "Alftian Facility & Bau GmbH",
  publisher: "Alftian Facility & Bau GmbH",
  icons: {
    icon: "/images/fulllogo-transparent.png",
    shortcut: "/images/fulllogo-transparent.png",
    apple: "/images/fulllogo-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alftian-bau.com", // Keeping it generic as I don't know the final domain, using a placeholder based on email
    title: "Alftian Facility & Bau GmbH - Building Excellence",
    description: "Your trusted partner for high-quality construction and facility management services in Germany.",
    siteName: "Alftian Facility & Bau GmbH",
    images: [
      {
        url: "/images/og-image.jpg", // Assuming this will be added or falls back
        width: 1200,
        height: 630,
        alt: "Alftian Facility & Bau GmbH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alftian Facility & Bau GmbH",
    description: "German quality facility management and construction services.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "./",
  },
}

export const viewport = {
  themeColor: "#002A26",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`font-sans antialiased bg-[#002A26] bg-noise cursor-none`}>
        <ReactLenis root>
          <LanguageProvider>
            <Preloader />
            <CustomCursor />

            {/* 👇 2. التعديل هنا: استخدمنا Navbar بدلاً من Navigation */}
            <Navbar />

            <CommandMenu />

            {children}

            <Footer />
            <CookieBanner />
            <Toaster />
          </LanguageProvider>
        </ReactLenis>
        <Analytics />
      </body>
    </html>
  )
}