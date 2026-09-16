import Link from "next/link";
import Image from "next/image";
import { siteData } from "../lib/data";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link href="/">
            <Image
              src="/img/logo.jpg"
              alt="One Stand Logo"
              width={80} // Largura igual à altura
              height={80} // Altura igual à largura
              className="rounded-full object-cover border-2 border-[#F5A623] shadow-md"
            />
          </Link>
        </div>

        {/* Navegação Desktop */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <Link href="#cardapio" className="nav-link">
                Cardápio
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="nav-link">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#ofertas" className="nav-link">
                Ofertas
              </Link>
            </li>
            <li>
              <Link href="#contato" className="nav-link">
                Contato
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
