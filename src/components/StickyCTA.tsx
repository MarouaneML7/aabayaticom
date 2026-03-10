const StickyCTA = () => {
  const scrollToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-background/0 pointer-events-none">
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