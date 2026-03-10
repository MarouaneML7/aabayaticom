const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/212772967342" // ضع رقمك هنا
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-50 hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
      aria-label="تواصل معنا على الواتساب"
    >
      {/* شعار الواتساب الكامل والاحترافي */}
      <svg viewBox="0 0 32 32" className="w-16 h-16 drop-shadow-2xl">
        <path d="M16 2a13 13 0 0 0-11 20l-2 5 5-2a13 13 0 1 0 8-23z" fill="#25D366"/>
        <path d="M22 20c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.1-.7-.6-1.2-1.3-1.4-1.5-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.2-.2.2-.4.1-.2 0-.3-.1-.4-.1-.2-.6-1.5-.8-2.1-.2-.6-.4-.5-.5-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" fill="#FFF"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;