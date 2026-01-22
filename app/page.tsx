
import { HeroSection } from "@/components/hero-section"

import { AboutSection } from "@/components/about-section"
import { QualitySection } from "@/components/quality-section"
import { EcoCalculator } from "@/components/eco-calculator"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { BentoFeatures } from "@/components/bento-features" // القسم الجديد
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero doesn't need reveal, it has its own entrance */}
      <HeroSection />



      {/* Each section is now wrapped for smooth entry */}
      <ScrollReveal width="100%">
        <AboutSection />
      </ScrollReveal>
      {/* New "Mega" Section to enlarge the page */}
      <BentoFeatures />




      <QualitySection />

      <ScrollReveal width="100%">
        <EcoCalculator />
      </ScrollReveal>

      <GallerySection />



      <ContactSection />
    </main>
  )
}