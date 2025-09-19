import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CasesSection } from "@/components/sections/cases-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CasesSection />
      <SocialProofSection />
      <InsightsSection />
      <CtaSection />
    </>
  )
}
