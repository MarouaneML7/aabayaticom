import { useState } from "react";

import abayaBlack from "@/assets/abaya-black.jpg";
import abayaBurgundy from "@/assets/abaya-burgundy.jpg";
import abayaEmerald from "@/assets/abaya-emerald.jpg";
import abayaFuchsia from "@/assets/abaya-fuchsia.jpg";
import abayaNavy from "@/assets/abaya-navy.jpg";

const colors = [
  { name: "أخضر زمردي", image: abayaEmerald, swatch: "#0D6B4F" },
  { name: "أحمر ملكي", image: abayaBurgundy, swatch: "#8B1A3A" },
  { name: "أسود كلاسيكي", image: abayaBlack, swatch: "#1A1A1A" },
  { name: "وردي فوشيا", image: abayaFuchsia, swatch: "#B76E8B" },
  { name: "أزرق غامق", image: abayaNavy, swatch: "#1B2A4A" },
];

const ColorGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 px-5">
      <h2 className="font-display text-2xl text-center text-foreground mb-8">
        اختاري اللون ديالك
      </h2>

      {/* Main image in arch frame */}
      <div className="max-w-sm mx-auto mb-6">
        <div className="arch-frame aspect-[3/4] bg-sand">
          <img
            src={colors[activeIndex].image}
            alt={colors[activeIndex].name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>
        <p className="text-center font-body font-bold text-foreground mt-4 text-lg">
          {colors[activeIndex].name}
        </p>
      </div>

      {/* Color swatches */}
      <div className="flex justify-center gap-3 mt-6">
        {colors.map((color, index) => (
          <button
            key={color.name}
            onClick={() => setActiveIndex(index)}
            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
              activeIndex === index
                ? "border-gold scale-110 shadow-lg"
                : "border-border hover:border-gold/50"
            }`}
            style={{ backgroundColor: color.swatch }}
            aria-label={color.name}
          />
        ))}
      </div>
    </section>
  );
};

export default ColorGallery;
