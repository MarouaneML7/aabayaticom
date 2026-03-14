import heroImage from "@/assets/abaya-emerald.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="عباية بيتش الفاخرة - اللون الأخضر الزمردي"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
      </div>

      {/* Content at the bottom */}
      <div className="relative mt-auto px-5 pb-10 pt-16 text-right w-full max-w-md mx-auto">
        <h1 className="font-display text-3xl leading-snug text-alabaster mb-3">
          الأناقة الكاملة لعيد 2026
          <br />
          <span className="text-gold">عباية "بيتش" الفاخرة بالشال ديالها</span> ✨
        </h1>

        <p className="font-body text-base font-light text-alabaster/90 mb-6 leading-relaxed">
          وفري عليك عناء البحث! طقم متكامل كيجمع بين الحشمة والجمال، متوفر بألوان ساحرة وفصالة مريحة كتناسب الجميع.
        </p>

        {/* Price tag */}
        <div className="inline-flex items-center gap-3 bg-alabaster/10 backdrop-blur-md rounded-lg px-5 py-3 border border-alabaster/20 mb-6">
          <span className="font-body text-sm text-gold font-bold">عرض خاص للعيد</span>
          <span className="font-body text-3xl font-extrabold text-alabaster">270</span>
          <span className="font-body text-lg text-alabaster/80">درهم</span>
        </div>

        {/* 🚨 الزر السحري الجديد للقفز نحو الاستمارة 🚨 */}
        <a 
          href="#order" 
          className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-red-700 transition-all active:scale-95 text-lg text-center flex items-center justify-center gap-2 animate-bounce border-2 border-red-400/50"
        >
          <span className="text-2xl drop-shadow-md">👇</span>
          <span>اطلبي دابا قبل ميسالي الستوك</span>
          <span className="text-2xl drop-shadow-md">👇</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;