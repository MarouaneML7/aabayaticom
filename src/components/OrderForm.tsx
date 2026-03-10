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
  
  const [orderId] = useState(() => Date.now().toString(36) + Math.random().toString(36).substring(2));

  // ⚠️ PASTE YOUR GOOGLE SCRIPT URL HERE
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7XbTMaXhRsbXmyzpcnYEcqF6Agm738vW_6E1Cio8JF8jF5tr-oiG67OKb5swMhyLX/exec";

  const sendDataToGoogle = async (isFinalSubmit: boolean = false) => {
    // Don't auto-save if the phone number has an error or if all fields are empty
    if ((!formData.name && !formData.phone && !formData.city) || phoneError) return;

    const data = new FormData();
    data.append("Date", new Date().toLocaleString());
    data.append("Color", availableColors.find(c => c.id === selectedColor)?.name || selectedColor);
    data.append("Name", formData.name);
    data.append("Phone", formData.phone);
    data.append("City", formData.city);
    data.append("OrderId", orderId);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
      if (isFinalSubmit) setStatus("success");
    } catch (error) {
      console.error("Tracking Error:", error);
      if (isFinalSubmit) setStatus("error");
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (formData.name || formData.phone || formData.city) {
        sendDataToGoogle(false);
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [formData, selectedColor]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Phone Validation: Only allow numbers, spaces, and the + sign
    if (name === "phone") {
      if (!/^[+0-9\s]*$/.test(value) && value !== "") {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneError) return; // Prevent submission if there's an error
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
    <section id="order" className="py-16 px-5 bg-alabaster relative">
      <div className="max-w-md mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl text-charcoal mb-2">طلب العباية الآن</h2>
          <p className="font-body text-charcoal/70">أدخلي معلوماتك أسفله وسنتصل بك لتأكيد الطلب</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              type="text"
              placeholder="مثال: فاطمة الزهراء"
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-white shadow-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">رقم الهاتف</label>
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              type="tel"
              dir="ltr"
              placeholder="+212 6XX XXX XXX"
              className={`w-full p-4 rounded-xl border outline-none text-right bg-white shadow-sm transition-colors ${
                phoneError 
                  ? "border-red-500 focus:border-red-500 text-red-600 ring-1 ring-red-500" 
                  : "border-charcoal/10 focus:border-gold"
              }`}
            />
            {phoneError && (
              <p className="text-red-500 text-right text-xs font-bold mt-2">
                المرجو إدخال أرقام فقط (مسموح بعلامة +)
              </p>
            )}
          </div>

          <div>
            <label className="block text-right text-sm font-bold text-charcoal mb-1">المدينة</label>
            <input
              required
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              type="text"
              placeholder="مثال: الدار البيضاء"
              className="w-full p-4 rounded-xl border border-charcoal/10 focus:border-gold outline-none text-right bg-white shadow-sm transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting" || phoneError}
            className="w-full bg-charcoal text-white font-bold py-5 rounded-xl shadow-lg hover:bg-black transition-colors active:scale-95 disabled:opacity-50 mt-2"
          >
            {status === "submitting" ? "جاري الإرسال..." : "تأكيد الطلب - 270 درهم"}
          </button>
          
          {status === "error" && (
            <p className="text-red-500 text-center text-sm font-bold mt-2">وقع خطأ أثناء الإرسال. المرجو المحاولة مرة أخرى.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default OrderForm;