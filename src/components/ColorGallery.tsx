import emeraldImg from "@/assets/abaya-emerald.webp";
import burgundyImg from "@/assets/abaya-burgundy.webp";
import blackImg from "@/assets/abaya-black.webp";
import navyImg from "@/assets/abaya-navy.webp";
import fuchsiaImg from "@/assets/abaya-fuchsia.webp";

const galleryColors = [
  { id: "emerald", name: "أخضر زمردي", img: emeraldImg },
  { id: "burgundy", name: "أحمر ملكي", img: burgundyImg },
  { id: "black", name: "أسود أنيق", img: blackImg },
  { id: "navy", name: "أزرق غامق", img: navyImg },
  { id: "fuchsia", name: "وردي حيوي", img: fuchsiaImg },
];

const ColorGallery = () => {
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* New "Showcase" Headline */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl text-charcoal mb-3">اكتشفي الألوان المتوفرة</h2>
          <p className="font-body text-charcoal/70 max-w-md mx-auto">
            خمسة ألوان ساحرة اخترناها بعناية لتناسب ذوقك الرفيع. تصفحي الصور واختاري لونك المفضل في استمارة الطلب أسفله.
          </p>
        </div>

        {/* Beautiful Image Grid (No buttons or selection logic) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryColors.map((color) => (
            <div key={color.id} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-3 shadow-sm border border-charcoal/5">
                <img
                  src={color.img}
                  alt={`عباية بيتش - ${color.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-body font-bold text-charcoal text-lg">{color.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ColorGallery;