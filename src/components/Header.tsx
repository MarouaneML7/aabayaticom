import logo from "@/assets/logo.png"; // تأكد من اسم الصورة

const Header = () => {
  return (
    <header className="w-full bg-white py-4 shadow-sm relative z-20">
      <div className="max-w-5xl mx-auto px-5 flex justify-center items-center">
        <img 
          src={logo} 
          alt="AabayatiCom Logo" 
          className="h-10 md:h-12 object-contain" // حجم صغير وأنيق
        />
      </div>
    </header>
  );
};

export default Header;