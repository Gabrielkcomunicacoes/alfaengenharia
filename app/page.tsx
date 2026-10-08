import { Header } from "./ui/header";
import { Footer } from "./ui/footer";
import { WaveDivider } from "./ui/wave-divider";
import { BenefitsTimeline } from "./ui/sections/benefits-timeline";
import { HeroSection } from "./ui/sections/hero-section";
import { PortfolioTeaser } from "./ui/sections/portfolio-teaser";
import { ServicesTeaser } from "./ui/sections/services-teaser";
import { AboutTeaser } from "./ui/sections/about-teaser";
import { RegionSection } from "./ui/sections/region-section";
import { StatsStrip } from "./ui/sections/stats-strip";
import { DifferentialsSection } from "./ui/sections/differentials-section";
import { ProcessSection } from "./ui/sections/process-section";
import { ContactSection } from "./ui/sections/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <div className="stage">
          <div className="stage-bg-track" aria-hidden="true">
            <div className="stage-bg" />
          </div>
          <HeroSection />
          <BenefitsTimeline />
          <div className="stage-wave">
            <WaveDivider from="white" to="paper" />
          </div>
        </div>
        <div className="surface-white">
          <ServicesTeaser />
        </div>
        <DifferentialsSection />
        <StatsStrip />
        <WaveDivider from="red" to="white" />
        <div className="surface-white">
          <PortfolioTeaser />
        </div>
        <WaveDivider from="white" to="ink" reverse />
        <AboutTeaser />
        <WaveDivider from="ink" to="paper" />
        <RegionSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <WaveDivider from="paper" to="white" reverse />
      <Footer />
    </>
  );
}
