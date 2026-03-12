import { Maximize2, Ruler, Snowflake, Shirt } from "lucide-react";

const specs = [
  {
    icon: Maximize2,
    title: "فصالة فراشة واسعة",
    desc: "من L حتى XXXL",
  },
  {
    icon: Ruler,
    title: "طول 1.45 متر",
    desc: "مثالي للمرأة المغربية",
  },
  {
    icon: Snowflake,
    title: "ثوب بارد وما كيتكمشش",
    desc: "بيتش كريب ممتاز",
  },
  {
    icon: Shirt,
    title: "الشال متضمن في الثمن",
    desc: "متناسق مع خطوط العباية",
  },
];

const ProductSpecs = () => {
  return (
    <section className="bg-sand px-5 py-12">
      <h2 className="font-display text-2xl text-center text-foreground mb-8">
        التفاصيل اللي غادي تعجبك
      </h2>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {specs.map((spec) => (
          <div
            key={spec.title}
            className="bg-background rounded-lg p-5 text-right"
          >
            <spec.icon className="w-6 h-6 text-gold mb-3" strokeWidth={1} />
            <h3 className="font-body font-bold text-foreground text-sm mb-1">
              {spec.title}
            </h3>
            <p className="font-body text-xs text-muted-foreground font-light">
              {spec.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSpecs;