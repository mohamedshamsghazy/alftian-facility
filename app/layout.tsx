import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // 1. Clean Title (No "Create Next App")
  title: "Alftian Facility & Bau GmbH",
  description:
    "German quality facility management, construction and technical services. We shape spaces with precision.",
  
  // 2. REMOVED the "generator: v0.app" line here
  
  // 3. YOUR LOGO SETTINGS (Favicon)
  icons: {
    // This points to the file you uploaded: /public/images/fulllogo-transparent.png
    icon: "/images/fulllogo-transparent.png",
    shortcut: "/images/fulllogo-transparent.png",
    apple: "/images/fulllogo-transparent.png",
  },
}

export const viewport = {
  themeColor: "#002A26",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // We suppress hydration warnings to allow dynamic attributes (like lang="ar")
    <html suppressHydrationWarning>
      <body className={`font-sans antialiased bg-[#002A26]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}