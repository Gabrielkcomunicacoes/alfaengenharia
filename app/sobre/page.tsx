import type { Metadata } from "next";
import { content } from "../site-content";
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import { PageBanner } from "../ui/page-banner";
import { WaveDivider } from "../ui/wave-divider";
import { AboutCta, AboutPage } from "../ui/sections/about-page";
import { StatsStrip } from "../ui/sections/stats-strip";
import { RegionSection } from "../ui/sections/region-section";

export const metadata: Metadata = {
  title: content.seo.sobre.title,
  description: content.seo.sobre.description,
};

export default function Sobre() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <PageBanner eyebrow="A Alfa" title="Sobre a Alfa Engenharia">
          Empresa amazonense de engenharia civil, elétrica e mecânica, atuando
          desde 2013 em Manaus e no interior do Amazonas.
        </PageBanner>
        <AboutPage />
        <StatsStrip />
        <WaveDivider from="red" to="paper" />
        <RegionSection />
        <AboutCta />
      </main>
      <WaveDivider from="paper" to="white" reverse />
      <Footer />
    </>
  );
}
