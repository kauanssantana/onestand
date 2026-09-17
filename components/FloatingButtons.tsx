"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "../lib/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Botão Voltar ao Topo */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="bg-white text-one-textDark p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all border border-gray-200"
          aria-label="Voltar ao topo"
        >
          ⬆️
        </button>
      )}

      {/* Botão WhatsApp */}
      <a
        href={siteData.company.menuLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center text-xl"
        aria-label="Fazer pedido no WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
