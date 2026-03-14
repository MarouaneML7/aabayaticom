const reviews = [
  {
    name: "فاطمة الزهراء",
    city: "الدار البيضاء",
    text: "وصلاتني العباية ليوم.. الثوب كيحمق ومطلوق، شكرا AabayatiCom على التعامل الزوين.",
  },
  {
    name: "خديجة",
    city: "مراكش",
    text: "اللون الأخضر الزمردي جا واعر فاللبسة، والفصالة مريحة بزاف. أكيد غنولي كليانة ديالكم.",
  },
  {
    name: "سناء",
    city: "طنجة",
    text: "عجبني بزاف حيت الشال جاي فنفس اللون والثوب. التوصيل كان سريع والسلعة نقية.",
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl text-charcoal mb-3">شنو قالوا الكليانات ديالنا</h2>
          <p className="font-body text-charcoal/70">أكثر من 5000 سيدة مغربية تيقوا فـ AabayatiCom</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-alabaster p-6 rounded-2xl shadow-sm border border-charcoal/5 flex flex-col h-full">
              {/* التعديل 1: justify-start لتبقى النجوم في اليمين */}
              <div className="flex gap-1 mb-3 justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-charcoal/80 text-right mb-6 font-medium leading-relaxed flex-grow">
                "{review.text}"
              </p>
              
              {/* التعديل 2: justify-start ليبقى الأفاتار والاسم في اليمين بشكل طبيعي */}
              <div className="flex items-center justify-start gap-3 mt-auto pt-4 border-t border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xl border border-gold/20 shadow-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="text-right">
                  <p className="font-bold text-charcoal">{review.name}</p>
                  <p className="text-sm text-charcoal/50">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;