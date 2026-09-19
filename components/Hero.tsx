import React from "react";
import { siteData } from "../lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="hero">
      {/* Vídeo de Fundo em Loop */}
      <video autoPlay muted loop playsInline className="hero-video-bg">
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* COLUNA ESQUERDA (TEXTO) */}
        <div
          className="hero-content"
          style={{
            marginLeft: "-13%",
            position: "relative",
            zIndex: 20,
          }}
        >
          <ScrollReveal animation="fade-right" delay={100}>
            <h1 className="hero-title">
              Burger feito
              <br />
              <span className="text-secondary">no fogo de verdade</span>
            </h1>
            <p className="hero-subtitle">
              Carne suculenta grelhada no fogo, ingredientes sempre frescos e
              uma experiência única para a família com o 1º Robô Garçom do
              Grajaú.
            </p>
            <div className="hero-actions">
              <a
                href={siteData.company.menuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Fazer Pedido
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* COLUNA DIREITA (IMAGEM MONUMENTAL) */}
        <div className="hero-image-wrapper">
          <ScrollReveal animation="zoom-in" delay={300}>
            <img
              src="/img/burguer-hero.png"
              alt="Hambúrguer One Stand"
              className="hero-image"
              style={{
                width: "220%",
                maxWidth: "1500px",
                minWidth: "500px",
                height: "auto",
                marginTop: "-15%",
                marginLeft: "-30%",
                marginRight: "-60%",
              }}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
