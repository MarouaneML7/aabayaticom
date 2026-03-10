import { useState } from "react";

const OrderForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate a submission - You can later connect this to a Google Sheet or your Affiliate API
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">الاسم الكامل</label>
            <input
              required
              type="text"
              placeholder="مثال: فاطمة الزهراء"
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-white shadow-sm"
            />
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">رقم الهاتف</label>
            <input
              required
              type="tel"
              placeholder="06XXXXXXXX"
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-white shadow-sm"
            />
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">المدينة</label>
            <input
              required
              type="text"
              placeholder="مثال: الدار البيضاء"
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-white shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-charcoal text-white font-bold py-5 rounded-xl shadow-lg hover:bg-black transition-colors active:scale-95 disabled:opacity-50"
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