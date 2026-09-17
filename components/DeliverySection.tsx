import React from "react";
import { siteData } from "../lib/data";

export default function DeliverySection() {
  return (
    <section className="delivery-section" id="delivery">
      <div className="delivery-container">
        <span className="menu-badge">Peça onde estiver</span>
        <h2 className="menu-title mt-3">
          Opções de <span className="text-secondary">Delivery</span> & Retirada
        </h2>
        <p className="menu-subtitle mb-10">
          Quer curtir o sabor grelhado no fogo em casa? Escolha a sua plataforma
          favorita ou peça direto com a gente!
        </p>

        <div className="delivery-grid">
          {/* Card WhatsApp */}
          <div className="delivery-card">
            <div>
              <div className="text-4xl mb-4">💬</div>
              <h3>Pedido Direto (WhatsApp)</h3>
              <p>
                Atendimento rápido com o nosso robô ou atendentes. Ganhe
                benefícios exclusivos!
              </p>
            </div>
            <a
              href={siteData.company.menuLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                textAlign: "center",
                display: "block",
                borderRadius: "8px",
                backgroundColor: "#059669",
              }}
            >
              Pedir no WhatsApp
            </a>
          </div>

          {/* Card Salão */}
          <div className="delivery-card">
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h3>Retirada & Salão</h3>
              <p>
                Venha conhecer o 1º Robô Garçom de SP e aproveitar nosso espaço
                kids no Grajaú!
              </p>
            </div>
            <a
              href="#contato"
              className="btn-primary"
              style={{
                textAlign: "center",
                display: "block",
                borderRadius: "8px",
              }}
            >
              Ver Endereço
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
