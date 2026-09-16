import type { Metadata } from "next";
import { content } from "../site-content";
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import { WaveDivider } from "../ui/wave-divider";
import { ServicesSection } from "../ui/sections/services-section";
import { ProcessSection } from "../ui/sections/process-section";
import { PreparationSection } from "../ui/sections/preparation-section";
import { FaqSection } from "../ui/sections/faq-section";

export const metadata: Metadata = {
  title: content.seo.servicos.title,
  description: content.seo.servicos.description,
};

export default function Servicos() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <WaveDivider from="paper" to="white" />
        <div className="surface-white">
          <ServicesSection />
        </div>
        <WaveDivider from="white" to="paper" />
        <ProcessSection />
        <WaveDivider from="paper" to="white" reverse />
        <PreparationSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
