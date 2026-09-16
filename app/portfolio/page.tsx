import type { Metadata } from "next";
import { content } from "../site-content";
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import { WaveDivider } from "../ui/wave-divider";
import { Portfolio } from "../ui/portfolio";

export const metadata: Metadata = {
  title: content.seo.portfolio.title,
  description: content.seo.portfolio.description,
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <WaveDivider from="paper" to="white" />
        <div className="surface-white">
          <Portfolio />
        </div>
      </main>
      <Footer />
    </>
  );
}
