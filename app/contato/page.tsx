import type { Metadata } from "next";
import { content } from "../site-content";
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import { WaveDivider } from "../ui/wave-divider";
import { ContactSection } from "../ui/sections/contact-section";
import { FaqSection } from "../ui/sections/faq-section";

export const metadata: Metadata = {
  title: content.seo.contato.title,
  description: content.seo.contato.description,
};

export default function Contato() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <ContactSection />
        <WaveDivider from="paper" to="white" reverse />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
