const faqs = [
  {
    q: "واش الشال داخل فالثمن ديال 270 درهم؟",
    a: "نعم! العرض كيشمل العباية بالإضافة للشال ديالها لي كيجي متناسق تماماً مع لون الخطوط لي فالعباية مجاناً."
  },
  {
    q: "شحال ثمن التوصيل وشحال كياخد ديال الوقت؟",
    a: "التوصيل فابور (مجاني) لجميع المدن المغربية! 🇲🇦 وكياخد بين 24 و 48 ساعة باش توصلك السلعة حتال باب الدار."
  },
  {
    q: "واش نقدر نشوف السلعة ونقلبها قبل ما نخلص؟",
    a: "أكيد! من حقك تشوفي السلعة ديالك وتقلبي الثوب، عاد تخلصي للموزع."
  }
];

const FAQ = () => {
  const handleWhatsAppClick = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <section className="py-16 px-5 bg-alabaster">
      <div className="max-w-3xl mx-auto text-right">
        <h2 className="font-display text-3xl text-charcoal mb-8 text-center">أسئلة شائعة</h2>
        
        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-charcoal/10">
              <h3 className="font-bold text-lg text-charcoal mb-2">{faq.q}</h3>
              <p className="text-charcoal/70">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-green-500 text-center shadow-md">
          <p className="font-bold text-lg text-charcoal mb-4">
            إلا مالقيتيش الجواب للسؤال ديالك، تواصلي معانا في الواتساب وغنجاوبوك فوراً 💬
          </p>
          <a
            href="https://wa.me/212669711070"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1ebe57] transition-colors shadow-lg active:scale-95"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
            </svg>
            تواصلي معانا فالواتساب
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;