"use client";

import React from "react";

// Lista de opções de delivery para facilitar a manutenção
const deliveryOptions = [
  {
    id: "site",
    name: "Site Oficial (Desconto)",
    desc: "Peça direto com a gente e ganhe +20% de desconto no seu pedido!",
    link: "https://shop.beetech.com.br/oneburger",
    logoUrl: "/img/logo.jpg",
    cta: "Pedir com Desconto",
    target: "_blank",
  },
  {
    id: "ifood",
    name: "iFood",
    desc: "Peça pelo iFood com a rapidez e praticidade que você já conhece.",
    link: "https://www.ifood.com.br/delivery/sao-paulo-sp/one-stand-hamburgueria-parque-america/e66b1d8a-dff2-4b80-afed-36ed3c8dbc1a?UTM_Medium=share",
    logoUrl: "/img/logo-ifood.png",
    cta: "Pedir no iFood",
    target: "_blank",
  },
  {
    id: "99food",
    name: "99",
    desc: "Aproveite os cupons e receba rápido através do aplicativo da 99.",
    link: "https://h5.didiglobal.com/silver-bullet-online/8FTSBVvN4wxCUanV-UY0W?ddlCode=9QLbNU&area=BR&lang=pt-BR&appKey=dlp9&redirectType=0",
    logoUrl: "/img/logo-99.jpg",
    cta: "Pedir na 99",
    target: "_blank",
  },
  {
    id: "keeta",
    name: "KeeTa",
    desc: "Novidade na área! Peça seus hambúrgueres também pelo KeeTa.",
    link: "https://m.mykeeta.com/marketing/applaunch/index.html?locale=en",
    logoUrl: "/img/logo-keeta.png",
    cta: "Pedir no KeeTa",
    target: "_blank",
  },
  {
    id: "salao",
    name: "Retirada & Salão",
    desc: "Venha conhecer o 1º Robô Garçom de SP e retirar seu pedido no balcão!",
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
          {/* MUDANÇA: Forçando a cor branca no título principal com !text-white para sobrepor o CSS global se necessário */}
          <h2 className="menu-title !text-white mt-3">
            Opções de <span className="text-secondary">Delivery</span> &
            Retirada
          </h2>
          {/* MUDANÇA: Forçando a cor branca e aumentando levemente o subtítulo */}
          <p className="menu-subtitle !text-white text-lg mb-10 max-w-2xl mx-auto">
            Quer curtir o sabor grelhado no fogo em casa? Escolha a sua
            plataforma favorita clicando abaixo ou venha retirar com a gente!
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="delivery-grid">
          {deliveryOptions.map((option) => (
            <a
              key={option.id}
              href={option.link}
              target={option.target}
              rel={option.target === "_blank" ? "noopener noreferrer" : ""}
              className="delivery-card group hover:-translate-y-2 transition-transform duration-300 block"
            >
              <div className="flex flex-col items-center justify-between h-full text-center">
                <div className="w-24 h-24 mb-6 flex items-center justify-center p-1 rounded-2xl bg-white shadow-md border border-gray-100 group-hover:border-[#e6392b] group-hover:shadow-lg transition-all mx-auto overflow-hidden">
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
                <div>
                  {/* MUDANÇA: Aumentado de text-xl para text-2xl */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {option.name}
                  </h3>
                  {/* MUDANÇA: Aumentado de text-sm para text-base, e cor mais escura (text-gray-700) para melhor leitura no fundo branco */}
                  <p className="text-base text-gray-700 mb-6">{option.desc}</p>
                </div>

                {/* Botão Fake */}
                <div className="btn-primary w-full text-center rounded-lg mt-auto text-base font-bold py-3">
                  {option.cta}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
