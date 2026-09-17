import React from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Carlos Silva",
      text: "O hambúrguer grelhado na brasa é sensacional! E meu filho amou ver o robô trazendo o pedido na mesa. Nota 10!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mariana Souza",
      text: "Melhor hamburgueria do Grajaú com certeza. Atendimento rápido, lanche suculento e ambiente super familiar.",
      rating: 5,
    },
    {
      id: 3,
      name: "Lucas Oliveira",
      text: "O ponto da carne estava perfeito e o bacon bem crocante. Valeu muito a pena a visita!",
      rating: 5,
    },
  ];

  return (
    <section className="reviews-section" id="avaliacoes">
      <div className="reviews-container">
        <h2 className="menu-title mb-2">
          O que dizem <span className="text-secondary">Nossos Clientes</span>
        </h2>
        <p className="menu-subtitle">
          A opinião de quem já provou a experiência One Stand.
        </p>

        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <p className="review-text">“{rev.text}”</p>
              <div>
                <div className="review-stars">{"★".repeat(rev.rating)}</div>
                <h4 className="review-author">{rev.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
