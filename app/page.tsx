import { LanguageProvider } from "@/lib/language-context"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LiveTicker } from "@/components/live-ticker" // New
import { AboutSection } from "@/components/about-section"
import { EcoCalculator } from "@/components/eco-calculator" // New
import { ServicesSection } from "@/components/services-section"
import { DigitalTwinSection } from "@/components/digital-twin-section" // New
import { GallerySection } from "@/components/gallery-section"
import { QualitySection } from "@/components/quality-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"   // New
import { CommandMenu } from "@/components/command-menu" // New

export default function Home() {
  return (
    <LanguageProvider>
      <Preloader /> {/* Shows the Logo Loading Screen */}
      <CustomCursor />
      <Navigation />
      <CommandMenu /> {/* Enables Ctrl+K Menu */}
      <main className="cursor-none">
        <HeroSection />
        <LiveTicker /> {/* The scrolling text bar */}
        <AboutSection />
        <EcoCalculator /> {/* The CO2 slider */}
        <ServicesSection />
        <DigitalTwinSection /> {/* The X-Ray Scanner */}
        <GallerySection />
        <QualitySection />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}