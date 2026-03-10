import { useState, useEffect } from "react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // This watches the screen to see if the form is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the order form is on screen, hide the CTA (set isVisible to false)
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Triggers when 10% of the form becomes visible
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

  const scrollToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-500 pointer-events-none ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-gradient-to-t from-background via-background to-background/0 absolute inset-0 -z-10" />
      <a
        href="#order"
        onClick={scrollToOrder}
        className="pointer-events-auto block w-full max-w-md mx-auto bg-primary text-primary-foreground font-body font-bold text-lg text-center py-4 rounded-xl shadow-lg hover:opacity-95 transition-opacity active:scale-[0.98]"
      >
        اطلبي الآن - الدفع عند الاستلام
      </a>
    </div>
  );
};

export default StickyCTA;