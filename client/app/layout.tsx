import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Construtora BRIX | Engenharia de Precisão e Alto Padrão",
  description:
    "Construtora BRIX - Solidez construtiva, sustentabilidade e acabamento de alto padrão. Conheça nossos empreendimentos em São Paulo.",
  authors: [{ name: "Construtora BRIX" }],
  openGraph: {
    title: "Construtora BRIX | Engenharia de Precisão e Alto Padrão",
    description:
      "Construtora BRIX - Solidez construtiva, sustentabilidade e acabamento de alto padrão.",
    type: "website",
    locale: "pt_BR",
    siteName: "Construtora BRIX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-neutral-dark antialiased">
        {children}
      </body>
    </html>
  );
}
