import { Gift } from "lucide-react";

const CompleteLookCard = () => {
  return (
    <section className="bg-sand px-5 py-12">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-5">
          <Gift className="w-7 h-7 text-gold" />
        </div>

        <h2 className="font-display text-2xl text-foreground mb-4">
          الطقم الكامل.. عباية + شال
        </h2>

        <p className="font-body text-base font-light text-muted-foreground leading-relaxed mb-6">
          هاد العرض فيه العباية + الشال ديالها لي كيواتي لون الخطوط لي فالعباية.. باش تكوني واجدة للعيد بأناقة وتناسق!
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold font-body">
          <span className="bg-gold/10 px-4 py-2 rounded-lg">✓ عباية فاخرة</span>
          <span className="bg-gold/10 px-4 py-2 rounded-lg">✓ شال متناسق</span>
        </div>
      </div>
    </section>
  );
};

export default CompleteLookCard;