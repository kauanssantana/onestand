import Image from "next/image";
import { siteData } from "../lib/data";

export default function Hero() {
  return (
    <section className="hero">
      {/* Vídeo de Fundo em Loop */}
      <video autoPlay muted loop playsInline className="hero-video-bg">
        <source src="/video/hero-bg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos de fundo.
      </video>

      {/* Camada translúcida com a cor da marca */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* Conteúdo de Texto */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-secondary">Hamburgueria</span>
            <br />
            de Rua
          </h1>
          <p className="hero-subtitle">
            Uma parada. Um lanche que vale a fila. Venha conhecer o sabor
            grelhado no fogo com o 1º Robô Garçom do Grajaú!
          </p>
          <div className="hero-actions">
            <a
              href={siteData.company.menuLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Pedir Agora
            </a>
          </div>
        </div>

        {/* Área da Imagem Monumental */}
        <div className="hero-image-wrapper">
          <Image
            src="/img/burguer-hero.png"
            alt="Hambúrguer One Stand"
            width={600}
            height={600}
            className="hero-image"
            priority
          />
        </div>
      </div>

      {/* Divisor em Ondas Suaves (substituindo os picos pontiagudos) */}
      <div className="hero-brush-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#f9f6f0">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
