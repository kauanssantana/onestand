"use client";

import React from "react";
import { Quote, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ReviewsSection() {
  const reviews = [
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
      {/* VÍDEO PADRONIZADO IGUAL AO CARDÁPIO */}
      <video autoPlay loop muted playsInline className="menu-video-bg">
        <source src="/video/menu-bg.mp4" type="video/mp4" />
      </video>

      {/* Z-10 garante que o texto fica por cima do vídeo */}
      <div className="reviews-container relative z-10">
        <ScrollReveal animation="fade-up">
          <h2 className="menu-title mb-2 text-center">
            O que dizem <span className="text-secondary">Nossos Clientes</span>
          </h2>
          <p className="menu-subtitle mb-12 text-center">
            A opinião real de quem já provou a experiência One Stand.
          </p>
        </ScrollReveal>

        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            <ScrollReveal key={rev.id} animation="zoom-in" delay={index * 150}>
              <div className="review-card h-full">
                <div className="absolute top-6 right-6 text-gray-100 pointer-events-none">
                  <Quote size={48} className="fill-current opacity-70" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <div className="text-[#f5a623] text-xl mb-4 tracking-widest">
                      {"★".repeat(rev.rating)}
                    </div>
                    <p className="text-gray-700 italic text-base leading-relaxed mb-6">
                      “{rev.text}”
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col">
                    <h4 className="text-[#3a1010] font-bold text-lg">
                      {rev.name}
                    </h4>
                    <span className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-widest">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "64px",
              paddingBottom: "32px",
            }}
          >
            <a
              href="https://www.google.com/search?client=opera-gx&hs=j4O&sca_esv=5c4e950c04ff1613&sxsrf=APpeQnsvwW0MADeDNHROOPGufPQISHFY4w:1789602202237&q=One+Stand+hamburgueria&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_31uD3AmOfcRcU1DosjIroQ6BE0chdsZn-ofucAgIr_yQtqFdwc9BKGwYzZAutho0Q_WxvJ-XtmVb0oaVXIB6WBcE7lPCyeg1ULenuaFsaCUhb9W9g%3D%3D&sa=X&ved=2ahUKEwjHvLbco_SWAxXfD7kGHdTVOYsQrrQLegQIHBAA&biw=2343&bih=1156&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 transition-all duration-300"
              style={{
                padding: "16px 40px",
                borderRadius: "50px",
                border: "2px solid #3a1010",
                color: "#3a1010",
                fontWeight: "bold",
                fontSize: "15px",
                textDecoration: "none",
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
              <ExternalLink
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
