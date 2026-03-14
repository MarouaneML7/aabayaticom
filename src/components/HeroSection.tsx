import heroImage from "@/assets/abaya-emerald.jpg";

const HeroSection = () => {
  return (
    // التعديل 1: استخدام h-[88svh] لكي يظهر جزء من القسم التالي ويشجع على الـ Scroll
    <section className="relative w-full h-[88svh] min-h-[600px] flex flex-col overflow-hidden">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="عباية بيتش الفاخرة - اللون الأخضر الزمردي"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Gradient overlay from bottom - slightly darker to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent" />
      </div>

      {/* Content at the bottom */}
      {/* التعديل 2: إضافة pb-28 لكي لا يغطي زر StickyCTA على المحتوى */}
      <div className="relative mt-auto px-5 pb-28 pt-16 text-right w-full max-w-md mx-auto">
        <h1 className="font-display text-3xl md:text-4xl leading-snug text-alabaster mb-3">
          الأناقة الكاملة لعيد 2026
          <br />
          <span className="text-gold">عباية "بيتش" الفاخرة بالشال ديالها</span> ✨
        </h1>

        <p className="font-body text-base font-light text-alabaster/90 mb-5 leading-relaxed">
          وفري عليك عناء البحث! طقم متكامل كيجمع بين الحشمة والجمال، متوفر بألوان ساحرة وفصالة مريحة كتناسب الجميع.
        </p>

        {/* Price tag */}
        <div className="inline-flex items-center gap-3 bg-alabaster/10 backdrop-blur-md rounded-lg px-5 py-3 border border-alabaster/20 mb-4">
          <span className="font-body text-sm text-gold font-bold">عرض خاص للعيد</span>
          <span className="font-body text-3xl font-extrabold text-alabaster">270</span>
          <span className="font-body text-lg text-alabaster/80">درهم</span>
        </div>

        {/* التعديل 3: مؤشر حركي أنيق يشجع على النزول لأسفل */}
        <div className="flex flex-col items-center justify-center mt-2 opacity-80 animate-pulse">
          <span className="text-alabaster/70 text-sm mb-1">هبطي تشوفي اللوينات والفيديو</span>
          <svg className="w-6 h-6 text-gold animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;