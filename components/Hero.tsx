import React from "react";
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

        {/* Área da Imagem GIGANTE */}
        <div className="hero-image-wrapper">
          <img
            src="/img/burguer-hero.png"
            alt="Hambúrguer One Stand"
            className="hero-image"
            style={{
              width: "220%" /* AUMENTADO: Crescimento extremo da imagem */,
              maxWidth: "1500px" /* AUMENTADO: Limite máximo desbloqueado */,
              minWidth:
                "500px" /* Garante que não fica pequeno em telemóveis */,
              height: "auto",
              marginRight:
                "-70%" /* Empurra todo o excesso colossal para fora do ecrã à direita */,
              marginTop:
                "-15%" /* Faz o hambúrguer subir ainda mais, invadindo a margem superior */,
              marginLeft: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
