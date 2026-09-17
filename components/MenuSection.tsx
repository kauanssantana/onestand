import React from "react";
import { siteData } from "../lib/data";

export default function MenuSection() {
  const menuItems = [
    {
      id: 1,
      name: "One Stand Clássico",
      description:
        "Blend 160g grelhado no fogo de verdade, queijo cheddar derretido, bacon crocante, alface, tomate e molho especial da casa no pão brioche.",
      price: "R$ 32,90",
      image: "/img/burguer-hero.png",
    },
    {
      id: 2,
      name: "O Bruto Fogo de Chão",
      description:
        "Dois blends de 160g, muito queijo prato, bacon duplo, cebola caramelizada e barbecue artesanal defumado.",
      price: "R$ 44,90",
      image: "/img/burguer-hero.png",
    },
    {
      id: 3,
      name: "Robô Burger (Favorito)",
      description:
        "Pão brioche selado na manteiga, blend especial 180g, queijo emmental, bacon crispy e maionese verde de alho poró.",
      price: "R$ 38,90",
      image: "/img/burguer-hero.png",
    },
  ];

  return (
    <section className="menu-section" id="cardapio">
      <div className="menu-container">
        {/* Cabeçalho da Seção */}
        <div className="menu-header">
          <span className="menu-badge">Grelhado na Brasa</span>
          <h2 className="menu-title">
            Nosso <span className="text-secondary">Cardápio</span>
          </h2>
          <p className="menu-subtitle">
            Lanches de rua artesanais feitos com ingredientes selecionados.
            Escolha o seu e faça o pedido agora mesmo!
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              {/* Imagem do Lanche */}
              <div className="menu-card-image">
                <img src={item.image} alt={item.name} />
              </div>

              {/* Informações */}
              <div className="menu-card-content">
                <div>
                  <div className="menu-card-header">
                    <h3 className="menu-card-title">{item.name}</h3>
                    <span className="menu-card-price">{item.price}</span>
                  </div>
                  <p className="menu-card-desc">{item.description}</p>
                </div>

                {/* Botão de Ação (Reutilizando o btn-primary do Design System) */}
                <a
                  href={siteData.company.menuLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    textAlign: "center",
                    display: "block",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Inferior para o Cardápio Completo */}
        <div className="menu-footer-cta">
          <a
            href={siteData.company.menuLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Ver Cardápio Completo & Preços
          </a>
        </div>
      </div>
    </section>
  );
}
