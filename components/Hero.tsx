import Image from "next/image";
import { siteData } from "../lib/data";

export default function Hero() {
  return (
    <section className="hero">
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

      {/* Elemento gráfico rasgado separando as cores de fundo */}
      <div className="hero-brush-divider"></div>
    </section>
  );
}
