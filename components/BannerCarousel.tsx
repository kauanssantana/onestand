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
];

const extendedBanners: Banner[] = [
  { ...banners[banners.length - 1], cloneKey: "clone-last" },
  ...banners,
  { ...banners[0], cloneKey: "clone-first" },
  { ...banners[1], cloneKey: "clone-second" },
];

const FIRST_REAL_INDEX = 1;
const LAST_REAL_INDEX = banners.length;

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(FIRST_REAL_INDEX);
  const [isHovered, setIsHovered] = useState(false);
  const [withTransition, setWithTransition] = useState(true);
  const [slideWidthPx, setSlideWidthPx] = useState(0);

  const firstSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideEl = firstSlideRef.current;
    if (!slideEl) return;

    const updateWidth = () => {
      setSlideWidthPx(slideEl.getBoundingClientRect().width);
    };

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(slideEl);
    updateWidth();

    return () => resizeObserver.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

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
    if (currentIndex > LAST_REAL_INDEX) {
      setWithTransition(false);
      setCurrentIndex(FIRST_REAL_INDEX);
    } else if (currentIndex < FIRST_REAL_INDEX) {
      setWithTransition(false);
      setCurrentIndex(LAST_REAL_INDEX);
    }
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

      {/* ERRO CORRIGIDO AQUI: viewportRef removido */}
      <div className="carousel-container group w-full">
        <button
          className="carousel-btn prev"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <ChevronLeft size={28} strokeWidth={3} />
        </button>

        <button
          className="carousel-btn next"
          onClick={nextSlide}
          aria-label="Próximo"
        >
          <ChevronRight size={28} strokeWidth={3} />
        </button>

        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: withTransition
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {extendedBanners.map((banner, index) => (
              <div
                key={`${banner.id}-${banner.cloneKey ?? index}`}
                ref={index === FIRST_REAL_INDEX ? firstSlideRef : undefined}
                className="carousel-slide"
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="carousel-banner-img"
                />
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
