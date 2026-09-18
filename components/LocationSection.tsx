import React from "react";

export default function LocationSection() {
  return (
    <section className="location-section" id="contato">
      <div className="location-container">
        <div className="location-info">
          <h2 className="location-title">
            Onde <span className="text-secondary">Estamos</span>
          </h2>
          <p className="location-desc">
            Estamos localizados no Grajaú, São Paulo - SP. Traga a família para
            conhecer o nosso espaço com atendimento robótico e área kids!
          </p>

          {/* Detalhes de Morada e Horários - Agora sem emojis e com letras maiores */}
          <div className="location-details">
            <p className="mb-4">
              <strong className="text-secondary text-2xl block mb-1">
                Endereço:
              </strong>
              R. Jequirituba, 1510 - Parque America, São Paulo - SP, 04822-000
            </p>

            <div className="mt-8">
              <strong className="text-secondary text-2xl block mb-2">
                Horário de Funcionamento:
              </strong>
              {/* list-none tira as bolinhas, space-y-2 dá respiro entre os dias */}
              <ul className="mt-3 space-y-2 list-none text-gray-100">
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
              <p className="mt-6 text-secondary font-bold text-xl uppercase tracking-wide">
                Entrega: 18:00 – 23:30
              </p>
            </div>
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
