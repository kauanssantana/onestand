import Hero from "@/components/Hero";
import BannerCarousel from "@/components/BannerCarousel";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import DeliverySection from "@/components/DeliverySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BannerCarousel /> {/* Banners vêm primeiro agora */}
      <AboutSection /> {/* A seção sobre vem logo abaixo */}
      <MenuSection />
      <DeliverySection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
