import { useState } from "react";

// The exact colors from your affiliate platform
const availableColors = [
  { id: "green", name: "أخضر زمردي", hex: "#006A4E" },
  { id: "black", name: "أسود", hex: "#000000" },
  { id: "burgundy", name: "أحمر ملكي", hex: "#800020" },
  { id: "navy", name: "أزرق غامق", hex: "#000080" },
  { id: "fuchsia", name: "وردي", hex: "#FF00FF" },
];

const OrderForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [selectedColor, setSelectedColor] = useState<string>("green"); // Default color

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Here you would normally send the data (including selectedColor) to your backend/Google Sheet
    console.log("Order Submitted for color:", selectedColor);

    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <section id="order" className="py-12 px-5 text-center bg-white">
        <div className="max-w-md mx-auto p-8 rounded-2xl border-2 border-green-500 bg-green-50">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">تم تسجيل طلبك بنجاح!</h2>
          <p className="text-green-700">شكراً لثقتك. سنتصل بك قريباً عبر الهاتف لتأكيد العنوان وإرسال العباية.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-16 px-5 bg-alabaster">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl text-charcoal mb-2">طلب العباية الآن</h2>
          <p className="font-body text-charcoal/70">أدخلي معلوماتك أسفله وسنتصل بك لتأكيد الطلب</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* --- NEW COLOR SELECTOR SECTION --- */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-charcoal/10">
            <label className="block text-right text-sm font-bold text-charcoal mb-3">
              اختاري اللون المناسب ليك: <span className="text-gold">{availableColors.find(c => c.id === selectedColor)?.name}</span>
            </label>
            <div className="flex justify-center gap-4 flex-row-reverse">
              {availableColors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-10 h-10 rounded-full transition-all duration-200 border-2 ${
                    selectedColor === color.id 
                      ? "scale-110 border-gold shadow-md ring-2 ring-gold/20" 
                      : "border-transparent opacity-80 hover:scale-105 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
          </div>
          {/* ---------------------------------- */}

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">الاسم الكامل</label>
            <input
              required
              type="text"
              placeholder="مثال: فاطمة الزهراء"
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-white shadow-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">رقم الهاتف</label>
            <input
              required
              type="tel"
              placeholder="06XXXXXXXX"
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-white shadow-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">المدينة</label>
            <input
              required
              type="text"
              placeholder="مثال: الدار البيضاء"
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-white shadow-sm transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-charcoal text-white font-bold py-5 rounded-xl shadow-lg hover:bg-black transition-colors active:scale-95 disabled:opacity-50 mt-2"
          >
            {status === "submitting" ? "جاري الإرسال..." : "تأكيد الطلب - 270 درهم"}
          </button>
          
          <p className="text-center text-xs text-charcoal/50 mt-4">
            🔒 معلوماتك في أمان. الدفع عند الاستلام بعد معاينة المنتج.
          </p>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;