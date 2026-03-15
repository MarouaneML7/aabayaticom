import logo from "@/assets/logo.webp";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/60 backdrop-blur-lg border-b border-white/20 py-2 shadow-sm transition-all duration-300">
      <div className="max-w-5xl mx-auto px-5 flex justify-center items-center">
        <img 
          src={logo} 
          alt="AabayatiCom Logo" 
          // تم تصغير حجم اللوجو ليكون أنيقاً ولا يأخذ مساحة طولية كبيرة
          className="h-7 md:h-9 object-contain drop-shadow-sm" 
        />
      </div>
    </header>
  );
};

export default Header;