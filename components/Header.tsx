"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteData } from "../lib/data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/img/logo.jpg"
              alt="One Stand Logo"
              width={75}
              height={75}
              className="rounded-full object-cover border-2 border-[#F5A623] shadow-md transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Navegação Desktop (Escondida no mobile) */}
        <nav className="header-nav hidden lg:block">
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

        {/* Botão de Ação CTA Desktop (Escondido no mobile) */}
        <div className="header-cta hidden lg:block">
          <a
            href={siteData.company.menuLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Fazer Pedido
          </a>
        </div>

        {/* Botão Menu Hambúrguer (Apenas Mobile) */}
        <button
          className="lg:hidden text-[#f5a623] p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir Menu"
        >
          {isMobileMenuOpen ? (
            <X size={36} strokeWidth={2.5} />
          ) : (
            <Menu size={36} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* PAINEL DO MENU MOBILE */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link href="#sobre" onClick={closeMenu}>
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#cardapio" onClick={closeMenu}>
                Cardápio
              </Link>
            </li>
            <li>
              <Link href="#delivery" onClick={closeMenu}>
                Delivery
              </Link>
            </li>
            <li>
              <Link href="#avaliacoes" onClick={closeMenu}>
                Avaliações
              </Link>
            </li>
            <li>
              <Link href="#contato" onClick={closeMenu}>
                Localização
              </Link>
            </li>
            <li className="mt-4 w-full px-6">
              <a
                href={siteData.company.menuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center w-full block"
                onClick={closeMenu}
              >
                FAZER PEDIDO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
