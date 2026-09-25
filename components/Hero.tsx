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
        <div className="hero-content relative z-20 mt-10 md:mt-0 text-center md:text-left md:-ml-[5%]">
          <ScrollReveal animation="fade-right" delay={100}>
            <h1 className="hero-title">
              Burger feito
              <br />
              <span className="text-secondary">no fogo de verdade</span>
            </h1>
            <p className="hero-subtitle mx-auto md:mx-0">
              Carne suculenta grelhada no fogo, ingredientes sempre frescos e
              uma experiência única para a família com o 1º Robô Garçom do
              Grajaú.
            </p>
            <div className="hero-actions flex justify-center md:justify-start">
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

        {/* COLUNA DIREITA (IMAGEM) */}
        <div className="hero-image-wrapper mt-12 md:mt-0 flex w-full justify-center md:justify-end">
          <ScrollReveal
            animation="zoom-in"
            delay={300}
            className="flex justify-center w-full"
          >
            <img
              src="/img/burguer-hero.png"
              alt="Hambúrguer One Stand"
              /* MUDANÇA AQUI: No mobile usa w-[95%] e mx-auto para centrar perfeitamente */
              className="hero-image w-[95%] max-w-[400px] mx-auto block md:w-[165%] md:max-w-[1100px] md:-mt-[10%] md:-ml-[20%] md:-mr-[45%]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
