import type { Metadata } from "next";
import { content } from "./site-content";
import "./globals.css";
import "./editorial.css";
import "./interaction.css";
// Preencher apenas com o domínio confirmado. Nunca inferir a origem de headers recebidos.
const configuredOrigin = process.env.SITE_URL?.trim();
const siteOrigin =
  configuredOrigin && /^https:\/\/[^/?#@]+\/?$/.test(configuredOrigin)
    ? new URL(configuredOrigin)
    : undefined;
export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: siteOrigin } : {}),
  title: content.seo.title,
  description: content.seo.description,
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    locale: "pt_BR",
    type: "website",
    siteName: "Alfa Engenharia",
    ...(siteOrigin
      ? {
          images: [
            {
              url: new URL("/og.png", siteOrigin).href,
              width: 1200,
              height: 630,
              alt: "Alfa Engenharia — Engenharia e manutenção para empresas. Manaus e interior do Amazonas, desde 2013.",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: siteOrigin ? "summary_large_image" : "summary",
    title: content.seo.title,
    description: content.seo.description,
    ...(siteOrigin ? { images: [new URL("/og.png", siteOrigin).href] } : {}),
  },
  robots: {
    index: !!siteOrigin && process.env.SITE_INDEXABLE === "true",
    follow: !!siteOrigin && process.env.SITE_INDEXABLE === "true",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/fonts/barlow-condensed-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/source-sans-3.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
