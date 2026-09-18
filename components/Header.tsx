import Link from "next/link";
import Image from "next/image";
import { siteData } from "../lib/data";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo - Tamanho 110x110 com efeito hover */}
        <div className="header-logo">
          <Link href="/">
            <Image
              src="/img/logo.jpg"
              alt="One Stand Logo"
              width={110}
              height={110}
              className="rounded-full object-cover border-2 border-[#F5A623] shadow-md transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Navegação Desktop */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <Link href="#sobre" className="nav-link">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#cardapio" className="nav-link">
                Cardápio
              </Link>
            </li>
            <li>
              <Link href="#delivery" className="nav-link">
                Opções de Delivery
              </Link>
            </li>
            <li>
              <Link href="#avaliacoes" className="nav-link">
                Avaliações
              </Link>
            </li>
            <li>
              <Link href="#contato" className="nav-link">
                Localização
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão de Ação CTA */}
        <div className="header-cta">
          <a
            href={siteData.company.menuLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Fazer Pedido
          </a>
        </div>
      </div>
    </header>
  );
}
