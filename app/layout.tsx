import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One Stand Hamburgueria | O 1º Robô Garçom de SP",
  description:
    "Hambúrguer Artesanal grelhado no fogo como churrasco. Venha conhecer o futuro do atendimento no Grajaú!",
  // ADICIONADO AQUI: Configuração do ícone da aba do navegador
  icons: {
    icon: "/img/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
