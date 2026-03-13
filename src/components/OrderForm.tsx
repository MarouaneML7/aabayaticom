import { useState } from "react";

const OrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 🔴 إعدادات الـ API الخاصة بشبكة Chouraka / Starshops
    const API_KEY = "JAW_d9E89XlSRO0PYFLV1XkPWeRLt7YX0t0T";
    
    // ⚠️ تنبيه: هذا هو الرابط الافتراضي للشبكات في المغرب، إذا كان في إعدادات المنصة رابط آخر (Endpoint URL) قم بتبديله هنا.
    const API_URL = "https://api.chouraka.com/v1/affiliate/leads"; 

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          address: formData.address,
          
          // ⚠️ خطوة إجبارية: يجب أن تضع الـ ID الخاص بمنتج العباية كما هو مكتوب في منصة Starshops
          offer_id: "32", // استبدل هذه الكلمة برقم العرض الحقيقي
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // تفعيل Facebook Pixel وإخباره أن هناك مبيعة بـ 270 درهم
        if (typeof (window as any).fbq === 'function') {
          (window as any).fbq('track', 'Purchase', { currency: "MAD", value: 270.00 });
        }
      } else {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        alert("وقع خطأ فني أثناء إرسال الطلب، المرجو التواصل معنا عبر الواتساب لتسجيل طلبيتك.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  // شاشة النجاح التي تظهر بعد الطلب
  if (isSuccess) {
    return (
      <section className="py-16 px-5 bg-alabaster" id="order-form">
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl border border-green-500 shadow-lg">
          <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-md">✓</div>
          <h2 className="font-display text-3xl text-charcoal mb-3">تم تسجيل طلبك بنجاح!</h2>
          <p className="font-body text-charcoal/70 text-lg">
            شكراً لكِ. سنتصل بكِ في أقرب وقت من رقمنا لتأكيد الطلب قبل إرسال العباية.
          </p>
        </div>
      </section>
    );
  }

  // الاستمارة العادية
  return (
    <section className="py-16 px-5 bg-alabaster" id="order-form">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl text-charcoal mb-2">اطلبي العباية ديالك دابا</h2>
          <p className="font-body text-charcoal/70">عمري هاد المعلومات والتوصيل فابور حتال الدار</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md border border-charcoal/10 space-y-4">
          <div>
            <label className="block font-body text-sm font-bold text-charcoal mb-2" htmlFor="name">الاسم الكامل</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-alabaster border border-charcoal/20 rounded-xl px-4 py-3 text-right font-body focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder="مثال: فاطمة الزهراء"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-bold text-charcoal mb-2" htmlFor="phone">رقم الهاتف</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              dir="ltr"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-alabaster border border-charcoal/20 rounded-xl px-4 py-3 text-left font-body focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder="06 XX XX XX XX"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-bold text-charcoal mb-2" htmlFor="city">المدينة</label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-alabaster border border-charcoal/20 rounded-xl px-4 py-3 text-right font-body focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder="مثال: الدار البيضاء"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-bold text-charcoal mb-2" htmlFor="address">العنوان بالتفصيل</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-alabaster border border-charcoal/20 rounded-xl px-4 py-3 text-right font-body focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              placeholder="اسم الحي، الشارع، رقم الدار"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white font-bold font-body text-lg py-4 rounded-xl shadow-lg transition-all ${
              isLoading ? "bg-charcoal/50 cursor-not-allowed" : "bg-gold hover:bg-gold/90 active:scale-[0.98]"
            }`}
          >
            {isLoading ? "جاري الإرسال..." : "أكدي الطلب دابا - 270 درهم"}
          </button>
          
          <p className="text-center text-xs text-charcoal/50 font-body mt-4">
            🔒 معلوماتك آمنة ولن يتم مشاركتها مع أي جهة خارجية
          </p>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;