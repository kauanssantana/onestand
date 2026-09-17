import React from "react";

export default function LocationSection() {
  return (
    <section className="location-section" id="contato">
      <div className="location-container">
        <div className="location-info">
          <span className="menu-badge">Venha nos visitar</span>
          <h2 className="location-title">
            Onde <span className="text-secondary">Estamos</span>
          </h2>
          <p className="location-desc">
            Estamos localizados no Grajaú, São Paulo - SP. Traga a família para
            conhecer o nosso espaço com atendimento robótico e área kids!
          </p>
          <div className="location-details">
            <p>
              <strong>📍 Endereço:</strong> Grajaú, São Paulo - SP
            </p>
            <p>
              <strong>⏰ Horário:</strong> Terça a Domingo, das 18h às 23h
            </p>
          </div>
        </div>

        {/* Mapa Embutido */}
        <div className="location-map-box">
          <iframe
            title="Mapa One Stand"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.123456789!2d-46.7!3d-23.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMlDCsDQyJzAwLjAiUyA0NsKwNDInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
