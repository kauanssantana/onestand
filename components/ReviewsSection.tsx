"use client";

import React from "react";
import { Quote, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal"; // IMPORTAMOS O COMPONENTE AQUI

export default function ReviewsSection() {
  const reviews = [
    // ... (suas 6 avaliações aqui, mantive igual)
    {
      id: 1,
      name: "Kamilla Koch",
      role: "Local Guide",
      text: "Amei e voltarei mais vezes! Lanches deliciosos e ambiente muito bom também. O pedido é feito no totem e chega muito rápido na mesa, trazido por um robô fofinho rsrs",
      rating: 5,
    },
    {
      id: 2,
      name: "Lary Souza",
      role: "Cliente",
      text: "Tudo muito bom e saboroso, perfeito pra um dia querer sair e comer algo gostoso perto de casa.",
      rating: 5,
    },
    {
      id: 3,
      name: "marcio Lima",
      role: "Local Guide",
      text: "Gostei muito dos hambúrgueres, atendimento e ambiente. O pedido sai incrivelmente rápido. Grata surpresa!",
      rating: 5,
    },
    {
      id: 4,
      name: "Bertha Samuel",
      role: "Local Guide",
      text: "Uma das melhores hambúrguerias da região. Hambúrguer extremamente saboroso, batatas sempre crocantes, mesmo no delivery e os anéis de cebola e palitos de mussarela são espetaculares.",
      rating: 5,
    },
    {
      id: 5,
      name: "Giovanna Meneses",
      role: "Cliente",
      text: "Muito bom, super rápido !! Em menos de 5 minutos nosso lanche estava pronto, parabéns !",
      rating: 5,
    },
    {
      id: 6,
      name: "Patricia Santos",
      role: "Local Guide",
      text: "Maravilhoso, saboroso, bem embalado. Super rápido a entrega. Motoboy super educado também.",
      rating: 5,
    },
  ];

  return (
    <section className="reviews-section" id="avaliacoes">
      <video autoPlay loop muted playsInline className="menu-video-bg">
        <source src="/video/menu-bg.mp4" type="video/mp4" />
      </video>

      <div className="reviews-container relative z-10">
        {/* Título com Fade Up */}
        <ScrollReveal animation="fade-up">
          <h2 className="menu-title mb-2">
            O que dizem <span className="text-secondary">Nossos Clientes</span>
          </h2>
          <p className="menu-subtitle mb-16">
            A opinião real de quem já provou a experiência One Stand.
          </p>
        </ScrollReveal>

        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            /* Os cards aparecem em formato Zoom-In e em cascata (delay de 100ms, 200ms, etc) */
            <ScrollReveal key={rev.id} animation="zoom-in" delay={index * 150}>
              <div className="review-card h-full">
                <div className="absolute top-8 right-8 text-gray-100 pointer-events-none">
                  <Quote size={64} className="fill-current opacity-70" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <div className="text-[#f5a623] text-2xl mb-6 tracking-widest">
                      {"★".repeat(rev.rating)}
                    </div>
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-10">
                      “{rev.text}”
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col">
                    <h4 className="text-[#3a1010] font-bold text-2xl">
                      {rev.name}
                    </h4>
                    <span className="text-sm font-semibold text-gray-400 mt-1 uppercase tracking-widest">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Botão surgindo do lado Esquerdo */}
        <ScrollReveal animation="fade-right" delay={300}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <a
              href="https://www.google.com/search?..." // (Mantém o seu link original)
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "20px 48px",
                borderRadius: "50px",
                border: "3px solid #3a1010",
                color: "#3a1010",
                fontWeight: "900",
                fontSize: "20px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#3a1010";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#3a1010";
              }}
            >
              VER TODAS AS AVALIAÇÕES NO GOOGLE
              <ExternalLink size={28} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
