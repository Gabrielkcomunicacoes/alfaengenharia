import { Header } from "./ui/header";
import { Footer } from "./ui/footer";
import { WaveDivider } from "./ui/wave-divider";
import { HeroSection } from "./ui/sections/hero-section";
import { PortfolioTeaser } from "./ui/sections/portfolio-teaser";
import { ServicesTeaser } from "./ui/sections/services-teaser";
import { AboutTeaser } from "./ui/sections/about-teaser";
import { RegionSection } from "./ui/sections/region-section";
import { ProcessSection } from "./ui/sections/process-section";
import { ContactSection } from "./ui/sections/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <HeroSection />
        <WaveDivider from="paper" to="white" />
        <div className="surface-white">
          <ServicesTeaser />
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
