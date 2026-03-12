const ProductVideo = () => {
  return (
    <section className="py-16 bg-alabaster overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <h2 className="font-display text-3xl text-charcoal mb-3">شوفي العباية في اللبسة ✨</h2>
        <p className="font-body text-charcoal/70 mb-8 max-w-md mx-auto">
          لاحظي كيفاش ثوب "بيتش" كيطيح، والفصالة كيفاش مريحة في الحركة والأناقة ديالها.
        </p>

        {/* إطار الفيديو مصمم خصيصاً للموبايل */}
        <div className="relative w-full max-w-[320px] mx-auto aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 bg-charcoal/5">
          <video
            src="/abaya-video.mp4" // المسار المباشر من مجلد public
            className="w-full h-full object-cover"
            autoPlay       // يشتغل تلقائياً
            muted          // بدون صوت (إجباري ليشتغل تلقائياً في الهواتف)
            loop           // يعيد نفسه
            playsInline    // يمنع الآيفون من فتح الفيديو في شاشة كاملة
            preload="auto"
          >
            عذراً، متصفحك لا يدعم تشغيل الفيديو.
          </video>
          
          {/* تأثير بصري (Gradient) خفيف أسفل الفيديو */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductVideo;