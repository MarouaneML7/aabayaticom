import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import CompleteLookCard from "@/components/CompleteLookCard";
import ColorGallery from "@/components/ColorGallery";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials"; // القسم الجديد
import UrgencySection from "@/components/UrgencySection";
import OrderForm from "@/components/OrderForm";
import FAQ from "@/components/FAQ"; // القسم الجديد
import StickyCTA from "@/components/StickyCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; // الزر العائم

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <AnnouncementBar />
      <HeroSection />
      <CompleteLookCard />
      <ColorGallery />
      <ProductSpecs />
      
      {/* التقييمات قبل الشراء */}
      <Testimonials />
      
      <UrgencySection />
      
      {/* استمارة الطلب */}
      <OrderForm />
      
      {/* الأسئلة الشائعة بعد الاستمارة */}
      <FAQ />

      {/* مساحة فارغة في الأسفل كي لا يغطي الزر على المحتوى */}
      <div className="h-28 bg-alabaster" />

      {/* الأزرار الثابتة */}
      <StickyCTA />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;