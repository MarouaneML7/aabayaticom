import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import CompleteLookCard from "@/components/CompleteLookCard";
import ColorGallery from "@/components/ColorGallery";
import ProductSpecs from "@/components/ProductSpecs";
import UrgencySection from "@/components/UrgencySection";
import OrderForm from "@/components/OrderForm";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <AnnouncementBar />
      <HeroSection />
      <CompleteLookCard />
      <ColorGallery />
      <ProductSpecs />
      <UrgencySection />
      
      {/* The New COD Form Section */}
      <OrderForm />

      {/* Footer spacer for sticky CTA */}
      <div className="h-24" />

      <StickyCTA />
    </div>
  );
};

export default Index;