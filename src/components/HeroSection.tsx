import heroImage from "@/assets/abaya-emerald.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[88svh] min-h-[600px] flex flex-col overflow-hidden">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="عباية بيتش الفاخرة - اللون الأخضر الزمردي"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* التعديل 1: تدرج لوني أسود قوي من الأسفل، يتلاشى بنعومة للأعلى */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5" />
      </div>

      {/* Content at the bottom */}
      <div className="relative mt-auto px-5 pb-28 pt-16 text-right w-full max-w-md mx-auto z-10">
        
        {/* التعديل 2: إضافة drop-shadow-xl للنصوص لكي تبرز وتنفصل عن الصورة */}
        <h1 className="font-display text-3xl md:text-4xl leading-snug text-white mb-3 drop-shadow-xl">
          الأناقة الكاملة لعيد 2026
          <br />
          <span className="text-gold drop-shadow-lg">عباية "بيتش" الفاخرة بالشال ديالها</span> ✨
        </h1>

        <p className="font-body text-base font-medium text-white/95 mb-5 leading-relaxed drop-shadow-lg">
          وفري عليك عناء البحث! طقم متكامل كيجمع بين الحشمة والجمال، متوفر بألوان ساحرة وفصالة مريحة كتناسب الجميع.
        </p>

        {/* التعديل 3: بطاقة السعر أصبحت بخلفية زجاجية داكنة (bg-black/40) لتبرز الأرقام البيضاء */}
        <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-lg px-5 py-3 border border-white/10 mb-5 shadow-2xl">
          <span className="font-body text-sm text-gold font-bold drop-shadow-md">عرض خاص للعيد</span>
          <span className="font-body text-3xl font-extrabold text-white drop-shadow-lg">270</span>
          <span className="font-body text-lg text-white/90">درهم</span>
        </div>

        {/* مؤشر حركي أنيق */}
        <div className="flex flex-col items-center justify-center mt-2 opacity-90 animate-pulse drop-shadow-md">
          <span className="text-white/90 text-sm mb-1 font-medium">هبطي تشوفي اللوينات والفيديو</span>
          <svg className="w-6 h-6 text-gold animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;