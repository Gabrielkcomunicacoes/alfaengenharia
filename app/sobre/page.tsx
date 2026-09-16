import type { Metadata } from "next";
import { content } from "../site-content";
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import { WaveDivider } from "../ui/wave-divider";
import { AboutSection } from "../ui/sections/about-section";
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
        <WaveDivider from="paper" to="ink" />
        <AboutSection />
        <WaveDivider from="ink" to="paper" />
        <RegionSection />
      </main>
      <WaveDivider from="paper" to="white" reverse />
      <Footer />
    </>
  );
}
