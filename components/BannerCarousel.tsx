"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Banner = {
  id: number;
  image: string;
  alt: string;
  cloneKey?: string;
};

const banners: Banner[] = [
  { id: 1, image: "/img/banner-1.png", alt: "Destaque 1" },
  { id: 2, image: "/img/banner-2.png", alt: "Destaque 2" },
  { id: 3, image: "/img/banner-3.png", alt: "Destaque 3" },
  { id: 4, image: "/img/banner-4.png", alt: "Destaque 4" },
  { id: 5, image: "/img/banner-5.png", alt: "Destaque 5" },
  { id: 6, image: "/img/banner-6.png", alt: "Destaque 6" },
];

const extendedBanners: Banner[] = [
  { ...banners[banners.length - 3], cloneKey: "clone-pre-3" },
  { ...banners[banners.length - 2], cloneKey: "clone-pre-2" },
  { ...banners[banners.length - 1], cloneKey: "clone-pre-1" },
  ...banners,
  { ...banners[0], cloneKey: "clone-pos-1" },
  { ...banners[1], cloneKey: "clone-pos-2" },
  { ...banners[2], cloneKey: "clone-pos-3" },
];

const FIRST_REAL_INDEX = 3;
const LAST_REAL_INDEX = banners.length + 2;

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(FIRST_REAL_INDEX);
  const [isHovered, setIsHovered] = useState(false);
  const [withTransition, setWithTransition] = useState(true);
  const [slideWidthPx, setSlideWidthPx] = useState(0);

  // Estados para detectar o "Swipe" (deslizar o dedo no telemóvel)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const firstSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideEl = firstSlideRef.current;
    if (!slideEl) return;
    const updateWidth = () =>
      setSlideWidthPx(slideEl.getBoundingClientRect().width);
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(slideEl);
    updateWidth();
    return () => resizeObserver.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goToSlide = (realIndex: number) => {
    setWithTransition(true);
    setCurrentIndex(realIndex + FIRST_REAL_INDEX);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  const handleTransitionEnd = () => {
    if (currentIndex >= LAST_REAL_INDEX + 1) {
      setWithTransition(false);
      setCurrentIndex(FIRST_REAL_INDEX + (currentIndex - LAST_REAL_INDEX - 1));
    } else if (currentIndex < FIRST_REAL_INDEX) {
      setWithTransition(false);
      setCurrentIndex(LAST_REAL_INDEX - (FIRST_REAL_INDEX - currentIndex - 1));
    }
  };

  // Funções de Gestos (Swipe)
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reseta o final do toque
    setTouchStart(e.targetTouches[0].clientX);
    setIsHovered(true); // Pausa o carrossel automático
  };

  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    setIsHovered(false); // Retoma o carrossel
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // Deslizou para a esquerda (próximo)
    const isRightSwipe = distance < -50; // Deslizou para a direita (anterior)

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const realActiveIndex =
    (((currentIndex - FIRST_REAL_INDEX) % banners.length) + banners.length) %
    banners.length;
  const translateX = -1 * currentIndex * slideWidthPx;

  return (
    <section
      className="carousel-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video autoPlay loop muted playsInline className="menu-video-bg">
        <source src="/video/menu-bg.mp4" type="video/mp4" />
      </video>

      <div className="carousel-container group w-full relative z-10">
        {/* Escondemos as setas no telemóvel usando classes do Tailwind (hidden md:flex) */}
        <button
          className="carousel-btn prev hidden md:flex"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <ChevronLeft size={28} strokeWidth={3} />
        </button>

        <button
          className="carousel-btn next hidden md:flex"
          onClick={nextSlide}
          aria-label="Próximo"
        >
          <ChevronRight size={28} strokeWidth={3} />
        </button>

        {/* Envolvendo a área de slides com os eventos de Touch para o telemóvel */}
        <div
          className="carousel-track-wrapper"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="carousel-track items-center"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: withTransition ? "transform 0.4s ease-out" : "none",
            }}
          >
            {extendedBanners.map((banner, index) => (
              <div
                key={`${banner.id}-${banner.cloneKey ?? index}`}
                ref={index === FIRST_REAL_INDEX ? firstSlideRef : undefined}
                className="carousel-slide"
              >
                <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[#EA7611] flex items-center justify-center">
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className="carousel-banner-img"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-dots">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${realActiveIndex === index ? "active" : ""}`}
              aria-label={`Banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
