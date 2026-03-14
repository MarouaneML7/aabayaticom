import emerald1 from "@/assets/abaya-emerald.jpg";
import emerald2 from "@/assets/abaya-emerald-2.jpg";
import blackBeige from "@/assets/abaya-black-beige.jpg";
import navyPink from "@/assets/abaya-navy-pink.jpg";

const detailImages = [
  { 
    id: 1, 
    img: emerald1, 
    title: "فصالة فراشة (Papillon)", 
    desc: "فصالة عريضة ومريحة كتعطي هيبة وكتوالم جميع المقاسات بكل أناقة." 
  },
  { 
    id: 2, 
    img: emerald2, 
    title: "ثوب بيتش كريب", 
    desc: "ثوب طايح (Flowy)، بارد، والأهم أنه ماكيتكمشش بلا مصلوح." 
  },
  { 
    id: 3, 
    img: blackBeige, 
    title: "الشال المرافق", 
    desc: "شال كبير وعريض مخدوم بنفس الثوب واللون باش يكمل اللوك ديالك." 
  },
  { 
    id: 4, 
    img: navyPink, 
    title: "خياطة متقونة", 
    desc: "فينيسيون نقية من الداخل وبرا للعيالات لي كيبغيو الهمة والجودة." 
  },
];

const ProductDetailsGallery = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 mb-8 text-center">
        <h2 className="font-display text-3xl text-charcoal mb-3">شوفي العباية عن قرب</h2>
        <p className="font-body text-charcoal/70">
          دوزي الصور بصباعك باش تشوفي تفاصيل الخياطة والثوب ✨
        </p>
        {/* التلميح البصري الجديد لمنع النقرات المتكررة */}
        <p className="inline-block mt-3 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold border border-red-100">
          🔍 الصور واضحة بدون الحاجة للتكبير (Zoom)
        </p>
      </div>

      {/* Swipeable Mobile Gallery */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-5 pb-8 w-full">
        {detailImages.map((item) => (
          <div 
            key={item.id} 
            className="min-w-[85vw] md:min-w-[300px] flex-shrink-0 snap-center flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-charcoal/10 mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-bold text-lg text-charcoal mb-1">{item.title}</h3>
            <p className="text-sm text-charcoal/70 text-center max-w-[280px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProductDetailsGallery;