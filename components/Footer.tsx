import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1: Sobre */}
        <div className="footer-col">
          <h3>One Stand</h3>
          <p>
            A primeira hamburgueria de rua com atendimento robótico em São
            Paulo. Sabor e inovação no Grajaú.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <ul className="footer-links">
            <li>
              <Link href="#cardapio" className="footer-link">
                Cardápio
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="footer-link">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#ofertas" className="footer-link">
                Ofertas
              </Link>
            </li>
            <li>
              <Link href="#contato" className="footer-link">
                Localização
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Horários */}
        <div className="footer-col">
          <h4>Funcionamento</h4>
          <p style={{ marginBottom: "4px" }}>Terça a Domingo</p>
          <p>18:00 às 23:00</p>
        </div>
      </div>

      {/* Copyright Inferior */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} One Stand Hamburgueria. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
