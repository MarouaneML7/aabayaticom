import { useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header"; // 👈 استيراد الهيدر هنا
import HeroSection from "@/components/HeroSection";
import ProductVideo from "@/components/ProductVideo"; 
import CompleteLookCard from "@/components/CompleteLookCard";
import ColorGallery from "@/components/ColorGallery";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials";
import UrgencySection from "@/components/UrgencySection";
import OrderForm from "@/components/OrderForm";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  useEffect(() => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'ViewContent');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <AnnouncementBar />
      <Header /> {/* 👈 إضافة اللوجو هنا */}
      <HeroSection />
      <ProductVideo /> 
      <CompleteLookCard />
      <ColorGallery />
      <ProductSpecs />
      <Testimonials />
      <UrgencySection />
      <OrderForm />
      <FAQ />
      <div className="h-28 bg-alabaster" />
      <StickyCTA />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;