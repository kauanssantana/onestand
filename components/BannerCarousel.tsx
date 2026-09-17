"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Medimos a largura real do contêiner e do primeiro slide já
  // renderizado pelo navegador, em vez de tentar replicar as mesmas
  // porcentagens via outro truque de CSS (que é frágil e pode
  // dessincronizar do valor real, como aconteceu com o overlay
  // inset-0 + w-[%] + mx-auto). Com os valores reais em mãos, tanto
  // o deslocamento do carrossel quanto a posição das setas usam
  // exatamente a mesma fonte de verdade.
  const [containerWidth, setContainerWidth] = useState(0);
  const [slideWidthPx, setSlideWidthPx] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);
  const firstSlideRef = useRef<HTMLDivElement>(null);

  const banners = [
    { id: 1, image: "/img/banner-1.png", alt: "Destaque 1" },
    { id: 2, image: "/img/banner-2.png", alt: "Destaque 2" },
    { id: 3, image: "/img/banner-3.png", alt: "Destaque 3" },
    { id: 4, image: "/img/banner-4.png", alt: "Destaque 4" },
  ];

  useEffect(() => {
    const viewportEl = viewportRef.current;
    const slideEl = firstSlideRef.current;
    if (!viewportEl || !slideEl) return;

    // Usamos o contentRect que o próprio ResizeObserver entrega em
    // cada entrada, em vez de chamar getBoundingClientRect() de novo
    // dentro do callback. Isso evita depender de uma leitura separada
    // do DOM que, em alguns casos, pode capturar um instante em que o
    // layout ainda não terminou de se estabilizar (foi exatamente o
    // que causou o slideWidthPx: 0px que você viu no debug).
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        if (entry.target === viewportEl) setContainerWidth(width);
        if (entry.target === slideEl) setSlideWidthPx(width);
      }
    });
    resizeObserver.observe(viewportEl);
    resizeObserver.observe(slideEl);

    // Rede de segurança: nos primeiros frames após montar, também
    // conferimos via getBoundingClientRect(). Se por qualquer motivo
    // a primeira leitura do ResizeObserver vier zerada (ex.: fontes
    // ou imagens ainda carregando, mudando o layout um instante
    // depois), isso corrige sozinho sem precisar de nenhuma ação do
    // usuário.
    let frame = 0;
    let rafId: number;
    const recheck = () => {
      const cw = viewportEl.getBoundingClientRect().width;
      const sw = slideEl.getBoundingClientRect().width;
      if (cw > 0) setContainerWidth(cw);
      if (sw > 0) setSlideWidthPx(sw);
      frame += 1;
      if (frame < 20) rafId = requestAnimationFrame(recheck);
    };
    rafId = requestAnimationFrame(recheck);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // offsetPx é a folga de cada lado quando o card ativo está
  // centralizado — e, por construção, essa é SEMPRE a posição (em px,
  // a partir da esquerda do contêiner) onde a borda esquerda do card
  // ativo cai, não importa qual seja o currentIndex. Por isso dá pra
  // usar o mesmo valor para posicionar as duas setas.
  const offsetPx = (containerWidth - slideWidthPx) / 2;
  const translateX = -1 * currentIndex * slideWidthPx + offsetPx;

  return (
    <section
      className="bg-one-bgLight overflow-hidden relative"
      style={{
        paddingTop: "150px",
        paddingBottom: "300px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container geral com group para ativar o hover das setas */}
      <div
        ref={viewportRef}
        className="w-full relative group max-w-screen-2xl mx-auto"
      >
        {/* Trilha do Carrossel (Efeito Center-Peeking) */}
        <div
          className="flex transition-transform duration-500 ease-out h-[240px] sm:h-[340px] md:h-[450px] lg:h-[550px] xl:h-[620px]"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              ref={index === 0 ? firstSlideRef : undefined}
              className="shrink-0 w-[90%] md:w-[80%] lg:w-[75%] xl:w-[65%] px-2 md:px-4 h-full"
            >
              {/* Container da imagem com fundo #EA7611 */}
              <div
                className={`w-full h-full rounded-2xl overflow-hidden shadow-xl transition-all duration-500 bg-[#EA7611] ${
                  currentIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-40 scale-95"
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Setas de navegação — posicionadas em px reais, exatamente
            na borda do card ativo (offsetPx é igual dos dois lados) */}
        <button
          onClick={prevSlide}
          style={{ left: offsetPx }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white hover:bg-one-primary text-[#3A1010] hover:text-white p-3 md:p-4 rounded-full shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center z-30"
          aria-label="Banner anterior"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        <button
          onClick={nextSlide}
          style={{ right: offsetPx }}
          className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 bg-white hover:bg-one-primary text-[#3A1010] hover:text-white p-3 md:p-4 rounded-full shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center z-30"
          aria-label="Próximo banner"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>

        {/* Indicadores (Bolinhas) */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10 px-3 py-1.5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? "bg-one-primary w-10"
                  : "bg-gray-300 hover:bg-one-secondary w-2.5"
              }`}
              aria-label={`Ir para o banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
