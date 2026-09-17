"use client";

import React, { useState } from "react";
import { categories, menuItems } from "../lib/data";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("destaques");

  const filteredItems = menuItems.filter(
    (item) => item.categoryId === activeCategory,
  );

  return (
    <section className="menu-section" id="cardapio">
      {/* Vídeo de Fundo Claro (menu-bg) */}
      <video autoPlay loop muted playsInline className="menu-video-bg">
        <source src="/video/menu-bg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos de fundo.
      </video>

      <div className="menu-container">
        {/* Cabeçalho */}
        <div className="menu-header">
          <span className="menu-badge">Grelhado na Brasa</span>
          <h2 className="menu-title text-one-textDark">
            Nosso <span className="text-one-secondary">Cardápio</span>
          </h2>
          <p className="menu-subtitle text-one-textMuted">
            Hambúrgueres artesanais feitos com ingredientes selecionados.
            <br />
            <strong className="text-one-primary font-bold">
              Benefícios em comprar direto no nosso site: +20% de desconto em
              relação às Plataformas
            </strong>
          </p>
        </div>

        {/* Filtro de Categorias Dinâmico */}
        <div className="menu-categories-wrapper">
          <div className="menu-category-scroll">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`menu-category-btn ${activeCategory === category.id ? "active" : ""}`}
              >
                <div className="category-icon-wrapper">
                  <img src={category.icon} alt={category.name} />
                </div>
                <span className="category-label text-one-textDark">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="menu-card-content">
                  <div>
                    <div className="menu-card-header">
                      <h3 className="menu-card-title">{item.name}</h3>
                      <span className="menu-card-price">{item.price}</span>
                    </div>
                    <p className="menu-card-desc">{item.description}</p>
                  </div>

                  <a
                    href={item.link}
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
                    Pedir Agora
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="menu-empty-message text-one-textDark">
              Em breve adicionaremos opções nesta categoria!
            </div>
          )}
        </div>

        {/* CTA Inferior */}
        <div className="menu-footer-cta">
          <a
            href="https://shop.beetech.com.br/oneburger/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Verificar mais opções
          </a>
        </div>
      </div>
    </section>
  );
}
