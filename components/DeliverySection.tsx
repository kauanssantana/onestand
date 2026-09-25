"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const deliveryOptions = [
  {
    id: "site",
    name: "Site Oficial",
    desc: "Peça direto connosco e ganhe +20% de desconto no pedido!",
    link: "https://shop.beetech.com.br/oneburger",
    logoUrl: "/img/logo.jpg",
    cta: "Pedir com Desconto",
    target: "_blank",
  },
  {
    id: "ifood",
    name: "iFood",
    desc: "Peça pelo iFood com a rapidez e praticidade que já conhece.",
    link: "https://www.ifood.com.br/delivery/sao-paulo-sp/one-stand-hamburgueria-parque-america/e66b1d8a-dff2-4b80-afed-36ed3c8dbc1a?UTM_Medium=share",
    logoUrl: "/img/logo-ifood.png",
    cta: "Pedir no iFood",
    target: "_blank",
  },
  {
    id: "99food",
    name: "99 Food",
    desc: "Aproveite os cupons e receba rápido através da aplicação 99.",
    link: "https://h5.didiglobal.com/silver-bullet-online/8FTSBVvN4wxCUanV-UY0W?ddlCode=9QLbNU&area=BR&lang=pt-BR&appKey=dlp9&redirectType=0",
    logoUrl: "/img/logo-99.jpg",
    cta: "Pedir na 99",
    target: "_blank",
  },
  {
    id: "keeta",
    name: "KeeTa",
    desc: "Novidade na área! Peça os seus hambúrgueres também pelo KeeTa.",
    link: "https://m.mykeeta.com/marketing/applaunch/index.html?locale=en",
    logoUrl: "/img/logo-keeta.png",
    cta: "Pedir no KeeTa",
    target: "_blank",
  },
  {
    id: "salao",
    name: "Retirada",
    desc: "Venha conhecer o 1º Robô Garçom de SP e retirar no balcão!",
    link: "#contato",
    logoUrl: "/img/logo.jpg",
    cta: "Ver Endereço",
    target: "_self",
  },
];

export default function DeliverySection() {
  return (
    <section className="delivery-section" id="delivery">
      <div className="delivery-container">
        {/* Cabeçalho da Seção */}
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <span
              className="menu-badge"
              style={{
                backgroundColor: "rgba(245, 166, 35, 0.15)",
                color: "#f5a623",
              }}
            >
              Peça onde estiver
            </span>
            <h2 className="menu-title !text-white mt-2">
              Opções de <span className="text-secondary">Delivery</span>
            </h2>
            <p className="menu-subtitle !text-white text-sm mt-3 mb-8 max-w-xl mx-auto opacity-80">
              Quer curtir o sabor grelhado no fogo em casa? Escolha a sua
              plataforma favorita clicando abaixo ou venha retirar com a gente!
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Cards com Zoom In em cascata */}
        <div className="delivery-grid">
          {deliveryOptions.map((option, index) => (
            <ScrollReveal
              key={option.id}
              animation="zoom-in"
              delay={index * 100}
            >
              <a
                href={option.link}
                target={option.target}
                rel={option.target === "_blank" ? "noopener noreferrer" : ""}
                className="delivery-card group hover:-translate-y-2 transition-transform duration-300 block h-full"
              >
                <div className="flex flex-col items-center justify-between h-full text-center">
                  {/* Logótipos mais pequenos (w-16 h-16 em vez de w-24 h-24) */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center p-1 rounded-xl bg-white shadow-sm border border-gray-100 group-hover:border-[#e6392b] group-hover:shadow-md transition-all mx-auto overflow-hidden">
                    <img
                      src={option.logoUrl}
                      alt={`Logo ${option.name}`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `<span class="text-gray-400 font-bold text-xs">${option.name}</span>`;
                        }
                      }}
                    />
                  </div>

                  {/* Textos dos Cards */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {option.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                      {option.desc}
                    </p>
                  </div>

                  {/* Botão Fake - Menor e mais discreto */}
                  <div className="btn-primary w-full text-center rounded-lg mt-auto text-sm font-bold py-2.5">
                    {option.cta}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
