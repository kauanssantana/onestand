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
            A primeira hamburgueria com atendimento robótico em São Paulo. Sabor
            e inovação no Grajaú.
          </p>
        </div>

        {/* Coluna 2: Navegação Atualizada */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <ul className="footer-links">
            <li>
              <Link href="#sobre" className="footer-link">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#cardapio" className="footer-link">
                Cardápio
              </Link>
            </li>
            <li>
              <Link href="#delivery" className="footer-link">
                Opções de Delivery
              </Link>
            </li>
            <li>
              <Link href="#avaliacoes" className="footer-link">
                Avaliações
              </Link>
            </li>
            <li>
              <Link href="#contato" className="footer-link">
                Localização
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais e Contato */}
        <div className="footer-col">
          <h4>Fale Connosco</h4>
          <div className="flex flex-col gap-4 mt-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5511966582313"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current group-hover:text-[#25D366] transition-colors"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>+55 11 96658-2313</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/onestandhamburgueria/?hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current group-hover:text-[#E1306C] transition-colors"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>@onestandhamburgueria</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@one.stand.hamburg"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link group"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current group-hover:text-[#69C9D0] transition-colors"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.37-3.4-5.74.06-2.52 1.83-4.9 4.31-5.59 1.13-.33 2.33-.31 3.48-.12.02 1.42-.01 2.84.02 4.26-.64-.22-1.35-.29-2.02-.13-.91.17-1.74.88-2.12 1.74-.46 1.04-.38 2.33.26 3.28.84 1.25 2.64 1.7 4.09.92 1.05-.56 1.73-1.69 1.76-2.91.07-5.74.02-11.49.04-17.23h1.86z" />
              </svg>
              <span>@one.stand.hamburg</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright e Créditos de Desenvolvimento */}
      <div className="footer-bottom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} One Stand Hamburgueria. Todos os
            direitos reservados.
          </p>
          <p>
            Feito por{" "}
            <a
              href="https://portfoliokauan.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white font-bold transition-colors underline decoration-secondary decoration-2 underline-offset-4"
            >
              Kauan Santana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
