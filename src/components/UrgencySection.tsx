const UrgencySection = () => {
  return (
    <section className="px-5 py-12 text-center">
      <h2 className="font-display text-2xl text-foreground mb-4">
        العيد قرب! ⏳
      </h2>
      <p className="font-body text-base text-muted-foreground font-light mb-6 max-w-sm mx-auto leading-relaxed">
        طلبي دابا باش تحجزي اللون ديالك قبل ما يسالي المخزون.
      </p>

      {/* Elegant progress bar instead of countdown */}
      <div className="max-w-xs mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="font-body text-xs text-gold font-bold">تم حجز %85</span>
          <span className="font-body text-xs text-muted-foreground">المخزون المتبقي</span>
        </div>
        <div className="w-full h-2 bg-sand rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-1000"
            style={{ width: "85%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
