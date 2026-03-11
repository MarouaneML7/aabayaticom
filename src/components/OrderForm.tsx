import { useState, useEffect } from "react";

const availableColors = [
  { id: "green", name: "أخضر زمردي", hex: "#006A4E" },
  { id: "black", name: "أسود", hex: "#000000" },
  { id: "burgundy", name: "أحمر ملكي", hex: "#800020" },
  { id: "navy", name: "أزرق غامق", hex: "#000080" },
  { id: "fuchsia", name: "وردي", hex: "#FF00FF" },
];

const OrderForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedColor, setSelectedColor] = useState<string>("green");
  const [formData, setFormData] = useState({ name: "", phone: "", city: "" });
  const [phoneError, setPhoneError] = useState(false);
  
  const [hasInitiatedCheckout, setHasInitiatedCheckout] = useState(false);
  const [orderId] = useState(() => Date.now().toString(36) + Math.random().toString(36).substring(2));
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7XbTMaXhRsbXmyzpcnYEcqF6Agm738vW_6E1Cio8JF8jF5tr-oiG67OKb5swMhyLX/exec";

  const handleFormInteraction = () => {
    if (!hasInitiatedCheckout) {
      setHasInitiatedCheckout(true);
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'InitiateCheckout', { value: 270, currency: 'MAD' });
      }
    }
  };

  const sendDataToGoogle = async (isFinalSubmit: boolean = false) => {
    if ((!formData.name && !formData.phone && !formData.city) || phoneError) return;
    const data = new FormData();
    data.append("Date", new Date().toLocaleString());
    data.append("Color", availableColors.find(c => c.id === selectedColor)?.name || selectedColor);
    data.append("Name", formData.name);
    data.append("Phone", formData.phone);
    data.append("City", formData.city);
    data.append("OrderId", orderId);

    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: data, mode: "no-cors" });
      if (isFinalSubmit) {
        setStatus("success");
        if (typeof (window as any).fbq === 'function') {
          (window as any).fbq('track', 'Lead', { value: 270, currency: 'MAD' });
        }
      }
    } catch (error) {
      if (isFinalSubmit) setStatus("error");
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (formData.name || formData.phone || formData.city) sendDataToGoogle(false);
    }, 1500);
    return () => clearTimeout(delayDebounceFn);
  }, [formData, selectedColor]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "phone") {
      setPhoneError(!/^[+0-9\s]*$/.test(value) && value !== "");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneError) return;
    setStatus("submitting");
    sendDataToGoogle(true);
  };

  if (status === "success") {
    return (
      <section id="order" className="py-12 px-5 text-center bg-white">
        <div className="max-w-md mx-auto p-8 rounded-2xl border-2 border-green-500 bg-green-50 shadow-sm">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">تم تسجيل طلبك بنجاح!</h2>
          <p className="text-green-700 font-medium">شكراً لثقتك. سنتصل بك قريباً عبر الهاتف لتأكيد العنوان وإرسال العباية.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-16 px-5 bg-white relative border-t border-charcoal/5">
      <div className="max-w-md mx-auto relative z-10">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl text-charcoal mb-2">طلب العباية الآن</h2>
          <div className="inline-block bg-gold/10 text-gold font-bold px-4 py-2 rounded-full text-sm mb-2">
            ✨ فصالة فراشة مريحة - تناسب جميع المقاسات (Standard Size)
          </div>
          <p className="font-body text-charcoal/70">أدخلي معلوماتك أسفله وسنتصل بك لتأكيد الطلب</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-alabaster p-4 rounded-xl shadow-sm border border-charcoal/10">
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
                    selectedColor === color.id ? "scale-110 border-gold shadow-md ring-2 ring-gold/20" : "border-transparent opacity-80 hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">الاسم الكامل</label>
            <input 
              required 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              onFocus={handleFormInteraction}
              type="text" 
              placeholder="مثال: فاطمة الزهراء" 
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-alabaster shadow-sm" 
            />
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">رقم الهاتف</label>
            <input 
              required 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
              onFocus={handleFormInteraction}
              type="tel" 
              inputMode="tel"
              dir="ltr" 
              placeholder="06XXXXXXXX" 
              className={`w-full p-4 rounded-xl border outline-none text-right bg-alabaster shadow-sm ${phoneError ? "border-red-500 focus:border-red-500 text-red-600 ring-1 ring-red-500" : "border-charcoal/10 focus:border-gold"}`} 
            />
            {phoneError && <p className="text-red-500 text-right text-xs font-bold mt-2">المرجو إدخال أرقام فقط</p>}
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">المدينة</label>
            <input 
              required 
              name="city" 
              value={formData.city} 
              onChange={handleInputChange} 
              onFocus={handleFormInteraction}
              type="text" 
              placeholder="مثال: الدار البيضاء" 
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-alabaster shadow-sm" 
            />
          </div>

          <button type="submit" disabled={status === "submitting" || phoneError} className="w-full bg-charcoal text-white font-bold py-5 rounded-xl shadow-lg hover:bg-black transition-colors active:scale-95 mt-2">
            {status === "submitting" ? "جاري الإرسال..." : "تأكيد الطلب - 270 درهم"}
          </button>
          
          <div className="flex flex-col gap-4 mt-6 bg-green-50/50 p-5 rounded-xl border border-green-100">
            {/* تمت إضافة علامة التوصيل المجاني هنا */}
            <div className="flex items-center gap-3 justify-start text-sm font-bold text-charcoal/90">
              <span className="text-2xl drop-shadow-sm">🇲🇦</span>
              <span>توصيل مجاني (فابور) لجميع المدن المغربية</span>
            </div>
            <div className="flex items-center gap-3 justify-start text-sm font-bold text-charcoal/90">
              <span className="text-2xl drop-shadow-sm">🚚</span>
              <span>الدفع عند الاستلام، شوف السلعة عاد خلص</span>
            </div>
            <div className="flex items-center gap-3 justify-start text-sm font-bold text-charcoal/90">
              <span className="text-2xl drop-shadow-sm">🔒</span>
              <span>معلوماتك في أمان تام ولن يتم مشاركتها</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;