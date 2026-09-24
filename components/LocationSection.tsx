import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function LocationSection() {
  return (
    <section className="location-section" id="contato">
      <div className="location-container">
        {/* Informações vêm da esquerda */}
        <div className="location-info">
          <ScrollReveal animation="fade-right">
            <h2 className="location-title">
              Onde <span className="text-secondary">Estamos</span>
            </h2>
            <p className="location-desc">
              Estamos localizados no Grajaú, São Paulo - SP. Traga a família
              para conhecer o nosso espaço com atendimento robótico e área kids!
            </p>

            <div className="location-details">
              <p className="mb-4">
                {/* Reduzido de text-2xl para text-lg */}
                <strong className="text-secondary text-lg block mb-1">
                  Endereço:
                </strong>
                R. Jequirituba, 1510 - Parque America, São Paulo - SP, 04822-000
              </p>

              <div className="mt-6">
                {/* Reduzido de text-2xl para text-lg */}
                <strong className="text-secondary text-lg block mb-2">
                  Horário de Funcionamento:
                </strong>
                <ul className="mt-2 space-y-1 list-none text-gray-100">
                  <li>
                    <strong>Segunda a Sexta:</strong> 17:00 – 23:30
                  </li>
                  <li>
                    <strong>Sábado:</strong> 17:30 – 23:30
                  </li>
                  <li>
                    <strong>Domingo:</strong> 17:00 – 23:25
                  </li>
                </ul>
                {/* Reduzido de text-xl para text-base */}
                <p className="mt-4 text-secondary font-bold text-base uppercase tracking-wide">
                  Entrega: 18:00 – 23:30
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mapa vem da direita */}
        <div className="location-map-box">
          <ScrollReveal
            animation="fade-left"
            delay={200}
            className="w-full h-full"
          >
            <iframe
              title="Mapa One Stand"
              src="https://maps.google.com/maps?q=Rua%20Jequirituba,%201510%20-%20Parque%20America,%20Sao%20Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "400px",
                borderRadius: "8px",
              }} /* Reduzido para 400px */
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
