import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        {/* Textos */}
        <div className="about-content">
          <span className="about-badge">Inovação One Stand</span>
          <h2 className="about-title">
            Aqui o seu pedido pode chegar à mesa levado por um{" "}
            <span className="text-secondary">robô</span>.
          </h2>
          <p className="about-desc">
            Não é truque de vitrine, é como a gente atende todos os dias. A One
            nasceu pra ser diferente, e isso aparece até em quem entrega o seu
            lanche. Vem ver de perto como funciona.
          </p>

          {/* Lista limpa e estilizada para fundo escuro */}
          <ul className="about-list">
            <li>Hambúrguer Artesanal</li>
            <li>1° Robô Garçom de uma hamburgueria em SP</li>
            <li>Grelhado no fogo como churrasco</li>
            <li>Garantimos entrega RÁPIDA</li>
            <li>Temos Espaço Kids</li>
            <li>Todos os dias (exceto o último domingo do mês)</li>
            <li>Parque América, Grajaú</li>
          </ul>

          {/* Card de Aviso (Delivery) */}
          <div className="about-alert">
            <p>
              <strong>⚠️ Peça seu delivery no Cardápio Digital.</strong>{" "}
              Lembrando que pedidos feitos pelo cardápio saem SEMPRE 20% mais
              barato.
            </p>
          </div>
        </div>

        {/* Imagem Ilustrativa */}
        <div className="about-image-box">
          <div className="about-image-wrapper">
            <img src="/img/about.png" alt="Robô Garçom One Stand" />
          </div>
        </div>
      </div>
    </section>
  );
}
