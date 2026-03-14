import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // مراقبة استمارة الطلب لإخفاء زر الواتساب عند الوصول إليها
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, 
      }
    );

    const orderSection = document.getElementById("order");
    if (orderSection) {
      observer.observe(orderSection);
    }

    return () => {
      if (orderSection) observer.unobserve(orderSection);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // إرسال حدث Contact للبيكسل
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <div 
      className={`fixed bottom-24 right-4 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/212669711070" // ضع رقمك هنا
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center hover:scale-110 transition-transform animate-bounce-slow"
        aria-label="تواصل معنا على الواتساب"
      >
        <svg viewBox="0 0 32 32" className="w-14 h-14 drop-shadow-2xl">
          <path fill="#25D366" d="M16 31.8c-2.7 0-5.4-.7-7.7-2l-7.5 2 2-7.3c-1.4-2.4-2.2-5.2-2.2-8 0-8.6 7-15.6 15.6-15.6s15.6 7 15.6 15.6-7.1 15.3-15.8 15.3z"/>
          <path fill="#FFF" d="M23.1 20.3c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.1-.2.3-.9 1.2-1.2 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.5-1.7-1.6-2-.2-.3 0-.5.2-.7.2-.2.4-.4.5-.7.2-.2.3-.4.4-.7s0-.5-.1-.7c-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.4 7 6.1 1 .4 1.8.6 2.4.8.9.3 1.8.2 2.5.1.8-.1 2.2-.9 2.5-1.7.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;