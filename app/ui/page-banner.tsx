import type { ReactNode } from "react";
import { WaveDivider } from "./wave-divider";

// Faixa de abertura das páginas internas: foto local com película vinho.
export function PageBanner({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="page-banner" aria-labelledby="page-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="page-banner-bg" src="/images/why-bg.webp" alt="" />
      <div className="container page-banner-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <span className="title-rule" aria-hidden="true" />
        <p className="page-banner-lead">{children}</p>
      </div>
      <div className="page-banner-wave">
        <WaveDivider from="white" to="paper" />
      </div>
    </section>
  );
}
